Here's a sample `pricingpage` component in TypeScript for a luxury FashionTV cosmetics website. This component is styled with pink and white colors to reflect an elegant and high-end design.

// app/pricing/page.tsx

import React from 'react';
import './PricingPage.css'; // Assuming you have a CSS file for styles

const PricingPage: React.FC = () => {
  return (
    <div className="pricing-page">
      <header className="pricing-header">
        <h1>Luxury Pricing Plans</h1>
        <p>Choose the perfect plan that suits your beauty needs.</p>
      </header>
      <div className="pricing-container">
        <div className="pricing-card">
          <h2>Basic Plan</h2>
          <p className="price">$29/month</p>
          <ul>
            <li>Access to basic cosmetics</li>
            <li>Monthly beauty tips</li>
            <li>Exclusive member discounts</li>
          </ul>
          <button className="btn">Select Plan</button>
        </div>
        <div className="pricing-card premium">
          <h2>Premium Plan</h2>
          <p className="price">$49/month</p>
          <ul>
            <li>Access to premium cosmetics</li>
            <li>Personalized beauty consultations</li>
            <li>Early access to new products</li>
          </ul>
          <button className="btn">Select Plan</button>
        </div>
        <div className="pricing-card">
          <h2>Luxury Plan</h2>
          <p className="price">$99/month</p>
          <ul>
            <li>All premium features</li>
            <li>Exclusive luxury products</li>
            <li>VIP customer support</li>
          </ul>
          <button className="btn">Select Plan</button>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;

### CSS (PricingPage.css)

You can create a CSS file named `PricingPage.css` to style the component. Here's a basic example:

/* PricingPage.css */

.pricing-page {
  background-color: white;
  color: #333;
  padding: 2rem;
  text-align: center;
}

.pricing-header {
  margin-bottom: 2rem;
}

.pricing-container {
  display: flex;
  justify-content: center;
  gap: 2rem;
}

.pricing-card {
  background-color: #f8d3e0; /* Light pink */
  border-radius: 10px;
  padding: 2rem;
  width: 300px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.pricing-card.premium {
  border: 2px solid #ff69b4; /* Hot pink */
}

.price {
  font-size: 2rem;
  font-weight: bold;
  color: #d5006d; /* Dark pink */
}

.btn {
  background-color: #ff69b4; /* Hot pink */
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.btn:hover {
  background-color: #d5006d; /* Darker pink */
}

### Notes
- Make sure to adjust the styles according to your design preferences.
- You can further enhance the component by adding animations, icons, or additional features as needed.