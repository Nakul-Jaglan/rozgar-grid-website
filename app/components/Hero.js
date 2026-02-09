"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight, ChevronRight } from "lucide-react";

const floatingWords = [
  "Dignity",
  "Access",
  "Welfare",
  "Security",
  "Fairness",
  "Rights",
  "Equity",
  "Justice",
];

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      id="hero"
    >
      {/* Background grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-60" />

      {/* Large decorative background text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <motion.span
          style={{ y: y2 }}
          className="text-[20vw] font-heading font-black text-rishihood-red/3 leading-none whitespace-nowrap"
        >
          ROZGAR
        </motion.span>
      </div>

      {/* Floating gradient orbs */}
      <div className="absolute top-20 right-[15%] w-125 h-125 rounded-full bg-linear-to-br from-rishihood-red/10 to-narangi/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-[10%] w-100 h-100 rounded-full bg-linear-to-tr from-narangi/8 to-rishihood-red/5 blur-3xl pointer-events-none" />

      {/* Animated accent lines */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="absolute left-10 lg:left-20 top-1/4 w-px h-40 bg-linear-to-b from-transparent via-rishihood-red/30 to-transparent origin-top hidden lg:block"
      />
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.2, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="absolute right-10 lg:right-20 top-1/3 w-px h-32 bg-linear-to-b from-transparent via-narangi/30 to-transparent origin-top hidden lg:block"
      />

      <motion.div
        style={{ opacity, scale }}
        className="relative z-10 max-w-350 mx-auto px-6 md:px-10 lg:px-16 pt-32 pb-20"
      >
        <div className="grid lg:grid-cols-12 gap-12 items-center min-h-[70vh]">
          {/* Left content */}
          <div className="lg:col-span-7 space-y-8">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rishihood-red/5 border border-rishihood-red/10">
                <div className="w-2 h-2 rounded-full bg-rishihood-red animate-pulse" />
                <span className="text-xs font-semibold tracking-widest uppercase text-rishihood-red">
                  Rishihood University Initiative
                </span>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 0.4,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <h1 className="text-[clamp(2.5rem,5.5vw,5rem)] font-heading font-bold leading-[1.05] tracking-tight text-deep-grey">
                Bridging the Gap:{" "}
                {/* <span className="relative">
                  <span className="relative z-10">:</span>
                </span> */}
                <br />
                <span className="text-gradient">Dignity & Security</span>
                <br />
                for Every Worker
              </h1>
            </motion.div>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.6,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="text-lg md:text-xl text-text-secondary leading-relaxed max-w-xl font-light"
            >
              Connecting daily wage laborers to better jobs, social security, and
              government support through a vernacular, voice-enabled digital
              bridge.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <a
                href="#join"
                className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-rishihood-red text-white text-[15px] font-semibold rounded-full hover:bg-rishihood-red-dark transition-all duration-300 shadow-lg shadow-rishihood-red/20 hover:shadow-xl hover:shadow-rishihood-red/30"
              >
                Join the Initiative
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <a
                href="#solution"
                className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-transparent text-deep-grey text-[15px] font-semibold rounded-full border border-deep-grey/15 hover:border-deep-grey/40 transition-all duration-300"
              >
                Explore Rozgar Grid
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-wrap gap-8 pt-6 border-t border-sand"
            >
              {[
                { value: "8", suffix: " Weeks", label: "of Fieldwork" },
                { value: "300", suffix: "+", label: "Workers Surveyed" },
                { value: "4", suffix: "", label: "Core Features" },
              ].map((stat, i) => (
                <div key={i} className="space-y-1">
                  <div className="flex items-baseline gap-0.5">
                    <span className="text-3xl font-heading font-bold text-deep-grey">
                      {stat.value}
                    </span>
                    <span className="text-lg font-heading font-bold text-rishihood-red">
                      {stat.suffix}
                    </span>
                  </div>
                  <p className="text-xs font-medium text-text-muted uppercase tracking-wider">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right side - Abstract visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1.2,
              delay: 0.5,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="lg:col-span-5 hidden lg:flex items-center justify-center"
          >
            <motion.div style={{ y: y1 }} className="relative">
              {/* Concentric circles / abstract grid visualization */}
              <div className="relative w-105 h-105">
                {/* Outer ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 60,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-0 rounded-full border border-rishihood-red/10"
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-rishihood-red/30" />
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 rounded-full bg-narangi/40" />
                </motion.div>

                {/* Second ring */}
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 45,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-10 rounded-full border border-narangi/15"
                >
                  <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-rishihood-red/40" />
                </motion.div>

                {/* Third ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-20 rounded-full border border-rishihood-red/20"
                >
                  <div className="absolute top-0 right-1/4 -translate-y-1/2 w-2 h-2 rounded-full bg-narangi/50" />
                </motion.div>

                {/* Center content */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-48 h-48 rounded-2xl bg-linear-to-br from-rishihood-red to-narangi p-px">
                    <div className="w-full h-full rounded-2xl bg-warm-white flex flex-col items-center justify-center gap-3">
                      <div className="grid grid-cols-3 gap-2">
                        {[...Array(9)].map((_, i) => (
                          <motion.div
                            key={i}
                            animate={{
                              opacity: [0.3, 1, 0.3],
                              scale: [0.8, 1, 0.8],
                            }}
                            transition={{
                              duration: 2,
                              delay: i * 0.2,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                            className="w-5 h-5 rounded-md bg-linear-to-br from-rishihood-red/60 to-narangi/60"
                          />
                        ))}
                      </div>
                      <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-text-muted mt-1">
                        Rozgar Grid
                      </span>
                    </div>
                  </div>
                </div>

                {/* Floating labels */}
                {floatingWords.slice(0, 6).map((word, i) => {
                  const angle = (i * 60 - 90) * (Math.PI / 180);
                  const radius = 195;
                  const x = Math.cos(angle) * radius;
                  const y = Math.sin(angle) * radius;
                  return (
                    <motion.div
                      key={word}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1 + i * 0.15, duration: 0.5 }}
                      className="absolute"
                      style={{
                        top: `calc(50% + ${y}px)`,
                        left: `calc(50% + ${x}px)`,
                        transform: "translate(-50%, -50%)",
                      }}
                    >
                      <span className="px-3 py-1.5 text-[10px] font-semibold tracking-wider uppercase bg-white/80 backdrop-blur-sm rounded-full border border-sand text-text-secondary whitespace-nowrap shadow-sm">
                        {word}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        >
          <span className="text-[10px] font-semibold tracking-[0.3em] uppercase text-text-muted">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowDown className="w-4 h-4 text-text-muted" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
