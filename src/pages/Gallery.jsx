import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { IMAGES, GALLERY_IMAGES } from '../data/mockData';

const FILTERS = ['All', 'Ambiance', 'Cuisine', 'Events'];

export default function Gallery() {
  const [filter, setFilter] = useState('All');
  const [lightboxSrc, setLightboxSrc] = useState(null);
  const pageRef = useScrollReveal();

  const filtered = filter === 'All'
    ? GALLERY_IMAGES
    : GALLERY_IMAGES.filter(img => img.category.toLowerCase() === filter.toLowerCase());

  useEffect(() => {
    document.title = 'Gallery | Vrihi-Skydeck Patna';
  }, []);

  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') setLightboxSrc(null); };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = lightboxSrc ? 'hidden' : '';
  }, [lightboxSrc]);

  return (
    <main ref={pageRef}>
      {/* Hero */}
      <section className="page-hero">
        <div className="page-hero__bg">
          <img src={IMAGES.galleryHero} alt="Gallery of Vrihi-Skydeck" loading="lazy" />
        </div>
        <div className="page-hero__content">
          <Container>
            <span className="v-label d-block mb-3 reveal">Visual Journey</span>
            <h1 className="v-h1 reveal">
              A Glimpse Into<br />
              <em className="v-gold" style={{ fontStyle: 'italic' }}>Our World</em>
            </h1>
            <p className="v-body-lg mt-3 reveal" style={{ maxWidth: 480 }}>
              Real ambiance. Real moments. Real magic on the rooftop of Patna.
            </p>
          </Container>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-pad-lg bg-base">
        <Container>
          {/* Filters */}
          <div className="gallery-filter-bar reveal">
            {FILTERS.map(f => (
              <button
                key={f}
                className={`gallery-filter-btn ${filter === f ? 'active' : ''}`}
                onClick={() => setFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="gallery-grid">
            {filtered.map((img) => (
              <div
                key={img.id}
                className="gallery-item"
                onClick={() => setLightboxSrc({ src: img.src, alt: img.alt })}
              >
                <img src={img.src} alt={img.alt} loading="lazy" />
                <div className="gallery-item__overlay">
                  <div className="gallery-zoom-icon">⤢</div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Lightbox */}
      <div
        className={`vs-lightbox ${lightboxSrc ? 'open' : ''}`}
        onClick={() => setLightboxSrc(null)}
      >
        {lightboxSrc && (
          <img
            src={lightboxSrc.src}
            alt={lightboxSrc.alt}
            className="vs-lightbox__img"
            onClick={e => e.stopPropagation()}
          />
        )}
        <button
          className="vs-lightbox__close"
          onClick={() => setLightboxSrc(null)}
        >
          ✕
        </button>
      </div>
    </main>
  );
}
