import React from 'react';
import { ShieldCheck, FileText, Database, Layers, BarChart3, Award, Sparkles, BookOpen, Compass } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  onOpenSourceModal: (key: string) => void;
  onOpenMethodologyModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeSection,
  setActiveSection,
  onOpenSourceModal,
  onOpenMethodologyModal
}) => {
  const navItems = [
    { id: 'executive-summary', label: '5.1 Tóm tắt toàn cảnh', icon: Sparkles },
    { id: 'market-definition', label: '5.2 Định nghĩa thị trường', icon: BookOpen },
    { id: 'quantitative-comparison', label: '5.3 So sánh định lượng', icon: BarChart3 },
    { id: 'service-benchmark', label: '5.4 Đánh giá dịch vụ', icon: Compass },
    { id: 'customer-experience', label: '5.5 Trải nghiệm & Biểu phí', icon: Award },
    { id: 'strategic-recommendations', label: '5.6 Khuyến nghị & AI', icon: Layers }
  ];

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 text-slate-900 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand & Authority Badge */}
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center text-white font-bold text-base shadow-xs">
              BA
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="font-bold text-slate-900 text-base sm:text-lg tracking-tight">
                  Báo Cáo Phân Tích Đối Thủ Cạnh Tranh
                </h1>
                <span className="hidden lg:inline-flex items-center gap-1 text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200">
                  <ShieldCheck className="w-3 h-3 text-emerald-600" />
                  Tier 1 Nội Bộ
                </span>
              </div>
              <p className="text-xs text-slate-500 uppercase tracking-wider hidden sm:block">
                Thị Trường Chứng Khoán Việt Nam • 6T/2026 vs 31/12/2025
              </p>
            </div>
          </div>

          {/* Action Modals */}
          <div className="flex items-center gap-2">
            <div className="hidden sm:inline-flex px-3 py-1.5 bg-slate-100 rounded-md text-xs font-semibold text-slate-600 border border-slate-200">
              Dữ liệu: Nội bộ (Tier 1)
            </div>

            <button
              onClick={() => onOpenSourceModal('TIER1_FINANCIAL')}
              className="px-3.5 py-1.5 bg-slate-900 hover:bg-slate-800 text-white rounded-md text-xs font-medium transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
              title="Kiểm tra nguồn dữ liệu nội bộ và các tệp dữ liệu"
            >
              <Database className="w-3.5 h-3.5 text-blue-400" />
              <span>Nguồn Dữ Liệu</span>
            </button>

            <button
              onClick={onOpenMethodologyModal}
              className="px-3 py-1.5 bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 rounded-md text-xs font-medium transition-colors cursor-pointer hidden md:inline-flex items-center gap-1.5"
              title="Xem phương pháp luận và công thức tính toán"
            >
              <FileText className="w-3.5 h-3.5 text-slate-500" />
              <span>Phương pháp luận</span>
            </button>
          </div>
        </div>

        {/* Section Navigation Tabs */}
        <nav className="flex space-x-1.5 overflow-x-auto pb-2.5 pt-1 border-t border-slate-100 no-scrollbar text-xs">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md whitespace-nowrap font-medium transition-all cursor-pointer ${
                  isActive
                    ? 'bg-slate-900 text-white font-semibold shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-blue-400' : 'text-slate-400'}`} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
};
