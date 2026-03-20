import React from 'react';

const Courses = () => {
  const intermediate = [
    'MPC + EAPCET',
    'MPC + IIT-JEE (Mains & Advanced)',
    'MPC + Navy / Army / Air Force',
    'BiPC + EAPCET',
    'BiPC + NEET',
    'MEC / CEC + CA Foundation / CLAT',
    'MPC / BiPC / MEC / CEC + Civils & Groups',
  ];

  const degree = [
    'B.Sc (Data Science)',
    'B.Sc (Computer Science)',
    'B.Sc (Mathematics)',
    'B.Sc (Physics)',
    'B.Sc (Chemistry)',
    'B.Sc (Statistics)',
    'B.Com (Computer Applications)',
    'BBA (Business Analytics)',
  ];

  return (
    <section id="courses" style={{
      backgroundColor: 'var(--light-bg)',
      padding: 'clamp(60px, 8vw, 100px) 10%',
    }}>
      <div style={{ textAlign: 'center', marginBottom: 'clamp(40px, 6vw, 60px)' }}>
        <span style={{ color: 'var(--gold)', textTransform: 'uppercase', letterSpacing: '3px', fontWeight: '600', fontSize: '12px', marginBottom: '10px', display: 'block' }}>Our Programs</span>
        <h2 style={{
          fontSize: 'clamp(28px, 4vw, 42px)',
          color: 'var(--primary-blue)',
          marginTop: '10px',
          fontFamily: 'var(--header-font)',
          fontWeight: '500',
          letterSpacing: '1px'
        }}>
          “Empowering Futures Through Diverse Learning Paths”
        </h2>
        <div style={{ width: '60px', height: '3px', background: 'var(--gold)', margin: '20px auto 0' }}></div>
      </div>

      <div className="courses-grid">
        {/* Intermediate Courses */}
        <div className="course-category-card fade-in">
          <div className="course-card-image" style={{ backgroundImage: "url('/images/intermediate_college.png')" }}>
            <div className="course-card-overlay"></div>
            <span className="course-badge">Intermediate</span>
          </div>
          <div className="course-card-content">
            <h3 className="course-card-title">Intermediate Programs</h3>
            <p className="course-card-subtitle">Class XI &amp; XII Programs</p>
            <ul className="course-list">
              {intermediate.map((course, i) => (
                <li key={i} className="course-list-item">
                  <span className="course-bullet">▸</span>
                  {course}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Degree Courses */}
        <div className="course-category-card fade-in">
          <div className="course-card-image" style={{ backgroundImage: "url('/images/degree_college.png')" }}>
            <div className="course-card-overlay"></div>
            <span className="course-badge">Degree</span>
          </div>
          <div className="course-card-content">
            <h3 className="course-card-title">Degree Programs</h3>
            <p className="course-card-subtitle">Affiliated with Andhra University</p>
            <ul className="course-list">
              {degree.map((course, i) => (
                <li key={i} className="course-list-item">
                  <span className="course-bullet">▸</span>
                  {course}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .courses-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(20px, 4vw, 40px);
          max-width: 1200px;
          margin: 0 auto;
        }
        .course-category-card {
          background: white;
          box-shadow: 0 4px 24px rgba(0,0,0,0.08);
          overflow: hidden;
          transition: var(--transition-smooth);
          border-bottom: 3px solid var(--gold);
          display: flex;
          flex-direction: column;
        }
        .course-category-card:hover {
          box-shadow: 0 8px 40px rgba(0,0,0,0.14);
          transform: translateY(-4px);
        }
        .course-card-image {
          height: 200px;
          background-size: cover;
          background-position: center;
          position: relative;
          width: 100%;
        }
        .course-card-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.5);
        }
        .course-card-content {
          padding: clamp(20px, 3vw, 30px);
          flex: 1;
        }
        .course-badge {
          position: absolute;
          top: 20px;
          left: 20px;
          z-index: 2;
          background: var(--gold);
          color: var(--deep-blue);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          padding: 4px 12px;
        }
        .course-card-title {
          font-size: clamp(20px, 2.5vw, 26px);
          font-family: var(--header-font);
          margin-bottom: 6px;
          font-weight: 600;
          color: var(--primary-blue);
        }
        .course-card-subtitle {
          color: #666;
          font-size: 14px;
          margin-bottom: 20px;
        }
        .course-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .course-list-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          padding: 12px 0;
          border-bottom: 1px solid #f0f0f0;
          font-size: clamp(13px, 1.5vw, 15px);
          color: var(--text-dark);
          font-weight: 500;
          transition: color 0.2s ease;
        }
        .course-list-item:last-child { border-bottom: none; }
        .course-list-item:hover { color: var(--primary-blue); }
        .course-bullet {
          color: var(--gold);
          font-size: 14px;
          flex-shrink: 0;
          margin-top: 1px;
        }
        @media (max-width: 768px) {
          .courses-grid { grid-template-columns: 1fr !important; }
          .course-card-image { height: 160px; }
        }
      `}} />
    </section>
  );
};

export default Courses;
