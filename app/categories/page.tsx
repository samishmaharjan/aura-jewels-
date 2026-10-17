import Link from "next/link";

export default function CategoriesPage() {
  return <main className="min-h-screen bg-[#f7f4ed] px-5 py-16 text-[#19372d]"><div className="mx-auto max-w-5xl"><p className="text-xs font-bold uppercase tracking-[.25em] text-[#b8863b]">Aura Jewels collections</p><h1 className="mt-3 font-serif text-5xl">Browse by collection</h1><p className="mt-4 max-w-2xl text-[#62786b]">Explore our current signature edit, photographed from the Aura Jewels catalog.</p><Link href="/categories/aura-signature-collection" className="mt-10 inline-block rounded-xl border border-[#d8cfbf] bg-[#fffdf8] px-6 py-5 font-serif text-2xl shadow-sm">Aura Signature Collection <span className="ml-3 text-[#b8863b]">→</span></Link><div className="mt-8"><Link href="/shop" className="text-sm font-bold uppercase tracking-wider text-[#ad8140]">Shop all jewelry →</Link></div></div></main>;
}
