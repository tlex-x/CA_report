import React from 'react';
import { 
  Sparkles, 
  Cpu, 
  Target, 
  CheckCircle2, 
  Lightbulb, 
  Zap, 
  TrendingUp, 
  ShieldCheck, 
  BookOpen, 
  Briefcase, 
  Layers
} from 'lucide-react';
import { SourceBadge } from './SourceBadge';

interface StrategicRecommendationsProps {
  onOpenSourceModal: (key: string) => void;
}

export const StrategicRecommendationsSection: React.FC<StrategicRecommendationsProps> = ({
  onOpenSourceModal
}) => {
  const suggestionGroups = [
    {
      groupNumber: 'Đề Xuất 1',
      groupTitle: 'Nâng Cao Năng Lực Nghiên Cứu & Số Hóa Dữ Liệu Phân Tích',
      icon: BookOpen,
      color: 'border-emerald-200 bg-emerald-50/40 text-emerald-900',
      badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-200',
      suggestions: [
        'Khuyến nghị xây dựng hệ thống tự động trích xuất BCTC và tin tức thị trường để tạo báo cáo nhanh (Flash Note) tức thời ngay khi doanh nghiệp niêm yết công bố KQKD.',
        'Nên chuẩn hóa kho dữ liệu vĩ mô và ngành, cung cấp công cụ tương tác hỏi đáp dữ liệu cho chuyên viên phân tích nội bộ (ước tính giúp giảm 70% thời gian tổng hợp số liệu).',
        'Đề xuất tách bạch gói dịch vụ "Tư vấn đầu tư nâng cao" có thu phí chuyên sâu trên ứng dụng di động để bắt đầu tạo dòng doanh thu tư vấn độc lập, giảm phụ thuộc vào phí môi giới thuần túy.'
      ]
    },
    {
      groupNumber: 'Đề Xuất 2',
      groupTitle: 'Phát Triển Hệ Sinh Thái Quản Lý Tài Sản & Tư Vấn Đầu Tư',
      icon: Briefcase,
      color: 'border-blue-200 bg-blue-50/40 text-blue-900',
      badgeColor: 'bg-blue-100 text-blue-800 border-blue-200',
      suggestions: [
        'Nên nghiên cứu và triển khai thuật toán phân bổ tài sản tự động (Asset Allocation Engine) kết hợp Cổ phiếu, Trái phiếu iBond, Chứng chỉ quỹ mở và Tiền gửi linh hoạt theo khẩu vị rủi ro của từng phân khúc khách hàng.',
        'Khuyến nghị trang bị hệ thống gợi ý tín hiệu giao dịch định lượng (Quantitative Model & Smart Trading Signals) cho đội ngũ chuyên viên tư vấn để gia tăng giá trị chuyên môn và hiệu quả khuyến nghị.',
        'Đề xuất chủ động thiết lập quan hệ đối tác liên kết với ngân hàng thương mại hoặc các nền tảng fintech ví điện tử nhằm mở rộng tệp khách hàng tiềm năng F0 và Mass Affluent.'
      ]
    },
    {
      groupNumber: 'Đề Xuất 3',
      groupTitle: 'Mở Rộng Thị Trường Vốn, Ngân Hàng Đầu Tư Số (IB) & Khối Ngoại',
      icon: TrendingUp,
      color: 'border-purple-200 bg-purple-50/40 text-purple-900',
      badgeColor: 'bg-purple-100 text-purple-800 border-purple-200',
      suggestions: [
        'Đề xuất xây dựng nền tảng số kết nối nhu cầu thu xếp vốn và phát hành trái phiếu/cổ phiếu riêng lẻ của doanh nghiệp SME với các định chế tài chính, quỹ đầu tư và nhà đầu tư chuyên nghiệp.',
        'Khuyến nghị chủ động nâng cấp hạ tầng công nghệ và chuẩn hóa quy trình giao dịch quốc tế để đón đầu dòng vốn ngoại khi thị trường chứng khoán Việt Nam chính thức được nâng hạng (FTSE / MSCI Emerging Market).',
        'Nên tối ưu hóa cấu trúc bảng cân đối kế toán, duy trì tỷ suất ROE mục tiêu trên 18% và linh hoạt gia tăng quy mô vốn điều lệ thông qua các đợt phát hành chiến lược khi điều kiện thị trường thuận lợi.'
      ]
    }
  ];

  const aiSuggestions = [
    {
      icon: Zap,
      title: '1. Gợi Ý: Ứng Dụng AI Nghiên Cứu & Tóm Tắt Thị Trường Tự Động',
      desc: 'Nên ứng dụng Generative AI để tự động biên soạn bản tin Morning Briefing, tóm tắt diễn biến VN-Index, dòng tiền khối ngoại và các cổ phiếu có đột biến khối lượng trước giờ mở cửa 30 phút.'
    },
    {
      icon: Target,
      title: '2. Gợi Ý: Tích Hợp Trợ Lý Khuyến Nghị Cá Nhân Hóa (Personalized Advisor AI)',
      desc: 'Khuyến nghị tích hợp trợ lý AI phân tích lịch sử giao dịch và khẩu vị rủi ro của từng tài khoản để gửi thông báo cảnh báo cắt lỗ, chốt lời hoặc đề xuất cơ cấu lại danh mục kịp thời.'
    },
    {
      icon: Cpu,
      title: '3. Gợi Ý: Ứng Dụng AI Hỗ Trợ Định Giá & Thẩm Định Doanh Nghiệp IB',
      desc: 'Đề xuất thử nghiệm mô hình AI tự động tính toán các kịch bản định giá DCF, P/E, EV/EBITDA và rà soát rủi ro pháp lý/tài chính (Due Diligence) của doanh nghiệp mục tiêu trong các thương vụ M&A và bảo lãnh phát hành.'
    }
  ];

  return (
    <section id="strategic-recommendations" className="scroll-mt-24 space-y-6">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 pb-4 border-b border-slate-200">
        <div>
          <div className="flex items-center gap-2 text-slate-500 font-bold text-xs uppercase tracking-wider mb-1">
            <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
            <span>Phần 5.7 • Khuyến Nghị Chiến Lược & Gợi Ý Ứng Dụng AI</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
            Khuyến Nghị Chiến Lược & Đề Xuất Ứng Dụng Trí Tuệ Nhân Tạo (AI)
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm mt-1">
            Tổng hợp các định hướng đề xuất và gợi ý khả thi giúp doanh nghiệp nâng cao năng lực cạnh tranh, né tránh cuộc chiến Zero-Fee và đón đầu làn sóng ứng dụng AI trong ngành tài chính.
          </p>
        </div>
        <SourceBadge sourceKey="TIER1_FINANCIAL" detail="Đề xuất chiến lược 2026-2028" onOpenSourceModal={onOpenSourceModal} />
      </div>

      {/* Suggestion Thematic Blocks */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Lightbulb className="w-4 h-4 text-amber-500" />
          <h3 className="font-bold text-slate-900 text-sm sm:text-base">
            Khung Đề Xuất Chiến Lược Toàn Diện Theo 3 Trụ Cột Trọng Tâm
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {suggestionGroups.map((group, idx) => {
            const Icon = group.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl p-5 border border-slate-200 shadow-xs flex flex-col justify-between space-y-4 hover:border-slate-300 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded border ${group.badgeColor}`}>
                      {group.groupNumber}
                    </span>
                    <div className="p-1.5 rounded-lg bg-slate-100 text-slate-700">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h4 className="font-bold text-slate-900 text-sm leading-snug mb-3">
                    {group.groupTitle}
                  </h4>

                  <ul className="space-y-2.5 text-xs text-slate-600">
                    {group.suggestions.map((item, sIdx) => (
                      <li key={sIdx} className="flex items-start gap-2 p-2 rounded-lg bg-slate-50 border border-slate-100">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2 text-[11px] text-slate-400 italic">
                  * Khuyến nghị tham khảo phục vụ định hướng phát triển nội bộ.
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* AI Adoption Specific Matrix */}
      <div className="p-5 rounded-xl bg-slate-900 text-white shadow-xs space-y-4 border border-slate-800">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <div className="flex items-center gap-2 text-blue-400 text-xs font-bold uppercase tracking-wider mb-1">
              <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
              <span>Đột Phá Năng Suất Bằng Generative AI & Machine Learning</span>
            </div>
            <h3 className="font-bold text-base sm:text-lg text-white">
              Gợi Ý 3 Kịch Bản Ứng Dụng AI Tạo Giá Trị Trực Tiếp Cho CTCK
            </h3>
          </div>
          <span className="text-xs px-2.5 py-1 rounded bg-white/10 text-slate-200 border border-white/10 font-mono">
            Gợi Ý AI-First
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
          {aiSuggestions.map((useCase, idx) => {
            const Icon = useCase.icon;
            return (
              <div key={idx} className="p-4 rounded-lg bg-slate-800/80 border border-slate-700 space-y-2.5">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded bg-blue-500/20 text-blue-400 border border-blue-500/30">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h4 className="font-bold text-white text-xs sm:text-sm">{useCase.title}</h4>
                </div>
                <p className="text-slate-300 text-xs leading-relaxed">{useCase.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
