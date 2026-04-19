import WelcomeBook from '@/components/WelcomeBook';

export function generateStaticParams() {
  return [{ property: 'graeagle' }, { property: 'northstar' }];
}

export default function WelcomeBookPage({ params }: { params: { property: string } }) {
  return <WelcomeBook propertyId={params.property} />;
}
