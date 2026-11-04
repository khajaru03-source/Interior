import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle, Expand, Sparkles, MapPin } from 'lucide-react';
import { motion } from 'motion/react';
import {
  ARCHITECTURAL_IMAGERY,
  SHOWROOM_PHOTOS,
  PRODUCT_CATEGORIES,
  PRODUCT_GALLERY_ITEMS,
} from '../data/catalog';
import {
  BUSINESS_INFO,
  buildGeneralEnquiryUrl,
  buildCategoryEnquiryUrl,
} from '../utils/enquiry';
import { usePageMeta } from '../utils/seo';
import { ResilientImage } from '../components/ResilientImage';
import { Reveal } from '../components/Reveal';
import { LightboxModal } from '../components/LightboxModal';

const WHY_EXPLORE_POINTS = [
  {
    number: '01',
    title: 'Curated Multi-Category Variety',
    description:
      'Evaluate structural plywood, natural wood veneers, decorative wall panels, laminates, modular kitchen fittings, and architectural hardware within one coordinated showroom.',
  },
  {
    number: '02',
    title: 'Cohesive Material Pairing',
    description:
      'Compare timber grains, matte surface finishes, and metallic hardware tones side by side under showroom lighting to achieve balanced residential and commercial interiors.',
  },
  {
    number: '03',
    title: 'Direct Enquiry & Showroom Support',
    description:
      'Connect directly with our Hyderabad showroom team by phone, WhatsApp, or in-person visit to discuss material selections for single rooms or complete interior projects.',
  },
] as const;

const FEATURED_SHOWROOM_INDEXES = [0, 2, 1, 3] as const;

