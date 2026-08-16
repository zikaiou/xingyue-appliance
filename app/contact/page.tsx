"use client";

import Link from "next/link";
import { ArrowRight, Mail, MapPin, MessageCircle, Clock, Check } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [form, setForm] = useState({ name: "", company: "", email: "", country: "", quantity: "", message: "" });
  const update = (k: string, v: string) => setForm((p) => ({ ...p, [k]: v }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const response = await fetch("https://formspree.io/f/mjgnlkdj", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (response.ok) {
        setStatus("success");
        setForm({ name: "", company: "", email: "", country: "", quantity: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <div className="bg-[#050507] text-white min-h-screen font-sans">
      <section className="pt-32 pb-12 text-center px-6">
        <p className="text-[#ff2f7d] text-xs font-bold uppercase tracking-widest mb-4">Contact Us</p>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight">Start Your Project with XINGYUE</h1>
        <p className="mt-4 text-white/50 max-w-xl mx-auto">
          Send your product interest, target market, expected quantity and customization needs. We reply within 24 hours.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-24 grid gap-10 lg:grid-cols-2 items-start">
        {/* Contact Info */}
        <div className="space-y-5">
          <div className="bg-white/4 border border-white/8 rounded-2xl p-6 flex gap-4 items-start">
            <span className="w-11 h-11 rounded-xl bg-[#ff2f7d]/15 flex items-center justify-center shrink-0">
              <Mail size={20} className="text-[#ff2f7d]" />
            </span>
            <div>
              <h3 className="font-bold">Email</h3>
              <a href="mailto:amy@xingyue.store" className="text-sm text-white/60 hover:text-white transition">amy@xingyue.store</a>
            </div>
          </div>

          <div className="bg-white/4 border border-white/8 rounded-2xl p-6 flex gap-4 items-start">
            <span className="w-11 h-11 rounded-xl bg-[#ff2f7d]/15 flex items-center justify-center shrink-0">
              <MessageCircle size={20} className="text-[#ff2f7d]" />
            </span>
            <div>
              <h3 className="font-bold">WhatsApp</h3>
              <a href="https://wa.me/8615913881634" target="_blank" rel="noreferrer" className="text-sm text-white/60 hover:text-white transition">
                +86 159 1388 1634
              </a>
            </div>
          </div>

          <div className="bg-white/4 border border-white/8 rounded-2xl p-6 flex gap-4 items-start">
            <span className="w-11 h-11 rounded-xl bg-[#ff2f7d]/15 flex items-center justify-center shrink-0">
              <MapPin size={20} className="text-[#ff2f7d]" />
            </span>
            <div>
              <h3 className="font-bold">Factory Address</h3>
              <p className="text-sm text-white/60 mt-1">Huizhou Xingyue Technology Co., Ltd.</p>
              <p className="text-sm text-white/60">Huizhou, Guangdong, China</p>
              <p className="text-xs text-white/40 mt-1">35,000 m² manufacturing base</p>
            </div>
          </div>

          <div className="bg-white/4 border border-white/8 rounded-2xl p-6 flex gap-4 items-start">
            <span className="w-11 h-11 rounded-xl bg-[#ff2f7d]/15 flex items-center justify-center shrink-0">
              <Clock size={20} className="text-[#ff2f7d]" />
            </span>
            <div>
              <h3 className="font-bold">Response Time</h3>
              <p className="text-sm text-white/60 mt-1">Within 24 hours (Mon-Sat, GMT+8)</p>
            </div>
          </div>

          {/* Trust badges */}
          <div className="bg-[#0d0d12] border border-white/8 rounded-2xl p-6">
            <p className="text-xs text-white/40 uppercase tracking-wide mb-4">Why Choose XINGYUE</p>
            <ul className="space-y-2.5">
              {["Direct manufacturer with 16+ years of export experience", "Verified 4.7/5 rating from 595 Alibaba reviews", "Full OEM/ODM: logo, color, packaging, plug & certification", "CE, RoHS, CB certified for international markets"].map((t) => (
                <li key={t} className="flex items-start gap-2 text-sm text-white/60">
                  <Check size={15} className="text-[#ff2f7d] shrink-0 mt-0.5" /> {t}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Form */}
        <div className="bg-white/4 border border-white/8 rounded-2xl p-8 shadow-2xl shadow-black/50">
          <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
            {[
              { k: "name", label: "Name *", ph: "Your full name", required: true },
              { k: "company", label: "Company", ph: "Company name" },
              { k: "email", label: "Email *", ph: "your@email.com", required: true, type: "email" },
              { k: "country", label: "Country / Region", ph: "Your country" },
              { k: "quantity", label: "Estimated Quantity", ph: "e.g. 5,000 pcs", span: 2 },
            ].map((f) => (
              <div key={f.k} className={f.span === 2 ? "sm:col-span-2" : ""}>
                <label className="text-xs text-white/50 mb-1.5 block">{f.label}</label>
                <input
                  required={f.required}
                  type={f.type || "text"}
                  className="w-full bg-white/6 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/20 focus:border-[#ff2f7d] focus:outline-none transition"
                  placeholder={f.ph}
                  value={(form as any)[f.k]}
                  onChange={(e) => update(f.k, e.target.value)}
                />
              </div>
            ))}
            <div className="sm:col-span-2">
              <label className="text-xs text-white/50 mb-1.5 block">Message</label>
              <textarea
                className="w-full bg-white/6 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/20 focus:border-[#ff2f7d] focus:outline-none transition h-28 resize-none"
                placeholder="Tell us about your requirements..."
                value={form.message}
                onChange={(e) => update("message", e.target.value)}
              />
            </div>
            <div className="sm:col-span-2">
              <button
                type="submit"
                disabled={status === "loading" || status === "success"}
                className={`w-full py-4 rounded-xl text-sm font-bold uppercase tracking-widest transition flex items-center justify-center gap-2 ${
                  status === "success"
                    ? "bg-green-600 text-white cursor-default"
                    : "bg-[#ff2f7d] text-white hover:bg-[#e6006f] active:scale-[0.98]"
                }`}
              >
                {status === "loading" ? "Sending..." : status === "success" ? "Message Sent Successfully!" : "Send Inquiry"}
              </button>
              {status === "error" && (
                <p className="text-red-500 text-xs text-center mt-3">
                  Failed to send. Please try again or email us directly at amy@xingyue.store
                </p>
              )}
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
