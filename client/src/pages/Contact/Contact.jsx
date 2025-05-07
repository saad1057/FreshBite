import React, { useState } from 'react';
import './Contact.css';
import axios from 'axios';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await axios.post('http://localhost:5000/api/contact', form);
      setSubmitted(true);
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      setError('Something went wrong. Please try again.');
    }
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
          {submitted && (
            <div className="contact-success" style={{ color: 'green', marginTop: '1rem', fontWeight: 'bold' }}>
              Thank you! Your message has been submitted. Thanks for contacting us.
            </div>
          )}
          {error && (
            <div className="contact-error" style={{ color: 'red', marginTop: '1rem', fontWeight: 'bold' }}>
              {error}
            </div>
          )}
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