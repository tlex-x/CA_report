import React from 'react';
import { Layers, Sparkles, Cpu, Target, CheckCircle2, ShieldAlert, ArrowRight, Lightbulb, Zap, TrendingUp } from 'lucide-react';
import { SourceBadge } from './SourceBadge';

interface StrategicRecommendationsProps {
  onOpenSourceModal: (key: string) => void;
}

export const StrategicRecommendationsSection: React.FC<StrategicRecommendationsProps> = ({
  onOpenSourceModal
}) => {
  const roadmapStages = [
    {
      phase: 'Giai Đoạn 1: Củng Cố & Số Hóa Nghiên Cứu (0 - 6 Tháng)',
      tag: 'Short-term',
      tagColor: 'bg-emerald-100 text-emerald-800',
      title: 'Triển Khai AI Research Copilot & Tự Động Hóa Báo Cáo Phân Tích',
      items: [
        'Xây dựng hệ thống tự động trích xuất BCTC và tin tức để tạo báo cáo Flash Note tức thời sau khi doanh nghiệp niêm yết công bố KQKD.',
        'Chuẩn hóa kho dữ liệu vĩ mô và ngành, cung cấp công cụ tương tác hỏi đáp dữ liệu cho chuyên viên phân tích nội bộ (giảm 70% thời gian tổng hợp số liệu).',
        'Tách bạch gói dịch vụ "Tư vấn đầu tư nâng cao" có thu phí trên ứng dụng di động để bắt đầu tạo dòng doanh thu tư vấn độc lập.'
      ]
    },
    {
      phase: 'Giai Đoạn 2: Mở Rộng Hệ Sinh Thái Quản Lý Tài Sản (6 - 18 Tháng)',
      tag: 'Medium-term',
      tagColor: 'bg-blue-100 text-blue-800',
      title: 'Ra Mắt Nền Tảng Robo-Advisory & Wealth Management Cho Phân Khúc Mass Affluent',
      items: [
        'Phát triển thuật toán phân bổ tài sản tự động (Asset Allocation Engine) kết hợp Cổ phiếu, Trái phiếu iBond, Chứng chỉ quỹ mở và Tiền gửi linh hoạt theo khẩu vị rủi ro.',
        'Trang bị hệ thống gợi ý lệnh thông minh (Smart Trading Signals) dựa trên phân tích định lượng (Quantitative Model) cho môi giới để gia tăng giá trị tư vấn.',
        'Thiết lập quan hệ đối tác với ngân hàng thương mại hoặc fintech ví điện tử để mở rộng tệp khách hàng tiềm năng F0.'
      ]
    },
    {
      phase: 'Giai Đoạn 3: Dẫn Đầu Thể Chế & Ngân Hàng Đầu Tư Số (18 - 36 Tháng)',
      tag: 'Long-term',
      tagColor: 'bg-purple-100 text-purple-800',
      title: 'Nền Tảng Kết Nối Vốn Doanh Nghiệp (Digital IB Marketplace) & Nâng Hạng Thị Trường',
      items: [
        'Xây dựng sàn giao dịch kết nối nhu cầu phát hành trái phiếu/cổ phiếu riêng lẻ của doanh nghiệp SME với các định chế tài chính và quỹ ngoại.',
        'Đón đầu làn sóng Nâng hạng thị trường chứng khoán Việt Nam (FTSE / MSCI Emerging Market) bằng hệ thống giao dịch chuẩn quốc tế cho khối ngoại.',
        'Tối ưu hóa bảng cân đối kế toán, duy trì ROE mục tiêu trên 18% và mở rộng quy mô vốn điều lệ thông qua các đợt phát hành chiến lược.'
      ]
    }
  ];

  const aiUseCases = [
    {
      icon: Zap,
      title: '1. AI Nghiên Cứu & Tóm Tắt Thị Trường Tự Động',
      desc: 'Tự động tạo bản tin Morning Briefing, tóm tắt diễn biến VN-Index, dòng tiền khối ngoại và các cổ phiếu đột biến khối lượng trước giờ mở cửa 30 phút.',
      benefit: 'Tiết kiệm 500+ giờ làm việc mỗi tháng của đội ngũ chuyên gia phân tích.'
    },
    {
      icon: Target,
      title: '2. Trợ Lý Khuyến Nghị Cá Nhân Hóa (Personalized Advisor AI)',
      desc: 'Phân tích lịch sử giao dịch và khẩu vị rủi ro của từng tài khoản để gửi thông báo cảnh báo cắt lỗ, chốt lời hoặc cơ cấu danh mục kịp thời.',
      benefit: 'Tăng 40% mức độ gắn kết khách hàng (Retention Rate) và kích hoạt giao dịch có kỷ luật.'
    },
    {
      icon: Cpu,
      title: '3. AI Hỗ Trợ Định Giá & Thẩm Định Doanh Nghiệp IB',
      desc: 'Tự động chạy các mô hình định giá DCF, P/E, EV/EBITDA và rà soát rủi ro pháp lý/tài chính (Due Diligence) của doanh nghiệp mục tiêu trong các thương vụ M&A.',
      benefit: 'Rút ngắn thời gian lập hồ sơ phát hành từ 3 tuần xuống còn 4 ngày.'
    }
  ];

  return (
    <section id="strategic-recommendations" className="scroll-mt-24 space-y-6">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 pb-4 border-b border-slate-200">
        <div>
          <div className="flex items-center gap-2 text-slate-500 font-bold text-xs uppercase tracking-wider mb-1">
            <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
            <span>Phần 5.6 • Khuyến Nghị Chiến Lược & Ứng Dụng AI</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
            Khuyến Nghị Chiến Lược & Lộ Trình Ứng Dụng Trí Tuệ Nhân Tạo (AI)
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm mt-1">
            Lộ trình hành động khả thi giúp công ty kiến tạo lợi thế cạnh tranh bền vững, né tránh cuộc chiến đốt tiền Zero-Fee và dẫn đầu làn sóng AI trong ngành tài chính.
          </p>
        </div>
        <SourceBadge sourceKey="TIER1_FINANCIAL" detail="Chiến lược 2026-2028" onOpenSourceModal={onOpenSourceModal} />
      </div>

      {/* Strategic Roadmap Stages */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
          <h3 className="font-bold text-slate-900 text-sm sm:text-base">
            Lộ Trình Triển Khai Chiến Lược 3 Giai Đoạn (Strategic Roadmap)
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {roadmapStages.map((stage, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-5 border border-slate-200 shadow-xs flex flex-col justify-between space-y-4 hover:border-slate-400 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className={`text-[11px] font-bold px-2 py-0.5 rounded ${stage.tagColor}`}>
                    {stage.tag}
                  </span>
                  <span className="text-xs font-mono font-bold text-slate-400">Giai đoạn {idx + 1}</span>
                </div>

                <div className="text-xs font-semibold text-slate-500 mb-1">{stage.phase}</div>
                <h4 className="font-bold text-slate-900 text-sm mb-3">{stage.title}</h4>

                <ul className="space-y-2 text-xs text-slate-600">
                  {stage.items.map((item, iIdx) => (
                    <li key={iIdx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="font-medium text-slate-700">Ưu tiên thực thi</span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
              </div>
            </div>
          ))}
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
              3 Kịch Bản Ứng Dụng AI Tạo Giá Trị Trực Tiếp Cho CTCK
            </h3>
          </div>
          <span className="text-xs px-2.5 py-1 rounded bg-white/10 text-slate-200 border border-white/10 font-mono">
            Chiến Lược AI-First 2026
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
          {aiUseCases.map((useCase, idx) => {
            const Icon = useCase.icon;
            return (
              <div key={idx} className="p-4 rounded-lg bg-slate-800/80 border border-slate-700 space-y-2">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded bg-blue-500/20 text-blue-400 border border-blue-500/30">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h4 className="font-bold text-white text-xs sm:text-sm">{useCase.title}</h4>
                </div>
                <p className="text-slate-300 text-xs leading-relaxed">{useCase.desc}</p>
                <div className="pt-2 border-t border-slate-700/80 text-[11px] text-emerald-400 font-medium flex items-start gap-1.5">
                  <span className="font-bold">Hiệu quả:</span>
                  <span className="text-slate-300">{useCase.benefit}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
