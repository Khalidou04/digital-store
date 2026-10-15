import Link from "next/link";
import { categoryIcons } from "./icons";
import type { Category } from "@/lib/products";

export default function CategoryCard({ category, count }: { category: Category; count: number }) {
  const Icon = categoryIcons[category.id];
  return (
    <Link
      href={`/shop?category=${category.id}`}
      className="block rounded-2xl border border-navy-900/10 bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
    >
      <span className="grid h-10 w-10 place-items-center rounded-lg bg-brand-50 text-brand-700">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </span>
      <h3 className="mt-4 font-semibold">{category.name}</h3>
      <p className="mt-1 text-sm text-navy-900/70">{category.description}</p>
      <p className="mt-3 text-sm font-medium text-brand-700">{count} {count === 1 ? "product" : "products"}</p>
    </Link>
  );
}
