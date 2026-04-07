import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email?.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Valid email required." }, { status: 400 });
    }

    // Log subscriber (visible in Vercel function logs)
    console.log(`=== NEWSLETTER SIGNUP: ${email} at ${new Date().toISOString()} ===`);

    // If a mailing list service is configured (e.g., Mailchimp, ConvertKit), send here:
    // const listKey = process.env.MAILCHIMP_API_KEY;
    // if (listKey) { ... }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Failed to subscribe." }, { status: 500 });
  }
}
