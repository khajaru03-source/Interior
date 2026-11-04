import React, { useState } from 'react';
import { Phone, MessageCircle, MapPin, ArrowUpRight, RotateCcw } from 'lucide-react';
import { SHOWROOM_PHOTOS } from '../data/catalog';
import {
  BUSINESS_INFO,
  ContactFormValues,
  ContactFormErrors,
  validateContactForm,
  hasFormErrors,
  buildContactFormMessage,
  buildWhatsAppUrl,
  buildGeneralEnquiryUrl,
} from '../utils/enquiry';
import { usePageMeta } from '../utils/seo';
import { ResilientImage } from '../components/ResilientImage';
import { Reveal } from '../components/Reveal';

const SUBJECT_OPTIONS = [
  'Interior Hardware Enquiry',
  'Plywood & Structural Boards',
  'Natural Veneers',
  'Decorative Panels & Brass Motifs',
  'Kitchen Fittings & Modular Systems',
  'Architectural Laminates',
  'Showroom Visit / Complete Home Requirement',
] as const;

export const ContactPage: React.FC = () => {
  usePageMeta({
    title: 'Contact Us — Interior Boxx Showroom in New Hafeezpet, Hyderabad',
    description:
      'Contact Interior Boxx at 09390082704 or visit Plot-9, S.Y No.80, Subashchandrabose Nagar, New Hafeezpet, Hyderabad 500049. Send product enquiries directly via WhatsApp.',
  });

  const [values, setValues] = useState<ContactFormValues>({
    name: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [preparedWhatsAppUrl, setPreparedWhatsAppUrl] = useState<string | null>(null);

  const handleFieldChange = (
    field: keyof ContactFormValues,
    value: string
  ) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
    if (preparedWhatsAppUrl) {
      setPreparedWhatsAppUrl(null);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationErrors = validateContactForm(values);
    setErrors(validationErrors);

    if (hasFormErrors(validationErrors)) {
      const firstInvalidField = validationErrors.name
        ? 'contact-name'
        : validationErrors.phone
          ? 'contact-phone'
          : validationErrors.subject
            ? 'contact-subject'
            : 'contact-message';
      const el = document.getElementById(firstInvalidField);
      el?.focus();
      return;
    }

    const formattedMessage = buildContactFormMessage(values);
    const whatsappHref = buildWhatsAppUrl(formattedMessage);
    setPreparedWhatsAppUrl(whatsappHref);

    // Trigger anchor navigation to WhatsApp in a new tab without window.open
    const link = document.createElement('a');
    link.href = whatsappHref;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleReset = () => {
    setValues({ name: '', phone: '', subject: '', message: '' });
    setErrors({});
    setPreparedWhatsAppUrl(null);
  };

  return (
    <div className="bg-[#171513] text-[#F4EFE6]">
      {/* PAGE HEADER — Dark Walnut & Gold */}
      <section className="py-20 md:py-28 border-b border-[#C5A16B]/20 bg-gradient-to-b from-[#171513] via-[#1E1B18] to-[#171513]">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2">
              <span className="w-8 h-[1px] bg-[#C5A16B]" />
              <p className="font-editorial italic text-lg sm:text-xl text-[#C5A16B]">
                Contact &amp; Showroom Location
              </p>
            </div>
            <h1 className="font-editorial text-[clamp(2.6rem,5vw,4.2rem)] leading-[1.06] font-medium text-[#F4EFE6] text-balance tracking-tight">
              Connect With Interior Boxx.
            </h1>
            <p className="text-base leading-relaxed text-[#DFD7C7] max-w-2xl font-light">
              Visit our showroom in New Hafeezpet, Hyderabad to inspect materials in person, speak
              with our team by phone, or send a structured enquiry directly through WhatsApp.
            </p>
          </div>
        </div>
      </section>

      {/* MAIN CONTACT INFORMATION & WHATSAPP ENQUIRY FORM */}
      <section className="py-20 md:py-28 bg-[#171513]">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Showroom Details, Direct Buttons & Landmark Photo */}
            <Reveal className="lg:col-span-5 space-y-8">
              <div className="p-8 sm:p-9 bg-[#1E1B18] border border-[#C5A16B]/30 rounded-sm space-y-7 shadow-2xl">
                <div>
                  <p className="font-editorial italic text-lg text-[#C5A16B]">
                    Showroom Details
                  </p>
                  <h2 className="font-editorial text-3xl font-medium text-[#F4EFE6] mt-1">
                    {BUSINESS_INFO.name}
                  </h2>
                </div>

                <div className="space-y-6 pt-5 border-t border-[#493426]/60 text-sm">
                  <div className="space-y-1.5">
                    <p className="text-xs font-semibold tracking-wide text-[#C5A16B] uppercase">
                      Showroom Address
                    </p>
                    <p className="text-[#DFD7C7] leading-relaxed flex items-start gap-3 font-light">
                      <MapPin
                        className="w-4 h-4 text-[#C5A16B] shrink-0 mt-1"
                        aria-hidden="true"
                      />
                      <span>{BUSINESS_INFO.address}</span>
                    </p>
                  </div>

                  <div className="space-y-1.5">
                    <p className="text-xs font-semibold tracking-wide text-[#C5A16B] uppercase">
                      Direct Phone Call
                    </p>
                    <p className="text-lg font-medium text-[#F4EFE6] tabular-nums">
                      <a
                        href={BUSINESS_INFO.phoneHref}
                        className="hover:text-[#C5A16B] transition-colors"
                      >
                        {BUSINESS_INFO.phoneDisplay}
                      </a>
                    </p>
                  </div>

                  <div className="space-y-1.5">
                    <p className="text-xs font-semibold tracking-wide text-[#C5A16B] uppercase">
                      Showroom WhatsApp
                    </p>
                    <p className="text-lg font-medium text-[#F4EFE6] tabular-nums">
                      <a
                        href={buildGeneralEnquiryUrl()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#C5A16B] transition-colors"
                      >
                        {BUSINESS_INFO.whatsappDisplay}
                      </a>
                    </p>
                  </div>
                </div>

                {/* Direct Action Buttons */}
                <div className="pt-4 border-t border-[#493426]/60 flex flex-col sm:flex-row lg:flex-col gap-3.5">
                  <a
                    href={BUSINESS_INFO.phoneHref}
                    className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-gradient-to-r from-[#C5A16B] to-[#B38F56] text-[#171513] text-sm font-semibold rounded-sm hover:from-[#DFC28E] hover:to-[#C5A16B] shadow-md transition-all whitespace-nowrap tabular-nums"
                  >
                    <Phone className="w-4 h-4 text-[#171513]" aria-hidden="true" />
                    <span>Call {BUSINESS_INFO.phoneDisplay}</span>
                  </a>

                  <a
                    href={buildGeneralEnquiryUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[#493426] hover:bg-[#614633] border border-[#C5A16B]/40 text-[#F4EFE6] text-sm font-semibold rounded-sm transition-all whitespace-nowrap"
                  >
                    <MessageCircle className="w-4 h-4 text-[#C5A16B]" aria-hidden="true" />
                    <span>WhatsApp Enquiry</span>
                  </a>

                  <a
                    href={BUSINESS_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-[#C5A16B]/30 bg-[#171513] hover:border-[#C5A16B] text-[#DFD7C7] hover:text-[#F4EFE6] text-sm font-medium rounded-sm transition-colors whitespace-nowrap"
                  >
                    <MapPin className="w-4 h-4 text-[#C5A16B]" aria-hidden="true" />
                    <span>Open in Google Maps</span>
                    <ArrowUpRight className="w-4 h-4 text-[#C5A16B]" aria-hidden="true" />
                  </a>
                </div>
              </div>

              {/* Authentic Showroom Building Landmark Card */}
              <div className="border border-[#C5A16B]/30 bg-[#1E1B18] rounded-sm overflow-hidden shadow-2xl">
                <ResilientImage
                  src={SHOWROOM_PHOTOS.facadeElevation}
                  alt="Exterior front elevation of Interior Boxx showroom building at Plot-9, Subashchandrabose Nagar, New Hafeezpet, Hyderabad"
                  enhanceShowroomLighting
                  containerClassName="aspect-[4/3] w-full"
                  className="transition-transform duration-700 hover:scale-105"
                />
                <div className="p-6 flex items-center justify-between gap-4">
                  <div>
                    <p className="font-editorial text-xl font-medium text-[#F4EFE6]">
                      Interior Boxx Showroom Building
                    </p>
                    <p className="text-xs text-[#DFD7C7]/80 mt-1 font-light">
                      Plot-9, S.Y No.80, Subashchandrabose Nagar, New Hafeezpet
                    </p>
                  </div>
                  <a
                    href={BUSINESS_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#C5A16B] hover:text-[#E0C496] transition-colors whitespace-nowrap shrink-0"
                  >
                    <span>Directions</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#C5A16B]" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </Reveal>

            {/* Right Column: Validated WhatsApp Enquiry Form — Elegant Dark Styling */}
            <Reveal delay={0.06} className="lg:col-span-7">
              <div className="p-8 sm:p-11 lg:p-12 bg-[#1E1B18] border border-[#C5A16B]/35 rounded-sm shadow-2xl">
                <div className="space-y-2.5 pb-8 border-b border-[#493426]/60">
                  <div className="inline-flex items-center gap-2">
                    <span className="w-8 h-[1px] bg-[#C5A16B]" />
                    <p className="font-editorial italic text-lg text-[#C5A16B]">
                      Direct WhatsApp Enquiry Form
                    </p>
                  </div>
                  <h2 className="font-editorial text-3xl sm:text-4xl font-medium text-[#F4EFE6]">
                    Send Us Your Requirement.
                  </h2>
                  <p className="text-sm text-[#DFD7C7]/80 leading-relaxed font-light">
                    Complete the details below to open WhatsApp with your enquiry prefilled for our
                    showroom team ({BUSINESS_INFO.whatsappDisplay}).
                  </p>
                </div>

                <form onSubmit={handleSubmit} noValidate className="mt-8 space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name Field */}
                    <div className="space-y-2">
                      <label
                        htmlFor="contact-name"
                        className="block text-sm font-medium text-[#F4EFE6]"
                      >
                        Your Name <span className="text-[#C5A16B]">*</span>
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        value={values.name}
                        onChange={(e) => handleFieldChange('name', e.target.value)}
                        aria-invalid={Boolean(errors.name)}
                        aria-describedby={errors.name ? 'contact-name-error' : undefined}
                        placeholder="e.g. Karthik Reddy"
                        className={`w-full px-4 py-3.5 bg-[#171513] border rounded-sm text-sm text-[#F4EFE6] placeholder:text-[#8E744D] focus:outline-none focus:border-[#C5A16B] transition-colors ${
                          errors.name ? 'border-[#EF4444]' : 'border-[#493426]'
                        }`}
                      />
                      {errors.name && (
                        <p
                          id="contact-name-error"
                          role="alert"
                          className="text-xs text-[#EF4444] font-medium"
                        >
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Phone Number Field */}
                    <div className="space-y-2">
                      <label
                        htmlFor="contact-phone"
                        className="block text-sm font-medium text-[#F4EFE6]"
                      >
                        Phone Number <span className="text-[#C5A16B]">*</span>
                      </label>
                      <input
                        id="contact-phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        value={values.phone}
                        onChange={(e) => handleFieldChange('phone', e.target.value)}
                        aria-invalid={Boolean(errors.phone)}
                        aria-describedby={errors.phone ? 'contact-phone-error' : undefined}
                        placeholder="e.g. 98765 43210"
                        className={`w-full px-4 py-3.5 bg-[#171513] border rounded-sm text-sm text-[#F4EFE6] placeholder:text-[#8E744D] focus:outline-none focus:border-[#C5A16B] transition-colors tabular-nums ${
                          errors.phone ? 'border-[#EF4444]' : 'border-[#493426]'
                        }`}
                      />
                      {errors.phone && (
                        <p
                          id="contact-phone-error"
                          role="alert"
                          className="text-xs text-[#EF4444] font-medium"
                        >
                          {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Subject Field */}
                  <div className="space-y-2">
                    <label
                      htmlFor="contact-subject"
                      className="block text-sm font-medium text-[#F4EFE6]"
                    >
                      Subject <span className="text-[#C5A16B]">*</span>
                    </label>
                    <select
                      id="contact-subject"
                      name="subject"
                      value={values.subject}
                      onChange={(e) => handleFieldChange('subject', e.target.value)}
                      aria-invalid={Boolean(errors.subject)}
                      aria-describedby={errors.subject ? 'contact-subject-error' : undefined}
                      className={`w-full px-4 py-3.5 bg-[#171513] border rounded-sm text-sm text-[#F4EFE6] focus:outline-none focus:border-[#C5A16B] transition-colors ${
                        errors.subject ? 'border-[#EF4444]' : 'border-[#493426]'
                      }`}
                    >
                      <option value="">Select a product category or enquiry topic</option>
                      {SUBJECT_OPTIONS.map((option) => (
                        <option key={option} value={option} className="bg-[#171513] text-[#F4EFE6]">
                          {option}
                        </option>
                      ))}
                    </select>
                    {errors.subject && (
                      <p
                        id="contact-subject-error"
                        role="alert"
                        className="text-xs text-[#EF4444] font-medium"
                      >
                        {errors.subject}
                      </p>
                    )}
                  </div>

                  {/* Message Field */}
                  <div className="space-y-2">
                    <label
                      htmlFor="contact-message"
                      className="block text-sm font-medium text-[#F4EFE6]"
                    >
                      Message <span className="text-[#C5A16B]">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={5}
                      value={values.message}
                      onChange={(e) => handleFieldChange('message', e.target.value)}
                      aria-invalid={Boolean(errors.message)}
                      aria-describedby={errors.message ? 'contact-message-error' : undefined}
                      placeholder="Tell us which materials, hardware finishes, or kitchen fittings you are exploring for your project..."
                      className={`w-full px-4 py-3.5 bg-[#171513] border rounded-sm text-sm text-[#F4EFE6] placeholder:text-[#8E744D] focus:outline-none focus:border-[#C5A16B] transition-colors resize-y ${
                        errors.message ? 'border-[#EF4444]' : 'border-[#493426]'
                      }`}
                    />
                    {errors.message && (
                      <p
                        id="contact-message-error"
                        role="alert"
                        className="text-xs text-[#EF4444] font-medium"
                      >
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <div className="pt-3 flex flex-wrap items-center justify-between gap-4">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-gradient-to-r from-[#C5A16B] to-[#B38F56] text-[#171513] text-sm font-semibold rounded-sm shadow-md hover:from-[#DFC28E] hover:to-[#C5A16B] transition-all cursor-pointer whitespace-nowrap"
                    >
                      <MessageCircle className="w-4 h-4 text-[#171513]" aria-hidden="true" />
                      <span>Continue to WhatsApp</span>
                    </button>

                    {(values.name || values.phone || values.subject || values.message) && (
                      <button
                        type="button"
                        onClick={handleReset}
                        className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-[#DFD7C7] hover:text-[#C5A16B] transition-colors cursor-pointer whitespace-nowrap"
                      >
                        <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
                        <span>Clear Form</span>
                      </button>
                    )}
                  </div>
                </form>

                {/* Honest WhatsApp Handoff Panel */}
                {preparedWhatsAppUrl && (
                  <div
                    role="status"
                    aria-live="polite"
                    className="mt-8 p-6 bg-[#493426]/30 border border-[#C5A16B]/50 rounded-sm space-y-4"
                  >
                    <div className="space-y-1">
                      <p className="text-sm font-semibold text-[#E0C496]">
                        Enquiry Ready for WhatsApp
                      </p>
                      <p className="text-sm text-[#DFD7C7] leading-relaxed font-light">
                        Your enquiry details have been formatted for WhatsApp. Please press{' '}
                        <strong className="text-[#F4EFE6] font-medium">Send</strong> inside WhatsApp to deliver the message to Interior
                        Boxx. If WhatsApp did not open in a new tab automatically, use the button
                        below:
                      </p>
                    </div>
                    <div className="flex flex-wrap items-center gap-3">
                      <a
                        href={preparedWhatsAppUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#C5A16B] hover:bg-[#DFC28E] text-[#171513] text-xs font-semibold rounded-sm transition-colors whitespace-nowrap"
                      >
                        <MessageCircle className="w-4 h-4" aria-hidden="true" />
                        <span>Open Prefilled WhatsApp Chat</span>
                        <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
};
