import React from 'react';
import { X, Calculator, HelpCircle, TrendingUp, Award, Layers } from 'lucide-react';

interface MethodologyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MethodologyModal: React.FC<MethodologyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
      <div className="bg-white rounded-xl shadow-2xl border border-slate-200 w-full max-w-3xl max-h-[85vh] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-indigo-100 text-indigo-800 rounded-lg">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-lg">Phương Pháp Luận & Tiêu Chí Đánh Giá (Methodology)</h3>
              <p className="text-xs text-slate-500">Quy chuẩn định lượng hóa & nguyên tắc xếp hạng minh bạch</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm text-slate-700">
          {/* Section 1 */}
          <div className="space-y-3">
            <h4 className="font-bold text-slate-900 flex items-center gap-2 text-base">
              <TrendingUp className="w-4 h-4 text-blue-600" />
              1. Công thức tính toán các chỉ tiêu tài chính
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                <span className="font-semibold text-slate-900 block mb-1">Tăng trưởng Vốn điều lệ (%):</span>
                <code className="text-blue-700 font-mono bg-white px-2 py-1 rounded border border-slate-200 block">
                  ((VĐL 30/06/2026 - VĐL 31/12/2025) / VĐL 31/12/2025) * 100
                </code>
              </div>

              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                <span className="font-semibold text-slate-900 block mb-1">Tăng trưởng Lợi nhuận trước thuế (%):</span>
                <code className="text-blue-700 font-mono bg-white px-2 py-1 rounded border border-slate-200 block">
                  ((LNTT 6T/2026 - LNTT 6T/2025) / LNTT 6T/2025) * 100
                </code>
              </div>

              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                <span className="font-semibold text-slate-900 block mb-1">Tỷ suất sinh lời vốn chủ sở hữu năm hóa (ROE %):</span>
                <code className="text-blue-700 font-mono bg-white px-2 py-1 rounded border border-slate-200 block">
                  ((LNST 6T/2026 * 2) / VCSH 30/06/2026) * 100
                </code>
                <p className="text-[11px] text-slate-500 mt-1">*Áp dụng quy đổi năm hóa ước lượng cho kỳ 6 tháng.</p>
              </div>

              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                <span className="font-semibold text-slate-900 block mb-1">Tỷ suất sinh lời trên tổng tài sản năm hóa (ROA %):</span>
                <code className="text-blue-700 font-mono bg-white px-2 py-1 rounded border border-slate-200 block">
                  ((LNST 6T/2026 * 2) / Tổng tài sản 30/06/2026) * 100
                </code>
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div className="space-y-3">
            <h4 className="font-bold text-slate-900 flex items-center gap-2 text-base">
              <Award className="w-4 h-4 text-amber-600" />
              2. Tiêu chuẩn gán nhãn hiệu suất (Grading Criteria)
            </h4>
            <p className="text-xs text-slate-600">
              Nhằm tuân thủ nguyên tắc <i>"No Grading Without Metrics"</i>, hệ thống áp dụng ngưỡng toán học cụ thể:
            </p>
            <div className="space-y-2 text-xs">
              <div className="flex items-center justify-between p-2.5 rounded bg-emerald-50 border border-emerald-200">
                <span className="font-semibold text-emerald-900">Tăng trưởng Vượt Bậc (High Growth)</span>
                <span className="font-mono text-emerald-800 font-bold">Tăng trưởng LNTT &gt; +30% so với 6T/2025</span>
              </div>

              <div className="flex items-center justify-between p-2.5 rounded bg-blue-50 border border-blue-200">
                <span className="font-semibold text-blue-900">Tăng trưởng Ổn Định (Moderate Growth)</span>
                <span className="font-mono text-blue-800 font-bold">Tăng trưởng LNTT từ 0% đến +30%</span>
              </div>

              <div className="flex items-center justify-between p-2.5 rounded bg-rose-50 border border-rose-200">
                <span className="font-semibold text-rose-900">Suy Giảm Kỳ So Sánh (Contracting)</span>
                <span className="font-mono text-rose-800 font-bold">Tăng trưởng LNTT &lt; 0%</span>
              </div>
            </div>
          </div>

          {/* Section 3 */}
          <div className="space-y-3">
            <h4 className="font-bold text-slate-900 flex items-center gap-2 text-base">
              <Layers className="w-4 h-4 text-purple-600" />
              3. Phân nhóm chiến lược (Strategic Clustering)
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 text-xs">
              <div className="p-3 bg-slate-50 rounded border border-slate-200">
                <div className="font-bold text-slate-900 mb-1">Top Big-4 Balance Sheet</div>
                <p className="text-slate-600">Các công ty có Vốn điều lệ &gt; 18.000 tỷ VND và Tổng tài sản trên 30.000 tỷ VND (TCBS, SSI, VPBankS, VIX).</p>
              </div>
              <div className="p-3 bg-slate-50 rounded border border-slate-200">
                <div className="font-bold text-slate-900 mb-1">Bank-backed Powerhouse</div>
                <p className="text-slate-600">Trực thuộc ngân hàng mẹ quy mô lớn, tận dụng mạng lưới chi nhánh và vốn rẻ (ACBS, MBS, SHS, HDBS, LPBankS).</p>
              </div>
              <div className="p-3 bg-slate-50 rounded border border-slate-200">
                <div className="font-bold text-slate-900 mb-1">Retail & Digital Disruptor</div>
                <p className="text-slate-600">Thống trị thị phần bán lẻ hoặc đi đầu về công nghệ số Zero-Fee (VPS, VNDirect, DNSE).</p>
              </div>
              <div className="p-3 bg-slate-50 rounded border border-slate-200">
                <div className="font-bold text-slate-900 mb-1">Institutional Specialist</div>
                <p className="text-slate-600">Tập trung vào khách hàng tổ chức, ngoại khối, chuẩn mực nghiên cứu & IB (HSC, Vietcap, KIS, FPTS, BSC, MAS).</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-slate-200 bg-slate-50 flex items-center justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-800 hover:bg-slate-900 text-white font-medium rounded-lg text-xs transition-colors cursor-pointer"
          >
            Đã hiểu & Đóng
          </button>
        </div>
      </div>
    </div>
  );
};
