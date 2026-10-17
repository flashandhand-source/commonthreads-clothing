import SiteImage from "@/components/SiteImage";

export const metadata = {
  title: "About | Commonthreads Clothing",
};

export default function AboutPage() {
  return (
    <div>
      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
          About
        </p>
        <h1 className="font-display mt-2 max-w-2xl text-4xl text-black sm:text-5xl">
          MORE IN COMMON THAN NOT
        </h1>
        <p className="mt-5 max-w-xl text-ink/70">
          Commonthreads Clothing is a Los Angeles &amp; Orange County based
          label making hats and tees, made in the USA. Every piece is
          designed in small batches and built around a single idea: whatever
          brought you here, we&apos;ve probably got more in common than not.
        </p>
      </section>

      <section className="border-t border-black/10 bg-cream-dark/40">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-5 py-14 sm:px-8 lg:grid-cols-2">
          <SiteImage
            src="/images/about/founder-portrait.jpg"
            alt="Commonthreads Clothing founder holding a juice bottle with a child"
            aspect="aspect-[4/5]"
          />
          <div>
            <h2 className="font-display text-3xl text-black">THE OWNER</h2>
            <p className="mt-4 max-w-md text-ink/70">
              Founded and run by Chris Shayassi-Hall, Commonthreads started
              as a small, hands-on project and has grown drop by drop — each
              hat and tee designed, sourced, and shipped out personally.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <h2 className="font-display text-3xl text-black">MADE IN THE USA</h2>
        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div>
            <p className="font-display text-xl text-gold">01</p>
            <p className="mt-2 font-semibold text-black">Small Batches</p>
            <p className="mt-1 text-sm text-ink/70">
              Every drop is produced in limited runs, not mass-manufactured.
            </p>
          </div>
          <div>
            <p className="font-display text-xl text-gold">02</p>
            <p className="mt-2 font-semibold text-black">
              Made in the USA
            </p>
            <p className="mt-1 text-sm text-ink/70">
              Produced domestically, with quality checked by hand.
            </p>
          </div>
          <div>
            <p className="font-display text-xl text-gold">03</p>
            <p className="mt-2 font-semibold text-black">Community First</p>
            <p className="mt-1 text-sm text-ink/70">
              Built with and for the people who wear it — DM&apos;s welcome,
              always.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
