import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { X, ShoppingBag, Check, ShieldCheck, Thermometer, Clock, ArrowRight } from 'lucide-react';
import { Product } from '../../types/product';
import { formatVND } from '../../utils/formatters';
import { RatingStars } from '../common/RatingStars';
import { Badge } from '../common/Badge';
import { useCart } from '../../context/CartContext';
import { useToast } from '../../context/ToastContext';

interface QuickViewModalProps {
  product: Product | null;
  onClose: () => void;
}

export const QuickViewModal: React.FC<QuickViewModalProps> = ({ product, onClose }) => {
  const { addItem } = useCart();
  const { showToast } = useToast();
  const [selectedPackaging, setSelectedPackaging] = useState<string>('');
  const [quantity, setQuantity] = useState<number>(1);
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);

  React.useEffect(() => {
    if (product) {
      setSelectedPackaging(product.specifications.packagingOptions[0] || 'Tiêu chuẩn');
      setQuantity(1);
      setActiveImageIndex(0);
    }
  }, [product]);

  if (!product) return null;

  const handleAddToCart = () => {
    addItem(product, quantity, selectedPackaging);
    showToast(
      'Thêm vào giỏ thành công!',
      `${quantity}x ${product.vietnameseName} (${selectedPackaging})`,
      'success'
    );
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="relative bg-white rounded-3xl shadow-2xl max-w-3xl w-full overflow-hidden z-10 border border-slate-200">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 text-slate-400 hover:text-slate-700 bg-white/90 rounded-full hover:bg-slate-100 shadow-xs transition-colors"
          aria-label="Đóng cửa sổ xem nhanh"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Gallery view */}
          <div className="p-6 bg-slate-50 flex flex-col items-center justify-between border-b md:border-b-0 md:border-r border-slate-200">
            <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-white shadow-xs">
              <img
                src={product.images[activeImageIndex] || product.thumbnail}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnail dots/images */}
            {product.images.length > 1 && (
              <div className="flex gap-2 mt-4 overflow-x-auto pb-1 max-w-full">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveImageIndex(idx)}
                    className={`w-14 h-14 rounded-xl overflow-hidden border-2 transition-all shrink-0 ${
                      activeImageIndex === idx ? 'border-emerald-600 scale-105' : 'border-slate-200 opacity-70'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Details & Config */}
          <div className="p-6 flex flex-col justify-between space-y-4 max-h-[85vh] overflow-y-auto">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="primary" size="sm">
                  {product.categoryName}
                </Badge>
                {product.inStock ? (
                  <span className="text-[11px] text-emerald-700 font-bold flex items-center gap-1">
                    <Check className="w-3 h-3" /> Còn hàng tại xưởng
                  </span>
                ) : (
                  <span className="text-[11px] text-rose-600 font-medium">Hết hàng</span>
                )}
              </div>

              <h2 className="font-serif text-2xl font-bold text-slate-900">
                {product.name}
              </h2>
              <p className="text-xs text-slate-500 mt-0.5 font-medium">
                {product.vietnameseName} • SKU: {product.sku}
              </p>

              <div className="mt-2.5 flex items-center gap-3">
                <RatingStars rating={product.rating} size="sm" showNumber reviewCount={product.reviewCount} />
              </div>

              <div className="mt-3 flex items-baseline gap-2.5">
                <span className="text-2xl font-extrabold text-slate-900 font-sans">
                  {formatVND(product.price)}
                </span>
                {product.originalPrice && (
                  <span className="text-sm text-slate-400 line-through">
                    {formatVND(product.originalPrice)}
                  </span>
                )}
              </div>

              <p className="text-xs text-slate-600 mt-3 leading-relaxed">
                {product.shortDescription}
              </p>

              {/* Packaging Options */}
              <div className="mt-4 space-y-1.5">
                <label className="text-xs font-bold text-slate-900 block">
                  Quy cách đóng gói:
                </label>
                <div className="flex flex-wrap gap-2">
                  {product.specifications.packagingOptions.map((opt, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setSelectedPackaging(opt)}
                      className={`text-xs px-3.5 py-1.5 rounded-full border transition-all ${
                        selectedPackaging === opt
                          ? 'border-emerald-600 bg-emerald-50 text-emerald-800 font-bold shadow-xs'
                          : 'border-slate-200 text-slate-700 hover:border-emerald-400'
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quick Specs Pill */}
              <div className="mt-4 grid grid-cols-2 gap-2 bg-slate-50 p-3 rounded-2xl text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <Thermometer className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Nhiệt độ: {product.brewingGuide.waterTemp}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Hãm: {product.brewingGuide.steepTime}</span>
                </div>
              </div>
            </div>

            {/* Action Bar */}
            <div className="pt-4 border-t border-slate-100 space-y-3">
              <div className="flex items-center gap-3">
                <div className="flex items-center border border-slate-200 rounded-full bg-white shadow-xs">
                  <button
                    type="button"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-2 text-slate-500 hover:text-slate-900"
                    aria-label="Giảm số lượng"
                  >
                    -
                  </button>
                  <span className="px-2 text-xs font-bold text-slate-900 min-w-[24px] text-center">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-2 text-slate-500 hover:text-slate-900"
                    aria-label="Tăng số lượng"
                  >
                    +
                  </button>
                </div>

                <button
                  type="button"
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                  className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full text-xs font-bold shadow-glow transition-all"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Thêm Vào Giỏ ({formatVND(product.price * quantity)})</span>
                </button>
              </div>

              <div className="flex items-center justify-between text-xs text-slate-500 pt-1">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> 100% Thuần Tự Nhiên
                </span>
                <Link
                  to={`/products/${product.slug}`}
                  onClick={onClose}
                  className="text-emerald-700 hover:text-emerald-800 font-bold inline-flex items-center gap-1"
                >
                  <span>Trang chi tiết đầy đủ</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
