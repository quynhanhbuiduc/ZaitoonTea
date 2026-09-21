import React, { useEffect, useState } from 'react';
import { HeroBanner } from '../components/home/HeroBanner';
import { TickerBar } from '../components/common/TickerBar';
import { CategoryHighlights } from '../components/home/CategoryHighlights';
import { FeaturedCollection } from '../components/home/FeaturedCollection';
import { TeaStorySection } from '../components/home/TeaStorySection';
import { ExportB2BBanner } from '../components/home/ExportB2BBanner';
import { Product } from '../types/product';
import { productService } from '../services/productService';

export const HomePage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchProducts = async () => {
      try {
        const data = await productService.getProducts();
        setProducts(data);
      } catch (err) {
        console.error('Lỗi tải sản phẩm:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="bg-white">
      {/* 1. Hero with Boon Global inspired motion & ambient glow */}
      <HeroBanner />

      {/* 2. Infinite Continuous Marquee Ticker Bar */}
      <TickerBar />

      {/* 3. Modern Bento Grid Categories */}
      <CategoryHighlights />

      {/* 4. Interactive Featured Collection with pill tabs */}
      {loading ? (
        <div className="py-24 text-center bg-white">
          <div className="inline-block w-8 h-8 border-4 border-emerald-600 border-t-transparent rounded-full animate-spin" />
          <p className="text-xs text-slate-500 mt-2 font-medium">Đang tải sản phẩm thượng hạng...</p>
        </div>
      ) : (
        <FeaturedCollection products={products} />
      )}

      {/* 5. Interactive 5-step Artisanal Tea Processing Story */}
      <TeaStorySection />

      {/* 6. Global Export & B2B Wholesale Showcase */}
      <ExportB2BBanner />
    </div>
  );
};
