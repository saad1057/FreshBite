import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import './Receipt.css';

export default function Receipt() {
  const location = useLocation();
  const order = location.state?.order;

  if (!order) {
    return (
      <div className="receipt-page">
        <div className="receipt-content">
          <h1>Order Receipt</h1>
          <div className="receipt-empty">No order found. <Link to="/">Go Home</Link></div>
        </div>
      </div>
    );
  }

  return (
    <div className="receipt-page">
      <div className="receipt-content">
        <h1>Thank you for your order!</h1>
        <div className="receipt-id">Order #{order._id?.slice(-6).toUpperCase() || 'N/A'}</div>
        <div className="receipt-section">
          <h2>Customer Info</h2>
          <div><b>Name:</b> {order.customer.firstName} {order.customer.lastName}</div>
          <div><b>Email:</b> {order.customer.email}</div>
          <div><b>Phone:</b> {order.customer.phone}</div>
          <div><b>Address:</b> {order.customer.street}, {order.customer.apartment && `${order.customer.apartment}, `}{order.customer.city}, {order.customer.state}, {order.customer.zip}</div>
          {order.customer.instructions && <div><b>Instructions:</b> {order.customer.instructions}</div>}
        </div>
        <div className="receipt-section">
          <h2>Order Items</h2>
          <ul className="receipt-items">
            {order.cart.map((item, idx) => (
              <li key={idx} className="receipt-item">
                <span>{item.name} x {item.quantity}</span>
                <span>₹{item.price * item.quantity}</span>
              </li>
            ))}
          </ul>
          <div className="receipt-total">Total: <span>₹{order.total}</span></div>
        </div>
        <div className="receipt-thankyou">We appreciate your business! Your meals will be delivered soon.</div>
        <Link to="/meals" className="receipt-home-btn">Order More Meals</Link>
      </div>
    </div>
  );
} 