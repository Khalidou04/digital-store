import type { Metadata } from "next";
import ShopClient from "@/components/ShopClient";
import { categories, products } from "@/lib/products";

export const metadata: Metadata = { title: "Shop" };

export default function ShopPage({ searchParams }: { searchParams: { category?: string } }) {
  const initialCategory = categories.some((c) => c.id === searchParams.category) ? searchParams.category! : "all";
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <h1 className="text-3xl font-extrabold tracking-tight">Shop</h1>
      <p className="mt-2 text-navy-900/70">Search, filter and sort the demo products.</p>
      <ShopClient products={products} categories={categories} initialCategory={initialCategory} />
    </div>
  );
}
