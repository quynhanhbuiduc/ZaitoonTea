import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Eye, Check } from 'lucide-react';
import { Product } from '../../types/product';
import { formatVND } from '../../utils/formatters';
import { RatingStars } from '../common/RatingStars';
import { useCart } from '../../context/CartContext';
import { useToast } from '../../context/ToastContext';

interface ProductCardProps {
  product: Product;
  onQuickView?: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onQuickView }) => {
  const { addItem } = useCart();
  const { showToast } = useToast();
  const [isAdded, setIsAdded] = useState(false);

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    addItem(product, 1);
    setIsAdded(true);
    showToast(
      'Đã thêm vào giỏ hàng!',
      `${product.vietnameseName} (${product.specifications.packagingOptions[0] || 'Tiêu chuẩn'})`,
      'success'
    );

    setTimeout(() => {
      setIsAdded(false);
    }, 1500);
  };

  const handleQuickViewClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (onQuickView) {
      onQuickView(product);
    }
  };

  return (
    <div className="group relative bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-md hover:border-emerald-300 transition-all duration-300 flex flex-col h-full">
      {/* 1. Strictly Uniform Square Image Container */}
      <div className="relative aspect-square w-full bg-slate-50 overflow-hidden">
        <Link to={`/products/${product.slug}`} className="block w-full h-full">
          <img
            src={product.thumbnail}
            alt={product.name}
            loading="lazy"
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          />
        </Link>

        {/* Clean Single Tag on top left */}
        <div className="absolute top-3 left-3 z-10 flex flex-col gap-1">
          {product.originalPrice ? (
            <span className="px-2.5 py-1 rounded-full bg-rose-500 text-white text-[10px] font-bold shadow-xs">
              Giảm {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
            </span>
          ) : product.tags[0] ? (
            <span className="px-2.5 py-1 rounded-full bg-emerald-600 text-white text-[10px] font-bold shadow-xs">
              {product.tags[0]}
            </span>
          ) : null}
        </div>

        {/* Quick View Button overlay on hover */}
        {onQuickView && (
          <button
            type="button"
            onClick={handleQuickViewClick}
            className="absolute top-3 right-3 z-10 p-2 rounded-full bg-white/90 text-slate-700 hover:text-emerald-700 hover:bg-white shadow-xs opacity-0 group-hover:opacity-100 transition-all duration-200"
            aria-label="Xem nhanh"
            title="Xem nhanh sản phẩm"
          >
            <Eye className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      {/* 2. Streamlined Product Details - Clean, Minimal & Consistent */}
      <div className="p-4 flex flex-col flex-1 justify-between gap-3">
        <div>
          {/* Category & Rating */}
          <div className="flex items-center justify-between gap-2 mb-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 truncate">
              {product.categoryName}
            </span>
            <RatingStars rating={product.rating} size="sm" showNumber />
          </div>

          {/* Product Name */}
          <Link to={`/products/${product.slug}`} className="block group-hover:text-emerald-700 transition-colors">
            <h3 className="font-sans text-sm font-bold text-slate-900 line-clamp-1 leading-snug">
              {product.name}
            </h3>
            <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">
              {product.vietnameseName}
            </p>
          </Link>
        </div>

        {/* Pricing & Add to Cart Action */}
        <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
          <div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-base font-extrabold text-slate-900 font-sans">
                {formatVND(product.price)}
              </span>
              {product.originalPrice && (
                <span className="text-[11px] text-slate-400 line-through">
                  {formatVND(product.originalPrice)}
                </span>
              )}
            </div>
            <span className="text-[10px] text-slate-400 block">
              {product.specifications.packagingOptions[0]}
            </span>
          </div>

          <button
            type="button"
            onClick={handleQuickAdd}
            disabled={!product.inStock}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all shadow-xs ${
              isAdded
                ? 'bg-emerald-700 text-white'
                : 'bg-emerald-50 hover:bg-emerald-600 text-emerald-800 hover:text-white border border-emerald-200/70 hover:border-transparent'
            }`}
            aria-label={`Thêm ${product.name} vào giỏ`}
          >
            {isAdded ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>Đã Thêm</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>Thêm Giỏ</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
