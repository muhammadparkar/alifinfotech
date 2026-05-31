import type { Metadata } from 'next';
import PartnersPageClient from './PartnersPageClient';

export const metadata: Metadata = {
  title: 'Technology Partners',
  description: 'Certified implementation alliances with FACT ERP, Logic ERP, Wings ERP, Roadmap ERP, Insta HIS, Autorox, and RateGain.',
};

export default function PartnersPage() {
  return <PartnersPageClient />;
}
