import { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { IMAGES, MENU_SECTIONS } from '../data/mockData';

export default function Menu() {
  const [active, setActive] = useState('cocktails');
  const pageRef = useScrollReveal();
  const section = MENU_SECTIONS.find(s => s.id === active);

  useEffect(() => {
    document.title = 'The Menu | Vrihi-Skydeck Patna';
  }, []);

  return (
    <main ref={pageRef}>
      {/* Hero */}
      <section className="page-hero">
        <div className="page-hero__bg">
          <img src={IMAGES.menuHero} alt="Culinary excellence" loading="lazy" />
        </div>
        <div className="page-hero__content text-center">
          <Container>
            <span className="v-label d-block mb-3 reveal">Culinary Excellence</span>
            <h1 className="v-h1 reveal">
              The Culinary<br />
              <em className="v-gold" style={{ fontStyle: 'italic' }}>Voyage</em>
            </h1>
            <p className="v-body-lg mt-3 reveal" style={{ maxWidth: 480, marginInline: 'auto' }}>
              A curated symphony of flavours inspired by global traditions and local ingredients, served under the moonlit sky.
            </p>
          </Container>
        </div>
      </section>

      {/* Menu Sections */}
      <section className="section-pad-lg bg-base">
        <Container>
          {/* Tab Nav */}
          <div className="menu-tab-nav reveal">
            {MENU_SECTIONS.map(s => (
              <button
                key={s.id}
                className={`menu-tab-btn ${active === s.id ? 'active' : ''}`}
                onClick={() => setActive(s.id)}
              >
                {s.label}
              </button>
            ))}
          </div>

          {/* Section Content */}
          <Row className="g-5 align-items-start" key={active}>
            {/* Menu items list */}
            <Col lg={7}>
              <div className="menu-section-bg reveal">
                <h2 className="v-h3 mb-4">{section.label}</h2>
                {section.items.map((item, i) => (
                  <div className="menu-item" key={i}>
                    <div className="menu-item__info">
                      <div className="menu-item__name">{item.name}</div>
                      <div className="menu-item__desc">{item.desc}</div>
                    </div>
                    <div className="menu-item__price">{item.price}</div>
                  </div>
                ))}
              </div>
            </Col>
            {/* Section image */}
            <Col lg={5}>
              <img
                src={section.img}
                alt={section.imgAlt}
                style={{
                  width: '100%', aspectRatio: '3/4',
                  objectFit: 'cover',
                  borderRadius: 'var(--radius-img)',
                }}
                className="reveal-right"
                loading="lazy"
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Note */}
      <section className="section-pad bg-low text-center">
        <Container>
          <div className="reveal" style={{ maxWidth: 580, marginInline: 'auto' }}>
            <span className="v-label d-block mb-3">Please Note</span>
            <p className="v-body-lg">
              All prices are in Indian Rupees and inclusive of applicable taxes. Menu items and prices are subject to seasonal availability. Please inform us of any dietary requirements or allergies.
            </p>
          </div>
        </Container>
      </section>
    </main>
  );
}
