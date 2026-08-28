import React, { useState } from 'react';
import { BookOpen, HelpCircle, Layers, Building2, Briefcase, UserCheck, ShieldCheck, ChevronDown, ChevronUp, PieChart } from 'lucide-react';
import { SourceBadge } from './SourceBadge';
import { COMPANIES_DATA } from '../data/securitiesData';

interface MarketDefinitionSectionProps {
  onOpenSourceModal: (key: string) => void;
}

export const MarketDefinitionSection: React.FC<MarketDefinitionSectionProps> = ({ onOpenSourceModal }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const definitions = [
    {
      title: 'Tư Vấn Tài Chính Doanh Nghiệp (Corporate Financial Consulting / IB)',
      subtitle: 'Nguồn thu chính trong mục "DT tư vấn tài chính" trên Báo cáo tài chính CTCK',
      icon: Building2,
      color: 'blue',
      summary: 'Dịch vụ tư vấn cấu trúc vốn, bảo lãnh phát hành cổ phiếu/trái phiếu (ECM/DCM), tư vấn mua bán sáp nhập (M&A), cổ phần hóa và tái cấu trúc nợ cho khách hàng tổ chức.',
      details: [
        'Bản chất: CTCK đóng vai trò là Ngân hàng Đầu tư (Investment Bank - IB), đại diện thu xếp vốn và cố vấn chiến lược tài chính doanh nghiệp.',
        'Mô hình phí: Thu phí cố định theo hợp đồng tư vấn (Retainer Fee) cộng với phí hoa hồng thành công (% Success Fee trên tổng giá trị thương vụ huy động hoặc sáp nhập).',
        'Minh chứng 6T/2026: VPBankS đạt 353,99 tỷ VND, TCBS đạt 148,42 tỷ VND, HDBS đạt 120 tỷ VND, SHS đạt 72,21 tỷ VND dẫn đầu mảng này.'
      ]
    },
    {
      title: 'Tư Vấn Đầu Tư Chứng Khoán (Securities Investment Advisory)',
      subtitle: 'Quy định tại Luật Chứng khoán Việt Nam, tách bạch với Môi giới',
      icon: Briefcase,
      color: 'emerald',
      summary: 'Dịch vụ phân tích, đưa ra khuyến nghị, chiến lược mua/bán, phân bổ danh mục đầu tư chứng khoán dựa trên nhu cầu, khẩu vị rủi ro và mục tiêu tài chính cụ thể của khách hàng cá nhân & tổ chức.',
      details: [
        'Bản chất: Khách hàng tự chịu trách nhiệm về quyết định đầu tư cuối cùng, nhưng trả phí cho quyền tiếp cận hệ thống phân tích, danh mục khuyến nghị chuyên sâu và chuyên gia cố vấn.',
        'Thực trạng hạch toán: Trên 75% CTCK Việt Nam không ghi nhận doanh thu riêng cho mục này (thể hiện là NA) vì gom chi phí tư vấn vào phí hoa hồng giao dịch môi giới truyền thống.',
        'Đơn vị dẫn đầu ghi nhận riêng: SSI (17,20 tỷ VND 6T/2026), FPTS (5,67 tỷ VND), Vietcap (3,51 tỷ VND), MAS (2,10 tỷ VND).'
      ]
    },
    {
      title: 'Môi Giới Chứng Khoán & Cho Vay Ký Quỹ (Brokerage & Margin Lending)',
      subtitle: 'Doanh thu hoạt động cốt lõi của phần lớn CTCK',
      icon: UserCheck,
      color: 'indigo',
      summary: 'Hoạt động cung cấp hạ tầng khớp lệnh giao dịch mua/bán cổ phiếu, phái sinh, chứng quyền và cấp vốn đòn bẩy tài chính (Margin).',
      details: [
        'Bản chất: Doanh thu phụ thuộc trực tiếp vào thanh khoản thị trường chung (GTGD toàn sàn) và quy mô dư nợ cho vay ký quỹ.',
        'Xu hướng dịch chuyển: Cuộc chiến Zero-Fee (miễn phí giao dịch trọn đời) từ TCBS, DNSE, KAFI, VPBankS đang triệt tiêu biên lợi nhuận môi giới thuần túy, buộc các CTCK phải mở rộng sang mảng Tư vấn tài chính và Quản lý tài sản số.'
      ]
    },
    {
      title: 'Quản Lý Tài Sản & Gia Sản (Wealth Management & Asset Management)',
      subtitle: 'Xu thế tương lai của các định chế tài chính tích hợp',
      icon: Layers,
      color: 'purple',
      summary: 'Giải pháp tổng thể về hoạch định tài chính cá nhân trọn đời, phân phối chứng chỉ quỹ mở, trái phiếu doanh nghiệp chọn lọc, sản phẩm tiền gửi linh hoạt và quản lý ủy thác đầu tư.',
      details: [
        'Bản chất: Chuyển dịch từ việc kiếm lời theo từng lệnh giao dịch (Transaction-based) sang thu phí theo quy mô tài sản quản lý (Asset-based fee / AUM).',
        'Các định chế đi đầu: TCBS (nền tảng TCInvest với iBond/iFund/iSave), SSI (hệ sinh thái SSIAM), VNDirect (hệ sinh thái DGO: DStock/DBond/DFund).'
      ]
    }
  ];

  return (
    <section id="market-definition" className="scroll-mt-24 space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 pb-4 border-b border-slate-200">
        <div>
          <div className="flex items-center gap-2 text-slate-500 font-bold text-xs uppercase tracking-wider mb-1">
            <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
            <span>Phần 5.2 • Định Nghĩa Thị Trường & Bản Chất Dịch Vụ</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
            Định Nghĩa Thị Trường & Phân Định Hoạt Động Tư Vấn
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm mt-1">
            Làm rõ ranh giới giữa Tài chính tự thân (Financials) và Dịch vụ tư vấn khách hàng (Advisory Services) trong bối cảnh ngành chứng khoán Việt Nam.
          </p>
        </div>
        <SourceBadge sourceKey="TIER1_FINANCIAL" detail="Phân loại doanh nghiệp" onOpenSourceModal={onOpenSourceModal} />
      </div>

      {/* Explicit Regulatory & Service Scope Framework: 2.1 & 2.2 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* 2.1 Tư vấn đầu tư chứng khoán */}
        <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
          <div className="flex items-center justify-between border-b border-slate-200 pb-2.5">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xs">
                2.1
              </div>
              <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                Tư vấn đầu tư chứng khoán
              </h3>
            </div>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-100/80 text-emerald-800 border border-emerald-200 uppercase tracking-wider">
              Khách hàng Cá nhân & Tổ chức
            </span>
          </div>

          <p className="text-xs font-semibold text-slate-700">
            Relevant services include:
          </p>

          <ul className="space-y-2 text-xs text-slate-700">
            <li className="flex items-start gap-2.5 p-2 rounded-lg bg-white border border-slate-200 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-1.5 shrink-0"></span>
              <span className="leading-relaxed"><b>Tư vấn chiến lược và kỹ thuật giao dịch</b></span>
            </li>
            <li className="flex items-start gap-2.5 p-2 rounded-lg bg-white border border-slate-200 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-1.5 shrink-0"></span>
              <span className="leading-relaxed"><b>Cung cấp kết quả phân tích chứng khoán</b></span>
            </li>
            <li className="flex items-start gap-2.5 p-2 rounded-lg bg-white border border-slate-200 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-1.5 shrink-0"></span>
              <span className="leading-relaxed"><b>Cung cấp kết quả phân tích thị trường chứng khoán</b></span>
            </li>
          </ul>

          <div className="pt-2 text-[11px] text-slate-500 italic">
            * Căn cứ quy định tại Luật Chứng khoán Việt Nam về nghiệp vụ tư vấn đầu tư chứng khoán độc lập với nghiệp vụ môi giới.
          </div>
        </div>

        {/* 2.2 Tư vấn tài chính */}
        <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
          <div className="flex items-center justify-between border-b border-slate-200 pb-2.5">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-blue-100 text-blue-800 flex items-center justify-center font-bold text-xs">
                2.2
              </div>
              <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                Tư vấn tài chính
              </h3>
            </div>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-100/80 text-blue-800 border border-blue-200 uppercase tracking-wider">
              Khách hàng Doanh nghiệp / IB
            </span>
          </div>

          <p className="text-xs font-semibold text-slate-700">
            Relevant services include:
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
            <li className="flex items-start gap-2 p-2 rounded-lg bg-white border border-slate-200 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0"></span>
              <span className="leading-relaxed">Tư vấn tái cơ cấu tài chính doanh nghiệp</span>
            </li>
            <li className="flex items-start gap-2 p-2 rounded-lg bg-white border border-slate-200 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0"></span>
              <span className="leading-relaxed">Thâu tóm, sáp nhập doanh nghiệp (M&A)</span>
            </li>
            <li className="flex items-start gap-2 p-2 rounded-lg bg-white border border-slate-200 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0"></span>
              <span className="leading-relaxed">Tư vấn quản trị công ty cổ phần</span>
            </li>
            <li className="flex items-start gap-2 p-2 rounded-lg bg-white border border-slate-200 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0"></span>
              <span className="leading-relaxed">Tư vấn chào bán chứng khoán (ECM/DCM)</span>
            </li>
            <li className="flex items-start gap-2 p-2 rounded-lg bg-white border border-slate-200 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0"></span>
              <span className="leading-relaxed">Tư vấn niêm yết chứng khoán / listing</span>
            </li>
            <li className="flex items-start gap-2 p-2 rounded-lg bg-white border border-slate-200 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0"></span>
              <span className="leading-relaxed">Tư vấn cổ phần hóa</span>
            </li>
            <li className="flex items-start gap-2 p-2 rounded-lg bg-white border border-slate-200 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0"></span>
              <span className="leading-relaxed">Xác định giá trị doanh nghiệp</span>
            </li>
            <li className="flex items-start gap-2 p-2 rounded-lg bg-white border border-slate-200 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0"></span>
              <span className="leading-relaxed">Các dịch vụ tư vấn tài chính khác phù hợp pháp luật</span>
            </li>
          </ul>

          <div className="pt-2 text-[11px] text-slate-500 italic">
            * Nguồn doanh thu được ghi nhận trong chỉ tiêu "Doanh thu hoạt động tư vấn tài chính" trên BCTC chuẩn mực kiểm toán.
          </div>
        </div>
      </div>

      {/* Concept Architecture Breakdown Bento Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {definitions.map((item, index) => {
          const Icon = item.icon;
          const isExpanded = expandedIndex === index;

          return (
            <div
              key={index}
              className={`p-5 rounded-xl border transition-all duration-200 bg-white ${
                isExpanded ? 'border-slate-400 shadow-sm ring-1 ring-slate-400/20' : 'border-slate-200 hover:border-slate-300 shadow-xs'
              }`}
            >
              <div
                onClick={() => setExpandedIndex(isExpanded ? null : index)}
                className="flex items-start justify-between gap-3 cursor-pointer select-none"
              >
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-slate-100 text-slate-800 flex items-center justify-center shrink-0 mt-0.5 border border-slate-200">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm sm:text-base">{item.title}</h3>
                    <p className="text-[11px] text-slate-500 font-medium">{item.subtitle}</p>
                  </div>
                </div>
                <button className="text-slate-400 hover:text-slate-700 p-1">
                  {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
              </div>

              <p className="text-xs text-slate-600 mt-3 leading-relaxed">
                {item.summary}
              </p>

              {isExpanded && (
                <div className="mt-4 pt-3 border-t border-slate-100 space-y-2 text-xs text-slate-700 bg-slate-50 p-3.5 rounded-lg border border-slate-100">
                  {item.details.map((detail, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-900 mt-1.5 shrink-0" />
                      <span className="leading-relaxed">{detail}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Clarification Callout: Internal Financials vs Client Advisory Services in Dark Bento Tile */}
      <div className="p-5 rounded-xl bg-slate-900 text-white border border-slate-800 shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-300">
            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
            <span>Nguyên tắc đối soát thẩm quyền: Tài chính công ty vs Dịch vụ tư vấn</span>
          </div>
          <span className="text-[10px] uppercase font-bold text-slate-400">Quy chuẩn dữ liệu</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs leading-relaxed">
          <div className="p-4 rounded-lg bg-slate-800/80 border border-slate-700 space-y-2">
            <div className="flex items-center justify-between">
              <h4 className="font-bold text-sm text-emerald-400">1. Tài Chính Tự Thân CTCK</h4>
              <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono">TIER 1</span>
            </div>
            <p className="text-slate-300">
              Vốn điều lệ, Vốn chủ sở hữu, Tổng tài sản, Doanh thu từ tự doanh FVTPL/HTM, Lãi cho vay margin và Lợi nhuận trước/sau thuế.
            </p>
            <p className="text-slate-400 text-[11px] pt-1 border-t border-slate-700">
              → Phản ánh sức mạnh tiềm lực vốn và hiệu quả sinh lời nội tại. Nguồn: <b>BCTC 6T/2026</b>.
            </p>
          </div>

          <div className="p-4 rounded-lg bg-slate-800/80 border border-slate-700 space-y-2">
            <div className="flex items-center justify-between">
              <h4 className="font-bold text-sm text-blue-400">2. Năng Lực Dịch Vụ Khách Hàng</h4>
              <span className="text-[10px] px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 font-mono">TIER 2</span>
            </div>
            <p className="text-slate-300">
              Báo cáo phân tích vĩ mô, nghiên cứu ngành, khuyến nghị cổ phiếu, dịch vụ IB tư vấn phát hành/M&A cho doanh nghiệp và ứng dụng giao dịch.
            </p>
            <p className="text-slate-400 text-[11px] pt-1 border-t border-slate-700">
              → Phản ánh giá trị gia tăng cung cấp cho khách hàng. Nguồn: <b>Website chính thức & Thực nghiệm</b>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
