import { notFound } from "next/navigation";
import Marketplace from "../../components/Marketplace";

const supported = ["aura-signature-collection"];

export function generateStaticParams() {
  return supported.map((slug) => ({ slug }));
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!supported.includes(slug)) notFound();
  return <Marketplace mode="category" categorySlug="Aura Signature Collection" />;
}


