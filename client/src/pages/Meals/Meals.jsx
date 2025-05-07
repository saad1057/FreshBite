import React, { useState } from 'react';
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
    desc: 'Juicy grilled chicken with brown rice, fresh veggies, and a tangy sauce.',
    time: '20 min',
    calories: 520,
    difficulty: 'Easy',
    subtitle: 'with Brown Rice & Tangy Sauce',
    price: 499,
    ingredients: [
      { name: 'Chicken Breast', amount: '200g' },
      { name: 'Brown Rice', amount: '1 cup' },
      { name: 'Mixed Veggies', amount: '1 cup' },
      { name: 'Tangy Sauce', amount: '2 tbsp' }
    ],
    notIncluded: ['Salt', 'Pepper', 'Cooking Oil'],
    utensils: ['Large Pot', 'Strainer', 'Large Pan'],
    nutrition: {
      Calories: '520kcal',
      Fat: '18g',
      Protein: '38g',
      Carbohydrate: '48g',
      Sugar: '6g',
      Fiber: '5g',
      Cholesterol: '90mg',
      Sodium: '800mg'
    }
  },
  {
    name: 'Salmon & Quinoa',
    img: salmonQuinoa,
    desc: 'Oven-roasted salmon served with quinoa and seasonal greens.',
    time: '25 min',
    calories: 480,
    difficulty: 'Medium',
    subtitle: 'with Roasted Veggies',
    price: 499,
    ingredients: [
      { name: 'Salmon Fillet', amount: '180g' },
      { name: 'Quinoa', amount: '1 cup' },
      { name: 'Seasonal Veggies', amount: '1 cup' },
      { name: 'Lemon', amount: '1 wedge' }
    ],
    notIncluded: ['Salt', 'Pepper', 'Olive Oil'],
    utensils: ['Baking Tray', 'Pot', 'Knife'],
    nutrition: {
      Calories: '480kcal',
      Fat: '16g',
      Protein: '35g',
      Carbohydrate: '42g',
      Sugar: '4g',
      Fiber: '6g',
      Cholesterol: '70mg',
      Sodium: '600mg'
    }
  },
  {
    name: 'Vegan Buddha Bowl',
    img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=400&q=80',
    desc: 'A nourishing bowl of chickpeas, sweet potato, kale, and tahini dressing.',
    time: '30 min',
    calories: 410,
    difficulty: 'Easy',
    subtitle: 'with Chickpeas & Tahini',
    price: 499,
    ingredients: [
      { name: 'Chickpeas', amount: '1 cup' },
      { name: 'Sweet Potato', amount: '1 medium' },
      { name: 'Kale', amount: '1 cup' },
      { name: 'Tahini', amount: '2 tbsp' }
    ],
    notIncluded: ['Salt', 'Pepper', 'Olive Oil'],
    utensils: ['Bowl', 'Baking Tray', 'Knife'],
    nutrition: {
      Calories: '410kcal',
      Fat: '10g',
      Protein: '14g',
      Carbohydrate: '65g',
      Sugar: '9g',
      Fiber: '11g',
      Cholesterol: '0mg',
      Sodium: '350mg'
    }
  },
  {
    name: 'Beef Stir Fry',
    img: beefStirFry,
    desc: 'Tender beef strips stir-fried with colorful veggies and jasmine rice.',
    time: '25 min',
    calories: 540,
    difficulty: 'Medium',
    subtitle: 'with Jasmine Rice',
    price: 499,
    ingredients: [
      { name: 'Beef Strips', amount: '200g' },
      { name: 'Jasmine Rice', amount: '1 cup' },
      { name: 'Mixed Veggies', amount: '1 cup' },
      { name: 'Soy Sauce', amount: '1 tbsp' }
    ],
    notIncluded: ['Salt', 'Pepper', 'Oil'],
    utensils: ['Wok', 'Pot', 'Knife'],
    nutrition: {
      Calories: '540kcal',
      Fat: '20g',
      Protein: '36g',
      Carbohydrate: '54g',
      Sugar: '5g',
      Fiber: '4g',
      Cholesterol: '80mg',
      Sodium: '900mg'
    }
  },
  {
    name: 'Pasta Primavera',
    img: pastaPrimavera,
    desc: 'Pasta tossed with fresh vegetables and a light garlic sauce.',
    time: '20 min',
    calories: 390,
    difficulty: 'Easy',
    subtitle: 'with Fresh Veggies',
    price: 499,
    ingredients: [
      { name: 'Pasta', amount: '120g' },
      { name: 'Mixed Veggies', amount: '1 cup' },
      { name: 'Garlic', amount: '2 cloves' },
      { name: 'Olive Oil', amount: '1 tbsp' }
    ],
    notIncluded: ['Salt', 'Pepper', 'Parmesan'],
    utensils: ['Pot', 'Pan', 'Knife'],
    nutrition: {
      Calories: '390kcal',
      Fat: '8g',
      Protein: '12g',
      Carbohydrate: '68g',
      Sugar: '7g',
      Fiber: '6g',
      Cholesterol: '0mg',
      Sodium: '320mg'
    }
  },
  {
    name: 'Chicken Caesar Salad',
    img: chickenCaesarSalad,
    desc: 'Classic Caesar salad topped with grilled chicken and parmesan.',
    time: '15 min',
    calories: 350,
    difficulty: 'Easy',
    subtitle: 'with Grilled Chicken',
    price: 499,
    ingredients: [
      { name: 'Chicken Breast', amount: '120g' },
      { name: 'Romaine Lettuce', amount: '1 cup' },
      { name: 'Caesar Dressing', amount: '2 tbsp' },
      { name: 'Parmesan', amount: '2 tbsp' }
    ],
    notIncluded: ['Salt', 'Pepper', 'Croutons'],
    utensils: ['Bowl', 'Knife'],
    nutrition: {
      Calories: '350kcal',
      Fat: '14g',
      Protein: '28g',
      Carbohydrate: '18g',
      Sugar: '3g',
      Fiber: '3g',
      Cholesterol: '60mg',
      Sodium: '500mg'
    }
  },
  {
    name: 'Chicken Biryani',
    img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80',
    desc: 'Aromatic basmati rice cooked with tender chicken, spices, and herbs.',
    time: '40 min',
    calories: 600,
    difficulty: 'Hard',
    subtitle: 'with Basmati Rice',
    price: 499,
    ingredients: [
      { name: 'Chicken', amount: '200g' },
      { name: 'Basmati Rice', amount: '1 cup' },
      { name: 'Spices', amount: '1 tbsp' },
      { name: 'Yogurt', amount: '2 tbsp' }
    ],
    notIncluded: ['Salt', 'Pepper', 'Oil'],
    utensils: ['Pot', 'Strainer'],
    nutrition: {
      Calories: '600kcal',
      Fat: '22g',
      Protein: '32g',
      Carbohydrate: '70g',
      Sugar: '4g',
      Fiber: '3g',
      Cholesterol: '85mg',
      Sodium: '950mg'
    }
  },
  {
    name: 'Beef Nihari',
    img: nihari,
    desc: 'Slow-cooked beef stew in a rich, spicy gravy, served with naan.',
    time: '60 min',
    calories: 700,
    difficulty: 'Hard',
    subtitle: 'with Naan',
    price: 499,
    ingredients: [
      { name: 'Beef', amount: '250g' },
      { name: 'Nihari Masala', amount: '1 tbsp' },
      { name: 'Naan', amount: '1 piece' },
      { name: 'Ginger', amount: '1 tbsp' }
    ],
    notIncluded: ['Salt', 'Lemon', 'Oil'],
    utensils: ['Pot', 'Ladle'],
    nutrition: {
      Calories: '700kcal',
      Fat: '38g',
      Protein: '40g',
      Carbohydrate: '48g',
      Sugar: '3g',
      Fiber: '2g',
      Cholesterol: '110mg',
      Sodium: '1200mg'
    }
  },
  {
    name: 'Chicken Karahi',
    img: chickenKarahi,
    desc: 'Chicken cooked in a wok with tomatoes, green chilies, and spices.',
    time: '35 min',
    calories: 520,
    difficulty: 'Medium',
    subtitle: 'with Tomatoes & Chilies',
    price: 499,
    ingredients: [
      { name: 'Chicken', amount: '200g' },
      { name: 'Tomatoes', amount: '2 medium' },
      { name: 'Green Chilies', amount: '2' },
      { name: 'Spices', amount: '1 tbsp' }
    ],
    notIncluded: ['Salt', 'Oil'],
    utensils: ['Wok', 'Spoon'],
    nutrition: {
      Calories: '520kcal',
      Fat: '18g',
      Protein: '36g',
      Carbohydrate: '24g',
      Sugar: '5g',
      Fiber: '3g',
      Cholesterol: '80mg',
      Sodium: '700mg'
    }
  },
  {
    name: 'Haleem',
    img: haleem,
    desc: 'A savory porridge of wheat, lentils, and slow-cooked meat, garnished with fried onions.',
    time: '50 min',
    calories: 480,
    difficulty: 'Medium',
    subtitle: 'with Fried Onions',
    price: 499,
    ingredients: [
      { name: 'Meat', amount: '150g' },
      { name: 'Wheat', amount: '1/2 cup' },
      { name: 'Lentils', amount: '1/2 cup' },
      { name: 'Fried Onions', amount: '2 tbsp' }
    ],
    notIncluded: ['Salt', 'Lemon'],
    utensils: ['Pot', 'Spoon'],
    nutrition: {
      Calories: '480kcal',
      Fat: '12g',
      Protein: '22g',
      Carbohydrate: '60g',
      Sugar: '4g',
      Fiber: '7g',
      Cholesterol: '50mg',
      Sodium: '600mg'
    }
  },
  {
    name: 'Chapli Kebab',
    img: chapliKebab,
    desc: 'Spiced minced meat patties, shallow-fried and served with chutney.',
    time: '30 min',
    calories: 420,
    difficulty: 'Medium',
    subtitle: 'with Chutney',
    price: 499,
    ingredients: [
      { name: 'Minced Meat', amount: '200g' },
      { name: 'Spices', amount: '1 tbsp' },
      { name: 'Onion', amount: '1 small' },
      { name: 'Chutney', amount: '2 tbsp' }
    ],
    notIncluded: ['Salt', 'Oil'],
    utensils: ['Pan', 'Bowl'],
    nutrition: {
      Calories: '420kcal',
      Fat: '22g',
      Protein: '28g',
      Carbohydrate: '18g',
      Sugar: '2g',
      Fiber: '2g',
      Cholesterol: '70mg',
      Sodium: '500mg'
    }
  },
  {
    name: 'Aloo Keema',
    img: alooKeema,
    desc: 'Ground beef cooked with potatoes and traditional spices.',
    time: '35 min',
    calories: 510,
    difficulty: 'Medium',
    subtitle: 'with Potatoes',
    price: 499,
    ingredients: [
      { name: 'Ground Beef', amount: '200g' },
      { name: 'Potatoes', amount: '2 small' },
      { name: 'Spices', amount: '1 tbsp' },
      { name: 'Onion', amount: '1 small' }
    ],
    notIncluded: ['Salt', 'Oil'],
    utensils: ['Pan', 'Knife'],
    nutrition: {
      Calories: '510kcal',
      Fat: '24g',
      Protein: '28g',
      Carbohydrate: '38g',
      Sugar: '3g',
      Fiber: '4g',
      Cholesterol: '80mg',
      Sodium: '650mg'
    }
  },
  {
    name: 'Palak Paneer',
    img: palakPaneer,
    desc: 'Spinach and cottage cheese curry, a vegetarian favorite.',
    time: '30 min',
    calories: 400,
    difficulty: 'Easy',
    subtitle: 'with Spinach & Paneer',
    price: 499,
    ingredients: [
      { name: 'Spinach', amount: '2 cups' },
      { name: 'Paneer', amount: '100g' },
      { name: 'Spices', amount: '1 tbsp' },
      { name: 'Onion', amount: '1 small' }
    ],
    notIncluded: ['Salt', 'Oil'],
    utensils: ['Pan', 'Knife'],
    nutrition: {
      Calories: '400kcal',
      Fat: '18g',
      Protein: '16g',
      Carbohydrate: '32g',
      Sugar: '4g',
      Fiber: '5g',
      Cholesterol: '40mg',
      Sodium: '400mg'
    }
  },
  {
    name: 'Daal Chawal',
    img: dalChawal,
    desc: 'Comforting lentil curry served with steamed rice.',
    time: '25 min',
    calories: 350,
    difficulty: 'Easy',
    subtitle: 'with Steamed Rice',
    price: 499,
    ingredients: [
      { name: 'Lentils', amount: '1 cup' },
      { name: 'Rice', amount: '1 cup' },
      { name: 'Spices', amount: '1 tbsp' },
      { name: 'Onion', amount: '1 small' }
    ],
    notIncluded: ['Salt', 'Oil'],
    utensils: ['Pot', 'Strainer'],
    nutrition: {
      Calories: '350kcal',
      Fat: '4g',
      Protein: '12g',
      Carbohydrate: '68g',
      Sugar: '2g',
      Fiber: '7g',
      Cholesterol: '0mg',
      Sodium: '300mg'
    }
  },
  {
    name: 'Seekh Kebab',
    img: seekhKebab,
    desc: 'Minced meat skewers grilled to perfection, served with raita.',
    time: '30 min',
    calories: 430,
    difficulty: 'Medium',
    subtitle: 'with Raita',
    price: 499,
    ingredients: [
      { name: 'Minced Meat', amount: '200g' },
      { name: 'Spices', amount: '1 tbsp' },
      { name: 'Onion', amount: '1 small' },
      { name: 'Raita', amount: '2 tbsp' }
    ],
    notIncluded: ['Salt', 'Oil'],
    utensils: ['Grill', 'Bowl'],
    nutrition: {
      Calories: '430kcal',
      Fat: '22g',
      Protein: '28g',
      Carbohydrate: '14g',
      Sugar: '2g',
      Fiber: '2g',
      Cholesterol: '70mg',
      Sodium: '500mg'
    }
  },
  {
    name: 'Sindhi Biryani',
    img: sindhiBiryani,
    desc: 'Spicy and tangy biryani with potatoes, chicken, and aromatic spices.',
    time: '45 min',
    calories: 650,
    difficulty: 'Hard',
    subtitle: 'with Potatoes & Chicken',
    price: 499,
    ingredients: [
      { name: 'Chicken', amount: '200g' },
      { name: 'Basmati Rice', amount: '1 cup' },
      { name: 'Potatoes', amount: '1 medium' },
      { name: 'Spices', amount: '1 tbsp' }
    ],
    notIncluded: ['Salt', 'Pepper', 'Oil'],
    utensils: ['Pot', 'Strainer'],
    nutrition: {
      Calories: '650kcal',
      Fat: '24g',
      Protein: '34g',
      Carbohydrate: '80g',
      Sugar: '5g',
      Fiber: '4g',
      Cholesterol: '90mg',
      Sodium: '1100mg'
    }
  }
];

