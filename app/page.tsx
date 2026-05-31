import type { Metadata } from 'next';
import AlifHero from './components/AlifHero';
import AlifWhatWeDo from './components/AlifWhatWeDo';
import AlifHorizontalScroll from './components/AlifHorizontalScroll';
import AlifPrinciples from './components/AlifPrinciples';
import AlifMarquee from './components/AlifMarquee';
import AlifStats from './components/AlifStats';
import AlifCTA from './components/AlifCTA';

export const metadata: Metadata = {
  title: 'Alif Info Tech — Innovation Experts',
  description: 'Transforming Ideas into Powerful and Scalable Digital Solutions. AI, ERP, Cloud, Web & Mobile from Doha, Qatar.',
};

export default function Home() {
  return (
    <main>
      <AlifHero />
      <AlifWhatWeDo />
      <AlifHorizontalScroll />
      <AlifMarquee />
      <AlifPrinciples />
      <AlifStats />
      <AlifCTA />
    </main>
  );
}
