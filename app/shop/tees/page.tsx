import ProductGrid from "@/components/ProductGrid";

export const metadata = {
  title: "Tees | Commonthreads Clothing",
};

const tees = [
  {
    name: "Vintage Racing Tee",
    note: "Cream, retro F1 graphic",
    image: "/images/shop/tees/vintage-racing-tee.jpg",
  },
];

export default function TeesPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
        Shop
      </p>
      <h1 className="font-display mt-2 text-4xl text-black sm:text-5xl">
        TEES
      </h1>
      <p className="mt-3 max-w-md text-ink/70">
        Vintage-inspired graphic tees, made in the USA.
      </p>

      <div className="mt-10">
        <ProductGrid products={tees} />
      </div>
    </div>
  );
}
