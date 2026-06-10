import heroVideo from "@/assets/hero-bg.mp4.asset.json";

interface VideoBackgroundProps {
  /** Opacity of the video itself (0-1). Default 0.55 */
  opacity?: number;
  /** Strength of dark overlay on top of the video (0-1). Default 0.55 */
  overlay?: number;
}

/**
 * Full-bleed looping HD background video.
 * Drop inside a `relative overflow-hidden` parent section.
 * Sits at z-0 so children with z-10+ render above.
 */
const VideoBackground = ({ opacity = 0.55, overlay = 0.55 }: VideoBackgroundProps) => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={heroVideo.url}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        style={{ opacity }}
      />
      {/* Dark base for legibility */}
      <div
        className="absolute inset-0 bg-background"
        style={{ opacity: overlay }}
      />
      {/* Top gradient to blend with navbar */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-background via-background/70 to-transparent" />
      {/* Bottom gradient to blend with next section */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background via-background/80 to-transparent" />
      {/* Subtle color wash to match brand */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 mix-blend-overlay" />
    </div>
  );
};

export default VideoBackground;
