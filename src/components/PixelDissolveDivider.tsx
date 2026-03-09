import { useEffect, useRef } from "react";

interface PixelDissolveDividerProps {
  color?: "cyan" | "purple" | "green";
  density?: number;
}

const colorValues: Record<string, string> = {
  cyan: "0, 255, 255",
  purple: "160, 80, 255",
  green: "0, 200, 140",
};

const PixelDissolveDivider = ({ color = "cyan", density = 40 }: PixelDissolveDividerProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const visibleRef = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    resize();
    window.addEventListener("resize", resize);

    const w = () => canvas.offsetWidth;
    const h = () => canvas.offsetHeight;
    const rgb = colorValues[color];

    interface Pixel {
      x: number;
      y: number;
      size: number;
      baseAlpha: number;
      speed: number;
      offset: number;
      drift: number;
    }

    const pixels: Pixel[] = Array.from({ length: density }, () => ({
      x: Math.random() * w(),
      y: Math.random() * h(),
      size: Math.random() * 4 + 2,
      baseAlpha: Math.random() * 0.6 + 0.1,
      speed: Math.random() * 0.3 + 0.1,
      offset: Math.random() * Math.PI * 2,
      drift: (Math.random() - 0.5) * 0.4,
    }));

    let time = 0;

    const draw = () => {
      if (!visibleRef.current) {
        animRef.current = requestAnimationFrame(draw);
        return;
      }

      ctx.clearRect(0, 0, w(), h());
      time += 0.016;

      for (const p of pixels) {
        const alpha = p.baseAlpha * (0.5 + 0.5 * Math.sin(time * p.speed * 4 + p.offset));
        const yOff = Math.sin(time * p.speed * 2 + p.offset) * 8;
        const xOff = Math.cos(time * p.speed * 1.5 + p.offset) * 4;

        ctx.fillStyle = `rgba(${rgb}, ${alpha})`;
        ctx.fillRect(
          p.x + xOff + p.drift * time * 10,
          p.y + yOff,
          p.size,
          p.size
        );

        // Wrap pixels that drift out of bounds
        if (p.x + xOff + p.drift * time * 10 > w() + 10) p.x -= w() + 20;
        if (p.x + xOff + p.drift * time * 10 < -10) p.x += w() + 20;
      }

      // Draw subtle scan line
      const lineY = (time * 20) % h();
      const grad = ctx.createLinearGradient(0, lineY - 2, 0, lineY + 2);
      grad.addColorStop(0, `rgba(${rgb}, 0)`);
      grad.addColorStop(0.5, `rgba(${rgb}, 0.08)`);
      grad.addColorStop(1, `rgba(${rgb}, 0)`);
      ctx.fillStyle = grad;
      ctx.fillRect(0, lineY - 2, w(), 4);

      animRef.current = requestAnimationFrame(draw);
    };

    // Only animate when visible
    observerRef.current = new IntersectionObserver(
      ([entry]) => { visibleRef.current = entry.isIntersecting; },
      { threshold: 0 }
    );
    observerRef.current.observe(canvas);

    animRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", resize);
      observerRef.current?.disconnect();
    };
  }, [color, density]);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-16 md:h-24 pointer-events-none opacity-60"
      style={{ display: "block" }}
    />
  );
};

export default PixelDissolveDivider;
