import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Checkout.css';
import axios from 'axios';

export default function Checkout() {
  const [cart, setCart] = useState([]);
  const [form, setForm] = useState({ firstName: '', lastName: '', street: '', apartment: '', city: '', state: '', zip: '', phone: '', instructions: '', email: '', billingSame: true, offers: false });
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(stored);
  }, []);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess('');
    setError('');
    try {
      const { data } = await axios.post('http://localhost:5000/api/orders', {
        customer: form,
        cart,
        total,
      });
      localStorage.removeItem('cart');
      navigate('/receipt', { state: { order: data } });
    } catch (err) {
      setError('Could not place order. Please try again.');
    }
  };

  if (cart.length === 0) {
    return (
      <div className="checkout-page">
        <div className="checkout-content">
          <h1>Checkout</h1>
          <div className="checkout-empty">Your cart is empty. <Link to="/meals">Browse meals</Link></div>
        </div>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <div className="checkout-progress-bar">
        <button className="progress-step done progress-step-btn" onClick={() => navigate('/cart')}>Cart</button>
        <div className="progress-line done"></div>
        <div className="progress-step active">Checkout</div>
        <div className="progress-line"></div>
        <div className="progress-step">Select Meals</div>
      </div>
      <div className="checkout-columns">
        {/* Left: Shipping Form */}
        <form className="checkout-form" onSubmit={handleSubmit}>
          <h2>Shipping information</h2>
          <div className="checkout-form-row">
            <input type="text" name="firstName" placeholder="First name *" value={form.firstName} onChange={handleChange} required />
            <input type="text" name="lastName" placeholder="Last name *" value={form.lastName} onChange={handleChange} required />
          </div>
          <input type="text" name="street" placeholder="Street *" value={form.street} onChange={handleChange} required />
          <input type="text" name="apartment" placeholder="Apartment, suite, floor" value={form.apartment} onChange={handleChange} />
          <div className="checkout-form-row">
            <input type="text" name="city" placeholder="City *" value={form.city} onChange={handleChange} required />
            <input type="text" name="zip" placeholder="ZIP code *" value={form.zip} onChange={handleChange} required />
          </div>
          <div className="checkout-form-row">
            <input type="text" name="state" placeholder="State *" value={form.state} onChange={handleChange} required />
            <input type="tel" name="phone" placeholder="Phone number *" value={form.phone} onChange={handleChange} required />
          </div>
          <input type="email" name="email" placeholder="Email *" value={form.email} onChange={handleChange} required />
          <input type="text" name="instructions" placeholder="Delivery Instruction" value={form.instructions} onChange={handleChange} />
          <div className="checkout-checkbox-row">
            <label><input type="checkbox" name="billingSame" checked={form.billingSame} onChange={handleChange} /> Billing is the same as delivery</label>
          </div>
          <div className="checkout-checkbox-row">
            <label><input type="checkbox" name="offers" checked={form.offers} onChange={handleChange} /> Receive offers and promotions via text message</label>
          </div>
          <button type="submit" className="place-order-btn">Place Order</button>
          {success && <div className="checkout-success">{success}</div>}
          {error && <div className="checkout-error">{error}</div>}
        </form>
        {/* Right: Order Summary */}
        <div className="checkout-summary">
          <h2>Order summary</h2>
          <ul className="checkout-items">
            {cart.map(item => (
              <li key={item.name} className="checkout-item">
                <span>{item.name} x {item.quantity}</span>
                <span>₹{item.price * item.quantity}</span>
              </li>
            ))}
          </ul>
          <div className="checkout-summary-details">
            <div className="checkout-summary-row">
              <span>Box price</span>
              <span>₹{total}</span>
            </div>
            <div className="checkout-summary-row">
              <span>First box shipping</span>
              <span className="checkout-free">FREE</span>
            </div>
            <div className="checkout-summary-row">
              <span>Tax</span>
              <span>₹0.00</span>
            </div>
            <div className="checkout-summary-row">
              <span>First box discount</span>
              <span className="checkout-discount">-₹0.00</span>
            </div>
            <div className="checkout-summary-row">
              <span>Apply promo code</span>
              <input type="text" className="checkout-promo-input" placeholder="Promo code" disabled />
            </div>
          </div>
          <div className="checkout-total">Total: <span>₹{total}</span></div>
          <div className="checkout-guarantee">
            <span role="img" aria-label="guarantee">🛡️</span> 100% Money-Back Guarantee<br />Don't love your first box? We'll refund it.
          </div>
        </div>
      </div>
    </div>
  );
} 