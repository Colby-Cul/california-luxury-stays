import CheckoutGuide from '@/components/CheckoutGuide';

export function generateStaticParams() {
  return [{ property: 'graeagle' }, { property: 'northstar' }];
}

export default function CheckoutPage({ params }: { params: { property: string } }) {
  return <CheckoutGuide propertyId={params.property} />;
}
