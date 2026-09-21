import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { X, Phone, MapPin, Mail, ChevronRight } from 'lucide-react';
import logoImg from '../../assets/logo.png';

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileDrawer: React.FC<MobileDrawerProps> = ({ isOpen, onClose }) => {
  const location = useLocation();

  if (!isOpen) return null;

  const links = [
    { label: 'Trang Chủ', path: '/' },
    { label: 'Tất Cả Sản Phẩm Trà', path: '/products' },
    { label: 'Trà Xanh (Gunpowder / Pekoe)', path: '/products?category=green-tea' },
    { label: 'Trà Hộp Biếu Tặng (Tea Box)', path: '/products?category=tea-box' },
    { label: 'Trà Túi Lọc Cao Cấp', path: '/products?category=tea-bag' },
    { label: 'Vùng Đồi Chè Phú Thọ', path: '/about' },
    { label: 'Năng Lực Xuất Khẩu B2B', path: '/contact' },
    { label: 'Liên Hệ Đặt Hàng', path: '/contact' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex lg:hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Drawer panel */}
      <div className="relative flex flex-col w-full max-w-xs bg-white h-full shadow-2xl z-10 overflow-y-auto">
        {/* Drawer Header */}
        <div className="flex items-center justify-between p-4 border-b border-slate-100 bg-emerald-50/50">
          <Link to="/" onClick={onClose} className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-emerald-50 border border-emerald-200/80 p-0.5 flex items-center justify-center shadow-xs">
              <img src={logoImg} alt="Zaitoon Tea Logo" className="w-full h-full object-contain" />
            </div>
            <div className="flex flex-col">
              <span className="font-sans text-base font-extrabold text-slate-900 leading-none">
                ZAITOON<span className="text-emerald-600 ml-0.5">TEA</span>
              </span>
              <span className="text-[9px] uppercase tracking-wider text-emerald-700 font-semibold mt-0.5">
                Phú Thọ • Việt Nam
              </span>
            </div>
          </Link>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-full text-slate-500 hover:bg-white hover:text-slate-900 transition-colors"
            aria-label="Đóng menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Links Navigation */}
        <nav className="flex-1 px-3 py-4 space-y-1">
          {links.map((link, idx) => {
            const isActive = location.pathname + location.search === link.path;
            return (
              <Link
                key={idx}
                to={link.path}
                onClick={onClose}
                className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                  isActive
                    ? 'bg-emerald-600 text-white shadow-sm shadow-emerald-500/20'
                    : 'text-slate-700 hover:bg-emerald-50 hover:text-emerald-800'
                }`}
              >
                <span>{link.label}</span>
                <ChevronRight className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-400'}`} />
              </Link>
            );
          })}
        </nav>

        {/* Drawer Footer Contact */}
        <div className="p-4 border-t border-slate-100 bg-slate-50 text-xs text-slate-600 space-y-2.5">
          <p className="font-bold text-slate-900 uppercase tracking-wider text-[10px]">
            Hỗ Trợ Nhanh 24/7
          </p>
          <a
            href="tel:+84915398014"
            className="flex items-center gap-2 text-emerald-700 font-bold hover:text-emerald-900"
          >
            <Phone className="w-4 h-4 text-emerald-600" />
            <span>+84 915 398 014</span>
          </a>
          <div className="flex items-start gap-2">
            <MapPin className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <span>Xưởng: Khu 12, Trạm Thản, Phú Thọ</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>zaitoontealtd@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};
