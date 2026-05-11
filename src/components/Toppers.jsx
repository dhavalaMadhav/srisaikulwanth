import React from 'react';
import { Star } from 'lucide-react';

const mockToppers = [
  {
    id: 1,
    name: "Aarav Sharma",
    rollNo: "INT2025MPC014",
    stream: "MPC",
    year: "2025",
    category: "Intermediate",
    score: "992/1000",
    rank: 1,
    image: "https://i.pravatar.cc/300?img=11",
    featured: true,
    quote: "Consistent effort and dedicated faculty support helped me achieve this milestone."
  },
  {
    id: 2,
    name: "Priya Patel",
    rollNo: "INT2024BPC042",
    stream: "BPC",
    year: "2024",
    category: "Intermediate",
    score: "988/1000",
    rank: 2,
    image: "https://i.pravatar.cc/300?img=5"
  },
  {
    id: 3,
    name: "Rohan Kumar",
    rollNo: "INT2025MPC102",
    stream: "MPC",
    year: "2025",
    category: "Intermediate",
    score: "986/1000",
    rank: 1,
    image: "https://i.pravatar.cc/300?img=12"
  },
  {
    id: 4,
    name: "Ananya Reddy",
    rollNo: "INT2024BPC055",
    stream: "BPC",
    year: "2024",
    category: "Intermediate",
    score: "978/1000",
    rank: 3,
    image: "https://i.pravatar.cc/300?img=9"
  },
  {
    id: 5,
    name: "Vikram Singh",
    rollNo: "INT2023CEC088",
    stream: "CEC",
    year: "2023",
    category: "Intermediate",
    score: "975/1000",
    rank: 3,
    image: "https://i.pravatar.cc/300?img=14"
  },
  {
    id: 6,
    name: "Neha Gupta",
    rollNo: "INT2023CEC021",
    stream: "CEC",
    year: "2023",
    category: "Intermediate",
    score: "965/1000",
    rank: 2,
    image: "https://i.pravatar.cc/300?img=20"
  }
];

