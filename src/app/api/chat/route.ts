import { NextRequest, NextResponse } from "next/server";
import { buildSystemPrompt } from "@/lib/chat-context";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export async function POST(req: NextRequest) {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "Chat is temporarily unavailable." }, { status: 503 });
  }

  const { messages } = (await req.json()) as { messages: Message[] };

  if (!messages || !Array.isArray(messages) || messages.length === 0) {
    return NextResponse.json({ error: "No messages provided." }, { status: 400 });
  }

  // Limit conversation length to prevent abuse
  const recentMessages = messages.slice(-20);

  const response = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": apiKey,
      "anthropic-version": "2023-06-01",
    },
    body: JSON.stringify({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 512,
      system: buildSystemPrompt(),
      messages: recentMessages.map((m) => ({
        role: m.role,
        content: m.content,
      })),
    }),
  });

  if (!response.ok) {
    console.error("Anthropic API error:", response.status, await response.text());
    return NextResponse.json({ error: "Chat is temporarily unavailable." }, { status: 502 });
  }

  const data = await response.json();
  const assistantMessage = data.content?.[0]?.text || "I'm sorry, I couldn't process that. Please try again.";

  return NextResponse.json({ message: assistantMessage });
}
