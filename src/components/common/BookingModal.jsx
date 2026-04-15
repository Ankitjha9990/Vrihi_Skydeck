import { Modal } from 'react-bootstrap';

export default function BookingModal({ show, onHide }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const btn = e.target.querySelector('button[type="submit"]');
    if (btn) {
      btn.textContent = 'Sending...';
      btn.disabled = true;
    }
    setTimeout(() => {
      if (btn) {
        btn.textContent = '✓ Request Sent!';
        btn.style.background = '#1c5c2a';
        btn.style.color = '#e5e2e1';
      }
      setTimeout(() => {
        onHide();
        e.target.reset();
        if (btn) {
          btn.textContent = 'Confirm Reservation';
          btn.style.background = '';
          btn.style.color = '';
          btn.disabled = false;
        }
      }, 2000);
    }, 1200);
  };

  return (
    <Modal
      show={show}
      onHide={onHide}
      centered
      dialogClassName="vs-modal"
      backdropClassName="vs-backdrop"
      size="lg"
    >
      <Modal.Header closeButton>
        <div>
          <p className="v-label" style={{ marginBottom: 6 }}>Reservations</p>
          <Modal.Title
            as="h2"
            className="v-h2"
            style={{ fontFamily: 'var(--font-serif)', marginBottom: 0 }}
          >
            Book Your Table
          </Modal.Title>
        </div>
      </Modal.Header>

      <Modal.Body>
        <form id="booking-form" onSubmit={handleSubmit}>
          <div className="row g-3">
            <div className="col-md-6">
              <label className="vs-form-label">Full Name</label>
              <input
                type="text"
                className="vs-input"
                placeholder="Ankit Kumar"
                required
              />
            </div>
            <div className="col-md-6">
              <label className="vs-form-label">Phone / WhatsApp</label>
              <input
                type="tel"
                className="vs-input"
                placeholder="+91 98765 43210"
                required
              />
            </div>
            <div className="col-md-6">
              <label className="vs-form-label">Preferred Date</label>
              <input
                type="date"
                className="vs-input"
                required
              />
            </div>
            <div className="col-md-3">
              <label className="vs-form-label">Time</label>
              <select className="vs-input vs-select">
                <option value="">Select</option>
                <option>12:00 PM</option>
                <option>01:00 PM</option>
                <option>07:00 PM</option>
                <option>07:30 PM</option>
                <option>08:00 PM</option>
                <option>08:30 PM</option>
                <option>09:00 PM</option>
                <option>09:30 PM</option>
              </select>
            </div>
            <div className="col-md-3">
              <label className="vs-form-label">Guests</label>
              <select className="vs-input vs-select" required>
                <option value="">Count</option>
                {[1,2,3,4,5,6,7,8,9,10].map(n => (
                  <option key={n} value={n}>{n} {n === 1 ? 'Guest' : 'Guests'}</option>
                ))}
                <option value="10+">10+ Guests</option>
              </select>
            </div>
            <div className="col-12">
              <label className="vs-form-label">Occasion (Optional)</label>
              <select className="vs-input vs-select">
                <option value="">Select occasion</option>
                <option>Birthday Celebration</option>
                <option>Anniversary</option>
                <option>Business Dinner</option>
                <option>Romantic Date</option>
                <option>Family Gathering</option>
                <option>Other</option>
              </select>
            </div>
            <div className="col-12">
              <label className="vs-form-label">Special Requests</label>
              <textarea
                className="vs-input"
                rows={3}
                placeholder="Any dietary requirements, seating preferences, or special arrangements..."
                style={{ resize: 'vertical' }}
              />
            </div>
          </div>
        </form>
      </Modal.Body>

      <Modal.Footer>
        <div className="d-flex gap-3 justify-content-end w-100">
          <button className="btn-vs-secondary" onClick={onHide}>
            Cancel
          </button>
          <button
            type="submit"
            form="booking-form"
            className="btn-vs-primary"
          >
            Confirm Reservation
          </button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}
