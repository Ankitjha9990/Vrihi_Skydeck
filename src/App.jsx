import { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import BookingModal from './components/common/BookingModal';
import MobileCTABar from './components/common/MobileCTABar';

import Home    from './pages/Home';
import About   from './pages/About';
import Menu    from './pages/Menu';
import Gallery from './pages/Gallery';
import Events  from './pages/Events';
import Contact from './pages/Contact';
import Blog    from './pages/Blog';

// Scroll to top on page navigation
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

export default function App() {
  const [showBooking, setShowBooking] = useState(false);

  const openBooking  = () => setShowBooking(true);
  const closeBooking = () => setShowBooking(false);

  return (
    <>
      <ScrollToTop />

      <Navbar onBookTable={openBooking} />

      <Routes>
        <Route path="/"        element={<Home    onBookTable={openBooking} />} />
        <Route path="/about"   element={<About />} />
        <Route path="/menu"    element={<Menu  />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/events"  element={<Events />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog"    element={<Blog   />} />
        {/* 404 fallback to Home */}
        <Route path="*"        element={<Home    onBookTable={openBooking} />} />
      </Routes>

      <Footer />

      <MobileCTABar onBookTable={openBooking} />

      <BookingModal show={showBooking} onHide={closeBooking} />
    </>
  );
}
