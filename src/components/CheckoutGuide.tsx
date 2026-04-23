'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { properties } from '@/data/properties';
import NavigationBar from '@/components/NavigationBar';

interface ChecklistItem {
  id: string;
  label: string;
}

interface ChecklistGroup {
  title: string;
  items: ChecklistItem[];
}

const DEFAULT_CHECKLIST_GROUPS: ChecklistGroup[] = [
  {
    title: 'Cleaning & Kitchen',
    items: [
      { id: 'dishes', label: 'Load dishes into dishwasher and start it' },
      { id: 'counters', label: 'Wipe down kitchen counters' },
      { id: 'stove', label: 'Clean stove top' },
    ],
  },
  {
    title: 'Linens & Laundry',
    items: [
      { id: 'beds', label: 'Strip all beds' },
      { id: 'linens', label: 'Pile linens in laundry room' },
    ],
  },
  {
    title: 'Trash & Recycling',
    items: [
      { id: 'trash', label: 'Take all trash to outdoor bins' },
      { id: 'recycling', label: 'Separate recycling into recycling bins' },
    ],
  },
  {
    title: 'Before You Leave',
    items: [
      { id: 'lights', label: 'Turn off all lights' },
      { id: 'fans', label: 'Turn off all fans' },
      { id: 'thermostat', label: 'Set thermostat to 65\u00B0F' },
      { id: 'doors', label: 'Lock all doors and windows' },
      { id: 'garage', label: 'Ensure garage door is closed' },
      { id: 'furniture', label: 'Return any moved furniture to original position' },
    ],
  },
  {
    title: 'Final Check',
    items: [
      { id: 'belongings', label: 'Check for personal belongings' },
      { id: 'chargers', label: 'Check for chargers and cables' },
      { id: 'keys', label: 'Return any keys provided' },
      { id: 'feedback', label: 'Leave us feedback (see below!)' },
    ],
  },
];

export default function CheckoutGuide({ propertyId }: { propertyId: string }) {
  const property = properties[propertyId];

  // Build checklist from property-specific tasks or fall back to default
  const checklistGroups = useMemo<ChecklistGroup[]>(() => {
    if (property?.checkoutTasks && property.checkoutTasks.length > 0) {
      const grouped: Record<string, ChecklistItem[]> = {};
      for (const task of property.checkoutTasks) {
        if (!grouped[task.category]) grouped[task.category] = [];
        grouped[task.category].push({ id: task.id, label: task.label });
      }
      return Object.entries(grouped).map(([title, items]) => ({ title, items }));
    }
    return DEFAULT_CHECKLIST_GROUPS;
  }, [property]);

  const allItemIds = useMemo(
    () => checklistGroups.flatMap((g) => g.items.map((i) => i.id)),
    [checklistGroups]
  );

  const [checked, setChecked] = useState<Set<string>>(new Set());

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-luxury-muted">Property not found.</p>
      </div>
    );
  }

  const toggle = (id: string) => {
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const total = allItemIds.length;
  const done = checked.size;
  const allDone = done === total;
  const progress = (done / total) * 100;

  return (
    <>
      <NavigationBar currentProperty={propertyId} mode="checkout" />

      <main className="pt-20 pb-12 px-4 max-w-2xl mx-auto min-h-screen">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 className="font-serif text-3xl md:text-4xl text-white mb-2">Checkout Guide</h1>
          <p className="text-luxury-muted mb-6">{property.name}</p>

          {/* Progress */}
          <div className="luxury-card p-4 mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-luxury-muted">
                {done} of {total} tasks complete
              </span>
              <span className="text-sm text-gold">{Math.round(progress)}%</span>
            </div>
            <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-gold-dark to-gold-light rounded-full"
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.4 }}
              />
            </div>
          </div>

          {/* Checklist */}
          <div className="space-y-8">
            {checklistGroups.map((group) => (
              <div key={group.title}>
                <h2 className="text-gold text-sm uppercase tracking-wider mb-3">{group.title}</h2>
                <div className="luxury-card divide-y divide-white/5">
                  {group.items.map((item) => {
                    const isChecked = checked.has(item.id);
                    return (
                      <button
                        key={item.id}
                        onClick={() => toggle(item.id)}
                        className="w-full flex items-center gap-4 p-4 text-left hover:bg-white/[0.02] transition-colors"
                      >
                        <div
                          className={`w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 transition-all ${
                            isChecked ? 'bg-gold border-gold' : 'border-white/20'
                          }`}
                        >
                          {isChecked && (
                            <svg className="w-3 h-3 text-luxury-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                        </div>
                        <span
                          className={`text-sm transition-all ${
                            isChecked ? 'line-through text-luxury-muted/50' : 'text-white'
                          }`}
                        >
                          {item.label}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Thank you / review section */}
          <AnimatePresence>
            {allDone && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mt-10 text-center"
              >
                <div className="luxury-card p-8 border-gold/20 border">
                  <h2 className="font-serif text-2xl text-white mb-3">You&apos;re All Set!</h2>
                  <p className="text-luxury-muted mb-6">
                    Thank you for taking care of the property. We hope you had a wonderful stay!
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href={property.reviewUrls.airbnb}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="luxury-button text-center"
                    >
                      Review on Airbnb
                    </a>
                    <a
                      href={property.reviewUrls.google}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 rounded-lg border border-gold/30 text-gold hover:bg-gold/10 transition-colors text-center"
                    >
                      Review on Google
                    </a>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Print button */}
          <div className="mt-8 flex justify-center gap-4 no-print">
            <button
              onClick={() => window.print()}
              className="text-sm text-luxury-muted hover:text-gold transition-colors flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
              </svg>
              Print Checklist
            </button>
            <Link
              href={`/welcome/${propertyId}`}
              className="text-sm text-luxury-muted hover:text-gold transition-colors"
            >
              &larr; Back to Welcome Book
            </Link>
          </div>
        </motion.div>
      </main>
    </>
  );
}
