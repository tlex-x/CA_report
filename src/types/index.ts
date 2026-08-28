export interface FinancialRecord {
  // Raw VND
  equity2026H1: number;
  equity2025Dec: number;
  charterCapital2026H1: number;
  charterCapital2025Dec: number;
  totalAssets2026H1: number;
  totalAssets2025Dec: number;
  operatingRevenue2026H1: number;
  operatingRevenue2025H1: number;
  advisoryInvestmentRevenue2026H1: number | null; // DT tư vấn đầu tư CK
  advisoryInvestmentRevenue2025H1: number | null;
  financialConsultingRevenue2026H1: number | null; // DT tư vấn tài chính
  financialConsultingRevenue2025H1: number | null;
  profitBeforeTax2026H1: number; // LNTT
  profitBeforeTax2025H1: number;
  profitAfterTax2026H1: number | null; // LNST
  profitAfterTax2025H1: number | null;

  // Normalized Billion VND (Tỷ VND) for charts & display
  equity2026H1_B: number;
  equity2025Dec_B: number;
  charterCapital2026H1_B: number;
  charterCapital2025Dec_B: number;
  totalAssets2026H1_B: number;
  totalAssets2025Dec_B: number;
  operatingRevenue2026H1_B: number;
  operatingRevenue2025H1_B: number;
  advisoryInvestmentRevenue2026H1_B: number | null;
  advisoryInvestmentRevenue2025H1_B: number | null;
  financialConsultingRevenue2026H1_B: number | null;
  financialConsultingRevenue2025H1_B: number | null;
  profitBeforeTax2026H1_B: number;
  profitBeforeTax2025H1_B: number;
  profitAfterTax2026H1_B: number | null;
  profitAfterTax2025H1_B: number | null;

  // Calculated Growth Metrics
  charterCapitalGrowthPct: number;
  totalAssetsGrowthPct: number;
  operatingRevenueGrowthPct: number;
  profitBeforeTaxGrowthPct: number;
  profitAfterTaxGrowthPct: number | null;
  annualizedROE2026H1_Pct: number; // (LNST * 2 / VCSH) * 100
  annualizedROA2026H1_Pct: number; // (LNST * 2 / TTS) * 100
}

export interface TaxContributionRecord {
  sttRank2026: number;
  companyName: string;
  tax2023_B: number;
  tax2024_B: number;
  tax2025_B: number;
  taxGrowth2023_2025_Pct: number;
  note?: string;
}

export interface ServiceCapability {
  macroResearch: boolean; // Báo cáo kinh tế vĩ mô & chiến lược
  macroResearchNote: string;
  industryAnalysis: boolean; // Phân tích ngành chuyên sâu
  industryAnalysisNote: string;
  stockRecommendations: boolean; // Khuyến nghị cổ phiếu & Danh mục mẫu
  stockRecommendationsNote: string;
  investmentBanking: boolean; // Dịch vụ Ngân hàng đầu tư (ECM, DCM, M&A)
  ibCapabilitiesNote: string;
  wealthManagement: boolean; // Phân phối trái phiếu, chứng chỉ quỹ, tài sản số
  wealthNote: string;
  zeroFeeModel: boolean; // Chính sách Zero-Fee giao dịch
}

export interface FeeStructureRecord {
  selfTradingFeePct: number; // e.g. 0.0, 0.08, 0.1, 0.12
  selfTradingFeeDesc: string; // e.g. "0.00% (Zero-Fee trọn đời)" or "0.10% - 0.15%"
  brokerTradingFeeDesc: string; // e.g. "0.15% - 0.25%" or "Không áp dụng"
  marginRateMinPct: number; // e.g. 5.99
  marginRateStandardPct: number; // e.g. 11.5
  derivativesFeeDesc: string; // e.g. "0đ/HĐ" or "1.000đ/HĐ"
  advanceWithdrawalFeeDesc: string; // e.g. "0.033%/ngày (~12%/năm)"
  feePolicyType: 'Zero-Fee Disruptor' | 'Tiered / Low-Fee' | 'Standard Full-Service' | 'Institutional Premium';
  keyFeeHighlight: string;
  sourceRef: string;
}

export interface AppExperienceRecord {
  appName: string;
  platformType: string;
  starRating: number; // 1 to 5
  ratingCountDesc: string;
  strengths: string[];
  limitations: string[];
  keyFeatures: string[];
}

export interface CompanyMaster {
  id: string; // Ticker or key
  ticker: string;
  legalName: string;
  brandName: string;
  websiteUrl: string;
  financials: FinancialRecord;
  services: ServiceCapability;
  appUX: AppExperienceRecord;
  feeStructure: FeeStructureRecord;
  taxData?: TaxContributionRecord;
  tier1RowIndex: number;
  strategicCluster: 'Top Big-4 Balance Sheet' | 'Bank-backed Powerhouse' | 'Retail & Digital Disruptor' | 'Institutional Specialist' | 'Mid-Tier Boutique';
  keyDifferentiator: string;
  strategicNote: string;
}

export interface ProvenanceCitation {
  sourceTier: 'TIER 1' | 'TIER 2' | 'TIER 3';
  sourceName: string;
  sourceFile: string;
  sourceUrl?: string;
  citationLabel: string;
  notes: string;
}
