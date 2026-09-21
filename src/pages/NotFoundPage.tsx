import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Home, Compass } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="bg-white min-h-[70vh] flex items-center justify-center py-16 px-4">
      <div className="max-w-md w-full bg-slate-50/80 rounded-3xl p-8 sm:p-10 border border-slate-200 text-center space-y-4 shadow-xs">
        <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
          <Compass className="w-8 h-8 stroke-1" />
        </div>
        <h1 className="font-sans text-2xl sm:text-3xl font-bold text-slate-900">
          404 - Không Tìm Thấy Trang
        </h1>
        <p className="text-xs text-slate-500 leading-relaxed">
          Đường dẫn bạn truy cập có thể đã thay đổi hoặc không tồn tại trên hệ thống của Zaitoon Tea.
        </p>
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-full transition-all shadow-glow"
          >
            <Home className="w-4 h-4" />
            <span>Về Trang Chủ</span>
          </Link>
          <Link
            to="/products"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-white hover:bg-slate-100 text-slate-700 text-xs font-semibold rounded-full border border-slate-200 transition-colors shadow-xs"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Xem Danh Mục Trà</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

