import React, { useState } from 'react';
import { Compass, Check, Minus, ExternalLink, ShieldCheck, Filter, Globe, Star, Sparkles, Building } from 'lucide-react';
import { COMPANIES_DATA } from '../data/securitiesData';
import { SourceBadge } from './SourceBadge';
import { CompanyMaster } from '../types';

interface ServiceBenchmarkSectionProps {
  onOpenSourceModal: (key: string) => void;
  onSelectCompany: (company: CompanyMaster) => void;
}

export const ServiceBenchmarkSection: React.FC<ServiceBenchmarkSectionProps> = ({
  onOpenSourceModal,
  onSelectCompany
}) => {
  const [activeTab, setActiveTab] = useState<string>('ALL');

  const keyCompetitorIds = ['TCBS', 'VPS', 'SSI', 'HSC'];
  const keyCompetitors = COMPANIES_DATA.filter((c) => keyCompetitorIds.includes(c.id));

  const filteredCompanies = COMPANIES_DATA.filter((c) => {
    if (activeTab === 'ALL') return true;
    if (activeTab === 'IB_LEADERS') return Boolean(c.services.investmentBanking);
    if (activeTab === 'MACRO_LEADERS') return Boolean(c.services.macroResearch);
    if (activeTab === 'ZERO_FEE') return Boolean(c.services.zeroFeeModel);
    return true;
  });

  return (
    <section id="service-benchmark" className="scroll-mt-24 space-y-6">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 pb-4 border-b border-slate-200">
        <div>
          <div className="flex items-center gap-2 text-slate-500 font-bold text-xs uppercase tracking-wider mb-1">
            <span className="w-2 h-2 bg-emerald-600 rounded-full"></span>
            <span>Phần 5.4 • Đánh Giá Năng Lực Dịch Vụ Khách Hàng</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
            Ma Trận Năng Lực Dịch Vụ & Nghiên Cứu Phân Tích (Service Benchmark)
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm mt-1">
            Khảo sát thực chứng 4 trụ cột dịch vụ tư vấn: Báo cáo vĩ mô, Phân tích ngành/doanh nghiệp, Khuyến nghị cổ phiếu và Ngân hàng Đầu tư (IB).
          </p>
        </div>
        <SourceBadge sourceKey="TIER2_WEBSITE" detail="Website CTCK & Khảo sát độc lập" onOpenSourceModal={onOpenSourceModal} />
      </div>

      {/* 4 Key Pillar Deep Dives (TCBS, VPS, SSI, HSC) */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
            <h3 className="font-bold text-slate-900 text-sm sm:text-base">
              Khảo Sát Chuyên Sâu 4 Đối Thủ Đại Diện (Key Competitors Benchmark)
            </h3>
          </div>
          <span className="text-xs text-slate-500">Nhấp vào thẻ để mở hồ sơ</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {keyCompetitors.map((comp) => {
            const s = comp.services;
            return (
              <div
                key={comp.id}
                onClick={() => onSelectCompany(comp)}
                className="bg-white rounded-xl p-5 border border-slate-200 hover:border-slate-400 shadow-xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between group"
              >
                <div>
                  {/* Card Head */}
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-bold font-mono text-white bg-slate-900 px-2.5 py-0.5 rounded">
                      {comp.ticker}
                    </span>
                    <a
                      href={comp.websiteUrl}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-slate-400 hover:text-slate-900 p-1"
                      title="Mở website chính thức"
                    >
                      <Globe className="w-4 h-4" />
                    </a>
                  </div>

                  <h4 className="font-bold text-slate-900 text-sm group-hover:text-blue-600 transition-colors">
                    {comp.brandName}
                  </h4>
                  <p className="text-[11px] text-slate-500 line-clamp-2 mt-0.5 mb-3">
                    {comp.keyDifferentiator}
                  </p>

                  {/* 4 Pillar Badges */}
                  <div className="space-y-2 text-xs border-t border-slate-100 pt-3">
                    <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                      <div className="flex items-center justify-between mb-0.5">
                        <span className="font-semibold text-slate-800 text-[11px]">Báo cáo Vĩ mô</span>
                        {s.macroResearch ? (
                          <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-1.5 py-0.2 rounded">Có</span>
                        ) : (
                          <span className="text-[10px] text-slate-400">Không</span>
                        )}
                      </div>
                      <p className="text-[11px] text-slate-600 line-clamp-1">{s.macroResearchNote}</p>
                    </div>

                    <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                      <div className="flex items-center justify-between mb-0.5">
                        <span className="font-semibold text-slate-800 text-[11px]">Phân tích Doanh nghiệp</span>
                        {s.industryAnalysis ? (
                          <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-1.5 py-0.2 rounded">Chuyên sâu</span>
                        ) : (
                          <span className="text-[10px] text-slate-400">Không</span>
                        )}
                      </div>
                      <p className="text-[11px] text-slate-600 line-clamp-1">{s.industryAnalysisNote}</p>
                    </div>

                    <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                      <div className="flex items-center justify-between mb-0.5">
                        <span className="font-semibold text-slate-800 text-[11px]">Khuyến nghị Cổ phiếu</span>
                        {s.stockRecommendations ? (
                          <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-1.5 py-0.2 rounded">Đa kênh</span>
                        ) : (
                          <span className="text-[10px] text-slate-400">Không</span>
                        )}
                      </div>
                      <p className="text-[11px] text-slate-600 line-clamp-1">{s.stockRecommendationsNote}</p>
                    </div>

                    <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                      <div className="flex items-center justify-between mb-0.5">
                        <span className="font-semibold text-slate-800 text-[11px]">Tư vấn IB/M&A</span>
                        {s.investmentBanking ? (
                          <span className="text-[10px] font-bold text-indigo-700 bg-indigo-100 px-1.5 py-0.2 rounded">Mạnh</span>
                        ) : (
                          <span className="text-[10px] text-slate-400">Không</span>
                        )}
                      </div>
                      <p className="text-[11px] text-slate-600 line-clamp-1">{s.ibCapabilitiesNote}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-500 text-[11px]">Phí: <b>{s.zeroFeeModel ? 'Zero-Fee' : 'Tiêu chuẩn'}</b></span>
                  <span className="text-slate-900 font-semibold text-[11px] group-hover:translate-x-0.5 transition-transform">Hồ sơ →</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Complete 20-Company Service Capability Grid Matrix */}
      <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-xs space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-slate-900 rounded-full"></span>
              <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                Ma Trận So Sánh Năng Lực Cung Cấp Dịch Vụ Toàn Bộ 20 CTCK
              </h3>
            </div>
            <p className="text-xs text-slate-500 mt-0.5">
              Kiểm tra tính sẵn sàng của hệ thống báo cáo phân tích, nền tảng khuyến nghị và dịch vụ IB
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <div className="flex items-center gap-1 bg-slate-50 p-1 rounded-lg border border-slate-200 text-xs">
              <button
                onClick={() => setActiveTab('ALL')}
                className={`px-2.5 py-1 rounded-md font-medium transition-colors cursor-pointer ${activeTab === 'ALL' ? 'bg-slate-900 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'}`}
              >
                Tất cả (20)
              </button>
              <button
                onClick={() => setActiveTab('IB_LEADERS')}
                className={`px-2.5 py-1 rounded-md font-medium transition-colors cursor-pointer ${activeTab === 'IB_LEADERS' ? 'bg-slate-900 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'}`}
              >
                Có nghiệp vụ IB
              </button>
              <button
                onClick={() => setActiveTab('MACRO_LEADERS')}
                className={`px-2.5 py-1 rounded-md font-medium transition-colors cursor-pointer ${activeTab === 'MACRO_LEADERS' ? 'bg-slate-900 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'}`}
              >
                Vĩ mô mạnh
              </button>
              <button
                onClick={() => setActiveTab('ZERO_FEE')}
                className={`px-2.5 py-1 rounded-md font-medium transition-colors cursor-pointer ${activeTab === 'ZERO_FEE' ? 'bg-slate-900 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'}`}
              >
                Mô hình Zero-Fee
              </button>
            </div>
          </div>
        </div>

        {/* Matrix Table */}
        <div className="overflow-x-auto border border-slate-200 rounded-lg max-h-[450px]">
          <table className="w-full text-left text-xs border-collapse min-w-[900px]">
            <thead className="bg-slate-100 text-slate-800 sticky top-0 z-10 font-bold border-b border-slate-200">
              <tr>
                <th className="p-3 w-12 text-center">STT</th>
                <th className="p-3 w-24">Mã CK</th>
                <th className="p-3">Tên Doanh Nghiệp</th>
                <th className="p-3 text-center">Báo cáo Vĩ mô</th>
                <th className="p-3 text-center">Phân tích Ngành/CP</th>
                <th className="p-3 text-center">Khuyến nghị Đầu tư</th>
                <th className="p-3 text-center">Tư vấn IB & M&A</th>
                <th className="p-3 text-center">Mô hình Phí</th>
                <th className="p-3">Website & Nguồn</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 bg-white">
              {filteredCompanies.map((c, idx) => (
                <tr
                  key={c.id}
                  onClick={() => onSelectCompany(c)}
                  className="hover:bg-slate-50 transition-colors cursor-pointer group"
                >
                  <td className="p-3 text-center text-slate-400 font-mono">{idx + 1}</td>
                  <td className="p-3 font-bold text-slate-900 font-mono">
                    <span className="px-2 py-0.5 bg-slate-100 rounded group-hover:bg-slate-900 group-hover:text-white transition-colors">
                      {c.ticker}
                    </span>
                  </td>
                  <td className="p-3 font-medium text-slate-900">
                    {c.brandName}
                    <span className="block text-[11px] text-slate-500 truncate max-w-xs">{c.strategicCluster}</span>
                  </td>
                  <td className="p-3 text-center">
                    {c.services.macroResearch ? (
                      <span className="inline-flex items-center gap-1 text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded text-[11px]">
                        <Check className="w-3.5 h-3.5" /> Có
                      </span>
                    ) : (
                      <span className="inline-flex items-center text-slate-400">
                        <Minus className="w-3.5 h-3.5" />
                      </span>
                    )}
                  </td>
                  <td className="p-3 text-center">
                    {c.services.industryAnalysis ? (
                      <span className="inline-flex items-center gap-1 text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded text-[11px]">
                        <Check className="w-3.5 h-3.5" /> Chuyên sâu
                      </span>
                    ) : (
                      <span className="inline-flex items-center text-slate-400">
                        <Minus className="w-3.5 h-3.5" />
                      </span>
                    )}
                  </td>
                  <td className="p-3 text-center">
                    {c.services.stockRecommendations ? (
                      <span className="inline-flex items-center gap-1 text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded text-[11px]">
                        <Check className="w-3.5 h-3.5" /> Đa kênh
                      </span>
                    ) : (
                      <span className="inline-flex items-center text-slate-400">
                        <Minus className="w-3.5 h-3.5" />
                      </span>
                    )}
                  </td>
                  <td className="p-3 text-center">
                    {c.services.investmentBanking ? (
                      <span className="inline-flex items-center gap-1 text-indigo-700 font-semibold bg-indigo-50 px-2 py-0.5 rounded text-[11px]">
                        <Check className="w-3.5 h-3.5" /> Mạnh
                      </span>
                    ) : (
                      <span className="inline-flex items-center text-slate-400">
                        <Minus className="w-3.5 h-3.5" />
                      </span>
                    )}
                  </td>
                  <td className="p-3 text-center">
                    {c.services.zeroFeeModel ? (
                      <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
                        Zero-Fee
                      </span>
                    ) : (
                      <span className="text-[11px] font-medium text-slate-500">
                        Tiêu chuẩn
                      </span>
                    )}
                  </td>
                  <td className="p-3" onClick={(e) => e.stopPropagation()}>
                    <a
                      href={c.websiteUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-slate-700 hover:text-blue-600 hover:underline font-mono text-[11px]"
                    >
                      <Globe className="w-3 h-3" />
                      <span>{c.websiteUrl.replace('https://', '')}</span>
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
