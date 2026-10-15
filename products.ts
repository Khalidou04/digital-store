import { siteConfig } from "./config";

export type CategoryId = "templates" | "productivity-tools" | "planners" | "ebooks";
export type CoverTone = "violet" | "navy" | "lilac" | "slate";

export interface Category {
  id: CategoryId;
  name: string;
  description: string;
}

export interface Product {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  price: number; // in the currency set in config.ts
  category: CategoryId;
  createdAt: string; // YYYY-MM-DD
  popularity: number; // demo ordering only, higher = listed first when sorting by popularity
  featured?: boolean;
  tone: CoverTone;
  features: string[];
  included: string[];
  compatibility: string[];
  gumroadUrl?: string; // paste your real Gumroad product link here
}

export const categories: Category[] = [
  { id: "templates", name: "Templates", description: "Ready-made documents and calendars to start from." },
  { id: "productivity-tools", name: "Productivity tools", description: "Spreadsheets that track money, time and projects." },
  { id: "planners", name: "Planners", description: "Printable planners for weeks, habits and goals." },
  { id: "ebooks", name: "Ebooks", description: "Short guides you can read in an afternoon." },
];

// ALL PRODUCTS BELOW ARE DEMO PRODUCTS. Replace them with your real ones.
export const products: Product[] = [
  {
    slug: "social-media-content-calendar",
    name: "Social Media Content Calendar",
    tagline: "Plan a month of posts in one sheet.",
    description: "A demo spreadsheet template for planning posts across several channels, with space for captions, dates and status.",
    price: 19, category: "templates", createdAt: "2026-09-20", popularity: 80, featured: true, tone: "violet",
    features: ["Monthly and weekly views", "Status column for each post", "Editable channel list"],
    included: ["1 spreadsheet file (.xlsx)", "Quick-start page"],
    compatibility: ["Microsoft Excel", "Google Sheets (upload the .xlsx)"],
  },
  {
    slug: "freelance-invoice-proposal-pack",
    name: "Freelance Invoice & Proposal Pack",
    tagline: "Clean documents for pitching and billing.",
    description: "A demo set of editable document templates for sending proposals and invoices to clients.",
    price: 24, category: "templates", createdAt: "2026-08-30", popularity: 60, tone: "navy",
    features: ["Proposal template", "Invoice template", "Editable colors and logo area"],
    included: ["2 Word files (.docx)", "2 PDF previews"],
    compatibility: ["Microsoft Word", "Google Docs (upload the .docx)"],
  },
  {
    slug: "weekly-focus-planner",
    name: "Weekly Focus Planner",
    tagline: "One page per week, three priorities.",
    description: "A demo printable planner that keeps each week to a short list of priorities and a simple daily log.",
    price: 12, category: "planners", createdAt: "2026-09-28", popularity: 90, featured: true, tone: "lilac",
    features: ["52 weekly pages", "Priorities and daily log", "Two paper sizes"],
    included: ["1 PDF, US Letter", "1 PDF, A4"],
    compatibility: ["Any PDF reader", "Home or office printers"],
  },
  {
    slug: "habit-tracker-printable-set",
    name: "Habit Tracker Printable Set",
    tagline: "Track habits by the month.",
    description: "A demo set of printable habit trackers with monthly grids and a yearly overview page.",
    price: 9, category: "planners", createdAt: "2026-07-14", popularity: 40, tone: "slate",
    features: ["12 monthly grids", "Yearly overview", "Blank page to make your own"],
    included: ["1 PDF, US Letter", "1 PDF, A4"],
    compatibility: ["Any PDF reader"],
  },
  {
    slug: "personal-budget-dashboard",
    name: "Personal Budget Dashboard",
    tagline: "See income and spending on one screen.",
    description: "A demo spreadsheet that totals monthly income and expenses by category and shows the result in simple charts.",
    price: 15, category: "productivity-tools", createdAt: "2026-10-05", popularity: 95, featured: true, tone: "navy",
    features: ["Monthly summary sheet", "Category totals", "Built-in charts"],
    included: ["1 spreadsheet file (.xlsx)", "Short how-to guide (PDF)"],
    compatibility: ["Microsoft Excel", "Google Sheets (upload the .xlsx)"],
  },
  {
    slug: "project-timeline-tracker",
    name: "Project Timeline Tracker",
    tagline: "Tasks, owners and due dates in one view.",
    description: "A demo spreadsheet for tracking project tasks with owners, due dates and a simple timeline bar.",
    price: 18, category: "productivity-tools", createdAt: "2026-08-12", popularity: 55, tone: "violet",
    features: ["Task list with owners", "Automatic timeline bars", "Overdue highlighting"],
    included: ["1 spreadsheet file (.xlsx)"],
    compatibility: ["Microsoft Excel", "Google Sheets (some formatting may differ)"],
  },
  {
    slug: "remote-work-playbook",
    name: "Remote Work Playbook",
    tagline: "A short guide to working well from home.",
    description: "A demo ebook outline covering routines, communication and focus for people who work remotely.",
    price: 14, category: "ebooks", createdAt: "2026-09-02", popularity: 70, tone: "lilac",
    features: ["Short chapters", "Checklists at the end of each chapter", "Printable summary page"],
    included: ["1 PDF ebook", "1 EPUB ebook"],
    compatibility: ["Any PDF reader", "EPUB reader apps"],
  },
  {
    slug: "beginners-guide-to-digital-products",
    name: "Beginner's Guide to Digital Products",
    tagline: "From idea to first listing.",
    description: "A demo ebook outline that walks through choosing, making and listing a first digital product.",
    price: 11, category: "ebooks", createdAt: "2026-06-18", popularity: 30, tone: "slate",
    features: ["Step-by-step chapters", "Worksheet pages", "Resource list"],
    included: ["1 PDF ebook"],
    compatibility: ["Any PDF reader"],
  },
];

export const getCategory = (id: CategoryId) => categories.find((c) => c.id === id)!;
export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
export const getFeatured = () => products.filter((p) => p.featured);
export const getNewest = (n: number) =>
  [...products].sort((a, b) => b.createdAt.localeCompare(a.createdAt)).slice(0, n);
export const getRelated = (product: Product, n = 3) =>
  products.filter((p) => p.slug !== product.slug && p.category === product.category)
    .concat(products.filter((p) => p.slug !== product.slug && p.category !== product.category))
    .slice(0, n);

export const formatPrice = (price: number) =>
  new Intl.NumberFormat(siteConfig.locale, { style: "currency", currency: siteConfig.currency, maximumFractionDigits: 0 }).format(price);
