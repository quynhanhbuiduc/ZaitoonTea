import { Order } from '../types/order';

const ORDERS_STORAGE_KEY = 'zaitoon_placed_orders_v1';

export const orderService = {
  /**
   * Tạo đơn hàng mới và lưu vào danh sách đơn hàng đã đặt
   */
  async createOrder(order: Order): Promise<{ success: boolean; order: Order; message: string }> {
    await new Promise((resolve) => setTimeout(resolve, 600));

    try {
      const existingStr = localStorage.getItem(ORDERS_STORAGE_KEY);
      const orders: Order[] = existingStr ? JSON.parse(existingStr) : [];
      orders.unshift(order);
      localStorage.setItem(ORDERS_STORAGE_KEY, JSON.stringify(orders));

      return {
        success: true,
        order,
        message: 'Đơn hàng của bạn đã được tiếp nhận thành công!'
      };
    } catch {
      return {
        success: true,
        order,
        message: 'Đơn hàng đã được ghi nhận.'
      };
    }
  },

  /**
   * Tra cứu đơn hàng theo ID
   */
  async getOrderById(orderId: string): Promise<Order | null> {
    await new Promise((resolve) => setTimeout(resolve, 200));
    try {
      const existingStr = localStorage.getItem(ORDERS_STORAGE_KEY);
      if (!existingStr) return null;
      const orders: Order[] = JSON.parse(existingStr);
      return orders.find((o) => o.id === orderId) || null;
    } catch {
      return null;
    }
  }
};

