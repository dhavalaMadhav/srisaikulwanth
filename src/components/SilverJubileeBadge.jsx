import React from 'react';

const SilverJubileeBadge = () => {
  return (
    <>
      <div className="silver-jubilee-badge" style={{
        position: 'fixed',
        zIndex: 9999,
        display: 'flex',
      alignItems: 'center',
      gap: '8px',
      background: 'linear-gradient(135deg, rgba(255,255,255,0.98), rgba(245,245,245,0.92))',
      padding: '8px 18px 8px 12px',
      borderRadius: '50px',
      boxShadow: '0 8px 25px rgba(0,0,0,0.12), inset 0 0 0 1px rgba(170, 119, 28, 0.4)',
      backdropFilter: 'blur(10px)',
      pointerEvents: 'none',
      userSelect: 'none'
    }}>
      <div style={{ position: 'relative', width: '45px', height: '45px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
         <svg viewBox="0 0 100 100" style={{ position: 'absolute', width: '130%', height: '130%', top: '-15%', left: '-15%' }}>
            <defs>
              <linearGradient id="gold" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#BF953F" />
                <stop offset="25%" stopColor="#FCF6BA" />
                <stop offset="50%" stopColor="#B38728" />
                <stop offset="75%" stopColor="#FBF5B7" />
                <stop offset="100%" stopColor="#AA771C" />
              </linearGradient>
            </defs>
            <path d="M 50 95 C 20 95 5 70 5 45 C 5 30 15 15 25 10" fill="none" stroke="url(#gold)" strokeWidth="3" strokeLinecap="round"/>
            <path d="M 50 95 C 80 95 95 70 95 45 C 95 30 85 15 75 10" fill="none" stroke="url(#gold)" strokeWidth="3" strokeLinecap="round"/>
            <path d="M 25 10 L 20 20 L 30 20 Z" fill="url(#gold)"/>
            <path d="M 75 10 L 70 20 L 80 20 Z" fill="url(#gold)"/>
            <path d="M 12 30 L 7 40 L 17 40 Z" fill="url(#gold)" transform="rotate(-30 12 30)"/>
            <path d="M 88 30 L 83 40 L 93 40 Z" fill="url(#gold)" transform="rotate(30 88 30)"/>
            <path d="M 6 55 L 1 65 L 11 65 Z" fill="url(#gold)" transform="rotate(-60 6 55)"/>
            <path d="M 94 55 L 89 65 L 99 65 Z" fill="url(#gold)" transform="rotate(60 94 55)"/>
            <path d="M 35 18 L 32 26 L 38 26 Z" fill="url(#gold)" transform="rotate(-15 35 18)"/>
            <path d="M 65 18 L 62 26 L 68 26 Z" fill="url(#gold)" transform="rotate(15 65 18)"/>
         </svg>
         <span style={{
            fontFamily: 'Georgia, serif',
            fontSize: '28px',
            fontWeight: '900',
            background: 'linear-gradient(to bottom, #BF953F, #AA771C)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            lineHeight: '1',
            textShadow: 'rgba(255, 255, 255, 0.5) 0px 3px 3px',
            zIndex: 2,
            marginLeft: '2px'
         }}>25</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ fontSize: '7px', color: '#AA771C', letterSpacing: '2px', marginBottom: '2px', display: 'flex', gap: '3px' }}>
          <span>★</span><span>★</span><span>★</span>
        </div>
        <div style={{
          fontFamily: 'system-ui, -apple-system, sans-serif',
          fontSize: '11px',
          fontWeight: '800',
          color: '#333',
          lineHeight: '1.1',
          textAlign: 'center',
          letterSpacing: '0.5px'
        }}>
          YEARS <span style={{ fontSize: '9px', fontWeight: 'bold', textTransform: 'lowercase', fontStyle: 'italic', color: '#666' }}>of</span><br/>
           <span style={{ color: '#8b0000', letterSpacing: '1px' }}>EXCELLENCE</span>
        </div>
        <div style={{ fontSize: '7px', color: '#AA771C', letterSpacing: '2px', marginTop: '3px', display: 'flex', gap: '3px' }}>
          <span>★</span><span>★</span><span>★</span>
        </div>
      </div>
    </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .silver-jubilee-badge {
          top: 100px;
          right: 25px;
        }
        @media (max-width: 768px) {
          .silver-jubilee-badge {
            top: 75px !important;
            right: -5px !important;
            border-top-right-radius: 0 !important;
            border-bottom-right-radius: 0 !important;
            transform: scale(0.75);
            transform-origin: top right;
          }
        }
      `}} />
    </>
  );
};

export default SilverJubileeBadge;
