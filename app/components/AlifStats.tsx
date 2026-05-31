'use client';

import { useEffect, useRef } from 'react';

const DEFAULT_STATS = [
  { value: 50, suffix: '+', label: 'Projects Delivered' },
  { value: 8,  suffix: '',  label: 'Years of Craft' },
  { value: 30, suffix: '+', label: 'Happy Clients' },
];

interface Stat {
  value: number;
  suffix: string;
  label: string;
}

interface AlifStatsProps {
  items?: Stat[];
}

function easeOutQuart(t: number): number {
  return 1 - Math.pow(1 - t, 4);
}

function animateCount(el: HTMLElement, target: number, suffix: string, duration = 2000) {
  const start = performance.now();
  const update = (now: number) => {
    const elapsed = now - start;
    const t = Math.min(elapsed / duration, 1);
    const eased = easeOutQuart(t);
    const current = Math.round(eased * target);
    el.textContent = current + suffix;
    if (t < 1) requestAnimationFrame(update);
  };
  requestAnimationFrame(update);
}

export default function AlifStats({ items = DEFAULT_STATS }: AlifStatsProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const triggered  = useRef(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !triggered.current) {
            triggered.current = true;
            section.querySelectorAll<HTMLElement>('.stat-counter').forEach(el => {
              const target = parseInt(el.dataset.target || '0', 10);
              const suffix = el.dataset.suffix || '';
              animateCount(el, target, suffix, 2000);
            });
            section.querySelectorAll('.fade-up').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 120);
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        padding: '100px 8vw',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '60px',
        borderTop: '1px solid rgba(10,18,64,0.08)',
        borderBottom: '1px solid rgba(10,18,64,0.08)',
      }}
    >
      {/* Label */}
      <p
        className="fade-up"
        style={{
          fontFamily: 'DM Sans, system-ui, sans-serif',
          fontSize: '11px',
          letterSpacing: '0.3em',
          textTransform: 'uppercase',
          color: 'var(--accent)',
        }}
      >
        By the numbers
      </p>

      {/* Stats row */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0',
          maxWidth: '800px',
          width: '100%',
        }}
      >
        {items.map((stat, i) => (
          <div key={stat.label} style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
            {/* Stat */}
            <div
              className="fade-up"
              style={{
                flex: 1,
                textAlign: 'center',
                transitionDelay: `${i * 0.12}s`,
              }}
            >
              <div
                className="stat-counter stat-number"
                data-target={stat.value}
                data-suffix={stat.suffix}
              >
                0{stat.suffix}
              </div>
              <p
                style={{
                  fontFamily: 'DM Sans, system-ui, sans-serif',
                  fontSize: '12px',
                  fontWeight: 400,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'var(--text-muted, #5A6A9A)',
                  marginTop: '8px',
                }}
              >
                {stat.label}
              </p>
            </div>

            {/* Separator — not after last */}
            {i < items.length - 1 && (
              <div
                style={{
                  width: '1px',
                  height: '80px',
                  background: 'var(--text)',
                  opacity: 0.1,
                  flexShrink: 0,
                }}
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
