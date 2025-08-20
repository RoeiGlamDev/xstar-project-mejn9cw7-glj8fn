Here's a `FeaturesSection.tsx` component for your luxury FashionTV cosmetics website, designed with an elegant and high-end aesthetic in pink and white colors. This component will showcase various features of your cosmetics line.

import React from 'react';
import styled from 'styled-components';

const FeaturesContainer = styled.section`
  background-color: #fff;
  padding: 60px 20px;
  text-align: center;
`;

const FeatureTitle = styled.h2`
  color: #d5006d; /* Elegant pink color */
  font-size: 2.5rem;
  margin-bottom: 40px;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
`;

const FeatureCard = styled.div`
  background-color: #f8f0f5; /* Light pink background */
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-5px);
  }
`;

const FeatureIcon = styled.div`
  font-size: 3rem;
  color: #d5006d; /* Elegant pink color */
  margin-bottom: 15px;
`;

const FeatureDescription = styled.p`
  color: #333;
  font-size: 1.1rem;
`;

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: '💄',
      title: 'Luxury Quality',
      description: 'Our products are crafted with the finest ingredients for a luxurious experience.',
    },
    {
      icon: '🌿',
      title: 'Eco-Friendly',
      description: 'Sustainable and cruelty-free cosmetics that care for you and the planet.',
    },
    {
      icon: '✨',
      title: 'Exclusive Collections',
      description: 'Limited edition products that elevate your beauty routine.',
    },
    {
      icon: '💖',
      title: 'Personalized Service',
      description: 'Tailored recommendations to suit your unique style and preferences.',
    },
  ];

  return (
    <FeaturesContainer>
      <FeatureTitle>Our Features</FeatureTitle>
      <FeaturesGrid>
        {features.map((feature, index) => (
          <FeatureCard key={index}>
            <FeatureIcon>{feature.icon}</FeatureIcon>
            <h3>{feature.title}</h3>
            <FeatureDescription>{feature.description}</FeatureDescription>
          </FeatureCard>
        ))}
      </FeaturesGrid>
    </FeaturesContainer>
  );
};

export default FeaturesSection;

### Explanation:
- **Styled Components**: The component uses `styled-components` for styling, which allows for scoped CSS and a clean separation of styles from the component logic.
- **Responsive Grid**: The features are displayed in a responsive grid layout that adjusts based on the screen size.
- **Hover Effect**: Each feature card has a subtle hover effect to enhance interactivity.
- **Icons**: Simple emoji icons are used for demonstration; you can replace them with actual icons from a library like FontAwesome or Material Icons as needed.

Make sure to install `styled-components` if you haven't already:

npm install styled-components

This component can be easily integrated into your main application and styled further to match your overall design theme.