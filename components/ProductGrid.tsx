import PlaceholderImage from "@/components/PlaceholderImage";
import SiteImage from "@/components/SiteImage";

export type Product = {
  name: string;
  note?: string;
  image?: string;
  price?: string;
};

export default function ProductGrid({ products }: { products: Product[] }) {
  return (
    <div className="grid grid-cols-2 gap-x-5 gap-y-10 sm:grid-cols-3 lg:grid-cols-4">
      {products.map((product) => (
        <div key={product.name}>
          {product.image ? (
            <SiteImage
              src={product.image}
              alt={`${product.name} — Commonthreads Clothing`}
              aspect="aspect-[4/5]"
            />
          ) : (
            <PlaceholderImage label={`${product.name} — photo`} />
          )}
          <p className="mt-3 text-sm font-semibold text-black">
            {product.name}
          </p>
          {product.note && (
            <p className="text-xs text-ink/50">{product.note}</p>
          )}
          <p className="mt-1 text-xs font-medium uppercase tracking-wide text-gold">
            {product.price ?? "Price coming soon"}
          </p>
        </div>
      ))}
    </div>
  );
}
