import { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';
import {
  LocationIcon, PhoneIcon, WhatsAppIcon, MailIcon, ClockIcon, MapPinLarge,
} from '../components/common/Icons';
import { IMAGES, SITE } from '../data/mockData';

export default function Contact() {
  const pageRef = useScrollReveal();

  useEffect(() => {
    document.title = 'Contact Us | Vrihi-Skydeck Patna';
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const btn = e.target.querySelector('button[type="submit"]');
    if (btn) { btn.textContent = 'Sending…'; btn.disabled = true; }
    setTimeout(() => {
      if (btn) { btn.textContent = '✓ Message Sent!'; btn.style.background = '#1a3d2a'; }
      setTimeout(() => {
        e.target.reset();
        if (btn) { btn.textContent = 'Send Message'; btn.style.background = ''; btn.disabled = false; }
      }, 3000);
    }, 1200);
  };

  return (
    <main ref={pageRef}>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero__bg" style={{ height: '100%' }}>
          <img src={IMAGES.contactHero} alt="Get in touch with Vrihi-Skydeck" loading="lazy" />
        </div>
        <div className="page-hero__content">
          <Container>
            <Row className="align-items-center">
              <Col lg={6}>
                <div className="reveal-left">
                  <span className="v-label d-block mb-3">Experience the Heights</span>
                  <h1 className="v-display mb-3" style={{ fontFamily: 'var(--font-serif)' }}>
                    Get in<br />
                    <em className="v-gold" style={{ fontStyle: 'italic' }}>Touch</em>
                  </h1>
                  <p className="v-body-lg">
                    Whether it's a celebratory dinner or a private event at the peak of Patna, our team is here to assist you in crafting the perfect evening.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>

      {/* Contact Details + Inquiry Form */}
      <section className="section-pad-lg bg-base">
        <Container>
          <Row className="g-5">
            {/* Info Panel */}
            <Col lg={5}>
              <div className="contact-info-card reveal-left">
                <h2 className="v-h3 v-gold mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
                  Our Sanctuary
                </h2>

                <div className="contact-info-item">
                  <span className="contact-info-icon"><LocationIcon size={16} /></span>
                  <div>
                    <div className="contact-info-label">Address</div>
                    <div className="contact-info-value">
                      {SITE.address.line1},<br />
                      {SITE.address.line2},<br />
                      {SITE.address.city}
                    </div>
                  </div>
                </div>

                <h3 className="v-h3 v-gold mt-4 mb-3"
                  style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem' }}>
                  Direct Channels
                </h3>

                <div className="contact-info-item">
                  <span className="contact-info-icon"><PhoneIcon size={15} /></span>
                  <div>
                    <div className="contact-info-label">Phone</div>
                    <a href={`tel:${SITE.phoneTel}`} className="contact-info-value v-gold d-block">
                      {SITE.phone}
                    </a>
                  </div>
                </div>

                <div className="contact-info-item">
                  <span className="contact-info-icon"><WhatsAppIcon size={15} /></span>
                  <div>
                    <div className="contact-info-label">WhatsApp</div>
                    <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer"
                      className="contact-info-value v-gold d-block">
                      +91 98765 43210
                    </a>
                  </div>
                </div>

                <div className="contact-info-item">
                  <span className="contact-info-icon"><MailIcon size={15} /></span>
                  <div>
                    <div className="contact-info-label">Email</div>
                    <a href={`mailto:${SITE.email}`} className="contact-info-value v-gold d-block">
                      {SITE.email}
                    </a>
                  </div>
                </div>

                <h3 className="v-h3 v-gold mt-4 mb-3"
                  style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem' }}>
                  Hours of Service
                </h3>
                <div className="contact-info-item">
                  <span className="contact-info-icon"><ClockIcon size={15} /></span>
                  <div>
                    {SITE.hours.map(h => (
                      <div key={h.days} className="hours-row">
                        <span className="hours-day">{h.days}</span>
                        <span className="contact-info-value">{h.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Col>

            {/* Inquiry Form */}
            <Col lg={7}>
              <div
                className="reveal-right"
                style={{
                  background: 'var(--surface-high)',
                  border: '1px solid var(--border-ghost)',
                  borderRadius: 'var(--radius-md)',
                  padding: '40px',
                }}
              >
                <h2 className="v-h3 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>
                  Inquiry Form
                </h2>
                <form onSubmit={handleSubmit}>
                  <Row className="g-3">
                    <Col md={6}>
                      <label className="vs-form-label">Full Name</label>
                      <input type="text" className="vs-input" placeholder="Gautam Singh" required />
                    </Col>
                    <Col md={6}>
                      <label className="vs-form-label">Email Address</label>
                      <input type="email" className="vs-input" placeholder="gautam@example.com" required />
                    </Col>
                    <Col xs={12}>
                      <label className="vs-form-label">Subject</label>
                      <select className="vs-input vs-select">
                        <option>General Inquiry</option>
                        <option>Table Reservation</option>
                        <option>Event Planning</option>
                        <option>Feedback</option>
                        <option>Career Opportunities</option>
                        <option>Media &amp; Press</option>
                      </select>
                    </Col>
                    <Col xs={12}>
                      <label className="vs-form-label">Message</label>
                      <textarea
                        className="vs-input" rows={5}
                        placeholder="How can we assist you today?"
                        style={{ resize: 'vertical' }} required
                      />
                    </Col>
                    <Col xs={12}>
                      <button type="submit" className="btn-vs-primary">Send Message</button>
                    </Col>
                  </Row>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Map Section */}
      <section className="section-pad bg-low">
        <Container>
          <div className="map-placeholder reveal">
            <div>
              <MapPinLarge />
              <div style={{
                background: 'var(--surface-high)',
                border: '1px solid var(--border-ghost)',
                borderRadius: 'var(--radius-md)',
                padding: 24, maxWidth: 280, marginInline: 'auto',
                marginTop: 16, textAlign: 'left',
              }}>
                <p className="v-h3 mb-1" style={{ fontSize: '1.1rem' }}>Vrihi-Skydeck Patna</p>
                <p className="v-body-lg mb-3" style={{ fontSize: '0.85rem' }}>
                  Located at the heart of the city's financial district, offering unmatched views of the Ganges and the skyline.
                </p>
                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer"
                  style={{
                    fontSize: '0.7rem', fontWeight: 700,
                    letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--primary)',
                  }}>
                  Open in Google Maps →
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="section-pad bg-base text-center">
        <Container>
          <div className="reveal">
            <h2 className="v-h2 mb-3">
              Ready for an{' '}
              <em className="v-gold" style={{ fontStyle: 'italic' }}>unforgettable evening?</em>
            </h2>
            <p className="v-body-lg mb-4" style={{ maxWidth: 460, marginInline: 'auto' }}>
              Tables at our rooftop sanctuary are highly coveted. We recommend booking in advance to ensure your preferred spot under the stars.
            </p>
            <div className="d-flex gap-3 justify-content-center flex-wrap">
              <Link to="/events" className="btn-vs-secondary">Private Events</Link>
              <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer"
                className="btn-vs-primary btn-vs-lg">
                <WhatsAppIcon /> Book Your Table
              </a>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
