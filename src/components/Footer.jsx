import React from 'react';

const Footer = () => {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    else window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { label: 'Home', id: 'home' },
    { label: 'Courses', id: 'courses' },
    { label: 'Recruiters', id: 'recruiters' },
    { label: 'Achievements', id: 'achievements' },
    { label: 'Facilities', id: 'facilities' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <footer id="contact" style={{
      backgroundColor: 'var(--deep-blue)',
      color: 'white',
      padding: 'clamp(60px, 8vw, 80px) 10% 0',
    }}>
      <div className="footer-top-grid" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '40px',
        marginBottom: '50px'
      }}>
        {/* Brand */}
        <div>
          <h2 style={{ fontSize: '22px', marginBottom: '16px', color: 'var(--gold)' }}>SAI KULWANTH</h2>
          <p style={{ opacity: '0.7', lineHeight: '1.8', fontSize: '14px' }}>
            Sai Kulwanth Educational Society (established at Anakapalle, 2005) provides free education based on the philosophy of Integral Education — offering both Intermediate and Degree programs.
          </p>
        </div>
        
        {/* Quick Links */}
        <div>
          <h4 style={{ marginBottom: '20px', letterSpacing: '1px' }}>Quick Links</h4>
          <ul style={{ listStyle: 'none', padding: '0', opacity: '0.75', fontSize: '14px', lineHeight: '2.5' }}>
            {quickLinks.map((link, idx) => (
              <li
                key={idx}
                style={{ cursor: 'pointer', transition: 'color 0.2s' }}
                onClick={() => scrollToSection(link.id)}
                onMouseOver={e => e.target.style.color = 'var(--gold)'}
                onMouseOut={e => e.target.style.color = 'rgba(255,255,255,0.75)'}
              >
                {link.label}
              </li>
            ))}
          </ul>
        </div>

        {/* Info */}
        <div>
          <h4 style={{ marginBottom: '20px', letterSpacing: '1px' }}>Educational Society Info</h4>
          <p style={{ opacity: '0.7', fontSize: '14px', marginBottom: '10px' }}>Affiliated with Andhra University</p>
          <p style={{ opacity: '0.7', fontSize: '14px', marginBottom: '10px' }}>Anakapalle Campus</p>
          <p style={{ opacity: '0.7', fontSize: '14px', marginBottom: '10px' }}>Visakhapatnam, AP</p>
        </div>
        
        {/* Contact */}
        <div>
          <h4 style={{ marginBottom: '20px', letterSpacing: '1px' }}>Contact</h4>
          <p style={{ opacity: '0.7', fontSize: '14px', marginBottom: '10px' }}>Vidyagiri, Anakapalle</p>
          <p style={{ opacity: '0.7', fontSize: '14px', marginBottom: '10px' }}>Andhra Pradesh - 531001</p>
          <a href="mailto:registrar@saikulwanth.edu.in" style={{ color: 'var(--gold)', fontSize: '14px', textDecoration: 'none' }}>registrar@saikulwanth.edu.in</a>
        </div>
      </div>

      {/* Map Section */}
      <div className="footer-map-row" style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '40px',
        marginBottom: '50px',
        alignItems: 'center'
      }}>
        <div>
          <h4 style={{ marginBottom: '16px', letterSpacing: '1px', color: 'var(--gold)' }}>Find Us on the Map</h4>
          <p style={{ opacity: '0.7', fontSize: '14px', lineHeight: '1.8' }}>
            Sai Kulwanth Educational Society is situated in the serene town of Anakapalle, Visakhapatnam District, Andhra Pradesh. Our campus provides a peaceful environment conducive to academic excellence.
          </p>
        </div>
        <div style={{ borderRadius: '4px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.3)', display: 'flex', flexDirection: 'column' }}>
          <div style={{ background: 'rgba(255,255,255,0.05)', padding: '15px 20px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
            <h5 style={{ margin: 0, color: 'var(--gold)', fontSize: '16px', letterSpacing: '1px' }}>Sai Kulwanth Edu Society</h5>
          </div>
          <iframe
            title="Sai Kulwanth Educational Society Location"
            src="https://maps.google.com/maps?q=17.6881014,83.005051+(Sai%20Kulwanth%20Edu%20Society)&hl=en&z=20&output=embed"
            width="100%"
            height="220"
            style={{ border: 'none', display: 'block' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <div style={{
        borderTop: '1px solid rgba(255,255,255,0.1)',
        padding: '24px 0',
        textAlign: 'center',
        fontSize: '13px',
        opacity: '0.5'
      }}>
        © 2026 Sai Kulwanth Educational Society. All Rights Reserved. | Affiliated with AU, Visakhapatnam.
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 768px) {
          .footer-top-grid { grid-template-columns: 1fr !important; gap: 30px !important; text-align: center; }
          .footer-map-row { grid-template-columns: 1fr !important; }
        }
      `}} />
    </footer>
  );
};

export default Footer;
