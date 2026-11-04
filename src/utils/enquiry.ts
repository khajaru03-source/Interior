export const BUSINESS_INFO = {
  name: 'Interior Boxx',
  phoneDisplay: '09390082704',
  phoneHref: 'tel:09390082704',
  whatsappNumber: '919390082704',
  whatsappDisplay: '+91 93900 82704',
  rating: '4.8',
  ratingScale: '5',
  address:
    'Plot-9, S.Y No.80, Subashchandrabose Nagar, New Hafeezpet, Serilingampalle (M), Hyderabad, Telangana 500049.',
  shortLocation: 'New Hafeezpet, Hyderabad',
  googleMapsUrl:
    'https://www.google.com/maps/search/?api=1&query=' +
    encodeURIComponent(
      'Interior Boxx, Plot-9, S.Y No.80, Subashchandrabose Nagar, New Hafeezpet, Serilingampalle (M), Hyderabad, Telangana 500049'
    ),
} as const;

export interface ContactFormValues {
  name: string;
  phone: string;
  subject: string;
  message: string;
}

export interface ContactFormErrors {
  name?: string;
  phone?: string;
  subject?: string;
  message?: string;
}

export function buildWhatsAppUrl(message: string): string {
  const trimmed = message.trim();
  return `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(trimmed)}`;
}

export function buildGeneralEnquiryUrl(): string {
  return buildWhatsAppUrl(
    'Hello Interior Boxx, I would like to enquire about your interior material collections and showroom visit.'
  );
}

export function buildCategoryEnquiryUrl(categoryName: string, specificItem?: string): string {
  if (specificItem && specificItem.trim().length > 0) {
    return buildWhatsAppUrl(
      `Hello Interior Boxx, I would like to enquire about ${specificItem.trim()} under your ${categoryName.trim()} collection.`
    );
  }
  return buildWhatsAppUrl(
    `Hello Interior Boxx, I am interested in your ${categoryName.trim()} collection. Please share available options and showroom details.`
  );
}

export function normalizePhoneDigits(phone: string): string {
  return phone.replace(/[^\d]/g, '');
}

export function isValidIndianOrInternationalPhone(phone: string): boolean {
  const trimmed = phone.trim();
  if (!trimmed) return false;
  // Allow digits, spaces, +, -, parentheses
  if (!/^[+\d][\d\s\-()]{7,18}$/.test(trimmed)) {
    return false;
  }
  const digits = normalizePhoneDigits(trimmed);
  // 10 digits standard, 11 digits with leading 0, or 12 digits with 91
  return digits.length >= 10 && digits.length <= 13;
}

export function validateContactForm(values: ContactFormValues): ContactFormErrors {
  const errors: ContactFormErrors = {};

  if (!values.name.trim()) {
    errors.name = 'Please enter your full name.';
  } else if (values.name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters.';
  }

  if (!values.phone.trim()) {
    errors.phone = 'Please enter your phone number.';
  } else if (!isValidIndianOrInternationalPhone(values.phone)) {
    errors.phone = 'Please enter a valid 10-digit mobile or phone number.';
  }

  if (!values.subject.trim()) {
    errors.subject = 'Please select or enter an enquiry subject.';
  }

  if (!values.message.trim()) {
    errors.message = 'Please share brief details about your requirement.';
  } else if (values.message.trim().length < 10) {
    errors.message = 'Please provide at least 10 characters so we can assist accurately.';
  }

  return errors;
}

export function hasFormErrors(errors: ContactFormErrors): boolean {
  return Boolean(errors.name || errors.phone || errors.subject || errors.message);
}

export function buildContactFormMessage(values: ContactFormValues): string {
  return [
    'Hello Interior Boxx, I have a new enquiry from your website:',
    '',
    `Name: ${values.name.trim()}`,
    `Phone: ${values.phone.trim()}`,
    `Subject: ${values.subject.trim()}`,
    `Message: ${values.message.trim()}`,
  ].join('\n');
}

export function filterByCategory<T extends { categoryId: string }>(
  items: readonly T[],
  selectedCategoryId: string
): T[] {
  if (!selectedCategoryId || selectedCategoryId === 'all') {
    return [...items];
  }
  return items.filter((item) => item.categoryId === selectedCategoryId);
}

export function getAdjacentIndex(
  currentIndex: number,
  total: number,
  direction: 'next' | 'prev'
): number {
  if (total <= 0) return 0;
  if (direction === 'next') {
    return (currentIndex + 1) % total;
  }
  return (currentIndex - 1 + total) % total;
}
