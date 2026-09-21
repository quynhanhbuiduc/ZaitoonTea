import { Product } from './product';

export interface CartItem {
  id: string; // unique cart item key: `${productId}_${selectedPackaging}`
  productId: string;
  product: Product;
  quantity: number;
  selectedPackaging: string;
  unitPrice: number;
  totalPrice: number;
}

export interface CartState {
  items: CartItem[];
  totalQuantity: number;
  subtotal: number;
  shippingFee: number;
  discount: number;
  grandTotal: number;
}

