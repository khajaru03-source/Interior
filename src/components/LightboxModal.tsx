import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react';
import { GalleryItem } from '../data/catalog';
import { buildCategoryEnquiryUrl, getAdjacentIndex } from '../utils/enquiry';

interface LightboxModalProps {
  items: readonly GalleryItem[];
  activeIndex: number | null;
  onClose: () => void;
  onSelectIndex: (index: number) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  items,
  activeIndex,
  onClose,
  onSelectIndex,
}) => {
  const isOpen = activeIndex !== null && activeIndex >= 0 && activeIndex < items.length;

  useEffect(() => {
    if (!isOpen || activeIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      } else if (event.key === 'ArrowRight') {
        onSelectIndex(getAdjacentIndex(activeIndex, items.length, 'next'));
      } else if (event.key === 'ArrowLeft') {
        onSelectIndex(getAdjacentIndex(activeIndex, items.length, 'prev'));
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, activeIndex, items.length, onClose, onSelectIndex]);

  if (!isOpen || activeIndex === null) {
    return null;
  }

  const currentItem = items[activeIndex];
  const enquiryHref = buildCategoryEnquiryUrl(currentItem.categoryName, currentItem.title);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="lightbox-item-title"
      className="fixed inset-0 z-50 bg-[#141210]/95 backdrop-blur-sm flex flex-col justify-between p-4 sm:p-6 md:p-8"
      onClick={onClose}
    >
      {/* Top Bar */}
      <div
        className="max-w-[1280px] w-full mx-auto flex items-center justify-between gap-4 text-[#FAF7F2]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="text-xs tracking-[0.12em] uppercase text-[#C4A478] tabular-nums">
          <span>{currentItem.categoryName}</span>
          <span className="mx-2 text-[#6E655C]" aria-hidden="true">
            &middot;
          </span>
          <span>
            {activeIndex + 1} / {items.length}
          </span>
        </div>

        <button
          type="button"
          onClick={onClose}
          aria-label="Close gallery lightbox"
          className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-medium text-[#FAF7F2] bg-[#292522] hover:bg-[#432E20] rounded-sm transition-colors cursor-pointer whitespace-nowrap"
        >
          <span>Close</span>
          <X className="w-4 h-4" aria-hidden="true" />
        </button>
      </div>

      {/* Main Image Area */}
      <div
        className="relative flex-1 min-h-0 max-w-[1160px] w-full mx-auto my-4 flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        {items.length > 1 && (
          <button
            type="button"
            onClick={() => onSelectIndex(getAdjacentIndex(activeIndex, items.length, 'prev'))}
            aria-label="Previous gallery image"
            className="absolute left-0 sm:left-2 z-10 w-11 h-11 inline-flex items-center justify-center bg-[#1C1917]/85 hover:bg-[#432E20] text-[#FAF7F2] border border-[#3E3731] rounded-sm transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" aria-hidden="true" />
          </button>
        )}

        <img
          src={currentItem.image}
          alt={currentItem.alt}
          referrerPolicy="no-referrer"
          className="max-h-[64vh] md:max-h-[68vh] max-w-full w-auto object-contain rounded-sm shadow-2xl brightness-[1.02] contrast-[1.02]"
        />

        {items.length > 1 && (
          <button
            type="button"
            onClick={() => onSelectIndex(getAdjacentIndex(activeIndex, items.length, 'next'))}
            aria-label="Next gallery image"
            className="absolute right-0 sm:right-2 z-10 w-11 h-11 inline-flex items-center justify-center bg-[#1C1917]/85 hover:bg-[#432E20] text-[#FAF7F2] border border-[#3E3731] rounded-sm transition-colors cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" aria-hidden="true" />
          </button>
        )}
      </div>

      {/* Caption & Enquiry Bar */}
      <div
        className="max-w-[1040px] w-full mx-auto pt-4 border-t border-[#2E2925] flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-[#FAF7F2]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="space-y-1 max-w-2xl">
          <h3 id="lightbox-item-title" className="font-editorial text-xl sm:text-2xl font-medium">
            {currentItem.title}
          </h3>
          <p className="text-xs sm:text-sm text-[#B8AFA4] leading-relaxed">{currentItem.caption}</p>
        </div>

        <a
          href={enquiryHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#8C6D46] hover:bg-[#A38258] text-[#FAF7F2] text-xs sm:text-sm font-medium rounded-sm transition-colors whitespace-nowrap shrink-0"
        >
          <MessageCircle className="w-4 h-4" aria-hidden="true" />
          <span>Enquire About This Display</span>
        </a>
      </div>
    </div>
  );
};
