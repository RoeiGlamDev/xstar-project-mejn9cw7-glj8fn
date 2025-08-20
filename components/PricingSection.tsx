Here's a `PricingSection.tsx` component for your luxury FashionTV cosmetics website, designed with an elegant and high-end aesthetic in pink and white colors. This component uses React and TypeScript.

import React from 'react';
import './PricingSection.css'; // Assuming you have a CSS file for styles

interface PricingPlan {
  title: string;
  price: string;
  features: string[];
}

const pricingPlans: PricingPlan[] = [
  {
    title: 'Basic',
    price: '$29/month',
    features: ['Feature 1', 'Feature 2', 'Feature 3'],
  },
  {
    title: 'Premium',
    price: '$49/month',
    features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'],
  },
  {
    title: 'Luxury',
    price: '$99/month',
    features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5'],
  },
];

const PricingSection: React.FC = () => {
  return (
    <section className="pricing-section">
      <h2 className="pricing-title">Choose Your Plan</h2>
      <div className="pricing-plans">
        {pricingPlans.map((plan, index) => (
          <div key={index} className="pricing-card">
            <h3 className="pricing-plan-title">{plan.title}</h3>
            <p className="pricing-plan-price">{plan.price}</p>
            <ul className="pricing-plan-features">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="pricing-plan-feature">{feature}</li>
              ))}
            </ul>
            <button className="pricing-plan-button">Select Plan</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;

### CSS (PricingSection.css)
You can create a CSS file named `PricingSection.css` to style the component. Here’s a basic example:

.pricing-section {
  background-color: white;
  padding: 50px 20px;
  text-align: center;
}

.pricing-title {
  font-size: 2.5rem;
  color: #ff69b4; /* Pink color */
  margin-bottom: 30px;
}

.pricing-plans {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.pricing-card {
  background-color: #f8f8f8; /* Light background for cards */
  border: 1px solid #ff69b4; /* Pink border */
  border-radius: 10px;
  padding: 20px;
  width: 300px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
}

.pricing-card:hover {
  transform: translateY(-5px);
}

.pricing-plan-title {
  font-size: 1.8rem;
  color: #ff69b4; /* Pink color */
}

.pricing-plan-price {
  font-size: 1.5rem;
  color: #333;
  margin: 10px 0;
}

.pricing-plan-features {
  list-style: none;
  padding: 0;
}

.pricing-plan-feature {
  margin: 5px 0;
  color: #666;
}

.pricing-plan-button {
  background-color: #ff69b4; /* Pink button */
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s;
}

.pricing-plan-button:hover {
  background-color: #ff1493; /* Darker pink on hover */
}

### Usage
You can import and use the `PricingSection` component in your main application file or wherever you want to display the pricing section.

import React from 'react';
import PricingSection from './components/PricingSection';

const App: React.FC = () => {
  return (
    <div>
      <h1>Welcome to FashionTV Cosmetics</h1>
      <PricingSection />
    </div>
  );
};

export default App;

This setup provides a clean and elegant pricing section suitable for a luxury cosmetics brand. Adjust the styles as needed to fit your overall design vision!