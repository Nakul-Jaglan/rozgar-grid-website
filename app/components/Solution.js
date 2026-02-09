"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  Mic,
  Shield,
  Briefcase,
  Users,
  ArrowRight,
  MessageCircle,
  ChevronRight,
} from "lucide-react";

const features = [
  {
    icon: Mic,
    name: "Vernacular Voice Bot",
    details:
      "Uses Hinglish prompts and voice notes to overcome literacy barriers. Workers simply send a voice message on WhatsApp and get guided through the entire process.",
    color: "rishihood-red",
    tag: "Accessibility",
  },
  {
    icon: Shield,
    name: "Welfare Navigator",
    details:
      "Dynamically recommends schemes like PMJAY, BOCW based on worker profiles and assists with the complete claims process, end-to-end.",
    color: "narangi",
    tag: "Welfare",
  },
  {
    icon: Briefcase,
    name: "Gig Job Hub",
    details:
      "Connects local contractors and MSMEs to verified workers for transparent hiring. No more middlemen, no more exploitation.",
    color: "rishihood-red",
    tag: "Employment",
  },
  {
    icon: Users,
    name: "Trusted Network",
    details:
      "Supported by NGOs and field partners to validate jobs and handle grievances. Building trust through community-backed verification.",
    color: "narangi",
    tag: "Trust",
  },
];

export default function Solution() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeFeature, setActiveFeature] = useState(0);

  return (
    <section id="solution" className="relative py-32 lg:py-40" ref={ref}>
      {/* Background elements */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full bg-linear-to-bl from-rishihood-red/5 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6"
          >
            <div className="flex items-center justify-center gap-3">
              <hr className="accent-line" />
              <span className="text-xs font-bold tracking-[0.25em] uppercase text-rishihood-red">
                The Solution
              </span>
              <hr className="accent-line" />
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-heading font-bold leading-[1.1] text-deep-grey">
              Introducing{" "}
              <span className="text-gradient italic">Rozgar Grid</span>
            </h2>
            <p className="text-lg text-text-secondary leading-relaxed max-w-2xl mx-auto">
              A WhatsApp-based bot that connects laborers directly to verified
              jobs and eligible government schemes, bypassing complex portals. A
              vernacular, voice-enabled bridge for worker welfare.
            </p>
          </motion.div>
        </div>

        {/* Feature showcase */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left - Feature list */}
          <div className="lg:col-span-5 space-y-3">
            {features.map((feature, i) => (
              <motion.button
                key={feature.name}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.3 + i * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                onClick={() => setActiveFeature(i)}
                className={`w-full group text-left p-6 rounded-xl transition-all duration-300 ${activeFeature === i
                  ? "bg-white shadow-lg shadow-deep-grey/5 border border-sand/80"
                  : "bg-transparent hover:bg-white/50 border border-transparent"
                  }`}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-300 ${activeFeature === i
                      ? feature.color === "rishihood-red"
                        ? "bg-rishihood-red/10"
                        : "bg-narangi/10"
                      : "bg-sand/50"
                      }`}
                  >
                    <feature.icon
                      className={`w-5 h-5 transition-colors duration-300 ${activeFeature === i
                        ? feature.color === "rishihood-red"
                          ? "text-rishihood-red"
                          : "text-narangi"
                        : "text-text-muted"
                        }`}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h3
                        className={`text-base font-semibold transition-colors duration-300 ${activeFeature === i
                          ? "text-deep-grey"
                          : "text-text-secondary"
                          }`}
                      >
                        {feature.name}
                      </h3>
                      <ChevronRight
                        className={`w-4 h-4 transition-all duration-300 shrink-0 ${activeFeature === i
                          ? "text-rishihood-red translate-x-0 opacity-100"
                          : "text-text-muted -translate-x-2 opacity-0"
                          }`}
                      />
                    </div>
                    <span className="text-xs font-medium text-text-muted uppercase tracking-wider">
                      {feature.tag}
                    </span>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Right - Feature detail */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="relative rounded-3xl bg-linear-to-br from-deep-grey to-deep-grey/95 p-8 md:p-12 overflow-hidden min-h-[480px] flex flex-col justify-between">
              {/* Decorative grid */}
              <div className="absolute inset-0 opacity-5">
                <svg
                  width="100%"
                  height="100%"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <pattern
                      id="grid"
                      width="40"
                      height="40"
                      patternUnits="userSpaceOnUse"
                    >
                      <path
                        d="M 40 0 L 0 0 0 40"
                        fill="none"
                        stroke="white"
                        strokeWidth="0.5"
                      />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
              </div>

              {/* Glowing orb */}
              <div
                className={`absolute -top-20 -right-20 w-60 h-60 rounded-full blur-3xl pointer-events-none transition-colors duration-700 ${features[activeFeature].color === "rishihood-red"
                  ? "bg-rishihood-red/15"
                  : "bg-narangi/15"
                  }`}
              />

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeFeature}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="relative z-10"
                >
                  {/* Tag */}
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 mb-8">
                    <div
                      className={`w-1.5 h-1.5 rounded-full ${features[activeFeature].color === "rishihood-red"
                        ? "bg-rishihood-red"
                        : "bg-narangi"
                        }`}
                    />
                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/60">
                      {features[activeFeature].tag}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-white/[0.07] flex items-center justify-center mb-8 border border-white/5">
                    {(() => {
                      const IconComp = features[activeFeature].icon;
                      return <IconComp className="w-7 h-7 text-white/80" />;
                    })()}
                  </div>

                  <h3 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
                    {features[activeFeature].name}
                  </h3>
                  <p className="text-lg text-white/50 leading-relaxed max-w-lg">
                    {features[activeFeature].details}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* WhatsApp indicator */}
              <div className="relative z-10 mt-12 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#25D366]/20 flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-[#25D366]" />
                </div>
                <div>
                  <p className="text-sm font-medium text-white/60">
                    Powered by WhatsApp
                  </p>
                  <p className="text-xs text-white/30">
                    No app download required
                  </p>
                </div>
              </div>

              {/* Feature step indicators */}
              <div className="relative z-10 mt-8 flex gap-2">
                {features.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveFeature(i)}
                    className={`h-1 rounded-full transition-all duration-500 ${i === activeFeature
                      ? "w-8 bg-white/60"
                      : "w-4 bg-white/15 hover:bg-white/25"
                      }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
