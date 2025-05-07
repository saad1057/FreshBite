import React, { useEffect, useState } from 'react';
import './Cart.css';
import { useNavigate } from 'react-router-dom';

const EMPTY_CART_ILLUSTRATION = '🍽️';

export default function Cart() {
  const [cart, setCart] = useState([]);
  const [toast, setToast] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(stored);

    // Listen for add-to-cart toast event
    const handleToast = (e) => {
      if (e.detail && e.detail.message) {
        setToast(e.detail.message);
        setTimeout(() => setToast(''), 2000);
      }
    };
    window.addEventListener('cartToast', handleToast);
    return () => window.removeEventListener('cartToast', handleToast);
  }, []);

  const updateCart = (newCart) => {
    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
    window.dispatchEvent(new Event('storage'));
    window.dispatchEvent(new Event('cartUpdated'));
  };

  const increaseQty = (name) => {
    const newCart = cart.map(item => item.name === name ? { ...item, quantity: item.quantity + 1 } : item);
    updateCart(newCart);
  };

  const decreaseQty = (name) => {
    const newCart = cart.map(item => item.name === name ? { ...item, quantity: Math.max(1, item.quantity - 1) } : item);
    updateCart(newCart);
  };

  const removeItem = (name) => {
    const newCart = cart.filter(item => item.name !== name);
    updateCart(newCart);
  };

  const clearCart = () => {
    updateCart([]);
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      <div className="cart-content">
        {toast && <div className="cart-toast">{toast}</div>}
        {cart.length === 0 ? (
          <div className="cart-empty">
            <div className="cart-empty-illustration">{EMPTY_CART_ILLUSTRATION}</div>
            Your cart is empty. Go add some delicious meals!
          </div>
        ) : (
          <>
            <div className="cart-table-wrapper">
              <table className="cart-table">
                <thead>
                  <tr>
                    <th>Meal</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Subtotal</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map(item => (
                    <tr key={item.name}>
                      <td>{item.name}</td>
                      <td>Rs.{item.price}</td>
                      <td>{item.quantity}</td>
                      <td>
                        <button className="qty-btn" onClick={() => decreaseQty(item.name)} disabled={item.quantity === 1}>-</button>
                        <span className="qty-value">{item.quantity}</span>
                        <button className="qty-btn" onClick={() => increaseQty(item.name)}>+</button>
                      </td>
                      <td>Rs.{item.price * item.quantity}</td>
                      <td><button className="remove-btn" onClick={() => removeItem(item.name)}>Remove</button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="cart-total">Total: <span>Rs.{total}</span></div>
            </div>
            <div className="cart-actions">
              <button className="clear-cart-btn" onClick={clearCart}>Clear Cart</button>
              <button className="checkout-btn" onClick={() => navigate('/checkout')}>Checkout</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}