import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle, MapPin } from 'lucide-react';
import {
  SHOWROOM_PHOTOS,
  ARCHITECTURAL_IMAGERY,
  PRODUCT_CATEGORIES,
} from '../data/catalog';
import { BUSINESS_INFO, buildGeneralEnquiryUrl } from '../utils/enquiry';
import { usePageMeta } from '../utils/seo';
import { ResilientImage } from '../components/ResilientImage';
import { Reveal } from '../components/Reveal';

const DESIGN_APPROACH_PILLARS = [
  {
    index: '01',
    title: 'Seeing Materials in Full Scale',
    body: 'Small digital swatches rarely capture the subtle warmth of natural wood veneer, the relief of a brass door motif, or the balance of a long entrance pull handle. Our multi-floor showroom is arranged around full-height display panels and working kitchen setups so you can judge proportion and texture accurately.',
  },
  {
    index: '02',
    title: 'Harmonious Surface & Hardware Pairing',
    body: 'Great interiors rely on quiet continuity between substrates, surfaces, and touchpoints. Because we house plywood, veneers, laminates, decorative panels, kitchen fittings, and architectural hardware under one roof, homeowners and designers can compose an entire room palette at a single table.',
  },
  {
    index: '03',
    title: 'Clear, Straightforward Consultations',
    body: 'Whether you are selecting handles for a single main door or coordinating materials across an entire residence or office in Hyderabad, we focus on practical guidance, honest product comparisons, and responsive WhatsApp and showroom support.',
  },
] as const;

