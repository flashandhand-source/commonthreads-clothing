import Link from "next/link";
import SocialLinks from "@/components/SocialLinks";

export default function Footer() {
  return (
    <footer className="border-t border-black/10 bg-black text-cream">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
          <div>
            <p className="font-display text-xl tracking-wide">
              COMMON<span className="text-gold">THREADS</span>
            </p>
            <p className="mt-3 max-w-xs text-sm text-cream/60">
              More In Common Than Not. LA &amp; OC based clothing, made in the
              USA.
            </p>
            <SocialLinks
              className="mt-5"
              linkClassName="text-cream/70 hover:text-gold"
            />
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-gold">
              Shop
            </p>
            <ul className="mt-3 space-y-2 text-sm text-cream/70">
              <li>
                <Link href="/shop/hats" className="hover:text-gold">
                  Hats
                </Link>
              </li>
              <li>
                <Link href="/shop/tees" className="hover:text-gold">
                  Tees
                </Link>
              </li>
              <li>
                <Link href="/shop/hoodies" className="hover:text-gold">
                  Hoodies
                </Link>
              </li>
              <li>
                <Link href="/lookbook" className="hover:text-gold">
                  Lookbook
                </Link>
              </li>
              <li>
                <Link href="/reels" className="hover:text-gold">
                  Reels
                </Link>
              </li>
              <li>
                <Link href="/size-guide" className="hover:text-gold">
                  Size Guide
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-gold">
              Get In Touch
            </p>
            <ul className="mt-3 space-y-2 text-sm text-cream/70">
              <li>
                <a href="tel:13102420123" className="hover:text-gold">
                  (310) 242-0123
                </a>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gold">
                  Contact Page
                </Link>
              </li>
              <li>
                <a
                  href="https://dot.cards/commonthreads143"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold"
                >
                  All Links
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-cream/10 pt-6 text-xs text-cream/40">
          © 2026 Commonthreads Clothing. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
