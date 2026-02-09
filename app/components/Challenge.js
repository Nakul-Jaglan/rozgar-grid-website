"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { AlertTriangle, Wifi, ShieldOff } from "lucide-react";

const issues = [
  {
    icon: AlertTriangle,
    title: "Fragmented Delivery",
    text: "Policies exist, but complex registration and low awareness prevent them from reaching the ground level.",
    accent: "from-rishihood-red to-rishihood-red-dark",
    lightAccent: "bg-rishihood-red/8",
  },
  {
    icon: Wifi,
    title: "Digital Divide",
    text: "Many workers do not know about platforms like e-Shram or how to use them despite owning smartphones.",
    accent: "from-narangi to-narangi-dark",
    lightAccent: "bg-narangi/8",
  },
  {
    icon: ShieldOff,
    title: "Informal Operations",
    text: "Contractors often operate informally, leading to wage theft and lack of safety nets.",
    accent: "from-rishihood-red-dark to-deep-grey",
    lightAccent: "bg-deep-grey/8",
  },
];

export default function Challenge() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="challenge"
      className="relative py-32 lg:py-40 bg-deep-grey overflow-hidden noise-bg"
      ref={ref}
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-rishihood-red/5 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-linear-to-tr from-narangi/5 to-transparent pointer-events-none" />

      {/* Large decorative text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none">
        <span className="text-[15vw] font-heading font-black text-white/2 leading-none whitespace-nowrap">
          CHALLENGE
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
            <hr className="w-12 h-[2px] bg-rishihood-red border-none rounded" />
            <span className="text-xs font-bold tracking-[0.25em] uppercase text-rishihood-red">
              The Challenge
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-heading font-bold leading-[1.1] text-white mb-6">
            Invisibility
            <br />& Exclusion
          </h2>
          <p className="text-lg text-white/60 leading-relaxed">
            Daily wage laborers drive the urban economy in sectors like
            construction and manufacturing but face uncertain job conditions and
            inconsistent wages.
          </p>
        </motion.div>

        {/* Issue cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {issues.map((issue, i) => (
            <motion.div
              key={issue.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.3 + i * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative"
            >
              <div className="relative p-8 md:p-10 rounded-2xl bg-white/4 border border-white/6 backdrop-blur-sm hover:bg-white/7 hover:border-white/12 transition-all duration-500 h-full">
                {/* Top accent */}
                <div
                  className={`absolute top-0 left-8 right-8 h-[2px] bg-linear-to-r ${issue.accent} rounded-b opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-white/6 flex items-center justify-center mb-8">
                  <issue.icon className="w-6 h-6 text-white/70" />
                </div>

                {/* Number */}
                <span className="text-6xl font-heading font-bold text-white/3 absolute top-6 right-8 select-none">
                  0{i + 1}
                </span>

                <h3 className="text-xl font-heading font-semibold text-white mb-4">
                  {issue.title}
                </h3>
                <p className="text-[15px] text-white/50 leading-relaxed">
                  {issue.text}
                </p>

                {/* Bottom decorative dot */}
                <div className="mt-8 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-rishihood-red/60" />
                  <div className="w-8 h-px bg-white/10" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
