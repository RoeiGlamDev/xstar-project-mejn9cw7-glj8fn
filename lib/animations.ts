Certainly! Below is a sample `lib/animations.ts` file for your luxury FashionTV cosmetics website. This file includes some basic animations that can be used throughout your React components to enhance the elegant and high-end design you are aiming for.

```typescript
// lib/animations.ts

import { keyframes } from 'styled-components';

// Fade in animation
export const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

// Slide in from the left animation
export const slideInLeft = keyframes`
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

// Slide in from the right animation
export const slideInRight = keyframes`
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

// Bounce animation
export const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
`;

// Rotate animation
export const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

// Pulse animation
export const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`;
```

### Usage Example

You can use these animations in your styled components like this:

```typescript
import styled from 'styled-components';
import { fadeIn, slideInLeft } from '../lib/animations';

const AnimatedDiv = styled.div`
  animation: ${fadeIn} 1s ease-in-out;
`;

const SlideInDiv = styled.div`
  animation: ${slideInLeft} 0.5s ease-in-out;
`;
```

This setup allows you to create elegant animations that fit the luxurious theme of your cosmetics website. Adjust the animation durations and easing functions as needed to match your design vision.