const Toppers = () => {
  const filteredToppers = mockToppers.filter(topper => !topper.featured);
  const featuredTopper = mockToppers.find(topper => topper.featured);

  return (
    <section id="toppers" style={{
      backgroundColor: '#f8f9fa',
      padding: 'clamp(60px, 8vw, 100px) 10%',
      position: 'relative',
      overflow: 'hidden'
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

      {/* Featured Topper Card */}
      {featuredTopper && (
        <div className="featured-topper-card fade-in">
          <div className="featured-image-wrapper">
            <img src={featuredTopper.image} alt={featuredTopper.name} />
            <div className="rank-badge">
              <Star size={16} fill="currentColor" /> Rank #{featuredTopper.rank}
            </div>
          </div>
          <div className="featured-content">
            <div className="featured-header">
              <span className="featured-tag">Highest Achiever {featuredTopper.year}</span>
            </div>
            <h3 className="featured-name">{featuredTopper.name}</h3>
            <p className="featured-course">{featuredTopper.stream} ({featuredTopper.category})</p>
            <div className="featured-details">
              <span><strong>Roll No:</strong> {featuredTopper.rollNo}</span>
              <span className="featured-score">{featuredTopper.score}</span>
            </div>
            {featuredTopper.quote && (
              <p className="featured-quote">"{featuredTopper.quote}"</p>
            )}
          </div>
        </div>
      )}

      {/* Grid */}
      <div className="toppers-grid">
        {filteredToppers.map((topper) => (
          <div key={topper.id} className={`topper-card rank-${topper.rank} fade-in`}>
            <div className="topper-image-container">
              <img src={topper.image} alt={topper.name} className="topper-image" />
            </div>
            <div className="topper-info">
              <h4 className="topper-name">{topper.name}</h4>
              <p className="topper-stream">{topper.stream}</p>
              <div className="topper-meta">
                <span className="meta-roll">{topper.rollNo}</span>
                <span className="meta-year">{topper.year}</span>
              </div>
              <div className="topper-score-row">
                <span className="topper-category">{topper.category}</span>
                <span className="topper-score">{topper.score}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .featured-topper-card {
          display: flex;
          background: white;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 15px 40px rgba(0,0,0,0.08);
          max-width: 900px;
          margin: 0 auto 50px;
          position: relative;
          z-index: 1;
          border-left: 5px solid var(--gold);
        }
        .featured-image-wrapper {
          flex: 0 0 35%;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 30px;
        }
        .featured-image-wrapper img {
          width: 200px;
          height: 200px;
          border-radius: 50%;
          object-fit: cover;
          border: 4px solid var(--gold);
          transition: transform 0.5s ease;
        }
        .featured-topper-card:hover .featured-image-wrapper img {
          transform: scale(1.05);
        }
        .rank-badge {
          position: absolute;
          top: 20px;
          left: 20px;
          background: var(--gold);
          color: #fff;
          padding: 6px 12px;
          border-radius: 30px;
          font-size: 14px;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 5px;
          box-shadow: 0 4px 10px rgba(0,0,0,0.2);
          z-index: 2;
        }
        .featured-content {
          padding: 40px;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .featured-tag {
          color: var(--gold);
          font-weight: 600;
          font-size: 13px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .featured-name {
          font-size: clamp(24px, 3vw, 32px);
          color: var(--primary-blue);
          font-family: var(--header-font);
          margin: 10px 0;
        }
        .featured-course {
          font-size: 16px;
          color: #555;
          margin-bottom: 20px;
        }
        .featured-details {
          display: flex;
          gap: 30px;
          margin-bottom: 20px;
          font-size: 15px;
          align-items: center;
        }
        .featured-score {
          font-size: 20px;
          font-weight: 700;
          color: var(--primary-blue);
          background: rgba(var(--gold-rgb), 0.1);
          padding: 5px 15px;
          border-radius: 8px;
        }
        .featured-quote {
          font-style: italic;
          color: #666;
          border-left: 3px solid var(--gold);
          padding-left: 15px;
          margin-top: 10px;
        }

        .toppers-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 30px;
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }
        .topper-card {
          background: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border-bottom: 4px solid transparent;
          text-align: center;
        }
        .topper-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 35px rgba(0,0,0,0.1);
        }
        .topper-card.rank-1 { border-bottom-color: var(--gold); }
        .topper-card.rank-2 { border-bottom-color: #C0C0C0; } /* Silver */
        .topper-card.rank-3 { border-bottom-color: #CD7F32; } /* Bronze */
        
        .topper-image-container {
          height: 120px;
          width: 120px;
          margin: 30px auto 10px;
          border-radius: 50%;
          overflow: hidden;
          position: relative;
          border: 3px solid rgba(0,0,0,0.05);
        }
        .topper-card.rank-1 .topper-image-container { border-color: var(--gold); }
        .topper-card.rank-2 .topper-image-container { border-color: #C0C0C0; }
        .topper-card.rank-3 .topper-image-container { border-color: #CD7F32; }
        
        .topper-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .topper-card:hover .topper-image {
          transform: scale(1.1);
        }
        
        .topper-info {
          padding: 20px;
        }
        .topper-name {
          font-size: 18px;
          color: var(--primary-blue);
          font-family: var(--header-font);
          margin-bottom: 5px;
          font-weight: 600;
        }
        .topper-stream {
          font-size: 14px;
          color: #666;
          margin-bottom: 15px;
        }
        .topper-meta {
          display: flex;
          justify-content: space-between;
          font-size: 12px;
          color: #888;
          margin-bottom: 15px;
          padding-bottom: 15px;
          border-bottom: 1px solid #eee;
        }
        .topper-score-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .topper-category {
          font-size: 12px;
          background: #f0f4f8;
          padding: 4px 10px;
          border-radius: 12px;
          color: var(--primary-blue);
          font-weight: 600;
        }
        .topper-score {
          font-size: 16px;
          font-weight: 700;
          color: var(--primary-blue);
        }

        @media (max-width: 768px) {
          .featured-topper-card {
            flex-direction: column;
          }
          .featured-image-wrapper {
            height: auto;
            padding: 30px 30px 0;
          }
          .featured-image-wrapper img {
            width: 180px;
            height: 180px;
          }
          .featured-content {
            padding: 25px;
          }
        }
      `}} />
    </section>
  );
};

export default Toppers;
