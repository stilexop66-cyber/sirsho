import { motion } from "framer-motion";
import { Interests } from "../data/content";
import SectionHeading from "./SectionHeading";

export default function Interests() {
  return (
    <section id="interests" className="relative overflow-hidden bg-rose-50 px-5 py-24 sm:px-8">
      <div className="pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-rose-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-amber-200/30 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Us, In a Nutshell"
          title="Things We Love Together"
          subtitle="Different in a lot of ways, but somehow always on the same page about these."
        />

        <div className="flex flex-wrap justify-center gap-5">
          {Interests.map((interest, i) => (
            <motion.div
              key={interest.title}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex w-full max-w-xs flex-col items-center rounded-full bg-white px-6 py-8 text-center shadow-md shadow-rose-200/50 ring-1 ring-rose-100 transition hover:-translate-y-1 hover:shadow-lg sm:w-64"
            >
              <span className="text-4xl">{interest.emoji}</span>
              <h3 className="mt-3 font-serif text-lg font-semibold text-rose-900">
                {interest.title}
              </h3>
              <p className="mt-2 text-sm font-serif text-rose-900/70">{interest.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
