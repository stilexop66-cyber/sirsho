import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { storyEvents } from "../data/content";
import SectionHeading from "./SectionHeading";

export default function OurStory() {
  return (
    <section id="our-story" className="relative bg-rose-50 px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="How It All Began"
          title="Our Story"
          subtitle="Every chapter brought us a little closer. Here are a few of my favorites."
        />

        <div className="relative">
          <div className="absolute left-5 top-0 h-full w-0.5 bg-rose-300/60 sm:left-1/2 sm:-translate-x-1/2" />

          <div className="space-y-16">
            {storyEvents.map((event, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={event.title}
                  className="relative flex flex-col gap-6 sm:flex-row sm:items-center"
                >
                  <div className="absolute left-5 top-2 z-10 -translate-x-1/2 sm:left-1/2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-rose-500 shadow-lg shadow-rose-300">
                      <Heart className="h-4 w-4 fill-white text-white" />
                    </div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7 }}
                    className={`ml-14 sm:ml-0 sm:w-1/2 ${isEven ? "sm:order-1 sm:pr-14 sm:text-right" : "sm:order-3 sm:pl-14"}`}
                  >
                    <span className="text-xs font-semibold uppercase tracking-widest text-rose-500">
                      {event.date}
                    </span>
                    <h3 className="mt-1 font-serif text-2xl font-semibold text-rose-900">
                      {event.title}
                    </h3>
                    <p className="mt-3 font-serif text-rose-900/70">{event.description}</p>
                  </motion.div>

                  <div className="hidden sm:order-2 sm:block sm:w-0" />

                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className={`ml-14 overflow-hidden rounded-2xl shadow-xl shadow-rose-200/60 sm:ml-0 sm:w-1/2 ${
                      isEven ? "sm:order-3 sm:pl-14" : "sm:order-1 sm:pr-14"
                    }`}
                  >
                    <img
  src={event.image}
  alt={event.title}
  className="h-56 w-full rounded-2xl object-contain bg-rose-100/50 ring-4 ring-white sm:h-64"
/>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
