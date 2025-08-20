Here's a sample `lib/utils.ts` file for your luxury FashionTV cosmetics website. This file includes utility functions that might be useful for your application. The functions are written in TypeScript and are designed to be reusable across your components.

```typescript
// lib/utils.ts

export const formatCurrency = (amount: number, currencySymbol: string = '€'): string => {
    return `${currencySymbol}${amount.toFixed(2)}`;
};

export const capitalizeFirstLetter = (string: string): string => {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

export const truncateString = (str: string, maxLength: number): string => {
    if (str.length <= maxLength) return str;
    return str.slice(0, maxLength) + '...';
};

export const isEmailValid = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

export const debounce = (func: Function, delay: number) => {
    let timeoutId: NodeJS.Timeout;
    return (...args: any[]) => {
        if (timeoutId) clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func(...args);
        }, delay);
    };
};

export const getRandomHexColor = (): string => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return `#${randomColor}`;
};

export const formatDate = (date: Date, locale: string = 'en-US'): string => {
    return date.toLocaleDateString(locale, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
};
```

### Explanation of Utility Functions:

1. **formatCurrency**: Formats a number as currency with a specified symbol.
2. **capitalizeFirstLetter**: Capitalizes the first letter of a string.
3. **truncateString**: Truncates a string to a specified length and adds ellipsis if it exceeds that length.
4. **isEmailValid**: Validates an email address using a regular expression.
5. **debounce**: Creates a debounced function that delays invoking the provided function until after a specified delay.
6. **getRandomHexColor**: Generates a random hex color code.
7. **formatDate**: Formats a date object into a readable string based on the specified locale.

You can import and use these utility functions in your React components as needed.