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
        {/* Main Hero Content - Centered */}
        <div className="hero-content fade-in" ref={heroRef} style={{
          flex: '1 0 100%',
          margin: '0 auto',
          padding: 'clamp(100px, 15vh, 150px) 5%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          textAlign: 'center',
          alignItems: 'center'
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

          <div className="accent-line" style={{ margin: '20px auto' }}></div>

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
            margin: '30px auto 0 auto',
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
      </div>

      {/* QUICK LINKS - Bottom Right */}
      <div className="quick-links-floating">
        <h3 style={{ fontSize: 'clamp(18px, 2vw, 22px)', fontWeight: 'bold', marginBottom: '15px' }}>QUICK LINKS</h3>
        <ul style={{ listStyle: 'none', padding: '0', fontSize: 'clamp(12px, 1.5vw, 14px)', lineHeight: '1.8' }}>
          <li style={{ cursor: 'pointer', fontWeight: '500' }} onClick={() => scrollToSection('courses')}>Our Courses</li>
          <li style={{ cursor: 'pointer', fontWeight: '500' }} onClick={() => scrollToSection('achievements')}>Achievements</li>
          <li style={{ cursor: 'pointer', fontWeight: '500' }} onClick={() => scrollToSection('facilities')}>Facilities</li>
          <li style={{ cursor: 'pointer', fontWeight: '500' }} onClick={() => scrollToSection('contact')}>Contact Us</li>
        </ul>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        .quick-links-floating {
          position: absolute;
          bottom: 0;
          right: 0;
          z-index: 10;
          background-color: var(--gold);
          padding: clamp(20px, 4vw, 40px);
          color: var(--deep-blue);
          width: clamp(280px, 25vw, 350px);
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .custom-hero-bg {
          background-image: url('/images/baba.jpeg');
          background-position: center left 20%;
        }
        @media (max-width: 768px) {
          .custom-hero-bg {
            background-image: url('/images/baba.jpeg');
            background-size: cover !important;
            background-position: center !important;
          }
          .hero-content {
            padding-bottom: 80px !important;
          }
          .quick-links-floating {
            position: relative !important;
            width: 100% !important;
            padding: 30px 5% !important;
          }
        }
        @media (max-width: 1024px) {
          .hero-content { 
            padding: 120px 5% 40px 5% !important;
            text-align: center !important;
            align-items: center !important;
            flex: 1 0 100% !important;
            margin-left: 0 !important;
          }
          .hero-content .accent-line { margin: 20px auto !important; }
          .hero-content p { text-align: center !important; }
          .hero-content div { text-align: center !important; }
        }
      `}} />
    </section>
  );
};

export default Hero;
