import React from 'react';
import { Sparkles, TrendingUp, AlertCircle, ArrowUpRight, ShieldCheck, ChevronRight, Target, BarChart2, Award } from 'lucide-react';
import { COMPANIES_DATA, TOTAL_MARKET_SUMMARY } from '../data/securitiesData';
import { SourceBadge } from './SourceBadge';
import { CompanyMaster } from '../types';

interface ExecutiveSummarySectionProps {
  onOpenSourceModal: (key: string) => void;
  onSelectCompany: (company: CompanyMaster) => void;
}

export const ExecutiveSummarySection: React.FC<ExecutiveSummarySectionProps> = ({
  onOpenSourceModal,
  onSelectCompany
}) => {
  const tcbs = COMPANIES_DATA.find((c) => c.id === 'TCBS')!;
  const ssi = COMPANIES_DATA.find((c) => c.id === 'SSI')!;
  const vpbanks = COMPANIES_DATA.find((c) => c.id === 'VPX')!;
  const vps = COMPANIES_DATA.find((c) => c.id === 'VPS')!;

  return (
    <section id="executive-summary" className="scroll-mt-24 space-y-6">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 pb-4 border-b border-slate-200">
        <div>
          <div className="flex items-center gap-2 text-slate-500 font-bold text-xs uppercase tracking-wider mb-1">
            <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
            <span>Phần 5.1 • Tóm Tắt Toàn Cảnh Thị Trường</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
            Tóm Tắt Toàn Cảnh Ngành Chứng Khoán (Executive Summary)
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm mt-1">
            Bức tranh toàn cảnh 20 công ty chứng khoán Việt Nam 6T/2026: Tái cấu trúc bảng cân đối, phân hóa lợi nhuận và chuyển dịch mô hình tư vấn tài chính.
          </p>
        </div>
        <SourceBadge sourceKey="TIER1_FINANCIAL" onOpenSourceModal={onOpenSourceModal} />
      </div>

      {/* 4 Bento Pillar KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Leader Total Assets */}
        <div
          onClick={() => onSelectCompany(tcbs)}
          className="p-5 rounded-xl bg-white border border-slate-200 hover:border-slate-400 shadow-xs hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
              <span className="font-semibold uppercase tracking-wider text-[11px]">Quán Quân Tài Sản & LNST</span>
              <span className="font-bold text-xs text-white bg-slate-900 px-2 py-0.5 rounded">TCBS</span>
            </div>
            <div className="text-2xl font-bold text-slate-900 font-mono tracking-tight">
              {tcbs.financials.totalAssets2026H1_B.toLocaleString('vi-VN')} <span className="text-xs font-normal text-slate-500">tỷ VND</span>
            </div>
          </div>
          <div className="flex items-center justify-between mt-4 pt-3 border-t border-slate-100 text-xs">
            <span className="text-slate-600">LNST: <b className="text-emerald-600 font-mono">{tcbs.financials.profitAfterTax2026H1_B?.toLocaleString('vi-VN')} tỷ</b></span>
            <span className="text-slate-900 flex items-center group-hover:translate-x-0.5 transition-transform font-medium text-[11px]">Hồ sơ →</span>
          </div>
        </div>

        {/* Leader Revenue */}
        <div
          onClick={() => onSelectCompany(vpbanks)}
          className="p-5 rounded-xl bg-white border border-slate-200 hover:border-slate-400 shadow-xs hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
              <span className="font-semibold uppercase tracking-wider text-[11px]">Quán Quân Doanh Thu HĐ</span>
              <span className="font-bold text-xs text-white bg-slate-900 px-2 py-0.5 rounded">VPBankS</span>
            </div>
            <div className="text-2xl font-bold text-slate-900 font-mono tracking-tight">
              {vpbanks.financials.operatingRevenue2026H1_B.toLocaleString('vi-VN')} <span className="text-xs font-normal text-slate-500">tỷ VND</span>
            </div>
          </div>
          <div className="flex items-center justify-between mt-4 pt-3 border-t border-slate-100 text-xs">
            <span className="text-slate-600">Tăng trưởng: <b className="text-emerald-600 font-mono">+{vpbanks.financials.operatingRevenueGrowthPct}%</b></span>
            <span className="text-slate-900 flex items-center group-hover:translate-x-0.5 transition-transform font-medium text-[11px]">Hồ sơ →</span>
          </div>
        </div>

        {/* Leader Institutional & Advisory */}
        <div
          onClick={() => onSelectCompany(ssi)}
          className="p-5 rounded-xl bg-white border border-slate-200 hover:border-slate-400 shadow-xs hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
              <span className="font-semibold uppercase tracking-wider text-[11px]">Dẫn Đầu Tư Vấn Đầu Tư</span>
              <span className="font-bold text-xs text-white bg-slate-900 px-2 py-0.5 rounded">SSI</span>
            </div>
            <div className="text-2xl font-bold text-slate-900 font-mono tracking-tight">
              {ssi.financials.advisoryInvestmentRevenue2026H1_B?.toLocaleString('vi-VN')} <span className="text-xs font-normal text-slate-500">tỷ VND</span>
            </div>
          </div>
          <div className="flex items-center justify-between mt-4 pt-3 border-t border-slate-100 text-xs">
            <span className="text-slate-600">LNTT: <b className="text-blue-600 font-mono">{ssi.financials.profitBeforeTax2026H1_B.toLocaleString('vi-VN')} tỷ</b></span>
            <span className="text-slate-900 flex items-center group-hover:translate-x-0.5 transition-transform font-medium text-[11px]">Hồ sơ →</span>
          </div>
        </div>

        {/* Leader Retail Brokerage & Tax */}
        <div
          onClick={() => onSelectCompany(vps)}
          className="p-5 rounded-xl bg-white border border-slate-200 hover:border-slate-400 shadow-xs hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
              <span className="font-semibold uppercase tracking-wider text-[11px]">Quán Quân Nộp Thuế 2025</span>
              <span className="font-bold text-xs text-white bg-slate-900 px-2 py-0.5 rounded">VPS</span>
            </div>
            <div className="text-2xl font-bold text-slate-900 font-mono tracking-tight">
              {vps.taxData?.tax2025_B.toLocaleString('vi-VN')} <span className="text-xs font-normal text-slate-500">tỷ VND</span>
            </div>
          </div>
          <div className="flex items-center justify-between mt-4 pt-3 border-t border-slate-100 text-xs">
            <span className="text-slate-600">Vốn ĐL: <b className="text-slate-800 font-mono">{vps.financials.charterCapital2026H1_B.toLocaleString('vi-VN')} tỷ</b></span>
            <span className="text-slate-900 flex items-center group-hover:translate-x-0.5 transition-transform font-medium text-[11px]">Hồ sơ →</span>
          </div>
        </div>
      </div>

      {/* Strategic Synthesis Bento Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Pillar 1: Top Findings */}
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                1. Phát Hiện Nhóm Dẫn Đầu
              </h3>
              <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">Big 4</span>
            </div>
            <p className="text-xs text-slate-700 leading-relaxed">
              Thị trường chứng khoán 6T/2026 ghi nhận sự phân hóa cực đại. Nhóm <b>Big 4 Balance Sheet</b> (TCBS, SSI, VPBankS, VPS) tiếp tục mở rộng quy mô vốn và tài sản trong khi các đơn vị tầm trung bứt phá chuyển đổi số.
            </p>
            <div className="space-y-2 pt-2">
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-100 text-xs text-slate-700">
                <b>TCBS & VPBankS:</b> Dẫn đầu lợi nhuận và doanh thu nhờ khai thác tối đa hệ sinh thái ngân hàng mẹ Techcombank & VPBank.
              </div>
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-100 text-xs text-slate-700">
                <b>SSI & HSC:</b> Duy trì thị phần tổ chức và khối ngoại nhờ chất lượng báo cáo vĩ mô và dịch vụ tư vấn thể chế.
              </div>
            </div>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
            <div className="flex items-center gap-3">
              <div>
                <span className="text-emerald-600 font-bold text-sm">+14.2%</span>
                <span className="block text-[9px] uppercase text-slate-400">Tăng trưởng LN</span>
              </div>
              <div>
                <span className="text-blue-600 font-bold text-sm">12.5%</span>
                <span className="block text-[9px] uppercase text-slate-400">ROA Bình quân</span>
              </div>
            </div>
            <button onClick={() => onOpenSourceModal('TIER1_FINANCIAL')} className="text-slate-900 hover:text-blue-600 font-semibold cursor-pointer">
              Đối soát →
            </button>
          </div>
        </div>

        {/* Pillar 2: Financial Gaps */}
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-2">
                <span className="w-2 h-2 bg-emerald-600 rounded-full"></span>
                2. Khoảng Trống & Cơ Cấu Thu
              </h3>
              <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">Tài chính</span>
            </div>
            <p className="text-xs text-slate-700 leading-relaxed">
              Dữ liệu phản ánh rõ nét sự chuyển dịch nguồn thu: Thu phí giao dịch truyền thống giảm biên do Zero-Fee, nhường chỗ cho <b>Doanh thu tư vấn tài chính cấu trúc</b> và <b>Margin</b>.
            </p>
            <div className="space-y-2 pt-2">
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-100 text-xs text-slate-700">
                <b>Phân hóa DT tư vấn:</b> VPBankS (353,99 tỷ), TCBS (148,42 tỷ), HDBS (120 tỷ) và SHS (72,21 tỷ) chiếm hơn 85% thị trường.
              </div>
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-100 text-xs text-slate-700">
                <b>15/20 CTCK chưa tách bạch:</b> Doanh thu tư vấn đầu tư thường được gom chung vào phí môi giới hoặc chưa thương mại hóa riêng.
              </div>
            </div>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
            <div className="flex items-center gap-3">
              <div>
                <span className="text-slate-900 font-bold text-sm">353,99 tỷ</span>
                <span className="block text-[9px] uppercase text-slate-400">Max Tư Vấn TC</span>
              </div>
              <div>
                <span className="text-slate-900 font-bold text-sm">17,20 tỷ</span>
                <span className="block text-[9px] uppercase text-slate-400">Max Tư Vấn ĐT</span>
              </div>
            </div>
            <button onClick={() => onOpenSourceModal('TIER1_FINANCIAL')} className="text-slate-900 hover:text-blue-600 font-semibold cursor-pointer">
              Đối soát →
            </button>
          </div>
        </div>

        {/* Pillar 3: Strategic Opportunities */}
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-2">
                <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
                3. Cơ Hội Đột Phá AI & Tư Vấn
              </h3>
              <span className="text-[10px] font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded">Chiến lược</span>
            </div>
            <p className="text-xs text-slate-700 leading-relaxed">
              Né tránh bẫy cạnh tranh phí Zero-Fee bằng cách thiết lập lợi thế cạnh tranh độc quyền dựa trên <b>Nghiên cứu thể chế hóa bằng AI</b> và <b>Tư vấn danh mục cá nhân hóa</b>.
            </p>
            <div className="space-y-2 pt-2">
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-100 text-xs text-slate-700">
                <b>Tự động hóa nghiên cứu vĩ mô:</b> Sử dụng AI phân tích KQKD & tạo Flash Note tức thời, tương đương chất lượng SSI/HSC.
              </div>
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-100 text-xs text-slate-700">
                <b>Robo-Advisory cho Mass Affluent:</b> Chiếm lĩnh khoảng trống tư vấn đầu tư danh mục cá nhân hóa có thu phí.
              </div>
            </div>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
            <span className="text-slate-400">Lộ trình: 2026 - 2028</span>
            <a href="#strategic-recommendations" className="text-slate-900 hover:text-blue-600 font-semibold">
              Xem chi tiết →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
