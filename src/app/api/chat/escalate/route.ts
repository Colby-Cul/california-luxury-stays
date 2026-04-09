import { NextRequest, NextResponse } from "next/server";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export async function POST(req: NextRequest) {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    return NextResponse.json({ error: "Escalation is not configured." }, { status: 503 });
  }

  const { messages, guestName } = (await req.json()) as {
    messages: Message[];
    guestName?: string;
  };

  // Build a readable conversation summary for Telegram
  const header = `🏔 *New Guest Chat Escalation*\n${guestName ? `Guest: ${guestName}\n` : ""}Time: ${new Date().toLocaleString("en-US", { timeZone: "America/Los_Angeles" })} PT\n\n`;

  const transcript = messages
    .slice(-10) // Last 10 messages for context
    .map((m) => `${m.role === "user" ? "👤 Guest" : "🤖 AI"}: ${m.content}`)
    .join("\n\n");

  const text = header + transcript;

  const telegramResponse = await fetch(
    `https://api.telegram.org/bot${botToken}/sendMessage`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        parse_mode: "Markdown",
      }),
    }
  );

  if (!telegramResponse.ok) {
    console.error("Telegram API error:", await telegramResponse.text());
    return NextResponse.json({ error: "Failed to escalate." }, { status: 502 });
  }

  return NextResponse.json({ success: true });
}
