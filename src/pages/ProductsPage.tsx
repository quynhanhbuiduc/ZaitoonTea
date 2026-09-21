import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter, Search, RotateCcw, X, SlidersHorizontal, Sparkles } from 'lucide-react';
import { Product, ProductFilterOptions } from '../types/product';
import { productService } from '../services/productService';
import { CATEGORIES } from '../data/categories';
import { ProductCard } from '../components/product/ProductCard';
import { QuickViewModal } from '../components/product/QuickViewModal';
import { motion, AnimatePresence } from 'framer-motion';

export const ProductsPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [mobileFilterOpen, setMobileFilterOpen] = useState<boolean>(false);

  // Filter states
  const categoryParam = searchParams.get('category') || 'all';
  const searchParam = searchParams.get('search') || '';

  const [selectedCategory, setSelectedCategory] = useState<string>(categoryParam);
  const [searchQuery, setSearchQuery] = useState<string>(searchParam);
  const [priceBracket, setPriceBracket] = useState<string>('all');
  const [harvestSeason, setHarvestSeason] = useState<string>('all');
  const [inStockOnly, setInStockOnly] = useState<boolean>(false);
  const [sortBy, setSortBy] = useState<ProductFilterOptions['sortBy']>('featured');

  useEffect(() => {
    setSelectedCategory(searchParams.get('category') || 'all');
    setSearchQuery(searchParams.get('search') || '');
  }, [searchParams]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const priceRange = useMemo<[number, number] | undefined>(() => {
    switch (priceBracket) {
      case 'under-150':
        return [0, 150000];
      case '150-300':
        return [150000, 300000];
      case '300-500':
        return [300000, 500000];
      case 'over-500':
        return [500000, 2000000];
      default:
        return undefined;
    }
  }, [priceBracket]);

  useEffect(() => {
    let isCancelled = false;
    setLoading(true);

    const filterOptions: ProductFilterOptions = {
      category: selectedCategory !== 'all' ? selectedCategory : undefined,
      searchQuery: searchQuery.trim() || undefined,
      priceRange,
      harvestSeason: harvestSeason !== 'all' ? harvestSeason : undefined,
      inStockOnly: inStockOnly ? true : undefined,
      sortBy
    };

    productService.getProducts(filterOptions).then((data) => {
      if (!isCancelled) {
        setProducts(data);
        setLoading(false);
      }
    });

    return () => {
      isCancelled = true;
    };
  }, [selectedCategory, searchQuery, priceRange, harvestSeason, inStockOnly, sortBy]);

  const handleResetFilters = () => {
    setSelectedCategory('all');
    setSearchQuery('');
    setPriceBracket('all');
    setHarvestSeason('all');
    setInStockOnly(false);
    setSortBy('featured');
    setSearchParams({});
  };

  const handleCategoryChange = (catId: string) => {
    setSelectedCategory(catId);
    if (catId === 'all') {
      const newParams = new URLSearchParams(searchParams);
      newParams.delete('category');
      setSearchParams(newParams);
    } else {
      const newParams = new URLSearchParams(searchParams);
      newParams.set('category', catId);
      setSearchParams(newParams);
    }
  };

  return (
    <div className="bg-white min-h-screen py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="mb-8 max-w-3xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold mb-3 border border-emerald-200/60">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>DANH MỤC TRÀ THƯỢNG HẠNG</span>
          </div>
          <h1 className="font-sans text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Bộ Sưu Tập Danh Trà Zaitoon
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
            Tuyển tập đầy đủ các dòng trà búp xanh, trà hộp quà tặng cao cấp, trà túi lọc hiện đại và đặc sản Saffron của thương hiệu Zaitoon Tea từ vùng đất Phú Thọ.
          </p>
        </div>

        {/* Layout Grid: Sidebar Filter + Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Desktop Filter Sidebar */}
          <aside className="hidden lg:block space-y-6">
            <div className="bg-slate-50/70 rounded-3xl p-5 border border-slate-200/80 shadow-xs space-y-6">
              {/* Header filter & Reset */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                  <Filter className="w-4 h-4 text-emerald-600" />
                  <span>Bộ Lọc Sản Phẩm</span>
                </div>
                <button
                  type="button"
                  onClick={handleResetFilters}
                  className="text-xs text-slate-500 hover:text-emerald-700 flex items-center gap-1 font-medium transition-colors"
                  title="Đặt lại bộ lọc"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Xóa lọc</span>
                </button>
              </div>

              {/* Search Box */}
              <div>
                <label className="text-[11px] font-bold text-slate-700 uppercase tracking-wider block mb-2">
                  Tìm kiếm
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Tên trà, hương vị..."
                    className="w-full text-xs py-2.5 pl-8 pr-3 rounded-full border border-slate-200 focus:outline-none focus:border-emerald-500 bg-white shadow-xs"
                  />
                  <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  )}
                </div>
              </div>

              {/* Category Filter */}
              <div>
                <label className="text-[11px] font-bold text-slate-700 uppercase tracking-wider block mb-2.5">
                  Phân Loại Trà
                </label>
                <div className="space-y-1">
                  <button
                    type="button"
                    onClick={() => handleCategoryChange('all')}
                    className={`w-full text-left text-xs py-2 px-3 rounded-xl transition-all flex items-center justify-between font-semibold ${
                      selectedCategory === 'all'
                        ? 'bg-emerald-600 text-white shadow-sm shadow-emerald-500/20'
                        : 'text-slate-700 hover:bg-white'
                    }`}
                  >
                    <span>Tất Cả Sản Phẩm</span>
                  </button>
                  {CATEGORIES.map((cat) => (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => handleCategoryChange(cat.id)}
                      className={`w-full text-left text-xs py-2 px-3 rounded-xl transition-all flex items-center justify-between ${
                        selectedCategory === cat.id
                          ? 'bg-emerald-600 text-white font-semibold shadow-sm shadow-emerald-500/20'
                          : 'text-slate-700 hover:bg-white'
                      }`}
                    >
                      <span>{cat.vietnameseName}</span>
                      <span className="text-[10px] opacity-75">({cat.productCount})</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range Filter */}
              <div>
                <label className="text-[11px] font-bold text-slate-700 uppercase tracking-wider block mb-2.5">
                  Khoảng Giá (VNĐ)
                </label>
                <div className="space-y-1.5 text-xs">
                  {[
                    { id: 'all', label: 'Tất cả mức giá' },
                    { id: 'under-150', label: 'Dưới 150.000đ' },
                    { id: '150-300', label: '150.000đ - 300.000đ' },
                    { id: '300-500', label: '300.000đ - 500.000đ' },
                    { id: 'over-500', label: 'Trên 500.000đ' },
                  ].map((p) => (
                    <label key={p.id} className="flex items-center gap-2.5 cursor-pointer py-1">
                      <input
                        type="radio"
                        name="priceBracket"
                        value={p.id}
                        checked={priceBracket === p.id}
                        onChange={(e) => setPriceBracket(e.target.value)}
                        className="accent-emerald-600"
                      />
                      <span className={priceBracket === p.id ? 'font-bold text-emerald-800' : 'text-slate-600'}>
                        {p.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Harvest Season */}
              <div>
                <label className="text-[11px] font-bold text-slate-700 uppercase tracking-wider block mb-2">
                  Mùa Vụ Thu Hoạch
                </label>
                <select
                  value={harvestSeason}
                  onChange={(e) => setHarvestSeason(e.target.value)}
                  className="w-full text-xs p-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-emerald-500 bg-white"
                >
                  <option value="all">Tất cả vụ mùa</option>
                  <option value="Vụ Xuân">Vụ Xuân (Búp tơ thượng hạng)</option>
                  <option value="Vụ Thu">Vụ Thu (Đậm đà hương sắc)</option>
                </select>
              </div>

              {/* In Stock Only */}
              <div className="pt-2 border-t border-slate-200">
                <label className="flex items-center gap-2 text-xs text-slate-700 cursor-pointer font-medium">
                  <input
                    type="checkbox"
                    checked={inStockOnly}
                    onChange={(e) => setInStockOnly(e.target.checked)}
                    className="accent-emerald-600 rounded"
                  />
                  <span>Chỉ hiện sản phẩm còn hàng</span>
                </label>
              </div>
            </div>
          </aside>

          {/* Main Product Grid & Controls */}
          <div className="lg:col-span-3 space-y-6">
            {/* Control Bar */}
            <div className="bg-slate-50/70 rounded-3xl p-4 border border-slate-200/80 shadow-xs flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setMobileFilterOpen(true)}
                  className="lg:hidden flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-emerald-300 text-xs font-bold text-emerald-800 bg-white shadow-xs"
                >
                  <SlidersHorizontal className="w-3.5 h-3.5" />
                  <span>Bộ lọc</span>
                </button>

                <p className="text-xs text-slate-600">
                  Hiển thị <strong className="text-slate-900">{products.length}</strong> sản phẩm
                  {selectedCategory !== 'all' && (
                    <span> trong <strong className="text-emerald-700 capitalize">{selectedCategory}</strong></span>
                  )}
                </p>
              </div>

              {/* Sorting Selector */}
              <div className="flex items-center gap-2 text-xs">
                <span className="text-slate-500 hidden sm:inline">Sắp xếp:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as ProductFilterOptions['sortBy'])}
                  className="py-1.5 px-3 rounded-full border border-slate-200 bg-white text-slate-800 focus:outline-none focus:border-emerald-500 font-semibold text-xs shadow-xs"
                >
                  <option value="featured">Nổi bật nhất</option>
                  <option value="price-asc">Giá: Thấp đến Cao</option>
                  <option value="price-desc">Giá: Cao đến Thấp</option>
                  <option value="rating">Đánh giá cao nhất</option>
                  <option value="newest">Mới nhất</option>
                </select>
              </div>
            </div>

            {/* Active Filters Pill display */}
            {(selectedCategory !== 'all' || searchQuery || priceBracket !== 'all' || harvestSeason !== 'all' || inStockOnly) && (
              <div className="flex flex-wrap items-center gap-2 text-xs">
                <span className="text-slate-400 text-[11px]">Đang lọc:</span>
                {selectedCategory !== 'all' && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 font-semibold">
                    Danh mục: {CATEGORIES.find((c) => c.id === selectedCategory)?.vietnameseName}
                    <button onClick={() => handleCategoryChange('all')}><X className="w-3 h-3" /></button>
                  </span>
                )}
                {searchQuery && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 font-semibold">
                    Từ khóa: "{searchQuery}"
                    <button onClick={() => setSearchQuery('')}><X className="w-3 h-3" /></button>
                  </span>
                )}
                {priceBracket !== 'all' && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 font-semibold">
                    Giá: {priceBracket}
                    <button onClick={() => setPriceBracket('all')}><X className="w-3 h-3" /></button>
                  </span>
                )}
                <button
                  type="button"
                  onClick={handleResetFilters}
                  className="text-xs text-emerald-700 underline font-semibold hover:text-emerald-900 ml-1"
                >
                  Xóa tất cả
                </button>
              </div>
            )}

            {/* Products List */}
            {loading ? (
              <div className="py-24 text-center">
                <div className="inline-block w-8 h-8 border-4 border-emerald-600 border-t-transparent rounded-full animate-spin" />
                <p className="text-xs text-slate-500 mt-3 font-medium">Đang đồng bộ dữ liệu trà...</p>
              </div>
            ) : products.length === 0 ? (
              <div className="bg-slate-50 rounded-3xl p-12 text-center border border-slate-200 shadow-xs space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center mx-auto text-emerald-600">
                  <Filter className="w-8 h-8 stroke-1" />
                </div>
                <h3 className="font-serif text-xl font-bold text-slate-900">
                  Không tìm thấy sản phẩm phù hợp
                </h3>
                <p className="text-xs text-slate-500 max-w-md mx-auto">
                  Không có sản phẩm nào khớp với bộ lọc bạn vừa chọn. Hãy thử nới lỏng khoảng giá hoặc chọn danh mục khác.
                </p>
                <button
                  type="button"
                  onClick={handleResetFilters}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-600 text-white text-xs font-bold hover:bg-emerald-500 transition-colors shadow-glow"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Xóa tất cả bộ lọc</span>
                </button>
              </div>
            ) : (
              <motion.div
                layout
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                <AnimatePresence>
                  {products.map((product) => (
                    <motion.div
                      key={product.id}
                      layout
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.96 }}
                      transition={{ duration: 0.25 }}
                    >
                      <ProductCard
                        product={product}
                        onQuickView={(p) => setSelectedProduct(p)}
                      />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* Quick View Modal */}
      <QuickViewModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />

      {/* Mobile Filter Drawer */}
      {mobileFilterOpen && (
        <div className="fixed inset-0 z-50 flex lg:hidden">
          <div
            className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs"
            onClick={() => setMobileFilterOpen(false)}
          />
          <div className="relative w-full max-w-xs bg-white h-full shadow-2xl p-5 overflow-y-auto ml-auto space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <span className="font-sans font-bold text-slate-900 text-base">Bộ Lọc Trà</span>
              <button
                onClick={() => setMobileFilterOpen(false)}
                className="p-1 rounded-full text-slate-500 hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div>
              <label className="text-xs font-bold text-slate-900 uppercase block mb-2">
                Danh Mục
              </label>
              <div className="space-y-1">
                <button
                  onClick={() => {
                    handleCategoryChange('all');
                    setMobileFilterOpen(false);
                  }}
                  className={`w-full text-left text-xs py-2 px-3 rounded-xl font-semibold ${
                    selectedCategory === 'all' ? 'bg-emerald-600 text-white' : 'text-slate-700'
                  }`}
                >
                  Tất Cả Sản Phẩm
                </button>
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => {
                      handleCategoryChange(cat.id);
                      setMobileFilterOpen(false);
                    }}
                    className={`w-full text-left text-xs py-2 px-3 rounded-xl ${
                      selectedCategory === cat.id ? 'bg-emerald-600 text-white font-semibold' : 'text-slate-700'
                    }`}
                  >
                    {cat.vietnameseName}
                  </button>
                ))}
              </div>
            </div>

            <button
              type="button"
              onClick={() => setMobileFilterOpen(false)}
              className="w-full py-3 bg-emerald-600 text-white text-xs font-bold rounded-full shadow-glow"
            >
              Áp Dụng Bộ Lọc
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
