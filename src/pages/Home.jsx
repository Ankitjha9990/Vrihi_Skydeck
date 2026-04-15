import { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useScrollReveal, useDragScroll, useCountUp } from '../hooks/useScrollReveal';
import {
  PhoneIcon, WhatsAppIcon,
  LocationIcon, ClockIcon, MailIcon,
  UsersIcon, StarFilledIcon, UtensilsIcon, AwardIcon,
  MapPinLarge,
} from '../components/common/Icons';
import {
  IMAGES, EXPERIENCES, SIGNATURE_DISHES, SITE
} from '../data/mockData';

export default function Home({ onBookTable }) {
  const pageRef    = useScrollReveal();
  const scrollerRef = useDragScroll();

  // Animated counters
  const [guests,  guestsRef]  = useCountUp(50000, 2200);
  const [dishes,  dishesRef]  = useCountUp(150,   1600);
  const [reviews, reviewsRef] = useCountUp(2400,  1800);
  const [years,   yearsRef]   = useCountUp(3,     1000);

  useEffect(() => {
    document.title = 'Vrihi-Skydeck | Premium Rooftop Restaurant, Patna';
  }, []);

  return (
    <main ref={pageRef}>
      {/* ── 1. HERO ── */}
      <section className="vs-hero">
        <div className="vs-hero__bg">
          <img src={IMAGES.hero} alt={IMAGES.heroAlt} />
        </div>
        <div className="vs-hero__content w-100">
          <Container>
            <span className="vs-hero__label reveal">Patna's Most Exclusive Rooftop</span>
            <h1 className="vs-hero__title reveal">
              Dine Beneath<br />
              <em>the Stars</em>
            </h1>
            <p className="vs-hero__subtitle reveal">
              Experience the finest rooftop dining in Patna with impeccable cuisine.
              Savour your evenings at the city's most prestigious culinary destination.
            </p>
            <div className="vs-hero__ctas reveal">
              <button className="btn-vs-primary btn-vs-lg" onClick={onBookTable}>
                Book a Table
              </button>
              <Link to="/menu" className="btn-vs-secondary btn-vs-lg">
                View Menu
              </Link>
            </div>
          </Container>
        </div>
      </section>

      {/* ── 2. ANIMATED TRUST BAR ── */}
      <section className="section-pad bg-base">
        <Container>
          <div className="trust-bar reveal">
            {/* Stat 1 — Guests */}
            <div className="trust-bar__item">
              <div className="trust-bar__icon">
                <UsersIcon size={22} />
              </div>
              <div className="trust-bar__text">
                <div className="trust-bar__value" ref={guestsRef}>
                  {guests.toLocaleString('en-IN')}<span className="v-gold">+</span>
                </div>
                <div className="trust-bar__label">Happy Guests Hosted</div>
              </div>
            </div>

            {/* Stat 2 — Google Rating */}
            <div className="trust-bar__item">
              <div className="trust-bar__icon">
                <StarFilledIcon size={20} />
              </div>
              <div className="trust-bar__text">
                <div className="trust-bar__value v-gold">4.8</div>
                <div className="trust-bar__stars">
                  {[...Array(5)].map((_, i) => <StarFilledIcon key={i} size={10} />)}
                </div>
                <div className="trust-bar__label" ref={reviewsRef}>
                  {reviews.toLocaleString('en-IN')}+ Reviews
                </div>
              </div>
            </div>

            {/* Stat 3 — Menu Items */}
            <div className="trust-bar__item">
              <div className="trust-bar__icon">
                <UtensilsIcon size={22} />
              </div>
              <div className="trust-bar__text">
                <div className="trust-bar__value" ref={dishesRef}>
                  {dishes}<span className="v-gold">+</span>
                </div>
                <div className="trust-bar__label">Signature Dishes</div>
              </div>
            </div>

            {/* Stat 4 — Years */}
            <div className="trust-bar__item">
              <div className="trust-bar__icon">
                <AwardIcon size={22} />
              </div>
              <div className="trust-bar__text">
                <div className="trust-bar__value" ref={yearsRef}>
                  {years}<span className="v-gold">+</span>
                </div>
                <div className="trust-bar__label">Years of Excellence</div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── 3. EXPERIENCE ── */}
      <section className="section-pad-lg bg-low">
        <Container>
          <div className="section-header section-header--center reveal">
            <span className="section-header__label">Curated Experiences</span>
            <h2 className="section-header__title">
              Experience the <em>Extraordinary</em>
            </h2>
            <p className="section-header__subtitle">
              Every evening at Vrihi-Skydeck is crafted to be a memory you'll carry long after the last bite.
            </p>
          </div>
          <Row className="g-4">
            {EXPERIENCES.map((exp, i) => (
              <Col lg={4} md={6} key={i}>
                <div className="exp-card reveal" style={{ transitionDelay: `${i * 100}ms` }}>
                  <img src={exp.img} alt={exp.title} loading="lazy" />
                  <div className="exp-card__overlay">
                    <h3 className="exp-card__title">{exp.title}</h3>
                    <p className="exp-card__text">{exp.text}</p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* ── 4. STORY ── */}
      <section className="section-pad-lg bg-base">
        <Container>
          <Row className="g-5 align-items-center">
            <Col lg={5} md={6}>
              <img
                src={IMAGES.story}
                alt="The story of Vrihi-Skydeck"
                className="story-img reveal-left"
                loading="lazy"
              />
            </Col>
            <Col lg={7} md={6}>
              <div className="reveal-right">
                <span className="section-header__label">Our Heritage</span>
                <h2 className="section-header__title mb-3">
                  The Story of<br />Vrihi-Skydeck
                </h2>
                <div className="divider-gold"></div>
                <p className="v-body-lg mt-3 mb-3">
                  Vrihi means a precious grain in Sanskrit, representing our commitment to the fundamental purity of ingredients. Born from a vision to position Patna with a truly global dining canvas, Skydeck is where tradition meets the clouds.
                </p>
                <p className="v-body-lg mb-4">
                  Every plate is a masterpiece, every occasion a story, and every night an unforgettable memory written against the Patna skyline.
                </p>
                <Link to="/about" className="btn-vs-secondary">
                  Read Full Story →
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ── 5. SIGNATURE FLAVOURS ── */}
      <section className="section-pad bg-low">
        <Container>
          <div className="section-header section-header--center reveal">
            <span className="section-header__label">Chef's Selection</span>
            <h2 className="section-header__title">Signature Flavours</h2>
            <p className="section-header__subtitle">
              A curated symphony of flavours inspired by global traditions and local ingredients, served under the moonlit sky.
            </p>
          </div>
        </Container>
        <Container fluid className="px-4">
          <div className="vs-scroller reveal" ref={scrollerRef}>
            {SIGNATURE_DISHES.map((dish, i) => (
              <div className="scroller-card" key={i}>
                <img className="scroller-card__img" src={dish.img} alt={dish.name} loading="lazy" />
                <div className="scroller-card__body">
                  <h3 className="scroller-card__name">{dish.name}</h3>
                  <p className="scroller-card__desc">{dish.desc}</p>
                  <span className="scroller-card__price">{dish.price}</span>
                </div>
              </div>
            ))}
          </div>
        </Container>
        <Container className="mt-4 text-center reveal">
          <Link to="/menu" className="btn-vs-primary">View Full Menu →</Link>
        </Container>
      </section>

      {/* ── 6. EVENTS BANNER ── */}
      <section className="section-pad bg-base">
        <Container>
          <div className="events-banner reveal">
            <div className="events-banner__bg">
              <img src={IMAGES.eventsBg} alt="Private events at Vrihi-Skydeck" loading="lazy" />
            </div>
            <div className="events-banner__content w-100">
              <span className="v-label mb-3 d-block">Exclusive Experiences</span>
              <h2 className="v-h1 mb-3" style={{ maxWidth: 560, marginInline: 'auto' }}>
                Host Your <em style={{ color: 'var(--primary)', fontStyle: 'italic' }}>Special Moments</em>
              </h2>
              <p className="v-body-lg mb-4" style={{ maxWidth: 500, marginInline: 'auto' }}>
                From corporate galas to intimate weddings, let our rooftop be the stage for your most cherished memories.
              </p>
              <Link to="/events" className="btn-vs-primary btn-vs-lg">Plan Your Event →</Link>
            </div>
          </div>
        </Container>
      </section>

      {/* ── 7. GALLERY PREVIEW ── */}
      <section className="section-pad bg-low">
        <Container>
          <div className="section-header section-header--center reveal">
            <span className="section-header__label">The Atmosphere</span>
            <h2 className="section-header__title">A Glimpse Into the Sky</h2>
          </div>
          <Row className="g-2 reveal">
            {[IMAGES.gal1, IMAGES.gal2, IMAGES.gal3, IMAGES.gal4].map((src, i) => (
              <Col xs={i === 0 ? 8 : 4} key={i}
                style={{ height: 280, overflow: 'hidden', borderRadius: 'var(--radius-sm)' }}>
                <img
                  src={src} alt={`Gallery ${i + 1}`}
                  style={{
                    width: '100%', height: '100%', objectFit: 'cover',
                    transition: 'transform 0.6s', cursor: 'pointer',
                  }}
                  onMouseOver={e => e.target.style.transform = 'scale(1.05)'}
                  onMouseOut={e  => e.target.style.transform = 'scale(1)'}
                  loading="lazy"
                />
              </Col>
            ))}
          </Row>
          <div className="text-center mt-4 reveal">
            <Link to="/gallery" className="btn-vs-secondary">View Full Gallery →</Link>
          </div>
        </Container>
      </section>

      {/* ── 8. RESERVE CTA ── */}
      <section className="reserve-section">
        <Container>
          <div className="reserve-section__inner reveal">
            <span className="v-label d-block mb-3">Reserve Your Experience</span>
            <h2 className="v-h1 mb-3">
              Reserve Your Table at<br />
              <em style={{ fontStyle: 'italic', color: 'var(--primary)' }}>Vrihi-Skydeck</em>
            </h2>
            <p className="v-body-lg mb-4" style={{ maxWidth: 480, marginInline: 'auto' }}>
              We recommend booking 48 hours in advance for weekend reservations.
            </p>
            <div className="d-flex gap-3 justify-content-center flex-wrap">
              <button className="btn-vs-primary btn-vs-lg" onClick={onBookTable}>
                Book Table
              </button>
              <a href={`tel:${SITE.phoneTel}`} className="btn-vs-icon btn-vs-lg">
                <PhoneIcon /> {SITE.phone}
              </a>
              <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer"
                className="btn-vs-secondary btn-vs-lg">
                <WhatsAppIcon /> WhatsApp
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* ── 9. VISIT US ── */}
      <section className="section-pad bg-low">
        <Container>
          <Row className="g-5 align-items-center">
            <Col lg={5} md={6}>
              <div className="reveal-left">
                <span className="section-header__label">Find Us</span>
                <h2 className="section-header__title mb-4">Visit Us</h2>

                <div className="contact-info-item">
                  <span className="contact-info-icon"><LocationIcon size={16} /></span>
                  <div>
                    <div className="contact-info-label">Location</div>
                    <div className="contact-info-value">
                      {SITE.address.line1},<br />{SITE.address.line2},<br />{SITE.address.city}
                    </div>
                  </div>
                </div>

                <div className="contact-info-item">
                  <span className="contact-info-icon"><ClockIcon size={16} /></span>
                  <div>
                    <div className="contact-info-label">Hours</div>
                    {SITE.hours.map(h => (
                      <div key={h.days} className="contact-info-value">{h.days} · {h.time}</div>
                    ))}
                  </div>
                </div>

                <div className="contact-info-item">
                  <span className="contact-info-icon"><MailIcon size={16} /></span>
                  <div>
                    <div className="contact-info-label">Email</div>
                    <a href={`mailto:${SITE.email}`} className="contact-info-value v-gold">
                      {SITE.email}
                    </a>
                  </div>
                </div>
              </div>
            </Col>

            <Col lg={7} md={6}>
              <div className="map-placeholder reveal-right" style={{ minHeight: 360 }}>
                <div style={{ textAlign: 'center' }}>
                  <MapPinLarge />
                  <div style={{
                    background: 'var(--surface-high)',
                    border: '1px solid var(--border-ghost)',
                    borderRadius: 'var(--radius-md)',
                    padding: 24, maxWidth: 260, marginInline: 'auto',
                    marginTop: 16, textAlign: 'left',
                  }}>
                    <p className="v-h3 mb-2">Vrihi-Skydeck Patna</p>
                    <p className="v-body-lg mb-3" style={{ fontSize: '0.875rem' }}>
                      Located at the heart of the city's financial district, offering unmatched views of the Ganges and the skyline.
                    </p>
                    <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer"
                      className="v-gold"
                      style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                      Open in Google Maps →
                    </a>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
}
