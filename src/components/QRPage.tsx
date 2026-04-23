'use client';

import { QRCodeSVG } from 'qrcode.react';
import { properties } from '@/data/properties';
import NavigationBar from '@/components/NavigationBar';

const BASE_URL = 'https://colby-cul.github.io/california-luxury-stays';

interface QRConfig {
  label: string;
  sublabel: string;
  url: string;
  description: string;
  icon: string;
}

export default function QRPage({ propertyId }: { propertyId: string }) {
  const property = properties[propertyId];

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-luxury-muted">Property not found.</p>
      </div>
    );
  }

  const qrCodes: QRConfig[] = [
    {
      label: 'Welcome Book',
      sublabel: propertyId === 'graeagle' ? 'Graeagle' : 'Northstar',
      url: `${BASE_URL}/welcome/${propertyId}`,
      description: 'Full guest guide — WiFi, house systems, local recs, and more',
      icon: '🏠',
    },
    {
      label: 'Checkout Guide',
      sublabel: propertyId === 'graeagle' ? 'Graeagle' : 'Northstar',
      url: `${BASE_URL}/checkout/${propertyId}`,
      description: 'Step-by-step departure checklist',
      icon: '✅',
    },
  ];

  return (
    <>
      <NavigationBar currentProperty={propertyId} mode="qr" />
      <main className="min-h-screen py-20 px-4">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <h1 className="font-serif text-3xl md:text-4xl text-white mb-2">Guest QR Codes</h1>
            <p className="text-gold text-lg">{property.name}</p>
            <p className="text-luxury-muted text-sm mt-1">{property.subtitle}</p>
            <p className="text-luxury-muted/60 text-xs mt-3 no-print">
              Print and place in the unit — guests scan to access their guide.
            </p>
          </div>

          {/* QR Code Cards — 2-up print layout */}
          <div className="grid sm:grid-cols-2 gap-6 mb-10">
            {qrCodes.map((qr) => (
              <div
                key={qr.label}
                className="luxury-card p-6 sm:p-8 text-center flex flex-col items-center"
                style={{ breakInside: 'avoid' }}
              >
                <div className="text-3xl mb-3">{qr.icon}</div>
                <h2 className="font-serif text-xl text-white mb-1">{qr.label}</h2>
                <p className="text-gold text-sm mb-5">{qr.sublabel}</p>
                <div className="flex justify-center mb-5">
                  <div className="p-3 bg-white rounded-xl shadow-lg">
                    <QRCodeSVG
                      value={qr.url}
                      size={200}
                      level="H"
                      includeMargin={false}
                      fgColor="#0a0a0a"
                      bgColor="#ffffff"
                    />
                  </div>
                </div>
                <p className="text-luxury-muted text-xs mb-3 max-w-[180px]">{qr.description}</p>
                <a
                  href={qr.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold/70 text-[10px] font-mono break-all hover:text-gold transition-colors"
                >
                  {qr.url}
                </a>
              </div>
            ))}
          </div>

          {/* Print / actions */}
          <div className="luxury-card p-5 text-center no-print">
            <p className="text-luxury-muted text-sm mb-4">
              Print this page and cut apart the QR cards for placement in the unit.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={() => window.print()}
                className="luxury-button"
              >
                🖨️ Print QR Codes
              </button>
            </div>
          </div>

          {/* Property switcher */}
          <div className="mt-8 text-center no-print">
            <p className="text-luxury-muted text-xs mb-3">Other property:</p>
            <div className="flex justify-center gap-6">
              {['graeagle', 'northstar'].map((pid) => (
                <a
                  key={pid}
                  href={`/california-luxury-stays/qr/${pid}`}
                  className={`text-sm capitalize transition-colors ${
                    propertyId === pid
                      ? 'text-gold cursor-default'
                      : 'text-luxury-muted hover:text-white'
                  }`}
                >
                  {pid === 'graeagle' ? 'Graeagle' : 'Northstar'}
                </a>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
