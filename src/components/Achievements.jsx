import React from 'react';
import { Medal, Award, ClipboardCheck, Briefcase } from 'lucide-react';

const achievementData = [
  {
    icon: <Medal size={42} />,
    count: '12+',
    title: 'Gold Medals',
    description: 'Students awarded gold medals at university examinations for academic excellence.'
  },
  {
    icon: <Award size={42} />,
    count: '35+',
    title: 'University Ranks',
    description: 'Top rankers from our institution across Science, Commerce and Arts streams.'
  },
  {
    icon: <ClipboardCheck size={42} />,
    count: '50+',
    title: 'CA Selections',
    description: 'Students successfully qualified for Chartered Accountancy Foundation & Intermediate levels.'
  },
  {
    icon: <Briefcase size={42} />,
    count: '500+',
    title: 'Placements',
    description: 'Graduates placed in leading companies through our dedicated placement cell.'
  },
];

const Achievements = () => {
  return (
    <section id="achievements" style={{
      backgroundColor: 'white',
      padding: 'clamp(60px, 8vw, 100px) 10%',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Decorative BG text */}
      <div style={{
        position: 'absolute',
        top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        fontSize: 'clamp(80px, 20vw, 200px)',
        fontWeight: '900',
        color: 'rgba(0,0,0,0.03)',
        whiteSpace: 'nowrap',
        pointerEvents: 'none',
        fontFamily: 'var(--header-font)',
        userSelect: 'none'
      }}>EXCELLENCE</div>

      <div style={{ textAlign: 'center', marginBottom: 'clamp(40px, 6vw, 60px)', position: 'relative', zIndex: 1 }}>
        <span style={{ color: 'var(--gold)', textTransform: 'uppercase', letterSpacing: '3px', fontWeight: '600', fontSize: '12px', marginBottom: '10px', display: 'block' }}>Our Pride</span>
        <h2 style={{
          fontSize: 'clamp(28px, 4vw, 42px)',
          color: 'var(--primary-blue)',
          marginTop: '10px',
          fontFamily: 'var(--header-font)',
          fontWeight: '500',
          letterSpacing: '1px'
        }}>Academic Achievements</h2>
        <div style={{ width: '60px', height: '3px', background: 'var(--gold)', margin: '20px auto 0' }}></div>
      </div>

      <div className="achievements-grid">
        {achievementData.map((item, i) => (
          <div key={i} className="achievement-card fade-in">
            <div className="achievement-icon-wrapper">{item.icon}</div>
            <div className="achievement-count">{item.count}</div>
            <h3 className="achievement-title">{item.title}</h3>
            <p className="achievement-desc">{item.description}</p>
          </div>
        ))}
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .achievements-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: clamp(15px, 2vw, 30px);
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }
        .achievement-card {
          background: transparent;
          border: 1px solid transparent;
          padding: clamp(24px, 3vw, 40px) clamp(15px, 2vw, 24px);
          text-align: center;
          transition: var(--transition-smooth);
          position: relative;
        }
        .achievement-card:hover {
          background: rgba(255, 255, 255, 0.8);
          border-color: var(--gold);
          transform: translateY(-8px);
          box-shadow: 0 15px 35px rgba(0,0,0,0.05);
          border-radius: 8px;
        }
        .achievement-icon-wrapper {
          color: var(--primary-blue);
          margin-bottom: 20px;
          display: flex;
          justify-content: center;
        }
        .achievement-count {
          font-size: clamp(28px, 3.5vw, 44px);
          font-weight: 700;
          color: var(--primary-blue);
          font-family: var(--header-font);
          line-height: 1;
          margin-bottom: 12px;
        }
        .achievement-title {
          font-size: clamp(14px, 1.6vw, 17px);
          color: var(--text-dark);
          font-family: var(--header-font);
          margin-bottom: 12px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .achievement-desc {
          font-size: clamp(12px, 1.3vw, 13px);
          color: #666;
          line-height: 1.6;
        }
        @media (max-width: 1024px) {
          .achievements-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 600px) {
          .achievements-grid { grid-template-columns: 1fr !important; }
        }
      `}} />
    </section>
  );
};

export default Achievements;
