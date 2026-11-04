import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, MessageCircle, Phone } from 'lucide-react';
import { BrandMark } from './BrandMark';
import { BUSINESS_INFO, buildGeneralEnquiryUrl } from '../utils/enquiry';

const NAV_ITEMS = [
  { label: 'Home', path: '/' },
  { label: 'Our Products', path: '/products' },
  { label: 'About Us', path: '/about' },
  { label: 'Contact Us', path: '/contact' },
] as const;

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 border-b ${
        scrolled
          ? 'bg-[#171513]/95 backdrop-blur-md border-[#C5A16B]/25 shadow-lg shadow-black/40'
          : 'bg-[#171513] border-[#C5A16B]/15'
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 h-18 md:h-22 flex items-center justify-between gap-8">
        {/* Zone 1: Single Brand Wordmark */}
        <Link
          to="/"
          aria-label="Interior Boxx Home"
          className="group focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C5A16B] whitespace-nowrap shrink-0"
        >
          <BrandMark tone="gold" />
        </Link>

        {/* Zone 2: Primary Navigation Links */}
        <nav
          aria-label="Primary navigation"
          className="hidden md:flex items-center gap-8 text-[14px] font-medium tracking-wide text-[#DFD7C7]"
        >
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) =>
                `relative py-2 whitespace-nowrap shrink-0 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C5A16B] ${
                  isActive
                    ? 'text-[#C5A16B] font-semibold after:content-[""] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-[1.5px] after:bg-[#C5A16B] after:shadow-[0_0_8px_rgba(197,161,107,0.6)]'
                    : 'hover:text-[#F4EFE6] after:content-[""] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-[1.5px] after:bg-[#C5A16B] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200 after:origin-left'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Zone 3: Single Primary Action (Desktop) / Menu Toggle (Mobile) */}
        <div className="flex items-center shrink-0">
          <a
            href={buildGeneralEnquiryUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#C5A16B] to-[#B38F56] text-[#171513] text-[13px] font-semibold tracking-wide rounded-sm hover:from-[#DFC28E] hover:to-[#C5A16B] shadow-[0_2px_12px_rgba(197,161,107,0.25)] hover:shadow-[0_4px_18px_rgba(197,161,107,0.4)] transition-all duration-200 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C5A16B]"
          >
            <MessageCircle className="w-4 h-4 text-[#171513]" aria-hidden="true" />
            <span>WhatsApp Enquiry</span>
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation-drawer"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 text-[#F4EFE6] hover:bg-[#262320] rounded-sm transition-colors duration-150 border border-[#C5A16B]/30 focus-visible:outline-2 focus-visible:outline-[#C5A16B]"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 text-[#C5A16B]" aria-hidden="true" />
            ) : (
              <Menu className="w-5 h-5 text-[#C5A16B]" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          className="md:hidden border-t border-[#C5A16B]/25 bg-[#171513] px-5 pt-4 pb-6 shadow-2xl"
        >
          <nav aria-label="Mobile navigation" className="flex flex-col divide-y divide-[#493426]/40">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/'}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `py-3.5 text-[16px] font-medium transition-colors ${
                    isActive ? 'text-[#C5A16B] font-semibold' : 'text-[#F4EFE6] hover:text-[#C5A16B]'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="mt-5 pt-4 border-t border-[#C5A16B]/25 flex flex-col gap-3">
            <a
              href={buildGeneralEnquiryUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-gradient-to-r from-[#C5A16B] to-[#B38F56] text-[#171513] text-sm font-semibold rounded-sm shadow-md hover:from-[#DFC28E] hover:to-[#C5A16B] transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-[#171513]" aria-hidden="true" />
              <span>WhatsApp Enquiry</span>
            </a>
            <a
              href={BUSINESS_INFO.phoneHref}
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 border border-[#C5A16B]/40 bg-[#1E1B18] text-[#F4EFE6] text-sm font-medium rounded-sm hover:border-[#C5A16B] transition-colors tabular-nums"
            >
              <Phone className="w-4 h-4 text-[#C5A16B]" aria-hidden="true" />
              <span>Call {BUSINESS_INFO.phoneDisplay}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
