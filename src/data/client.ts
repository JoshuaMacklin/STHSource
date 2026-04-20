/**
 * ─────────────────────────────────────────────────────────────────────────────
 * CLIENT DATA
 * ─────────────────────────────────────────────────────────────────────────────
 * Business-specific copy: name, phone, email, address, socials.
 * Imported by Header, Footer, Contact page, and Head/SEO components.
 *
 * No component should hardcode a business name or phone number —
 * everything comes from this file or brand.ts.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const client = {
  name: "I'm The San Tan Handyman",
  email: 'sthllc12@yahoo.com',
  phoneForTel: '480-604-7373',
  phoneFormatted: '(480) 604-7373',
  /** Business / contractor license number. Displayed in the header and footer
   *  as a trust signal. Set to an empty string to hide it. */
  license: '',
  address: {
    // lineOne: '',
    // lineTwo: '',
    city: 'San Tan Valley',
    state: 'AZ',
    zip: '85140',
    country: 'US',
    // mapLink: '',
  },
  socials: {
    // facebook: 'https://www.facebook.com/',
    // instagram: 'https://www.instagram.com/',
    // google: 'https://www.google.com/maps',
  },
  domain: 'https://www.imthesantanhandyman.com',
} as const;

export type Client = typeof client;
