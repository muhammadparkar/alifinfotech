import AlifScrollColorSystem from './components/AlifScrollColorSystem';
import AlifCursor from './components/AlifCursor';
import AlifNav from './components/AlifNav';
import AlifHero from './components/AlifHero';
import AlifWhatWeDo from './components/AlifWhatWeDo';
import AlifHorizontalScroll from './components/AlifHorizontalScroll';
import AlifPrinciples from './components/AlifPrinciples';
import AlifStats from './components/AlifStats';
import AlifMarquee from './components/AlifMarquee';
import AlifCTA from './components/AlifCTA';
import AlifFooter from './components/AlifFooter';

export default function Home() {
  return (
    <AlifScrollColorSystem>
      {/* Custom magnetic cursor */}
      <AlifCursor />

      {/* Fixed navigation */}
      <AlifNav />

      {/* Main content */}
      <main>
        {/* 1. Hero — full viewport */}
        <AlifHero />

        {/* 2. What we do — two column with image cluster */}
        <AlifWhatWeDo />

        {/* 3. Horizontal scroll services */}
        <AlifHorizontalScroll />

        {/* 4. How we work — principles list */}
        <AlifPrinciples />

        {/* 5. Marquee ticker */}
        <AlifMarquee />

        {/* 6. Stats counter */}
        <AlifStats />

        {/* 7. CTA / Contact */}
        <AlifCTA />
      </main>

      {/* Footer — always deep navy */}
      <AlifFooter />
    </AlifScrollColorSystem>
  );
}
