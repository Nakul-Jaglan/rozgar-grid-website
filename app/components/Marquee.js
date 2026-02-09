"use client";

import { motion } from "framer-motion";

const words = [
  "Dignity",
  "Welfare",
  "Access",
  "Security",
  "Justice",
  "Equity",
  "Rights",
  "Empowerment",
  "Opportunity",
  "Inclusion",
];

export default function Marquee() {
  return (
    <section className="relative py-12 bg-deep-grey overflow-hidden">
      <div className="flex">
        <motion.div
          className="flex items-center gap-8 whitespace-nowrap animate-marquee"
          style={{ minWidth: "max-content" }}
        >
          {[...words, ...words].map((word, i) => (
            <div key={i} className="flex items-center gap-8">
              <span className="text-[clamp(1.5rem,3vw,2.5rem)] font-heading font-bold text-white/10 uppercase tracking-wider">
                {word}
              </span>
              <span className="w-2 h-2 rounded-full bg-rishihood-red/40 shrink-0" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
