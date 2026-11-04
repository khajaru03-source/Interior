import test from 'node:test';
import assert from 'node:assert/strict';
import {
  BUSINESS_INFO,
  buildWhatsAppUrl,
  buildCategoryEnquiryUrl,
  validateContactForm,
  hasFormErrors,
  buildContactFormMessage,
  filterByCategory,
  getAdjacentIndex,
} from './enquiry';

test('buildWhatsAppUrl encodes text and uses Interior Boxx WhatsApp number', () => {
  const url = buildWhatsAppUrl('Hello Interior Boxx');
  assert.equal(url, `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=Hello%20Interior%20Boxx`);
});

test('buildCategoryEnquiryUrl pre-fills selected category name accurately', () => {
  const categoryUrl = buildCategoryEnquiryUrl('Natural Veneers');
  assert.ok(categoryUrl.startsWith('https://wa.me/919390082704?text='));
  assert.ok(decodeURIComponent(categoryUrl).includes('Natural Veneers'));

  const itemUrl = buildCategoryEnquiryUrl('Interior Hardware', 'Architectural Pull Handles');
  const decoded = decodeURIComponent(itemUrl);
  assert.ok(decoded.includes('Architectural Pull Handles'));
  assert.ok(decoded.includes('Interior Hardware'));
});

test('validateContactForm rejects empty or invalid inputs and accepts valid details', () => {
  const emptyErrors = validateContactForm({
    name: '',
    phone: '',
    subject: '',
    message: '',
  });
  assert.equal(hasFormErrors(emptyErrors), true);
  assert.ok(emptyErrors.name);
  assert.ok(emptyErrors.phone);
  assert.ok(emptyErrors.subject);
  assert.ok(emptyErrors.message);

  const badPhoneErrors = validateContactForm({
    name: 'Arjun Rao',
    phone: '12345',
    subject: 'Plywood & Veneers',
    message: 'Looking for calibrated plywood and walnut veneer sheets for a villa.',
  });
  assert.equal(hasFormErrors(badPhoneErrors), true);
  assert.ok(badPhoneErrors.phone);
  assert.equal(badPhoneErrors.name, undefined);

  const validErrors = validateContactForm({
    name: 'Arjun Rao',
    phone: '+91 98765 43210',
    subject: 'Plywood & Veneers',
    message: 'Looking for calibrated plywood and walnut veneer sheets for a villa.',
  });
  assert.equal(hasFormErrors(validErrors), false);
});

test('buildContactFormMessage formats structured WhatsApp message', () => {
  const message = buildContactFormMessage({
    name: 'Priya Reddy',
    phone: '09390082704',
    subject: 'Kitchen Fittings',
    message: 'Need modular kitchen fittings and tambour shutter options.',
  });
  assert.ok(message.includes('Name: Priya Reddy'));
  assert.ok(message.includes('Phone: 09390082704'));
  assert.ok(message.includes('Subject: Kitchen Fittings'));
  assert.ok(message.includes('Message: Need modular kitchen fittings'));
});

test('filterByCategory and getAdjacentIndex handle filtering and wrap-around navigation', () => {
  const items = [
    { id: '1', categoryId: 'hardware' },
    { id: '2', categoryId: 'kitchen-fittings' },
    { id: '3', categoryId: 'hardware' },
  ];
  assert.equal(filterByCategory(items, 'all').length, 3);
  assert.equal(filterByCategory(items, 'hardware').length, 2);
  assert.equal(filterByCategory(items, 'plywood').length, 0);

  assert.equal(getAdjacentIndex(0, 5, 'prev'), 4);
  assert.equal(getAdjacentIndex(4, 5, 'next'), 0);
  assert.equal(getAdjacentIndex(2, 5, 'next'), 3);
});
