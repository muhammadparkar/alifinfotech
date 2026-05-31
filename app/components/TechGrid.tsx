'use client';

export default function TechGrid({ opacity = 0.5 }: { opacity?: number }) {
  return (
    <div
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 0,
        overflow: 'hidden',
        opacity,
      }}
    >
      {/* Dot grid via CSS */}
      <div
        className="tech-grid-bg"
        style={{ position: 'absolute', inset: 0 }}
      />

      {/* Horizontal scan line */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 31px, rgba(0,212,255,0.04) 31px, rgba(0,212,255,0.04) 32px)',
        }}
      />

      {/* Corner accent triangles */}
      <div
        style={{
          position: 'absolute',
          top: 0, right: 0,
          width: 0, height: 0,
          borderStyle: 'solid',
          borderWidth: '0 80px 80px 0',
          borderColor: `transparent rgba(0,212,255,0.06) transparent transparent`,
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: 0, left: 0,
          width: 0, height: 0,
          borderStyle: 'solid',
          borderWidth: '80px 0 0 80px',
          borderColor: `transparent transparent transparent rgba(13,27,94,0.06)`,
        }}
      />
    </div>
  );
}
