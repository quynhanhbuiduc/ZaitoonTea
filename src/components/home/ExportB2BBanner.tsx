import React from 'react';
import { Link } from 'react-router-dom';
import { Globe2, Anchor, Package, PhoneCall, FileText, ArrowRight } from 'lucide-react';

export const ExportB2BBanner: React.FC = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-emerald-100/60 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-teal-100/50 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-emerald-50/90 via-white to-teal-50/50 rounded-3xl p-8 sm:p-14 border border-emerald-200/80 shadow-card-hover">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Main Export Information (Left 7 Cols) */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white text-emerald-800 text-xs font-bold border border-emerald-200 shadow-xs">
                <Globe2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>NĂNG LỰC XUẤT KHẨU & OEM/ODM QUỐC TẾ</span>
              </div>

              <h2 className="font-sans text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Đối Tác Cung Ứng Trà Xanh B2B & Container Uy Tín Từ Việt Nam
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Zaitoon Tea đáp ứng các đơn hàng xuất khẩu quy mô lớn (FCL/LCL) với đầy đủ chứng nhận nguồn gốc xuất xứ (C/O), kiểm dịch thực vật (Phytosanitary), và gia công đóng gói linh hoạt theo nhãn hiệu của khách hàng.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2 text-xs text-slate-700">
                <div className="flex items-start gap-2.5 p-3 rounded-2xl bg-white/80 border border-slate-200/60 shadow-xs">
                  <Anchor className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900">Cảng xuất biển:</strong> Cảng Hải Phòng & Cát Lái (TP.HCM)
                  </span>
                </div>

                <div className="flex items-start gap-2.5 p-3 rounded-2xl bg-white/80 border border-slate-200/60 shadow-xs">
                  <Package className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900">Bao bì xuất khẩu:</strong> Bao Kraft, PP, Hộp quà OEM
                  </span>
                </div>

                <div className="flex items-start gap-2.5 p-3 rounded-2xl bg-white/80 border border-slate-200/60 shadow-xs">
                  <FileText className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900">Mẫu thử:</strong> Miễn phí gửi mẫu toàn cầu (Free Samples)
                  </span>
                </div>

                <div className="flex items-start gap-2.5 p-3 rounded-2xl bg-white/80 border border-slate-200/60 shadow-xs">
                  <PhoneCall className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900">Thanh toán:</strong> T/T, L/C, D/P, Linh hoạt
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Action CTA Card (Right 5 Cols) */}
            <div className="lg:col-span-5 bg-white rounded-3xl p-7 border border-slate-200/90 shadow-xl text-center space-y-4">
              <span className="inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-bold">
                BÁO GIÁ TRONG 24 GIỜ
              </span>

              <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-900">
                Nhận Bảng Giá FOB/CIF & Mẫu Trà Miễn Phí
              </h3>

              <p className="text-xs text-slate-500 leading-relaxed">
                Đội ngũ chuyên viên thương mại quốc tế của Zaitoon Tea sẽ liên hệ và cung cấp thông số kỹ thuật (Spec sheet) chi tiết nhất.
              </p>

              <div className="space-y-2.5 pt-2">
                <Link
                  to="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs tracking-wide shadow-glow transition-all duration-300"
                >
                  <FileText className="w-4 h-4" />
                  <span>Gửi Yêu Cầu Báo Giá Ngay</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <a
                  href="tel:+84915398014"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-full bg-slate-50 hover:bg-slate-100 text-slate-700 font-semibold text-xs border border-slate-200 transition-colors"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Hotline B2B: +84 915 398 014</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
