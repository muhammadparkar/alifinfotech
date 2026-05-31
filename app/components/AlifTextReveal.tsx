'use client';

import { useEffect, useRef, ReactNode } from 'react';

interface AlifTextRevealProps {
  children: ReactNode;
  delay?: number;
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'div';
  style?: React.CSSProperties;
  className?: string;
}

export default function AlifTextReveal({
  children,
  delay = 0,
  tag: Tag = 'div',
  style,
  className,
}: AlifTextRevealProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;

    // Split into lines by wrapping each text node line
    const inners = el.querySelectorAll<HTMLElement>('.reveal-inner');

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            inners.forEach((inner, i) => {
              inner.style.transitionDelay = `${delay + i * 0.1}s`;
              inner.classList.add('revealed');
            });
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  // Split text by lines using a trick — wrap each "line" in its own reveal wrapper
  // We treat children as a string and split by newline if possible,
  // otherwise render as single line
  const lines =
    typeof children === 'string'
      ? children.split('\n')
      : [children];

  return (
    <div ref={wrapperRef} style={style} className={className}>
      {lines.map((line, i) => (
        <Tag key={i} style={{ display: 'block' }}>
          <span className="reveal-wrapper">
            <span className="reveal-inner">{line}</span>
          </span>
        </Tag>
      ))}
    </div>
  );
}
