import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { CATEGORIES } from '../../data/categories';

export const CategoryHighlights: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-slate-50/70 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold border border-emerald-200/60">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>DANH MỤC SẢN PHẨM</span>
          </div>
          <h2 className="font-sans text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Nguyên Liệu & Danh Trà Zaitoon
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 max-w-lg mx-auto leading-relaxed">
            Đầy đủ các dòng trà búp xanh, trà hộp quà tặng biếu Tết và trà túi lọc cao cấp đáp ứng trọn vẹn nhu cầu thưởng trà & pha chế.
          </p>
        </div>

        {/* 100% Uniform 4-Column Grid - Exactly equal image sizes & heights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.id}
              to={`/products?category=${cat.id}`}
              className="group bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-md hover:border-emerald-300 transition-all duration-300 flex flex-col h-full"
            >
              {/* Uniform 1:1 Square Image Container */}
              <div className="relative aspect-square w-full bg-slate-100 overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.name}
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full bg-slate-900/80 backdrop-blur-xs text-white text-[11px] font-semibold">
                  {cat.productCount} sản phẩm
                </span>
              </div>

              {/* Card Body with Clean, Balanced Typography */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div className="space-y-1">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-emerald-700 block">
                    {cat.name}
                  </span>
                  <h3 className="font-sans text-base font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                    {cat.vietnameseName}
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed pt-1">
                    {cat.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-emerald-700 group-hover:text-emerald-800">
                  <span>Xem sản phẩm</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
