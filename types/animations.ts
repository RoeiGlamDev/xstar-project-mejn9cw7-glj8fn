Certainly! Below is a sample `animationtypes.ts` file that you can use for your luxury FashionTV cosmetics website. This file defines various animation types that can be used in your React components. The animations are designed to enhance the elegant and high-end design of your website.

```typescript
// animationtypes.ts
import { keyframes } from 'styled-components';

// Fade In Animation
export const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

// Slide In Animation
export const slideIn = keyframes`
  0% {
    transform: translateY(20px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

// Scale Up Animation
export const scaleUp = keyframes`
  0% {
    transform: scale(0.9);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

// Bounce Animation
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

// Rotate Animation
export const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

// Slide Out Animation
export const slideOut = keyframes`
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(20px);
    opacity: 0;
  }
`;

// Exporting all animations
const animations = {
  fadeIn,
  slideIn,
  scaleUp,
  bounce,
  rotate,
  slideOut,
};

export default animations;
```

### Explanation:
- **Imports**: The `keyframes` function from `styled-components` is imported to create CSS animations.
- **Animations**: Various animations are defined, including fade-in, slide-in, scale-up, bounce, rotate, and slide-out. These animations can be used to create smooth transitions and effects on your website.
- **Export**: All animations are exported as a default object for easy access in your components.

You can use these animations in your styled components or any other React components to enhance the user experience on your luxury cosmetics website.