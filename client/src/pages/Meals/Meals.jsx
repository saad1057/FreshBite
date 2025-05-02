import React from 'react';
import './Meals.css';
import salmonQuinoa from '../../assets/images/salmon&quinoa.jpeg';
import beefStirFry from '../../assets/images/beefstirfry.jpeg';
import pastaPrimavera from '../../assets/images/pasta.jpeg';
import chickenCaesarSalad from '../../assets/images/chicken_ceaser_salad.jpeg';
import nihari from '../../assets/images/Nihari.jpg';
import chickenKarahi from '../../assets/images/chicken-karahi.jpg';
import haleem from '../../assets/images/haleem.jpg';
import chapliKebab from '../../assets/images/kabab.jpeg';
import alooKeema from '../../assets/images/keema.jpg';
import palakPaneer from '../../assets/images/palak.jpeg';
import dalChawal from '../../assets/images/Daal-Chawal.jpg';
import seekhKebab from '../../assets/images/seekh_kabab.jpeg';
import sindhiBiryani from '../../assets/images/sindhi_biryani.jpg';
const meals = [
  {
    name: 'Grilled Chicken Bowl',
    img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80',
    desc: 'Juicy grilled chicken with brown rice, fresh veggies, and a tangy sauce.'
  },
  {
    name: 'Salmon & Quinoa',
    img: salmonQuinoa,
    desc: 'Oven-roasted salmon served with quinoa and seasonal greens.'
  },
  {
    name: 'Vegan Buddha Bowl',
    img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=400&q=80',
    desc: 'A nourishing bowl of chickpeas, sweet potato, kale, and tahini dressing.'
  },
  {
    name: 'Beef Stir Fry',
    img: beefStirFry,
    desc: 'Tender beef strips stir-fried with colorful veggies and jasmine rice.'
  },
  {
    name: 'Pasta Primavera',
    img: pastaPrimavera,
    desc: 'Pasta tossed with fresh vegetables and a light garlic sauce.'
  },
  {
    name: 'Chicken Caesar Salad',
    img: chickenCaesarSalad,
    desc: 'Classic Caesar salad topped with grilled chicken and parmesan.'
  },
  // Pakistani Dishes
  {
    name: 'Chicken Biryani',
    img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80',
    desc: 'Aromatic basmati rice cooked with tender chicken, spices, and herbs.'
  },
  {
    name: 'Beef Nihari',
    img: nihari,
    desc: 'Slow-cooked beef stew in a rich, spicy gravy, served with naan.'
  },
  {
    name: 'Chicken Karahi',
    img: chickenKarahi,
    desc: 'Chicken cooked in a wok with tomatoes, green chilies, and spices.'
  },
  {
    name: 'Haleem',
    img: haleem,
    desc: 'A savory porridge of wheat, lentils, and slow-cooked meat, garnished with fried onions.'
  },
  {
    name: 'Chapli Kebab',
    img: chapliKebab,
    desc: 'Spiced minced meat patties, shallow-fried and served with chutney.'
  },
  {
    name: 'Aloo Keema',
    img: alooKeema,
    desc: 'Ground beef cooked with potatoes and traditional spices.'
  },
  {
    name: 'Palak Paneer',
    img: palakPaneer,
    desc: 'Spinach and cottage cheese curry, a vegetarian favorite.'
  },
  {
    name: 'Daal Chawal',
    img: dalChawal,
    desc: 'Comforting lentil curry served with steamed rice.'
  },
  {
    name: 'Seekh Kebab',
    img: seekhKebab,
    desc: 'Minced meat skewers grilled to perfection, served with raita.'
  },
  {
    name: 'Sindhi Biryani',
    img: sindhiBiryani,
    desc: 'Spicy and tangy biryani with potatoes, chicken, and aromatic spices.'
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