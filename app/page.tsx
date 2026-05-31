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
      {/* Hero Section: Deep Corporate Navy with Cyan Accent */}
      <div data-bg="#0D1B5E" data-text="#FFFFFF" data-accent="#00D4FF">
        <AlifHero />
      </div>

      {/* What We Do: Clean Light Off-White with Navy Accent */}
      <div data-bg="#F4F7FF" data-text="#0A1240" data-accent="#1A2E8A">
        <AlifWhatWeDo />
      </div>

      {/* Showcase / Horizontal Scroll: Deep Space Indigo with AI Purple Accent */}
      <div data-bg="#162454" data-text="#FFFFFF" data-accent="#8B5CF6">
        <AlifHorizontalScroll />
      </div>

      {/* Brand Trust Marquee: Light Mode */}
      <div data-bg="#F4F7FF" data-text="#0A1240" data-accent="#1A2E8A">
        <AlifMarquee />
      </div>

      {/* Core Principles: Soft Light Gray */}
      <div data-bg="#EEF1FC" data-text="#0A1240" data-accent="#1A2E8A">
        <AlifPrinciples />
      </div>

      {/* Stats Section: Deep Space Blue with Electric Green Metrics Accent */}
      <div data-bg="#091235" data-text="#FFFFFF" data-accent="#00FFB2">
        <AlifStats />
      </div>

      {/* Call to Action: Cyber Space Black with Cyan Accent */}
      <div data-bg="#050816" data-text="#FFFFFF" data-accent="#00D4FF">
        <AlifCTA />
      </div>
    </main>
  );
}
