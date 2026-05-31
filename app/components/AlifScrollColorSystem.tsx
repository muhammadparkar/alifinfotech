'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';


// ─── Color interpolation ────────────────────────────────────────
function hexToRgb(hex: string): [number, number, number] {
  const h = hex.replace('#', '');
  const int = parseInt(h, 16);
  return [(int >> 16) & 255, (int >> 8) & 255, int & 255];
}

function lerpColor(a: string, b: string, t: number): string {
  const [ar, ag, ab] = hexToRgb(a);
  const [br, bg, bb] = hexToRgb(b);
  const r = Math.round(ar + (br - ar) * t);
  const g = Math.round(ag + (bg - ag) * t);
  const bl = Math.round(ab + (bb - ab) * t);
  return `rgb(${r},${g},${bl})`;
}

// ─── Dynamic Section-Based Scroll Color System ─────────────────────
export default function AlifScrollColorSystem({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const rafRef = useRef<number>(0);

  useEffect(() => {
    // 1. Immediate Page Transition Calibration
    // Grab the first element on the new page and instantly set the background to avoid flashes
    const firstEl = document.querySelector('[data-bg]');
    if (firstEl) {
      const bg = firstEl.getAttribute('data-bg') || '#F4F7FF';
      const text = firstEl.getAttribute('data-text') || '#0A1240';
      const accent = firstEl.getAttribute('data-accent') || '#00D4FF';
      const root = document.documentElement;
      
      // Calculate responsive card background and border values immediately
      const cardBgBase = text === '#FFFFFF' ? '#0D1B5E' : '#FFFFFF';
      const cardBgAlpha = text === '#FFFFFF' ? 0.3 : 0.75;
      const cardBg = `rgba(${hexToRgb(cardBgBase).join(',')},${cardBgAlpha})`;
      
      const cardBorderBase = text === '#FFFFFF' ? '#00D4FF' : '#0D1B5E';
      const cardBorderAlpha = text === '#FFFFFF' ? 0.15 : 0.08;
      const cardBorder = `rgba(${hexToRgb(cardBorderBase).join(',')},${cardBorderAlpha})`;

      root.style.setProperty('--bg', bg);
      root.style.setProperty('--text', text);
      root.style.setProperty('--accent', accent);
      root.style.setProperty('--card-bg', cardBg);
      root.style.setProperty('--card-border', cardBorder);
      document.body.style.background = bg;
      document.body.style.color = text;
    } else {
      // Default light fallback if no elements with data-bg are present
      const root = document.documentElement;
      root.style.setProperty('--bg', '#F4F7FF');
      root.style.setProperty('--text', '#0A1240');
      root.style.setProperty('--accent', '#00D4FF');
      root.style.setProperty('--card-bg', 'rgba(255,255,255,0.75)');
      root.style.setProperty('--card-border', 'rgba(13,27,94,0.08)');
      document.body.style.background = '#F4F7FF';
      document.body.style.color = '#0A1240';
    }

    const update = () => {
      // Find all elements containing data-bg color markers
      const elements = Array.from(document.querySelectorAll('[data-bg]'));

      if (elements.length === 0) {
        // Default light theme fallback if no markers are present
        const root = document.documentElement;
        root.style.setProperty('--bg', '#F4F7FF');
        root.style.setProperty('--text', '#0A1240');
        root.style.setProperty('--accent', '#00D4FF');
        document.body.style.background = '#F4F7FF';
        document.body.style.color = '#0A1240';
        return;
      }

      const scrollY = window.scrollY;
      const triggerPos = scrollY + window.innerHeight * 0.35;

      // Map elements to absolute top coordinates and colors
      const sections = elements.map(el => {
        const rect = el.getBoundingClientRect();
        const absoluteTop = rect.top + scrollY;
        return {
          top: absoluteTop,
          bg: el.getAttribute('data-bg') || '#F4F7FF',
          text: el.getAttribute('data-text') || '#0A1240',
          accent: el.getAttribute('data-accent') || '#00D4FF',
        };
      });

      // Sort sections by their top coordinate
      sections.sort((a, b) => a.top - b.top);

      let lo = sections[0];
      let hi = sections[sections.length - 1];

      // If triggerPos is above first section top, lock to first section colors
      if (triggerPos <= lo.top) {
        hi = lo;
      } 
      // If triggerPos is below last section top, lock to last section colors
      else if (triggerPos >= hi.top) {
        lo = hi;
      } 
      // Otherwise, find straddling sections and interpolate
      else {
        for (let i = 0; i < sections.length - 1; i++) {
          if (
            triggerPos >= sections[i].top &&
            triggerPos <= sections[i + 1].top
          ) {
            lo = sections[i];
            hi = sections[i + 1];
            break;
          }
        }
      }

      let t = 0;
      if (hi.top === lo.top) {
        t = 0;
      } else {
        const transitionWindow = 250; // Snappy 250px fade window
        const startTransition = hi.top - transitionWindow;

        if (triggerPos < startTransition) {
          t = 0; // Lock to previous section colors
        } else if (triggerPos >= hi.top) {
          t = 1; // Lock to current section colors
        } else {
          // Smooth ease-in-out transition over the 250px window
          const progress = (triggerPos - startTransition) / transitionWindow;
          // Apply a smooth sinusoidal ease curve for fluid color morphing
          t = Math.sin((progress * Math.PI) / 2);
        }
      }

      const bg     = lerpColor(lo.bg,     hi.bg,     t);
      const text   = lerpColor(lo.text,   hi.text,   t);
      const accent = lerpColor(lo.accent, hi.accent, t);

      // Card background and border interpolation
      const loCardBg = lo.text === '#FFFFFF' ? '#0D1B5E' : '#FFFFFF';
      const hiCardBg = hi.text === '#FFFFFF' ? '#0D1B5E' : '#FFFFFF';
      const cardBgBase = lerpColor(loCardBg, hiCardBg, t);
      const cardBgAlpha = lo.text === '#FFFFFF' ? 0.3 + (0.75 - 0.3) * (1 - t) : 0.75 + (0.3 - 0.75) * t;
      const cardBg = cardBgBase.replace('rgb', 'rgba').replace(')', `,${cardBgAlpha.toFixed(2)})`);

      const loBorder = lo.text === '#FFFFFF' ? '#00D4FF' : '#0D1B5E';
      const hiBorder = hi.text === '#FFFFFF' ? '#00D4FF' : '#0D1B5E';
      const cardBorderBase = lerpColor(loBorder, hiBorder, t);
      const cardBorderAlpha = lo.text === '#FFFFFF' ? 0.15 + (0.08 - 0.15) * (1 - t) : 0.08 + (0.15 - 0.08) * t;
      const cardBorder = cardBorderBase.replace('rgb', 'rgba').replace(')', `,${cardBorderAlpha.toFixed(2)})`);

      const root = document.documentElement;
      root.style.setProperty('--bg',          bg);
      root.style.setProperty('--text',        text);
      root.style.setProperty('--accent',      accent);
      root.style.setProperty('--card-bg',     cardBg);
      root.style.setProperty('--card-border', cardBorder);

      // Smooth body and root styles
      document.body.style.background = bg;
      document.body.style.color      = text;
    };

    const onScroll = () => {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(update);
    };

    // 2. Sequential timeouts for recalibration as DOM settles and scroll resets
    const timers = [
      setTimeout(update, 50),
      setTimeout(update, 150),
      setTimeout(update, 300)
    ];

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });

    return () => {
      timers.forEach(clearTimeout);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      cancelAnimationFrame(rafRef.current);
    };
  }, [pathname]);

  return <>{children}</>;
}
