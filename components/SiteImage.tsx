import Image from "next/image";

type SiteImageProps = {
  src: string;
  alt: string;
  aspect?: string;
  className?: string;
  priority?: boolean;
};

export default function SiteImage({
  src,
  alt,
  aspect = "aspect-[4/5]",
  className = "",
  priority = false,
}: SiteImageProps) {
  return (
    <div
      className={`relative ${aspect} w-full overflow-hidden border border-black/10 ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover"
      />
    </div>
  );
}
