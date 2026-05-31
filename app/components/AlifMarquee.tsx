'use client';

const TICKER = 'AI Solutions · ERP Solutions · Cloud Computing · Web Development · Mobile Apps · FACT ERP · Logic ERP · Wings ERP · RateGain · Autorox · Business Consultation · Insta HIS · Digital Transformation · ';

export default function AlifMarquee() {
  return (
    <div
      style={{ borderTop: '1px solid rgba(10,18,64,0.08)', borderBottom: '1px solid rgba(10,18,64,0.08)', overflow: 'hidden', padding: '18px 0' }}
      onMouseEnter={e => { (e.currentTarget.querySelector<HTMLDivElement>('.marquee-inner')!).style.animationPlayState = 'paused'; }}
      onMouseLeave={e => { (e.currentTarget.querySelector<HTMLDivElement>('.marquee-inner')!).style.animationPlayState = 'running'; }}
    >
      <div className="marquee-inner" style={{ display: 'flex', whiteSpace: 'nowrap', animation: 'marquee 30s linear infinite', width: 'max-content' }}>
        {[0, 1].map(dup => (
          <span key={dup}>
            {TICKER.split(' · ').map((word, i) => (
              <span key={i}>
                <span style={{ fontFamily: 'DM Sans', fontSize: '12px', fontWeight: 400, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text)' }}>
                  {word}
                </span>
                {i < TICKER.split(' · ').length - 1 && (
                  <span style={{ color: 'var(--accent)', margin: '0 14px', fontSize: '12px' }}>·</span>
                )}
              </span>
            ))}
          </span>
        ))}
      </div>
    </div>
  );
}
