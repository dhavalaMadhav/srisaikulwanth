import React, { useRef, useEffect } from 'react';

const companies = [
  { name: 'Infosys', showName: false, ext: 'svg' },
  { name: 'Wipro', showName: true },
  { name: 'Cognizant', showName: false, ext: 'svg' },
  { name: 'TCS', showName: false },
  { name: 'Accenture', showName: true },
  { name: 'Capgemini', showName: true },
  { name: 'ICICI', showName: true },
  { name: 'KIA', showName: false },
  { name: 'Deccan', showName: false, ext: 'svg' },
  { name: 'HDFC', showName: false, ext: 'svg' },
];

const Recruiters = () => {
  const trackRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const autoScrollRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Auto-scroll
    autoScrollRef.current = setInterval(() => {
      if (!isDragging.current) {
        track.scrollLeft += 1;
        // Loop: if scrolled past middle, reset to start seamlessly
        if (track.scrollLeft >= track.scrollWidth / 2) {
          track.scrollLeft = 0;
        }
      }
    }, 20);

    return () => clearInterval(autoScrollRef.current);
  }, []);

  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.pageX - trackRef.current.offsetLeft;
    scrollLeft.current = trackRef.current.scrollLeft;
    trackRef.current.style.cursor = 'grabbing';
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - trackRef.current.offsetLeft;
    const walk = (x - startX.current) * 2;
    trackRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const stopDrag = () => {
    isDragging.current = false;
    if (trackRef.current) trackRef.current.style.cursor = 'grab';
  };

  const handleTouchStart = (e) => {
    startX.current = e.touches[0].pageX;
    scrollLeft.current = trackRef.current.scrollLeft;
  };

  const handleTouchMove = (e) => {
    const x = e.touches[0].pageX;
    const walk = (startX.current - x) * 1.5;
    trackRef.current.scrollLeft = scrollLeft.current + walk;
  };

  // Duplicate for infinite scroll effect
  const allCompanies = [...companies, ...companies];

  return (
    <section id="recruiters" style={{
      backgroundColor: 'white',
      padding: 'clamp(50px, 7vw, 80px) 0',
      overflow: 'hidden'
    }}>
      <div style={{ textAlign: 'center', marginBottom: 'clamp(30px, 5vw, 50px)', padding: '0 10%' }}>
        <span style={{ color: 'var(--gold)', textTransform: 'uppercase', letterSpacing: '3px', fontWeight: '600', fontSize: '12px', marginBottom: '10px', display: 'block' }}>Trusted By</span>
        <h2 style={{
          fontSize: 'clamp(26px, 4vw, 40px)',
          color: 'var(--primary-blue)',
          marginTop: '10px',
          fontFamily: 'var(--header-font)',
          fontWeight: '500',
          letterSpacing: '1px'
        }}>
          “Where Our Students Find Their Future”
        </h2>
        <div style={{ width: '60px', height: '3px', background: 'var(--gold)', margin: '20px auto 0' }}></div>
      </div>

      <div
        ref={trackRef}
        className="recruiters-track"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={stopDrag}
        onMouseLeave={stopDrag}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        style={{
          display: 'flex',
          gap: 'clamp(16px, 3vw, 30px)',
          overflowX: 'auto',
          padding: '20px 10%',
          cursor: 'grab',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          WebkitOverflowScrolling: 'touch',
          userSelect: 'none',
        }}
      >
        {allCompanies.map((company, i) => (
          <div key={i} className="recruiter-logo-card" title={company.name}>
            <img
              src={`/Recruiters/${company.name}.${company.ext || 'png'}`}
              alt={`${company.name} logo`}
              style={{
                maxWidth: company.showName ? '40px' : '80%',
                maxHeight: '60%',
                objectFit: 'contain',
                marginRight: company.showName ? '10px' : '0'
              }}
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'block';
              }}
            />
            <span style={{ display: company.showName ? 'block' : 'none', whiteSpace: 'nowrap' }}>
              {company.name}
            </span>
          </div>
        ))}
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        .recruiters-track::-webkit-scrollbar { display: none; }
        .recruiter-logo-card {
          flex: 0 0 clamp(120px, 15vw, 180px);
          height: clamp(60px, 8vw, 80px);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--header-font);
          font-size: clamp(13px, 1.8vw, 17px);
          font-weight: 700;
          letter-spacing: 1px;
          border-radius: 4px;
          background: #f8f8f8;
          border: 1px solid #eee;
          color: #333;
          box-shadow: 0 2px 8px rgba(0,0,0,0.05);
          transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;
          white-space: nowrap;
          padding: 0 16px;
        }
        .recruiter-logo-card:hover {
          transform: translateY(-4px) scale(1.04);
          box-shadow: 0 8px 20px rgba(0,0,0,0.1);
          background: #fff;
          border-color: var(--gold);
        }
      `}} />
    </section>
  );
};

export default Recruiters;
