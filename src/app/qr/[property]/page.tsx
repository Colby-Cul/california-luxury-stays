import QRPage from '@/components/QRPage';

export function generateStaticParams() {
  return [{ property: 'graeagle' }, { property: 'northstar' }];
}

export default function QRCodePage({ params }: { params: { property: string } }) {
  return <QRPage propertyId={params.property} />;
}
