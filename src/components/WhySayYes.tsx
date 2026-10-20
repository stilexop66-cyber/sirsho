import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { reasonsToSayYes } from "../data/content";
import SectionHeading from "./SectionHeading";

export default function WhySayYes() {
  return (
    <section id="why-yes" className="relative bg-white px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="In Case You Needed Reasons"
          title="Why You Should Say Yes"
          subtitle="I could write a hundred more of these, but here are a few that come to mind first."
        />

        <div className="space-y-5">
          {reasonsToSayYes.map((reason, i) => (
            <motion.div
              key={reason}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="flex items-start gap-4 rounded-2xl bg-rose-50/80 p-5 shadow-sm ring-1 ring-rose-100"
            >
              <Heart className="mt-1 h-5 w-5 flex-shrink-0 fill-rose-400 text-rose-400" />
              <p className="font-serif text-lg text-rose-900/90">{reason}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
