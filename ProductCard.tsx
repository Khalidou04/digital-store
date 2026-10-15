import Link from "next/link";
import ProductCover from "./ProductCover";
import { formatPrice, getCategory, type Product } from "@/lib/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group block rounded-2xl border border-navy-900/10 bg-white p-3 shadow-sm transition-shadow hover:shadow-md"
    >
      <ProductCover product={product} />
      <div className="px-2 pb-2 pt-4">
        <div className="flex items-center justify-between gap-2 text-sm text-navy-900/70">
          <span>{getCategory(product.category).name}</span>
          <span className="rounded-full bg-brand-50 px-2 py-0.5 text-xs font-medium text-brand-700">Demo</span>
        </div>
        <h3 className="mt-1 font-semibold group-hover:text-brand-700">{product.name}</h3>
        <p className="mt-1 text-sm text-navy-900/70">{product.tagline}</p>
        <p className="mt-3 text-lg font-bold">{formatPrice(product.price)}</p>
      </div>
    </Link>
  );
}
