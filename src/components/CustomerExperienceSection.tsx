import React, { useState, useMemo } from 'react';
import { Award, Star, TrendingUp, Smartphone, ShieldCheck, ExternalLink, ThumbsUp, AlertCircle, BarChart2, DollarSign, Percent, Zap, Layers, Sparkles, HelpCircle, CheckCircle2 } from 'lucide-react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid, Cell } from 'recharts';
import { COMPANIES_DATA } from '../data/securitiesData';
import { SourceBadge } from './SourceBadge';
import { CompanyMaster } from '../types';

interface CustomerExperienceSectionProps {
  onOpenSourceModal: (key: string) => void;
  onSelectCompany: (company: CompanyMaster) => void;
}

export const CustomerExperienceSection: React.FC<CustomerExperienceSectionProps> = ({
  onOpenSourceModal,
  onSelectCompany
}) => {
  const [feePolicyFilter, setFeePolicyFilter] = useState<string>('ALL');

  // Top rated apps
  const topRatedApps = useMemo(() => {
    return [...COMPANIES_DATA]
      .sort((a, b) => b.appUX.starRating - a.appUX.starRating)
      .slice(0, 8);
  }, []);

  // Filtered companies for fee table
  const filteredFeeCompanies = useMemo(() => {
    if (feePolicyFilter === 'ALL') return COMPANIES_DATA;
    return COMPANIES_DATA.filter((c) => c.feeStructure?.feePolicyType === feePolicyFilter);
  }, [feePolicyFilter]);

  // Chart data for Margin Rates & Self-Trading Fees (Top 10 Representative Brokers)
  const feeChartData = useMemo(() => {
    const selectedTickers = ['DSE', 'VPX', 'VPS', 'MBS', 'TCBS', 'BSI', 'MAS', 'VND', 'SSI', 'HSC', 'VCI'];
    return COMPANIES_DATA
      .filter((c) => selectedTickers.includes(c.ticker) && c.feeStructure)
      .sort((a, b) => (a.feeStructure?.marginRateMinPct ?? 0) - (b.feeStructure?.marginRateMinPct ?? 0))
      .map((c) => ({
        ticker: c.ticker,
        brandName: c.brandName,
        marginMin: c.feeStructure?.marginRateMinPct ?? 8.0,
        marginStd: c.feeStructure?.marginRateStandardPct ?? 12.0,
        tradingFee: c.feeStructure?.selfTradingFeePct ?? 0.1,
        policyType: c.feeStructure?.feePolicyType ?? 'Standard Full-Service'
      }));
  }, []);

  const feeArchetypes = [
    {
      type: 'Zero-Fee Disruptor',
      color: 'border-emerald-500 bg-emerald-50/50 text-emerald-950',
      badge: 'bg-emerald-600 text-white',
      title: 'Mô Hình Zero-Fee Tiên Phong',
      examples: 'TCBS, DNSE, VPBankS',
      feeRange: '0.00% (Miễn phí trọn đời)',
      marginRate: '5.99% - 11.5%/năm',
      desc: 'Cắt giảm tối đa chi phí hoa hồng môi giới truyền thống bằng tự động hóa và AI, thu hút tệp nhà đầu tư cá nhân F0 quy mô lớn, bù đắp doanh thu từ cho vay Margin và phân phối sản phẩm tài chính (iBond, Chứng chỉ quỹ).'
    },
    {
      type: 'Tiered / Low-Fee',
      color: 'border-blue-500 bg-blue-50/50 text-blue-950',
      badge: 'bg-blue-600 text-white',
      title: 'Biểu Phí Thấp & Bậc Thang',
      examples: 'MBS, FPTS, BSC, VIX, Mirae Asset, LPBankS',
      feeRange: '0.08% - 0.12%',
      marginRate: '7.5% - 12.0%/năm',
      desc: 'Áp dụng biểu phí tự giao dịch online cạnh tranh, giảm lũy tiến theo giá trị giao dịch trong tháng; tận dụng room tín dụng lớn và nguồn vốn rẻ từ đối tác/ngân hàng mẹ.'
    },
    {
      type: 'Standard Full-Service',
      color: 'border-slate-400 bg-slate-50 text-slate-900',
      badge: 'bg-slate-800 text-white',
      title: 'Mô Hình Tư Vấn Tiêu Chuẩn',
      examples: 'VPS, VNDirect, KIS, ACBS, SHS, HDBS',
      feeRange: '0.10% - 0.20%',
      marginRate: '6.8% - 12.8%/năm',
      desc: 'Cân bằng giữa nền tảng công nghệ số và lực lượng môi giới tư vấn 1-1 chuyên sâu; thường xuyên triển khai các gói ưu đãi 0.00% trong 6 tháng đầu cho tài khoản mở mới.'
    },
    {
      type: 'Institutional Premium',
      color: 'border-purple-500 bg-purple-50/50 text-purple-950',
      badge: 'bg-purple-700 text-white',
      title: 'Phân Khúc Định Chế & Cao Cấp',
      examples: 'SSI, HSC, Vietcap, VCBS',
      feeRange: '0.10% - 0.25%',
      marginRate: '8.5% - 12.8%/năm',
      desc: 'Định vị phục vụ khách hàng tổ chức, quỹ đầu tư nước ngoài và cá nhân tài sản lớn (HNWI); cung cấp hệ thống báo cáo phân tích vĩ mô/doanh nghiệp tiêu chuẩn cao và room Margin lớn.'
    }
  ];

  return (
    <section id="customer-experience" className="scroll-mt-24 space-y-6">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 pb-4 border-b border-slate-200">
        <div>
          <div className="flex items-center gap-2 text-slate-500 font-bold text-xs uppercase tracking-wider mb-1">
            <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
            <span>Phần 5.5 • Đánh Giá Trải Nghiệm Khách Hàng & So Sánh Biểu Phí Dịch Vụ</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
            Trải Nghiệm Khách Hàng, Đánh Giá App & Ma Trận Biểu Phí 20 CTCK
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm mt-1">
            Tổng hợp khảo sát thực tế trải nghiệm nền tảng số từ App Store/Google Play và đối chiếu chi tiết biểu phí giao dịch, lãi suất Margin công bố chính thức của 20 CTCK.
          </p>
        </div>
        <SourceBadge sourceKey="TIER3_UX" detail="Khảo sát biểu phí & trải nghiệm" onOpenSourceModal={onOpenSourceModal} />
      </div>

      {/* Part A: App Store UX & Platform Ratings */}
      <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
              <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                Bảng Xếp Hạng Trải Nghiệm Ứng Dụng Di Động (Top Mobile Trading Apps)
              </h3>
            </div>
            <p className="text-xs text-slate-500 mt-0.5">Dữ liệu tổng hợp từ App Store / Google Play và khảo sát cộng đồng nhà đầu tư</p>
          </div>
          <span className="text-xs text-slate-500">Nhấp vào thẻ để mở hồ sơ phân tích 360°</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          {topRatedApps.map((comp) => {
            const ux = comp.appUX;
            return (
              <div
                key={comp.id}
                onClick={() => onSelectCompany(comp)}
                className="p-4 rounded-xl border border-slate-200 bg-white hover:border-slate-400 hover:shadow-md transition-all cursor-pointer flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-xs font-mono px-2 py-0.5 rounded bg-slate-100 group-hover:bg-slate-900 group-hover:text-white transition-colors">
                      {comp.ticker}
                    </span>
                    <div className="flex items-center gap-1 bg-amber-50 border border-amber-200 text-amber-900 px-2 py-0.5 rounded text-xs font-bold font-mono">
                      <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                      <span>{ux.starRating.toFixed(1)}</span>
                    </div>
                  </div>

                  <h5 className="font-semibold text-slate-900 text-xs truncate">{ux.appName}</h5>
                  <p className="text-[11px] text-slate-500 italic mt-0.5 line-clamp-1">{ux.ratingCountDesc}</p>

                  <div className="mt-3 pt-2.5 border-t border-slate-100 space-y-1">
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">Ưu điểm:</span>
                    <ul className="text-[11px] text-slate-600 space-y-0.5">
                      {ux.strengths.slice(0, 2).map((s, i) => (
                        <li key={i} className="line-clamp-1 flex items-center gap-1">
                          <span className="text-emerald-500 font-bold">•</span> {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[11px]">
                  <span className="text-slate-500 font-medium">{(comp.feeStructure?.selfTradingFeeDesc || '0.10%').split(' ')[0]} phí</span>
                  <span className="text-slate-700 font-semibold group-hover:text-blue-600">Hồ sơ 360° →</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Part B: 4 Fee Policy Archetypes */}
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-emerald-600 rounded-full"></span>
          <h3 className="font-bold text-slate-900 text-sm sm:text-base">
            Phân Hóa 4 Trường Phái Chiến Lược Biểu Phí & Cho Vay Ký Quỹ
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3.5">
          {feeArchetypes.map((arch, idx) => (
            <div key={idx} className={`p-4 rounded-xl border ${arch.color} shadow-xs flex flex-col justify-between space-y-3`}>
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${arch.badge}`}>
                    {arch.type}
                  </span>
                </div>
                <h4 className="font-bold text-sm text-slate-900 mb-1">{arch.title}</h4>
                <p className="text-[11px] text-slate-600 leading-relaxed mb-3">{arch.desc}</p>

                <div className="space-y-1.5 pt-2 border-t border-slate-200/70 text-xs">
                  <div className="flex justify-between">
                    <span className="text-slate-500 text-[11px]">Phí GD Online:</span>
                    <span className="font-bold font-mono text-slate-900">{arch.feeRange}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500 text-[11px]">Lãi suất Margin:</span>
                    <span className="font-bold font-mono text-blue-700">{arch.marginRate}</span>
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-200/70 text-[11px] text-slate-600">
                <span className="font-semibold text-slate-700">Đại diện:</span> {arch.examples}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Part C: Chart Comparison - Margin Interest Rates & Online Trading Fees */}
      <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
              <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                So Sánh Khung Lãi Suất Margin (%/năm) & Phí Tự Giao Dịch Giữa Các CTCK Đại Diện
              </h3>
            </div>
            <p className="text-xs text-slate-500 mt-0.5">
              So sánh lãi suất vay Margin ưu đãi tối thiểu (gói ngắn hạn/F0) và lãi suất tiêu chuẩn áp dụng phổ biến
            </p>
          </div>
          <SourceBadge sourceKey="TIER3_UX" detail="Biểu phí & Khảo sát" onOpenSourceModal={onOpenSourceModal} />
        </div>

        <div className="h-80 w-full pt-2">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={feeChartData} margin={{ top: 10, right: 10, left: 10, bottom: 25 }}>
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
                domain={[0, 15]}
                tickFormatter={(v) => `${v}%`}
              />
              <Tooltip
                content={({ active, payload, label }) => {
                  if (active && payload && payload.length) {
                    const data = payload[0].payload;
                    return (
                      <div className="bg-slate-900 text-white p-3 rounded-lg shadow-lg border border-slate-700 text-xs space-y-1.5 font-sans">
                        <div className="font-bold text-sm text-amber-300">
                          {label} - {data.brandName}
                        </div>
                        <div className="text-[11px] text-slate-300">
                          Nhóm: <span className="text-white font-medium">{data.policyType}</span>
                        </div>
                        <div className="flex justify-between gap-4 text-emerald-400">
                          <span>Margin Ưu đãi Tối thiểu:</span>
                          <span className="font-bold font-mono">{data.marginMin}%/năm</span>
                        </div>
                        <div className="flex justify-between gap-4 text-slate-200">
                          <span>Margin Tiêu chuẩn:</span>
                          <span className="font-bold font-mono">{data.marginStd}%/năm</span>
                        </div>
                        <div className="flex justify-between gap-4 text-blue-300 pt-1 border-t border-slate-800">
                          <span>Phí Tự Giao Dịch:</span>
                          <span className="font-bold font-mono">{data.tradingFee === 0 ? '0.00% (Zero-Fee)' : `${data.tradingFee}%`}</span>
                        </div>
                        <div className="text-[10px] text-slate-400 pt-1 italic">
                          Nguồn: Biểu phí công bố chính thức & Khảo sát thị trường
                        </div>
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <Legend wrapperStyle={{ fontSize: '11px', paddingTop: '10px' }} />
              <Bar dataKey="marginMin" name="Lãi suất Margin Ưu Đãi Tối Thiểu (%/năm)" fill="#10b981" radius={[4, 4, 0, 0]} />
              <Bar dataKey="marginStd" name="Lãi suất Margin Tiêu Chuẩn (%/năm)" fill="#6366f1" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Part D: Complete 20-Company Fee Benchmark Matrix */}
      <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-xs space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-slate-900 rounded-full"></span>
              <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                Bảng Đối Chiếu Chi Tiết Biểu Phí & Chính Sách Dịch Vụ 20 Công Ty Chứng Khoán
              </h3>
            </div>
            <p className="text-xs text-slate-500 mt-0.5">
              So sánh toàn diện phí giao dịch trực tuyến, phí môi giới, khung lãi suất Margin và phí phái sinh
            </p>
          </div>

          {/* Fee Policy Filter Buttons */}
          <div className="flex flex-wrap items-center gap-1 bg-slate-50 p-1 rounded-lg border border-slate-200 text-xs">
            <button
              onClick={() => setFeePolicyFilter('ALL')}
              className={`px-2.5 py-1 rounded-md font-medium transition-colors cursor-pointer ${feePolicyFilter === 'ALL' ? 'bg-slate-900 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'}`}
            >
              Tất cả (20)
            </button>
            <button
              onClick={() => setFeePolicyFilter('Zero-Fee Disruptor')}
              className={`px-2.5 py-1 rounded-md font-medium transition-colors cursor-pointer ${feePolicyFilter === 'Zero-Fee Disruptor' ? 'bg-slate-900 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'}`}
            >
              Zero-Fee (3)
            </button>
            <button
              onClick={() => setFeePolicyFilter('Tiered / Low-Fee')}
              className={`px-2.5 py-1 rounded-md font-medium transition-colors cursor-pointer ${feePolicyFilter === 'Tiered / Low-Fee' ? 'bg-slate-900 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'}`}
            >
              Phí Thấp / Bậc Thang (6)
            </button>
            <button
              onClick={() => setFeePolicyFilter('Standard Full-Service')}
              className={`px-2.5 py-1 rounded-md font-medium transition-colors cursor-pointer ${feePolicyFilter === 'Standard Full-Service' ? 'bg-slate-900 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'}`}
            >
              Tiêu Chuẩn (7)
            </button>
            <button
              onClick={() => setFeePolicyFilter('Institutional Premium')}
              className={`px-2.5 py-1 rounded-md font-medium transition-colors cursor-pointer ${feePolicyFilter === 'Institutional Premium' ? 'bg-slate-900 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'}`}
            >
              Tổ Chức / Premium (4)
            </button>
          </div>
        </div>

        {/* Fee Matrix Table */}
        <div className="overflow-x-auto border border-slate-200 rounded-lg max-h-[500px]">
          <table className="w-full text-left text-xs border-collapse min-w-[1050px]">
            <thead className="bg-slate-100 text-slate-800 sticky top-0 z-10 font-bold border-b border-slate-200">
              <tr>
                <th className="p-3 w-12 text-center">STT</th>
                <th className="p-3 w-20">Mã CK</th>
                <th className="p-3 w-40">Tên Doanh Nghiệp</th>
                <th className="p-3">Phí Tự Giao Dịch (Online)</th>
                <th className="p-3">Phí Môi Giới (Broker)</th>
                <th className="p-3">Lãi Suất Margin (%/năm)</th>
                <th className="p-3">Phí Phái Sinh</th>
                <th className="p-3">Phí Ứng Trước Tiền</th>
                <th className="p-3">Nhóm Mô Hình Phí</th>
                <th className="p-3">Đặc Điểm Nổi Bật</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 bg-white">
              {filteredFeeCompanies.map((comp, idx) => {
                const fee = comp.feeStructure || {
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
                const isZeroFee = fee.selfTradingFeePct === 0;
                return (
                  <tr
                    key={comp.id}
                    onClick={() => onSelectCompany(comp)}
                    className="hover:bg-slate-50 transition-colors cursor-pointer group"
                  >
                    <td className="p-3 text-center font-mono text-slate-400">{idx + 1}</td>
                    <td className="p-3 font-bold font-mono">
                      <span className="px-2 py-0.5 bg-slate-100 rounded text-slate-900 group-hover:bg-slate-900 group-hover:text-white transition-colors">
                        {comp.ticker}
                      </span>
                    </td>
                    <td className="p-3 font-medium text-slate-900">{comp.brandName}</td>
                    <td className="p-3 font-mono">
                      {isZeroFee ? (
                        <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold">
                          0.00% (Zero-Fee)
                        </span>
                      ) : (
                        <span className="text-slate-800 font-semibold">{fee.selfTradingFeeDesc}</span>
                      )}
                    </td>
                    <td className="p-3 text-slate-600 font-mono">{fee.brokerTradingFeeDesc}</td>
                    <td className="p-3 font-mono">
                      <span className="text-emerald-700 font-bold">{fee.marginRateMinPct}%</span>
                      <span className="text-slate-400"> - </span>
                      <span className="text-slate-700 font-medium">{fee.marginRateStandardPct}%</span>
                    </td>
                    <td className="p-3 text-slate-600 font-mono">{fee.derivativesFeeDesc}</td>
                    <td className="p-3 text-slate-500 font-mono text-[11px]">{fee.advanceWithdrawalFeeDesc}</td>
                    <td className="p-3">
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded whitespace-nowrap ${
                        fee.feePolicyType === 'Zero-Fee Disruptor' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' :
                        fee.feePolicyType === 'Tiered / Low-Fee' ? 'bg-blue-50 text-blue-700 border border-blue-200' :
                        fee.feePolicyType === 'Institutional Premium' ? 'bg-purple-50 text-purple-700 border border-purple-200' :
                        'bg-slate-100 text-slate-700 border border-slate-200'
                      }`}>
                        {fee.feePolicyType}
                      </span>
                    </td>
                    <td className="p-3 text-slate-500 text-[11px] max-w-xs truncate" title={fee.keyFeeHighlight}>
                      {fee.keyFeeHighlight}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Part E: Strategic Fee Trend Analysis */}
      <div className="p-5 rounded-xl bg-slate-900 text-white shadow-xs space-y-3 border border-slate-800">
        <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
          <Zap className="w-4 h-4" />
          <span>Phân Tích Xu Hướng & Tác Động Cơ Cấu Nguồn Thu Ngành Chứng Khoán</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-1">
          <div className="p-3.5 rounded-lg bg-slate-800/80 border border-slate-700 space-y-1.5">
            <h4 className="font-bold text-slate-100 text-xs">1. Sự Xói Mòn Phí Giao Dịch Thuần Túy</h4>
            <p className="text-slate-300 text-xs leading-relaxed">
              Làn sóng Zero-Fee từ TCBS, DNSE và VPBankS khiến tỷ trọng doanh thu môi giới thuần túy giảm từ 35-40% trước đây xuống dưới 15-20% toàn ngành.
            </p>
          </div>
          <div className="p-3.5 rounded-lg bg-slate-800/80 border border-slate-700 space-y-1.5">
            <h4 className="font-bold text-slate-100 text-xs">2. Dư Nợ Margin Trở Thành Động Lực Lợi Nhuận Chính</h4>
            <p className="text-slate-300 text-xs leading-relaxed">
              Thu nhập từ lãi cho vay ký quỹ (Margin Spread) đóng góp hơn 50-65% lợi nhuận gộp của các CTCK top đầu có quy mô vốn chủ sở hữu lớn.
            </p>
          </div>
          <div className="p-3.5 rounded-lg bg-slate-800/80 border border-slate-700 space-y-1.5">
            <h4 className="font-bold text-slate-100 text-xs">3. Dịch Chuyển Sang Wealth Management & Phí Tư Vấn</h4>
            <p className="text-slate-300 text-xs leading-relaxed">
              Các công ty dẫn đầu đang chuyển dịch trọng tâm sang phân phối chứng chỉ quỹ, trái phiếu iBond và thu phí gói tư vấn danh mục chuyên biệt.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
