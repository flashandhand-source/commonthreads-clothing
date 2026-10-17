"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    instgrm?: {
      Embeds: { process: () => void };
    };
  }
}

type InstagramEmbedProps = {
  url: string;
};

export default function InstagramEmbed({ url }: InstagramEmbedProps) {
  useEffect(() => {
    // The embed script (loaded once via <Script> on the page) exposes
    // window.instgrm once it's ready; re-run it whenever a new blockquote
    // mounts so Instagram swaps in the real embed.
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    }
  }, []);

  return (
    <blockquote
      className="instagram-media"
      data-instgrm-permalink={url}
      data-instgrm-version="14"
      style={{
        background: "#FFF",
        border: "1px solid rgba(0,0,0,0.1)",
        borderRadius: "4px",
        margin: 0,
        maxWidth: "540px",
        minWidth: "326px",
        width: "100%",
      }}
    />
  );
}
