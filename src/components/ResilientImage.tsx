import React, { useState } from 'react';
import { Layers } from 'lucide-react';

interface ResilientImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  fallbackLabel?: string;
  loading?: 'eager' | 'lazy';
  enhanceShowroomLighting?: boolean;
}

/**
 * Resilient image component with zero-broken-image policy and subtle tonal polish
 * that preserves 100% of the authentic product design, texture, colour, and pattern.
 */
export const ResilientImage: React.FC<ResilientImageProps> = ({
  src,
  alt,
  className = '',
  containerClassName = '',
  fallbackLabel = 'Interior Boxx Collection',
  loading = 'lazy',
  enhanceShowroomLighting = false,
}) => {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={`flex flex-col items-center justify-center bg-[#EAE2D5] text-[#432E20] p-6 text-center ${containerClassName}`}
        role="img"
        aria-label={alt}
      >
        <Layers className="w-7 h-7 text-[#8C6D46] mb-2.5 stroke-[1.4]" aria-hidden="true" />
        <span className="font-editorial text-lg font-medium tracking-wide">{fallbackLabel}</span>
      </div>
    );
  }

  // Subtle brightness/contrast optimization for indoor showroom lighting without altering colour/identity
  const lightingPolish = enhanceShowroomLighting
    ? 'brightness-[1.02] contrast-[1.03]'
    : '';

  return (
    <div className={`overflow-hidden bg-[#EAE2D5] ${containerClassName}`}>
      <img
        src={src}
        alt={alt}
        loading={loading}
        referrerPolicy="no-referrer"
        onError={() => setHasError(true)}
        className={`w-full h-full object-cover ${lightingPolish} ${className}`}
      />
    </div>
  );
};
