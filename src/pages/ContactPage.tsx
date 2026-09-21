import React, { useState, useEffect } from 'react';
import { Phone, Mail, Send, CheckCircle2, Globe2, Building2, Factory, Sparkles } from 'lucide-react';
import { useToast } from '../context/ToastContext';
import { isValidVietnamesePhone, isValidEmail, isMinLength } from '../utils/validators';

export const ContactPage: React.FC = () => {
  const { showToast } = useToast();

  const [contactData, setContactData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    inquiryType: 'b2c',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!isMinLength(contactData.fullName, 2)) {
      errs.fullName = 'Vui lòng nhập họ và tên của bạn.';
    }
    if (!isValidVietnamesePhone(contactData.phone)) {
      errs.phone = 'Vui lòng nhập số điện thoại hợp lệ (10 số).';
    }
    if (!isValidEmail(contactData.email)) {
      errs.email = 'Vui lòng nhập email hợp lệ.';
    }
    if (!isMinLength(contactData.message, 10)) {
      errs.message = 'Nội dung tin nhắn tối thiểu 10 ký tự.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitted(true);
    showToast(
      'Gửi thông tin thành công!',
      'Chuyên viên Zaitoon Tea sẽ liên hệ lại với bạn trong vòng 24 giờ.',
      'success'
    );
  };

  return (
    <div className="bg-white min-h-screen py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-200/60">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>KẾT NỐI VỚI CHÚNG TÔI</span>
          </div>

          <h1 className="font-sans text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Liên Hệ & Hợp Tác Phân Phối
          </h1>

          <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
            Dù bạn là người yêu trà muốn thưởng thức búp trà tươi nguyên hay doanh nghiệp tìm kiếm nguồn cung ứng xuất khẩu số lượng lớn, Zaitoon Tea luôn sẵn lòng phục vụ.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Contact & Factory Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-50/70 rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs space-y-6">
              <h2 className="font-sans text-base font-bold text-slate-900 border-b border-slate-200 pb-3">
                Thông Tin Trụ Sở & Nhà Máy
              </h2>

              <div className="space-y-4 text-xs text-slate-600">
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-2xl bg-white border border-slate-200 text-emerald-600 shrink-0 shadow-xs">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Văn Phòng Hà Nội</h4>
                    <p className="mt-0.5 leading-relaxed">Số 17, Ngõ 943/5 Giải Phóng, Giáp Bát, Hoàng Mai, TP. Hà Nội</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-2xl bg-white border border-slate-200 text-emerald-600 shrink-0 shadow-xs">
                    <Factory className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Nhà Máy Chế Biến Phú Thọ</h4>
                    <p className="mt-0.5 leading-relaxed">Khu 12, Xã Trạm Thản, Huyện Phù Ninh, Tỉnh Phú Thọ, Việt Nam</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-2xl bg-white border border-slate-200 text-emerald-600 shrink-0 shadow-xs">
                    <Phone className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Hotline / Zalo Tư Vấn</h4>
                    <a href="tel:+84915398014" className="text-emerald-700 font-bold hover:underline">
                      +84 915 398 014
                    </a>
                    <p className="text-[11px] text-slate-400 mt-0.5">Hỗ trợ 24/7 (Tiếng Việt & English)</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-2xl bg-white border border-slate-200 text-emerald-600 shrink-0 shadow-xs">
                    <Mail className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Email Xuất Khẩu & Bán Lẻ</h4>
                    <p className="font-medium text-slate-700">zaitoontealtd@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Global Export Summary */}
            <div className="bg-gradient-to-br from-emerald-50 via-white to-teal-50 rounded-3xl p-6 sm:p-8 border border-emerald-200/80 shadow-xs space-y-3">
              <div className="flex items-center gap-2 text-emerald-900 font-bold text-sm">
                <Globe2 className="w-5 h-5 text-emerald-600" />
                <span>Năng Lực Cung Ứng Xuất Khẩu Toàn Cầu</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Đóng gói bao bì giấy Kraft tráng bạc, bao PP/PE chịu lực từ 25kg đến 50kg. Đầy đủ chứng thư hun trùng, kiểm nghiệm vi sinh và xuất khẩu qua cảng Hải Phòng & Cát Lái.
              </p>
            </div>
          </div>

          {/* Right Column: Contact & Inquiry Form */}
          <div className="lg:col-span-7 bg-slate-50/70 rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-xs">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-slate-900">
                  Cảm Ơn Bạn Đã Gửi Yêu Cầu!
                </h3>
                <p className="text-xs text-slate-500 max-w-md mx-auto leading-relaxed">
                  Zaitoon Tea đã nhận được thông tin liên hệ của bạn. Bộ phận phụ trách sẽ liên hệ lại qua điện thoại hoặc email trong thời gian sớm nhất.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setContactData({
                      fullName: '',
                      email: '',
                      phone: '',
                      company: '',
                      inquiryType: 'b2c',
                      message: ''
                    });
                  }}
                  className="px-6 py-2.5 rounded-full bg-emerald-600 text-white text-xs font-bold shadow-glow"
                >
                  Gửi Tin Nhắn Mới
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h2 className="font-sans text-lg font-bold text-slate-900 border-b border-slate-200 pb-3">
                  Gửi Tin Nhắn Cho Zaitoon Tea
                </h2>

                <div>
                  <label className="text-xs font-bold text-slate-900 block mb-1">
                    Mục đích liên hệ
                  </label>
                  <select
                    value={contactData.inquiryType}
                    onChange={(e) => setContactData({ ...contactData, inquiryType: e.target.value })}
                    className="w-full text-xs p-3 rounded-2xl border border-slate-200 bg-white focus:outline-none focus:border-emerald-500 shadow-xs"
                  >
                    <option value="b2c">Khách hàng cá nhân (Tư vấn mua lẻ & thưởng trà)</option>
                    <option value="b2b_gift">Doanh nghiệp đặt hộp quà biếu Tết / Sự kiện</option>
                    <option value="distributor">Đăng ký làm Đại lý / Nhà phân phối trong nước</option>
                    <option value="export">Đối tác xuất khẩu quốc tế (B2B Bulk Export / OEM)</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-slate-900 block mb-1">
                      Họ và tên <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={contactData.fullName}
                      onChange={(e) => setContactData({ ...contactData, fullName: e.target.value })}
                      placeholder="Nguyễn Văn A"
                      className={`w-full text-xs p-3 rounded-2xl border ${
                        errors.fullName ? 'border-rose-400 bg-rose-50/50' : 'border-slate-200 bg-white'
                      } focus:outline-none focus:border-emerald-500 shadow-xs`}
                    />
                    {errors.fullName && <p className="text-[11px] text-rose-600 mt-1">{errors.fullName}</p>}
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-900 block mb-1">
                      Số điện thoại <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="tel"
                      value={contactData.phone}
                      onChange={(e) => setContactData({ ...contactData, phone: e.target.value })}
                      placeholder="0915398014"
                      className={`w-full text-xs p-3 rounded-2xl border ${
                        errors.phone ? 'border-rose-400 bg-rose-50/50' : 'border-slate-200 bg-white'
                      } focus:outline-none focus:border-emerald-500 shadow-xs`}
                    />
                    {errors.phone && <p className="text-[11px] text-rose-600 mt-1">{errors.phone}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-slate-900 block mb-1">
                      Email liên hệ <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      value={contactData.email}
                      onChange={(e) => setContactData({ ...contactData, email: e.target.value })}
                      placeholder="email@domain.com"
                      className={`w-full text-xs p-3 rounded-2xl border ${
                        errors.email ? 'border-rose-400 bg-rose-50/50' : 'border-slate-200 bg-white'
                      } focus:outline-none focus:border-emerald-500 shadow-xs`}
                    />
                    {errors.email && <p className="text-[11px] text-rose-600 mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-900 block mb-1">
                      Tên công ty / Cửa hàng (Nếu có)
                    </label>
                    <input
                      type="text"
                      value={contactData.company}
                      onChange={(e) => setContactData({ ...contactData, company: e.target.value })}
                      placeholder="Công ty TNHH..."
                      className="w-full text-xs p-3 rounded-2xl border border-slate-200 bg-white focus:outline-none focus:border-emerald-500 shadow-xs"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-900 block mb-1">
                    Nội dung yêu cầu hoặc loại trà quan tâm <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    rows={4}
                    value={contactData.message}
                    onChange={(e) => setContactData({ ...contactData, message: e.target.value })}
                    placeholder="Vui lòng cho chúng tôi biết nhu cầu của bạn (số lượng cần báo giá, yêu cầu mẫu thử hoặc câu hỏi)..."
                    className={`w-full text-xs p-3 rounded-2xl border ${
                      errors.message ? 'border-rose-400 bg-rose-50/50' : 'border-slate-200 bg-white'
                    } focus:outline-none focus:border-emerald-500 shadow-xs`}
                  />
                  {errors.message && <p className="text-[11px] text-rose-600 mt-1">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-6 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full text-xs font-bold shadow-glow transition-all active:scale-98"
                >
                  <Send className="w-4 h-4" />
                  <span>Gửi Thông Tin Cho Zaitoon Tea</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
