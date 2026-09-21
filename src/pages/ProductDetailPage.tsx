import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  ShoppingBag,
  Check,
  Thermometer,
  Clock,
  Coffee,
  ShieldCheck,
  Truck,
  RotateCcw,
  Sparkles,
  ArrowLeft,
  ChevronRight
} from 'lucide-react';
import { Product } from '../types/product';
import { productService } from '../services/productService';
import { formatVND } from '../utils/formatters';
import { RatingStars } from '../components/common/RatingStars';
import { Badge } from '../components/common/Badge';
import { ProductCard } from '../components/product/ProductCard';
import { useCart } from '../context/CartContext';
import { useToast } from '../context/ToastContext';

export const ProductDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { addItem } = useCart();
  const { showToast } = useToast();

  const [product, setProduct] = useState<Product | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const [activeImage, setActiveImage] = useState<string>('');
  const [selectedPackaging, setSelectedPackaging] = useState<string>('');
  const [quantity, setQuantity] = useState<number>(1);
  const [activeTab, setActiveTab] = useState<'desc' | 'brew' | 'spec'>('desc');

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!slug) return;

    setLoading(true);
    productService.getProductBySlug(slug).then((data) => {
      if (data) {
        setProduct(data);
        setActiveImage(data.images[0] || data.thumbnail);
        setSelectedPackaging(data.specifications.packagingOptions[0] || 'Tiêu chuẩn');
        setQuantity(1);

        productService.getRelatedProducts(data.id, data.categoryId).then(setRelatedProducts);
      }
      setLoading(false);
    });
  }, [slug]);

  if (loading) {
    return (
      <div className="py-32 text-center bg-white">
        <div className="inline-block w-8 h-8 border-4 border-emerald-600 border-t-transparent rounded-full animate-spin" />
        <p className="text-xs text-slate-500 mt-3 font-medium">Đang mở phẩm trà thượng hạng...</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="py-24 text-center bg-white max-w-lg mx-auto px-4">
        <h2 className="font-serif text-2xl font-bold text-slate-900">Không tìm thấy sản phẩm</h2>
        <p className="text-xs text-slate-500 mt-2">
          Sản phẩm trà bạn tìm kiếm có thể đã đổi tên hoặc tạm ngừng phân phối.
        </p>
        <Link
          to="/products"
          className="mt-4 inline-flex items-center gap-1.5 px-5 py-2.5 bg-emerald-600 text-white rounded-full text-xs font-bold shadow-glow"
        >
          <ArrowLeft className="w-4 h-4" /> Quay lại danh mục trà
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem(product, quantity, selectedPackaging);
    showToast(
      'Đã thêm vào giỏ hàng!',
      `${quantity}x ${product.vietnameseName} (${selectedPackaging})`,
      'success'
    );
  };

  const handleBuyNow = () => {
    addItem(product, quantity, selectedPackaging);
    navigate('/checkout');
  };

  return (
    <div className="bg-white min-h-screen py-6 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Breadcrumb navigation */}
        <nav aria-label="Đường dẫn trang" className="flex items-center gap-2 text-xs text-slate-500">
          <Link to="/" className="hover:text-emerald-700 transition-colors">Trang chủ</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
          <Link to="/products" className="hover:text-emerald-700 transition-colors">Sản phẩm</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
          <Link to={`/products?category=${product.categoryId}`} className="hover:text-emerald-700 transition-colors">
            {product.categoryName}
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
          <span className="text-slate-900 font-bold truncate max-w-xs">{product.name}</span>
        </nav>

        {/* Main Product Showcase Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 bg-slate-50/50 rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xs">
          {/* Left Column: Image Gallery */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-sm">
              <img
                src={activeImage}
                alt={product.name}
                className="w-full h-full object-cover transition-all duration-500"
              />
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                {product.tags.map((tag, idx) => (
                  <Badge key={idx} variant={idx === 0 ? 'amber' : 'organic'} size="md">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Thumbnails */}
            {product.images.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-1">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveImage(img)}
                    className={`w-20 h-20 rounded-2xl overflow-hidden border-2 transition-all shrink-0 ${
                      activeImage === img
                        ? 'border-emerald-600 scale-102 shadow-md'
                        : 'border-slate-200 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Product Info & Purchase Controls */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              {/* Category & Status */}
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase font-extrabold tracking-wider text-emerald-700">
                  {product.categoryName}
                </span>
                <span className="text-xs text-slate-400 font-mono">
                  Mã SKU: {product.sku}
                </span>
              </div>

              {/* Names */}
              <div>
                <h1 className="font-serif text-2xl sm:text-4xl font-bold text-slate-900 leading-tight">
                  {product.name}
                </h1>
                <p className="text-sm sm:text-base text-emerald-800 font-medium mt-1">
                  {product.vietnameseName}
                </p>
              </div>

              {/* Rating & reviews */}
              <div className="flex items-center gap-3 pt-1">
                <RatingStars rating={product.rating} size="md" showNumber reviewCount={product.reviewCount} />
                <span className="text-xs text-slate-300">•</span>
                <span className="text-xs text-emerald-700 font-bold flex items-center gap-1">
                  <Check className="w-3.5 h-3.5" /> Còn hàng tại xưởng Phú Thọ
                </span>
              </div>

              {/* Pricing */}
              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-baseline gap-3">
                <span className="text-3xl font-extrabold text-slate-900 font-sans">
                  {formatVND(product.price)}
                </span>
                {product.originalPrice && (
                  <span className="text-sm text-slate-400 line-through">
                    {formatVND(product.originalPrice)}
                  </span>
                )}
                {product.originalPrice && (
                  <span className="text-xs font-bold text-rose-700 bg-rose-50 border border-rose-200 px-2 py-0.5 rounded-full">
                    Tiết kiệm {formatVND(product.originalPrice - product.price)}
                  </span>
                )}
              </div>

              {/* Tasting notes chips */}
              <div className="space-y-1.5">
                <span className="text-xs font-bold text-slate-900 block">Đặc trưng hương vị:</span>
                <div className="flex flex-wrap gap-2">
                  {product.tastingNotes.map((note, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1 text-xs px-3 py-1 rounded-full bg-white text-emerald-900 border border-emerald-200 shadow-xs"
                    >
                      <Sparkles className="w-3 h-3 text-emerald-600" />
                      {note}
                    </span>
                  ))}
                </div>
              </div>

              {/* Packaging Selector */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-900 block">
                  Chọn quy cách đóng gói:
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {product.specifications.packagingOptions.map((opt, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setSelectedPackaging(opt)}
                      className={`text-xs p-3 rounded-2xl border text-left transition-all ${
                        selectedPackaging === opt
                          ? 'border-emerald-600 bg-white text-emerald-950 font-bold shadow-sm ring-1 ring-emerald-500'
                          : 'border-slate-200 bg-white/70 hover:border-slate-300 text-slate-700'
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity selector */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-900 block">
                  Số lượng:
                </label>
                <div className="flex items-center gap-3">
                  <div className="flex items-center border border-slate-200 rounded-full bg-white shadow-xs">
                    <button
                      type="button"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-3.5 py-2 text-slate-500 hover:text-slate-900"
                      aria-label="Giảm số lượng"
                    >
                      -
                    </button>
                    <span className="px-3 text-sm font-bold text-slate-900 min-w-[32px] text-center">
                      {quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-3.5 py-2 text-slate-500 hover:text-slate-900"
                      aria-label="Tăng số lượng"
                    >
                      +
                    </button>
                  </div>
                  <span className="text-xs text-slate-500">
                    Thành tiền: <strong className="text-slate-900">{formatVND(product.price * quantity)}</strong>
                  </span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3 pt-4 border-t border-slate-200">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={handleAddToCart}
                  className="flex items-center justify-center gap-2 py-3.5 px-5 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs shadow-md transition-all active:scale-98"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Thêm Vào Giỏ</span>
                </button>

                <button
                  type="button"
                  onClick={handleBuyNow}
                  className="flex items-center justify-center gap-2 py-3.5 px-5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-glow transition-all active:scale-98"
                >
                  <span>Mua Ngay</span>
                </button>
              </div>

              {/* Guarantees */}
              <div className="grid grid-cols-3 gap-2 pt-2 text-center text-[11px] text-slate-500">
                <div className="flex flex-col items-center gap-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>100% Tự Nhiên</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <Truck className="w-4 h-4 text-emerald-600" />
                  <span>Freeship từ 500k</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <RotateCcw className="w-4 h-4 text-emerald-600" />
                  <span>Đổi trả 7 ngày</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Tabs: Description, Brewing Guide, Export Specs */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xs">
          <div className="flex border-b border-slate-200 gap-6 sm:gap-10 overflow-x-auto">
            <button
              type="button"
              onClick={() => setActiveTab('desc')}
              className={`pb-3 text-xs sm:text-sm font-bold transition-all border-b-2 whitespace-nowrap ${
                activeTab === 'desc'
                  ? 'border-emerald-600 text-emerald-800'
                  : 'border-transparent text-slate-500 hover:text-slate-900'
              }`}
            >
              Mô Tả Sản Phẩm
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('brew')}
              className={`pb-3 text-xs sm:text-sm font-bold transition-all border-b-2 whitespace-nowrap ${
                activeTab === 'brew'
                  ? 'border-emerald-600 text-emerald-800'
                  : 'border-transparent text-slate-500 hover:text-slate-900'
              }`}
            >
              Nghệ Thuật Hãm Trà
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('spec')}
              className={`pb-3 text-xs sm:text-sm font-bold transition-all border-b-2 whitespace-nowrap ${
                activeTab === 'spec'
                  ? 'border-emerald-600 text-emerald-800'
                  : 'border-transparent text-slate-500 hover:text-slate-900'
              }`}
            >
              Thông Số Kỹ Thuật & Xuất Khẩu
            </button>
          </div>

          <div className="py-6">
            {activeTab === 'desc' && (
              <div className="prose max-w-none text-xs sm:text-sm text-slate-600 leading-relaxed space-y-4">
                <p>{product.description}</p>
                <div className="p-5 rounded-2xl bg-emerald-50/60 border border-emerald-100 my-4 space-y-2">
                  <h4 className="font-sans font-bold text-emerald-950">Cam Kết Chất Lượng Zaitoon Tea</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Mỗi mẻ chè đều được kiểm soát khắt khe về độ ẩm, dư lượng vi sinh trước khi xuất xưởng tại Trạm Thản - Phú Thọ. Cam kết không tẩm ướp phẩm màu nhân tạo, an toàn tuyệt đối cho người thưởng thức.
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'brew' && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-4">
                  <div className="p-3 bg-white rounded-2xl text-emerald-600 shadow-xs border border-slate-200">
                    <Thermometer className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-xs">Nhiệt Độ Nước</h4>
                    <p className="text-xl font-extrabold text-emerald-700 mt-1 font-sans">{product.brewingGuide.waterTemp}</p>
                    <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">
                      Nước sôi để nguội bớt, tránh dùng nước 100°C làm khét lá trà non.
                    </p>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-4">
                  <div className="p-3 bg-white rounded-2xl text-emerald-600 shadow-xs border border-slate-200">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-xs">Thời Gian Hãm</h4>
                    <p className="text-xl font-extrabold text-emerald-700 mt-1 font-sans">{product.brewingGuide.steepTime}</p>
                    <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">
                      Hãm đúng thời lượng để nước trà xanh trong và vị chát ngọt hài hòa.
                    </p>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-4">
                  <div className="p-3 bg-white rounded-2xl text-emerald-600 shadow-xs border border-slate-200">
                    <Coffee className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-xs">Định Lượng Trà</h4>
                    <p className="text-xl font-extrabold text-emerald-700 mt-1 font-sans">{product.brewingGuide.measure}</p>
                    <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">
                      Có thể tinh chỉnh lượng trà tùy theo gu thưởng thức đậm nhạt của bạn.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'spec' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-slate-600">
                <div className="space-y-3">
                  <div className="flex justify-between py-2 border-b border-slate-100">
                    <span className="font-bold text-slate-900">Vùng nguyên liệu:</span>
                    <span>{product.specifications.origin}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-100">
                    <span className="font-bold text-slate-900">Độ cao đồi chè:</span>
                    <span>{product.specifications.elevation || 'Vùng trung du 500m'}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-100">
                    <span className="font-bold text-slate-900">Mùa vụ thu hoạch:</span>
                    <span>{product.specifications.harvestSeason}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-100">
                    <span className="font-bold text-slate-900">Cấp độ lá (Grade):</span>
                    <span>{product.specifications.leafGrade}</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between py-2 border-b border-slate-100">
                    <span className="font-bold text-slate-900">Cảng biển xuất khẩu:</span>
                    <span>Hải Phòng / Cát Lái (Việt Nam)</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-100">
                    <span className="font-bold text-slate-900">Hạn sử dụng:</span>
                    <span>24 tháng kể từ ngày sản xuất</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-100">
                    <span className="font-bold text-slate-900">Tiêu chuẩn:</span>
                    <span>VietGAP, ISO 22000, Halal</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-100">
                    <span className="font-bold text-slate-900">Điều kiện bảo quản:</span>
                    <span>Để nơi khô ráo, tránh ánh sáng trực tiếp</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="space-y-6 pt-4">
            <h3 className="font-sans text-2xl font-bold text-slate-900">
              Sản Phẩm Cùng Bộ Sưu Tập
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((rel) => (
                <ProductCard key={rel.id} product={rel} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
