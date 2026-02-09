"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "No one told us about e-Shram, about health insurance\u2014We have cards, but we have no idea how to use them.",
    author: "Female Factory Worker",
    location: "Vadodara",
  },
  {
    quote:
      "The night I lost my husband to a factory accident; I received fifty thousand rupees... How is that compensation for a lost life?",
    author: "Widow, Daily Wage Worker",
    location: "Vadodara",
  },
  {
    quote:
      "New workers often leave just for \u20B910 more somewhere else... But my old team has been with me for over 7 years.",
    author: "Labour Contractor",
    location: "Rishihood University Site",
  },
];

export default function Voices() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="voices" className="relative py-32 lg:py-40 overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-b from-warm-white via-cream/30 to-warm-white" />

      {/* Decorative quote marks */}
      <div className="absolute top-20 left-10 pointer-events-none select-none opacity-[0.03]">
        <span className="text-[30vw] font-heading font-black leading-none text-rishihood-red">
          &ldquo;
        </span>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl mb-20"
        >
          <div className="flex items-center gap-3 mb-6">
            <hr className="accent-line" />
            <span className="text-xs font-bold tracking-[0.25em] uppercase text-rishihood-red">
              Voices from the Ground
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-heading font-bold leading-[1.1] text-deep-grey">
            Stories that
            <br />
            <span className="italic text-rishihood-red">demand action</span>
          </h2>
        </motion.div>

        {/* Testimonial cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.2 + i * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative"
            >
              <div className="h-full flex flex-col p-8 md:p-10 rounded-2xl bg-white border border-sand/80 hover:border-rishihood-red/15 transition-all duration-500 hover:shadow-xl hover:shadow-rishihood-red/5">
                {/* Quote icon */}
                <div className="w-12 h-12 rounded-xl bg-rishihood-red/5 flex items-center justify-center mb-8">
                  <Quote className="w-5 h-5 text-rishihood-red" />
                </div>

                {/* Quote text */}
                <blockquote className="flex-1 text-lg md:text-xl font-heading text-deep-grey leading-relaxed mb-8">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="pt-6 border-t border-sand">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-linear-to-br from-rishihood-red/20 to-narangi/20 flex items-center justify-center">
                      <span className="text-xs font-bold text-rishihood-red">
                        {testimonial.author.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-deep-grey">
                        {testimonial.author}
                      </p>
                      <p className="text-xs text-text-muted">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
