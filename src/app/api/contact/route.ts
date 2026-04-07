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

    // Rate limiting: simple check via header (Vercel handles more robust limiting)
    const forwarded = request.headers.get("x-forwarded-for");
    const ip = forwarded?.split(",")[0] ?? "unknown";

    // Build notification email content
    const subject = `Booking Inquiry: ${body.property || "General"} — ${body.checkin || "Flexible dates"}`;
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
      `Submitted from: ${ip}`,
      `Time: ${new Date().toISOString()}`,
    ].join("\n");

    // Try Resend if API key is available
    const resendKey = process.env.RESEND_API_KEY;
    if (resendKey) {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { Authorization: `Bearer ${resendKey}`, "Content-Type": "application/json" },
        body: JSON.stringify({
          from: "California Luxury Stays <noreply@californialuxurystays.com>",
          to: ["stay@californialuxurystays.com"],
          reply_to: body.email,
          subject,
          text,
        }),
      });

      if (!res.ok) {
        console.error("Resend API error:", await res.text());
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
