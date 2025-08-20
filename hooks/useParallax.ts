Certainly! Below is a `useParallax.ts` hook that you can use in your luxury FashionTV cosmetics website. This hook will help you implement a parallax scrolling effect, which can enhance the elegant and high-end design you're aiming for.

```typescript
// hooks/useParallax.ts
import { useEffect, useRef } from 'react';

const useParallax = (speed: number) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const handleScroll = () => {
    if (ref.current) {
      const offset = window.pageYOffset;
      ref.current.style.transform = `translateY(${offset * speed}px)`;
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return ref;
};

export default useParallax;
```

### Explanation:
- **Imports**: The hook imports `useEffect` and `useRef` from React.
- **useParallax Function**: This function takes a `speed` parameter that determines how fast the background moves relative to the scroll.
- **Ref**: A ref is created to attach to the element you want to apply the parallax effect to.
- **handleScroll Function**: This function calculates the vertical offset based on the scroll position and applies a transformation to the element.
- **useEffect**: The effect sets up an event listener for the scroll event and cleans it up when the component unmounts.

### Usage:
You can use this hook in your component like this:

```tsx
import React from 'react';
import useParallax from './hooks/useParallax';

const ParallaxComponent: React.FC = () => {
  const parallaxRef = useParallax(0.5); // Adjust speed as needed

  return (
    <div ref={parallaxRef} style={{ height: '100vh', background: 'pink' }}>
      <h1 style={{ color: 'white' }}>Luxury FashionTV Cosmetics</h1>
    </div>
  );
};

export default ParallaxComponent;
```

This will create a parallax effect on the component as you scroll, enhancing the luxurious feel of your website. Adjust the `speed` parameter to achieve the desired effect.