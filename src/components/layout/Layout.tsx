import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { CartDrawer } from '../cart/CartDrawer';
import { useCart } from '../../context/CartContext';

export const Layout: React.FC = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { totalQuantity } = useCart();

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <Header
        cartItemCount={totalQuantity}
        onOpenCart={() => setIsCartOpen(true)}
      />

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />

      {/* Cart Drawer Slide-out */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
      />
    </div>
  );
};
