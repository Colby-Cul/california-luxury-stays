'use client';

import { QRCodeSVG } from 'qrcode.react';
import { properties } from '@/data/properties';

const BASE_URL = 'https://colby-cul.github.io/california-luxury-stays';

interface QRConfig {
  label: string;
  url: string;
  description: string;
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
      url: `${BASE_URL}/welcome/${propertyId}`,
      description: 'Scan to view the full guest welcome guide',
    },
    {
      label: 'Checkout Guide',
      url: `${BASE_URL}/checkout/${propertyId}`,
      description: 'Scan for departure checklist',
    },
  ];

  return (
    <main className="min-h-screen py-16 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-3xl md:text-4xl text-white mb-2">QR Codes</h1>
          <p className="text-gold">{property.name}</p>
          <p className="text-luxury-muted text-sm mt-2">{property.subtitle}</p>
        </div>

        {/* QR Code Cards */}
        <div className="grid sm:grid-cols-2 gap-8 mb-12">
          {qrCodes.map((qr) => (
            <div key={qr.label} className="luxury-card p-8 text-center">
              <h2 className="font-serif text-xl text-white mb-6">{qr.label}</h2>
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-white rounded-2xl">
                  <QRCodeSVG
                    value={qr.url}
                    size={180}
                    level="H"
                    includeMargin={false}
                    fgColor="#0a0a0a"
                    bgColor="#ffffff"
                  />
                </div>
              </div>
              <p className="text-luxury-muted text-sm mb-3">{qr.description}</p>
              <a
                href={qr.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold text-xs font-mono break-all hover:underline"
              >
                {qr.url}
              </a>
            </div>
          ))}
        </div>

        {/* Print instructions */}
        <div className="luxury-card p-6 text-center no-print">
          <p className="text-luxury-muted text-sm mb-4">
            Print these QR codes and place them at the property for guests to scan.
          </p>
          <button
            onClick={() => window.print()}
            className="luxury-button"
          >
            Print QR Codes
          </button>
        </div>

        {/* Property Links */}
        <div className="mt-8 text-center no-print">
          <p className="text-luxury-muted text-xs mb-3">Switch property:</p>
          <div className="flex justify-center gap-4">
            <a href={`/california-luxury-stays/qr/graeagle`} className={`text-sm ${propertyId === 'graeagle' ? 'text-gold' : 'text-luxury-muted hover:text-white'} transition-colors`}>
              Graeagle
            </a>
            <span className="text-luxury-muted">·</span>
            <a href={`/california-luxury-stays/qr/northstar`} className={`text-sm ${propertyId === 'northstar' ? 'text-gold' : 'text-luxury-muted hover:text-white'} transition-colors`}>
              Northstar
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
