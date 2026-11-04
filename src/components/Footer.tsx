import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, MessageCircle, ArrowUpRight } from 'lucide-react';
import { BrandMark } from './BrandMark';
import { BUSINESS_INFO, buildGeneralEnquiryUrl } from '../utils/enquiry';
import { PRODUCT_CATEGORIES } from '../data/catalog';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#171513] text-[#DFD7C7] border-t border-[#C5A16B]/20 relative overflow-hidden">
      {/* Subtle gold glow accent at top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#C5A16B]/50 to-transparent" />

      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 py-16 md:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-14 border-b border-[#493426]/50">
          {/* Brand & Showroom Intro */}
          <div className="lg:col-span-4 space-y-5">
            <Link
              to="/"
              aria-label="Interior Boxx Home"
              className="inline-block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C5A16B]"
            >
              <BrandMark tone="gold" />
            </Link>
            <p className="text-sm leading-relaxed text-[#BDB2A3] max-w-sm">
              An architectural interior materials destination in Hyderabad presenting fine interior hardware,
              plywood, natural veneers, decorative panels, kitchen fittings, and architectural laminates.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1E1B18] border border-[#C5A16B]/25 rounded-sm">
              <span className="w-2 h-2 rounded-full bg-[#C5A16B]" />
              <p className="text-xs text-[#C5A16B] font-medium tracking-wide tabular-nums">
                {BUSINESS_INFO.rating} / {BUSINESS_INFO.ratingScale} Showroom Rating &middot;{' '}
                {BUSINESS_INFO.shortLocation}
              </p>
            </div>
          </div>

          {/* Navigation Links (All 4 Pages) */}
          <div className="lg:col-span-2 space-y-4">
            <h2 className="font-editorial text-lg font-medium text-[#C5A16B] tracking-wide">
              Explore
            </h2>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="text-[#DFD7C7] hover:text-[#C5A16B] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-[#DFD7C7] hover:text-[#C5A16B] transition-colors"
                >
                  Our Products
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-[#DFD7C7] hover:text-[#C5A16B] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-[#DFD7C7] hover:text-[#C5A16B] transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Collections */}
          <div className="lg:col-span-3 space-y-4">
            <h2 className="font-editorial text-lg font-medium text-[#C5A16B] tracking-wide">
              Collections
            </h2>
            <ul className="space-y-2.5 text-sm">
              {PRODUCT_CATEGORIES.map((category) => (
                <li key={category.id}>
                  <Link
                    to={`/products#${category.id}`}
                    className="text-[#DFD7C7] hover:text-[#C5A16B] transition-colors flex items-center justify-between group"
                  >
                    <span>{category.name}</span>
                    <span className="text-xs font-editorial text-[#8E744D] group-hover:text-[#C5A16B] transition-colors">
                      {category.index}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Showroom Contact */}
          <div className="lg:col-span-3 space-y-4">
            <h2 className="font-editorial text-lg font-medium text-[#C5A16B] tracking-wide">
              Showroom &amp; Enquiries
            </h2>
            <div className="space-y-3.5 text-sm text-[#DFD7C7]">
              <p className="flex items-start gap-2.5 leading-relaxed">
                <MapPin className="w-4 h-4 text-[#C5A16B] shrink-0 mt-1" aria-hidden="true" />
                <span className="text-xs leading-relaxed text-[#BDB2A3]">{BUSINESS_INFO.address}</span>
              </p>
              <p className="flex items-center gap-2.5 tabular-nums">
                <Phone className="w-4 h-4 text-[#C5A16B] shrink-0" aria-hidden="true" />
                <a
                  href={BUSINESS_INFO.phoneHref}
                  className="text-[#F4EFE6] hover:text-[#C5A16B] font-medium transition-colors"
                >
                  {BUSINESS_INFO.phoneDisplay}
                </a>
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href={buildGeneralEnquiryUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#493426] hover:bg-[#614633] text-xs font-medium text-[#F4EFE6] border border-[#C5A16B]/30 rounded-sm transition-colors whitespace-nowrap"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#C5A16B]" aria-hidden="true" />
                  <span>WhatsApp Us</span>
                </a>
                <a
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-3 py-1.5 bg-[#1E1B18] hover:bg-[#262320] text-xs font-medium text-[#DFD7C7] hover:text-[#F4EFE6] border border-[#493426]/60 rounded-sm transition-colors whitespace-nowrap"
                >
                  <span>Directions</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#C5A16B]" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Quiet Copyright Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#8E744D]">
          <p>&copy; {new Date().getFullYear()} Interior Boxx. All rights reserved.</p>
          <p className="text-[#8E744D]">
            Interior Hardware &middot; Plywood &middot; Veneers &middot; Decorative Panels &middot;
            Kitchen Fittings &middot; Laminates
          </p>
        </div>
      </div>
    </footer>
  );
};
