export const metadata = {
  title: "Contact | Commonthreads Clothing",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-4xl px-5 py-14 sm:px-8">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
        Contact
      </p>
      <h1 className="font-display mt-2 text-4xl text-black sm:text-5xl">
        GET IN TOUCH
      </h1>
      <p className="mt-3 max-w-md text-ink/70">
        Questions about an order, a custom piece, or a collab? Reach out —
        we read every message.
      </p>

      <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-xl text-black">Direct</h2>
          <ul className="mt-4 space-y-3 text-sm text-ink/80">
            <li>
              <span className="block text-xs uppercase tracking-wide text-ink/40">
                Phone
              </span>
              <a href="tel:13102420123" className="font-medium hover:text-gold">
                (310) 242-0123
              </a>
            </li>
            <li>
              <span className="block text-xs uppercase tracking-wide text-ink/40">
                Instagram
              </span>
              <a
                href="https://www.instagram.com/commonthreads.clothing/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium hover:text-gold"
              >
                @commonthreads.clothing
              </a>
            </li>
            <li>
              <span className="block text-xs uppercase tracking-wide text-ink/40">
                Based In
              </span>
              <span className="font-medium">Los Angeles &amp; Orange County, CA</span>
            </li>
          </ul>
        </div>

        <form className="flex flex-col gap-4">
          <div>
            <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wide text-ink/60">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="mt-1 w-full rounded-md border border-black/20 bg-white px-3 py-2 text-sm outline-none focus:border-gold"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wide text-ink/60">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="mt-1 w-full rounded-md border border-black/20 bg-white px-3 py-2 text-sm outline-none focus:border-gold"
              placeholder="you@email.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wide text-ink/60">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              className="mt-1 w-full rounded-md border border-black/20 bg-white px-3 py-2 text-sm outline-none focus:border-gold"
              placeholder="How can we help?"
            />
          </div>
          <button
            type="submit"
            className="mt-2 rounded-full bg-black px-6 py-3 text-sm font-semibold uppercase tracking-wide text-cream transition-colors hover:bg-gold"
          >
            Send Message
          </button>
          <p className="text-xs text-ink/40">
            Note: this form isn&apos;t wired up to send email yet — connect
            it to a form service (e.g. Formspree, Resend) before launch.
          </p>
        </form>
      </div>
    </div>
  );
}
