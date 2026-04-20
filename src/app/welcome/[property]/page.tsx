import { Suspense } from 'react';
import WelcomeBook from '@/components/WelcomeBook';

export function generateStaticParams() {
  return [{ property: 'graeagle' }, { property: 'northstar' }];
}

export default function WelcomeBookPage({ params }: { params: { property: string } }) {
  return (
    <Suspense fallback={<div className="min-h-screen" />}>
      <WelcomeBook propertyId={params.property} />
    </Suspense>
  );
}
