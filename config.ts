// Edit this file to personalize the store.
export const siteConfig = {
  name: process.env.NEXT_PUBLIC_SITE_NAME ?? "Lumen Digital",
  description: "Templates, planners, tools and ebooks you download and use right away.",
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "hello@example.com",
  currency: "USD",
  locale: "en-US",
};

// Only pages that exist are listed. Stage 2 adds About, FAQ and Contact.
export const navLinks = [
  { href: "/shop", label: "Shop" },
  { href: "/#categories", label: "Categories" },
];
