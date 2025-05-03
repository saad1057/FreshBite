import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you would send the form data to your backend or email service
  };

  return (
    <div className="contact-page">
      <div className="contact-bg-shape"></div>
      <section className="contact-hero">
        <h1>Contact Us</h1>
        <p>Have a question or feedback? We'd love to hear from you!</p>
      </section>
      <div className="contact-content">
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
            rows={5}
          />
          <button type="submit" className="primary-button">Send Message</button>
          {submitted && <div className="contact-success">Thank you! We'll get back to you soon.</div>}
        </form>
        <div className="contact-divider" />
        <div className="contact-info">
          <h3>Or reach us at:</h3>
          <p><span className="contact-icon">📧</span> support@freshbite.com</p>
          <p><span className="contact-icon">📞</span> (123) 456-7890</p>
        </div>
      </div>
    </div>
  );
};

export default Contact; 