type PlaceholderImageProps = {
  label: string;
  aspect?: string;
  className?: string;
};

export default function PlaceholderImage({
  label,
  aspect = "aspect-[4/5]",
  className = "",
}: PlaceholderImageProps) {
  return (
    <div
      className={`placeholder-box ${aspect} w-full flex items-center justify-center border border-black/10 ${className}`}
    >
      <span className="px-4 text-center text-xs font-medium uppercase tracking-wide text-ink/50">
        {label}
      </span>
    </div>
  );
}
