import InstagramEmbed from "@/components/InstagramEmbed";
import InstagramEmbedScript from "@/components/InstagramEmbedScript";
import { reelUrls } from "@/lib/reels";

export const metadata = {
  title: "Reels | Commonthreads Clothing",
};

export default function ReelsPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
        Reels
      </p>
      <h1 className="font-display mt-2 text-4xl text-black sm:text-5xl">
        ON THE &apos;GRAM
      </h1>
      <p className="mt-3 max-w-md text-ink/70">
        Straight from{" "}
        <a
          href="https://www.instagram.com/commonthreads.clothing/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-gold underline-offset-4 hover:text-gold"
        >
          @commonthreads.clothing
        </a>{" "}
        — drops, pop-ups, and behind-the-scenes.
      </p>

      <div className="mt-10 grid grid-cols-1 justify-items-center gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {reelUrls.map((url) => (
          <InstagramEmbed key={url} url={url} />
        ))}
      </div>

      <InstagramEmbedScript />
    </div>
  );
}
