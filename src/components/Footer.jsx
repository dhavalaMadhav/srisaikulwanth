import React from 'react';

const Footer = () => {
  return (
    <footer style={{
      backgroundColor: 'var(--deep-blue)',
      color: 'white',
      padding: 'clamp(60px, 8vw, 80px) 10% 40px',
    }}>
      <div className="footer-grid" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '40px',
        marginBottom: '60px'
      }}>
        <div>
          <h2 style={{ fontSize: '24px', marginBottom: '20px', color: 'var(--gold)' }}>SRI SAI KULWANTH</h2>
          <p style={{ opacity: '0.7', lineHeight: '1.8', fontSize: '14px' }}>
            Sri Sai Kulwanth University (established at Anakapalle, 2005) provides free education based on the philosophy of Integral Education.
          </p>
        </div>
        
        <div>
          <h4 style={{ marginBottom: '25px', letterSpacing: '1px' }}>Quick Links</h4>
          <FooterLinks links={['Admissions 2026', 'Academic Calendar', 'Research', 'Careers', 'Contact Details']} />
        </div>
        
        <div>
          <h4 style={{ marginBottom: '25px', letterSpacing: '1px' }}>University Info</h4>
          <p style={{ opacity: '0.7', fontSize: '14px', marginBottom: '10px' }}>Affiliated with Andhra University</p>
          <p style={{ opacity: '0.7', fontSize: '14px', marginBottom: '10px' }}>Anakapalle Campus</p>
          <p style={{ opacity: '0.7', fontSize: '14px', marginBottom: '10px' }}>Visakhapatnam, AP</p>
        </div>
        
        <div>
          <h4 style={{ marginBottom: '25px', letterSpacing: '1px' }}>Contact</h4>
          <p style={{ opacity: '0.7', fontSize: '14px', marginBottom: '10px' }}>Vidyagiri, Anakapalle</p>
          <p style={{ opacity: '0.7', fontSize: '14px', marginBottom: '10px' }}>Andhra Pradesh - 531001</p>
          <a href="mailto:registrar@saikulwanth.edu.in" style={{ color: 'var(--gold)', fontSize: '14px', textDecoration: 'none' }}>registrar@saikulwanth.edu.in</a>
        </div>
      </div>
      
      <div style={{
        borderTop: '1px solid rgba(255,255,255,0.1)',
        paddingTop: '30px',
        textAlign: 'center',
        fontSize: '13px',
        opacity: '0.5'
      }}>
        © 2026 Sri Sai Kulwanth. All Rights Reserved. | Affiliated with AU, Visakhapatnam.
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 600px) {
          .footer-grid { grid-template-columns: 1fr !important; gap: 40px !important; text-align: center; }
        }
      `}} />
    </footer>
  );
};

const FooterLinks = ({ links }) => (
  <ul style={{ listStyle: 'none', padding: '0', opacity: '0.7', fontSize: '14px', lineHeight: '2.5' }}>
    {links.map((link, idx) => (
      <li key={idx} style={{ cursor: 'pointer' }} onMouseOver={e => e.target.style.color = 'var(--gold)'} onMouseOut={e => e.target.style.color = 'white'}>{link}</li>
    ))}
  </ul>
);

export default Footer;
