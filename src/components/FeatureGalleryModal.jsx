import React, { useState, useEffect } from 'react';

const FeatureGalleryModal = ({ isOpen, onClose, category }) => {
  const [hoveredImage, setHoveredImage] = useState(null);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [thumbnailIndex, setThumbnailIndex] = useState(0);
  const [isMobilePreviewOpen, setIsMobilePreviewOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setHoveredImage(null);
      setIsFullScreen(false);
      setThumbnailIndex(0);
      setIsMobilePreviewOpen(false);
    }
  }, [isOpen]);

  // Real images from the public folder, mapped by category
  const categoryImageMap = {
    'Academics': [
      'IMG-20251122-WA0422.jpg',
      'IMG-20251224-WA03521.jpg',
      'IMG-20251224-WA0352.jpg',
      'IMG-20260309-WA0016.jpg',
      'IMG-20260309-WA0101.jpg',
      'IMG-20260309-WA0114.jpg',
      'IMG-20260309-WA0115.jpg',
      'IMG-20260309-WA0122.jpg',
      'IMG-20260309-WA0160.jpg',
      'IMG-20260309-WA0171.jpg',
      'Recoverd_jpg_file3471.jpg',
      'WhatsApp Image 2025-03-07 at 1.11.18 PM.jpeg',
      'WhatsApp Image 2025-03-07 at 1.13.57 PM.jpeg',
      'WhatsApp Image 2025-03-07 at 1.54.58 PM.jpeg',
      'WhatsApp Image 2025-03-07 at 1.55.27 PM.jpeg',
      'WhatsApp Image 2025-03-07 at 1.55.35 PM.jpeg',

      'WhatsApp Image 2025-03-07 at 4.26.56 PM.jpeg',

      'WhatsApp Image 2025-03-07 at 4.45.27 PM.jpeg',
      'WhatsApp Image 2025-03-07 at 4.46.32 PM.jpeg',
      'WhatsApp Image 2025-03-07 at 4.46.34 PM.jpeg',
      'WhatsApp Image 2025-03-07 at 4.46.37 PM.jpeg',
      'WhatsApp Image 2025-03-07 at 4.46.39 PM.jpeg',
      'WhatsApp Image 2025-03-07 at 4.47.01 PM.jpeg',
    ],
    'Arts & Culture': [
      'WhatsApp Image 2025-03-07 at 1.17.02 PM.jpeg',
      'WhatsApp Image 2025-03-07 at 4.05.04 PM.jpeg',
      'WhatsApp Image 2025-03-07 at 4.26.42 PM.jpeg',
      'WhatsApp Image 2025-03-07 at 4.26.42.jpeg',
      'WhatsApp Image 2025-03-07 at 4.26.43 PM (1).jpeg',
      'WhatsApp Image 2025-03-07 at 4.26.44 PM (1).jpeg',
      'WhatsApp Image 2025-03-07 at 4.26.44 PM.jpeg',
      'WhatsApp Image 2025-03-07 at 4.26.54 PM.jpeg',
      'WhatsApp Image 2025-03-07 at 4.26.55 PM.jpeg',
      'WhatsApp Image 2025-03-07 at 4.46.40 PM.jpeg',
      'WhatsApp Image 2025-03-07 at 4.46.42 PM.jpeg',
      'WhatsApp Image 2025-03-07 at 4.46.47 PM (1).jpeg',
      'WhatsApp Image 2025-03-07 at 4.46.49 PM (1).jpeg',
      'WhatsApp Image 2025-03-07 at 4.46.49 PM.jpeg',
      'WhatsApp Image 2025-03-07 at 4.46.52 PM.jpeg',
    ],
    'Campus Life': [
      'WhatsApp Image 2025-03-07 at 1.17.02 PM.jpeg',
      'WhatsApp Image 2025-03-07 at 1.24.13 PM.jpeg',
      'WhatsApp Image 2025-03-07 at 2.01.18 PM.jpeg',
      'WhatsApp Image 2025-03-07 at 4.26.42 PM.jpeg',
      'WhatsApp Image 2025-03-07 at 4.26.43 PM (1).jpeg',
      'WhatsApp Image 2025-03-07 at 4.26.44 PM (1).jpeg',
      'WhatsApp Image 2025-03-07 at 4.26.44 PM.jpeg',
      'WhatsApp Image 2025-03-07 at 4.26.54 PM.jpeg',
      'WhatsApp Image 2025-03-07 at 4.46.42 PM.jpeg',
      'WhatsApp Image 2025-03-07 at 4.46.44 PM.jpeg',
      'WhatsApp Image 2025-03-07 at 4.46.47 PM.jpeg',
      'WhatsApp Image 2025-03-07 at 4.46.49 PM.jpeg',
    ],
    'Spiritual Heritage': [
      '20260123_112109.jpeg',
      '20260123_113621.jpg.jpeg',
      'IMG-20250222-WA0241.jpg',
      'IMG-20251123-WA0015.jpg',
      'IMG-20260309-WA0140.jpg',
      'WhatsApp Image 2025-03-07 at 1.17.04 PM.jpeg',
      'WhatsApp Image 2025-03-07 at 1.24.13 PM.jpeg',
      'WhatsApp Image 2025-03-07 at 4.37.13 PM.jpeg',
      'WhatsApp Image 2025-03-07 at 4.37.13.jpeg',
      'WhatsApp Image 2025-03-07 at 4.37.14.jpeg',
      'WhatsApp Image 2025-03-07 at 4.37.14 PM.jpeg',
      'WhatsApp Image 2025-03-07 at 4.37.14.jpeg',
      'WhatsApp Image 2025-03-07 at 4.46.54 PM.jpeg',
    ],
    'Sports': [
      '1113895-ko.webp',
      '5-1-300x200.jpeg',
      'A5-scaled.jpg',
      'WhatsApp Image 2025-03-07 at 4.26.42 PM.jpeg',
      'WhatsApp Image 2025-03-07 at 4.26.44 PM.jpeg',
      'hq720.jpg',
      's1-kho-kho.webp',
    ],
  };

  // Map category title to the public subfolder name
  const folderMap = {
    'Academics': 'Academics',
    'Arts & Culture': 'Arts & Culture',
    'Campus Life': 'Campus Life',
    'Spiritual Heritage': 'Spiritual Heritage',
    'Sports': 'Sports',
  };

  const mockImages = React.useMemo(() => {
    const folder = folderMap[category] || '';
    const files = categoryImageMap[category] || [];
    return files.map((filename, i) => {
      // Encode each path segment so spaces → %20; CSS background-image requires valid URLs.
      // We purposefully un-encode '%26' back to '&' because the Vite dev server's static asset router
      // fails to match physical folders when the '&' is encoded as '%26'.
      const path = folder
        ? `/${encodeURIComponent(folder).replace(/%26/g, '&')}/${encodeURIComponent(filename).replace(/%26/g, '&')}`
        : `https://picsum.photos/seed/${i}/800/600`;
      return {
        id: i,
        url: path,
        thumbnail: path,
        title: `${category ? category.toUpperCase() : 'EVENT'} MOMENT ${i + 1}`,
        credit: 'SRI SAI KULWANTH',
        tags: [category?.toUpperCase() || 'GALLERY'],
      };
    });
  }, [category]);

  const activeImage = hoveredImage || mockImages[0];

  useEffect(() => {
    if (activeImage && mockImages.length > 0) {
      const index = mockImages.findIndex(img => img.id === activeImage.id);
      if (index !== -1) {
        if (index < thumbnailIndex) {
          setThumbnailIndex(index);
        } else if (index >= thumbnailIndex + 5) {
          setThumbnailIndex(index - 4);
        }
      }
    }
  }, [activeImage, mockImages, thumbnailIndex]);

  const handlePrevThumbnails = () => {
    setThumbnailIndex(prev => Math.max(0, prev - 1));
  };

  const handleNextThumbnails = () => {
    setThumbnailIndex(prev => Math.min(mockImages.length - 5, prev + 1));
  };

  if (!isOpen) return null;

  return (
    <div className="gallery-modal-overlay">
      <div className="gallery-modal-content">
        <button className="gallery-close-btn" onClick={onClose}>
          &times;
        </button>

        <div className={`gallery-header ${isMobilePreviewOpen ? 'mobile-hide' : ''}`}>
          <h2>{category ? category.toUpperCase() : 'GALLERY'}</h2>
          <div className="gallery-underline"></div>
          <p className="gallery-subtitle">SELECTED: {category ? category.toUpperCase() : 'CATEGORY'} GALLERY - HOVER OR CLICK AN IMAGE TO VIEW FULL SIZE</p>
        </div>

        <div className={`gallery-body ${isMobilePreviewOpen ? 'mobile-view-preview' : 'mobile-view-grid'}`}>
          {/* Left Side - Image Grid */}
          <div className="gallery-grid">
            {mockImages.map((img) => (
              <div
                key={img.id}
                className={`gallery-grid-item ${activeImage.id === img.id ? 'active' : ''}`}
                onMouseEnter={() => setHoveredImage(img)}
                onClick={() => {
                  setHoveredImage(img);
                  setIsMobilePreviewOpen(true);
                }}
                style={{ backgroundImage: `url("${img.thumbnail}")` }}
              >
              </div>
            ))}
          </div>

          {/* Right Side - Preview Panel */}
          <div className="gallery-preview">
            <div className="preview-card">
              <div
                className="preview-image"
                style={{ backgroundImage: `url("${activeImage.url}")`, cursor: 'zoom-in' }}
                onClick={() => setIsFullScreen(true)}
              ></div>

              <div className="preview-details">
                <button className="mobile-back-btn" onClick={() => setIsMobilePreviewOpen(false)}>
                  &larr; Back to Gallery
                </button>
                <div className="preview-title-row">
                  <div>
                    <h3 className="preview-title">{activeImage.title}</h3>
                    <p className="preview-credit">PHOTO: {activeImage.credit}</p>
                  </div>
                  <button className="preview-view-all" onClick={() => setIsFullScreen(true)}>Full Size</button>
                </div>

                <div className="preview-thumbnails-container">
                  <button className="thumb-nav" onClick={handlePrevThumbnails} disabled={thumbnailIndex === 0} style={{ opacity: thumbnailIndex === 0 ? 0.3 : 1, cursor: thumbnailIndex === 0 ? 'default' : 'pointer' }}>&lt;</button>
                  <div className="preview-thumbnails">
                    {mockImages.slice(thumbnailIndex, thumbnailIndex + 5).map((img, idx) => (
                      <div
                        key={idx}
                        className={`preview-thumb ${activeImage.id === img.id ? 'active' : ''}`}
                        style={{ backgroundImage: `url("${img.thumbnail}")` }}
                        onClick={() => setHoveredImage(img)}
                      ></div>
                    ))}
                  </div>
                  <button className="thumb-nav" onClick={handleNextThumbnails} disabled={thumbnailIndex >= mockImages.length - 5} style={{ opacity: thumbnailIndex >= mockImages.length - 5 ? 0.3 : 1, cursor: thumbnailIndex >= mockImages.length - 5 ? 'default' : 'pointer' }}>&gt;</button>
                </div>

                <div className="preview-pagination">
                  <span className="page-active">1</span>
                  <span>2</span>
                  <span>3</span>
                  <span>...</span>
                  <span>Next</span>
                </div>

                <div className="preview-tags">
                  {activeImage.tags.map((tag, idx) => (
                    <span key={idx} className="tag-filter">{tag}</span>
                  ))}
                  <span className="tag-filter">GALLERY</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Full Screen Overlay */}
      {isFullScreen && (
        <div className="fullscreen-overlay" onClick={() => setIsFullScreen(false)}>
          <button className="fullscreen-close" onClick={(e) => { e.stopPropagation(); setIsFullScreen(false); }}>&times;</button>
          <img src={activeImage.url} alt="Full Size" className="fullscreen-image" onClick={(e) => e.stopPropagation()} />
        </div>
      )}

      <style dangerouslySetInnerHTML={{
        __html: `
        .gallery-modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(0, 0, 0, 0.7);
          backdrop-filter: blur(5px);
          z-index: 10000;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 20px;
        }

        .gallery-modal-content {
          background: #ffffff;
          width: 100%;
          max-width: 1200px;
          height: 90vh;
          border-radius: 8px;
          position: relative;
          display: flex;
          flex-direction: column;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
          overflow: hidden;
        }

        .gallery-close-btn {
          position: absolute;
          top: 15px;
          right: 20px;
          background: var(--deep-blue, #0d1b2a);
          color: white;
          border: none;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 24px;
          cursor: pointer;
          z-index: 10;
          transition: transform 0.2s ease, background 0.2s ease;
        }

        .gallery-close-btn:hover {
          transform: scale(1.1);
          background: var(--gold, #d4af37);
        }

        .gallery-header {
          text-align: center;
          padding: 30px 20px 10px;
          flex-shrink: 0;
        }

        .gallery-header h2 {
          color: var(--deep-blue, #0d1b2a);
          font-family: var(--header-font, 'Georgia', serif);
          font-size: 32px;
          letter-spacing: 2px;
          margin-bottom: 10px;
        }

        .gallery-underline {
          height: 3px;
          width: 60px;
          background-color: var(--gold, #d4af37);
          margin: 0 auto 15px;
        }

        .gallery-subtitle {
          color: #333;
          font-weight: 600;
          font-size: 14px;
          letter-spacing: 1px;
        }

        .gallery-body {
          display: flex;
          flex: 1;
          overflow: hidden;
          padding: 20px;
          gap: 20px;
        }

        /* Left Side Grid */
        .gallery-grid {
          flex: 0 0 55%;
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
          grid-auto-rows: 100px;
          gap: 12px;
          overflow-y: auto;
          padding-right: 10px;
        }

        /* Scrollbar styling for grid */
        .gallery-grid::-webkit-scrollbar {
          width: 6px;
        }
        .gallery-grid::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 4px;
        }
        .gallery-grid::-webkit-scrollbar-thumb {
          background: #ccc;
          border-radius: 4px;
        }

        .gallery-grid-item {
          border-radius: 6px;
          background-size: cover;
          background-position: center;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          opacity: 0.9;
        }

        .gallery-grid-item::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 6px;
          border: 3px solid transparent;
          transition: border-color 0.3s ease;
        }

        .gallery-grid-item:hover,
        .gallery-grid-item.active {
          opacity: 1;
          transform: scale(1.03);
          box-shadow: 0 4px 12px rgba(0,0,0,0.2);
          z-index: 2;
        }

        .gallery-grid-item.active::after {
          border-color: var(--gold, #d4af37);
        }

        /* Right Side Preview */
        .gallery-preview {
          flex: 1;
          display: flex;
          flex-direction: column;
          overflow-y: auto;
          padding-right: 5px;
        }

        .preview-card {
          background: white;
          border-radius: 8px;
          box-shadow: 0 8px 25px rgba(0,0,0,0.1);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          height: 100%;
          border: 1px solid #eee;
        }

        .preview-image {
          width: 100%;
          height: 350px;
          background-size: cover;
          background-position: center;
          transition: background-image 0.4s ease;
        }

        .preview-details {
          padding: 20px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .preview-title-row {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 20px;
        }

        .preview-title {
          font-family: var(--header-font, 'Georgia', serif);
          color: var(--deep-blue, #0d1b2a);
          font-size: 20px;
          margin-bottom: 5px;
        }

        .preview-credit {
          font-size: 12px;
          color: #666;
          text-transform: uppercase;
        }

        .preview-view-all {
          background: var(--deep-blue, #0d1b2a);
          color: white;
          border: none;
          padding: 8px 16px;
          border-radius: 4px;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.3s ease;
        }

        .preview-view-all:hover {
          background: var(--gold, #d4af37);
        }

        .preview-thumbnails-container {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 15px;
          margin-bottom: 15px;
        }

        .thumb-nav {
          background: none;
          border: none;
          font-size: 20px;
          color: #666;
          cursor: pointer;
        }

        .thumb-nav:hover {
          color: var(--deep-blue, #0d1b2a);
        }

        .preview-thumbnails {
          display: flex;
          gap: 10px;
        }

        .preview-thumb {
          width: 60px;
          height: 45px;
          background-size: cover;
          background-position: center;
          border-radius: 4px;
          cursor: pointer;
          border: 2px solid transparent;
          transition: all 0.2s ease;
        }

        .preview-thumb:hover,
        .preview-thumb.active {
          border-color: var(--gold, #d4af37);
          transform: scale(1.05);
        }

        .preview-pagination {
          display: flex;
          justify-content: center;
          gap: 15px;
          margin-bottom: 20px;
          font-size: 14px;
          color: #666;
          align-items: center;
        }

        .preview-pagination span {
          cursor: pointer;
        }

        .preview-pagination span:hover {
          color: var(--deep-blue, #0d1b2a);
        }

        .preview-pagination .page-active {
          background: #f0ecdf;
          color: var(--deep-blue, #0d1b2a);
          font-weight: bold;
          padding: 4px 10px;
          border-radius: 4px;
        }

        .preview-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 15px;
          font-size: 12px;
          color: #444;
          font-weight: 600;
          margin-top: auto;
          border-top: 1px solid #eee;
          padding-top: 15px;
        }

        .preview-tags .tag {
          display: flex;
          align-items: center;
          gap: 5px;
        }
        
        .preview-tags .tag-filter {
          display: flex;
          align-items: center;
          gap: 5px;
          color: var(--deep-blue, #0d1b2a);
        }

        .mobile-back-btn {
          display: none;
          background: none;
          border: none;
          color: var(--deep-blue, #0d1b2a);
          font-weight: bold;
          font-size: 14px;
          cursor: pointer;
          margin-bottom: 15px;
          text-align: left;
          padding: 0;
          text-transform: uppercase;
        }

        @media (max-width: 900px) {
          .gallery-body {
            flex-direction: column;
            overflow-y: hidden;
            padding: 10px;
          }
          
          .mobile-hide {
            display: none !important;
          }
          
          .mobile-view-grid .gallery-preview {
            display: none !important;
          }
          .mobile-view-preview .gallery-grid {
            display: none !important;
          }
          
          .mobile-back-btn {
            display: inline-block !important;
          }

          .gallery-grid {
            grid-template-columns: repeat(3, 1fr) !important;
            grid-auto-rows: clamp(80px, 25vw, 120px) !important;
            flex: 1 !important;
            max-height: none !important;
            height: auto;
            overflow-y: auto;
            padding-right: 5px;
            padding-bottom: 30px !important;
            gap: 8px;
          }
          
          .gallery-preview {
            flex: none;
            overflow: visible;
          }
          
          .preview-image {
            height: 250px;
          }
        }

        /* Full Screen Overlay Styles */
        .fullscreen-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(0, 0, 0, 0.95);
          z-index: 20000;
          display: flex;
          justify-content: center;
          align-items: center;
          backdrop-filter: blur(10px);
        }
        .fullscreen-close {
          position: absolute;
          top: 30px;
          right: 40px;
          color: white;
          font-size: 50px;
          background: transparent;
          border: none;
          cursor: pointer;
          transition: color 0.3s ease;
          line-height: 1;
        }
        .fullscreen-close:hover {
          color: var(--gold, #d4af37);
        }
        .fullscreen-image {
          max-width: 90vw;
          max-height: 90vh;
          object-fit: contain;
          border-radius: 8px;
          box-shadow: 0 10px 40px rgba(0,0,0,0.5);
        }
      `}} />
    </div>
  );
};

export default FeatureGalleryModal;
