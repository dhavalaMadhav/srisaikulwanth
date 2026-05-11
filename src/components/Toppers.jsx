import React from 'react';
import { ChevronRight } from 'lucide-react';

const Toppers = () => {
  return (
    <section id="toppers" style={{
      backgroundColor: '#f8f9fa',
      padding: 'clamp(60px, 8vw, 100px) 5%',
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      {/* Subtle Pattern Background */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0, bottom: 0,
        opacity: 0.03,
        backgroundImage: 'radial-gradient(var(--primary-blue) 1px, transparent 1px)',
        backgroundSize: '20px 20px',
        pointerEvents: 'none'
      }}></div>

      {/* Header Section */}
      <div style={{ textAlign: 'center', marginBottom: '40px', position: 'relative', zIndex: 1 }}>
        <h2 style={{
          fontSize: 'clamp(28px, 4vw, 42px)',
          color: 'var(--primary-blue)',
          fontFamily: 'var(--header-font)',
          fontWeight: '600',
          letterSpacing: '1px'
        }}>Hall of Academic Excellence</h2>
        <div style={{ width: '80px', height: '3px', background: 'var(--gold)', margin: '15px auto 30px' }}></div>
      </div>

      {/* Toppers Image */}
      <div style={{ position: 'relative', zIndex: 1, width: '100%', display: 'flex', justifyContent: 'center', marginBottom: '50px' }}>
        <img 
          src="/images/toppers-kulwanth.jpeg" 
          alt="Academic Toppers" 
          style={{
            width: '90%',
            maxWidth: '1200px',
            borderRadius: '12px',
            boxShadow: '0 15px 40px rgba(0,0,0,0.15)'
          }} 
        />
      </div>

      {/* Achievements Grid */}
      <div className="toppers-achievements-container" style={{ position: 'relative', zIndex: 1, width: '90%', maxWidth: '1200px' }}>
        
        <div className="toppers-achievements-grid">
          {/* Column 1 */}
          <div className="toppers-achievement-col">
            <div className="toppers-image-wrapper">
              <img src="/Academics/Recoverd_jpg_file3471.jpg" alt="Award Ceremony" />
            </div>
            
            <div className="toppers-achievement-item">
              <ChevronRight size={22} className="toppers-pointer-icon" />
              <div className="toppers-item-content">
                <h4>PRATHIBHA AWARDS</h4>
                <p>Junior - 10, Degree - 4</p>
              </div>
            </div>
            <div className="toppers-achievement-item">
              <ChevronRight size={22} className="toppers-pointer-icon" />
              <div className="toppers-item-content">
                <h4>INSPIRE AWARDS</h4>
                <p>Junior - 4 (Rs. 4,00,000 Each)</p>
              </div>
            </div>
            <div className="toppers-achievement-item">
              <ChevronRight size={22} className="toppers-pointer-icon" />
              <div className="toppers-item-content">
                <h4>NATIONAL MERIT SCHOLARSHIPS</h4>
                <p>Junior - 64 (Rs. 70,000 Each)</p>
              </div>
            </div>
          </div>

          {/* Column 2 */}
          <div className="toppers-achievement-col toppers-center-col">
            <div className="toppers-academic-banner">
              <h3>ACADEMIC ACHIEVEMENTS</h3>
            </div>
            
            <div className="toppers-achievement-item toppers-highlight">
              <ChevronRight size={24} className="toppers-pointer-icon" />
              <div className="toppers-item-content">
                <h4>A.U. GOLD MEDALS</h4>
                <p>Degree - 3</p>
              </div>
            </div>
            <div className="toppers-achievement-item toppers-highlight">
              <ChevronRight size={24} className="toppers-pointer-icon" />
              <div className="toppers-item-content">
                <h4>UNIVERSITY 1st Rank</h4>
                <p>In Degree - 6 times</p>
              </div>
            </div>
            <div className="toppers-achievement-item toppers-highlight">
              <ChevronRight size={24} className="toppers-pointer-icon" />
              <div className="toppers-item-content">
                <h4>CA COMPLETED</h4>
                <p>Students - 18+</p>
              </div>
            </div>

            <div className="toppers-image-wrapper" style={{ marginTop: '20px' }}>
              <img src="/Academics/chandrababu.jpeg" alt="Ceremony" style={{ transform: 'rotate(-90deg) scale(1.6)' }} />
            </div>
          </div>

          {/* Column 3 */}
          <div className="toppers-achievement-col">
            <div className="toppers-achievement-item">
              <ChevronRight size={22} className="toppers-pointer-icon" />
              <div className="toppers-item-content">
                <h4>2023 TOWN 1st in MPC, MEC & CEC</h4>
              </div>
            </div>
            <div className="toppers-achievement-item">
              <ChevronRight size={22} className="toppers-pointer-icon" />
              <div className="toppers-item-content">
                <h4>2023 TOWN 2nd in BiPC</h4>
              </div>
            </div>
            <div className="toppers-achievement-item">
              <ChevronRight size={22} className="toppers-pointer-icon" />
              <div className="toppers-item-content">
                <h4>ENGINEERING (AU)</h4>
                <p>CSE Seats - 2</p>
              </div>
            </div>
            <div className="toppers-achievement-item">
              <ChevronRight size={22} className="toppers-pointer-icon" />
              <div className="toppers-item-content">
                <h4>Settled in Software jobs</h4>
                <p>Uncountable</p>
              </div>
            </div>
            <div className="toppers-achievement-item">
              <ChevronRight size={22} className="toppers-pointer-icon" />
              <div className="toppers-item-content">
                <h4>Settled in Navy - Army - Airforce</h4>
                <p>9 Candidates</p>
              </div>
            </div>
            <div className="toppers-achievement-item">
              <ChevronRight size={22} className="toppers-pointer-icon" />
              <div className="toppers-item-content">
                <h4>Settled in Govt. Jobs</h4>
                <p>Uncountable</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .toppers-achievements-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          background: var(--deep-blue, #0d1b2a);
          padding: 40px;
          border-radius: 12px;
          color: white;
          box-shadow: 0 15px 40px rgba(0,0,0,0.2);
        }
        
        .toppers-achievement-col {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .toppers-center-col {
          border-left: 1px solid rgba(255,255,255,0.1);
          border-right: 1px solid rgba(255,255,255,0.1);
          padding: 0 20px;
        }

        .toppers-image-wrapper {
          width: 100%;
          height: 180px;
          background-color: transparent;
          border-radius: 8px;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .toppers-image-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          display: block;
        }

        .toppers-academic-banner {
          background-color: #d13030;
          padding: 12px 20px;
          border-radius: 6px;
          text-align: center;
          margin-bottom: 10px;
          position: relative;
        }

        .toppers-academic-banner h3 {
          margin: 0;
          color: white;
          font-size: 18px;
          letter-spacing: 1px;
        }

        .toppers-achievement-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 10px 5px;
          background: transparent;
          transition: transform 0.3s ease;
        }

        .toppers-achievement-item:hover {
          transform: translateX(5px);
        }

        .toppers-pointer-icon {
          color: var(--gold, #d4af37);
          flex-shrink: 0;
          margin-top: 2px;
        }

        .toppers-item-content {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .toppers-achievement-item h4 {
          color: #ff6b6b;
          font-size: 16px;
          margin: 0;
          letter-spacing: 0.5px;
          line-height: 1.4;
        }

        .toppers-achievement-item p {
          color: #eee;
          margin: 0;
          font-size: 14px;
          font-weight: 500;
        }

        .toppers-achievement-item.toppers-highlight h4 {
          color: #fca311;
          font-size: 18px;
        }

        .toppers-achievement-item.toppers-highlight p {
          font-size: 16px;
        }

        @media (max-width: 992px) {
          .toppers-achievements-grid {
            grid-template-columns: 1fr;
            padding: 20px;
            gap: 40px;
          }
          .toppers-center-col {
            border: none;
            padding: 0;
            border-top: 1px solid rgba(255,255,255,0.1);
            border-bottom: 1px solid rgba(255,255,255,0.1);
            padding: 30px 0;
          }
        }
      `}} />
    </section>
  );
};

export default Toppers;
