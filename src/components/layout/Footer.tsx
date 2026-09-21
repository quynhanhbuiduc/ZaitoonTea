import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Award, ShieldCheck, Truck, Clock } from 'lucide-react';
import logoImg from '../../assets/logo.png';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 text-slate-800 pt-16 pb-10 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Core Value Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pb-12 border-b border-slate-200">
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-center justify-center text-emerald-600">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-slate-900">Chè Búp Tự Nhiên</h4>
              <p className="text-[11px] text-slate-500">Đồi chè Trạm Thản - Phú Thọ</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-center justify-center text-emerald-600">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-slate-900">Chuẩn VietGAP & ISO</h4>
              <p className="text-[11px] text-slate-500">Quy trình kiểm định khép kín</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-center justify-center text-emerald-600">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-slate-900">Xuất Khẩu Quốc Tế</h4>
              <p className="text-[11px] text-slate-500">Cảng Hải Phòng & Cát Lái</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-center justify-center text-emerald-600">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-slate-900">Giao Hàng Toàn Quốc</h4>
              <p className="text-[11px] text-slate-500">Freeship cho đơn từ 500k</p>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 py-12">
          {/* Brand Presentation */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-full bg-emerald-50 border border-emerald-200/80 p-1 flex items-center justify-center shadow-xs">
                <img src={logoImg} alt="Zaitoon Tea Logo" className="w-full h-full object-contain" />
              </div>
              <span className="font-sans text-xl font-extrabold tracking-tight text-slate-900">
                ZAITOON<span className="text-emerald-600 ml-1">TEA</span>
              </span>
            </Link>

            <blockquote className="text-xs italic text-emerald-800 font-serif leading-relaxed">
              "Life is like a cup of tea, it's all in how you make it! We are bringing for you the best pure tea which makes your life more enjoyable!"
            </blockquote>

            <p className="text-xs text-slate-600 leading-relaxed pr-4">
              Công ty TNHH Zaitoon Tea chuyên sản xuất, chế biến và xuất khẩu các dòng chè xanh búp đinh hảo hạng từ vùng đất Phú Thọ. Cam kết không tẩm ướp, an toàn cho sức khỏe và nâng tầm danh trà Việt.
            </p>
          </div>

          {/* Quick Links 1 */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold text-slate-900 tracking-wider uppercase">
              Danh Mục Sản Phẩm
            </h3>
            <ul className="space-y-2 text-xs text-slate-600">
              <li>
                <Link to="/products?category=green-tea" className="hover:text-emerald-600 transition-colors">
                  Trà Xanh Gunpowder & Pekoe
                </Link>
              </li>
              <li>
                <Link to="/products?category=tea-box" className="hover:text-emerald-600 transition-colors">
                  Trà Hộp Quà Tặng (Tea Box)
                </Link>
              </li>
              <li>
                <Link to="/products?category=tea-bag" className="hover:text-emerald-600 transition-colors">
                  Trà Túi Lọc Kim Tự Tháp
                </Link>
              </li>
              <li>
                <Link to="/products?category=specialty" className="hover:text-emerald-600 transition-colors">
                  Trà Saffron Hoàng Gia
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-emerald-600 transition-colors">
                  Bảng Giá Bán Buôn & Xuất Khẩu
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links 2 */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold text-slate-900 tracking-wider uppercase">
              Về Zaitoon Tea
            </h3>
            <ul className="space-y-2 text-xs text-slate-600">
              <li>
                <Link to="/about" className="hover:text-emerald-600 transition-colors">
                  Đồi Chè Di Sản Phú Thọ
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-emerald-600 transition-colors">
                  Kỹ Thuật Sao Chế Truyền Thống
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-emerald-600 transition-colors">
                  Hợp Tác B2B & Đại Lý
                </Link>
              </li>
              <li>
                <Link to="/cart" className="hover:text-emerald-600 transition-colors">
                  Kiểm Tra Giỏ Hàng
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3 text-xs text-slate-600">
            <h3 className="text-xs font-bold text-slate-900 tracking-wider uppercase">
              Trụ Sở & Xưởng Sản Xuất
            </h3>
            <div className="space-y-2.5">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-slate-800">VP Hà Nội:</strong> Số 17, Ngõ 943/5 Giải Phóng, Giáp Bát, Hoàng Mai, Hà Nội
                </span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-slate-800">Nhà máy:</strong> Khu 12, Xã Trạm Thản, Tỉnh Phú Thọ, Việt Nam
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-600 shrink-0" />
                <a href="tel:+84915398014" className="text-emerald-700 font-bold hover:underline">
                  +84 915 398 014
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>zaitoontealtd@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 mt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} ZAITOON TEA Co. LTD. All rights reserved.</p>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Đóng gói: PE, PP, Kraft, Tea Box 250g - 1kg</span>
            <span>•</span>
            <span>Cảng biển: Hải Phòng / Cát Lái</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
