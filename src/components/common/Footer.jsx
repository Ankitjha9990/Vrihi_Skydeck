import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { SITE, NAV_LINKS } from '../../data/mockData';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="vs-footer">
      <Container>
        <Row className="gy-4">
          {/* Brand */}
          <Col lg={4} md={6}>
            <span className="vs-footer__logo">Vrihi-Skydeck</span>
            <p className="vs-footer__tagline">{SITE.tagline}</p>
          </Col>

          {/* Quick Links */}
          <Col lg={2} md={3} sm={6}>
            <p className="vs-footer__heading">Explore</p>
            {NAV_LINKS.slice(0, 4).map((link) => (
              <Link key={link.href} to={link.href} className="vs-footer__link">
                {link.label}
              </Link>
            ))}
          </Col>

          {/* More Links */}
          <Col lg={2} md={3} sm={6}>
            <p className="vs-footer__heading">Connect</p>
            <Link to="/contact" className="vs-footer__link">Contact Us</Link>
            <Link to="/blog" className="vs-footer__link">Blog</Link>
            <a href={SITE.social.instagram} className="vs-footer__link">Instagram</a>
            <a href="#" className="vs-footer__link">Facebook</a>
          </Col>

          {/* Contact Info */}
          <Col lg={4} md={6}>
            <p className="vs-footer__heading">Reservations</p>
            <p className="vs-footer__link">
              {SITE.address.line1},<br />
              {SITE.address.line2},<br />
              {SITE.address.city}
            </p>
            <a href={`tel:${SITE.phoneTel}`} className="vs-footer__link mt-2 d-block">
              {SITE.phone}
            </a>
            <a href={`mailto:${SITE.email}`} className="vs-footer__link">
              {SITE.email}
            </a>
          </Col>
        </Row>

        {/* Bottom bar */}
        <div className="vs-footer__bottom">
          <span className="vs-footer__copy">
            © {year} VRIHI-SKYDECK PATNA. ALL RIGHTS RESERVED.
          </span>
          <div className="vs-footer__social">
            <a href={SITE.social.instagram} className="vs-footer__social-link">Instagram</a>
            <a href="#" className="vs-footer__social-link">Facebook</a>
            <Link to="/contact" className="vs-footer__social-link">Contact</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
