import { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { LeafIcon, TheaterIcon, BuildingIcon, DiamondIcon } from '../components/common/Icons';
import { IMAGES, SITE } from '../data/mockData';

const VALUES = [
  {
    Icon: LeafIcon,
    title: 'Farm-to-Sky',
    text: 'We source ingredients directly from artisan farms across India, ensuring every dish celebrates its origin.',
  },
  {
    Icon: TheaterIcon,
    title: 'Crafted Theatre',
    text: 'Dinner at Vrihi-Skydeck is a performance — from the kitchen to your table, every motion is intentional.',
  },
  {
    Icon: BuildingIcon,
    title: 'The Patna Perspective',
    text: "We are deeply rooted in Bihar's culinary heritage while daring to reimagine it on an international stage.",
  },
  {
    Icon: DiamondIcon,
    title: 'Elevated Service',
    text: 'Our team are trained hospitality artisans, anticipating needs before they are expressed.',
  },
];

export default function About() {
  const pageRef = useScrollReveal();

  useEffect(() => {
    document.title = 'About Us | Vrihi-Skydeck Patna';
  }, []);

  return (
    <main ref={pageRef}>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero__bg">
          <img src={IMAGES.aboutHero} alt="Vrihi-Skydeck rooftop ambiance" />
        </div>
        <div className="page-hero__content">
          <Container>
            <span className="v-label d-block mb-3 reveal">Our Heritage</span>
            <h1 className="v-h1 reveal" style={{ maxWidth: 640 }}>
              The Story of<br /><em className="v-gold">Vrihi-Skydeck</em>
            </h1>
            <p className="v-body-lg mt-3 reveal" style={{ maxWidth: 520 }}>
              Born from a vision to place Patna on the global culinary map. Where tradition meets the sky.
            </p>
          </Container>
        </div>
      </section>

      {/* Origin Story */}
      <section className="section-pad-lg bg-base">
        <Container>
          <Row className="g-5 align-items-center">
            <Col lg={5}>
              <img src={IMAGES.chef} alt="Executive Chef Arjun Singh"
                className="about-img reveal-left" loading="lazy" />
            </Col>
            <Col lg={7}>
              <div className="reveal-right">
                <span className="section-header__label">How It Began</span>
                <h2 className="section-header__title mb-3">A City Deserved the Sky</h2>
                <div className="divider-gold"></div>
                <p className="v-body-lg mt-4 mb-3">
                  Vrihi is Sanskrit for a precious grain — a nod to our unwavering belief that exceptional cuisine begins with exceptional ingredients. Our founder, Chef Arjun Singh, returned from culinary training in Paris and Singapore with a singular conviction: Patna's rich culinary heritage deserved a world-class platform.
                </p>
                <p className="v-body-lg mb-4">
                  The rooftop was chosen deliberately. Above the city's pulse, guests find perspective — and it is from this elevated vantage point that food tastes different. More intentional. More meaningful. Every evening here is a conversation between the land below and the stars above.
                </p>
                <p style={{
                  fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em',
                  textTransform: 'uppercase', color: 'var(--text-accent)',
                }}>
                  Executive Chef — Arjun Singh
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Values */}
      <section className="section-pad bg-low">
        <Container>
          <div className="section-header section-header--center reveal">
            <span className="section-header__label">Our Philosophy</span>
            <h2 className="section-header__title">What Guides Us</h2>
          </div>
          <Row className="g-4">
            {VALUES.map(({ Icon, title, text }, i) => (
              <Col lg={3} md={6} key={i}>
                <div className="value-card reveal" style={{ transitionDelay: `${i * 80}ms` }}>
                  <div className="value-card__icon">
                    <Icon size={24} />
                  </div>
                  <h3 className="value-card__title">{title}</h3>
                  <p className="value-card__text">{text}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* The Space */}
      <section className="section-pad-lg bg-base">
        <Container>
          <Row className="g-5 align-items-center">
            <Col lg={6}>
              <div className="reveal-left">
                <span className="section-header__label">The Space</span>
                <h2 className="section-header__title mb-3">Designed for the Senses</h2>
                <div className="divider-gold"></div>
                <p className="v-body-lg mt-4 mb-3">
                  Spread across 8,000 sq ft on the 14th floor of Skyline Plaza, Vrihi-Skydeck was designed by award-winning interior architect Priya Mehta alongside landscape designer Kabir Rawat.
                </p>
                <p className="v-body-lg mb-3">
                  Every material was chosen to age beautifully — raw concrete that takes on the warmth of candlelight, teak that deepens with each season, and hand-blown glass lanterns that throw light like fireflies against the Patna night.
                </p>
                <p className="v-body-lg mb-4">
                  The 360° rooftop terrace seats 120 guests, with 18 private booths along the perimeter for intimate gatherings, and a central stage for our live music evenings.
                </p>
                <Link to="/gallery" className="btn-vs-secondary">Explore the Space →</Link>
              </div>
            </Col>
            <Col lg={6}>
              <img src={IMAGES.interior} alt="Vrihi-Skydeck interior"
                className="about-img reveal-right" loading="lazy" />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Numbers */}
      <section className="section-pad bg-low">
        <Container>
          <Row className="g-0">
            {[
              { n: '50,000+', label: 'Guests Hosted' },
              { n: '120',     label: 'Rooftop Seats' },
              { n: '4.8★',   label: 'Google Rating'  },
              { n: '3+',     label: 'Years of Excellence' },
            ].map((stat, i) => (
              <Col key={i}>
                <div
                  className="trust-bar__item reveal"
                  style={{
                    borderLeft: i === 0 ? '1px solid var(--border-ghost)' : 'none',
                    borderRight: '1px solid var(--border-ghost)',
                    borderTop: '1px solid var(--border-ghost)',
                    borderBottom: '1px solid var(--border-ghost)',
                    borderRadius: i === 0
                      ? 'var(--radius-sm) 0 0 var(--radius-sm)'
                      : i === 3 ? '0 var(--radius-sm) var(--radius-sm) 0' : 0,
                    transitionDelay: `${i * 100}ms`,
                  }}
                >
                  <div className="trust-bar__value">{stat.n}</div>
                  <div className="trust-bar__label">{stat.label}</div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* CTA */}
      <section className="section-pad bg-base text-center">
        <Container>
          <div className="reveal">
            <h2 className="v-h2 mb-3">Experience it for yourself</h2>
            <p className="v-body-lg mb-4" style={{ maxWidth: 440, marginInline: 'auto' }}>
              Words can only describe so much. The real story is written in an evening spent at Vrihi-Skydeck.
            </p>
            <div className="d-flex gap-3 justify-content-center flex-wrap">
              <Link to="/menu" className="btn-vs-secondary">Explore the Menu</Link>
              <Link to="/events" className="btn-vs-primary">Plan an Event</Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
