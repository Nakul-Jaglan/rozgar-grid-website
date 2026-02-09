"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  GraduationCap,
  Heart,
  ArrowUp,
} from "lucide-react";

const footerLinks = [
  {
    title: "Navigate",
    links: [
      { label: "Mission", href: "#mission" },
      { label: "The Challenge", href: "#challenge" },
      { label: "Rozgar Grid", href: "#solution" },
      { label: "Impact Data", href: "#impact" },
      { label: "Voices", href: "#voices" },
    ],
  },
  // {
  //   title: "Resources",
  //   links: [
  //     { label: "Project Report", href: "#" },
  //     { label: "Field Survey Data", href: "#" },
  //     { label: "Policy Mapping", href: "#" },
  //     { label: "Partner with Us", href: "#" },
  //   ],
  // },
];

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      id="join"
      className="relative bg-deep-grey text-white overflow-hidden noise-bg"
      ref={ref}
    >
      {/* CTA Section */}
      <div className="relative border-b border-white/6">
        <div className="absolute inset-0 bg-linear-to-r from-rishihood-red/10 via-transparent to-narangi/10 pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 py-24 lg:py-32 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-[1.1] mb-6">
              Partner with us to{" "}
              <span className="italic text-rishihood-red-light">transform</span>{" "}
              urban labor welfare.
            </h2>
            <p className="text-lg text-white/50 mb-10 max-w-xl">
              Join our mission to make government welfare reach the hands that
              build our cities. Every partnership matters.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:rozgargrid@gmail.com"
                className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-white text-deep-grey text-[15px] font-semibold rounded-full hover:bg-rishihood-red hover:text-white transition-all duration-300"
              >
                <Mail className="w-4 h-4" />
                Get in Touch
              </a>
              <a
                href="#"
                className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-transparent text-white text-[15px] font-semibold rounded-full border border-white/20 hover:border-white/40 transition-all duration-300"
              >
                Download Report
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer content */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 py-16 lg:py-20 relative z-10">
        <div className="grid md:grid-cols-12 gap-12 lg:gap-16">
          {/* Brand column */}
          <div className="md:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              {/* <div className="w-9 h-9 rounded-lg bg-rishihood-red flex items-center justify-center">
                <span className="text-white font-heading font-bold text-lg leading-none">
                  R
                </span>
              </div> */}
              <span className="font-heading font-semibold text-lg tracking-tight">
                Rozgar Grid
              </span>
            </div>
            <p className="text-sm text-white/40 leading-relaxed max-w-sm">
              A student-led research initiative under the guidance of Ms. Puja
              and Shri Jigar Inamdar Sir. Conducted over 8 weeks of fieldwork,
              policy mapping, and contractor surveys.
            </p>
            <div className="flex items-center gap-2 text-sm text-white/40">
              <GraduationCap className="w-4 h-4 text-narangi/60" />
              <span>Rishihood University</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-white/40">
              <MapPin className="w-4 h-4 text-narangi/60" />
              <span>Vadodara, Gujarat</span>
            </div>
          </div>

          {/* Link columns */}
          {footerLinks.map((group) => (
            <div key={group.title} className="md:col-span-3">
              <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-white/30 mb-6">
                {group.title}
              </h4>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-white/50 hover:text-white transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-1 text-xs text-white/30">
            <span>Built with</span>
            <Heart className="w-3 h-3 text-rishihood-red/60" />
            <span>for the workers of India</span>
          </div>
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-xs font-medium text-white/40 hover:text-white/70 transition-colors"
          >
            Back to top
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
