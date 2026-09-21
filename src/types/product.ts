export type CategoryId = 'green-tea' | 'tea-box' | 'tea-bag' | 'specialty';

export interface ProductSpecification {
  origin: string;
  elevation?: string;
  harvestSeason: string;
  leafGrade: string;
  packagingOptions: string[];
}

export interface BrewingGuide {
  waterTemp: string;
  steepTime: string;
  measure: string;
  servingSuggestion?: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  vietnameseName: string;
  sku: string;
  categoryId: CategoryId;
  categoryName: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  inStock: boolean;
  featured: boolean;
  tags: string[];
  thumbnail: string;
  images: string[];
  shortDescription: string;
  description: string;
  tastingNotes: string[];
  specifications: ProductSpecification;
  brewingGuide: BrewingGuide;
  createdAt: string;
}

export interface ProductFilterOptions {
  category?: string;
  priceRange?: [number, number];
  harvestSeason?: string;
  sortBy?: 'featured' | 'price-asc' | 'price-desc' | 'rating' | 'newest';
  searchQuery?: string;
  inStockOnly?: boolean;
}

