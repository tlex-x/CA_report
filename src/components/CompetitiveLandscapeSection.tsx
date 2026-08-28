import React, { useState } from 'react';
import { 
  Building2, 
  Radio, 
  Database, 
  Smartphone, 
  ExternalLink, 
  CheckCircle2, 
  Cpu, 
  TrendingUp, 
  BrainCircuit, 
  ShieldCheck, 
  Search, 
  FileText, 
  Layers, 
  ArrowRight,
  Info
} from 'lucide-react';
import { NON_SECURITIES_COMPETITORS, CompetitorProfile } from '../data/competitorLandscapeData';
import { COMPANIES_DATA } from '../data/securitiesData';
import { SourceBadge } from './SourceBadge';

interface CompetitiveLandscapeSectionProps {
  onOpenSourceModal: (key: string) => void;
  onSelectCompany: (ticker: string) => void;
}

export const CompetitiveLandscapeSection: React.FC<CompetitiveLandscapeSectionProps> = ({
  onOpenSourceModal,
  onSelectCompany
}) => {
  const [activeCategory, setActiveCategory] = useState<'Securities Firms' | 'Financial Media' | 'Data Platforms' | 'Investment Platforms'>('Financial Media');
  const [selectedCompetitorId, setSelectedCompetitorId] = useState<string>('cafef');

  const categories = [
    {
      id: 'Securities Firms' as const,
      label: '1. Selected Top 20 Securities Firms',
      count: '20 Đơn vị',
      icon: Building2,
      desc: '20 CTCK tiêu biểu hàng đầu trong mẫu nghiên cứu thị trường'
    },
    {
      id: 'Financial Media' as const,
      label: '2. Financial Media (Truyền Thông Tài Chính)',
      count: '3 Đại diện',
      icon: Radio,
      desc: 'Cạnh tranh về tiêu thụ thông tin, phân tích tin tức và sự chú ý của nhà đầu tư'
    },
    {
      id: 'Data Platforms' as const,
      label: '3. Data Platforms (Nền Tảng Dữ Liệu)',
      count: '4 Đại diện',
      icon: Database,
      desc: 'Cung cấp dữ liệu tài chính, sàng lọc, phân tích và công cụ nghiên cứu độc lập'
    },
    {
      id: 'Investment Platforms' as const,
      label: '4. Investment Platforms (FinTech Đầu Tư)',
      count: '4 Đại diện',
      icon: Smartphone,
      desc: 'Cạnh tranh qua giao dịch vi mô, tiếp cận đầu tư số, Robo-advisor và công cụ quản lý tài sản'
    }
  ];

  // Current category competitors for non-securities
  const categoryCompetitors = NON_SECURITIES_COMPETITORS.filter(
    (c) => c.category === activeCategory
  );

  // Active selected competitor object
  const currentCompetitor: CompetitorProfile | undefined = 
    NON_SECURITIES_COMPETITORS.find((c) => c.id === selectedCompetitorId) ||
    categoryCompetitors[0] ||
    NON_SECURITIES_COMPETITORS[0];

  const handleCategoryChange = (cat: typeof activeCategory) => {
    setActiveCategory(cat);
    if (cat !== 'Securities Firms') {
      const firstInCat = NON_SECURITIES_COMPETITORS.find((c) => c.category === cat);
      if (firstInCat) {
        setSelectedCompetitorId(firstInCat.id);
      }
    }
  };

  return (
    <section id="competitive-landscape" className="scroll-mt-24 space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 pb-4 border-b border-slate-200">
        <div>
          <div className="flex items-center gap-2 text-slate-500 font-bold text-xs uppercase tracking-wider mb-1">
            <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
            <span>Phần 5.6 • Bức Tranh Cạnh Tranh Toàn Cảnh (Competitive Landscape)</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
            Ma Trận Đối Thủ Trực Tiếp & Gián Tiếp Ngành Tài Chính
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm mt-1">
            Phân loại cấu trúc cạnh tranh 4 nhóm: 20 CTCK trực tiếp và 3 nhóm đối thủ gián tiếp (Financial Media, Data Platforms, Investment Platforms).
          </p>
        </div>
        <SourceBadge sourceKey="TIER2_SERVICES" detail="Phân tích đối thủ đa tầng" onOpenSourceModal={onOpenSourceModal} />
      </div>

      {/* Category Tabs Selector (Bento Tile) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {categories.map((cat) => {
          const Icon = cat.icon;
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => handleCategoryChange(cat.id)}
              className={`p-4 rounded-xl border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                isActive
                  ? 'bg-slate-900 text-white border-slate-900 shadow-md ring-2 ring-slate-900/20'
                  : 'bg-white text-slate-800 border-slate-200 hover:border-slate-300 hover:bg-slate-50 shadow-xs'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <div className={`p-2 rounded-lg ${isActive ? 'bg-slate-800 text-white' : 'bg-slate-100 text-slate-700'}`}>
                  <Icon className="w-4 h-4" />
                </div>
                <span className={`text-[11px] font-bold px-2 py-0.5 rounded ${
                  isActive ? 'bg-slate-800 text-slate-200' : 'bg-slate-100 text-slate-600'
                }`}>
                  {cat.count}
                </span>
              </div>
              <div>
                <h3 className="font-bold text-xs sm:text-sm leading-snug">{cat.label}</h3>
                <p className={`text-[11px] mt-1 line-clamp-2 leading-relaxed ${
                  isActive ? 'text-slate-300' : 'text-slate-500'
                }`}>
                  {cat.desc}
                </p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Category 1: Securities Firms (Direct Competitors) */}
      {activeCategory === 'Securities Firms' && (
        <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-200">
            <div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-blue-600 rounded-full"></span>
                <h3 className="font-bold text-slate-900 text-base sm:text-lg">
                  Selected Top 20 Securities Firms
                </h3>
              </div>
              <p className="text-xs text-slate-600 mt-1">
                20 công ty chứng khoán hàng đầu thị trường cạnh tranh trực tiếp trên mọi nghiệp vụ: Môi giới, Tự doanh, Cho vay Margin, Bảo lãnh phát hành (IB) và Quản lý tài sản.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-500">Nguồn dữ liệu:</span>
              <span className="text-xs font-mono font-bold bg-white px-2.5 py-1 rounded border border-slate-200 text-slate-800">
                Dữ liệu nội bộ (data-brocoli_6m2026_vs_dec2025)
              </span>
            </div>
          </div>

          {/* Table of Selected Top 20 Securities Firms */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left text-slate-700">
                <thead className="bg-slate-100 text-slate-800 text-[11px] font-bold uppercase tracking-wider border-b border-slate-200">
                  <tr>
                    <th className="py-3 px-3.5 text-center w-12">STT</th>
                    <th className="py-3 px-4">Tên Công Ty</th>
                    <th className="py-3 px-4 text-center">Mã Cổ Phiếu</th>
                    <th className="py-3 px-4 text-right">Vốn Điều Lệ (30/06/2026)</th>
                    <th className="py-3 px-4 text-right">Tổng Tài Sản (30/06/2026)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-normal">
                  {COMPANIES_DATA.map((c, idx) => (
                    <tr key={c.id} className="hover:bg-slate-50/70 transition-colors">
                      <td className="py-3 px-3.5 text-center font-mono text-slate-400">
                        {idx + 1}
                      </td>
                      <td className="py-3 px-4">
                        <div className="font-semibold text-slate-900 text-xs sm:text-sm">
                          {c.brandName}
                        </div>
                        <div className="text-[11px] text-slate-500 truncate max-w-md" title={c.legalName}>
                          {c.legalName}
                        </div>
                      </td>
                      <td className="py-3 px-4 text-center">
                        <span className="font-mono font-bold text-xs px-2.5 py-1 rounded bg-slate-100 text-slate-800 border border-slate-200">
                          {c.ticker}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-right font-mono font-semibold text-slate-900">
                        {c.financials.charterCapital2026H1_B != null
                          ? `${c.financials.charterCapital2026H1_B.toLocaleString('vi-VN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} tỷ VND`
                          : '—'}
                      </td>
                      <td className="py-3 px-4 text-right font-mono font-semibold text-slate-900">
                        {c.financials.totalAssets2026H1_B != null
                          ? `${c.financials.totalAssets2026H1_B.toLocaleString('vi-VN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} tỷ VND`
                          : '—'}
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot className="bg-slate-50/90 font-bold border-t border-slate-200 text-slate-900 text-xs">
                  <tr>
                    <td colSpan={3} className="py-3.5 px-4 text-left uppercase tracking-wider text-[11px]">
                      Tổng Cộng (Selected Top 20 Securities Firms)
                    </td>
                    <td className="py-3.5 px-4 text-right font-mono text-blue-700">
                      {COMPANIES_DATA.reduce((sum, c) => sum + (c.financials.charterCapital2026H1_B || 0), 0).toLocaleString('vi-VN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} tỷ VND
                    </td>
                    <td className="py-3.5 px-4 text-right font-mono text-indigo-700">
                      {COMPANIES_DATA.reduce((sum, c) => sum + (c.financials.totalAssets2026H1_B || 0), 0).toLocaleString('vi-VN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} tỷ VND
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>

          <div className="p-4 bg-blue-50/80 rounded-xl border border-blue-200 flex items-start gap-3 text-xs text-blue-900">
            <Info className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold">Phân định phạm vi đối thủ trực tiếp vs gián tiếp:</p>
              <p className="mt-0.5 text-blue-800 leading-relaxed">
                <b>Selected Top 20 Securities Firms</b> được phân tích định lượng chi tiết trong <b>Phần 5.3</b> (Tài chính & Biên lợi nhuận), <b>Phần 5.4</b> (Dịch vụ) và <b>Phần 5.5</b> (Biểu phí). Các thực thể bên ngoài 20 CTCK này được xếp vào 3 nhóm đối thủ gián tiếp bên dưới (Media, Data, Platform).
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Categories 2, 3, 4: Indirect Competitors (Interactive Dark / Translucent Selector & Profile) */}
      {activeCategory !== 'Securities Firms' && (
        <div className="space-y-6">
          {/* Competitor Selector Bar - STYLED EXACTLY TO SPEC:
              * White competitor name
              * White outlined/wrapped box
              * Approximately 30% transparency
              * Clear hover state
              * Strong selected state
          */}
          <div className="p-5 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white shadow-sm border border-slate-800 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
                <span className="text-xs uppercase font-bold tracking-wider text-slate-300">
                  Danh Sách Đối Thủ Gián Tiếp • {activeCategory}
                </span>
              </div>
              <span className="text-[11px] text-slate-400">
                Nhấp chọn để xem hồ sơ năng lực chi tiết bên dưới
              </span>
            </div>

            {/* Competitor Buttons with 30% transparency white outline style */}
            <div className="flex flex-wrap gap-2.5 pt-1">
              {categoryCompetitors.map((comp) => {
                const isSelected = comp.id === selectedCompetitorId;
                return (
                  <button
                    key={comp.id}
                    onClick={() => setSelectedCompetitorId(comp.id)}
                    className={
                      isSelected
                        ? 'px-4 py-2.5 rounded-lg text-slate-950 font-bold text-xs border-2 border-white bg-white shadow-lg ring-2 ring-white/40 transition-all cursor-pointer flex items-center gap-2'
                        : 'px-4 py-2.5 rounded-lg text-white font-medium text-xs border border-white/30 bg-white/20 hover:bg-white/35 hover:border-white/50 backdrop-blur-xs transition-all cursor-pointer flex items-center gap-2'
                    }
                  >
                    <span className={`w-5 h-5 rounded flex items-center justify-center text-[10px] font-mono font-bold ${
                      isSelected ? 'bg-slate-900 text-white' : 'bg-white/30 text-white'
                    }`}>
                      {comp.logoText}
                    </span>
                    <span className="whitespace-nowrap">{comp.name}</span>
                    {isSelected && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Detailed Competitor Profile Card */}
          {currentCompetitor && (
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-6">
              {/* Profile Header */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-5 border-b border-slate-100">
                <div className="flex items-start gap-3.5">
                  <div className="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center font-bold text-lg shrink-0 shadow-xs">
                    {currentCompetitor.logoText}
                  </div>
                  <div>
                    <div className="flex items-center gap-2.5 flex-wrap">
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                        {currentCompetitor.name}
                      </h3>
                      <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-800 border border-slate-200">
                        {currentCompetitor.badge}
                      </span>
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-indigo-50 text-indigo-700 border border-indigo-200">
                        {currentCompetitor.category}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 mt-1 max-w-3xl leading-relaxed">
                      {currentCompetitor.whoTheyAre}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 self-start md:self-center shrink-0">
                  <a
                    href={currentCompetitor.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 font-medium text-xs flex items-center gap-1.5 transition-colors"
                  >
                    <span>Website chính thức</span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
                  </a>
                </div>
              </div>

              {/* Core Profile Dimensions Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* 1. Target Customers */}
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
                    Khách Hàng Mục Tiêu (Target Customers)
                  </span>
                  <p className="text-xs text-slate-800 leading-relaxed font-medium">
                    {currentCompetitor.targetCustomers}
                  </p>
                </div>

                {/* 2. Business Model */}
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
                    Mô Hình Kinh Doanh (Business Model)
                  </span>
                  <p className="text-xs text-slate-800 leading-relaxed font-medium">
                    {currentCompetitor.businessModel}
                  </p>
                </div>

                {/* 3. Market Positioning */}
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
                    Định Vị Thị Trường (Market Positioning)
                  </span>
                  <p className="text-xs text-slate-800 leading-relaxed font-medium">
                    {currentCompetitor.marketPositioning}
                  </p>
                </div>
              </div>

              {/* Services & Key Differentiators */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {/* Services */}
                <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-xs space-y-3">
                  <div className="flex items-center gap-2">
                    <Layers className="w-4 h-4 text-blue-600" />
                    <h4 className="font-bold text-slate-900 text-xs sm:text-sm">
                      Dịch Vụ & Sản Phẩm Chính Cung Cấp
                    </h4>
                  </div>
                  <ul className="space-y-2 text-xs text-slate-700">
                    {currentCompetitor.services.map((srv, sIdx) => (
                      <li key={sIdx} className="flex items-start gap-2.5 p-2 rounded bg-slate-50 border border-slate-100">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0"></span>
                        <span className="leading-relaxed">{srv}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Key Differentiators */}
                <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-xs space-y-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <h4 className="font-bold text-slate-900 text-xs sm:text-sm">
                      Điểm Khác Biệt Cốt Lõi (Key Differentiators)
                    </h4>
                  </div>
                  <div className="p-3.5 rounded-lg bg-emerald-50/70 border border-emerald-200 text-xs text-emerald-950 leading-relaxed">
                    {currentCompetitor.keyDifferentiators}
                  </div>

                  <div className="pt-2">
                    <span className="text-[11px] font-bold text-slate-600 uppercase tracking-wider block mb-1.5">
                      Liên kết kiểm chứng nguồn:
                    </span>
                    <a
                      href={currentCompetitor.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-blue-600 hover:text-blue-800 font-medium underline"
                    >
                      <span>{currentCompetitor.sourceCitation}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>

              {/* 4 Deep Capabilities: Tech, AI, Research, Financial-Analysis */}
              <div className="p-5 rounded-xl bg-slate-900 text-white border border-slate-800 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-purple-400" />
                    <h4 className="font-bold text-xs sm:text-sm text-white uppercase tracking-wider">
                      Đánh Giá Chi Tiết 4 Trục Năng Lực Chuyên Sâu
                    </h4>
                  </div>
                  <span className="text-[10px] uppercase font-bold text-slate-400">Khảo sát độc lập</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  {/* Technology Capabilities */}
                  <div className="p-3.5 rounded-lg bg-slate-800/80 border border-slate-700 space-y-1.5">
                    <div className="flex items-center gap-2 text-blue-400 font-bold text-xs">
                      <Cpu className="w-3.5 h-3.5" />
                      <span>1. Năng Lực Công Nghệ (Technology)</span>
                    </div>
                    <p className="text-slate-300 leading-relaxed text-[11px]">
                      {currentCompetitor.technologyCapabilities}
                    </p>
                  </div>

                  {/* AI Capabilities */}
                  <div className="p-3.5 rounded-lg bg-slate-800/80 border border-slate-700 space-y-1.5">
                    <div className="flex items-center gap-2 text-purple-400 font-bold text-xs">
                      <BrainCircuit className="w-3.5 h-3.5" />
                      <span>2. Năng Lực AI & Tự Động Hóa (AI Capabilities)</span>
                    </div>
                    <p className="text-slate-300 leading-relaxed text-[11px]">
                      {currentCompetitor.aiCapabilities}
                    </p>
                  </div>

                  {/* Research Capabilities */}
                  <div className="p-3.5 rounded-lg bg-slate-800/80 border border-slate-700 space-y-1.5">
                    <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs">
                      <Search className="w-3.5 h-3.5" />
                      <span>3. Năng Lực Nghiên Cứu (Research Capabilities)</span>
                    </div>
                    <p className="text-slate-300 leading-relaxed text-[11px]">
                      {currentCompetitor.researchCapabilities}
                    </p>
                  </div>

                  {/* Financial Analysis Capabilities */}
                  <div className="p-3.5 rounded-lg bg-slate-800/80 border border-slate-700 space-y-1.5">
                    <div className="flex items-center gap-2 text-amber-400 font-bold text-xs">
                      <TrendingUp className="w-3.5 h-3.5" />
                      <span>4. Năng Lực Phân Tích Tài Chính (Financial-Analysis)</span>
                    </div>
                    <p className="text-slate-300 leading-relaxed text-[11px]">
                      {currentCompetitor.financialAnalysisCapabilities}
                    </p>
                  </div>
                </div>

                {/* Direct source citation link */}
                <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                  <span>Trích dẫn nguồn trực tiếp:</span>
                  <a
                    href={currentCompetitor.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 underline inline-flex items-center gap-1"
                  >
                    <span>{currentCompetitor.sourceCitation} ({currentCompetitor.sourceUrl})</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </section>
  );
};
