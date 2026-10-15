"use client";

import { useMemo, useState } from "react";
import { Search, SearchX } from "lucide-react";
import ProductCard from "./ProductCard";
import type { Category, Product } from "@/lib/products";

const PAGE_SIZE = 6;

const priceRanges = [
  { id: "all", label: "Any price", test: () => true },
  { id: "u15", label: "Under $15", test: (p: number) => p < 15 },
  { id: "15-20", label: "$15 to $20", test: (p: number) => p >= 15 && p <= 20 },
  { id: "o20", label: "Over $20", test: (p: number) => p > 20 },
];

const sorters: Record<string, (a: Product, b: Product) => number> = {
  newest: (a, b) => b.createdAt.localeCompare(a.createdAt),
  popular: (a, b) => b.popularity - a.popularity,
  "price-asc": (a, b) => a.price - b.price,
  "price-desc": (a, b) => b.price - a.price,
};

const field = "w-full rounded-xl border border-navy-900/20 bg-white px-3 py-2.5 text-sm";

export default function ShopClient({
  products,
  categories,
  initialCategory,
}: {
  products: Product[];
  categories: Category[];
  initialCategory: string;
}) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState(initialCategory);
  const [price, setPrice] = useState("all");
  const [sort, setSort] = useState("newest");
  const [count, setCount] = useState(PAGE_SIZE);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    const range = priceRanges.find((r) => r.id === price)!;
    return products
      .filter((p) => !q || `${p.name} ${p.tagline}`.toLowerCase().includes(q))
      .filter((p) => category === "all" || p.category === category)
      .filter((p) => range.test(p.price))
      .sort(sorters[sort]);
  }, [products, query, category, price, sort]);

  const change = (set: (v: string) => void) => (e: { target: { value: string } }) => {
    set(e.target.value);
    setCount(PAGE_SIZE);
  };
  const reset = () => {
    setQuery(""); setCategory("all"); setPrice("all"); setSort("newest"); setCount(PAGE_SIZE);
  };

  return (
    <div className="mt-8">
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <div className="relative sm:col-span-2 lg:col-span-4">
          <label htmlFor="q" className="sr-only">Search products by name</label>
          <Search className="pointer-events-none absolute left-3 top-3 h-4 w-4 text-navy-900/50" aria-hidden="true" />
          <input id="q" type="search" value={query} onChange={change(setQuery)} placeholder="Search products by name" className={`${field} pl-9`} />
        </div>
        <div>
          <label htmlFor="cat" className="mb-1 block text-sm font-medium">Category</label>
          <select id="cat" value={category} onChange={change(setCategory)} className={field}>
            <option value="all">All categories</option>
            {categories.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}
          </select>
        </div>
        <div>
          <label htmlFor="price" className="mb-1 block text-sm font-medium">Price</label>
          <select id="price" value={price} onChange={change(setPrice)} className={field}>
            {priceRanges.map((r) => <option key={r.id} value={r.id}>{r.label}</option>)}
          </select>
        </div>
        <div className="lg:col-span-2">
          <label htmlFor="sort" className="mb-1 block text-sm font-medium">Sort by</label>
          <select id="sort" value={sort} onChange={change(setSort)} className={field}>
            <option value="newest">Newest</option>
            <option value="popular">Popularity (demo order)</option>
            <option value="price-asc">Price: low to high</option>
            <option value="price-desc">Price: high to low</option>
          </select>
        </div>
      </div>

      <p className="mt-6 text-sm text-navy-900/70" aria-live="polite">
        Showing {Math.min(count, results.length)} of {results.length} {results.length === 1 ? "product" : "products"}
      </p>

      {results.length === 0 ? (
        <div className="mt-6 rounded-2xl border border-dashed border-navy-900/20 p-12 text-center">
          <SearchX className="mx-auto h-8 w-8 text-brand-600" aria-hidden="true" />
          <h2 className="mt-3 text-lg font-semibold">No products match your filters</h2>
          <p className="mt-1 text-sm text-navy-900/70">Try a different search, or clear the filters to see everything.</p>
          <button type="button" onClick={reset} className="mt-5 rounded-xl bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-700">
            Clear filters
          </button>
        </div>
      ) : (
        <>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {results.slice(0, count).map((p) => <ProductCard key={p.slug} product={p} />)}
          </div>
          {count < results.length && (
            <div className="mt-10 text-center">
              <button type="button" onClick={() => setCount(count + PAGE_SIZE)} className="rounded-xl border border-navy-900/20 px-6 py-3 text-sm font-semibold hover:bg-brand-50">
                Load more products
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
