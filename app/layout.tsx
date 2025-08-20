// app/layout.tsx

import React from 'react';
import './globals.css'; // Assuming you have global styles
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Luxury FashionTV Cosmetics',
  description: 'Explore our elegant and high-end cosmetics collection.',
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.className} bg-white text-pink-600`}>
        <header className="bg-pink-500 p-4 shadow-md">
          <h1 className="text-3xl font-bold text-center">Luxury FashionTV Cosmetics</h1>
        </header>
        <main className="p-8">{children}</main>
        <footer className="bg-pink-500 p-4 text-center">
          <p>&copy; {new Date().getFullYear()} Luxury FashionTV Cosmetics. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
};

export default Layout;

### Notes:
- This code assumes you have a global CSS file (`globals.css`) for additional styling.
- The `Inter` font is imported from Google Fonts for a modern look.
- The layout includes a header, main content area, and footer, styled with pink and white colors to match the luxury theme.
- You can customize the styles further in your CSS file as needed.