const Meals = () => {
  const [modalMeal, setModalMeal] = useState(null);

  // Add to Cart logic
  const addToCart = (meal) => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existing = cart.find(item => item.name === meal.name);
    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({ name: meal.name, price: meal.price, quantity: 1, img: meal.img });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    window.dispatchEvent(new Event('cartUpdated'));
    window.dispatchEvent(new CustomEvent('cartToast', { detail: { message: `${meal.name} added to cart!` } }));
    // Optionally, trigger a UI update or toast here
  };

  return (
    <div className="meals-page">
      <section className="meals-hero">
        <h1>Our Meals</h1>
        <p>Discover our chef-prepared, healthy, and delicious meals. Freshly made and delivered to your door.</p>
      </section>
      <div className="meals-trust-bar">
        <span>🥗 Chef-prepared</span>
        <span>🌱 Fresh Ingredients</span>
        <span>🚚 Fast Delivery</span>
        <span>⭐ 4.8/5 Customer Rating</span>
      </div>
      <div className="meals-grid">
        {meals.map((meal, idx) => (
          <div className="meal-card" key={idx}>
            <img src={meal.img} alt={meal.name} className="meal-img" />
            <h3>{meal.name}</h3>
            <p>{meal.desc}</p>
            <div className="meal-price">₹{meal.price}</div>
            <div className="meal-card-actions">
              <button className="meal-details-btn" onClick={() => setModalMeal(meal)}>View Details</button>
              <button className="meal-add-to-cart-btn" onClick={() => addToCart(meal)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {modalMeal && (
        <div className="meal-modal-overlay" onClick={() => setModalMeal(null)}>
          <div className="meal-modal" onClick={e => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setModalMeal(null)}>&times;</button>
            <img src={modalMeal.img} alt={modalMeal.name} className="modal-meal-img" />
            <div className="modal-meal-header">
              <h2>{modalMeal.name}</h2>
              {modalMeal.subtitle && <h4>{modalMeal.subtitle}</h4>}
            </div>
            <div className="modal-meal-tags">
              {modalMeal.time && <span className="modal-tag">⏱ {modalMeal.time}</span>}
              {modalMeal.calories && <span className="modal-tag">🔥 {modalMeal.calories} cal</span>}
              {modalMeal.difficulty && <span className="modal-tag">💪 {modalMeal.difficulty}</span>}
            </div>
            <div className="modal-meal-section">
              <h3>Description</h3>
              <p>{modalMeal.desc}</p>
            </div>
            {modalMeal.ingredients && (
              <div className="modal-meal-section">
                <h3>Ingredients</h3>
                <ul className="modal-ingredients-list">
                  {modalMeal.ingredients.map((ing, i) => (
                    <li key={i}>{ing.amount} {ing.name}</li>
                  ))}
                </ul>
              </div>
            )}
            {modalMeal.notIncluded && (
              <div className="modal-meal-section">
                <h4>Not included in your delivery</h4>
                <ul className="modal-notincluded-list">
                  {modalMeal.notIncluded.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
            {modalMeal.utensils && (
              <div className="modal-meal-section">
                <h4>Utensils</h4>
                <ul className="modal-utensils-list">
                  {modalMeal.utensils.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
            {modalMeal.nutrition && (
              <div className="modal-meal-section">
                <h4>Nutrition Facts</h4>
                <table className="modal-nutrition-table">
                  <tbody>
                    {Object.entries(modalMeal.nutrition).map(([key, val], i) => (
                      <tr key={i}><td>{key}</td><td>{val}</td></tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Meals; 