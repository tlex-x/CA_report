import { ProvenanceCitation } from '../types';

export const PROVENANCE_SOURCES: Record<string, ProvenanceCitation> = {
  TIER1_FINANCIAL: {
    sourceTier: 'TIER 1',
    sourceName: 'Dữ liệu nội bộ (Báo cáo 6T/2026 vs 31/12/2025)',
    sourceFile: 'data_brocoli - 6m2026_vs_dec_2025.csv',
    citationLabel: 'Nguồn: Dữ liệu nội bộ (Báo cáo 6T/2026)',
    notes: 'Toàn bộ số liệu tài chính định lượng (Vốn điều lệ, Vốn chủ sở hữu, Tổng tài sản, Doanh thu, Lợi nhuận, Doanh thu tư vấn) tuân thủ nghiêm ngặt 100% từ tệp dữ liệu gốc.'
  },
  TIER2_WEBSITE: {
    sourceTier: 'TIER 2',
    sourceName: 'Website & Cổng thông tin dịch vụ chính thức',
    sourceFile: 'data_brocoli - webstie_securities.csv',
    citationLabel: 'Nguồn: Website chính thức & Khảo sát dịch vụ thực tế',
    notes: 'URL chính thức được cung cấp trong danh mục TIER 2, đã đối chiếu và xác thực năng lực phân tích vĩ mô, khuyến nghị cổ phiếu và dịch vụ Ngân hàng đầu tư (IB).'
  },
  TIER3_TAX: {
    sourceTier: 'TIER 3',
    sourceName: 'Báo điện tử Chính Phủ - Top 15 CTCK nộp ngân sách lớn nhất',
    sourceFile: 'data_brocoli - tax2023_2025.csv',
    sourceUrl: 'https://baochinhphu.vn/cong-bo-danh-sach-15-cong-ty-chung-khoan-nop-ngan-sach-lon-nhat-viet-nam-2026-so-thue-dong-gop-lap-ky-luc-14300-ty-dong-102260727090533558.htm',
    citationLabel: 'Nguồn: Báo điện tử Chính Phủ & Dữ liệu nộp ngân sách 2023-2025',
    notes: 'Số liệu nộp ngân sách nhà nước giai đoạn 2023-2025 của 15 công ty chứng khoán hàng đầu.'
  },
  TIER3_UX: {
    sourceTier: 'TIER 3',
    sourceName: 'Tổng hợp đánh giá trải nghiệm ứng dụng & Biểu phí dịch vụ',
    sourceFile: 'data_brocoli - other_sources.csv',
    citationLabel: 'Nguồn: data_brocoli - other_sources & Biểu phí CTCK',
    notes: 'Tham chiếu từ hệ thống bài viết chuyên đề (VPBankS, Finhay, CellphoneS, FPTShop, VFS, KIS) về tính năng ứng dụng giao dịch, biểu phí tự giao dịch, phí môi giới và lãi suất cho vay ký quỹ margin.'
  }
};
