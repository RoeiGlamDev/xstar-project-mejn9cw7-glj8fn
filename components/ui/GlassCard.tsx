Here's a React component for a `GlassCard` that fits the elegant and high-end design you described for your luxury FashionTV cosmetics website. This component uses styled-components for styling, which allows for a clean and modular approach to CSS in your React application.

// components/ui/GlassCard.tsx

import React from 'react';
import styled from 'styled-components';

interface GlassCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const CardContainer = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 20px;
  margin: 20px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const CardImage = styled.img`
  width: 100%;
  border-radius: 15px;
  margin-bottom: 15px;
`;

const CardTitle = styled.h2`
  color: #ff69b4; // Pink color
  font-size: 1.5rem;
  margin: 0;
`;

const CardDescription = styled.p`
  color: #ffffff; // White color
  font-size: 1rem;
`;

const GlassCard: React.FC<GlassCardProps> = ({ title, description, imageUrl }) => {
  return (
    <CardContainer>
      <CardImage src={imageUrl} alt={title} />
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardContainer>
  );
};

export default GlassCard;

### Explanation:
- **GlassCardProps**: This interface defines the props that the `GlassCard` component will accept: `title`, `description`, and `imageUrl`.
- **Styled Components**: The `CardContainer`, `CardImage`, `CardTitle`, and `CardDescription` are styled components that define the appearance of the card, including a glass effect with a blur and a pink/white color scheme.
- **Hover Effect**: The card has a subtle hover effect that lifts it slightly when the user hovers over it, enhancing the luxury feel.
- **Export**: The component is exported as the default export, making it easy to import and use in other parts of your application.

You can use this `GlassCard` component in your application by importing it and passing the required props.