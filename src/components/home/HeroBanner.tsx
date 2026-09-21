import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Compass } from 'lucide-react';

export const HeroBanner: React.FC = () => {
  return (
    <section className="relative bg-white pt-8 pb-16 sm:pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Clean & Streamlined Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Simple Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span>ĐỒI CHÈ DI SẢN PHÚ THỌ • XUẤT KHẨU QUỐC TẾ</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="font-sans text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.2]">
                Tinh Hoa Trà Xanh Búp Đinh{' '}
                <span className="text-emerald-600">
                  Chuẩn Vị Truyền Thống
                </span>
              </h1>

              <p className="font-serif italic text-base sm:text-lg text-emerald-800/90">
                "Life is like a cup of tea, it's all in how you make it!"
              </p>
            </div>

            {/* Sub-paragraph */}
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Zaitoon Tea chuyên sản xuất và cung ứng các dòng trà xanh Gunpowder, Pekoe, trà hộp biếu tặng và trà túi lọc cao cấp. Đảm bảo chất lượng ổn định, giá tốt và giao hàng nhanh toàn quốc.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-1">
              <Link
                to="/products"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-bold shadow-sm hover:shadow-md transition-all duration-200 active:scale-95"
              >
                <span>Xem Sản Phẩm Ngay</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-slate-50 text-slate-800 text-xs sm:text-sm font-semibold border border-slate-200 shadow-xs transition-colors"
              >
                <Compass className="w-4 h-4 text-emerald-600" />
                <span>Về Zaitoon Tea</span>
              </Link>
            </div>

            {/* Clean, Non-distracting Credibility Stats */}
            <div className="pt-6 border-t border-slate-100 grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0">
              <div>
                <div className="font-extrabold text-2xl text-slate-900 font-sans">
                  100<span className="text-emerald-600 text-base ml-0.5">%</span>
                </div>
                <p className="text-[11px] text-slate-500 mt-0.5">Búp Chè Tự Nhiên</p>
              </div>

              <div>
                <div className="font-extrabold text-2xl text-slate-900 font-sans">
                  ISO<span className="text-emerald-600 text-xs ml-1">22000</span>
                </div>
                <p className="text-[11px] text-slate-500 mt-0.5">Chuẩn VietGAP & Halal</p>
              </div>

              <div>
                <div className="font-extrabold text-2xl text-slate-900 font-sans">
                  63<span className="text-emerald-600 text-base ml-0.5">+</span>
                </div>
                <p className="text-[11px] text-slate-500 mt-0.5">Tỉnh Thành Giao Nhanh</p>
              </div>
            </div>
          </div>

          {/* Right Column: Clean, Elegant Single Image Container with Uniform Aspect Ratio */}
          <div className="lg:col-span-5">
            <div className="relative aspect-4/3 sm:aspect-square w-full rounded-3xl overflow-hidden bg-slate-100 border border-slate-200/90 shadow-md">
              <img
                src="https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=1200&auto=format&fit=crop"
                alt="Đồi chè Phú Thọ mờ sương"
                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="inline-block px-2.5 py-0.5 rounded-full bg-emerald-600 text-white text-[10px] font-bold uppercase tracking-wider mb-1">
                  Nhà máy Trạm Thản • Phú Thọ
                </span>
                <h3 className="font-sans text-lg font-bold">
                  Trà Xanh Gunpowder & Pekoe Thượng Hạng
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
