export function ContactPage() {
  return (
    <section className="section-shell">
      <div className="container contact-layout">
        <div className="section-heading reveal">
          <p className="eyebrow">Contact</p>
          <h2>Let's build healthier lives together</h2>
          <p>Innovation • Quality • Trust • Care</p>
        </div>

        <div className="contact-grid">
          <form className="contact-form glass-panel reveal">
            <div className="form-grid">
              <label>
                <span>Name</span>
                <input type="text" name="name" placeholder="Your name" />
              </label>
              <label>
                <span>Phone</span>
                <input type="tel" name="phone" placeholder="Your phone" />
              </label>
              <label>
                <span>Email</span>
                <input type="email" name="email" placeholder="Your email" />
              </label>
              <label>
                <span>Company</span>
                <input type="text" name="company" placeholder="Your company" />
              </label>
              <label className="full">
                <span>Message</span>
                <textarea name="message" rows={5} placeholder="Tell us what you need" />
              </label>
            </div>
            <button className="button button-primary full-width" type="submit">
              Send Enquiry
            </button>
          </form>

          <aside className="contact-card glass-panel reveal">
            <h3>Direct Connect</h3>
            <a href="tel:+919931691959">
              <i className="fa-solid fa-phone" /> Call
            </a>
            <a href="mailto:info@basdilspharma.com">
              <i className="fa-solid fa-envelope" /> Email
            </a>
            <a href="https://wa.me/919931691959" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-whatsapp" /> WhatsApp
            </a>
            <div className="map-placeholder">
              <i className="fa-solid fa-location-dot" />
              <span>Unit No. 304, 3rd Floor, A Wing, Western Edge II, Borivali (East), Mumbai</span>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
