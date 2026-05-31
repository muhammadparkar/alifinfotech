'use client';

const MARQUEE_TEXT =
  'Brand · Product · Engineering · Innovation · Design · Strategy · ';

export default function AlifMarquee() {
  // Repeat enough times that we can infinite-scroll
  const repeated = MARQUEE_TEXT.repeat(6);

  // Split by ' · ' to alternate colors
  const parts = repeated.split('·');

  return (
    <div
      style={{
        borderTop: '1px solid rgba(10,18,64,0.1)',
        borderBottom: '1px solid rgba(10,18,64,0.1)',
        overflow: 'hidden',
        padding: '20px 0',
      }}
      onMouseEnter={e => {
        const inner = e.currentTarget.querySelector<HTMLDivElement>('.marquee-inner');
        if (inner) inner.style.animationPlayState = 'paused';
      }}
      onMouseLeave={e => {
        const inner = e.currentTarget.querySelector<HTMLDivElement>('.marquee-inner');
        if (inner) inner.style.animationPlayState = 'running';
      }}
    >
      <div
        className="marquee-inner"
        style={{
          display: 'flex',
          whiteSpace: 'nowrap',
          animation: 'marquee 25s linear infinite',
          width: 'max-content',
        }}
      >
        {/* Duplicate for seamless loop */}
        {[0, 1].map(dup => (
          <span key={dup} style={{ display: 'inline-flex', alignItems: 'center' }}>
            {parts.map((part, i) => (
              <span key={`${dup}-${i}`}>
                <span
                  style={{
                    fontFamily: 'DM Sans, system-ui, sans-serif',
                    fontSize: '13px',
                    fontWeight: 400,
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: 'var(--text)',
                  }}
                >
                  {part.trim()}
                </span>
                {i < parts.length - 1 && (
                  <span
                    style={{
                      color: 'var(--accent)',
                      margin: '0 16px',
                      fontSize: '13px',
                    }}
                  >
                    ·
                  </span>
                )}
              </span>
            ))}
          </span>
        ))}
      </div>
    </div>
  );
}
