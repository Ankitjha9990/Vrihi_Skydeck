import { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { PhoneIcon, WhatsAppIcon } from '../components/common/Icons';
import { IMAGES, EVENT_TYPES, SITE } from '../data/mockData';

export default function Events() {
  const pageRef = useScrollReveal();

  useEffect(() => {
    document.title = 'Events & Banquet | Vrihi-Skydeck Patna';
  }, []);

  const handleEventSubmit = (e) => {
    e.preventDefault();
    const btn = e.target.querySelector('button[type="submit"]');
    if (btn) { btn.textContent = 'Sending…'; btn.disabled = true; }
    setTimeout(() => {
      if (btn) { btn.textContent = '✓ Inquiry Sent!'; btn.style.color = 'var(--primary)'; }
      setTimeout(() => {
        e.target.reset();
        if (btn) { btn.textContent = 'Submit Inquiry'; btn.style.color = ''; btn.disabled = false; }
      }, 3000);
    }, 1400);
  };

  return (
    <main ref={pageRef}>
      {/* Hero */}
      <section className="page-hero">
        <div className="page-hero__bg">
          <img src={IMAGES.eventsHero} alt="Events at Vrihi-Skydeck" loading="lazy" />
        </div>
        <div className="page-hero__content text-center">
          <Container>
            <span className="v-label d-block mb-3 reveal">Exclusive Experiences</span>
            <h1 className="v-h1 reveal">
              Celebrate Life<br />
              <em className="v-gold" style={{ fontStyle: 'italic' }}>at the Top</em>
            </h1>
            <p className="v-body-lg mt-3 reveal" style={{ maxWidth: 480, marginInline: 'auto' }}>
              Transform your milestones into timeless memories against Patna's most breathtaking skyline.
            </p>
          </Container>
        </div>
      </section>

      {/* Event Types */}
      <section className="section-pad-lg bg-base">
        <Container>
          <div className="section-header section-header--center reveal">
            <span className="section-header__label">Event Types</span>
            <h2 className="section-header__title">Your Celebration,<br />Our Canvas</h2>
          </div>
          <Row className="g-4">
            {EVENT_TYPES.map((evt, i) => (
              <Col lg={4} md={6} key={i}>
                <div className="event-type-card reveal" style={{ transitionDelay: `${i * 100}ms` }}>
                  <img src={evt.img} alt={evt.name} className="event-type-card__img" loading="lazy" />
                  <div className="event-type-card__body">
                    <h3 className="event-type-card__name">{evt.name}</h3>
                    <p className="event-type-card__desc">{evt.desc}</p>
                    {evt.features.map((f, fi) => (
                      <p key={fi} className="event-feature">{f}</p>
                    ))}
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Art of Setup */}
      <section className="section-pad bg-low">
        <Container>
          <div className="section-header section-header--center reveal">
            <span className="section-header__label">Exquisite Details for Every Mood</span>
            <h2 className="section-header__title">The Art of Setup</h2>
          </div>
          <div className="art-of-setup-grid reveal">
            <img src={IMAGES.weddingSetup} alt="Wedding setup" className="art-img-tall" loading="lazy" />
            <img src={IMAGES.fireLounge}   alt="Lounge setup"  className="art-img"      loading="lazy" />
            <img src={IMAGES.wineGlass}    alt="Wine service"  className="art-img"      loading="lazy" />
          </div>
        </Container>
      </section>

      {/* Event Inquiry Form */}
      <section className="section-pad bg-base">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <div
                className="reveal"
                style={{
                  background: 'var(--surface-high)',
                  border: '1px solid var(--border-ghost)',
                  borderRadius: 'var(--radius-md)',
                  padding: '48px',
                }}
              >
                <div className="text-center mb-4">
                  <span className="v-label d-block mb-2">Event Planning</span>
                  <h2 className="v-h2" style={{ fontFamily: 'var(--font-serif)' }}>Event Inquiry</h2>
                  <p className="v-body-lg mt-2">
                    Tell us about your vision, and our concierge will craft a tailored proposal.
                  </p>
                </div>
                <form onSubmit={handleEventSubmit}>
                  <Row className="g-3">
                    <Col md={6}>
                      <label className="vs-form-label">Full Name</label>
                      <input type="text" className="vs-input" placeholder="Suzanne Smith" required />
                    </Col>
                    <Col md={6}>
                      <label className="vs-form-label">Event Type</label>
                      <select className="vs-input vs-select">
                        <option>Birthday Celebration</option>
                        <option>Anniversary</option>
                        <option>Corporate Party</option>
                        <option>Wedding Reception</option>
                        <option>Other</option>
                      </select>
                    </Col>
                    <Col md={6}>
                      <label className="vs-form-label">Guest Count</label>
                      <input type="number" className="vs-input" placeholder="e.g. 50" min="1" />
                    </Col>
                    <Col md={6}>
                      <label className="vs-form-label">Preferred Date</label>
                      <input type="date" className="vs-input" />
                    </Col>
                    <Col md={6}>
                      <label className="vs-form-label">Phone Number</label>
                      <input type="tel" className="vs-input" placeholder="+91 98765 43210" required />
                    </Col>
                    <Col md={6}>
                      <label className="vs-form-label">Email</label>
                      <input type="email" className="vs-input" placeholder="you@example.com" />
                    </Col>
                    <Col xs={12}>
                      <label className="vs-form-label">Additional Details</label>
                      <textarea
                        className="vs-input" rows={4}
                        placeholder="Share your vision, dietary needs, theme preferences..."
                        style={{ resize: 'vertical' }}
                      />
                    </Col>
                    <Col xs={12} className="text-center mt-2">
                      <button type="submit" className="btn-vs-primary btn-vs-lg">
                        Submit Inquiry
                      </button>
                    </Col>
                  </Row>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CTA */}
      <section className="section-pad bg-low text-center">
        <Container>
          <div className="reveal">
            <h2 className="v-h2 mb-3">Questions? Let's Talk</h2>
            <p className="v-body-lg mb-4" style={{ maxWidth: 440, marginInline: 'auto' }}>
              Our events concierge team is available Monday–Saturday, 10 am–7 pm to discuss your vision.
            </p>
            <div className="d-flex gap-3 justify-content-center flex-wrap">
              <a href={`tel:${SITE.phoneTel}`} className="btn-vs-icon">
                <PhoneIcon /> {SITE.phone}
              </a>
              <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer"
                className="btn-vs-secondary">
                <WhatsAppIcon /> WhatsApp Us
              </a>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
