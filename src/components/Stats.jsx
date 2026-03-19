import React, { useEffect, useState, useRef } from 'react';

const Stats = () => {
  const statsList = [
    { target: 100, label: 'Fee Waiver', suffix: '%' },
    { target: 20, label: 'Years of History', suffix: '+' },
    { target: 5000, label: 'Students Impacted', suffix: '+' },
    { target: 100, label: 'AU Affiliation', suffix: '%' },
  ];

  return (
    <section className="stats" style={{
      backgroundColor: 'white',
      textAlign: 'center',
      padding: 'clamp(60px, 8vw, 80px) 5%'
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: 'clamp(30px, 5vw, 60px)',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {statsList.map((stat, index) => (
          <StatItem key={index} target={stat.target} label={stat.label} suffix={stat.suffix} />
        ))}
      </div>
    </section>
  );
};

const StatItem = ({ target, label, suffix }) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
      }
    }, { threshold: 0.5 });

    if (elementRef.current) observer.observe(elementRef.current);
    
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const end = target;
    const duration = 2000;
    const fps = 30;
    const increment = end / (duration / (1000/fps));
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000/fps);

    return () => clearInterval(timer);
  }, [isVisible, target]);

  return (
    <div ref={elementRef} className="fade-in" style={{ padding: '20px' }}>
      <div style={{
        fontSize: 'clamp(36px, 5vw, 50px)',
        fontWeight: 'bold',
        color: 'var(--primary-blue)',
        marginBottom: '10px',
        lineHeight: '1'
      }}>
        {count.toLocaleString()}{suffix}
      </div>
      <div style={{
        fontSize: 'clamp(12px, 1.5vw, 14px)',
        color: '#888',
        fontWeight: '600',
        textTransform: 'uppercase',
        letterSpacing: '1.5px'
      }}>
        {label}
      </div>
    </div>
  );
};

export default Stats;
