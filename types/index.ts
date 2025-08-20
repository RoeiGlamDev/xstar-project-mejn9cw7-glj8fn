```typescript
// types/index.ts

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
  inStock: boolean;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  products: Product[];
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  password: string; // Consider using a hashed password in a real application
  address?: string;
  phoneNumber?: string;
}

export interface Order {
  id: string;
  user: User;
  items: CartItem[];
  totalAmount: number;
  orderDate: Date;
  status: 'pending' | 'shipped' | 'delivered' | 'canceled';
}

export interface Review {
  id: string;
  productId: string;
  userId: string;
  rating: number; // 1 to 5
  comment: string;
  createdAt: Date;
}

export interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  register: (userData: User) => Promise<void>;
}

export interface CartContextType {
  items: CartItem[];
  addItem: (product: Product, quantity: number) => void;
  removeItem: (productId: string) => void;
  clearCart: () => void;
  totalItems: number;
  totalAmount: number;
}
```

This TypeScript code defines the types for a luxury cosmetics website, including products, categories, cart items, users, orders, reviews, and context types for authentication and cart management.