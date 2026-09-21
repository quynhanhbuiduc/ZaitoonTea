import React from 'react';
import { Sparkles } from 'lucide-react';

interface TickerBarProps {
  items?: string[];
  className?: string;
}

export const TickerBar: React.FC<TickerBarProps> = ({
  items = [
    '100% BÚP CHÈ TỰ NHIÊN PHÚ THỌ',
    'TIÊU CHUẨN XUẤT KHẨU VIETGAP & ISO 22000',
    'CẢNG XUẤT KHẨU HẢI PHÒNG & CÁT LÁI',
    'TRÀ XANH GUNPOWDER & PEKOE ĐỆ NHẤT',
    'GIAO HÀNG TOÀN QUỐC • MIỄN PHÍ TỪ 500K',
    'CHỨNG NHẬN HALAL CHO THỊ TRƯỜNG QUỐC TẾ',
    'CUNG CẤP MẪU THỬ MIỄN PHÍ TOÀN CẦU (FREE SAMPLE)'
  ],
  className = ''
}) => {
  // Double the list for seamless loop
  const duplicated = [...items, ...items];

  return (
    <div className={`relative w-full overflow-hidden bg-emerald-50/70 border-y border-emerald-100/80 py-3 ${className}`}>
      <div className="flex w-max animate-marquee space-x-8 text-xs font-semibold tracking-wider text-emerald-900 uppercase">
        {duplicated.map((item, idx) => (
          <div key={idx} className="flex items-center space-x-3 shrink-0">
            <span className="flex items-center gap-1.5">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              {item}
            </span>
            <Sparkles className="w-3.5 h-3.5 text-emerald-500/60" />
          </div>
        ))}
      </div>
    </div>
  );
};

