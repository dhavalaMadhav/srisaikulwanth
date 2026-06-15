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
      backgroundColor: '#f0f4f8',
      color: 'var(--deep-blue)',
      padding: 'clamp(60px, 8vw, 80px) 10% 0',
      borderTop: '1px solid rgba(0,0,0,0.1)',
    }}>
      <div className="footer-top-grid" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '40px',
        marginBottom: '50px'
      }}>
        {/* Brand */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '16px' }}>
            <img src="/images/saikulwanth-logo.png" alt="Sai Kulwanth Logo" style={{ height: '50px', width: 'auto' }} />
            <h2 style={{ fontSize: '22px', color: 'var(--gold)', margin: 0 }}>SAI KULWANTH</h2>
          </div>
          <p style={{ opacity: '0.8', lineHeight: '1.8', fontSize: '14px' }}>
            Sai Kulwanth Educational Institutions (established at Anakapalle, 2001) provides free education based on the philosophy of Integral Education — offering both Intermediate and Degree programs.
          </p>
        </div>


        {/* Info */}
        <div>
          <h4 style={{ marginBottom: '20px', letterSpacing: '1px' }}>Educational Institutions Info</h4>
          <p style={{ opacity: '0.8', fontSize: '14px', marginBottom: '10px' }}>Affiliated with Andhra University</p>
          <p style={{ opacity: '0.8', fontSize: '14px', marginBottom: '10px' }}>Anakapalle Campus</p>
          <p style={{ opacity: '0.8', fontSize: '14px', marginBottom: '10px' }}>Visakhapatnam, AP</p>
        </div>

        {/* Contact */}
        <div>
          <h4 style={{ marginBottom: '20px', letterSpacing: '1px' }}>Contact</h4>
          <p style={{ opacity: '0.8', fontSize: '14px', marginBottom: '10px' }}>Vidyagiri, Anakapalle</p>
          <p style={{ opacity: '0.8', fontSize: '14px', marginBottom: '10px' }}>Andhra Pradesh - 531001</p>
          <div style={{ opacity: '0.8', fontSize: '14px', marginBottom: '5px' }}>9849216362, 9959378790</div>
          <div style={{ opacity: '0.8', fontSize: '14px', marginBottom: '15px' }}>7386487509, 7396013501</div>
          <a href="mailto:saikulwanth09@gmail.com" style={{ color: 'var(--gold)', fontSize: '14px', textDecoration: 'none' }}>saikulwanth09@gmail.com</a>
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
          <p style={{ opacity: '0.8', fontSize: '14px', lineHeight: '1.8' }}>
            Sai Kulwanth Educational Institutions is situated in the serene town of Anakapalle, Visakhapatnam District, Andhra Pradesh. Our campus provides a peaceful environment conducive to academic excellence.
          </p>
        </div>
        <div style={{ borderRadius: '4px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', display: 'flex', flexDirection: 'column' }}>
          <div style={{ background: 'rgba(0,0,0,0.03)', padding: '15px 20px', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
            <h5 style={{ margin: 0, color: 'var(--gold)', fontSize: '16px', letterSpacing: '1px' }}>Sai Kulwanth Edu Institutions</h5>
          </div>
          <iframe
            title="Sai Kulwanth Educational Institutions Location"
            src="https://maps.google.com/maps?q=17.6881014,83.005051+(Sai%20Kulwanth%20Edu%20Institutions)&hl=en&z=20&output=embed"
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
        borderTop: '1px solid rgba(0,0,0,0.1)',
        padding: '24px 0',
        textAlign: 'center',
        fontSize: '13px',
        opacity: '0.6'
      }}>
        © 2026 Sai Kulwanth Educational Institutions. All Rights Reserved. | Affiliated with AU, Visakhapatnam.
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        @media (max-width: 768px) {
          .footer-top-grid { grid-template-columns: 1fr !important; gap: 30px !important; text-align: center; }
          .footer-map-row { grid-template-columns: 1fr !important; }
        }
      `}} />
    </footer>
  );
};

export default Footer;
