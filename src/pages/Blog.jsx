import { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { IMAGES, BLOG_POSTS } from '../data/mockData';

const FEATURED_POST = BLOG_POSTS[0];
const REST_POSTS = BLOG_POSTS.slice(1);

export default function Blog() {
  const pageRef = useScrollReveal();

  useEffect(() => {
    document.title = 'Blog | Vrihi-Skydeck Patna';
  }, []);

  return (
    <main ref={pageRef}>
      {/* Hero */}
      <section className="page-hero">
        <div className="page-hero__bg">
          <img src={IMAGES.blogHero} alt="Vrihi-Skydeck Blog" loading="lazy" />
        </div>
        <div className="page-hero__content">
          <Container>
            <span className="v-label d-block mb-3 reveal">Stories & Insights</span>
            <h1 className="v-h1 reveal">The Skydeck<br /><em className="v-gold" style={{ fontStyle: 'italic' }}>Journal</em></h1>
            <p className="v-body-lg mt-3 reveal" style={{ maxWidth: 460 }}>
              Culinary stories, hosting guides, and behind-the-scenes glimpses from Patna's rooftop dining destination.
            </p>
          </Container>
        </div>
      </section>

      {/* Featured Post */}
      <section className="section-pad-lg bg-base">
        <Container>
          <div className="reveal">
            <span className="section-header__label mb-4 d-block">Featured Story</span>
          </div>
          <Row className="g-5 align-items-center reveal">
            <Col lg={7}>
              <img
                src={FEATURED_POST.img}
                alt={FEATURED_POST.title}
                style={{
                  width: '100%', aspectRatio: '16/9',
                  objectFit: 'cover', borderRadius: 'var(--radius-img)',
                }}
                loading="lazy"
              />
            </Col>
            <Col lg={5}>
              <span className="blog-card__date">{FEATURED_POST.date}</span>
              <h2 className="v-h2 mt-2 mb-3">{FEATURED_POST.title}</h2>
              <p className="v-body-lg mb-4">{FEATURED_POST.excerpt}</p>
              <a href={FEATURED_POST.slug} className="btn-vs-primary">Read Article →</a>
            </Col>
          </Row>
        </Container>
      </section>

      {/* More Posts */}
      <section className="section-pad bg-low">
        <Container>
          <div className="section-header reveal">
            <span className="section-header__label">More from the Journal</span>
            <h2 className="section-header__title">Latest Stories</h2>
          </div>
          <Row className="g-4">
            {REST_POSTS.map((post, i) => (
              <Col md={6} key={post.id}>
                <div className="blog-card reveal" style={{ transitionDelay: `${i * 100}ms` }}>
                  <img src={post.img} alt={post.title} className="blog-card__img" loading="lazy" />
                  <div className="blog-card__body">
                    <span className="blog-card__date">{post.date}</span>
                    <h3 className="blog-card__title">{post.title}</h3>
                    <p className="blog-card__excerpt">{post.excerpt}</p>
                    <a href={post.slug} className="blog-card__link">Read More →</a>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Newsletter */}
      <section className="section-pad bg-base text-center">
        <Container>
          <div className="reveal" style={{ maxWidth: 520, marginInline: 'auto' }}>
            <span className="v-label d-block mb-3">Stay in the Loop</span>
            <h2 className="v-h2 mb-3">Join Our Inner Circle</h2>
            <p className="v-body-lg mb-4">
              Receive exclusive invitations to tasting events, chef specials, and early access to new menu launches.
            </p>
            <div className="d-flex gap-0" style={{ maxWidth: 400, marginInline: 'auto' }}>
              <input
                type="email"
                className="vs-input"
                placeholder="your@email.com"
                style={{ borderRadius: 'var(--radius-sm) 0 0 var(--radius-sm)', flexGrow: 1 }}
              />
              <button
                className="btn-vs-primary"
                style={{ borderRadius: '0 var(--radius-sm) var(--radius-sm) 0', whiteSpace: 'nowrap' }}
              >
                Subscribe
              </button>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
