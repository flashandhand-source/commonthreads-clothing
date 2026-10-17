import ProductGrid from "@/components/ProductGrid";

export const metadata = {
  title: "Hats | Commonthreads Clothing",
};

const hats = [
  {
    name: "Classic C Logo Trucker",
    note: "Tan / black, halo C logo",
    image: "/images/shop/hats/classic-c-trucker.jpg",
    price: "$37.45",
  },
  {
    name: "Camo C Logo Trucker",
    note: "Woodland camo, white logo",
    image: "/images/shop/hats/camo-c-trucker.jpg",
    price: "$37.45",
  },
  {
    name: "Olive Camo Trucker",
    note: "Camo, white C logo",
    image: "/images/shop/hats/olive-camo-trucker.jpg",
    price: "$37.45",
  },
  {
    name: "Angelinos Pinstripe Snapback",
    note: "Cream pinstripe crown, purple brim",
    image: "/images/shop/hats/angelinos-pinstripe-snapback.jpg",
    price: "$37.45",
  },
  {
    name: "Cactus Jack Snapback",
    note: "Purple & cream, halo C logo",
    image: "/images/shop/hats/cactus-jack-snapback.jpg",
    price: "$37.45",
  },
  {
    name: "Shades of Blue Snapback",
    note: "Two-tone blue, halo C logo",
    image: "/images/shop/hats/shades-of-blue-snapback.jpg",
    price: "$37.45",
  },
  {
    name: "Pink & Black Snapback",
    note: "Hot pink crown, black brim",
    image: "/images/shop/hats/pink-black-snapback.jpg",
    price: "$37.45",
  },
  {
    name: "Pink & Black Embroidered Snapback",
    note: "Hot pink crown, black brim, embroidered C",
    image: "/images/shop/hats/pink-black-embroidered.jpg",
    price: "$37.45",
  },
  {
    name: "Pink & Purple Trucker",
    note: "Pastel pink crown, lavender brim",
    image: "/images/shop/hats/pink-purple-trucker.jpg",
    price: "$37.45",
  },
  {
    name: "Orange & White Pinstripe Snapback",
    note: "Cream pinstripe crown, orange brim",
    image: "/images/shop/hats/orange-white-pinstripe.jpg",
    price: "$37.45",
  },
  {
    name: "Cream & Black Pinstripe Snapback",
    note: "Cream pinstripe crown, black brim",
    image: "/images/shop/hats/cream-black-pinstripe.jpg",
    price: "$37.45",
  },
  {
    name: "Cream & Yellow Suede Snapback",
    note: "Cream crown, yellow suede brim",
    image: "/images/shop/hats/cream-yellow-suede.jpg",
    price: "$37.45",
  },
];

export default function HatsPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
        Shop
      </p>
      <h1 className="font-display mt-2 text-4xl text-black sm:text-5xl">
        HATS
      </h1>
      <p className="mt-3 max-w-md text-ink/70">
        Signature C-logo trucker hats and snapbacks, made in small runs and
        hand-finished one at a time.
      </p>

      <div className="mt-10">
        <ProductGrid products={hats} />
      </div>
    </div>
  );
}
