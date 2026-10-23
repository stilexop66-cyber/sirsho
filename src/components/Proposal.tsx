import { useRef, useState } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { Heart } from "lucide-react";
import {
  proposalQuestion,
  proposalSubtext,
  yesResponseTitle,
  yesResponseSubtext,
  partnerName,
} from "../data/content";

const NO_EXCUSES = [
  "No",
  "Are you sure?",
  "Really sure?",
  "Think again...",
  "Last chance!",
  "You might regret this...",
  "I'll ask one more time...",
  "Pretty please?",
  "This is your final answer?",
  "Okay but... why though?",
];

function fireConfetti() {
  const duration = 3.5 * 1000;
  const end = Date.now() + duration;

  const colors = ["#fb7185", "#f472b6", "#fbbf24", "#fda4af", "#fff1f2"];

  (function frame() {
    confetti({
      particleCount: 4,
      angle: 60,
      spread: 65,
      origin: { x: 0 },
      colors,
    });
    confetti({
      particleCount: 4,
      angle: 120,
      spread: 65,
      origin: { x: 1 },
      colors,
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();

  confetti({
    particleCount: 150,
    spread: 100,
    origin: { y: 0.6 },
    colors,
  });
}

export default function Proposal() {
  const [accepted, setAccepted] = useState(false);
  const [noIndex, setNoIndex] = useState(0);
  const [noPos, setNoPos] = useState<{ x: number; y: number } | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const yesScale = 1 + Math.min(noIndex, 8) * 0.14;

  const handleNoInteraction = () => {
    const container = containerRef.current;
    if (!container) return;
    const bounds = container.getBoundingClientRect();
    const maxX = Math.max(bounds.width - 140, 40);
    const maxY = Math.max(bounds.height - 60, 40);
    const x = Math.random() * maxX - maxX / 2;
    const y = Math.random() * maxY - maxY / 2;
    setNoPos({ x, y });
    setNoIndex((i) => Math.min(i + 1, NO_EXCUSES.length - 1));
  };

  const handleYes = () => {
    setAccepted(true);
    window.dispatchEvent(new Event("proposal:accepted"));
    fireConfetti();
    setTimeout(fireConfetti, 700);
    setTimeout(fireConfetti, 1500);
  };

  return (
    <section
      id="proposal"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-5 py-24 sm:px-8"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/proposal-bg.jpg')" }}
      />
      <div className="absolute inset-0 bg-rose-950/55" />

      <div
        ref={containerRef}
        className="relative z-10 mx-auto flex w-full max-w-2xl flex-col items-center text-center"
      >
        {!accepted ? (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="flex w-full flex-col items-center"
          >
            <Heart className="mb-5 h-10 w-10 animate-pulse fill-rose-300 text-rose-300" />
            <h2
              style={{ fontFamily: "'Great Vibes', cursive" }}
              className="text-5xl text-white drop-shadow-lg sm:text-7xl"
            >
              {partnerName}, {proposalQuestion}
            </h2>
            <p className="mt-6 max-w-xl font-serif text-lg italic text-rose-50/90">
              {proposalSubtext}
            </p>

            <div className="relative mt-14 flex min-h-[160px] w-full flex-col items-center justify-center gap-6 sm:flex-row sm:gap-10">
              <motion.button
                onClick={handleYes}
                animate={{ scale: yesScale }}
                transition={{ type: "spring", stiffness: 260, damping: 15 }}
                className="z-20 rounded-full bg-rose-500 px-10 py-4 text-lg font-semibold text-white shadow-lg shadow-rose-900/40 transition hover:bg-rose-400"
              >
                Yes, absolutely! 💍
              </motion.button>

              <motion.button
                onClick={handleNoInteraction}
                onMouseEnter={handleNoInteraction}
                animate={noPos ? { x: noPos.x, y: noPos.y } : { x: 0, y: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 18 }}
                className="z-10 rounded-full border border-white/50 bg-white/10 px-8 py-4 text-base font-medium text-white backdrop-blur transition hover:bg-white/20"
              >
                {NO_EXCUSES[noIndex]}
              </motion.button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, type: "spring" }}
            className="flex flex-col items-center"
          >
            <div className="mb-6 text-7xl">💖</div>
            <h2
              style={{ fontFamily: "'Great Vibes', cursive" }}
              className="text-5xl text-white drop-shadow-lg sm:text-6xl"
            >
              {yesResponseTitle}
            </h2>
            <p className="mt-6 max-w-xl font-serif text-lg text-rose-50/90">{yesResponseSubtext}</p>
            <div className="mt-10 flex gap-2 text-3xl">
              <span className="animate-bounce [animation-delay:0ms]">💐</span>
              <span className="animate-bounce [animation-delay:120ms]">💍</span>
              <span className="animate-bounce [animation-delay:240ms]">💕</span>
              <span className="animate-bounce [animation-delay:360ms]">🥂</span>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
