"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Search, Database, MessageCircle, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Field Research",
    description:
      "Ground-level surveys across labor chowks, construction sites, and industrial zones in Vadodara to map real worker challenges.",
  },
  {
    icon: Database,
    step: "02",
    title: "Policy Mapping",
    description:
      "Comprehensive mapping of existing government welfare schemes, identifying gaps between policy intent and ground-level delivery.",
  },
  {
    icon: MessageCircle,
    step: "03",
    title: "WhatsApp Bot",
    description:
      "Building a vernacular, voice-enabled bot on WhatsApp that workers already use, eliminating the need for new app downloads.",
  },
  {
    icon: CheckCircle,
    step: "04",
    title: "Connect & Deliver",
    description:
      "Linking workers to verified jobs and eligible schemes through a trusted network of NGOs and field partners.",
  },
];

export default function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-32 lg:py-40 overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-b from-warm-white to-cream/30" />

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
              Our Approach
            </span>
            <hr className="accent-line" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-heading font-bold leading-[1.1] text-deep-grey">
            From Research
            <br />
            <span className="text-gradient italic">to Real Impact</span>
          </h2>
        </motion.div>

        {/* Process steps */}
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-linear-to-r from-transparent via-sand to-transparent -translate-y-1/2" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.8,
                  delay: 0.1 + i * 0.15,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group relative text-center"
              >
                {/* Step number badge */}
                <div className="relative z-10 w-20 h-20 mx-auto mb-8 rounded-2xl bg-white border border-sand/80 flex items-center justify-center group-hover:border-rishihood-red/20 group-hover:shadow-lg group-hover:shadow-rishihood-red/5 transition-all duration-500">
                  <step.icon className="w-8 h-8 text-rishihood-red" />
                  {/* Step badge */}
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-linear-to-br from-rishihood-red to-narangi flex items-center justify-center">
                    <span className="text-[10px] font-bold text-white">
                      {step.step}
                    </span>
                  </div>
                </div>

                <h3 className="text-lg font-heading font-semibold text-deep-grey mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
