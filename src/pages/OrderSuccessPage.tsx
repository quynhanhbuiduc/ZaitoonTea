import React, { useEffect, useState } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import { CheckCircle2, Package, Home, Copy, Check, ArrowRight } from 'lucide-react';
import { Order } from '../types/order';
import { orderService } from '../services/orderService';
import { formatVND } from '../utils/formatters';

export const OrderSuccessPage: React.FC = () => {
  const { orderId } = useParams<{ orderId: string }>();
  const location = useLocation();
  const [order, setOrder] = useState<Order | null>(
    (location.state as { order?: Order })?.order || null
  );
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!order && orderId) {
      orderService.getOrderById(orderId).then((data) => {
        if (data) setOrder(data);
      });
    }
  }, [order, orderId]);

  const handleCopyOrderId = () => {
    if (orderId) {
      navigator.clipboard.writeText(orderId);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="bg-white min-h-screen py-12 sm:py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-8">
        {/* Success Banner */}
        <div className="bg-slate-50/80 rounded-3xl p-8 sm:p-10 border border-slate-200 text-center space-y-4">
          <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <h1 className="font-sans text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Đặt Hàng Thành Công!
          </h1>

          <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
            Cảm ơn bạn đã tin chọn các dòng trà thượng hạng của <strong>Zaitoon Tea</strong>. Đơn hàng của bạn đã được ghi nhận và xưởng đang chuẩn bị đóng gói.
          </p>

          <div className="inline-flex items-center gap-2 p-2.5 px-5 rounded-full bg-white border border-slate-200 text-xs text-slate-800 font-mono shadow-xs">
            <span>Mã Đơn Hàng: <strong className="text-emerald-700">{orderId}</strong></span>
            <button
              onClick={handleCopyOrderId}
              className="p-1 text-slate-400 hover:text-emerald-700 transition-colors"
              title="Sao chép mã đơn"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>

        {/* Bank Transfer Details (if selected) */}
        {order?.paymentMethod === 'bank_transfer' && (
          <div className="bg-emerald-50 rounded-3xl p-6 sm:p-8 border border-emerald-200 space-y-4">
            <div className="flex items-center gap-2 text-emerald-900 font-bold text-sm">
              <Package className="w-5 h-5 text-emerald-600" />
              <span>Thông Tin Chuyển Khoản Ngân Hàng (QR 24/7)</span>
            </div>
            <p className="text-xs text-slate-600">
              Vui lòng chuyển khoản số tiền <strong>{formatVND(order.total)}</strong> theo thông tin bên dưới để đơn hàng được ưu tiên xuất kho ngay:
            </p>
            <div className="bg-white p-4 rounded-2xl border border-emerald-200/80 text-xs space-y-2 font-mono shadow-xs">
              <div className="flex justify-between">
                <span className="text-slate-500">Ngân hàng:</span>
                <span className="font-bold text-slate-900">Vietcombank (Chi nhánh Hà Nội)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Số tài khoản:</span>
                <span className="font-bold text-emerald-700 text-sm">0915 398 014</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Chủ tài khoản:</span>
                <span className="font-bold text-slate-900 uppercase">CÔNG TY TNHH ZAITOON TEA</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Nội dung chuyển khoản:</span>
                <span className="font-bold text-emerald-800">{orderId}</span>
              </div>
            </div>
          </div>
        )}

        {/* Order Details Card */}
        {order && (
          <div className="bg-slate-50/70 rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
            <h2 className="font-sans text-base font-bold text-slate-900 border-b border-slate-200 pb-3">
              Chi Tiết Đơn Hàng
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-600">
              <div>
                <p className="font-bold text-slate-900">Người nhận:</p>
                <p>{order.customer.fullName} - {order.customer.phone}</p>
                <p className="text-slate-400 mt-0.5">{order.customer.email}</p>
              </div>

              <div>
                <p className="font-bold text-slate-900">Địa chỉ giao hàng:</p>
                <p>{order.customer.address}, {order.customer.district}, {order.customer.city}</p>
              </div>
            </div>

            <div className="divide-y divide-slate-100 border-y border-slate-200 py-2 space-y-2">
              {order.items.map((item) => (
                <div key={item.id} className="flex justify-between items-center py-2 text-xs">
                  <div>
                    <h4 className="font-bold text-slate-900">{item.product.name}</h4>
                    <p className="text-[11px] text-slate-500">{item.selectedPackaging} x {item.quantity}</p>
                  </div>
                  <span className="font-bold text-slate-900">{formatVND(item.totalPrice)}</span>
                </div>
              ))}
            </div>

            <div className="space-y-1.5 text-xs text-slate-600 pt-2">
              <div className="flex justify-between">
                <span>Tạm tính:</span>
                <span>{formatVND(order.subtotal)}</span>
              </div>
              <div className="flex justify-between">
                <span>Phí vận chuyển:</span>
                <span>{order.shippingFee === 0 ? 'Miễn phí' : formatVND(order.shippingFee)}</span>
              </div>
              {order.discount > 0 && (
                <div className="flex justify-between text-amber-600 font-semibold">
                  <span>Giảm giá:</span>
                  <span>-{formatVND(order.discount)}</span>
                </div>
              )}
              <div className="flex justify-between text-sm font-bold text-slate-900 pt-2 border-t border-slate-200">
                <span>Tổng cộng:</span>
                <span className="text-base text-emerald-800 font-sans font-extrabold">{formatVND(order.total)}</span>
              </div>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/products"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full text-xs font-bold transition-all shadow-glow"
          >
            <span>Tiếp Tục Mua Sắm</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 rounded-full text-xs font-bold transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>Về Trang Chủ</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
