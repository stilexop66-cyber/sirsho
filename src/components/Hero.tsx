import { motion } from "framer-motion";
import { ChevronDown, Heart } from "lucide-react";
import { heroTagline } from "../data/content";

export default function Hero() {
  const scrollToStory = () => {
    document.getElementById("our-story")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-rose-900/40 via-rose-900/30 to-rose-50" />

      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-4 flex items-center gap-2 text-rose-50"
        >
          <Heart className="h-5 w-5 fill-rose-200 text-rose-200" />
          <span className="text-sm uppercase tracking-[0.3em]">A Little Something For You</span>
          <Heart className="h-5 w-5 fill-rose-200 text-rose-200" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          style={{ fontFamily: "'Great Vibes', cursive" }}
          className="text-6xl text-white drop-shadow-lg sm:text-7xl md:text-8xl"
        >
          To the Love of My Life
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-6 max-w-xl font-serif text-lg italic text-rose-50 sm:text-xl"
        >
          "{heroTagline}"
        </motion.p>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          onClick={scrollToStory}
          className="mt-12 flex flex-col items-center gap-2 text-rose-50/90 transition hover:text-white"
        >
          <span className="text-sm tracking-wide">Scroll to begin our story</span>
          <motion.span animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.8 }}>
            <ChevronDown className="h-6 w-6" />
          </motion.span>
        </motion.button>
      </div>
    </section>
  );
}
