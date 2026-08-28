import React, { useState, useMemo } from 'react';
import { BarChart3, TrendingUp, Filter, ArrowUpDown, ShieldCheck, ChevronRight, Eye, Layers, BarChart2 } from 'lucide-react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid, Cell } from 'recharts';
import { COMPANIES_DATA, TOTAL_MARKET_SUMMARY } from '../data/securitiesData';
import { SourceBadge } from './SourceBadge';
import { CompanyMaster } from '../types';

interface QuantitativeSectionProps {
  onOpenSourceModal: (key: string) => void;
  onSelectCompany: (company: CompanyMaster) => void;
}

type MetricKey =
  | 'charterCapital'
  | 'totalAssets'
  | 'equity'
  | 'operatingRevenue'
  | 'profitBeforeTax'
  | 'profitAfterTax'
  | 'financialConsultingRevenue'
  | 'advisoryInvestmentRevenue';

export const QuantitativeSection: React.FC<QuantitativeSectionProps> = ({
  onOpenSourceModal,
  onSelectCompany
}) => {
  const [selectedMetric, setSelectedMetric] = useState<MetricKey>('charterCapital');
  const [sortField, setSortField] = useState<string>('charterCapital2026H1_B');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');
  const [clusterFilter, setClusterFilter] = useState<string>('ALL');

  const metricConfigs: Record<MetricKey, {
    label: string;
    description: string;
    fieldCurrent: keyof typeof COMPANIES_DATA[0]['financials'];
    fieldPrevious: keyof typeof COMPANIES_DATA[0]['financials'];
    labelCurrent: string;
    labelPrevious: string;
    colorCurrent: string;
    colorPrevious: string;
  }> = {
    charterCapital: {
      label: 'Vốn Điều Lệ',
      description: 'So sánh Vốn điều lệ 30/06/2026 vs 31/12/2025',
      fieldCurrent: 'charterCapital2026H1_B',
      fieldPrevious: 'charterCapital2025Dec_B',
      labelCurrent: 'Vốn ĐL (30/06/2026)',
      labelPrevious: 'Vốn ĐL (31/12/2025)',
      colorCurrent: '#2563eb', // blue-600
      colorPrevious: '#94a3b8' // slate-400
    },
    totalAssets: {
      label: 'Tổng Tài Sản',
      description: 'So sánh Tổng tài sản 30/06/2026 vs 31/12/2025',
      fieldCurrent: 'totalAssets2026H1_B',
      fieldPrevious: 'totalAssets2025Dec_B',
      labelCurrent: 'Tổng tài sản (30/06/2026)',
      labelPrevious: 'Tổng tài sản (31/12/2025)',
      colorCurrent: '#4f46e5', // indigo-600
      colorPrevious: '#cbd5e1'
    },
    equity: {
      label: 'Vốn Chủ Sở Hữu',
      description: 'So sánh Vốn chủ sở hữu 30/06/2026 vs 31/12/2025',
      fieldCurrent: 'equity2026H1_B',
      fieldPrevious: 'equity2025Dec_B',
      labelCurrent: 'VCSH (30/06/2026)',
      labelPrevious: 'VCSH (31/12/2025)',
      colorCurrent: '#0284c7', // sky-600
      colorPrevious: '#94a3b8'
    },
    operatingRevenue: {
      label: 'Doanh Thu Hoạt Động',
      description: 'So sánh Doanh thu hoạt động 6T/2026 vs 6T/2025',
      fieldCurrent: 'operatingRevenue2026H1_B',
      fieldPrevious: 'operatingRevenue2025H1_B',
      labelCurrent: 'Doanh thu HĐ (6T/2026)',
      labelPrevious: 'Doanh thu HĐ (6T/2025)',
      colorCurrent: '#059669', // emerald-600
      colorPrevious: '#a7f3d0'
    },
    profitBeforeTax: {
      label: 'Lợi Nhuận Trước Thuế (LNTT)',
      description: 'So sánh LNTT 6T/2026 vs 6T/2025',
      fieldCurrent: 'profitBeforeTax2026H1_B',
      fieldPrevious: 'profitBeforeTax2025H1_B',
      labelCurrent: 'LNTT (6T/2026)',
      labelPrevious: 'LNTT (6T/2025)',
      colorCurrent: '#10b981',
      colorPrevious: '#6ee7b7'
    },
    profitAfterTax: {
      label: 'Lợi Nhuận Sau Thuế (LNST)',
      description: 'So sánh LNST 6T/2026 vs 6T/2025',
      fieldCurrent: 'profitAfterTax2026H1_B',
      fieldPrevious: 'profitAfterTax2025H1_B',
      labelCurrent: 'LNST (6T/2026)',
      labelPrevious: 'LNST (6T/2025)',
      colorCurrent: '#047857',
      colorPrevious: '#a7f3d0'
    },
    financialConsultingRevenue: {
      label: 'DT Tư Vấn Tài Chính',
      description: 'Doanh thu tư vấn tài chính doanh nghiệp 6T/2026 vs 6T/2025',
      fieldCurrent: 'financialConsultingRevenue2026H1_B',
      fieldPrevious: 'financialConsultingRevenue2025H1_B',
      labelCurrent: 'DT Tư vấn TC (6T/2026)',
      labelPrevious: 'DT Tư vấn TC (6T/2025)',
      colorCurrent: '#8b5cf6', // violet-500
      colorPrevious: '#ddd6fe'
    },
    advisoryInvestmentRevenue: {
      label: 'DT Tư Vấn Đầu Tư CK',
      description: 'Doanh thu tư vấn đầu tư chứng khoán 6T/2026 vs 6T/2025',
      fieldCurrent: 'advisoryInvestmentRevenue2026H1_B',
      fieldPrevious: 'advisoryInvestmentRevenue2025H1_B',
      labelCurrent: 'DT Tư vấn ĐT (6T/2026)',
      labelPrevious: 'DT Tư vấn ĐT (6T/2025)',
      colorCurrent: '#d97706', // amber-600
      colorPrevious: '#fde68a'
    }
  };

  const filteredAndSortedData = useMemo(() => {
    let list = [...COMPANIES_DATA];

    if (clusterFilter !== 'ALL') {
      list = list.filter((c) => c.strategicCluster === clusterFilter);
    }

    list.sort((a, b) => {
      let valA = (a.financials as any)[sortField];
      let valB = (b.financials as any)[sortField];

      if (valA === null || valA === undefined) valA = -999999999;
      if (valB === null || valB === undefined) valB = -999999999;

      if (sortOrder === 'asc') {
        return valA > valB ? 1 : -1;
      } else {
        return valA < valB ? 1 : -1;
      }
    });

    return list;
  }, [clusterFilter, sortField, sortOrder]);

  const chartData = useMemo(() => {
    const config = metricConfigs[selectedMetric];
    // Top 10 by current metric
    const sorted = [...COMPANIES_DATA].sort((a, b) => {
      const valA = (a.financials as any)[config.fieldCurrent] ?? 0;
      const valB = (b.financials as any)[config.fieldCurrent] ?? 0;
      return valB - valA;
    });

    return sorted.slice(0, 12).map((c) => ({
      ticker: c.ticker,
      brandName: c.brandName,
      current: (c.financials as any)[config.fieldCurrent] ?? 0,
      previous: (c.financials as any)[config.fieldPrevious] ?? 0
    }));
  }, [selectedMetric]);

  const handleSort = (field: string) => {
    if (sortField === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortOrder('desc');
    }
  };

  const currentConfig = metricConfigs[selectedMetric];

  return (
    <section id="quantitative-comparison" className="scroll-mt-24 space-y-6">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 pb-4 border-b border-slate-200">
        <div>
          <div className="flex items-center gap-2 text-slate-500 font-bold text-xs uppercase tracking-wider mb-1">
            <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
            <span>Phần 5.3 • Đối Soát Dữ Liệu Định Lượng 20 CTCK</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
            So Sánh Định Lượng 20 Công Ty Chứng Khoán (6T/2026 vs 31/12/2025)
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm mt-1">
            Toàn bộ số liệu trích xuất độc quyền từ dữ liệu nội bộ BCTC 6T/2026. Đơn vị chuẩn: <b>Tỷ VND (Billion VND)</b>.
          </p>
        </div>
        <SourceBadge sourceKey="TIER1_FINANCIAL" onOpenSourceModal={onOpenSourceModal} />
      </div>

      {/* Metric Selector Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
        {(Object.keys(metricConfigs) as MetricKey[]).map((key) => {
          const config = metricConfigs[key];
          const isSelected = selectedMetric === key;
          return (
            <button
              key={key}
              onClick={() => {
                setSelectedMetric(key);
                setSortField(config.fieldCurrent as string);
                setSortOrder('desc');
              }}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                isSelected
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {config.label}
            </button>
          );
        })}
      </div>

      {/* Interactive Chart Container */}
      <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
              <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                Biểu Đồ So Sánh: {currentConfig.label} (Top 12 CTCK Dẫn Đầu)
              </h3>
            </div>
            <p className="text-xs text-slate-500 mt-0.5">{currentConfig.description}</p>
          </div>
          <div className="flex items-center gap-3 text-xs font-medium">
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-xs" style={{ backgroundColor: currentConfig.colorCurrent }} />
              <span className="text-slate-700">{currentConfig.labelCurrent}</span>
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-xs" style={{ backgroundColor: currentConfig.colorPrevious }} />
              <span className="text-slate-500">{currentConfig.labelPrevious}</span>
            </span>
          </div>
        </div>

        <div className="h-80 w-full pt-2">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData} margin={{ top: 10, right: 10, left: 10, bottom: 25 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
              <XAxis
                dataKey="ticker"
                tickLine={false}
                axisLine={{ stroke: '#cbd5e1' }}
                tick={{ fill: '#334155', fontSize: 11, fontWeight: 600 }}
              />
              <YAxis
                tickLine={false}
                axisLine={{ stroke: '#cbd5e1' }}
                tick={{ fill: '#64748b', fontSize: 11 }}
                tickFormatter={(v) => `${v.toLocaleString('vi-VN')}`}
                unit=" tỷ"
              />
              <Tooltip
                content={({ active, payload, label }) => {
                  if (active && payload && payload.length) {
                    const currentVal = payload[0].value as number;
                    const prevVal = payload[1]?.value as number;
                    const diff = prevVal ? ((currentVal - prevVal) / prevVal) * 100 : null;
                    return (
                      <div className="bg-slate-900 text-white p-3 rounded-lg shadow-lg border border-slate-700 text-xs space-y-1 font-sans">
                        <div className="font-bold text-sm text-blue-400">{label} - {payload[0].payload.brandName}</div>
                        <div className="flex justify-between gap-4 text-slate-200">
                          <span>{currentConfig.labelCurrent}:</span>
                          <span className="font-bold font-mono text-emerald-400">{currentVal.toLocaleString('vi-VN')} tỷ</span>
                        </div>
                        <div className="flex justify-between gap-4 text-slate-400">
                          <span>{currentConfig.labelPrevious}:</span>
                          <span className="font-mono">{prevVal ? `${prevVal.toLocaleString('vi-VN')} tỷ` : 'Chưa có'}</span>
                        </div>
                        {diff !== null && (
                          <div className="pt-1 mt-1 border-t border-slate-800 flex justify-between gap-4 text-[11px]">
                            <span>Biến động (%):</span>
                            <span className={`font-bold font-mono ${diff >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                              {diff >= 0 ? `+${diff.toFixed(2)}%` : `${diff.toFixed(2)}%`}
                            </span>
                          </div>
                        )}
                        <div className="text-[10px] text-slate-400 pt-1 italic">
                          Nguồn: Dữ liệu nội bộ (BCTC 6T/2026)
                        </div>
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <Bar dataKey="current" name={currentConfig.labelCurrent} fill={currentConfig.colorCurrent} radius={[4, 4, 0, 0]} />
              <Bar dataKey="previous" name={currentConfig.labelPrevious} fill={currentConfig.colorPrevious} radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="text-right">
          <SourceBadge sourceKey="TIER1_FINANCIAL" detail="Biểu đồ Top 12" onOpenSourceModal={onOpenSourceModal} />
        </div>
      </div>

      {/* Comprehensive Quantitative Master Table */}
      <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-xs space-y-4">
        {/* Table Filters and Controls */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-slate-900 rounded-full"></span>
              <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                Bảng Số Liệu Chi Tiết 20 Công Ty Chứng Khoán (Đầy Đủ 100%)
              </h3>
            </div>
            <p className="text-xs text-slate-500 mt-0.5">
              Nhấp vào tiêu đề cột để sắp xếp • Nhấp vào từng công ty để mở hồ sơ phân tích 360°
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {/* Cluster Filter */}
            <div className="flex items-center gap-1.5 text-xs bg-slate-50 p-1.5 rounded-lg border border-slate-200">
              <Filter className="w-3.5 h-3.5 text-slate-500 ml-1" />
              <select
                value={clusterFilter}
                onChange={(e) => setClusterFilter(e.target.value)}
                className="bg-transparent text-slate-700 font-medium focus:outline-none pr-2 cursor-pointer"
              >
                <option value="ALL">Tất cả nhóm (20 CTCK)</option>
                <option value="Top Big-4 Balance Sheet">Top Big-4 Balance Sheet</option>
                <option value="Bank-backed Powerhouse">Bank-backed Powerhouse</option>
                <option value="Retail & Digital Disruptor">Retail & Digital Disruptor</option>
                <option value="Institutional Specialist">Institutional Specialist</option>
                <option value="Mid-Tier Boutique">Mid-Tier Boutique</option>
              </select>
            </div>
          </div>
        </div>

        {/* The Table */}
        <div className="overflow-x-auto border border-slate-200 rounded-lg max-h-[500px]">
          <table className="w-full text-left text-xs border-collapse min-w-[1100px]">
            <thead className="bg-slate-100 text-slate-800 sticky top-0 z-10 font-bold border-b border-slate-200 select-none">
              <tr>
                <th className="p-3 w-12 text-center">STT</th>
                <th
                  onClick={() => handleSort('ticker')}
                  className="p-3 cursor-pointer hover:bg-slate-200 transition-colors"
                >
                  <div className="flex items-center gap-1">
                    <span>Mã CK</span>
                    <ArrowUpDown className="w-3 h-3 text-slate-400" />
                  </div>
                </th>
                <th className="p-3">Tên Công Ty</th>
                <th
                  onClick={() => handleSort('charterCapital2026H1_B')}
                  className="p-3 text-right cursor-pointer hover:bg-slate-200 transition-colors"
                >
                  <div className="flex items-center justify-end gap-1">
                    <span>Vốn ĐL (30/06/26)</span>
                    <ArrowUpDown className="w-3 h-3 text-slate-400" />
                  </div>
                </th>
                <th
                  onClick={() => handleSort('totalAssets2026H1_B')}
                  className="p-3 text-right cursor-pointer hover:bg-slate-200 transition-colors"
                >
                  <div className="flex items-center justify-end gap-1">
                    <span>Tổng Tài Sản</span>
                    <ArrowUpDown className="w-3 h-3 text-slate-400" />
                  </div>
                </th>
                <th
                  onClick={() => handleSort('operatingRevenue2026H1_B')}
                  className="p-3 text-right cursor-pointer hover:bg-slate-200 transition-colors"
                >
                  <div className="flex items-center justify-end gap-1">
                    <span>Doanh Thu HĐ</span>
                    <ArrowUpDown className="w-3 h-3 text-slate-400" />
                  </div>
                </th>
                <th
                  onClick={() => handleSort('profitBeforeTax2026H1_B')}
                  className="p-3 text-right cursor-pointer hover:bg-slate-200 transition-colors"
                >
                  <div className="flex items-center justify-end gap-1">
                    <span>LNTT (6T/2026)</span>
                    <ArrowUpDown className="w-3 h-3 text-slate-400" />
                  </div>
                </th>
                <th
                  onClick={() => handleSort('profitAfterTax2026H1_B')}
                  className="p-3 text-right cursor-pointer hover:bg-slate-200 transition-colors"
                >
                  <div className="flex items-center justify-end gap-1">
                    <span>LNST (6T/2026)</span>
                    <ArrowUpDown className="w-3 h-3 text-slate-400" />
                  </div>
                </th>
                <th
                  onClick={() => handleSort('financialConsultingRevenue2026H1_B')}
                  className="p-3 text-right cursor-pointer hover:bg-slate-200 transition-colors"
                >
                  <div className="flex items-center justify-end gap-1">
                    <span>DT Tư Vấn TC</span>
                    <ArrowUpDown className="w-3 h-3 text-slate-400" />
                  </div>
                </th>
                <th
                  onClick={() => handleSort('advisoryInvestmentRevenue2026H1_B')}
                  className="p-3 text-right cursor-pointer hover:bg-slate-200 transition-colors"
                >
                  <div className="flex items-center justify-end gap-1">
                    <span>DT Tư Vấn ĐT</span>
                    <ArrowUpDown className="w-3 h-3 text-slate-400" />
                  </div>
                </th>
                <th className="p-3 text-center">Hành động</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 bg-white">
              {filteredAndSortedData.map((company, index) => {
                const f = company.financials;
                return (
                  <tr
                    key={company.id}
                    onClick={() => onSelectCompany(company)}
                    className="hover:bg-slate-50 transition-colors cursor-pointer group"
                  >
                    <td className="p-3 text-center text-slate-400 font-mono">{index + 1}</td>
                    <td className="p-3 font-bold text-slate-900 font-mono text-sm">
                      <span className="px-2 py-0.5 bg-slate-100 rounded group-hover:bg-slate-900 group-hover:text-white transition-colors">
                        {company.ticker}
                      </span>
                    </td>
                    <td className="p-3">
                      <div className="font-semibold text-slate-900">{company.brandName}</div>
                      <div className="text-[11px] text-slate-500 truncate max-w-xs">{company.legalName}</div>
                    </td>
                    <td className="p-3 text-right font-mono font-semibold text-slate-800">
                      {f.charterCapital2026H1_B.toLocaleString('vi-VN')} tỷ
                      <div className="text-[10px] text-slate-400">
                        {f.charterCapitalGrowthPct >= 0 ? `+${f.charterCapitalGrowthPct}%` : `${f.charterCapitalGrowthPct}%`}
                      </div>
                    </td>
                    <td className="p-3 text-right font-mono font-semibold text-slate-800">
                      {f.totalAssets2026H1_B.toLocaleString('vi-VN')} tỷ
                      <div className="text-[10px] text-slate-400">
                        {f.totalAssetsGrowthPct >= 0 ? `+${f.totalAssetsGrowthPct}%` : `${f.totalAssetsGrowthPct}%`}
                      </div>
                    </td>
                    <td className="p-3 text-right font-mono font-semibold text-blue-700">
                      {f.operatingRevenue2026H1_B.toLocaleString('vi-VN')} tỷ
                      <div className="text-[10px] text-emerald-600 font-medium">
                        {f.operatingRevenueGrowthPct >= 0 ? `+${f.operatingRevenueGrowthPct}%` : `${f.operatingRevenueGrowthPct}%`}
                      </div>
                    </td>
                    <td className="p-3 text-right font-mono font-bold text-emerald-600">
                      {f.profitBeforeTax2026H1_B.toLocaleString('vi-VN')} tỷ
                    </td>
                    <td className="p-3 text-right font-mono font-bold text-emerald-700">
                      {f.profitAfterTax2026H1_B !== null ? (
                        `${f.profitAfterTax2026H1_B.toLocaleString('vi-VN')} tỷ`
                      ) : (
                        <span className="text-[11px] font-normal text-slate-400 italic">Dữ liệu chưa được cung cấp</span>
                      )}
                    </td>
                    <td className="p-3 text-right font-mono font-semibold text-purple-700">
                      {f.financialConsultingRevenue2026H1_B !== null ? (
                        `${f.financialConsultingRevenue2026H1_B.toLocaleString('vi-VN')} tỷ`
                      ) : (
                        <span className="text-[11px] font-normal text-slate-400 italic">Dữ liệu chưa được cung cấp</span>
                      )}
                    </td>
                    <td className="p-3 text-right font-mono font-semibold text-amber-700">
                      {f.advisoryInvestmentRevenue2026H1_B !== null ? (
                        `${f.advisoryInvestmentRevenue2026H1_B.toLocaleString('vi-VN')} tỷ`
                      ) : (
                        <span className="text-[11px] font-normal text-slate-400 italic">Dữ liệu chưa được cung cấp</span>
                      )}
                    </td>
                    <td className="p-3 text-center">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelectCompany(company);
                        }}
                        className="px-2.5 py-1 bg-slate-100 hover:bg-slate-900 hover:text-white rounded text-[11px] font-semibold text-slate-700 transition-colors"
                      >
                        Hồ sơ
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Total Market Aggregates Bento Cards */}
        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
          <div className="p-3 bg-white rounded-lg border border-slate-200/80 shadow-2xs">
            <span className="text-slate-500 block uppercase font-bold text-[10px]">Tổng Vốn ĐL (20 CTCK)</span>
            <span className="text-sm sm:text-base font-bold text-slate-900 font-mono">
              {TOTAL_MARKET_SUMMARY.totalCharterCapital2026H1_B.toLocaleString('vi-VN')} tỷ VND
            </span>
          </div>
          <div className="p-3 bg-white rounded-lg border border-slate-200/80 shadow-2xs">
            <span className="text-slate-500 block uppercase font-bold text-[10px]">Tổng Tài Sản (20 CTCK)</span>
            <span className="text-sm sm:text-base font-bold text-slate-900 font-mono">
              {TOTAL_MARKET_SUMMARY.totalAssets2026H1_B.toLocaleString('vi-VN')} tỷ VND
            </span>
          </div>
          <div className="p-3 bg-white rounded-lg border border-slate-200/80 shadow-2xs">
            <span className="text-slate-500 block uppercase font-bold text-[10px]">Tổng Doanh Thu HĐ</span>
            <span className="text-sm sm:text-base font-bold text-blue-700 font-mono">
              {TOTAL_MARKET_SUMMARY.totalOperatingRevenue2026H1_B.toLocaleString('vi-VN')} tỷ VND
            </span>
          </div>
          <div className="p-3 bg-white rounded-lg border border-slate-200/80 shadow-2xs">
            <span className="text-slate-500 block uppercase font-bold text-[10px]">Tổng LNTT (6T/2026)</span>
            <span className="text-sm sm:text-base font-bold text-emerald-600 font-mono">
              {TOTAL_MARKET_SUMMARY.totalProfitBeforeTax2026H1_B.toLocaleString('vi-VN')} tỷ VND
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
