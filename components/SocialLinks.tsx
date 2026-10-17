type SocialLinksProps = {
  className?: string;
  iconClassName?: string;
  linkClassName?: string;
};

const socials = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/commonthreads.clothing/",
    icon: (cls: string) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={cls}>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    name: "Threads",
    href: "https://www.threads.net/@commonthreads.clothing",
    icon: (cls: string) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={cls}>
        <path d="M12 3c4 0 7 2.2 7 6.4 0 3-1.7 4.3-3.6 4.3-1.4 0-2.3-.7-2.3-1.9 0-1.6 1.5-2.6 3.3-2.6.4 0 .8 0 1.1.1" />
        <path d="M14.5 10.2c0-2-1.4-3.2-3.3-3.2-2.3 0-4 1.7-4 4.6v1c0 3.3 1.9 5.4 5 5.4 1.6 0 2.8-.5 3.7-1.3" />
      </svg>
    ),
  },
  {
    name: "Link in Bio",
    href: "https://dot.cards/commonthreads143",
    icon: (cls: string) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={cls}>
        <path d="M9 15l6-6" />
        <path d="M10.5 6.5l1-1a3.5 3.5 0 0 1 5 5l-1 1" />
        <path d="M13.5 17.5l-1 1a3.5 3.5 0 0 1-5-5l1-1" />
      </svg>
    ),
  },
];

export default function SocialLinks({
  className = "",
  iconClassName = "h-5 w-5",
  linkClassName = "text-ink/70 hover:text-gold",
}: SocialLinksProps) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {socials.map((social) => (
        <a
          key={social.name}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.name}
          title={social.name}
          className={`inline-flex transition-colors ${linkClassName}`}
        >
          {social.icon(iconClassName)}
        </a>
      ))}
    </div>
  );
}
