import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
  ShieldCheck,
  CreditCard,
  Truck,
  ArrowRight,
  ArrowLeft,
  AlertCircle,
  Building,
  QrCode
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import { CustomerInfo, Order, PaymentMethod, CheckoutFormErrors } from '../types/order';
import { orderService } from '../services/orderService';
import { formatVND, generateOrderId } from '../utils/formatters';
import { isValidVietnamesePhone, isValidEmail, isMinLength } from '../utils/validators';

export const CheckoutPage: React.FC = () => {
  const { items, subtotal, shippingFee, discount, grandTotal, clearCart } = useCart();
  const navigate = useNavigate();

  const [formData, setFormData] = useState<CustomerInfo>({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: 'Hà Nội',
    district: '',
    ward: '',
    orderNote: ''
  });

  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('cod');
  const [errors, setErrors] = useState<CheckoutFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  if (items.length === 0) {
    return (
      <div className="bg-white min-h-[60vh] flex items-center justify-center p-4">
        <div className="bg-slate-50 p-8 rounded-3xl text-center max-w-md border border-slate-200 shadow-xs space-y-4">
          <h2 className="font-sans text-xl font-bold text-slate-900">Chưa có sản phẩm để thanh toán</h2>
          <p className="text-xs text-slate-500">
            Giỏ hàng của bạn đang trống. Vui lòng chọn sản phẩm trước khi thanh toán.
          </p>
          <Link
            to="/products"
            className="inline-block py-2.5 px-6 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow-glow"
          >
            Xem Sản Phẩm Trà
          </Link>
        </div>
      </div>
    );
  }

  const validateForm = (): boolean => {
    const errs: CheckoutFormErrors = {};

    if (!isMinLength(formData.fullName, 2)) {
      errs.fullName = 'Vui lòng nhập họ và tên (tối thiểu 2 ký tự).';
    }

    if (!isValidVietnamesePhone(formData.phone)) {
      errs.phone = 'Số điện thoại không hợp lệ (cần 10 số, ví dụ 0912345678).';
    }

    if (!isValidEmail(formData.email)) {
      errs.email = 'Vui lòng nhập địa chỉ email hợp lệ.';
    }

    if (!isMinLength(formData.address, 5)) {
      errs.address = 'Vui lòng nhập địa chỉ cụ thể (số nhà, tên đường).';
    }

    if (!isMinLength(formData.district, 2)) {
      errs.district = 'Vui lòng nhập quận / huyện.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    const orderId = generateOrderId();
    const newOrder: Order = {
      id: orderId,
      customer: formData,
      items: [...items],
      subtotal,
      shippingFee,
      discount,
      total: grandTotal,
      paymentMethod,
      paymentStatus: paymentMethod === 'cod' ? 'pending' : 'completed',
      orderStatus: 'new',
      createdAt: new Date().toISOString()
    };

    try {
      await orderService.createOrder(newOrder);
      clearCart();
      navigate(`/order-success/${orderId}`, { state: { order: newOrder } });
    } catch (err) {
      console.error('Lỗi đặt hàng:', err);
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white min-h-screen py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div>
          <h1 className="font-sans text-3xl font-extrabold text-slate-900 tracking-tight">
            Thanh Toán & Đặt Hàng
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Vui lòng điền thông tin người nhận để Zaitoon Tea đóng gói và chuyển phát nhanh chóng.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Customer & Shipping Information */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-slate-50/70 rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs space-y-5">
              <h2 className="font-sans text-base font-bold text-slate-900 border-b border-slate-200 pb-3 flex items-center gap-2">
                <Truck className="w-5 h-5 text-emerald-600" />
                <span>1. Thông Tin Người Nhận</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="sm:col-span-2">
                  <label className="text-xs font-bold text-slate-900 block mb-1">
                    Họ và tên người nhận <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Nguyễn Văn A"
                    className={`w-full text-xs p-3 rounded-2xl border ${
                      errors.fullName ? 'border-rose-400 bg-rose-50/50' : 'border-slate-200 bg-white'
                    } focus:outline-none focus:border-emerald-500 shadow-xs`}
                  />
                  {errors.fullName && (
                    <p className="text-[11px] text-rose-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.fullName}
                    </p>
                  )}
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-900 block mb-1">
                    Số điện thoại <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="0912345678"
                    className={`w-full text-xs p-3 rounded-2xl border ${
                      errors.phone ? 'border-rose-400 bg-rose-50/50' : 'border-slate-200 bg-white'
                    } focus:outline-none focus:border-emerald-500 shadow-xs`}
                  />
                  {errors.phone && (
                    <p className="text-[11px] text-rose-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.phone}
                    </p>
                  )}
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-900 block mb-1">
                    Email nhận hóa đơn <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="vidu@gmail.com"
                    className={`w-full text-xs p-3 rounded-2xl border ${
                      errors.email ? 'border-rose-400 bg-rose-50/50' : 'border-slate-200 bg-white'
                    } focus:outline-none focus:border-emerald-500 shadow-xs`}
                  />
                  {errors.email && (
                    <p className="text-[11px] text-rose-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-900 block mb-1">
                    Tỉnh / Thành phố <span className="text-rose-500">*</span>
                  </label>
                  <select
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full text-xs p-3 rounded-2xl border border-slate-200 bg-white focus:outline-none focus:border-emerald-500 shadow-xs"
                  >
                    <option value="Hà Nội">Hà Nội</option>
                    <option value="Phú Thọ">Phú Thọ (Xưởng Zaitoon)</option>
                    <option value="TP. Hồ Chí Minh">TP. Hồ Chí Minh</option>
                    <option value="Hải Phòng">Hải Phòng</option>
                    <option value="Đà Nẵng">Đà Nẵng</option>
                    <option value="Khác">Tỉnh thành khác...</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-900 block mb-1">
                    Quận / Huyện <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.district}
                    onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                    placeholder="Quận Hoàng Mai, Phù Ninh..."
                    className={`w-full text-xs p-3 rounded-2xl border ${
                      errors.district ? 'border-rose-400 bg-rose-50/50' : 'border-slate-200 bg-white'
                    } focus:outline-none focus:border-emerald-500 shadow-xs`}
                  />
                  {errors.district && (
                    <p className="text-[11px] text-rose-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.district}
                    </p>
                  )}
                </div>

                <div className="sm:col-span-2">
                  <label className="text-xs font-bold text-slate-900 block mb-1">
                    Địa chỉ chi tiết (Số nhà, đường) <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    placeholder="Số 17, Ngõ 943/5 Giải Phóng..."
                    className={`w-full text-xs p-3 rounded-2xl border ${
                      errors.address ? 'border-rose-400 bg-rose-50/50' : 'border-slate-200 bg-white'
                    } focus:outline-none focus:border-emerald-500 shadow-xs`}
                  />
                  {errors.address && (
                    <p className="text-[11px] text-rose-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.address}
                    </p>
                  )}
                </div>

                <div className="sm:col-span-2">
                  <label className="text-xs font-bold text-slate-900 block mb-1">
                    Ghi chú đơn hàng (Tùy chọn)
                  </label>
                  <textarea
                    rows={2}
                    value={formData.orderNote}
                    onChange={(e) => setFormData({ ...formData, orderNote: e.target.value })}
                    placeholder="Ví dụ: Giao giờ hành chính, gọi trước khi giao..."
                    className="w-full text-xs p-3 rounded-2xl border border-slate-200 bg-white focus:outline-none focus:border-emerald-500 shadow-xs"
                  />
                </div>
              </div>
            </div>

            {/* Payment Method Card */}
            <div className="bg-slate-50/70 rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs space-y-4">
              <h2 className="font-sans text-base font-bold text-slate-900 border-b border-slate-200 pb-3 flex items-center gap-2">
                <CreditCard className="w-5 h-5 text-emerald-600" />
                <span>2. Phương Thức Thanh Toán</span>
              </h2>

              <div className="space-y-3">
                <label className={`flex items-start gap-3.5 p-4 rounded-2xl border cursor-pointer transition-all ${
                  paymentMethod === 'cod' ? 'border-emerald-500 bg-white shadow-xs ring-1 ring-emerald-500' : 'border-slate-200 bg-white/70 hover:border-slate-300'
                }`}>
                  <input
                    type="radio"
                    name="payment"
                    value="cod"
                    checked={paymentMethod === 'cod'}
                    onChange={() => setPaymentMethod('cod')}
                    className="mt-1 accent-emerald-600"
                  />
                  <div>
                    <span className="text-xs font-bold text-slate-900 block">
                      Thanh toán khi nhận hàng (COD)
                    </span>
                    <span className="text-[11px] text-slate-500">
                      Kiểm tra niêm phong trà Zaitoon Tea trước khi thanh toán tiền mặt cho shipper.
                    </span>
                  </div>
                </label>

                <label className={`flex items-start gap-3.5 p-4 rounded-2xl border cursor-pointer transition-all ${
                  paymentMethod === 'bank_transfer' ? 'border-emerald-500 bg-white shadow-xs ring-1 ring-emerald-500' : 'border-slate-200 bg-white/70 hover:border-slate-300'
                }`}>
                  <input
                    type="radio"
                    name="payment"
                    value="bank_transfer"
                    checked={paymentMethod === 'bank_transfer'}
                    onChange={() => setPaymentMethod('bank_transfer')}
                    className="mt-1 accent-emerald-600"
                  />
                  <div>
                    <span className="text-xs font-bold text-slate-900 block flex items-center gap-1.5">
                      <Building className="w-4 h-4 text-emerald-600" />
                      Chuyển khoản ngân hàng trực tiếp (QR 24/7)
                    </span>
                    <span className="text-[11px] text-slate-500">
                      Mã QR Vietcombank sẽ xuất hiện kèm mã đơn hàng tại bước xác nhận.
                    </span>
                  </div>
                </label>

                <label className={`flex items-start gap-3.5 p-4 rounded-2xl border cursor-pointer transition-all ${
                  paymentMethod === 'vnpay' ? 'border-emerald-500 bg-white shadow-xs ring-1 ring-emerald-500' : 'border-slate-200 bg-white/70 hover:border-slate-300'
                }`}>
                  <input
                    type="radio"
                    name="payment"
                    value="vnpay"
                    checked={paymentMethod === 'vnpay'}
                    onChange={() => setPaymentMethod('vnpay')}
                    className="mt-1 accent-emerald-600"
                  />
                  <div>
                    <span className="text-xs font-bold text-slate-900 block flex items-center gap-1.5">
                      <QrCode className="w-4 h-4 text-emerald-600" />
                      Thanh toán quét mã VNPay-QR / Ví Điện Tử
                    </span>
                    <span className="text-[11px] text-slate-500">
                      Hỗ trợ tất cả các ứng dụng ngân hàng và ví điện tử Việt Nam.
                    </span>
                  </div>
                </label>
              </div>
            </div>
          </div>

          {/* Order Summary & Actions */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-50/80 rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs space-y-6">
              <h2 className="font-sans text-base font-bold text-slate-900 border-b border-slate-200 pb-3">
                Đơn Hàng ({items.reduce((s, i) => s + i.quantity, 0)} món)
              </h2>

              <div className="max-h-72 overflow-y-auto divide-y divide-slate-100 pr-1 space-y-2">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-3 py-2.5 items-center">
                    <img
                      src={item.product.thumbnail}
                      alt={item.product.name}
                      className="w-12 h-12 object-cover rounded-xl border border-slate-200"
                    />
                    <div className="flex-1 min-w-0 text-xs">
                      <h4 className="font-bold text-slate-900 truncate">{item.product.name}</h4>
                      <p className="text-slate-500 text-[11px]">{item.selectedPackaging} x {item.quantity}</p>
                    </div>
                    <span className="text-xs font-bold text-slate-900">{formatVND(item.totalPrice)}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-2 text-xs text-slate-600 border-t border-slate-200 pt-4">
                <div className="flex justify-between">
                  <span>Tạm tính:</span>
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
                <div className="flex justify-between text-base font-bold text-slate-900 pt-3 border-t border-slate-200">
                  <span>Tổng thanh toán:</span>
                  <span className="text-xl text-slate-900 font-sans font-extrabold">{formatVND(grandTotal)}</span>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-6 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full text-xs font-bold shadow-glow transition-all active:scale-98 disabled:opacity-60"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Đang Xác Nhận Đơn Hàng...</span>
                  </>
                ) : (
                  <>
                    <span>Hoàn Tất Đặt Hàng</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

              <div className="flex items-center justify-between text-xs pt-1">
                <Link to="/cart" className="text-slate-500 hover:text-emerald-700 font-semibold inline-flex items-center gap-1">
                  <ArrowLeft className="w-3.5 h-3.5" /> Quay lại giỏ hàng
                </Link>
                <div className="flex items-center gap-1 text-emerald-700 font-bold text-[11px]">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> Cam kết bảo mật
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
