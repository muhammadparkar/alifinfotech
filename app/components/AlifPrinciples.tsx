'use client';

import { useEffect, useRef } from 'react';

const DEFAULT_PRINCIPLES = [
  {
    num: '01',
    title: 'Clarity over complexity',
    desc: 'We strip away what doesn\'t serve the goal. Every decision is intentional, every pixel earns its place.',
  },
  {
    num: '02',
    title: 'Speed with substance',
    desc: 'Fast doesn\'t mean careless. We move with urgency while holding a high standard for every deliverable.',
  },
  {
    num: '03',
    title: 'Partners, not vendors',
    desc: 'We embed in your team, share your goals, and stay accountable to outcomes — not just outputs.',
  },
  {
    num: '04',
    title: 'Systems thinking',
    desc: 'We design and engineer with the future in mind — scalable, maintainable, and resilient from day one.',
  },
];

interface Principle {
  num: string;
  title: string;
  desc: string;
}

interface AlifPrinciplesProps {
  items?: Principle[];
}

export default function AlifPrinciples({ items = DEFAULT_PRINCIPLES }: AlifPrinciplesProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const rows = section.querySelectorAll<HTMLElement>('.principle-row');

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const row = entry.target as HTMLElement;
            const i = parseInt(row.dataset.index || '0', 10);
            setTimeout(() => {
              row.style.opacity = '1';
              row.style.transform = 'translateY(0)';
              // Trigger heading reveal
              row.querySelectorAll('.reveal-inner').forEach(inner => {
                inner.classList.add('revealed');
              });
            }, i * 150);
            observer.unobserve(row);
          }
        });
      },
      { threshold: 0.15 }
    );

    rows.forEach(row => observer.observe(row));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="work"
      style={{
        padding: '100px 8vw',
        maxWidth: '1400px',
        margin: '0 auto',
        width: '100%',
        boxSizing: 'border-box',
      }}
    >
      {/* Section label */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
          marginBottom: '60px',
        }}
      >
        <p
          style={{
            fontFamily: 'DM Sans, system-ui, sans-serif',
            fontSize: '11px',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: 'var(--accent)',
          }}
        >
          How we work
        </p>
        <div
          style={{
            flex: 1,
            height: '1px',
            background: 'var(--text)',
            opacity: 0.1,
          }}
        />
      </div>

      {/* Principle rows */}
      {items.map((principle, i) => (
        <div
          key={principle.num}
          className="principle-row"
          data-index={i}
          style={{
            display: 'grid',
            gridTemplateColumns: '80px 1fr 1fr auto',
            alignItems: 'center',
            gap: '32px',
            padding: '32px 0',
            borderTop: '1px solid rgba(10,18,64,0.1)',
            opacity: 0,
            transform: 'translateY(30px)',
            transition: 'opacity 0.8s ease, transform 0.8s ease',
          }}
        >
          {/* Number */}
          <span
            style={{
              fontFamily: 'DM Sans, system-ui, sans-serif',
              fontSize: '11px',
              fontWeight: 400,
              color: 'var(--text-muted, #5A6A9A)',
              letterSpacing: '0.08em',
            }}
          >
            {principle.num}
          </span>

          {/* Title */}
          <h3
            style={{
              fontFamily: 'Cormorant Garamond, Georgia, serif',
              fontSize: 'clamp(24px, 3vw, 36px)',
              fontWeight: 300,
              fontStyle: 'italic',
              color: 'var(--text)',
              lineHeight: 1.2,
            }}
          >
            <span className="reveal-wrapper" style={{ display: 'block' }}>
              <span className="reveal-inner" style={{ display: 'block' }}>
                {principle.title}
              </span>
            </span>
          </h3>

          {/* Description */}
          <p
            style={{
              fontFamily: 'DM Sans, system-ui, sans-serif',
              fontSize: '14px',
              fontWeight: 300,
              color: 'var(--text-muted, #5A6A9A)',
              lineHeight: 1.75,
            }}
          >
            {principle.desc}
          </p>

          {/* Arrow */}
          <span
            style={{
              fontFamily: 'DM Sans, system-ui, sans-serif',
              fontSize: '20px',
              color: 'var(--text)',
              opacity: 0.3,
              transition: 'opacity 0.3s ease, transform 0.3s ease',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLElement;
              el.style.opacity = '1';
              el.style.transform = 'translateX(4px)';
              el.style.color = 'var(--accent)';
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLElement;
              el.style.opacity = '0.3';
              el.style.transform = 'translateX(0)';
              el.style.color = 'var(--text)';
            }}
          >
            →
          </span>
        </div>
      ))}

      <style>{`
        @media (max-width: 768px) {
          .principle-row {
            grid-template-columns: 40px 1fr !important;
            grid-template-rows: auto auto;
          }
          .principle-row > p { grid-column: 2; }
          .principle-row > span:last-child { display: none; }
        }
      `}</style>
    </section>
  );
}
