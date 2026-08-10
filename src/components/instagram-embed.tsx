import { useEffect, useRef } from "react";

/**
 * Instagram embed. Renders a blockquote and asks Instagram's embed.js
 * to process it client-side. No SSR mismatch — blockquote is inert until
 * the script paints it.
 */
export function InstagramEmbed({ permalink }: { permalink: string }) {
  const ref = useRef<HTMLQuoteElement>(null);

  useEffect(() => {
    const id = "ig-embed-script";
    let s = document.getElementById(id) as HTMLScriptElement | null;
    if (!s) {
      s = document.createElement("script");
      s.id = id;
      s.src = "https://www.instagram.com/embed.js";
      s.async = true;
      document.body.appendChild(s);
    }
    const tryProcess = () => {
      const w = window as unknown as {
        instgrm?: { Embeds?: { process: () => void } };
      };
      if (w.instgrm?.Embeds?.process) {
        w.instgrm.Embeds.process();
      } else {
        setTimeout(tryProcess, 350);
      }
    };
    tryProcess();
  }, []);

  return (
    <blockquote
      ref={ref}
      className="instagram-media"
      data-instgrm-permalink={permalink}
      data-instgrm-version="14"
      style={{
        background: "#fff",
        border: 0,
        borderRadius: 2,
        margin: 0,
        maxWidth: "100%",
        minWidth: "280px",
        padding: 0,
        width: "100%",
      }}
    />
  );
}