export const HomePage: React.FC = () => {
  usePageMeta({
    title: 'Interior Boxx — Luxury Architectural Hardware, Plywood & Veneers in Hyderabad',
    description:
      'Where Beautiful Spaces Begin. Explore curated interior hardware, plywood, veneers, decorative panels, kitchen fittings, and laminates at Interior Boxx in New Hafeezpet, Hyderabad.',
  });

  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const featuredItems = FEATURED_SHOWROOM_INDEXES.map((idx) => PRODUCT_GALLERY_ITEMS[idx]);

  return (
    <div className="bg-[#171513] text-[#F4EFE6]">
      {/* HERO SECTION — Cinematic Luxury Interior */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-[#171513]">
        {/* Parallax Background Visual */}
        <motion.div
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0"
        >
          <ResilientImage
            src={ARCHITECTURAL_IMAGERY.heroInterior}
            alt="Luxury modern interior featuring floor-to-ceiling walnut veneer cabinetry, fluted wooden wall panels, and warm travertine flooring"
            loading="eager"
            containerClassName="w-full h-full"
            className="w-full h-full object-cover object-center brightness-[0.88] contrast-[1.05]"
          />
          {/* Multi-layered cinematic gradient overlays */}
          <div
            className="absolute inset-0 bg-gradient-to-r from-[#171513] via-[#171513]/75 to-transparent"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-[#171513] via-transparent to-[#171513]/60"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 bg-[radial-gradient(circle_at_20%_40%,rgba(197,161,107,0.12),transparent_70%)]"
            aria-hidden="true"
          />
        </motion.div>

        <div className="relative z-10 max-w-[1280px] w-full mx-auto px-5 sm:px-8 lg:px-12 py-28 md:py-36">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl space-y-7"
          >
            <div className="text-[#C5A16B] text-sm sm:text-base font-medium tracking-wide">
              New Hafeezpet, Hyderabad &middot; {BUSINESS_INFO.rating} / {BUSINESS_INFO.ratingScale} Rated Showroom
            </div>

            <h1 className="font-editorial text-[clamp(3.2rem,6vw,5.5rem)] leading-[1.04] font-normal text-white text-balance tracking-tight">
              Where Beautiful <br />
              Spaces Begin.
            </h1>

            <p className="text-base sm:text-lg leading-relaxed text-[#DFD7C7] max-w-2xl font-light">
              Interior Boxx brings together thoughtfully selected plywood, natural veneers,
              decorative panels, modular kitchen fittings, laminates, and architectural hardware for
              refined homes and contemporary workspaces.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                to="/products"
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#FAF7F2] text-[#171513] text-sm font-semibold tracking-wide rounded-sm hover:bg-white shadow-[0_4px_20px_rgba(0,0,0,0.35)] transition-all duration-200 whitespace-nowrap shrink-0"
              >
                <span>Explore Our Collection</span>
                <ArrowRight className="w-4 h-4 text-[#171513] group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/70 text-white text-sm font-medium tracking-wide rounded-sm hover:bg-white/10 hover:border-white transition-all duration-200 whitespace-nowrap shrink-0"
              >
                <span>Contact Us</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* A. INTRODUCTION — Balanced Warm Dark & Walnut Composition */}
      <section className="py-24 md:py-32 border-b border-[#C5A16B]/20 bg-gradient-to-b from-[#171513] to-[#1E1B18] relative">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <Reveal className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2">
                <span className="w-8 h-[1px] bg-[#C5A16B]" />
                <p className="font-editorial italic text-lg sm:text-xl text-[#C5A16B]">
                  About Interior Boxx
                </p>
              </div>
              <h2 className="font-editorial text-3xl sm:text-4xl lg:text-[44px] leading-[1.14] font-medium text-[#F4EFE6] text-balance">
                A Material Destination Designed Around Tactile Clarity.
              </h2>
              <p className="text-[15px] sm:text-base leading-relaxed text-[#DFD7C7]/90 font-light">
                Every memorable interior begins with honest, enduring materials—the warmth of
                natural timber grain, the quiet precision of a cabinet fitting, and the sculptural
                presence of architectural hardware. Located in New Hafeezpet, Hyderabad, Interior
                Boxx invites homeowners, interior designers, and builders to explore full-scale
                displays in a calm, unhurried environment.
              </p>
              <p className="text-[15px] sm:text-base leading-relaxed text-[#DFD7C7]/90 font-light">
                From foundational plywood substrates and expressive laminates to bespoke main-door
                pull handles and modular kitchen accessories, our showroom makes material selection
                effortless and cohesive.
              </p>
              <div className="pt-2">
                <Link
                  to="/about"
                  className="group inline-flex items-center gap-2 text-sm font-semibold text-[#C5A16B] hover:text-[#E0C496] transition-colors whitespace-nowrap"
                >
                  <span>Read Our Story</span>
                  <ArrowRight className="w-4 h-4 text-[#C5A16B] group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.08} className="lg:col-span-6">
              <div className="grid grid-cols-12 gap-4 items-end">
                <div className="col-span-7">
                  <div className="relative group overflow-hidden rounded-sm border border-[#C5A16B]/30 shadow-2xl">
                    <ResilientImage
                      src={SHOWROOM_PHOTOS.experienceLounge}
                      alt="Interior Boxx showroom consultation lounge with walnut slatted ceiling and hardware boards"
                      enhanceShowroomLighting
                      containerClassName="aspect-[3/4]"
                      className="transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#171513]/70 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
                  </div>
                </div>
                <div className="col-span-5 space-y-4">
                  <div className="relative group overflow-hidden rounded-sm border border-[#C5A16B]/30 shadow-2xl">
                    <ResilientImage
                      src={SHOWROOM_PHOTOS.facadeAngle}
                      alt="Interior Boxx multi-storey showroom facade in New Hafeezpet, Hyderabad"
                      enhanceShowroomLighting
                      containerClassName="aspect-[3/4]"
                      className="transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#171513]/70 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
                  </div>
                  <div className="p-5 bg-[#493426]/40 border border-[#C5A16B]/25 rounded-sm backdrop-blur-sm">
                    <p className="font-editorial text-xl font-medium text-[#F4EFE6]">
                      Multi-Floor Display
                    </p>
                    <p className="text-xs text-[#DFD7C7]/80 mt-1.5 leading-relaxed">
                      Subashchandrabose Nagar, New Hafeezpet, Hyderabad
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* B. EXPLORE OUR COLLECTION — Rich Walnut & Ivory Contrast */}
      <section className="py-24 md:py-32 bg-[#493426]/15 border-b border-[#C5A16B]/20 relative">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
          <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2">
                <span className="w-8 h-[1px] bg-[#C5A16B]" />
                <p className="font-editorial italic text-lg sm:text-xl text-[#C5A16B]">
                  Explore Our Collection
                </p>
              </div>
              <h2 className="font-editorial text-3xl sm:text-4xl lg:text-[44px] leading-[1.14] font-medium text-[#F4EFE6] text-balance">
                Six Essential Disciplines of Interior Craft.
              </h2>
            </div>
            <Link
              to="/products"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-[#C5A16B] hover:text-[#E0C496] transition-colors whitespace-nowrap shrink-0"
            >
              <span>View Full Catalogue</span>
              <ArrowRight className="w-4 h-4 text-[#C5A16B] group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </Link>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PRODUCT_CATEGORIES.map((category, idx) => (
              <Reveal key={category.id} delay={idx * 0.05}>
                <article className="group h-full flex flex-col bg-[#1E1B18] border border-[#C5A16B]/25 hover:border-[#C5A16B]/70 rounded-sm overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(0,0,0,0.5)]">
                  <Link
                    to={`/products#${category.id}`}
                    className="block relative aspect-[4/3] overflow-hidden"
                  >
                    <ResilientImage
                      src={category.primaryImage}
                      alt={category.imageAlt}
                      enhanceShowroomLighting={category.isAuthenticShowroomPhoto}
                      containerClassName="w-full h-full"
                      className="transition-transform duration-700 group-hover:scale-108"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1E1B18] via-transparent to-transparent opacity-50 group-hover:opacity-20 transition-opacity" />
                    <span className="absolute top-3.5 right-3.5 px-2.5 py-1 bg-[#171513]/85 text-[#C5A16B] border border-[#C5A16B]/30 text-xs font-editorial font-medium rounded-sm">
                      {category.index}
                    </span>
                  </Link>

                  <div className="flex-1 p-7 flex flex-col justify-between gap-6">
                    <div className="space-y-2.5">
                      <p className="text-xs font-medium text-[#C5A16B] tracking-wide uppercase">
                        Collection &middot; {category.index}
                      </p>
                      <h3 className="font-editorial text-2xl font-medium text-[#F4EFE6] group-hover:text-[#C5A16B] transition-colors">
                        <Link to={`/products#${category.id}`}>
                          {category.homeTitle}
                        </Link>
                      </h3>
                      <p className="text-sm text-[#DFD7C7]/80 leading-relaxed font-light">
                        {category.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-[#493426]/50 flex items-center justify-between gap-4">
                      <Link
                        to={`/products#${category.id}`}
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-[#DFD7C7] hover:text-[#C5A16B] transition-colors whitespace-nowrap"
                      >
                        <span>Explore Category</span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#C5A16B]" aria-hidden="true" />
                      </Link>

                      <a
                        href={buildCategoryEnquiryUrl(category.name)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-semibold text-[#C5A16B] hover:text-[#E0C496] transition-colors whitespace-nowrap"
                      >
                        Enquire
                      </a>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* C. WHY EXPLORE INTERIOR BOXX — Warm Ivory Section for Contrast Balance */}
      <section className="py-24 md:py-32 bg-[#F4EFE6] text-[#171513] border-b border-[#DFD7C7] relative">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
          <Reveal className="max-w-2xl space-y-3 mb-16">
            <div className="inline-flex items-center gap-2">
              <span className="w-8 h-[1px] bg-[#493426]" />
              <p className="font-editorial italic text-lg sm:text-xl text-[#493426]">
                Why Explore Interior Boxx
              </p>
            </div>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-[44px] leading-[1.14] font-medium text-[#171513] text-balance">
              Thoughtful Material Selection, Simplified for Your Space.
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 pt-8 border-t border-[#DFD7C7]">
            {WHY_EXPLORE_POINTS.map((point, index) => (
              <Reveal key={point.number} delay={index * 0.05} className="space-y-4">
                <span className="block font-editorial text-3xl font-medium text-[#C5A16B] tabular-nums">
                  {point.number}.
                </span>
                <h3 className="text-xl font-semibold text-[#171513]">{point.title}</h3>
                <p className="text-sm leading-relaxed text-[#493426]/80 font-normal">{point.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* D. FEATURED PRODUCT VISUALS (AUTHENTIC SHOWROOM GALLERY) */}
      <section className="py-24 md:py-32 bg-[#171513]">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
          <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2">
                <span className="w-8 h-[1px] bg-[#C5A16B]" />
                <p className="font-editorial italic text-lg sm:text-xl text-[#C5A16B]">
                  Showroom Visuals
                </p>
              </div>
              <h2 className="font-editorial text-3xl sm:text-4xl lg:text-[44px] leading-[1.14] font-medium text-[#F4EFE6] text-balance">
                Inside Our Display Galleries.
              </h2>
              <p className="text-sm sm:text-base text-[#DFD7C7]/80 font-light">
                Actual photographs from the Interior Boxx showroom showcasing architectural pull
                handles, modular kitchen systems, sliding lever panels, and artisanal brass motifs.
              </p>
            </div>
            <Link
              to="/products#showroom-gallery"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-[#C5A16B] hover:text-[#E0C496] transition-colors whitespace-nowrap shrink-0"
            >
              <span>Open Full Gallery</span>
              <ArrowRight className="w-4 h-4 text-[#C5A16B] group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </Link>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredItems.map((item, idx) => (
              <Reveal key={item.id} delay={idx * 0.05}>
                <div className="group flex flex-col h-full border border-[#C5A16B]/25 hover:border-[#C5A16B]/70 bg-[#1E1B18] rounded-sm overflow-hidden transition-all duration-300 hover:-translate-y-1 shadow-lg">
                  <button
                    type="button"
                    onClick={() => setLightboxIndex(idx)}
                    aria-label={`Inspect ${item.title} in full-screen lightbox`}
                    className="relative aspect-[3/4] w-full overflow-hidden text-left cursor-pointer focus-visible:outline-2 focus-visible:outline-[#C5A16B]"
                  >
                    <ResilientImage
                      src={item.image}
                      alt={item.alt}
                      enhanceShowroomLighting={item.isShowroomOriginal}
                      containerClassName="w-full h-full"
                      className="transition-transform duration-700 group-hover:scale-108"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#171513]/80 via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity" />
                    <span className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#171513]/90 text-[#C5A16B] border border-[#C5A16B]/40 text-[11px] font-medium rounded-sm group-hover:bg-[#C5A16B] group-hover:text-[#171513] transition-colors">
                      <Expand className="w-3 h-3" aria-hidden="true" />
                      <span>Inspect</span>
                    </span>
                  </button>

                  <div className="p-6 flex-1 flex flex-col justify-between gap-4">
                    <div>
                      <p className="text-[11px] font-medium text-[#C5A16B] uppercase tracking-wider">
                        {item.categoryName}
                      </p>
                      <h3 className="font-editorial text-xl font-medium text-[#F4EFE6] mt-1.5 group-hover:text-[#C5A16B] transition-colors">
                        {item.title}
                      </h3>
                    </div>
                    <a
                      href={buildCategoryEnquiryUrl(item.categoryName, item.title)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#C5A16B] hover:text-[#E0C496] transition-colors whitespace-nowrap pt-3 border-t border-[#493426]/40"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-[#C5A16B]" />
                      <span>Enquire via WhatsApp</span>
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* E. FINAL CTA — Luxurious Dark Walnut & Gold */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-[#1E1B18] to-[#171513] text-[#F4EFE6] border-t border-[#C5A16B]/25 relative overflow-hidden">
        {/* Subtle radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#C5A16B]/10 blur-3xl pointer-events-none rounded-full" />

        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
          <Reveal className="max-w-3xl mx-auto text-center space-y-7">
            <div className="inline-flex items-center gap-2">
              <span className="w-8 h-[1px] bg-[#C5A16B]" />
              <p className="font-editorial italic text-lg sm:text-xl text-[#C5A16B]">
                Plan Your Visit or Enquiry
              </p>
              <span className="w-8 h-[1px] bg-[#C5A16B]" />
            </div>
            <h2 className="font-editorial text-3xl sm:text-5xl lg:text-6xl leading-[1.08] font-medium text-balance tracking-tight">
              Let&rsquo;s Create <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4EFE6] via-[#E0C496] to-[#C5A16B]">
                Something Beautiful.
              </span>
            </h2>
            <p className="text-sm sm:text-base text-[#DFD7C7]/90 max-w-xl mx-auto leading-relaxed font-light">
              Share your interior material list on WhatsApp or visit our New Hafeezpet showroom in
              Hyderabad to explore finishes in person.
            </p>
            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <a
                href={buildGeneralEnquiryUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-8 py-4 bg-gradient-to-r from-[#C5A16B] to-[#B38F56] text-[#171513] text-sm font-semibold rounded-sm shadow-[0_4px_24px_rgba(197,161,107,0.35)] hover:shadow-[0_6px_32px_rgba(197,161,107,0.5)] transition-all whitespace-nowrap shrink-0"
              >
                <MessageCircle className="w-4 h-4 text-[#171513]" aria-hidden="true" />
                <span>WhatsApp Enquiry</span>
              </a>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 border border-[#C5A16B]/50 bg-[#171513] text-[#F4EFE6] text-sm font-medium rounded-sm hover:bg-[#493426] hover:border-[#C5A16B] transition-all whitespace-nowrap shrink-0"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-4 h-4 text-[#C5A16B]" aria-hidden="true" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <LightboxModal
        items={featuredItems}
        activeIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onSelectIndex={setLightboxIndex}
      />
    </div>
  );
};
