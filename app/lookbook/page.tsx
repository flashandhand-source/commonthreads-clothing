import SiteImage from "@/components/SiteImage";

export const metadata = {
  title: "Lookbook | Commonthreads Clothing",
};

const spots = [
  { src: "/images/lookbook/look-01.jpg", alt: "Commonthreads full look, red cap and graphic long sleeve", aspect: "aspect-[3/4]" },
  { src: "/images/lookbook/look-02.jpg", alt: "Commonthreads cap held up in front of a full hat display", aspect: "aspect-square" },
  { src: "/images/lookbook/look-03.jpg", alt: "Tie-dye Commonthreads bucket hat styled with heart sunglasses", aspect: "aspect-[3/4]" },
  { src: "/images/lookbook/look-04.jpg", alt: "Portrait wearing the Commonthreads C logo trucker hat", aspect: "aspect-[16/9]" },
  { src: "/images/lookbook/look-05.webp", alt: "Close up of embroidered patch detail", aspect: "aspect-square" },
  { src: "/images/lookbook/look-06.jpg", alt: "Street style look with Commonthreads cap", aspect: "aspect-[3/4]" },
  { src: "/images/lookbook/look-08.jpg", alt: "Commonthreads community market table, full hat lineup", aspect: "aspect-[16/9]" },
  { src: "/images/lookbook/look-09.webp", alt: "Orange camo Commonthreads trucker hat held up with a hilltop city view", aspect: "aspect-[3/4]" },
  { src: "/images/lookbook/look-10.jpg", alt: "Back of a Commonthreads graphic tee outside Tommy's, with a BCW trucker hat", aspect: "aspect-[3/4]" },
];

export default function LookbookPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
        Lookbook
      </p>
      <h1 className="font-display mt-2 text-4xl text-black sm:text-5xl">
        IN THE WILD
      </h1>
      <p className="mt-3 max-w-md text-ink/70">
        Commonthreads, worn around LA and OC.
      </p>

      <div className="mt-10 columns-1 gap-5 sm:columns-2 lg:columns-3">
        {spots.map((spot) => (
          <div key={spot.src} className="mb-5 break-inside-avoid">
            <SiteImage src={spot.src} alt={spot.alt} aspect={spot.aspect} />
          </div>
        ))}
      </div>
    </div>
  );
}
