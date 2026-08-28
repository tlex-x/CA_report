import React from 'react';
import { Database, ExternalLink, ShieldCheck } from 'lucide-react';
import { PROVENANCE_SOURCES } from '../data/provenanceData';

interface SourceBadgeProps {
  sourceKey: keyof typeof PROVENANCE_SOURCES;
  detail?: string;
  onOpenSourceModal?: (sourceKey: string) => void;
  className?: string;
}

export const SourceBadge: React.FC<SourceBadgeProps> = ({
  sourceKey,
  detail,
  onOpenSourceModal,
  className = ''
}) => {
  const source = PROVENANCE_SOURCES[sourceKey] || PROVENANCE_SOURCES.TIER1_FINANCIAL;

  return (
    <div className={`inline-flex items-center gap-1.5 text-xs text-slate-600 bg-slate-100/90 border border-slate-200 px-3 py-1 rounded-md transition-colors ${className}`}>
      <span className="inline-flex items-center gap-1.5 font-medium text-slate-700">
        <span className="w-2 h-2 bg-emerald-500 rounded-full shrink-0"></span>
        <span className="text-[10px] font-bold tracking-wider uppercase px-1.5 py-0.5 rounded bg-white text-slate-800 border border-slate-200">
          {source.sourceTier}
        </span>
        <span className="text-xs">{detail ? `${source.citationLabel} • ${detail}` : source.citationLabel}</span>
      </span>

      {onOpenSourceModal && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onOpenSourceModal(sourceKey);
          }}
          className="ml-1 inline-flex items-center gap-1 text-slate-900 hover:text-blue-600 font-semibold text-[11px] cursor-pointer"
          title="Xem nguồn dữ liệu & kiểm tra đối soát"
        >
          <Database className="w-3 h-3 text-blue-600" />
          <span>Đối soát</span>
        </button>
      )}
    </div>
  );
};
