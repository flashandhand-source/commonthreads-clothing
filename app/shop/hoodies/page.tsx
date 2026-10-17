import ProductGrid from "@/components/ProductGrid";

export const metadata = {
  title: "Hoodies | Commonthreads Clothing",
};

const hoodies = [
  {
    name: "BCW Bleached Hoodie",
    note: "Black, bleach-splatter, Champion blank",
    image: "/images/shop/hoodies/bcw-bleached-hoodie.jpg",
  },
];

export default function HoodiesPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
        Shop
      </p>
      <h1 className="font-display mt-2 text-4xl text-black sm:text-5xl">
        HOODIES
      </h1>
      <p className="mt-3 max-w-md text-ink/70">
        Heavyweight hoodies, bleached and hand-finished in small batches.
      </p>

      <div className="mt-10">
        <ProductGrid products={hoodies} />
      </div>
    </div>
  );
}
