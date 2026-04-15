import { PhoneIcon, WhatsAppIcon, CalendarIcon } from './Icons';
import { SITE } from '../../data/mockData';

export default function MobileCTABar({ onBookTable }) {
  return (
    <div className="mobile-cta-bar">
      <a href={`tel:${SITE.phoneTel}`} className="btn-vs-icon">
        <PhoneIcon />
        Call
      </a>
      <a
        href={SITE.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-vs-secondary"
        style={{ justifyContent: 'center' }}
      >
        <WhatsAppIcon />
        WhatsApp
      </a>
      <button className="btn-vs-primary" onClick={onBookTable}>
        <CalendarIcon />
        Book Table
      </button>
    </div>
  );
}
