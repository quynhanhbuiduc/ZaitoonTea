import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Award, ShieldCheck, MapPin, Factory, Users, ArrowRight, Sparkles } from 'lucide-react';

export const AboutPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Hero Story Banner */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-teal-50/70 p-8 sm:p-16 lg:p-20 border border-emerald-100 shadow-card-hover">
          <div className="relative z-10 max-w-2xl space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold border border-emerald-200">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span>VỀ CHÚNG TÔI • ZAITOON TEA</span>
            </div>

            <h1 className="font-sans text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Gìn Giữ Hương Vị Thuần Khiết Từ Đồi Chè Di Sản Phú Thọ
            </h1>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Khởi nguồn từ tình yêu sâu sắc với cây chè Việt Nam và khát khao nâng tầm giá trị nông sản bản địa trên thị trường quốc tế, <strong>Công ty TNHH Zaitoon Tea</strong> tự hào mang đến những sản phẩm trà xanh hảo hạng đạt chuẩn xuất khẩu.
            </p>

            <div className="pt-2">
              <blockquote className="p-4 rounded-2xl bg-white border border-emerald-200/80 italic text-xs sm:text-sm text-emerald-900 font-serif shadow-xs">
                "Life is like a cup of tea, it's all in how you make it! We are bringing for you the best pure tea which makes your life more enjoyable!"
              </blockquote>
            </div>
          </div>
        </div>

        {/* Origin & Geography Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-200/60">
              <MapPin className="w-3.5 h-3.5 text-emerald-600" />
              <span>Vùng Nguyên Liệu Di Sản</span>
            </div>

            <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug">
              Xã Trạm Thản - Cái Nôi Của Cây Chè Trung Du Việt Nam
            </h2>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Phú Thọ được thiên nhiên ban tặng khí hậu mát mẻ quanh năm, thổ nhưỡng feralit màu mỡ và nguồn nước tinh khiết từ đầu nguồn sông Hồng, sông Lô. Đây là điều kiện tự nhiên hoàn hảo để những búp chè xanh tích tụ hàm lượng tanin, polyphenol và chất khoáng vượt trội.
            </p>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Tại xưởng sản xuất đặt tại <strong>Khu 12, Xã Trạm Thản, Tỉnh Phú Thọ</strong>, chúng tôi đồng hành cùng những người nông dân địa phương từ khâu chăm bón hữu cơ, thu hái búp non vào sáng sớm, cho đến quy trình phân loại nghiệm thu mẻ sấy nghiêm ngặt.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
                <Factory className="w-6 h-6 text-emerald-600 mb-2" />
                <h4 className="font-sans font-bold text-slate-900 text-sm">Nhà Máy Hiện Đại</h4>
                <p className="text-xs text-slate-500 mt-1">
                  Quy mô nhà xưởng tại Phú Thọ với dây chuyền sao sấy đồng bộ khép kín.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
                <Users className="w-6 h-6 text-emerald-600 mb-2" />
                <h4 className="font-sans font-bold text-slate-900 text-sm">Nghệ Nhân Lành Nghề</h4>
                <p className="text-xs text-slate-500 mt-1">
                  Đội ngũ chuyên gia chè giàu kinh nghiệm thử nếm và kiểm định từng mẻ sao.
                </p>
              </div>
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden shadow-card-hover border border-emerald-100">
            <img
              src="https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?q=80&w=1000&auto=format&fit=crop"
              alt="Búp chè non Phú Thọ"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Certifications & Quality Commitment */}
        <div className="bg-slate-50/70 rounded-3xl p-8 sm:p-12 border border-slate-200/80 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">
              TIÊU CHUẨN & CHỨNG NHẬN
            </span>
            <h2 className="font-sans text-3xl font-extrabold text-slate-900 tracking-tight">
              Cam Kết Chất Lượng Vững Bền
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Chúng tôi luôn đặt an toàn vệ sinh thực phẩm và sức khỏe người tiêu dùng lên hàng đầu.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200/80 text-center space-y-3 shadow-xs">
              <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
                <Leaf className="w-6 h-6" />
              </div>
              <h3 className="font-sans text-base font-bold text-slate-900">100% Thuần Khiết</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Hoàn toàn không phẩm màu, không tẩm ướp hương liệu tổng hợp, giữ trọn sắc nước xanh trong và hương cốm mộc.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200/80 text-center space-y-3 shadow-xs">
              <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-sans text-base font-bold text-slate-900">Chuẩn VietGAP & ISO 22000</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Quy trình canh tác nông nghiệp tốt, giám sát dư lượng vi sinh và kim loại nặng đạt chuẩn quốc gia và quốc tế.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200/80 text-center space-y-3 shadow-xs">
              <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-sans text-base font-bold text-slate-900">Chứng Nhận Halal</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Đủ điều kiện xuất khẩu chính ngạch sang thị trường Trung Đông và các quốc gia Hồi giáo trên thế giới.
              </p>
            </div>
          </div>
        </div>

        {/* CTA to Products */}
        <div className="text-center py-6 space-y-4">
          <h3 className="font-sans text-2xl font-extrabold text-slate-900">
            Sẵn Sàng Thưởng Thức Những Tách Trà Tinh Hoa?
          </h3>
          <p className="text-xs text-slate-500 max-w-md mx-auto">
            Khám phá trọn bộ các dòng trà búp đinh, trà hộp quà tặng và trà túi lọc của chúng tôi ngay hôm nay.
          </p>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow-glow transition-all"
          >
            <span>Khám Phá Danh Mục Sản Phẩm</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};
