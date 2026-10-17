import Link from "next/link";
import SiteImage from "@/components/SiteImage";

export const metadata = {
  title: "Shop | Commonthreads Clothing",
};

export default function ShopPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
      <h1 className="font-display text-4xl text-black sm:text-5xl">SHOP</h1>
      <p className="mt-3 max-w-md text-ink/70">
        Browse by category. New drops added regularly.
      </p>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
        <Link href="/shop/hats" className="group block">
          <SiteImage
            src="/images/shop/hats/classic-c-trucker.jpg"
            alt="Hats category — Classic C Logo Trucker"
            aspect="aspect-[4/3]"
          />
          <p className="mt-3 font-display text-2xl text-black group-hover:text-gold">
            HATS
          </p>
        </Link>
        <Link href="/shop/tees" className="group block">
          <SiteImage
            src="/images/shop/tees/vintage-racing-tee.jpg"
            alt="Tees category — Vintage Racing Tee"
            aspect="aspect-[4/3]"
          />
          <p className="mt-3 font-display text-2xl text-black group-hover:text-gold">
            TEES
          </p>
        </Link>
        <Link href="/shop/hoodies" className="group block">
          <SiteImage
            src="/images/shop/hoodies/bcw-bleached-hoodie.jpg"
            alt="Hoodies category — BCW Bleached Hoodie"
            aspect="aspect-[4/3]"
          />
          <p className="mt-3 font-display text-2xl text-black group-hover:text-gold">
            HOODIES
          </p>
        </Link>
      </div>
    </div>
  );
}
