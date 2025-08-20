Here's a `useScrollAnimation.ts` hook that you can use in your luxury FashionTV cosmetics website. This hook will help you create scroll-based animations for your components. The code is written in TypeScript and is suitable for a React application.

```typescript
// hooks/useScrollAnimation.ts
import { useEffect, useState } from 'react';

const useScrollAnimation = (threshold: number = 0.5) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY + window.innerHeight;
    const targetPosition = document.documentElement.scrollHeight * threshold;

    if (scrollPosition >= targetPosition) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return isVisible;
};

export default useScrollAnimation;
```

### Usage Example

You can use this hook in your components to trigger animations based on the scroll position. Here's a simple example of how to use it:

```tsx
// components/AnimatedComponent.tsx
import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import './AnimatedComponent.css'; // Import your CSS for animations

const AnimatedComponent: React.FC = () => {
  const isVisible = useScrollAnimation(0.5); // Trigger animation when 50% of the page is scrolled

  return (
    <div className={`animated-component ${isVisible ? 'fade-in' : ''}`}>
      <h2>Luxury Cosmetics</h2>
      <p>Discover our exclusive range of high-end cosmetics.</p>
    </div>
  );
};

export default AnimatedComponent;
```

### CSS Example

You can add some CSS to create a fade-in effect:

```css
/* AnimatedComponent.css */
.animated-component {
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
}

.animated-component.fade-in {
  opacity: 1;
}
```

This setup will allow you to create elegant scroll animations for your luxury FashionTV cosmetics website. Adjust the threshold and animation styles as needed to fit your design.