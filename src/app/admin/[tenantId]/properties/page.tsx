import PropertiesPageClient from './_PropertiesPage';

export function generateStaticParams() {
  return [{ tenantId: 'cls' }];
}

export default function PropertiesPage({ params }: { params: { tenantId: string } }) {
  return <PropertiesPageClient tenantId={params.tenantId} />;
}
