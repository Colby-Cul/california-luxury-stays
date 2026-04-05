"use client";

import { useEffect, useState } from "react";

interface Period {
  start: string;
  end: string;
  available: boolean;
}

export default function AvailabilityCalendar({ propertyId }: { propertyId: number }) {
  const [periods, setPeriods] = useState<Period[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [monthOffset, setMonthOffset] = useState(0);

  useEffect(() => {
    fetch(`/api/availability?propertyId=${propertyId}`)
      .then((r) => r.json())
      .then((d) => {
        if (d.error) setError(d.error);
        else setPeriods(d.periods || []);
      })
      .catch(() => setError("Could not load availability"))
      .finally(() => setLoading(false));
  }, [propertyId]);

  const getDateStatus = (dateStr: string): "available" | "booked" | "unknown" => {
    for (const p of periods) {
      if (dateStr >= p.start && dateStr < p.end) {
        return p.available ? "available" : "booked";
      }
    }
    return "unknown";
  };

  const today = new Date();
  const viewMonth = new Date(today.getFullYear(), today.getMonth() + monthOffset, 1);
  const year = viewMonth.getFullYear();
  const month = viewMonth.getMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDay = new Date(year, month, 1).getDay();
  const monthName = viewMonth.toLocaleDateString("en-US", { month: "long", year: "numeric" });

  const days: (number | null)[] = [];
  for (let i = 0; i < firstDay; i++) days.push(null);
  for (let d = 1; d <= daysInMonth; d++) days.push(d);

  if (loading) {
    return (
      <div className="rounded-xl border border-gold-400/10 bg-charcoal-700 p-6 text-center">
        <p className="text-sm text-stone-400">Loading availability...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-xl border border-gold-400/10 bg-charcoal-700 p-6 text-center">
        <p className="text-sm text-stone-400">Availability calendar unavailable</p>
        <p className="text-xs text-stone-500 mt-1">{error}</p>
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-gold-400/10 bg-charcoal-700 p-4">
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={() => setMonthOffset((o) => Math.max(o - 1, 0))}
          disabled={monthOffset === 0}
          className="text-sm text-gold-400 hover:text-gold-300 disabled:text-stone-600 transition px-2"
        >
          &larr;
        </button>
        <p className="text-sm font-semibold text-white">{monthName}</p>
        <button
          onClick={() => setMonthOffset((o) => Math.min(o + 1, 5))}
          disabled={monthOffset >= 5}
          className="text-sm text-gold-400 hover:text-gold-300 disabled:text-stone-600 transition px-2"
        >
          &rarr;
        </button>
      </div>

      <div className="grid grid-cols-7 gap-1 text-center">
        {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((d) => (
          <div key={d} className="text-[10px] text-stone-500 font-medium py-1">{d}</div>
        ))}
        {days.map((day, i) => {
          if (day === null) return <div key={`e-${i}`} />;
          const dateStr = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
          const isPast = dateStr < today.toISOString().split("T")[0];
          const status = isPast ? "past" : getDateStatus(dateStr);

          let bg = "bg-charcoal-600"; // unknown
          let text = "text-stone-400";
          if (status === "available") { bg = "bg-green-900/30 border border-green-500/20"; text = "text-green-300"; }
          if (status === "booked") { bg = "bg-red-900/20 border border-red-500/15"; text = "text-red-400/60"; }
          if (status === "past") { bg = "bg-charcoal-800"; text = "text-stone-600"; }

          return (
            <div
              key={dateStr}
              className={`rounded-md py-1.5 text-xs font-medium ${bg} ${text}`}
              title={`${dateStr}: ${status === "available" ? "Available" : status === "booked" ? "Booked" : status === "past" ? "Past" : "Unknown"}`}
            >
              {day}
            </div>
          );
        })}
      </div>

      <div className="flex gap-4 mt-3 justify-center text-[10px] text-stone-500">
        <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-sm bg-green-900/50 border border-green-500/30" /> Available</span>
        <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-sm bg-red-900/30 border border-red-500/20" /> Booked</span>
      </div>
    </div>
  );
}
