'use client';

import { useEffect, useRef } from 'react';

export default function AlifImageCluster() {
  const clusterRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLDivElement[]>([]);

  const images = [
    { w: 260, h: 340, top: 0,   left: 60,  rotate: -4, speed: 0.2 },
    { w: 200, h: 260, top: 40,  left: 0,   rotate:  2, speed: 0.4 },
    { w: 180, h: 230, top: 80,  left: 180, rotate: -1, speed: 0.5 },
    { w: 140, h: 180, top: 160, left: 100, rotate:  5, speed: 0.3 },
  ];

  // Parallax on scroll
  useEffect(() => {
    let lastY = window.scrollY;
    let offsets = images.map(() => 0);
    let rafId: number;

    const update = () => {
      const y = window.scrollY;
      const delta = y - lastY;
      lastY = y;

      offsets = offsets.map((off, i) => {
        const newOff = off + delta * images[i].speed;
        const el = imagesRef.current[i];
        if (el) {
          el.style.transform = `rotate(${images[i].rotate}deg) translateY(${newOff}px)`;
        }
        return newOff;
      });

      rafId = requestAnimationFrame(update);
    };

    rafId = requestAnimationFrame(update);
    return () => cancelAnimationFrame(rafId);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Mousemove drift
  useEffect(() => {
    const cluster = clusterRef.current;
    if (!cluster) return;

    let targetX = 0, targetY = 0;
    let currentOffsets = images.map(() => ({ x: 0, y: 0 }));
    let driftRaf: number;

    const onMouseMove = (e: MouseEvent) => {
      const rect = cluster.getBoundingClientRect();
      targetX = ((e.clientX - rect.left) / rect.width - 0.5) * 30;
      targetY = ((e.clientY - rect.top) / rect.height - 0.5) * 30;
    };

    const animateDrift = () => {
      currentOffsets = currentOffsets.map((off, i) => {
        const newX = off.x + (targetX - off.x) * 0.06;
        const newY = off.y + (targetY - off.y) * 0.06;
        const el = imagesRef.current[i];
        if (el) {
          const currentTransform = el.style.transform || '';
          // Apply drift on top — keep rotate + scroll translateY
          el.style.transform = currentTransform.replace(
            /translateX\([^)]*\) ?/g,
            ''
          );
          // Reset just drift via a CSS variable approach
          el.dataset.driftX = String(newX);
          el.dataset.driftY = String(newY);
        }
        return { x: newX, y: newY };
      });
      driftRaf = requestAnimationFrame(animateDrift);
    };

    cluster.addEventListener('mousemove', onMouseMove, { passive: true });
    driftRaf = requestAnimationFrame(animateDrift);

    return () => {
      cluster.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(driftRaf);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Gradient labels for images
  const labels = [
    'Brand Identity',
    'Product Design',
    'Web Engineering',
    'Mobile Apps',
  ];

  return (
    <div
      ref={clusterRef}
      style={{
        position: 'relative',
        width: '100%',
        height: '480px',
      }}
    >
      {images.map((img, i) => (
        <div
          key={i}
          ref={el => {
            if (el) imagesRef.current[i] = el;
          }}
          style={{
            position: 'absolute',
            top: `${img.top}px`,
            left: `${img.left}px`,
            width: `${img.w}px`,
            height: `${img.h}px`,
            background: 'linear-gradient(135deg, #1A2E8A, #0D1B5E)',
            border: '1px solid rgba(0,212,255,0.2)',
            borderRadius: '4px',
            transform: `rotate(${img.rotate}deg)`,
            transition: 'box-shadow 0.4s ease',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            padding: '20px',
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLElement).style.boxShadow =
              '0 20px 60px rgba(0,212,255,0.15)';
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLElement).style.boxShadow = 'none';
          }}
        >
          {/* Subtle inner gradient */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(to bottom, rgba(0,212,255,0.04) 0%, transparent 60%)',
            }}
          />
          {/* Grid lines decoration */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage:
                'linear-gradient(rgba(0,212,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.06) 1px, transparent 1px)',
              backgroundSize: '24px 24px',
            }}
          />
          {/* Label */}
          <span
            style={{
              position: 'relative',
              zIndex: 1,
              fontFamily: 'DM Sans, system-ui, sans-serif',
              fontSize: '11px',
              fontWeight: 400,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'rgba(0,212,255,0.7)',
            }}
          >
            {labels[i]}
          </span>
          {/* Cyan accent corner */}
          <div
            style={{
              position: 'absolute',
              top: '16px',
              right: '16px',
              width: '20px',
              height: '20px',
              clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
              background: 'rgba(0,212,255,0.3)',
            }}
          />
        </div>
      ))}
    </div>
  );
}
