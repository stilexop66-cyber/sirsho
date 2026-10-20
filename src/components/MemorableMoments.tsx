import { motion } from "framer-motion";
import { memorableMoments } from "../data/content";
import SectionHeading from "./SectionHeading";

export default function MemorableMoments() {
  return (
    <section id="moments" className="relative bg-white px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Little Treasures"
          title="Memorable Moments"
          subtitle="The tiny, silly, perfect moments that I replay in my head on repeat."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {memorableMoments.map((moment, i) => (
            <motion.div
              key={moment.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
              whileHover={{ y: -8, rotate: -0.5 }}
              className="group relative rounded-3xl border border-rose-100 bg-gradient-to-br from-rose-50 to-white p-7 shadow-sm shadow-rose-100 transition-shadow hover:shadow-xl hover:shadow-rose-200/70"
            >
              <div className="mb-4 text-4xl">{moment.emoji}</div>
              <h3 className="font-serif text-xl font-semibold text-rose-900">{moment.title}</h3>
              <p className="mt-2 font-serif text-rose-900/70">{moment.description}</p>
              <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-rose-200/0 transition group-hover:ring-rose-300/60" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
