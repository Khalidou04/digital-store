import Link from "next/link";
import { categories } from "@/lib/products";
import { siteConfig } from "@/lib/config";

export default function Footer() {
  return (
    <footer className="mt-24 bg-navy-950 text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <p className="text-lg font-bold">{siteConfig.name}</p>
          <p className="mt-2 max-w-xs text-sm text-white/70">{siteConfig.description}</p>
        </div>
        <div>
          <p className="font-semibold">Shop</p>
          <ul className="mt-3 space-y-2 text-sm text-white/70">
            <li><Link href="/shop" className="hover:text-white">All products</Link></li>
            {categories.map((c) => (
              <li key={c.id}><Link href={`/shop?category=${c.id}`} className="hover:text-white">{c.name}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-semibold">About this site</p>
          <p className="mt-3 text-sm text-white/70">
            This is a demo store. Every product shown is sample content and nothing here can be bought yet.
          </p>
        </div>
      </div>
      <p className="border-t border-white/10 py-5 text-center text-xs text-white/60">
        © {new Date().getFullYear()} {siteConfig.name}. Demo content.
      </p>
    </footer>
  );
}
