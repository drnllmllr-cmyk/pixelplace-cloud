import { useEffect, useRef, useState } from "react";
import heroVideo from "@/assets/hero-bg.mp4.asset.json";

interface VideoBackgroundProps {
  /** Opacity of the video itself (0-1). Default 0.55 */
  opacity?: number;
  /** Strength of dark overlay on top of the video (0-1). Default 0.55 */
  overlay?: number;
}

/**
 * Full-bleed looping HD background video.
 * Lazy-loads the video after first paint to keep LCP fast.
 */
const VideoBackground = ({ opacity = 0.55, overlay = 0.55 }: VideoBackgroundProps) => {
  const ref = useRef<HTMLVideoElement>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Skip on slow connections / data-saver / reduced motion
    const conn = (navigator as any).connection;
    if (conn?.saveData) return;
    if (conn?.effectiveType && /2g/.test(conn.effectiveType)) return;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;

    const t = window.setTimeout(() => setShow(true), 250);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {show && (
        <video
          ref={ref}
          className="absolute inset-0 w-full h-full object-cover"
          src={heroVideo.url}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          // @ts-expect-error non-standard but supported
          fetchpriority="low"
          style={{ opacity }}
        />
      )}
      <div className="absolute inset-0 bg-background" style={{ opacity: overlay }} />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-background via-background/70 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background via-background/80 to-transparent" />
    </div>
  );
};

export default VideoBackground;
