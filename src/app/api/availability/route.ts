import { NextRequest, NextResponse } from "next/server";

const API_KEY = process.env.LODGIFY_API_KEY || "";
const BASE = "https://api.lodgify.com";

export async function GET(req: NextRequest) {
  const propertyId = req.nextUrl.searchParams.get("propertyId");
  if (!propertyId) {
    return NextResponse.json({ error: "propertyId required" }, { status: 400 });
  }

  if (!API_KEY) {
    return NextResponse.json({ error: "LODGIFY_API_KEY not configured" }, { status: 500 });
  }

  const today = new Date();
  const end = new Date(today);
  end.setDate(end.getDate() + 180);

  const startStr = today.toISOString().split("T")[0];
  const endStr = end.toISOString().split("T")[0];

  try {
    const res = await fetch(
      `${BASE}/v2/availability/${propertyId}?start=${startStr}&end=${endStr}`,
      {
        headers: { "X-ApiKey": API_KEY, Accept: "application/json" },
        next: { revalidate: 3600 }, // cache 1 hour
      }
    );

    if (!res.ok) {
      return NextResponse.json({ error: `Lodgify API error: ${res.status}` }, { status: res.status });
    }

    const data = await res.json();

    // Flatten periods into simple available/booked dates
    const periods: { start: string; end: string; available: boolean }[] = [];
    for (const room of Array.isArray(data) ? data : []) {
      for (const p of room.periods || []) {
        periods.push({
          start: p.start,
          end: p.end,
          available: p.available === 1,
        });
      }
    }

    return NextResponse.json({
      propertyId,
      startDate: startStr,
      endDate: endStr,
      periods,
    });
  } catch (e: unknown) {
    const message = e instanceof Error ? e.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
