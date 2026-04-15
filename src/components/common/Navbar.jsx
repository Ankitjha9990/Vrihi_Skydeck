import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { NAV_LINKS } from '../../data/mockData';

export default function Navbar({ onBookTable }) {
  const [scrolled, setScrolled]     = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  /* ── scroll effect ── */
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  /* ── lock body scroll when mobile menu open ── */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const closeMobile = () => setMobileOpen(false);

  return (
    <header className={`vs-nav${scrolled ? ' scrolled' : ''}`}>
      <div className="vs-nav__inner">

        {/* Logo */}
        <NavLink to="/" className="vs-nav__logo" onClick={closeMobile}>
          VRIHI<span>-SKYDECK</span>
        </NavLink>

        {/* Desktop links */}
        <nav className="vs-nav__links" aria-label="Main navigation">
          {NAV_LINKS.map(link => (
            <NavLink
              key={link.href}
              to={link.href}
              className={({ isActive }) => `vs-nav__link${isActive ? ' active' : ''}`}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Right side */}
        <div className="vs-nav__actions">
          <button
            className="btn-vs-primary btn-vs-sm"
            onClick={onBookTable}
            aria-label="Book a table"
          >
            Book a Table
          </button>

          {/* Hamburger */}
          <button
            className={`vs-nav__burger${mobileOpen ? ' open' : ''}`}
            onClick={() => setMobileOpen(v => !v)}
            aria-label="Toggle navigation"
            aria-expanded={mobileOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {/* Mobile panel */}
      <div className={`vs-nav__panel${mobileOpen ? ' open' : ''}`} aria-hidden={!mobileOpen}>
        {NAV_LINKS.map(link => (
          <NavLink
            key={link.href}
            to={link.href}
            className={({ isActive }) => `vs-nav__panel-link${isActive ? ' active' : ''}`}
            onClick={closeMobile}
          >
            {link.label}
          </NavLink>
        ))}
        <button
          className="btn-vs-primary mt-3"
          style={{ width: '100%', justifyContent: 'center' }}
          onClick={() => { onBookTable(); closeMobile(); }}
        >
          Book a Table
        </button>
      </div>
    </header>
  );
}
