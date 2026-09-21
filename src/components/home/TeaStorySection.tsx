import React from 'react';
import { Sun, Flame, RotateCw, Wind, ShieldCheck, Sparkles } from 'lucide-react';
import { TEA_PROCESSING_STEPS } from '../../data/teaStory';

export const TeaStorySection: React.FC = () => {
  const getStepIcon = (name: string) => {
    switch (name) {
      case 'Sun':
        return <Sun className="w-5 h-5 text-emerald-600" />;
      case 'Flame':
        return <Flame className="w-5 h-5 text-emerald-600" />;
      case 'RotateCw':
        return <RotateCw className="w-5 h-5 text-emerald-600" />;
      case 'Wind':
        return <Wind className="w-5 h-5 text-emerald-600" />;
      default:
        return <ShieldCheck className="w-5 h-5 text-emerald-600" />;
    }
  };

  return (
    <section className="py-16 sm:py-20 bg-slate-50/70 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold border border-emerald-200/60">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>QUY TRÌNH CHẾ BIẾN</span>
          </div>
          <h2 className="font-sans text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            5 Bước Kỹ Thuật Sao Chế Truyền Thống
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 max-w-lg mx-auto leading-relaxed">
            Quy trình khép kín tại nhà máy Trạm Thản - Phú Thọ giúp giữ trọn vẹn hương cốm non và dưỡng chất tự nhiên.
          </p>
        </div>

        {/* Clean, Uniform 5-Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {TEA_PROCESSING_STEPS.map((step) => (
            <div
              key={step.step}
              className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-xs hover:shadow-md hover:border-emerald-300 transition-all duration-300 flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700">
                    0{step.step}
                  </span>
                  <div className="w-8 h-8 rounded-xl bg-emerald-50 flex items-center justify-center">
                    {getStepIcon(step.iconName)}
                  </div>
                </div>

                <div>
                  <h3 className="font-sans text-sm font-bold text-slate-900 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-[11px] font-semibold text-emerald-700 mt-0.5">
                    {step.subtitle}
                  </p>
                </div>

                <p className="text-xs text-slate-500 line-clamp-3 leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="pt-2 border-t border-slate-100 text-[10px] text-slate-400 font-medium">
                Tiêu chuẩn VietGAP
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
