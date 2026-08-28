import React from 'react';
import { X, ShieldCheck, Database, FileSpreadsheet, CheckCircle2, AlertTriangle, ExternalLink } from 'lucide-react';
import { PROVENANCE_SOURCES } from '../data/provenanceData';
import { COMPANIES_DATA } from '../data/securitiesData';

interface SourceProvenanceModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialSourceKey?: string;
}

export const SourceProvenanceModal: React.FC<SourceProvenanceModalProps> = ({
  isOpen,
  onClose,
  initialSourceKey = 'TIER1_FINANCIAL'
}) => {
  const [selectedKey, setSelectedKey] = React.useState<string>(initialSourceKey);

  React.useEffect(() => {
    if (initialSourceKey) {
      setSelectedKey(initialSourceKey);
    }
  }, [initialSourceKey]);

  if (!isOpen) return null;

  const currentSource = PROVENANCE_SOURCES[selectedKey] || PROVENANCE_SOURCES.TIER1_FINANCIAL;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
      <div className="bg-white rounded-xl shadow-2xl border border-slate-200 w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-100 text-blue-800 rounded-lg">
              <Database className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-lg">Cổng Đối Soát Dữ Liệu & Nguồn Gốc (Data Provenance)</h3>
              <p className="text-xs text-slate-500">Nguyên tắc "No Evidence = No Claim" & Phân cấp thẩm quyền dữ liệu</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Source Switcher Tabs */}
        <div className="flex border-b border-slate-200 px-6 bg-white overflow-x-auto">
          {Object.entries(PROVENANCE_SOURCES).map(([key, item]) => {
            const isActive = selectedKey === key;
            return (
              <button
                key={key}
                onClick={() => setSelectedKey(key)}
                className={`py-3 px-4 text-sm font-semibold border-b-2 whitespace-nowrap transition-colors flex items-center gap-2 ${
                  isActive
                    ? 'border-blue-600 text-blue-600 bg-blue-50/50'
                    : 'border-transparent text-slate-600 hover:text-slate-900 hover:border-slate-300'
                }`}
              >
                <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                  item.sourceTier === 'TIER 1' ? 'bg-emerald-100 text-emerald-800' :
                  item.sourceTier === 'TIER 2' ? 'bg-blue-100 text-blue-800' : 'bg-purple-100 text-purple-800'
                }`}>
                  {item.sourceTier}
                </span>
                <span>{item.sourceName.split('-')[0].trim()}</span>
              </button>
            );
          })}
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-slate-800 text-sm">
          {/* Card Summary */}
          <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <span className="text-xs text-slate-500 font-medium block">Tệp Dữ Liệu Gốc</span>
              <div className="flex items-center gap-1.5 mt-1 font-mono font-semibold text-slate-800 text-xs bg-white px-2 py-1.5 rounded border border-slate-200">
                <FileSpreadsheet className="w-4 h-4 text-emerald-600" />
                {currentSource.sourceFile}
              </div>
            </div>
            <div>
              <span className="text-xs text-slate-500 font-medium block">Nhãn Hiển Thị Chuẩn</span>
              <span className="inline-block mt-1 font-semibold text-blue-700 text-xs bg-blue-50 px-2.5 py-1 rounded border border-blue-200">
                {currentSource.citationLabel}
              </span>
            </div>
            <div>
              <span className="text-xs text-slate-500 font-medium block">Mức Độ Thẩm Quyền (Authority)</span>
              <div className="mt-1 flex items-center gap-1 text-xs font-semibold text-emerald-700">
                <ShieldCheck className="w-4 h-4" />
                <span>{currentSource.sourceTier === 'TIER 1' ? 'Bắt buộc (Mandatory Source of Truth)' : 'Tham chiếu & Xác thực'}</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              Mô tả & Phạm vi áp dụng
            </h4>
            <p className="text-slate-600 leading-relaxed bg-emerald-50/50 p-3 rounded-lg border border-emerald-100">
              {currentSource.notes}
            </p>
          </div>

          {/* Validation Checklist */}
          <div className="border border-slate-200 rounded-lg overflow-hidden">
            <div className="bg-slate-100 px-4 py-2.5 font-semibold text-xs text-slate-700 uppercase tracking-wider">
              Quy Trình Kiểm Tra & Khóa Thẩm Quyền (Data Integrity Gate)
            </div>
            <div className="p-4 space-y-3 bg-white">
              <div className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">✓</div>
                <div>
                  <div className="font-semibold text-slate-800">Khóa số liệu TIER 1 (Tuyệt đối không dùng nguồn ngoài)</div>
                  <p className="text-xs text-slate-500">Mọi chỉ tiêu Doanh thu, Lợi nhuận, Vốn điều lệ, Vốn chủ sở hữu, Tổng tài sản lấy 100% từ Báo cáo tài chính 6T/2026 trong tệp TIER 1. Không suy diễn hoặc ước lượng.</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">✓</div>
                <div>
                  <div className="font-semibold text-slate-800">Xử lý giá trị NA (Dữ liệu chưa được cung cấp)</div>
                  <p className="text-xs text-slate-500">Nếu công ty không tách bạch Doanh thu tư vấn đầu tư hoặc LNST trong kỳ so sánh, hệ thống thể hiện rõ ràng là 'Dữ liệu chưa được cung cấp', không tự ý điền số 0.</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">✓</div>
                <div>
                  <div className="font-semibold text-slate-800">Chuẩn hóa đơn vị đo lường</div>
                  <p className="text-xs text-slate-500">Toàn bộ giá trị tài chính VND được quy đổi sang đơn vị chuẩn <b>Tỷ VND (Billion VND)</b> với độ chính xác 2 chữ số thập phân.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sample Rows from Tier 1 Data */}
          {selectedKey === 'TIER1_FINANCIAL' && (
            <div>
              <h4 className="font-semibold text-slate-900 mb-2">Bảng kiểm kê 20 công ty trong dữ liệu nội bộ (6T/2026 vs 31/12/2025)</h4>
              <div className="max-h-56 overflow-y-auto border border-slate-200 rounded-lg text-xs">
                <table className="w-full text-left">
                  <thead className="bg-slate-100 sticky top-0 text-slate-600 font-semibold">
                    <tr>
                      <th className="p-2">Dòng CSV</th>
                      <th className="p-2">Mã CK</th>
                      <th className="p-2">Tên pháp nhân</th>
                      <th className="p-2 text-right">Vốn ĐL (30/06/26)</th>
                      <th className="p-2 text-right">Tổng tài sản (30/06/26)</th>
                      <th className="p-2 text-right">LNTT (6T/2026)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {COMPANIES_DATA.map((c) => (
                      <tr key={c.id} className="hover:bg-slate-50">
                        <td className="p-2 font-mono text-slate-500">Row {c.tier1RowIndex}</td>
                        <td className="p-2 font-bold text-blue-700">{c.ticker}</td>
                        <td className="p-2 text-slate-800 font-medium">{c.legalName}</td>
                        <td className="p-2 text-right font-mono">{c.financials.charterCapital2026H1_B.toLocaleString('vi-VN')} tỷ</td>
                        <td className="p-2 text-right font-mono">{c.financials.totalAssets2026H1_B.toLocaleString('vi-VN')} tỷ</td>
                        <td className="p-2 text-right font-mono text-emerald-700 font-semibold">{c.financials.profitBeforeTax2026H1_B.toLocaleString('vi-VN')} tỷ</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {currentSource.sourceUrl && (
            <div className="flex items-center gap-2 text-xs text-slate-600 bg-slate-50 p-2.5 rounded border border-slate-200">
              <ExternalLink className="w-3.5 h-3.5 text-blue-600" />
              <span>Liên kết gốc:</span>
              <a href={currentSource.sourceUrl} target="_blank" rel="noreferrer" className="text-blue-600 hover:underline truncate max-w-lg font-mono">
                {currentSource.sourceUrl}
              </a>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-slate-200 bg-slate-50 flex items-center justify-between text-xs text-slate-500">
          <span>Khung chuẩn kiểm định số liệu: Ban Chiến Lược & Phân Tích</span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-800 hover:bg-slate-900 text-white font-medium rounded-lg transition-colors cursor-pointer"
          >
            Đóng cửa sổ
          </button>
        </div>
      </div>
    </div>
  );
};
