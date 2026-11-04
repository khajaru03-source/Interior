import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MessageCircle, Expand, ArrowRight } from 'lucide-react';
import {
  PRODUCT_CATEGORIES,
  PRODUCT_GALLERY_ITEMS,
} from '../data/catalog';
import {
  buildCategoryEnquiryUrl,
  buildGeneralEnquiryUrl,
  filterByCategory,
} from '../utils/enquiry';
import { usePageMeta } from '../utils/seo';
import { ResilientImage } from '../components/ResilientImage';
import { Reveal } from '../components/Reveal';
import { LightboxModal } from '../components/LightboxModal';

const GALLERY_FILTERS = [
  { id: 'all', label: 'All Displays' },
  { id: 'interior-hardware', label: 'Interior Hardware' },
  { id: 'kitchen-fittings', label: 'Kitchen Fittings' },
  { id: 'decorative-panels', label: 'Decorative Panels' },
  { id: 'natural-veneers', label: 'Natural Veneers' },
  { id: 'plywood', label: 'Plywood' },
  { id: 'laminates', label: 'Laminates' },
] as const;

export const ProductsPage: React.FC = () => {
  usePageMeta({
    title: 'Our Products — Plywood, Veneers, Hardware & Kitchen Fittings | Interior Boxx',
    description:
      'Explore Plywood, Natural Veneers, Decorative Panels, Kitchen Fittings, Laminates, and Interior Hardware at Interior Boxx in New Hafeezpet, Hyderabad.',
  });

  const location = useLocation();
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredGallery = filterByCategory(PRODUCT_GALLERY_ITEMS, selectedFilter);

  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.replace('#', '');
      const element = document.getElementById(targetId);
      if (element) {
        const timer = window.setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 80);
        return () => window.clearTimeout(timer);
      }
    }
  }, [location.hash]);

  const openCategoryImageInLightbox = (categoryId: string) => {
    setSelectedFilter('all');
    const matchIndex = PRODUCT_GALLERY_ITEMS.findIndex((item) => item.categoryId === categoryId);
    setLightboxIndex(matchIndex >= 0 ? matchIndex : 0);
  };

  return (
    <div className="bg-[#171513] text-[#F4EFE6]">
      {/* PAGE HEADER — Dark Walnut & Champagne Gold */}
      <section className="pt-20 pb-16 md:pt-28 md:pb-20 border-b border-[#C5A16B]/20 bg-gradient-to-b from-[#171513] via-[#1E1B18] to-[#171513]">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2">
              <span className="w-8 h-[1px] bg-[#C5A16B]" />
              <p className="font-editorial italic text-lg sm:text-xl text-[#C5A16B]">
                Our Products &amp; Material Collections
              </p>
            </div>
            <h1 className="font-editorial text-[clamp(2.6rem,5vw,4.2rem)] leading-[1.06] font-medium text-[#F4EFE6] text-balance tracking-tight">
              Curated Surfaces, Substrates &amp; Architectural Fittings.
            </h1>
            <p className="text-base leading-relaxed text-[#DFD7C7] max-w-2xl font-light">
              Browse our six core product categories featuring real displays from our New Hafeezpet
              showroom. Select any category below to enquire directly via WhatsApp for availability
              and in-store viewing.
            </p>
          </div>

          {/* Quick Category Anchor Strip — Clean Architectural Index */}
          <nav
            aria-label="Product categories quick jump"
            className="mt-12 pt-6 border-t border-[#C5A16B]/20 flex items-center gap-6 sm:gap-8 overflow-x-auto pb-2"
          >
            {PRODUCT_CATEGORIES.map((category) => (
              <a
                key={category.id}
                href={`#${category.id}`}
                className="group inline-flex items-baseline gap-2 py-1.5 text-sm font-medium text-[#DFD7C7] hover:text-[#C5A16B] border-b border-transparent hover:border-[#C5A16B] transition-colors whitespace-nowrap shrink-0"
              >
                <span className="font-editorial text-base text-[#C5A16B] tabular-nums">
                  {category.index}.
                </span>
                <span>{category.name}</span>
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* SIX PRODUCT CATEGORIES — BALANCED LUXURY SECTIONS (DARK & WARM IVORY ALTERNATION) */}
      <section aria-label="Product categories" className="divide-y divide-[#C5A16B]/20">
        {PRODUCT_CATEGORIES.map((category, index) => {
          const isEven = index % 2 === 0;
          const whatsappUrl = buildCategoryEnquiryUrl(category.name);

          // Alternating section atmosphere: Dark Matte Black vs Warm Ivory
          const sectionBg = isEven
            ? 'bg-[#171513] text-[#F4EFE6]'
            : 'bg-[#F4EFE6] text-[#171513]';
          const kickerColor = isEven ? 'text-[#C5A16B]' : 'text-[#493426]';
          const titleColor = isEven ? 'text-[#F4EFE6]' : 'text-[#171513]';
          const subtitleColor = isEven ? 'text-[#DFD7C7]' : 'text-[#493426]';
          const descColor = isEven ? 'text-[#DFD7C7]/80' : 'text-[#493426]/85';
          const bulletColor = isEven ? 'text-[#DFD7C7]/90' : 'text-[#171513]';
          const borderTone = isEven ? 'border-[#C5A16B]/25' : 'border-[#DFD7C7]';

          return (
            <div
              key={category.id}
              id={category.id}
              className={`scroll-mt-24 py-20 md:py-28 transition-colors duration-300 ${sectionBg}`}
            >
              <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
                  {/* Image Column with Zoom Hover */}
                  <Reveal
                    className={`lg:col-span-7 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}
                  >
                    {category.secondaryImage ? (
                      <div className="grid grid-cols-12 gap-4 items-stretch">
                        <div className="col-span-7">
                          <button
                            type="button"
                            onClick={() => openCategoryImageInLightbox(category.id)}
                            aria-label={`View ${category.name} display in lightbox`}
                            className="group relative block w-full h-full text-left cursor-pointer overflow-hidden rounded-sm border border-[#C5A16B]/30 shadow-xl"
                          >
                            <ResilientImage
                              src={category.primaryImage}
                              alt={category.imageAlt}
                              enhanceShowroomLighting={category.isAuthenticShowroomPhoto}
                              containerClassName="aspect-[4/5] w-full h-full"
                              className="transition-transform duration-700 group-hover:scale-108"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#171513]/70 via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity" />
                            <span className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#171513]/90 text-[#C5A16B] border border-[#C5A16B]/40 text-xs font-medium rounded-sm group-hover:bg-[#C5A16B] group-hover:text-[#171513] transition-colors">
                              <Expand className="w-3.5 h-3.5" aria-hidden="true" />
                              <span>View Display</span>
                            </span>
                          </button>
                        </div>
                        <div className="col-span-5 flex flex-col justify-between gap-4">
                          <button
                            type="button"
                            onClick={() => {
                              setSelectedFilter('all');
                              const secondaryMatch = PRODUCT_GALLERY_ITEMS.findIndex(
                                (item) => item.image === category.secondaryImage
                              );
                              if (secondaryMatch >= 0) {
                                setLightboxIndex(secondaryMatch);
                              } else {
                                openCategoryImageInLightbox(category.id);
                              }
                            }}
                            aria-label={`Inspect secondary ${category.name} photograph in lightbox`}
                            className="group relative block w-full h-full text-left cursor-pointer overflow-hidden rounded-sm border border-[#C5A16B]/30 shadow-xl"
                          >
                            <ResilientImage
                              src={category.secondaryImage}
                              alt={category.secondaryAlt || category.imageAlt}
                              enhanceShowroomLighting
                              containerClassName="aspect-[4/5] w-full h-full"
                              className="transition-transform duration-700 group-hover:scale-108"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#171513]/70 via-transparent to-transparent opacity-40 group-hover:opacity-10 transition-opacity" />
                          </button>
                        </div>
                      </div>
                    ) : (
                      <button
                        type="button"
                        onClick={() => openCategoryImageInLightbox(category.id)}
                        aria-label={`View ${category.name} display in lightbox`}
                        className="group relative block w-full text-left cursor-pointer overflow-hidden rounded-sm border border-[#C5A16B]/30 shadow-2xl"
                      >
                        <ResilientImage
                          src={category.primaryImage}
                          alt={category.imageAlt}
                          enhanceShowroomLighting={category.isAuthenticShowroomPhoto}
                          containerClassName="aspect-[16/11] w-full"
                          className="transition-transform duration-700 group-hover:scale-108"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#171513]/70 via-transparent to-transparent opacity-50 group-hover:opacity-20 transition-opacity" />
                        <span className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#171513]/90 text-[#C5A16B] border border-[#C5A16B]/40 text-xs font-medium rounded-sm group-hover:bg-[#C5A16B] group-hover:text-[#171513] transition-colors">
                          <Expand className="w-3.5 h-3.5" aria-hidden="true" />
                          <span>View Display</span>
                        </span>
                      </button>
                    )}
                  </Reveal>

                  {/* Copy & Enquiry Column */}
                  <Reveal
                    delay={0.06}
                    className={`lg:col-span-5 space-y-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}
                  >
                    <div className="inline-flex items-center gap-2">
                      <span className={`w-8 h-[1px] ${isEven ? 'bg-[#C5A16B]' : 'bg-[#493426]'}`} />
                      <p className={`font-editorial italic text-lg ${kickerColor} tabular-nums`}>
                        Collection {category.index}
                      </p>
                    </div>

                    <div className="space-y-2">
                      <h2 className={`font-editorial text-3xl sm:text-4xl lg:text-[42px] leading-[1.12] font-medium ${titleColor}`}>
                        {category.name}
                      </h2>
                      <p className={`text-sm font-semibold tracking-wide ${subtitleColor}`}>
                        {category.subtitle}
                      </p>
                    </div>

                    <p className={`text-sm sm:text-[15px] leading-relaxed ${descColor} font-light`}>
                      {category.description}
                    </p>

                    <ul className={`space-y-3 pt-3 border-t ${borderTone} text-sm ${bulletColor}`}>
                      {category.highlights.map((point) => (
                        <li key={point} className="flex items-start gap-3">
                          <span className="text-[#C5A16B] text-base leading-none select-none mt-1" aria-hidden="true">
                            ✦
                          </span>
                          <span className="font-light">{point}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="pt-4 flex flex-wrap items-center gap-4">
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-[#C5A16B] to-[#B38F56] text-[#171513] text-xs sm:text-sm font-semibold tracking-wide rounded-sm shadow-md hover:from-[#DFC28E] hover:to-[#C5A16B] transition-all whitespace-nowrap shrink-0"
                      >
                        <MessageCircle className="w-4 h-4 text-[#171513]" aria-hidden="true" />
                        <span>Enquire About {category.name}</span>
                      </a>

                      <button
                        type="button"
                        onClick={() => openCategoryImageInLightbox(category.id)}
                        className={`inline-flex items-center gap-2 px-4 py-3.5 border ${
                          isEven
                            ? 'border-[#C5A16B]/40 hover:border-[#C5A16B] text-[#F4EFE6] bg-[#1E1B18]'
                            : 'border-[#493426]/30 hover:border-[#493426] text-[#171513] bg-[#F4EFE6]'
                        } text-xs sm:text-sm font-medium rounded-sm transition-colors cursor-pointer whitespace-nowrap shrink-0`}
                      >
                        <Expand className="w-3.5 h-3.5 text-[#C5A16B]" aria-hidden="true" />
                        <span>Inspect Photo</span>
                      </button>
                    </div>
                  </Reveal>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* INTERACTIVE SHOWROOM & PRODUCT GALLERY WITH LIGHTBOX — Dark Gold Atmosphere */}
      <section
        id="showroom-gallery"
        className="scroll-mt-20 py-24 md:py-32 bg-[#1E1B18] border-t border-[#C5A16B]/25"
      >
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
          <Reveal className="space-y-4 max-w-2xl mb-12">
            <div className="inline-flex items-center gap-2">
              <span className="w-8 h-[1px] bg-[#C5A16B]" />
              <p className="font-editorial italic text-lg sm:text-xl text-[#C5A16B]">
                Interactive Lightbox Gallery
              </p>
            </div>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-[44px] leading-[1.14] font-medium text-[#F4EFE6] text-balance">
              Showroom &amp; Material Photographs.
            </h2>
            <p className="text-sm sm:text-base text-[#DFD7C7]/80 leading-relaxed font-light">
              Select any photograph to inspect genuine product details in our full-screen viewer or
              send a direct WhatsApp enquiry for that specific display.
            </p>
          </Reveal>

          {/* Interactive Filter Controls */}
          <div
            role="group"
            aria-label="Filter product gallery by category"
            className="flex items-center gap-2 p-1.5 bg-[#171513] border border-[#C5A16B]/25 rounded-sm overflow-x-auto mb-12"
          >
            {GALLERY_FILTERS.map((filter) => {
              const isActive = selectedFilter === filter.id;
              return (
                <button
                  key={filter.id}
                  type="button"
                  onClick={() => {
                    setSelectedFilter(filter.id);
                    setLightboxIndex(null);
                  }}
                  aria-pressed={isActive}
                  className={`px-4 py-2.5 text-xs font-medium rounded-sm transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                    isActive
                      ? 'bg-gradient-to-r from-[#C5A16B] to-[#B38F56] text-[#171513] font-semibold shadow-md'
                      : 'text-[#DFD7C7] hover:text-[#C5A16B] hover:bg-[#262320]'
                  }`}
                >
                  {filter.label}
                </button>
              );
            })}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredGallery.map((item, idx) => (
              <article
                key={item.id}
                className="group flex flex-col bg-[#171513] border border-[#C5A16B]/20 hover:border-[#C5A16B]/70 rounded-sm overflow-hidden transition-all duration-300 hover:-translate-y-1 shadow-lg"
              >
                <button
                  type="button"
                  onClick={() => setLightboxIndex(idx)}
                  aria-label={`Open ${item.title} in lightbox`}
                  className="relative aspect-[4/4] w-full overflow-hidden text-left cursor-pointer focus-visible:outline-2 focus-visible:outline-[#C5A16B]"
                >
                  <ResilientImage
                    src={item.image}
                    alt={item.alt}
                    enhanceShowroomLighting={item.isShowroomOriginal}
                    containerClassName="w-full h-full"
                    className="transition-transform duration-700 group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#171513]/80 via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity" />
                  <span className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#171513]/90 text-[#C5A16B] border border-[#C5A16B]/40 text-xs font-medium rounded-sm group-hover:bg-[#C5A16B] group-hover:text-[#171513] transition-colors">
                    <Expand className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>Lightbox</span>
                  </span>
                </button>

                <div className="p-7 flex-1 flex flex-col justify-between gap-4">
                  <div className="space-y-2">
                    <p className="text-[11px] font-medium tracking-wide text-[#C5A16B] uppercase">
                      {item.categoryName}
                      {item.isShowroomOriginal ? ' · Showroom Display' : ' · Material Concept'}
                    </p>
                    <h3 className="font-editorial text-2xl font-medium text-[#F4EFE6] group-hover:text-[#C5A16B] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#DFD7C7]/80 leading-relaxed font-light">
                      {item.caption}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#493426]/50 flex items-center justify-between gap-3">
                    <button
                      type="button"
                      onClick={() => setLightboxIndex(idx)}
                      className="text-xs font-medium text-[#DFD7C7] hover:text-[#C5A16B] transition-colors cursor-pointer whitespace-nowrap"
                    >
                      Enlarge Image
                    </button>
                    <a
                      href={buildCategoryEnquiryUrl(item.categoryName, item.title)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#C5A16B] hover:text-[#E0C496] transition-colors whitespace-nowrap"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Enquire</span>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CONSULTATION BANNER */}
      <section className="py-20 md:py-24 bg-gradient-to-r from-[#171513] via-[#493426]/60 to-[#171513] text-[#F4EFE6] border-t border-[#C5A16B]/25">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="space-y-2.5 max-w-xl">
            <h2 className="font-editorial text-2xl sm:text-3xl font-medium text-[#F4EFE6]">
              Looking for a Specific Finish or Hardware Profile?
            </h2>
            <p className="text-sm text-[#DFD7C7]/80 leading-relaxed font-light">
              Send us your requirement list or reference photos on WhatsApp, or visit our New
              Hafeezpet showroom to inspect full-size boards in person.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <a
              href={buildGeneralEnquiryUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-[#C5A16B] to-[#B38F56] text-[#171513] text-sm font-semibold rounded-sm shadow-md hover:from-[#DFC28E] hover:to-[#C5A16B] transition-all whitespace-nowrap"
            >
              <MessageCircle className="w-4 h-4 text-[#171513]" aria-hidden="true" />
              <span>Enquire on WhatsApp</span>
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 border border-[#C5A16B]/50 hover:border-[#C5A16B] bg-[#171513] text-[#F4EFE6] text-sm font-medium rounded-sm transition-colors whitespace-nowrap"
            >
              <span>Showroom Directions</span>
              <ArrowRight className="w-4 h-4 text-[#C5A16B]" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <LightboxModal
        items={filteredGallery}
        activeIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onSelectIndex={setLightboxIndex}
      />
    </div>
  );
};
