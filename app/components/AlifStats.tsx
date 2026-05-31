'use client';

import { useEffect, useRef } from 'react';

const STATS = [
  { value: 7,  suffix: '',  label: 'Core Services' },
  { value: 7,  suffix: '+', label: 'Tech Partners' },
  { value: 2,  suffix: '',  label: 'Global Offices' },
  { value: 10, suffix: '+', label: 'Years of Craft' },
];

function easeOutQuart(t: number) { return 1 - Math.pow(1 - t, 4); }

function animateCount(el: HTMLElement, target: number, suffix: string, dur = 2200) {
  const start = performance.now();
  const tick = (now: number) => {
    const t = Math.min((now - start) / dur, 1);
    el.textContent = Math.round(easeOutQuart(t) * target) + suffix;
    if (t < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

export default function AlifStats() {
  const sectionRef = useRef<HTMLElement>(null);
  const triggered  = useRef(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && !triggered.current) {
        triggered.current = true;
        el.querySelectorAll<HTMLElement>('.stat-counter').forEach((counter, i) => {
          setTimeout(() => {
            animateCount(counter, +counter.dataset.target!, counter.dataset.suffix!, 2200);
          }, i * 120);
        });
        el.querySelectorAll('.fade-up').forEach((f, i) => setTimeout(() => f.classList.add('visible'), i * 80));
        obs.disconnect();
      }
    }, { threshold: 0.25 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={sectionRef} style={{
      padding: 'clamp(60px, 8vh, 100px) 0',
      borderTop: '1px solid rgba(10,18,64,0.06)',
      borderBottom: '1px solid rgba(10,18,64,0.06)',
    }}>
      <div className="site-container" style={{ padding: '0 clamp(20px, 5vw, 80px)' }}>

        <p className="section-label fade-up" style={{ textAlign: 'center', marginBottom: 'clamp(32px, 5vh, 52px)' }}>
          By the numbers
        </p>

        <div className="stats-grid">
          {STATS.map((stat, i) => (
            <div key={stat.label} className="stats-cell fade-up" style={{ transitionDelay: `${i * 0.08}s` }}>
              <div className="stat-number stat-counter"
                data-target={stat.value}
                data-suffix={stat.suffix}
                style={{ marginBottom: '10px' }}>
                0{stat.suffix}
              </div>
              <p style={{
                fontFamily: 'DM Sans, system-ui, sans-serif',
                fontSize: '11px', fontWeight: 500,
                letterSpacing: '0.18em', textTransform: 'uppercase',
                color: 'var(--text)', opacity: 0.5,
              }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
