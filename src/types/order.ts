import { CartItem } from './cart';

export type PaymentMethod = 'cod' | 'bank_transfer' | 'vnpay' | 'momo';

export interface CustomerInfo {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  district: string;
  ward?: string;
  orderNote?: string;
}

export interface Order {
  id: string;
  customer: CustomerInfo;
  items: CartItem[];
  subtotal: number;
  shippingFee: number;
  discount: number;
  total: number;
  paymentMethod: PaymentMethod;
  paymentStatus: 'pending' | 'completed';
  orderStatus: 'new' | 'confirmed' | 'shipping' | 'delivered';
  createdAt: string;
}

export interface CheckoutFormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  address?: string;
  city?: string;
  district?: string;
}

