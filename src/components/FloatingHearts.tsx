import { useMemo } from "react";

const SYMBOLS = ["💗", "💕", "🌸", "✨", "💐"];

function random(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

export default function FloatingHearts({ count = 14 }: { count?: number }) {
  const items = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: random(0, 100),
        delay: random(0, 12),
        duration: random(14, 26),
        size: random(0.8, 1.9),
        symbol: SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)],
      })),
    [count],
  );

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {items.map((item) => (
        <span
          key={item.id}
          className="absolute bottom-[-10%] select-none opacity-70 drop-shadow-sm animate-float-up"
          style={{
            left: `${item.left}%`,
            fontSize: `${item.size}rem`,
            animationDelay: `${item.delay}s`,
            animationDuration: `${item.duration}s`,
          }}
        >
          {item.symbol}
        </span>
      ))}
    </div>
  );
}
