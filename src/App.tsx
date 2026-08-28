import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { ExecutiveSummarySection } from './components/ExecutiveSummarySection';
import { MarketDefinitionSection } from './components/MarketDefinitionSection';
import { QuantitativeSection } from './components/QuantitativeSection';
import { ServiceBenchmarkSection } from './components/ServiceBenchmarkSection';
import { CustomerExperienceSection } from './components/CustomerExperienceSection';
import { StrategicRecommendationsSection } from './components/StrategicRecommendationsSection';
import { SourceProvenanceModal } from './components/SourceProvenanceModal';
import { MethodologyModal } from './components/MethodologyModal';
import { CompanyDeepDiveModal } from './components/CompanyDeepDiveModal';
import { CompanyMaster } from './types';
import { ShieldCheck, FileSpreadsheet, ArrowUp, Database, Sparkles, Building2, CheckCircle2 } from 'lucide-react';
import { PROVENANCE_SOURCES } from './data/provenanceData';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('executive-summary');
  
  // Modals state
  const [isSourceModalOpen, setIsSourceModalOpen] = useState<boolean>(false);
  const [activeSourceKey, setActiveSourceKey] = useState<string>('TIER1_FINANCIAL');
  
  const [isMethodologyModalOpen, setIsMethodologyModalOpen] = useState<boolean>(false);
  
  const [selectedCompany, setSelectedCompany] = useState<CompanyMaster | null>(null);
  const [isDeepDiveOpen, setIsDeepDiveOpen] = useState<boolean>(false);

  const handleOpenSourceModal = (sourceKey: string) => {
    setActiveSourceKey(sourceKey);
    setIsSourceModalOpen(true);
  };

  const handleSelectCompany = (company: CompanyMaster) => {
    setSelectedCompany(company);
    setIsDeepDiveOpen(true);
  };

  // Scroll spy to update active section in header
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'executive-summary',
        'market-definition',
        'quantitative-comparison',
        'service-benchmark',
        'customer-experience',
        'strategic-recommendations'
      ];

      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      {/* Sticky Bento Header */}
      <Header
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        onOpenSourceModal={handleOpenSourceModal}
        onOpenMethodologyModal={() => setIsMethodologyModalOpen(true)}
      />

      {/* Main Bento Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        
        {/* Bento Banner: Source Authority Declaration */}
        <div className="p-4 rounded-xl bg-white border border-slate-200 text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-xs">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-slate-900 text-emerald-400 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                <span className="font-bold text-slate-900 uppercase tracking-wider text-xs">
                  Nguyên Tắc Dữ Liệu Tối Thượng (Data Integrity & Source of Truth)
                </span>
              </div>
              <p className="text-slate-600 mt-0.5 text-[11px]">
                Toàn bộ số liệu định lượng lấy 100% từ BCTC 6T/2026 trong dữ liệu nội bộ (TIER 1). Không ước tính hoặc ngoại suy.
              </p>
            </div>
          </div>
          <button
            onClick={() => handleOpenSourceModal('TIER1_FINANCIAL')}
            className="self-start sm:self-center px-3.5 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-medium text-xs whitespace-nowrap transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
          >
            <Database className="w-3.5 h-3.5 text-blue-400" />
            <span>Mở Cổng Đối Soát Nguồn</span>
          </button>
        </div>

        {/* 5.1 Executive Summary */}
        <div className="bg-white rounded-2xl p-6 sm:p-7 text-slate-900 shadow-xs border border-slate-200">
          <ExecutiveSummarySection
            onOpenSourceModal={handleOpenSourceModal}
            onSelectCompany={handleSelectCompany}
          />
        </div>

        {/* 5.2 Market Definition */}
        <div className="bg-white rounded-2xl p-6 sm:p-7 text-slate-900 shadow-xs border border-slate-200">
          <MarketDefinitionSection
            onOpenSourceModal={handleOpenSourceModal}
          />
        </div>

        {/* 5.3 Quantitative Comparison */}
        <div className="bg-white rounded-2xl p-6 sm:p-7 text-slate-900 shadow-xs border border-slate-200">
          <QuantitativeSection
            onOpenSourceModal={handleOpenSourceModal}
            onSelectCompany={handleSelectCompany}
          />
        </div>

        {/* 5.4 Competitor Service Benchmark */}
        <div className="bg-white rounded-2xl p-6 sm:p-7 text-slate-900 shadow-xs border border-slate-200">
          <ServiceBenchmarkSection
            onOpenSourceModal={handleOpenSourceModal}
            onSelectCompany={handleSelectCompany}
          />
        </div>

        {/* 5.5 Customer Experience, App UX & Service Fees */}
        <div className="bg-white rounded-2xl p-6 sm:p-7 text-slate-900 shadow-xs border border-slate-200">
          <CustomerExperienceSection
            onOpenSourceModal={handleOpenSourceModal}
            onSelectCompany={handleSelectCompany}
          />
        </div>

        {/* 5.6 Strategic Recommendations & AI Adoption */}
        <div className="bg-white rounded-2xl p-6 sm:p-7 text-slate-900 shadow-xs border border-slate-200">
          <StrategicRecommendationsSection
            onOpenSourceModal={handleOpenSourceModal}
          />
        </div>
      </main>

      {/* Corporate Bento Footer */}
      <footer className="bg-white border-t border-slate-200 py-6 text-xs text-slate-500 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center font-bold text-white text-xs">
              BA
            </div>
            <div>
              <p className="font-semibold text-slate-900">Báo Cáo Phân Tích Đối Thủ Cạnh Tranh Ngành Chứng Khoán Việt Nam</p>
              <p className="text-[11px] text-slate-500">Báo Cáo Phân Tích Cạnh Tranh Toàn Diện • Kỳ Dữ Liệu 6T/2026 vs 31/12/2025</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs">
            <span className="inline-flex items-center gap-1.5 text-slate-600">
              <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
              Dữ liệu Tier 1: Xác thực 100%
            </span>
            <button
              onClick={() => handleOpenSourceModal('TIER1_FINANCIAL')}
              className="text-slate-700 hover:text-slate-900 font-medium underline cursor-pointer"
            >
              Nguồn dữ liệu
            </button>
            <button
              onClick={() => setIsMethodologyModalOpen(true)}
              className="text-slate-700 hover:text-slate-900 font-medium underline cursor-pointer"
            >
              Phương pháp luận
            </button>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-slate-900 hover:text-blue-600 font-semibold cursor-pointer"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Lên đầu trang</span>
            </button>
          </div>
        </div>
      </footer>

      {/* Data Provenance Modal */}
      <SourceProvenanceModal
        isOpen={isSourceModalOpen}
        onClose={() => setIsSourceModalOpen(false)}
        initialSourceKey={activeSourceKey}
      />

      {/* Methodology Modal */}
      <MethodologyModal
        isOpen={isMethodologyModalOpen}
        onClose={() => setIsMethodologyModalOpen(false)}
      />

      {/* 360° Company Deep Dive Modal */}
      <CompanyDeepDiveModal
        company={selectedCompany}
        isOpen={isDeepDiveOpen}
        onClose={() => {
          setIsDeepDiveOpen(false);
          setSelectedCompany(null);
        }}
        onOpenSourceModal={handleOpenSourceModal}
      />
    </div>
  );
}
