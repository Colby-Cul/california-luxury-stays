import ContactsPageClient from './_ContactsPage';

export function generateStaticParams() {
  return [{ tenantId: 'cls' }];
}

export default function ContactsPage({ params }: { params: { tenantId: string } }) {
  return <ContactsPageClient tenantId={params.tenantId} />;
}
