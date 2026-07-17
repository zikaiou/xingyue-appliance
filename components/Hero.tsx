"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="gradient-grid overflow-hidden">
      <div className="container-shell grid min-h-[760px] items-center gap-12 py-20 lg:grid-cols-[1.05fr_.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.28em] text-pink-300">
            Smart Clothing Care
          </p>
          <h1 className="max-w-3xl text-5xl font-black leading-[0.98] sm:text-6xl lg:text-8xl">
            Powerful Steam.
            <span className="block text-white/45">Effortless Style.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/65">
            Intelligent temperature control, powerful steam performance and
            compact design—built for modern homes, travel and global OEM brands.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="/products"
              className="rounded-full bg-white px-7 py-4 font-semibold text-black transition hover:-translate-y-0.5"
            >
              Explore Products
            </Link>
            <Link
              href="/oem"
              className="rounded-full border border-white/25 px-7 py-4 font-semibold transition hover:border-white"
            >
              OEM Solutions
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative mx-auto w-full max-w-[560px]"
        >
          <div className="absolute inset-10 rounded-full bg-pink-500/20 blur-3xl" />
          <div className="relative overflow-hidden rounded-[38px] border border-white/10 bg-white/5 p-5 shadow-glow">
            <Image
              src="/images/products/steam-iron-1.png"
              alt="XING smart steam iron"
              width={900}
              height={900}
              priority
              className="h-auto w-full object-contain"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
