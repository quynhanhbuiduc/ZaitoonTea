import React from 'react';
import { Phone, MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const AnnouncementBar: React.FC = () => {
  return (
    <aside
      aria-label="Thông báo ưu đãi và thông tin liên hệ"
      className="bg-emerald-50/90 text-emerald-950 text-xs py-2 px-4 border-b border-emerald-100/80 transition-colors"
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
        <div className="flex items-center gap-2 text-center sm:text-left">
          {/* Live pulsing dot indicator like Boon Global */}
          <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-100 text-emerald-800 border border-emerald-200/70">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Vụ Mới 2026
          </span>
          <span className="text-slate-600 hidden sm:inline">|</span>
          <span className="text-slate-700 font-medium truncate">
            Trà Xanh Búp Đinh & Hộp Quà Zaitoon Tea đạt chuẩn VietGAP xuất khẩu
          </span>
          <Link
            to="/products"
            className="hidden md:inline-flex items-center gap-1 text-emerald-700 hover:text-emerald-800 font-semibold hover:underline"
          >
            <span>Khám phá</span>
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>

        <div className="flex items-center gap-4 text-slate-600 text-[11px]">
          <a
            href="tel:+84915398014"
            className="flex items-center gap-1.5 text-emerald-800 font-semibold hover:text-emerald-900 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-emerald-600" />
            <span>+84 915 398 014</span>
          </a>
          <span className="text-emerald-200">|</span>
          <div className="hidden lg:flex items-center gap-1 text-slate-600">
            <MapPin className="w-3.5 h-3.5 text-emerald-600" />
            <span>Xưởng: Trạm Thản, Phú Thọ</span>
          </div>
        </div>
      </div>
    </aside>
  );
};
