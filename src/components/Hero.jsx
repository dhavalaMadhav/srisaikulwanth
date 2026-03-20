import React, { useEffect, useRef } from 'react';

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, { threshold: 0.1 });

    if (heroRef.current) observer.observe(heroRef.current);

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="home" className="hero" style={{
      minHeight: '100vh',
      padding: '0',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative'
    }}>
      <div className="parallax-bg custom-hero-bg"></div>
      <div className="overlay"></div>

      <div className="hero-container" style={{
        position: 'relative',
        zIndex: '1',
        display: 'flex',
        flex: '1',
        color: 'white',
        width: '100%',
        flexWrap: 'wrap'
      }}>
        {/* LEFT SIDE (Main Hero Content) */}
        <div className="hero-left fade-in" ref={heroRef} style={{
          flex: '1 0 60%',
          minWidth: '320px',
          padding: 'clamp(100px, 15vh, 150px) 5% 60px 10%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          textAlign: 'inherit'
        }}>
          <span style={{
            color: 'var(--gold)',
            textTransform: 'uppercase',
            letterSpacing: '3px',
            fontWeight: '600',
            marginBottom: '20px'
          }}>
            Welcome to Excellence
          </span>

          <h1 style={{
            fontSize: 'clamp(32px, 8vw, 72px)',
            fontWeight: '500',
            lineHeight: '1.1',
            marginBottom: '10px'
          }}>
            SAI <br />
            KULWANTH
          </h1>

          <div className="accent-line"></div>

          <div className="affiliation-info" style={{
            fontSize: '14px',
            opacity: '0.8',
            marginBottom: '20px',
            textTransform: 'uppercase',
            letterSpacing: '1px'
          }}>
            Affiliated with Andhra University, Visakhapatnam | Established 2005
          </div>

          <div style={{
            margin: '30px 0',
            maxWidth: '600px'
          }}>
            <p style={{
              fontSize: 'clamp(18px, 2.5vw, 24px)',
              fontStyle: 'italic',
              fontFamily: 'var(--header-font)',
              marginBottom: '20px',
              textAlign: 'center'
            }}>
              "True Education is that which fosters the full development of a human being's inherent divinity."
            </p>
            <div style={{ textAlign: 'center' }}>
              <strong style={{ display: 'block', fontSize: '18px' }}>SAI KULWANTH</strong>
              <small style={{ opacity: '0.8' }}>Founder &amp; Inspiration</small>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE (Notice & Links) */}
        <div className="hero-right" style={{
          flex: '1 0 40%',
          minWidth: '320px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          padding: '0',
          position: 'relative',
          zIndex: '2'
        }}>
          <div className="hero-cards-container" style={{
            display: 'flex',
            height: 'clamp(200px, 40vh, 320px)',
            marginBottom: '0px',
            transform: 'translateY(-40px)'
          }}>
            {/* Notice Board */}
            <div className="notice-card" style={{
              flex: '1',
              backgroundColor: 'var(--red)',
              padding: 'clamp(20px, 4vw, 40px)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              transition: 'var(--transition-smooth)',
              cursor: 'pointer'
            }}>
              <h3 style={{ fontSize: 'clamp(18px, 2vw, 22px)', fontWeight: 'bold', marginBottom: '15px' }}>NOTICE BOARD</h3>
              <p style={{ opacity: '0.9', fontSize: 'clamp(12px, 1.5vw, 14px)' }}>
                Admissions are now open for Sai Kulwanth Educational Society, Anakapalle. Affiliated with Andhra University.
              </p>
              <p style={{ opacity: '0.85', fontSize: 'clamp(12px, 1.5vw, 13px)', marginTop: '10px' }}>
                Offering both Intermediate &amp; Degree programs.
              </p>
            </div>

            {/* Quick Links */}
            <div className="links-card" style={{
              flex: '1',
              backgroundColor: 'var(--gold)',
              padding: 'clamp(20px, 4vw, 40px)',
              color: 'var(--deep-blue)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              transition: 'var(--transition-smooth)',
              cursor: 'pointer'
            }}>
              <h3 style={{ fontSize: 'clamp(18px, 2vw, 22px)', fontWeight: 'bold', marginBottom: '15px' }}>QUICK LINKS</h3>
              <ul style={{ listStyle: 'none', padding: '0', fontSize: 'clamp(12px, 1.5vw, 14px)', lineHeight: '1.8' }}>
                <li style={{ cursor: 'pointer', fontWeight: '500' }} onClick={() => scrollToSection('courses')}>Our Courses</li>
                <li style={{ cursor: 'pointer', fontWeight: '500' }} onClick={() => scrollToSection('achievements')}>Achievements</li>
                <li style={{ cursor: 'pointer', fontWeight: '500' }} onClick={() => scrollToSection('facilities')}>Facilities</li>
                <li style={{ cursor: 'pointer', fontWeight: '500' }} onClick={() => scrollToSection('contact')}>Contact Us</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        .notice-card:hover, .links-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 10px 40px rgba(0,0,0,0.3);
          z-index: 10;
        }
        .custom-hero-bg {
          background-image: url('/images/Sai%20Kulwanth%20Landscape.png');
        }
        @media (max-width: 768px) {
          .custom-hero-bg {
            background-image: url('/images/Sai%20Kulwanth%20Mobile%20View.png');
            background-size: cover !important;
            background-position: center top !important;
          }
          .hero-left {
            padding-bottom: 200px !important;
          }
        }
        @media (max-width: 1024px) {
          .hero-left { 
            padding: 120px 5% 40px 5% !important;
            text-align: center !important;
            flex: 1 0 100% !important;
          }
          .hero-left .accent-line { margin: 20px auto !important; }
          .hero-right { 
            flex: 1 0 100% !important;
            justify-content: flex-start !important;
          }
          .hero-cards-container {
            height: auto !important;
            flex-direction: column !important;
            transform: translateY(0) !important;
            gap: 0px;
          }
          .notice-card, .links-card {
            padding: 40px 5% !important;
          }
        }
      `}} />
    </section>
  );
};

export default Hero;
