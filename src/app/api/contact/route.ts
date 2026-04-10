import { NextRequest, NextResponse } from "next/server";

interface ContactForm {
  name: string;
  email: string;
  phone?: string;
  property?: string;
  checkin?: string;
  checkout?: string;
  guests?: string;
  message?: string;
  _honey?: string; // honeypot
}

const AGENTMAIL_API_KEY = process.env.AGENTMAIL_API_KEY;
const CHRISTINE_INBOX = "christine.cls@agentmail.to";

export async function POST(request: NextRequest) {
  try {
    const body: ContactForm = await request.json();

    // Honeypot check — if filled, it's a bot
    if (body._honey) {
      return NextResponse.json({ success: true }); // silently succeed
    }

    // Validate required fields
    if (!body.name?.trim() || !body.email?.trim()) {
      return NextResponse.json({ error: "Name and email are required." }, { status: 400 });
    }

    // Basic email format check
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
      return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 });
    }

    const subject = `Booking Inquiry: ${body.property || "General"} — ${body.name}`;
    const text = [
      `New booking inquiry from californialuxurystays.com`,
      ``,
      `Name: ${body.name}`,
      `Email: ${body.email}`,
      `Phone: ${body.phone || "Not provided"}`,
      `Property: ${body.property || "Not specified"}`,
      `Check-in: ${body.checkin || "Flexible"}`,
      `Check-out: ${body.checkout || "Flexible"}`,
      `Guests: ${body.guests || "Not specified"}`,
      ``,
      `Message:`,
      body.message || "(no message)",
      ``,
      `---`,
      `Time: ${new Date().toLocaleString("en-US", { timeZone: "America/Los_Angeles" })} PT`,
    ].join("\n");

    const html = `
      <div style="font-family: sans-serif; max-width: 600px;">
        <h2 style="color: #C9A96E;">New Booking Inquiry</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 8px 0; color: #888; width: 100px;">Name</td><td style="padding: 8px 0;"><strong>${body.name}</strong></td></tr>
          <tr><td style="padding: 8px 0; color: #888;">Email</td><td style="padding: 8px 0;"><a href="mailto:${body.email}">${body.email}</a></td></tr>
          <tr><td style="padding: 8px 0; color: #888;">Phone</td><td style="padding: 8px 0;">${body.phone || "Not provided"}</td></tr>
          <tr><td style="padding: 8px 0; color: #888;">Property</td><td style="padding: 8px 0;">${body.property || "Not specified"}</td></tr>
          <tr><td style="padding: 8px 0; color: #888;">Check-in</td><td style="padding: 8px 0;">${body.checkin || "Flexible"}</td></tr>
          <tr><td style="padding: 8px 0; color: #888;">Check-out</td><td style="padding: 8px 0;">${body.checkout || "Flexible"}</td></tr>
          <tr><td style="padding: 8px 0; color: #888;">Guests</td><td style="padding: 8px 0;">${body.guests || "Not specified"}</td></tr>
        </table>
        <div style="margin-top: 16px; padding: 12px; background: #f5f5f5; border-radius: 8px;">
          <p style="color: #888; margin: 0 0 4px;">Message:</p>
          <p style="margin: 0;">${body.message || "(no message)"}</p>
        </div>
      </div>
    `;

    // Send to Christine's AgentMail inbox
    if (AGENTMAIL_API_KEY) {
      const res = await fetch(`https://api.agentmail.to/v0/inboxes/${CHRISTINE_INBOX}/messages`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${AGENTMAIL_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          to: CHRISTINE_INBOX,
          from_: body.email,
          subject,
          text,
          html,
          labels: ["inquiry", "website"],
        }),
      });

      if (!res.ok) {
        console.error("AgentMail API error:", await res.text());
        return NextResponse.json({ error: "Failed to send inquiry. Please email us directly." }, { status: 500 });
      }

      return NextResponse.json({ success: true });
    }

    // Fallback: log to server console (visible in Vercel function logs)
    console.log("=== CONTACT FORM SUBMISSION ===");
    console.log(text);
    console.log("=== END SUBMISSION ===");

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json({ error: "An unexpected error occurred." }, { status: 500 });
  }
}
