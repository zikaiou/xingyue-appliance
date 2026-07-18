"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, BriefcaseBusiness, ShieldCheck, Sparkles } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Powerful Steam",
    text: "Deep penetration for faster wrinkle removal.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Compact & Light",
    text: "Designed for home, office and travel.",
  },
  {
    icon: ShieldCheck,
    title: "Safe & Reliable",
    text: "Built for dependable everyday garment care.",
  },
];

export default function Hero() {
  return (
    <section className="hero-stage relative isolate overflow-hidden">
      <div className="hero-orbit hero-orbit-one" />
      <div className="hero-orbit hero-orbit-two" />
      <div className="hero-particles" />

      <div className="container-shell relative z-10 grid min-h-[780px] items-center gap-12 py-20 lg:grid-cols-[.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
          className="max-w-[680px]"
        >
          <div className="mb-7 flex items-center gap-4">
            <span className="h-px w-12 bg-pink-500" />
            <p className="text-xs font-extrabold uppercase tracking-[0.32em] text-pink-400 sm:text-sm">
              Smart Clothing Care
            </p>
          </div>

          <h1 className="hero-heading">
            <span className="block text-white">Powerful Steam.</span>
            <span className="block bg-gradient-to-r from-pink-400 via-pink-500 to-rose-600 bg-clip-text text-transparent">
              Effortless Style.
            </span>
          </h1>

          <p className="mt-7 max-w-[610px] text-base leading-8 text-white/68 sm:text-lg">
            Professional garment care with powerful steam performance,
            compact construction and premium design.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link href="/contact" className="hero-button-primary">
              Request Quote <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/products" className="hero-button-secondary">
              Explore Products <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-12 grid gap-5 border-t border-white/10 pt-8 sm:grid-cols-3">
            {features.map(({ icon: Icon, title, text }) => (
              <article key={title} className="min-w-0">
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-pink-500/55 bg-pink-500/5">
                  <Icon className="h-5 w-5 text-pink-400" />
                </div>
                <h2 className="mt-4 text-sm font-extrabold text-white">{title}</h2>
                <p className="mt-2 text-sm leading-6 text-white/48">{text}</p>
              </article>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, x: 28 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.08 }}
          className="relative mx-auto w-full max-w-[720px]"
        >
          <div className="absolute left-[8%] right-[3%] top-[12%] h-[66%] rounded-full bg-pink-600/20 blur-[95px]" />
          <div className="absolute bottom-[9%] left-[17%] right-[12%] h-16 rounded-[50%] bg-pink-500/35 blur-3xl" />

          <div className="relative aspect-[1.08/1]">
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5.5, ease: "easeInOut", repeat: Infinity }}
              className="absolute inset-0"
            >
              <Image
                src="/images/hero/xing-steam-iron-real.png"
                alt="XING portable steam iron"
                fill
                priority
                sizes="(max-width: 1024px) 92vw, 54vw"
                className="object-contain drop-shadow-[0_42px_48px_rgba(0,0,0,.72)]"
              />
            </motion.div>
          </div>

          <div className="hero-spec-bar">
            <div>
              <strong>Powerful Output</strong>
              <span>Efficient garment care</span>
            </div>
            <div>
              <strong>Compact Design</strong>
              <span>Home and travel ready</span>
            </div>
            <div>
              <strong>OEM / ODM</strong>
              <span>Built for global brands</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
