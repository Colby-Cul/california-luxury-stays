import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Admin — California Luxury Stays',
  description: 'Property management portal',
  robots: 'noindex, nofollow',
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
