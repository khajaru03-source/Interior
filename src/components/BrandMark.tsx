import React from 'react';

interface BrandMarkProps {
  className?: string;
  tone?: 'dark' | 'light' | 'gold';
}

/**
 * Geometric three-cube architectural emblem inspired directly by
 * the physical Interior Boxx showroom signage in New Hafeezpet.
 */
export const BrandMark: React.FC<BrandMarkProps> = ({
  className = '',
  tone = 'gold',
}) => {
  const strokeColor =
    tone === 'gold' ? '#C5A16B' : tone === 'light' ? '#F4EFE6' : '#171513';
  const textColor =
    tone === 'gold'
      ? 'text-[#F4EFE6]'
      : tone === 'light'
      ? 'text-[#F4EFE6]'
      : 'text-[#171513]';

  return (
    <span className={`inline-flex items-center gap-3 whitespace-nowrap shrink-0 ${className}`}>
      <svg
        width="28"
        height="28"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="shrink-0 transition-transform duration-300 hover:rotate-6"
      >
        {/* Top cube */}
        <path
          d="M16 3L22.5 6.75V14.25L16 18L9.5 14.25V6.75L16 3Z"
          stroke={strokeColor}
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
        <path
          d="M9.5 6.75L16 10.5L22.5 6.75M16 10.5V18"
          stroke={strokeColor}
          strokeWidth="1.2"
          strokeLinejoin="round"
        />
        {/* Bottom-left cube */}
        <path
          d="M9.5 14.25L16 18V25.5L9.5 29.25L3 25.5V18L9.5 14.25Z"
          stroke={strokeColor}
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
        <path
          d="M3 18L9.5 21.75L16 18M9.5 21.75V29.25"
          stroke={strokeColor}
          strokeWidth="1.2"
          strokeLinejoin="round"
        />
        {/* Bottom-right cube */}
        <path
          d="M22.5 14.25L29 18V25.5L22.5 29.25L16 25.5V18L22.5 14.25Z"
          stroke={strokeColor}
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
        <path
          d="M16 18L22.5 21.75L29 18M22.5 21.75V29.25"
          stroke={strokeColor}
          strokeWidth="1.2"
          strokeLinejoin="round"
        />
      </svg>
      <span
        className={`font-editorial text-[22px] md:text-[24px] font-semibold tracking-[0.14em] uppercase ${textColor}`}
      >
        Interior Boxx
      </span>
    </span>
  );
};
