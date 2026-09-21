import { Product, ProductFilterOptions } from '../types/product';
import { PRODUCTS } from '../data/products';

export const productService = {
  /**
   * Lấy danh sách sản phẩm có hỗ trợ lọc, tìm kiếm và sắp xếp
   */
  async getProducts(filters?: ProductFilterOptions): Promise<Product[]> {
    // Giả lập độ trễ mạng nhẹ (150ms) tạo trải nghiệm chân thực của backend
    await new Promise((resolve) => setTimeout(resolve, 150));

    let result = [...PRODUCTS];

    if (!filters) return result;

    // 1. Tìm kiếm theo tên hoặc hương vị
    if (filters.searchQuery) {
      const q = filters.searchQuery.toLowerCase().trim();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.vietnameseName.toLowerCase().includes(q) ||
          p.shortDescription.toLowerCase().includes(q) ||
          p.tags.some((t) => t.toLowerCase().includes(q))
      );
    }

    // 2. Lọc theo danh mục
    if (filters.category && filters.category !== 'all') {
      result = result.filter((p) => p.categoryId === filters.category);
    }

    // 3. Lọc theo khoảng giá
    if (filters.priceRange) {
      const [min, max] = filters.priceRange;
      result = result.filter((p) => p.price >= min && p.price <= max);
    }

    // 4. Lọc theo mùa vụ
    if (filters.harvestSeason && filters.harvestSeason !== 'all') {
      result = result.filter((p) =>
        p.specifications.harvestSeason.includes(filters.harvestSeason!)
      );
    }

    // 5. Lọc chỉ còn hàng
    if (filters.inStockOnly) {
      result = result.filter((p) => p.inStock);
    }

    // 6. Sắp xếp
    if (filters.sortBy) {
      switch (filters.sortBy) {
        case 'price-asc':
          result.sort((a, b) => a.price - b.price);
          break;
        case 'price-desc':
          result.sort((a, b) => b.price - a.price);
          break;
        case 'rating':
          result.sort((a, b) => b.rating - a.rating);
          break;
        case 'newest':
          result.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
          break;
        case 'featured':
        default:
          result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
          break;
      }
    }

    return result;
  },

  /**
   * Lấy sản phẩm chi tiết theo slug hoặc id
   */
  async getProductBySlug(slug: string): Promise<Product | undefined> {
    await new Promise((resolve) => setTimeout(resolve, 100));
    return PRODUCTS.find((p) => p.slug === slug || p.id === slug);
  },

  /**
   * Lấy sản phẩm nổi bật cho trang chủ
   */
  async getFeaturedProducts(): Promise<Product[]> {
    await new Promise((resolve) => setTimeout(resolve, 100));
    return PRODUCTS.filter((p) => p.featured);
  },

  /**
   * Lấy các sản phẩm liên quan theo danh mục
   */
  async getRelatedProducts(currentId: string, categoryId: string): Promise<Product[]> {
    await new Promise((resolve) => setTimeout(resolve, 100));
    return PRODUCTS.filter(
      (p) => p.id !== currentId && p.categoryId === categoryId
    ).slice(0, 4);
  }
};

