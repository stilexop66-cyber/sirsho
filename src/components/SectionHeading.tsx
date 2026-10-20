import { motion } from "framer-motion";

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7 }}
      className="mx-auto mb-14 max-w-2xl text-center"
    >
      <span className="text-xs font-semibold uppercase tracking-[0.3em] text-rose-500">
        {eyebrow}
      </span>
      <h2
        style={{ fontFamily: "'Great Vibes', cursive" }}
        className="mt-2 text-5xl text-rose-800 sm:text-6xl"
      >
        {title}
      </h2>
      {subtitle && <p className="mt-4 font-serif text-base text-rose-900/70 sm:text-lg">{subtitle}</p>}
    </motion.div>
  );
}
