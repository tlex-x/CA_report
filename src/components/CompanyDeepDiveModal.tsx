import React from 'react';
import { X, Globe, Star, TrendingUp, Building2, Shield, Check, Minus, FileText, Landmark, Cpu } from 'lucide-react';
import { CompanyMaster } from '../types';
import { SourceBadge } from './SourceBadge';

interface CompanyDeepDiveModalProps {
  company: CompanyMaster | null;
  isOpen: boolean;
  onClose: () => void;
  onOpenSourceModal: (key: string) => void;
}

export const CompanyDeepDiveModal: React.FC<CompanyDeepDiveModalProps> = ({
  company,
  isOpen,
  onClose,
  onOpenSourceModal
}) => {
  if (!isOpen || !company) return null;

  const f = company.financials;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
      <div className="bg-white rounded-xl shadow-2xl border border-slate-200 w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center text-lg font-bold font-mono tracking-wider text-white">
              {company.ticker}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-base text-white">{company.brandName}</h3>
                <span className="text-[11px] px-2 py-0.5 rounded bg-white/10 text-slate-300 font-mono">
                  {company.strategicCluster}
                </span>
                {company.services.zeroFeeModel && (
                  <span className="text-[11px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-medium">
                    Zero-Fee
                  </span>
                )}
              </div>
              <p className="text-xs text-slate-400 truncate max-w-md">{company.legalName}</p>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <a
              href={company.websiteUrl}
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs bg-white/10 hover:bg-white/20 text-white px-3 py-1.5 rounded-lg border border-white/20 transition-colors font-mono"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{company.websiteUrl.replace('https://', '')}</span>
            </a>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-slate-800 text-sm">
          {/* Executive Overview Badge */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col md:flex-row md:items-center justify-between gap-3">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Định vị & Lợi thế cốt lõi</span>
              <p className="text-sm font-bold text-slate-900 mt-0.5">{company.keyDifferentiator}</p>
              <p className="text-xs text-slate-600 mt-1">{company.strategicNote}</p>
            </div>
            <div className="shrink-0 flex items-center gap-2">
              <SourceBadge sourceKey="TIER1_FINANCIAL" detail={`Dòng CSV: ${company.tier1RowIndex}`} onOpenSourceModal={onOpenSourceModal} />
            </div>
          </div>

          {/* Key Financial Matrix Grid (Tier 1 Source of Truth) */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                <h4 className="font-bold text-slate-900 text-sm">
                  Chỉ Tiêu Tài Chính 6T/2026 so với Kỳ So Sánh (Dữ liệu nội bộ TIER 1)
                </h4>
              </div>
              <span className="text-xs text-slate-500 font-mono">Đơn vị: Tỷ VND</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 text-xs">
              <div className="p-3 bg-white rounded-lg border border-slate-200">
                <span className="text-slate-500 block text-[11px]">Vốn điều lệ (30/06/26)</span>
                <span className="text-sm font-bold text-slate-900 font-mono mt-0.5 block">
                  {f.charterCapital2026H1_B.toLocaleString('vi-VN')} tỷ
                </span>
                <span className="text-[10px] text-slate-500">
                  31/12/25: {f.charterCapital2025Dec_B.toLocaleString('vi-VN')} tỷ ({f.charterCapitalGrowthPct >= 0 ? `+${f.charterCapitalGrowthPct}%` : `${f.charterCapitalGrowthPct}%`})
                </span>
              </div>

              <div className="p-3 bg-white rounded-lg border border-slate-200">
                <span className="text-slate-500 block text-[11px]">Tổng tài sản (30/06/26)</span>
                <span className="text-sm font-bold text-slate-900 font-mono mt-0.5 block">
                  {f.totalAssets2026H1_B.toLocaleString('vi-VN')} tỷ
                </span>
                <span className="text-[10px] text-slate-500">
                  31/12/25: {f.totalAssets2025Dec_B.toLocaleString('vi-VN')} tỷ ({f.totalAssetsGrowthPct >= 0 ? `+${f.totalAssetsGrowthPct}%` : `${f.totalAssetsGrowthPct}%`})
                </span>
              </div>

              <div className="p-3 bg-white rounded-lg border border-slate-200">
                <span className="text-slate-500 block text-[11px]">Vốn chủ sở hữu (30/06/26)</span>
                <span className="text-sm font-bold text-slate-900 font-mono mt-0.5 block">
                  {f.equity2026H1_B.toLocaleString('vi-VN')} tỷ
                </span>
                <span className="text-[10px] text-slate-500">
                  31/12/25: {f.equity2025Dec_B.toLocaleString('vi-VN')} tỷ
                </span>
              </div>

              <div className="p-3 bg-white rounded-lg border border-slate-200">
                <span className="text-slate-500 block text-[11px]">Doanh thu HĐ (6T/2026)</span>
                <span className="text-sm font-bold text-blue-700 font-mono mt-0.5 block">
                  {f.operatingRevenue2026H1_B.toLocaleString('vi-VN')} tỷ
                </span>
                <span className="text-[10px] text-emerald-600 font-medium">
                  6T/25: {f.operatingRevenue2025H1_B.toLocaleString('vi-VN')} tỷ ({f.operatingRevenueGrowthPct >= 0 ? `+${f.operatingRevenueGrowthPct}%` : `${f.operatingRevenueGrowthPct}%`})
                </span>
              </div>

              <div className="p-3 bg-white rounded-lg border border-slate-200">
                <span className="text-slate-500 block text-[11px]">LNTT (6T/2026)</span>
                <span className="text-sm font-bold text-emerald-600 font-mono mt-0.5 block">
                  {f.profitBeforeTax2026H1_B.toLocaleString('vi-VN')} tỷ
                </span>
                <span className="text-[10px] text-slate-500">
                  6T/25: {f.profitBeforeTax2025H1_B.toLocaleString('vi-VN')} tỷ ({f.profitBeforeTaxGrowthPct >= 0 ? `+${f.profitBeforeTaxGrowthPct}%` : `${f.profitBeforeTaxGrowthPct}%`})
                </span>
              </div>

              <div className="p-3 bg-white rounded-lg border border-slate-200">
                <span className="text-slate-500 block text-[11px]">LNST (6T/2026)</span>
                <span className="text-sm font-bold text-emerald-700 font-mono mt-0.5 block">
                  {f.profitAfterTax2026H1_B !== null ? `${f.profitAfterTax2026H1_B.toLocaleString('vi-VN')} tỷ` : 'Chưa có'}
                </span>
                <span className="text-[10px] text-slate-500">
                  6T/25: {f.profitAfterTax2025H1_B !== null ? `${f.profitAfterTax2025H1_B.toLocaleString('vi-VN')} tỷ` : 'Chưa có'}
                </span>
              </div>

              <div className="p-3 bg-white rounded-lg border border-slate-200">
                <span className="text-slate-500 block text-[11px]">DT Tư vấn tài chính</span>
                <span className="text-sm font-bold text-purple-700 font-mono mt-0.5 block">
                  {f.financialConsultingRevenue2026H1_B !== null ? `${f.financialConsultingRevenue2026H1_B.toLocaleString('vi-VN')} tỷ` : 'Chưa có'}
                </span>
                <span className="text-[10px] text-slate-500">
                  6T/25: {f.financialConsultingRevenue2025H1_B !== null ? `${f.financialConsultingRevenue2025H1_B.toLocaleString('vi-VN')} tỷ` : 'Chưa có'}
                </span>
              </div>

              <div className="p-3 bg-white rounded-lg border border-slate-200">
                <span className="text-slate-500 block text-[11px]">DT Tư vấn đầu tư CK</span>
                <span className="text-sm font-bold text-amber-700 font-mono mt-0.5 block">
                  {f.advisoryInvestmentRevenue2026H1_B !== null ? `${f.advisoryInvestmentRevenue2026H1_B.toLocaleString('vi-VN')} tỷ` : 'Chưa có'}
                </span>
                <span className="text-[10px] text-slate-500">
                  6T/25: {f.advisoryInvestmentRevenue2025H1_B !== null ? `${f.advisoryInvestmentRevenue2025H1_B.toLocaleString('vi-VN')} tỷ` : 'Chưa có'}
                </span>
              </div>
            </div>
          </div>

          {/* Service Capabilities Benchmark (Tier 2 & Verified Search) */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-emerald-600 rounded-full"></span>
                <h4 className="font-bold text-slate-900 text-sm">
                  Đánh Giá Năng Lực Dịch Vụ Khách Hàng (TIER 2 Service Benchmark)
                </h4>
              </div>
              <SourceBadge sourceKey="TIER2_WEBSITE" onOpenSourceModal={onOpenSourceModal} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
              <div className="p-3.5 rounded-lg border border-slate-200 bg-white">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-bold text-slate-800 flex items-center gap-1.5">
                    {company.services.macroResearch ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Minus className="w-3.5 h-3.5 text-slate-400" />}
                    Báo cáo Phân tích Vĩ mô & Thị trường
                  </span>
                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${company.services.macroResearch ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-100 text-slate-500'}`}>
                    {company.services.macroResearch ? 'Có cung cấp' : 'Không'}
                  </span>
                </div>
                <p className="text-slate-600 leading-relaxed text-[11px]">{company.services.macroResearchNote}</p>
              </div>

              <div className="p-3.5 rounded-lg border border-slate-200 bg-white">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-bold text-slate-800 flex items-center gap-1.5">
                    {company.services.industryAnalysis ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Minus className="w-3.5 h-3.5 text-slate-400" />}
                    Phân tích Ngành & Doanh nghiệp
                  </span>
                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${company.services.industryAnalysis ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-100 text-slate-500'}`}>
                    {company.services.industryAnalysis ? 'Chuyên sâu' : 'Không'}
                  </span>
                </div>
                <p className="text-slate-600 leading-relaxed text-[11px]">{company.services.industryAnalysisNote}</p>
              </div>

              <div className="p-3.5 rounded-lg border border-slate-200 bg-white">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-bold text-slate-800 flex items-center gap-1.5">
                    {company.services.stockRecommendations ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Minus className="w-3.5 h-3.5 text-slate-400" />}
                    Khuyến nghị Cổ phiếu & Danh mục mẫu
                  </span>
                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${company.services.stockRecommendations ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-100 text-slate-500'}`}>
                    {company.services.stockRecommendations ? 'Đa kênh' : 'Không'}
                  </span>
                </div>
                <p className="text-slate-600 leading-relaxed text-[11px]">{company.services.stockRecommendationsNote}</p>
              </div>

              <div className="p-3.5 rounded-lg border border-slate-200 bg-white">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-bold text-slate-800 flex items-center gap-1.5">
                    {company.services.investmentBanking ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Minus className="w-3.5 h-3.5 text-slate-400" />}
                    Ngân hàng Đầu tư (IB - ECM, DCM, M&A)
                  </span>
                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${company.services.investmentBanking ? 'bg-indigo-100 text-indigo-800' : 'bg-slate-100 text-slate-500'}`}>
                    {company.services.investmentBanking ? 'Mạnh' : 'Không'}
                  </span>
                </div>
                <p className="text-slate-600 leading-relaxed text-[11px]">{company.services.ibCapabilitiesNote}</p>
              </div>
            </div>
          </div>

          {/* Service Fees & Pricing Policy (data_brocoli - other_sources) */}
          {(() => {
            const fee = company.feeStructure || {
              selfTradingFeePct: 0.10,
              selfTradingFeeDesc: '0.10% - 0.15%',
              brokerTradingFeeDesc: '0.15% - 0.20%',
              marginRateMinPct: 8.0,
              marginRateStandardPct: 12.0,
              derivativesFeeDesc: '1.000đ/HĐ',
              advanceWithdrawalFeeDesc: '0.033%/ngày (~12%/năm)',
              feePolicyType: 'Standard Full-Service',
              keyFeeHighlight: 'Dịch vụ tiêu chuẩn theo quy định.',
              sourceRef: 'data_brocoli'
            };
            return (
              <div className="p-4 rounded-lg bg-slate-50 border border-slate-200">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-emerald-600 rounded-full"></span>
                    <h4 className="font-bold text-slate-900 text-xs sm:text-sm">
                      Biểu Phí Dịch Vụ & Lãi Suất Margin
                    </h4>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                    {fee.feePolicyType}
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                  <div className="p-2.5 bg-white rounded border border-slate-200">
                    <span className="text-slate-500 block text-[10px]">Phí Tự Giao Dịch Online</span>
                    <span className="font-bold font-mono text-slate-900">
                      {fee.selfTradingFeePct === 0 ? '0.00% (Zero-Fee)' : fee.selfTradingFeeDesc}
                    </span>
                  </div>
                  <div className="p-2.5 bg-white rounded border border-slate-200">
                    <span className="text-slate-500 block text-[10px]">Phí Có Môi Giới Tư Vấn</span>
                    <span className="font-bold font-mono text-slate-900">{fee.brokerTradingFeeDesc}</span>
                  </div>
                  <div className="p-2.5 bg-white rounded border border-slate-200">
                    <span className="text-slate-500 block text-[10px]">Lãi Suất Margin</span>
                    <span className="font-bold font-mono text-emerald-700">
                      {fee.marginRateMinPct}% - {fee.marginRateStandardPct}%/năm
                    </span>
                  </div>
                  <div className="p-2.5 bg-white rounded border border-slate-200">
                    <span className="text-slate-500 block text-[10px]">Phí Phái Sinh</span>
                    <span className="font-bold font-mono text-slate-900">{fee.derivativesFeeDesc}</span>
                  </div>
                </div>

                <div className="mt-2.5 text-[11px] text-slate-600 bg-white p-2 rounded border border-slate-200 flex items-center justify-between">
                  <span><b>Điểm nổi bật:</b> {fee.keyFeeHighlight}</span>
                  <span className="text-slate-400 font-mono text-[10px] whitespace-nowrap ml-2">Ứng trước: {fee.advanceWithdrawalFeeDesc}</span>
                </div>
              </div>
            );
          })()}

          {/* App Experience & Tax Matrix (Tier 3) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* App UX */}
            <div className="p-4 rounded-lg bg-slate-50 border border-slate-200">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">
                    Nền Tảng Giao Dịch & Trải Nghiệm Số
                  </h4>
                </div>
                <div className="flex items-center gap-1 bg-amber-50 border border-amber-200 text-amber-900 px-2 py-0.5 rounded font-mono font-bold text-xs">
                  <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                  <span>{company.appUX.starRating.toFixed(1)} / 5.0</span>
                </div>
              </div>

              <div className="space-y-2 text-xs">
                <div>
                  <span className="font-semibold text-slate-700">Tên ứng dụng:</span>{' '}
                  <span className="font-bold text-slate-900">{company.appUX.appName}</span>
                </div>
                <p className="text-slate-600 italic">"{company.appUX.ratingCountDesc}"</p>

                <div className="pt-2">
                  <span className="font-semibold text-slate-800 block mb-1">Ưu điểm nổi bật:</span>
                  <ul className="list-disc list-inside space-y-0.5 text-slate-700">
                    {company.appUX.strengths.map((s, i) => (
                      <li key={i}>{s}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Tax Rank */}
            <div className="p-4 rounded-lg bg-slate-50 border border-slate-200">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-amber-600 rounded-full"></span>
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">
                    Đóng Góp Ngân Sách Nhà Nước
                  </h4>
                </div>
                <SourceBadge sourceKey="TIER3_TAX" onOpenSourceModal={onOpenSourceModal} />
              </div>

              {company.taxData ? (
                <div className="space-y-2 text-xs">
                  <div className="flex items-center justify-between p-2 rounded bg-white border border-slate-200">
                    <span className="text-slate-600">Vị trí xếp hạng nộp thuế (2025):</span>
                    <span className="font-bold text-slate-900 px-2 py-0.5 rounded bg-amber-100 text-amber-800 font-mono">
                      #{company.taxData.sttRank2026} Toàn Quốc
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-2 text-center pt-1">
                    <div className="p-2 bg-white rounded border border-slate-200">
                      <span className="text-slate-400 block text-[10px]">Năm 2023</span>
                      <span className="font-bold font-mono text-slate-800">{company.taxData.tax2023_B} tỷ</span>
                    </div>
                    <div className="p-2 bg-white rounded border border-slate-200">
                      <span className="text-slate-400 block text-[10px]">Năm 2024</span>
                      <span className="font-bold font-mono text-slate-800">{company.taxData.tax2024_B} tỷ</span>
                    </div>
                    <div className="p-2 bg-white rounded border border-slate-200">
                      <span className="text-slate-400 block text-[10px]">Năm 2025</span>
                      <span className="font-bold font-mono text-emerald-600">{company.taxData.tax2025_B} tỷ</span>
                    </div>
                  </div>
                  <div className="text-[11px] text-slate-500 text-right pt-1">
                    Tăng trưởng nộp thuế 2023-2025: <span className="font-bold text-slate-800 font-mono">+{company.taxData.taxGrowth2023_2025_Pct}%</span>
                  </div>
                </div>
              ) : (
                <div className="p-4 text-center text-slate-500 text-xs bg-white rounded border border-slate-200">
                  Không nằm trong danh sách Top 15 nộp ngân sách lớn nhất công bố trên Báo Chính Phủ.
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 border-t border-slate-200 bg-slate-50 flex items-center justify-between">
          <span className="text-xs text-slate-500 font-mono">ID: {company.id} • Nguồn: Dữ liệu nội bộ</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-lg text-xs transition-colors cursor-pointer"
          >
            Đóng hồ sơ
          </button>
        </div>
      </div>
    </div>
  );
};
