import React, { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { ShoppingBag, Search, Menu, X, ChevronDown, ArrowUpRight } from 'lucide-react';
import { AnnouncementBar } from './AnnouncementBar';
import { MobileDrawer } from './MobileDrawer';

interface HeaderProps {
  cartItemCount?: number;
  onOpenCart?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  cartItemCount = 0,
  onOpenCart
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchOpen(false);
      setSearchQuery('');
    }
  };

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `text-xs font-semibold tracking-wide transition-all duration-200 px-3.5 py-1.5 rounded-full ${
      isActive
        ? 'bg-emerald-600 text-white shadow-sm shadow-emerald-500/20'
        : 'text-slate-600 hover:text-emerald-700 hover:bg-emerald-50/70'
    }`;

  return (
    <>
      <header className="sticky top-0 z-40 w-full transition-all duration-300">
        <AnnouncementBar />

        {/* Floating Navigation Wrapper */}
        <div className={`w-full transition-all duration-300 ${isScrolled ? 'py-2 sm:py-3' : 'py-3 sm:py-4'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className={`flex items-center justify-between transition-all duration-300 rounded-full px-4 sm:px-6 py-2.5 ${
                isScrolled
                  ? 'bg-white/90 backdrop-blur-xl border border-slate-200/80 shadow-floating'
                  : 'bg-white/80 backdrop-blur-md border border-slate-200/60 shadow-xs'
              }`}
            >
              {/* Mobile menu trigger */}
              <div className="flex items-center lg:hidden">
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(true)}
                  className="p-1.5 -ml-1 text-slate-700 hover:text-emerald-700 focus:outline-none rounded-full hover:bg-emerald-50 transition-colors"
                  aria-label="Mở menu điều hướng"
                >
                  <Menu className="w-5 h-5" />
                </button>
              </div>

              {/* Brand Logo with fresh green badge */}
              <Link to="/" className="flex items-center gap-2.5 group">
                <div className="w-10 h-10 rounded-full bg-emerald-50 border border-emerald-200/80 p-1 flex items-center justify-center shadow-xs group-hover:scale-105 transition-all duration-300">
                  <img src="/favicon.png" alt="Zaitoon Tea Logo" className="w-full h-full object-contain" />
                </div>
                <div className="flex flex-col">
                  <span className="font-sans text-lg sm:text-xl font-extrabold tracking-tight text-slate-900 group-hover:text-emerald-700 transition-colors leading-none">
                    ZAITOON<span className="text-emerald-600 ml-1 font-semibold">TEA</span>
                  </span>
                  <span className="text-[9px] uppercase tracking-[0.2em] text-slate-500 font-medium mt-0.5">
                    Tinh Hoa Trà Xanh
                  </span>
                </div>
              </Link>

              {/* Desktop Navigation Pills */}
              <nav className="hidden lg:flex items-center gap-1.5 bg-slate-50/80 p-1 rounded-full border border-slate-200/60">
                <NavLink to="/" className={navLinkClass}>
                  Trang Chủ
                </NavLink>

                {/* Products Dropdown */}
                <div className="relative group">
                  <NavLink
                    to="/products"
                    className={({ isActive }) =>
                      `flex items-center gap-1 ${navLinkClass({ isActive })}`
                    }
                  >
                    <span>Sản Phẩm</span>
                    <ChevronDown className="w-3.5 h-3.5 opacity-60 group-hover:rotate-180 transition-transform duration-200" />
                  </NavLink>

                  <div className="absolute top-full left-0 w-64 pt-2 hidden group-hover:block transition-all opacity-0 group-hover:opacity-100">
                    <div className="bg-white rounded-2xl shadow-xl border border-slate-200/80 p-2 space-y-1 backdrop-blur-xl">
                      <Link
                        to="/products"
                        className="block px-3.5 py-2 text-xs font-semibold rounded-xl text-slate-800 hover:bg-emerald-50 hover:text-emerald-800 transition-colors"
                      >
                        Tất Cả Sản Phẩm Trà
                      </Link>
                      <Link
                        to="/products?category=green-tea"
                        className="block px-3.5 py-2 text-xs rounded-xl text-slate-700 hover:bg-emerald-50 hover:text-emerald-800 transition-colors"
                      >
                        Trà Xanh (Gunpowder, Pekoe)
                      </Link>
                      <Link
                        to="/products?category=tea-box"
                        className="block px-3.5 py-2 text-xs rounded-xl text-slate-700 hover:bg-emerald-50 hover:text-emerald-800 transition-colors"
                      >
                        Trà Hộp Quà Tặng (Tea Box)
                      </Link>
                      <Link
                        to="/products?category=tea-bag"
                        className="block px-3.5 py-2 text-xs rounded-xl text-slate-700 hover:bg-emerald-50 hover:text-emerald-800 transition-colors"
                      >
                        Trà Túi Lọc (Tea Bag)
                      </Link>
                      <Link
                        to="/products?category=specialty"
                        className="block px-3.5 py-2 text-xs rounded-xl text-slate-700 hover:bg-emerald-50 hover:text-emerald-800 transition-colors"
                      >
                        Trà Saffron & Thảo Mộc
                      </Link>
                    </div>
                  </div>
                </div>

                <NavLink to="/about" className={navLinkClass}>
                  Đồi Chè Phú Thọ
                </NavLink>

                <NavLink to="/contact" className={navLinkClass}>
                  Xuất Khẩu B2B
                </NavLink>

                <NavLink to="/contact" className={navLinkClass}>
                  Liên Hệ
                </NavLink>
              </nav>

              {/* Right Action Icons & Cart */}
              <div className="flex items-center gap-2">
                {/* Search Bar / Trigger */}
                <div className="relative">
                  {searchOpen ? (
                    <form
                      onSubmit={handleSearchSubmit}
                      className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center bg-white rounded-full border border-emerald-300 shadow-xl px-3 py-1.5 w-64 sm:w-72 z-20"
                    >
                      <Search className="w-4 h-4 text-emerald-600 mr-2 shrink-0" />
                      <input
                        type="text"
                        placeholder="Tìm loại trà bạn thích..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        autoFocus
                        className="w-full bg-transparent text-xs focus:outline-none text-slate-800 placeholder-slate-400"
                      />
                      <button
                        type="button"
                        onClick={() => setSearchOpen(false)}
                        className="p-1 text-slate-400 hover:text-slate-700"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </form>
                  ) : (
                    <button
                      type="button"
                      onClick={() => setSearchOpen(true)}
                      className="p-2 text-slate-600 hover:text-emerald-700 hover:bg-emerald-50 rounded-full transition-colors"
                      aria-label="Tìm kiếm sản phẩm"
                    >
                      <Search className="w-4.5 h-4.5" />
                    </button>
                  )}
                </div>

                {/* Cart Button with Emerald Badge */}
                <button
                  type="button"
                  onClick={onOpenCart}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200/70 transition-all active:scale-95 group"
                  aria-label={`Xem giỏ hàng, hiện có ${cartItemCount} sản phẩm`}
                >
                  <ShoppingBag className="w-4 h-4 text-emerald-700 group-hover:scale-110 transition-transform" />
                  <span className="text-xs font-bold text-emerald-900">{cartItemCount}</span>
                </button>

                {/* B2B Export Request Action */}
                <Link
                  to="/contact"
                  className="hidden md:inline-flex items-center gap-1 px-3.5 py-1.5 rounded-full bg-slate-900 hover:bg-emerald-700 text-white text-xs font-semibold transition-colors shadow-xs"
                >
                  <span>Báo Giá B2B</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-emerald-400" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <MobileDrawer
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
};
