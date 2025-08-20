Here's a simple implementation of a Card component in TypeScript for your luxury FashionTV cosmetics website. This component is styled to fit an elegant and high-end design using pink and white colors.

// components/ui/Card.tsx

import React from 'react';
import styled from 'styled-components';

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  price: string;
}

const CardContainer = styled.div`
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const Content = styled.div`
  padding: 16px;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  color: #d5006d; // Pink color
  margin: 0;
`;

const Description = styled.p`
  font-size: 1rem;
  color: #333;
  margin: 8px 0;
`;

const Price = styled.p`
  font-size: 1.2rem;
  color: #d5006d; // Pink color
  font-weight: bold;
  margin: 8px 0;
`;

const Card: React.FC<CardProps> = ({ title, description, imageUrl, price }) => {
  return (
    <CardContainer>
      <Image src={imageUrl} alt={title} />
      <Content>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Price>{price}</Price>
      </Content>
    </CardContainer>
  );
};

export default Card;

### Explanation:
- **CardProps**: This interface defines the props that the Card component will accept, including `title`, `description`, `imageUrl`, and `price`.
- **Styled Components**: The component uses `styled-components` for styling, which allows for scoped styles and dynamic styling based on props.
- **Hover Effect**: The card has a subtle hover effect that lifts it slightly when hovered over, adding to the elegant feel.
- **Color Scheme**: The colors used are pink for the title and price to align with your luxury theme, while the background is white for a clean and sophisticated look.

Make sure to install `styled-components` if you haven't already:

npm install styled-components @types/styled-components

You can now use this `Card` component in your application by importing it and passing the required props.