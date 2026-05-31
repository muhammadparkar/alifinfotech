'use client';

import { useEffect, useRef } from 'react';

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

// ─── Color stops ────────────────────────────────────────────────
const COLOR_STOPS = [
  { scroll: 0.00, bg: '#F4F7FF', text: '#0A1240', accent: '#00D4FF' },
  { scroll: 0.65, bg: '#EEF1FC', text: '#0A1240', accent: '#00D4FF' },
  { scroll: 0.73, bg: '#0D1B5E', text: '#FFFFFF',  accent: '#00D4FF' },
  { scroll: 1.00, bg: '#0D1B5E', text: '#FFFFFF',  accent: '#00D4FF' },
];

export default function AlifScrollColorSystem({
  children,
}: {
  children: React.ReactNode;
}) {
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const update = () => {
      const scrollY = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? Math.min(scrollY / maxScroll, 1) : 0;

      // Find surrounding stops
      let lo = COLOR_STOPS[0];
      let hi = COLOR_STOPS[COLOR_STOPS.length - 1];

      for (let i = 0; i < COLOR_STOPS.length - 1; i++) {
        if (
          progress >= COLOR_STOPS[i].scroll &&
          progress <= COLOR_STOPS[i + 1].scroll
        ) {
          lo = COLOR_STOPS[i];
          hi = COLOR_STOPS[i + 1];
          break;
        }
      }

      const range = hi.scroll - lo.scroll;
      const t = range > 0 ? (progress - lo.scroll) / range : 0;

      const bg     = lerpColor(lo.bg,     hi.bg,     t);
      const text   = lerpColor(lo.text,   hi.text,   t);
      const accent = lerpColor(lo.accent, hi.accent, t);

      const root = document.documentElement;
      root.style.setProperty('--bg',     bg);
      root.style.setProperty('--text',   text);
      root.style.setProperty('--accent', accent);

      // Also update body background for seamless feel
      document.body.style.background = bg;
      document.body.style.color      = text;
    };

    const onScroll = () => {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(update);
    };

    update(); // initial
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return <>{children}</>;
}
