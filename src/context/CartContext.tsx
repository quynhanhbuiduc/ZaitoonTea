import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product } from '../types/product';
import { CartItem, CartState } from '../types/cart';

interface CartContextType extends CartState {
  addItem: (product: Product, quantity: number, selectedPackaging?: string, unitPrice?: number) => void;
  updateQuantity: (id: string, quantity: number) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
  applyCoupon: (code: string) => boolean;
  couponCode: string | null;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const LOCAL_STORAGE_KEY = 'zaitoon_tea_cart_v1';
const FREE_SHIPPING_THRESHOLD = 500000; // Miễn phí vận chuyển từ 500k
const STANDARD_SHIPPING_FEE = 30000;

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [couponCode, setCouponCode] = useState<string | null>(null);
  const [discountPercent, setDiscountPercent] = useState<number>(0);

  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(items));
    } catch (e) {
      console.error('Không thể lưu giỏ hàng vào localStorage:', e);
    }
  }, [items]);

  const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = items.reduce((sum, item) => sum + item.totalPrice, 0);
  const shippingFee = subtotal === 0 || subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : STANDARD_SHIPPING_FEE;
  const discount = Math.round(subtotal * discountPercent);
  const grandTotal = Math.max(0, subtotal + shippingFee - discount);

  const addItem = (
    product: Product,
    quantity: number,
    selectedPackaging?: string,
    unitPrice?: number
  ) => {
    const packaging = selectedPackaging || product.specifications.packagingOptions[0] || 'Hộp tiêu chuẩn';
    const price = unitPrice || product.price;
    const cartItemId = `${product.id}_${packaging}`;

    setItems((prevItems) => {
      const existingIndex = prevItems.findIndex((item) => item.id === cartItemId);
      if (existingIndex > -1) {
        const updated = [...prevItems];
        const newQty = updated[existingIndex].quantity + quantity;
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: newQty,
          totalPrice: newQty * price,
        };
        return updated;
      } else {
        const newItem: CartItem = {
          id: cartItemId,
          productId: product.id,
          product,
          quantity,
          selectedPackaging: packaging,
          unitPrice: price,
          totalPrice: quantity * price,
        };
        return [...prevItems, newItem];
      }
    });
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(id);
      return;
    }
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity,
              totalPrice: quantity * item.unitPrice,
            }
          : item
      )
    );
  };

  const removeItem = (id: string) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setItems([]);
    setCouponCode(null);
    setDiscountPercent(0);
  };

  const applyCoupon = (code: string): boolean => {
    const cleanCode = code.trim().toUpperCase();
    if (cleanCode === 'ZAITOON10') {
      setCouponCode(cleanCode);
      setDiscountPercent(0.1); // Giảm 10%
      return true;
    } else if (cleanCode === 'FREESHIP') {
      setCouponCode(cleanCode);
      setDiscountPercent(0.05); // Giảm 5%
      return true;
    }
    return false;
  };

  return (
    <CartContext.Provider
      value={{
        items,
        totalQuantity,
        subtotal,
        shippingFee,
        discount,
        grandTotal,
        addItem,
        updateQuantity,
        removeItem,
        clearCart,
        applyCoupon,
        couponCode,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart phải được sử dụng bên trong CartProvider');
  }
  return context;
};

