import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingBag, ArrowRight, ArrowLeft, Trash2, Tag, ShieldCheck, Truck } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { CartItemRow } from '../components/cart/CartItemRow';
import { formatVND } from '../utils/formatters';

export const CartPage: React.FC = () => {
  const {
    items,
    totalQuantity,
    subtotal,
    shippingFee,
    discount,
    grandTotal,
    updateQuantity,
    removeItem,
    clearCart,
    applyCoupon,
    couponCode
  } = useCart();

  const navigate = useNavigate();
  const [couponInput, setCouponInput] = useState('');
  const [couponMessage, setCouponMessage] = useState<{ text: string; isError: boolean } | null>(null);

  const freeShippingThreshold = 500000;
  const progressPercent = Math.min(100, Math.round((subtotal / freeShippingThreshold) * 100));
  const remainingForFreeShip = Math.max(0, freeShippingThreshold - subtotal);

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (!couponInput.trim()) return;

    const success = applyCoupon(couponInput);
    if (success) {
      setCouponMessage({ text: 'Áp dụng mã ưu đãi thành công!', isError: false });
    } else {
      setCouponMessage({
        text: 'Mã không hợp lệ. Hãy thử mã "ZAITOON10" (giảm 10%) hoặc "FREESHIP".',
        isError: true
      });
    }
  };

  if (items.length === 0) {
    return (
      <div className="bg-white min-h-[70vh] flex items-center justify-center py-16 px-4">
        <div className="max-w-md w-full bg-slate-50/80 rounded-3xl p-8 sm:p-10 border border-slate-200 text-center space-y-4">
          <div className="w-20 h-20 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
            <ShoppingBag className="w-10 h-10 stroke-1" />
          </div>
          <h1 className="font-serif text-2xl font-bold text-slate-900">
            Giỏ Hàng Của Bạn Đang Trống
          </h1>
          <p className="text-xs text-slate-500 leading-relaxed">
            Chưa có sản phẩm nào trong giỏ hàng. Hãy khám phá hương vị trà xanh tinh túy từ vùng đất Phú Thọ của chúng tôi nhé!
          </p>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow-glow transition-all"
          >
            <span>Khám Phá Sản Phẩm Ngay</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Title */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-200 pb-4">
          <div>
            <h1 className="font-sans text-3xl font-extrabold text-slate-900 tracking-tight">
              Giỏ Hàng Của Bạn ({totalQuantity} sản phẩm)
            </h1>
            <p className="text-xs text-slate-500 mt-1">
              Kiểm tra lại sản phẩm và số lượng trước khi tiến hành thanh toán.
            </p>
          </div>
          <button
            type="button"
            onClick={clearCart}
            className="text-xs text-slate-400 hover:text-rose-600 font-semibold flex items-center gap-1 self-start sm:self-auto transition-colors"
          >
            <Trash2 className="w-3.5 h-3.5" />
            <span>Xóa giỏ hàng</span>
          </button>
        </div>

        {/* Free Shipping Progress Indicator */}
        <div className="bg-emerald-50/70 rounded-3xl p-5 border border-emerald-100">
          <div className="flex items-center justify-between text-xs mb-2">
            <span className="font-semibold text-emerald-950 flex items-center gap-2">
              <Truck className="w-4 h-4 text-emerald-600" />
              {remainingForFreeShip > 0 ? (
                <>Mua thêm <strong>{formatVND(remainingForFreeShip)}</strong> để được Miễn Phí Vận Chuyển toàn quốc!</>
              ) : (
                <span className="text-emerald-700 font-bold">Chúc mừng! Bạn đủ điều kiện Miễn Phí Vận Chuyển toàn quốc.</span>
              )}
            </span>
            <span className="font-bold text-emerald-800">{progressPercent}%</span>
          </div>
          <div className="w-full h-2 bg-emerald-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-emerald-500 rounded-full transition-all duration-500 shadow-glow"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Content Columns: Items list + Summary Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Items List */}
          <div className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs divide-y divide-slate-100">
            {items.map((item) => (
              <CartItemRow
                key={item.id}
                item={item}
                onUpdateQuantity={updateQuantity}
                onRemove={removeItem}
              />
            ))}

            <div className="pt-6 mt-4 flex items-center justify-between">
              <Link
                to="/products"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Tiếp tục chọn thêm trà</span>
              </Link>
            </div>
          </div>

          {/* Order Summary & Coupon Card */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-slate-50/80 rounded-3xl p-6 border border-slate-200/90 shadow-xs space-y-5">
              <h2 className="font-sans text-lg font-bold text-slate-900 border-b border-slate-200 pb-3">
                Tóm Tắt Đơn Hàng
              </h2>

              {/* Coupon Form */}
              <div>
                <form onSubmit={handleApplyCoupon} className="flex gap-2">
                  <div className="relative flex-1">
                    <input
                      type="text"
                      placeholder="Mã ưu đãi..."
                      value={couponInput}
                      onChange={(e) => setCouponInput(e.target.value)}
                      className="w-full text-xs p-2.5 pl-8 rounded-full border border-slate-200 bg-white focus:outline-none focus:border-emerald-500 uppercase"
                    />
                    <Tag className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  </div>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-full text-xs font-bold transition-colors"
                  >
                    Áp Dụng
                  </button>
                </form>

                {couponCode && (
                  <p className="text-[11px] text-emerald-700 font-bold mt-1.5 flex items-center gap-1">
                    <span>Đang áp dụng: <strong>{couponCode}</strong></span>
                  </p>
                )}

                {couponMessage && (
                  <p className={`text-[11px] mt-1.5 ${couponMessage.isError ? 'text-rose-600 font-medium' : 'text-emerald-700 font-bold'}`}>
                    {couponMessage.text}
                  </p>
                )}
              </div>

              {/* Pricing Breakdown */}
              <div className="space-y-2 text-xs text-slate-600 border-t border-slate-200 pt-4">
                <div className="flex justify-between">
                  <span>Tạm tính ({totalQuantity} món):</span>
                  <span className="font-bold text-slate-900">{formatVND(subtotal)}</span>
                </div>

                <div className="flex justify-between">
                  <span>Phí vận chuyển:</span>
                  <span>{shippingFee === 0 ? <strong className="text-emerald-600 font-bold">Miễn phí</strong> : formatVND(shippingFee)}</span>
                </div>

                {discount > 0 && (
                  <div className="flex justify-between text-amber-600 font-semibold">
                    <span>Mã giảm giá:</span>
                    <span>-{formatVND(discount)}</span>
                  </div>
                )}

                <div className="flex justify-between text-sm font-bold text-slate-900 pt-3 border-t border-slate-200">
                  <span>Tổng thanh toán:</span>
                  <span className="text-xl text-slate-900 font-sans font-extrabold">{formatVND(grandTotal)}</span>
                </div>
              </div>

              {/* Checkout Button */}
              <button
                type="button"
                onClick={() => navigate('/checkout')}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-6 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full text-xs font-bold shadow-glow transition-all active:scale-98"
              >
                <span>Tiến Hành Thanh Toán</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Bảo mật dữ liệu thanh toán 100%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
