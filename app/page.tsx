import Link from "next/link";
import SiteImage from "@/components/SiteImage";
import InstagramEmbed from "@/components/InstagramEmbed";
import InstagramEmbedScript from "@/components/InstagramEmbedScript";
import { reelUrls } from "@/lib/reels";

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="border-b border-black/10">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-5 py-14 sm:px-8 lg:grid-cols-2 lg:py-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              LA &amp; OC Based · Made in USA
            </p>
            <h1 className="font-display mt-4 text-5xl leading-[0.95] text-black sm:text-6xl lg:text-7xl">
              MORE IN
              <br />
              COMMON
              <br />
              THAN NOT
            </h1>
            <p className="mt-5 max-w-md text-base text-ink/70">
              Commonthreads Clothing is a California-built brand of hats and
              tees, designed in small batches with a logo that means
              something. Every piece is made to be lived in.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/shop/hats"
                className="rounded-full bg-black px-6 py-3 text-sm font-semibold uppercase tracking-wide text-cream transition-colors hover:bg-gold"
              >
                Shop Hats
              </Link>
              <Link
                href="/shop/tees"
                className="rounded-full border border-black px-6 py-3 text-sm font-semibold uppercase tracking-wide text-black transition-colors hover:border-gold hover:text-gold"
              >
                Shop Tees
              </Link>
            </div>
          </div>

          <SiteImage
            src="/images/home/hero.jpg"
            alt="Commonthreads C logo trucker hats lined up"
            aspect="aspect-[4/5] lg:aspect-square"
            priority
          />
        </div>
      </section>

      {/* Category tiles */}
      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <h2 className="font-display text-3xl text-black">SHOP THE DROP</h2>
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <Link href="/shop/hats" className="group block">
            <SiteImage
              src="/images/shop/hats/classic-c-trucker.jpg"
              alt="Hats category — Classic C Logo Trucker"
              aspect="aspect-[4/3]"
            />
            <p className="mt-3 font-display text-xl text-black group-hover:text-gold">
              HATS
            </p>
          </Link>
          <Link href="/shop/tees" className="group block">
            <SiteImage
              src="/images/shop/tees/vintage-racing-tee.jpg"
              alt="Tees category — Vintage Racing Tee"
              aspect="aspect-[4/3]"
            />
            <p className="mt-3 font-display text-xl text-black group-hover:text-gold">
              TEES
            </p>
          </Link>
        </div>
      </section>

      {/* Featured products */}
      <section className="border-y border-black/10 bg-cream-dark/40">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-3xl text-black">FAN FAVORITES</h2>
            <Link
              href="/shop/hats"
              className="text-sm font-semibold uppercase tracking-wide text-gold hover:text-black"
            >
              View All
            </Link>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-5 sm:grid-cols-4">
            {[
              {
                name: "Angelinos Pinstripe Snapback",
                image: "/images/shop/hats/angelinos-pinstripe-snapback.jpg",
              },
              {
                name: "Pink & Black Snapback",
                image: "/images/shop/hats/pink-black-snapback.jpg",
              },
              {
                name: "Shades of Blue Snapback",
                image: "/images/shop/hats/shades-of-blue-snapback.jpg",
              },
              {
                name: "Cream & Yellow Suede Snapback",
                image: "/images/shop/hats/cream-yellow-suede.jpg",
              },
            ].map((product) => (
              <Link key={product.name} href="/shop/hats" className="group block">
                <SiteImage
                  src={product.image}
                  alt={`${product.name} — Commonthreads Clothing`}
                  aspect="aspect-[4/5]"
                />
                <p className="mt-2 text-sm font-medium text-ink/80 group-hover:text-gold">
                  {product.name}
                </p>
                <p className="text-xs font-medium uppercase tracking-wide text-gold">
                  $37.45
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Brand story strip */}
      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <SiteImage
            src="/images/home/brand-story.jpg"
            alt="Commonthreads founder at a pop-up table with the full hat lineup"
            aspect="aspect-[4/5]"
          />
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Our Story
            </p>
            <h2 className="font-display mt-3 text-3xl text-black sm:text-4xl">
              BUILT ON COMMUNITY
            </h2>
            <p className="mt-4 max-w-md text-ink/70">
              Started in Los Angeles and Orange County, Commonthreads is a
              small, independent label built one drop at a time — hats,
              tees, and everything in between.
            </p>
            <Link
              href="/about"
              className="mt-6 inline-block text-sm font-semibold uppercase tracking-wide text-black underline decoration-gold underline-offset-4 hover:text-gold"
            >
              Read Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* Latest reels */}
      <section className="border-t border-black/10 bg-cream-dark/40">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-3xl text-black">LATEST REELS</h2>
            <Link
              href="/reels"
              className="text-sm font-semibold uppercase tracking-wide text-gold hover:text-black"
            >
              View All
            </Link>
          </div>
          <div className="mt-6 grid grid-cols-1 justify-items-center gap-8 sm:grid-cols-3">
            {reelUrls.slice(0, 3).map((url) => (
              <InstagramEmbed key={url} url={url} />
            ))}
          </div>
        </div>
      </section>
      <InstagramEmbedScript />

      {/* Newsletter / contact CTA */}
      <section className="border-t border-black/10 bg-black">
        <div className="mx-auto max-w-6xl px-5 py-14 text-center sm:px-8">
          <h2 className="font-display text-3xl text-cream sm:text-4xl">
            STAY IN THE LOOP
          </h2>
          <p className="mx-auto mt-3 max-w-md text-cream/60">
            New drops, restocks, and behind-the-scenes. Follow along or reach
            out directly.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-block rounded-full bg-gold px-6 py-3 text-sm font-semibold uppercase tracking-wide text-black hover:bg-gold-light"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
