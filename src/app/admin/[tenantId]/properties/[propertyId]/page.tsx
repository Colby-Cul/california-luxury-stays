import PropertyEditorClient from './_PropertyEditor';

export function generateStaticParams() {
  return [
    { tenantId: 'cls', propertyId: 'graeagle' },
    { tenantId: 'cls', propertyId: 'northstar' },
  ];
}

export default function PropertyEditorPage({
  params,
}: {
  params: { tenantId: string; propertyId: string };
}) {
  return <PropertyEditorClient tenantId={params.tenantId} propertyId={params.propertyId} />;
}