export const AboutPage: React.FC = () => {
  usePageMeta({
    title: 'About Us — Interior Boxx Architectural Materials Showroom, Hyderabad',
    description:
      'Learn about Interior Boxx in New Hafeezpet, Hyderabad—our curated approach to interior hardware, plywood, natural veneers, decorative panels, kitchen fittings, and laminates.',
  });

  return (
    <div className="bg-[#171513] text-[#F4EFE6]">
      {/* EDITORIAL HERO / BRAND STORY — Dark Walnut & Gold */}
      <section className="py-20 md:py-28 border-b border-[#C5A16B]/20 bg-gradient-to-b from-[#171513] via-[#1E1B18] to-[#171513]">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <Reveal className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2">
                <span className="w-8 h-[1px] bg-[#C5A16B]" />
                <p className="font-editorial italic text-lg sm:text-xl text-[#C5A16B]">
                  About Interior Boxx
                </p>
              </div>
              <h1 className="font-editorial text-[clamp(2.5rem,4.8vw,4.2rem)] leading-[1.08] font-medium text-[#F4EFE6] text-balance tracking-tight">
                Bringing Essential Interior Materials Together Under One Roof.
              </h1>
              <p className="text-base leading-relaxed text-[#DFD7C7] font-light">
                Situated in Subashchandrabose Nagar, New Hafeezpet, Hyderabad, Interior Boxx is a
                dedicated architectural interior materials showroom created for homeowners,
                architects, interior designers, and turnkey contractors who value tactile quality
                and cohesive design.
              </p>
              <p className="text-base leading-relaxed text-[#DFD7C7] font-light">
                Rather than piecing together interior elements across scattered stores, visitors to
                Interior Boxx can walk through dedicated display zones spanning foundational plywood,
                natural veneers, sculptural decorative panels, functional modular kitchen fittings,
                contemporary laminates, and statement door and cabinet hardware.
              </p>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#493426]/40 border border-[#C5A16B]/30 rounded-sm">
                <span className="w-2 h-2 rounded-full bg-[#C5A16B]" />
                <p className="text-xs font-medium text-[#E0C496] tabular-nums">
                  {BUSINESS_INFO.rating} / {BUSINESS_INFO.ratingScale} Showroom Rating &middot;{' '}
                  {BUSINESS_INFO.shortLocation}
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.08} className="lg:col-span-6">
              <div className="grid grid-cols-12 gap-4 items-stretch">
                <div className="col-span-7 min-w-0">
                  <div className="overflow-hidden rounded-sm border border-[#C5A16B]/30 shadow-2xl h-full">
                    <ResilientImage
                      src={SHOWROOM_PHOTOS.facadeAngle}
                      alt="Interior Boxx multi-level showroom building in New Hafeezpet, Hyderabad"
                      enhanceShowroomLighting
                      containerClassName="w-full h-full min-h-[340px]"
                      className="transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                </div>
                <div className="col-span-5 flex flex-col gap-4">
                  <div className="overflow-hidden rounded-sm border border-[#C5A16B]/30 shadow-xl">
                    <ResilientImage
                      src={SHOWROOM_PHOTOS.slidingLeverGallery}
                      alt="Sliding wooden display panels of architectural door handles inside Interior Boxx"
                      enhanceShowroomLighting
                      containerClassName="aspect-[3/4]"
                      className="transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                  <div className="flex-1 p-5 bg-[#493426]/35 border border-[#C5A16B]/25 rounded-sm flex flex-col justify-center backdrop-blur-sm">
                    <p className="font-editorial text-xl font-medium text-[#F4EFE6]">
                      Experience In Person
                    </p>
                    <p className="text-xs text-[#DFD7C7]/80 mt-1.5 leading-relaxed font-light">
                      Full-height sliding boards, working kitchen fittings, and dedicated lounge
                      seating for calm material evaluation.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* OUR APPROACH TO INTERIOR MATERIALS & DESIGN — Warm Ivory Balance */}
      <section className="py-24 md:py-32 border-b border-[#DFD7C7] bg-[#F4EFE6] text-[#171513]">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <Reveal className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2">
                <span className="w-8 h-[1px] bg-[#493426]" />
                <p className="font-editorial italic text-lg sm:text-xl text-[#493426]">
                  Our Philosophy
                </p>
              </div>
              <h2 className="font-editorial text-3xl sm:text-4xl lg:text-[44px] leading-[1.14] font-medium text-[#171513] text-balance">
                Our Approach to Interior Materials &amp; Design.
              </h2>
              <p className="text-sm sm:text-base leading-relaxed text-[#493426]/85 font-normal">
                Every space has its own architectural rhythm, lighting condition, and daily usage
                demands. We curate materials that balance visual refinement with everyday
                dependability.
              </p>
              <div className="overflow-hidden rounded-sm border border-[#DFD7C7] shadow-xl mt-6">
                <ResilientImage
                  src={SHOWROOM_PHOTOS.experienceLounge}
                  alt="Client consultation lounge and cabinet hardware display wall inside Interior Boxx"
                  enhanceShowroomLighting
                  containerClassName="aspect-[4/3]"
                  className="transition-transform duration-700 hover:scale-105"
                />
              </div>
            </Reveal>

            <div className="lg:col-span-7 divide-y divide-[#DFD7C7] border-t border-b border-[#DFD7C7]">
              {DESIGN_APPROACH_PILLARS.map((pillar, idx) => (
                <Reveal key={pillar.index} delay={idx * 0.05} className="py-8 space-y-3">
                  <div className="flex items-baseline gap-3">
                    <span className="font-editorial text-2xl text-[#C5A16B] tabular-nums font-medium">
                      {pillar.index}.
                    </span>
                    <h3 className="font-editorial text-2xl sm:text-[28px] font-medium text-[#171513]">
                      {pillar.title}
                    </h3>
                  </div>
                  <p className="text-sm sm:text-[15px] leading-relaxed text-[#493426]/80 pl-9 font-normal">
                    {pillar.body}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* OUR PRODUCT CATEGORIES OVERVIEW — Dark Matte Black */}
      <section className="py-24 md:py-32 bg-[#1E1B18] border-b border-[#C5A16B]/25">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
          <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2">
                <span className="w-8 h-[1px] bg-[#C5A16B]" />
                <p className="font-editorial italic text-lg sm:text-xl text-[#C5A16B]">
                  What We Offer
                </p>
              </div>
              <h2 className="font-editorial text-3xl sm:text-4xl lg:text-[44px] leading-[1.14] font-medium text-[#F4EFE6] text-balance">
                Our Product Categories.
              </h2>
            </div>
            <Link
              to="/products"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-[#C5A16B] hover:text-[#E0C496] transition-colors whitespace-nowrap shrink-0"
            >
              <span>Explore All Products</span>
              <ArrowRight className="w-4 h-4 text-[#C5A16B] group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </Link>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRODUCT_CATEGORIES.map((category, idx) => (
              <Reveal key={category.id} delay={idx * 0.04}>
                <Link
                  to={`/products#${category.id}`}
                  className="group block h-full p-8 bg-[#171513] border border-[#C5A16B]/20 hover:border-[#C5A16B]/70 rounded-sm transition-all duration-300 hover:-translate-y-1 shadow-md"
                >
                  <p className="font-editorial text-xl text-[#C5A16B] tabular-nums">
                    {category.index}.
                  </p>
                  <h3 className="font-editorial text-2xl font-medium text-[#F4EFE6] mt-2 group-hover:text-[#C5A16B] transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-sm text-[#DFD7C7]/80 leading-relaxed mt-2.5 font-light">
                    {category.subtitle}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-xs font-semibold text-[#C5A16B] group-hover:text-[#E0C496] transition-colors">
                    <span>View Category</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* EDITORIAL VISUAL & VISIT INVITATION — Walnut Brown & Gold */}
      <section className="py-24 md:py-28 bg-[#171513]">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-gradient-to-r from-[#493426] to-[#1E1B18] text-[#F4EFE6] rounded-sm overflow-hidden border border-[#C5A16B]/30 shadow-2xl">
            <div className="lg:col-span-6 p-8 sm:p-12 lg:p-16 space-y-7">
              <div className="inline-flex items-center gap-2">
                <span className="w-8 h-[1px] bg-[#C5A16B]" />
                <p className="font-editorial italic text-lg sm:text-xl text-[#E0C496]">
                  Visit Our Showroom
                </p>
              </div>
              <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl leading-[1.12] font-medium text-balance tracking-tight">
                Step Inside Interior Boxx in New Hafeezpet.
              </h2>
              <p className="text-sm sm:text-base text-[#DFD7C7] leading-relaxed flex items-start gap-3 font-light">
                <MapPin className="w-5 h-5 text-[#C5A16B] shrink-0 mt-0.5" aria-hidden="true" />
                <span>{BUSINESS_INFO.address}</span>
              </p>
              <div className="pt-3 flex flex-wrap items-center gap-4">
                <a
                  href={buildGeneralEnquiryUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-[#C5A16B] to-[#B38F56] text-[#171513] text-sm font-semibold rounded-sm shadow-md hover:from-[#DFC28E] hover:to-[#C5A16B] transition-all whitespace-nowrap shrink-0"
                >
                  <MessageCircle className="w-4 h-4 text-[#171513]" aria-hidden="true" />
                  <span>WhatsApp Us</span>
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 border border-[#C5A16B]/60 text-[#F4EFE6] text-sm font-medium rounded-sm hover:bg-[#171513]/50 transition-colors whitespace-nowrap shrink-0"
                >
                  <span>Contact &amp; Directions</span>
                  <ArrowRight className="w-4 h-4 text-[#C5A16B]" aria-hidden="true" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 h-full">
              <ResilientImage
                src={ARCHITECTURAL_IMAGERY.flutedPanels}
                alt="Architectural fluted wood wall panels and warm ambient interior illumination"
                containerClassName="aspect-[16/11] lg:aspect-auto lg:h-full w-full"
                className="transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
