"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BookOpen, Map, Cpu } from "lucide-react";

const coreValues = [
  {
    icon: BookOpen,
    title: "Hands-on Research",
    description:
      "Eight weeks of immersive fieldwork, walking through construction sites and labor chowks in Sonipat to understand the real challenges workers face.",
  },
  {
    icon: Map,
    title: "Field-Informed Solutions",
    description:
      "Every feature of Rozgar Grid was shaped by conversations with workers, contractors, and NGOs on the ground, not assumptions from a desk.",
  },
  {
    icon: Cpu,
    title: "Technology-Enabled Access",
    description:
      "Leveraging WhatsApp, voice AI, and vernacular interfaces to bridge the digital divide for workers who own smartphones but struggle with complex portals.",
  },
];

export default function Mission() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="mission" className="relative py-32 lg:py-40" ref={ref}>
      {/* Subtle background accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sand to-transparent" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-20">
          {/* Left - Label & heading */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="lg:sticky lg:top-32 space-y-6"
            >
              <div className="flex items-center gap-3">
                <hr className="accent-line" />
                <span className="text-xs font-bold tracking-[0.25em] uppercase text-rishihood-red">
                  Our Mission
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-heading font-bold leading-[1.1] text-deep-grey">
                Turning policy
                <br />
                into{" "}
                <span className="italic text-rishihood-red">
                  real change
                </span>
              </h2>
              <p className="text-lg text-text-secondary leading-relaxed max-w-md">
                To create a system where every daily wage worker, regardless of
                skill level, gets fair work, on-time payments, and full access to
                entitled benefits.
              </p>
              <div className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-cream/70 border border-sand">
                <Map className="w-4 h-4 text-narangi" />
                <span className="text-sm font-medium text-text-primary">
                  Focus Area:{" "}
                  <span className="text-narangi font-semibold">
                    Sonipat, Haryana
                  </span>
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right - Value cards */}
          <div className="lg:col-span-7 space-y-6">
            {coreValues.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.8,
                  delay: 0.2 + i * 0.15,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group relative p-8 md:p-10 rounded-2xl bg-white border border-sand/80 hover:border-rishihood-red/20 transition-all duration-500 hover:shadow-xl hover:shadow-rishihood-red/5"
              >
                {/* Number */}
                <span className="absolute top-8 right-8 text-7xl font-heading font-bold text-deep-grey/[0.03] leading-none select-none">
                  0{i + 1}
                </span>

                <div className="flex flex-col md:flex-row gap-6 relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-rishihood-red/10 to-narangi/10 flex items-center justify-center shrink-0 group-hover:from-rishihood-red/15 group-hover:to-narangi/15 transition-colors duration-500">
                    <value.icon className="w-6 h-6 text-rishihood-red" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-heading font-semibold text-deep-grey">
                      {value.title}
                    </h3>
                    <p className="text-base text-text-secondary leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>

                {/* Bottom accent line on hover */}
                <div className="absolute bottom-0 left-8 right-8 h-[2px] bg-gradient-to-r from-rishihood-red to-narangi scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
