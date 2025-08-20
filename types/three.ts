Here's a TypeScript file for a `threetypes` component in a luxury FashionTV cosmetics website. This component will showcase three types of cosmetics in an elegant design. The code includes proper imports and is structured for use in a React application.

```typescript
// src/components/threetypes/types/three.tsx

import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 40px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

const TypeCard = styled.div`
  background-color: #f8e1f4;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  width: 30%;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;

const Title = styled.h3`
  color: #d5006d;
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

const Description = styled.p`
  color: #333;
  font-size: 1rem;
`;

interface CosmeticType {
  title: string;
  description: string;
}

const cosmeticTypes: CosmeticType[] = [
  {
    title: 'Luxury Lipstick',
    description: 'Indulge in our rich, creamy lipsticks that provide long-lasting color and hydration.',
  },
  {
    title: 'Elegant Foundation',
    description: 'Achieve a flawless complexion with our lightweight, buildable foundation.',
  },
  {
    title: 'Radiant Highlighter',
    description: 'Illuminate your features with our stunning highlighters for a radiant glow.',
  },
];

const ThreeTypes: React.FC = () => {
  return (
    <Container>
      {cosmeticTypes.map((type, index) => (
        <TypeCard key={index}>
          <Title>{type.title}</Title>
          <Description>{type.description}</Description>
        </TypeCard>
      ))}
    </Container>
  );
};

export default ThreeTypes;
```

### Explanation:
- **Styled Components**: The component uses `styled-components` for styling, which allows for scoped styles and a clean design.
- **Container**: A flex container that holds the three cosmetic type cards.
- **TypeCard**: Each card has a hover effect to enhance interactivity.
- **CosmeticType Interface**: Defines the structure for each cosmetic type.
- **cosmeticTypes Array**: Contains the data for the three types of cosmetics.
- **ThreeTypes Component**: Maps over the `cosmeticTypes` array to render each card.

Make sure to install `styled-components` if you haven't already:

```bash
npm install styled-components
npm install @types/styled-components
```

This component can be imported and used in your main application file or any other component as needed.