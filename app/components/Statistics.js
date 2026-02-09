"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { TrendingDown, Calendar, HeartPulse } from "lucide-react";

const stats = [
  {
    icon: TrendingDown,
    label: "Average Daily Wage (Construction)",
    value: "500 - 800",
    prefix: "INR ",
    suffix: "",
    description: "Despite backbreaking labor, wages remain stagnant across construction sites in Sonipat.",
  },
  {
    icon: Calendar,
    label: "Work Days per Month",
    value: "~26",
    prefix: "",
    suffix: " days",
    description: "Workers toil nearly every day of the month with no guaranteed paid leave or rest days.",
  },
  {
    icon: HeartPulse,
    label: "Awareness Gap",
    value: "3",
    prefix: "Only ",
    suffix: " of surveyed",
    description: "Out of all workers surveyed, only 3 had Ayushman cards. Most were unaware of their usage.",
  },
];

function AnimatedCounter({ value, prefix, suffix, isInView }) {
  const [displayed, setDisplayed] = useState(prefix + "0" + suffix);

  useEffect(() => {
    if (!isInView) return;
    // Just animate from blank to final value
    const timer = setTimeout(() => {
      setDisplayed(prefix + value + suffix);
    }, 300);
    return () => clearTimeout(timer);
  }, [isInView, value, prefix, suffix]);

  return (
    <span className="text-4xl md:text-5xl font-heading font-bold text-deep-grey">
      {displayed}
    </span>
  );
}

export default function Statistics() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="impact" className="relative py-32 lg:py-40 bg-cream/50" ref={ref}>
      {/* Top edge */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sand to-transparent" />

      {/* Background shape */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-rishihood-red/[0.02] to-narangi/[0.02] blur-3xl pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <hr className="accent-line" />
            <span className="text-xs font-bold tracking-[0.25em] uppercase text-rishihood-red">
              Impact
            </span>
            <hr className="accent-line" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-heading font-bold leading-[1.1] text-deep-grey mb-6">
            The Reality
            <br />
            <span className="text-gradient italic">in Numbers</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-xl mx-auto">
            Data collected from field surveys across labor chowks, construction
            sites, and factory zones in Sonipat.
          </p>
        </motion.div>

        {/* Stats grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.2 + i * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative p-8 md:p-10 rounded-2xl bg-white border border-sand/80 hover:border-rishihood-red/15 transition-all duration-500 hover:shadow-xl hover:shadow-rishihood-red/5 text-center"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-rishihood-red/8 to-narangi/8 flex items-center justify-center mx-auto mb-8">
                <stat.icon className="w-6 h-6 text-rishihood-red" />
              </div>

              {/* Value */}
              <div className="mb-4">
                <AnimatedCounter
                  value={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  isInView={isInView}
                />
              </div>

              {/* Label */}
              <h3 className="text-sm font-bold tracking-wide uppercase text-text-muted mb-4">
                {stat.label}
              </h3>

              {/* Description */}
              <p className="text-sm text-text-secondary leading-relaxed">
                {stat.description}
              </p>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-8 right-8 h-[2px] bg-gradient-to-r from-rishihood-red to-narangi scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center rounded-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
