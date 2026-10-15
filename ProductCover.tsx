import { categoryIcons } from "./icons";
import { getCategory, type Product } from "@/lib/products";

const tones = {
  violet: "bg-brand-600 text-white",
  navy: "bg-navy-900 text-white",
  lilac: "bg-brand-100 text-navy-900",
  slate: "bg-navy-700 text-brand-100",
};

// A CSS-only cover. To use a real image later, replace this component's body with <Image />.
export default function ProductCover({ product }: { product: Pick<Product, "name" | "category" | "tone"> }) {
  const Icon = categoryIcons[product.category];
  return (
    <div
      role="img"
      aria-label={`${product.name} cover`}
      className={`relative flex aspect-[4/3] flex-col justify-between overflow-hidden rounded-xl p-5 ${tones[product.tone]}`}
    >
      <Icon className="absolute -right-6 -top-6 h-36 w-36 opacity-10" strokeWidth={1.5} aria-hidden="true" />
      <Icon className="relative h-7 w-7" aria-hidden="true" />
      <div className="relative">
        <p className="text-xs font-medium opacity-80">{getCategory(product.category).name}</p>
        <p className="mt-1 text-lg font-bold leading-tight">{product.name}</p>
      </div>
    </div>
  );
}
