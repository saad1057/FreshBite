import React from 'react';
import './Meals.css';

const meals = [
  {
    name: 'Grilled Chicken Bowl',
    img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80',
    desc: 'Juicy grilled chicken with brown rice, fresh veggies, and a tangy sauce.'
  },
  {
    name: 'Salmon & Quinoa',
    img: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80',
    desc: 'Oven-roasted salmon served with quinoa and seasonal greens.'
  },
  {
    name: 'Vegan Buddha Bowl',
    img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=400&q=80',
    desc: 'A nourishing bowl of chickpeas, sweet potato, kale, and tahini dressing.'
  },
  {
    name: 'Beef Stir Fry',
    img: 'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=400&q=80',
    desc: 'Tender beef strips stir-fried with colorful veggies and jasmine rice.'
  },
  {
    name: 'Pasta Primavera',
    img: 'https://images.unsplash.com/photo-1523987355523-c7b5b0723c6a?auto=format&fit=crop&w=400&q=80',
    desc: 'Pasta tossed with fresh vegetables and a light garlic sauce.'
  },
  {
    name: 'Chicken Caesar Salad',
    img: 'https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=400&q=80',
    desc: 'Classic Caesar salad topped with grilled chicken and parmesan.'
  }
];

const Meals = () => (
  <div className="meals-page">
    <section className="meals-hero">
      <h1>Our Meals</h1>
      <p>Discover our chef-prepared, healthy, and delicious meals. Freshly made and delivered to your door.</p>
    </section>
    <div className="meals-grid">
      {meals.map((meal, idx) => (
        <div className="meal-card" key={idx}>
          <img src={meal.img} alt={meal.name} className="meal-img" />
          <h3>{meal.name}</h3>
          <p>{meal.desc}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Meals; 