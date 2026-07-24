use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const categories = [
 {
 name: "Travel Iron",
 products: [
 { model: "ST-718", name: "Travel Iron ST-718", image: "/images/products/ST-718.jpg",
 features: ["Compact Travel Design", "Fast Heating", "Portable Ironing Solution"] },
 { model: "ST-717", name: "Travel Iron ST-717", image: "/images/products/ST-717.jpg",
 features: ["Portable Design", "Convenient Travel Use", "Efficient Ironing Performance"] },
 { model: "ST-588", name: "Travel Iron ST-588", image: "/images/products/ST-588.png",
 features: ["Compact Structure", "Easy Carry Design", "Daily Travel Solution"] },
 { model: "ST-812", name: "Travel Iron ST-812", image: "/images/products/ST-812.png",
 features: ["Lightweight Travel Design", "Quick Wrinkle Removal", "Portable Garment Care"] },
 { model: "ST-8807", name: "Travel Iron ST-8807", image: "/images/products/ST-8807.jpg",
 features: ["Advanced Steam System", "High-Efficiency Heating", "Professional Results"] },
 { model: "ST-8808", name: "Travel Iron ST-8808", image: "/images/products/ST-8808.png",
 features: ["Compact Power Design", "Steady Steam Flow", "Versatile Ironing"] },
 { model: "ST-817", name: "Travel Iron ST-817", image: "/images/products/ST-817.jpg",
 features: ["Digital Control Interface", "Enhanced Steam Output", "Premium Fabric Care"] },
 { model: "ST-200A", name: "Travel Iron ST-200A", image: "/images/products/ST-200A.jpg",
 features: ["Ergonomic Handle", "Multi-Angle Steaming", "Travel Safety Build"] },
 ],
 },
 {
 name: "Garment Steamer",
 products: [
 { model: "ST-815", name: "Garment Steamer ST-815", image: "/images/products/ST-815.png",
 features: ["1800W Powerful Steam", "260ml Water Tank", "Vertical & Horizontal Steaming"] },
 { model: "6617", name: "Garment Steamer 6617", image: "/images/products/6617.jpg",
 features: ["Ceramic Steam Panel", "3 Steam Levels", "Auto Power Off"] },
 { model: "900A", name: "Garment Steamer 900A", image: "/images/products/900A.png",
 features: ["Stainless Steel Panel", "20\u00b15g/min Continuous Steam", "Compact Portable Design"] },
 { model: "6618", name: "Garment Steamer 6618", image: "/images/products/6618.jpg",
 features: ["Stainless Steel Panel", "3 Steam Modes", "Travel Friendly Design"] },
 ],
 },
 {
 name: "Steam Iron",
 products: [],
 status: "Coming Soon",
 },
 {
 name: "Vacuum Garment Steamer",
 products: [
 { model: "9002", name: "Vacuum Garment Steamer 9002", image: "/images/products/9002/main.jpg",
 features: ["Vacuum Steam Technology", "LED Display", "400ml Detachable Tank"] },
 { model: "9003", name: "Vacuum Garment Steamer 9003", image: "/images/products/9003/main.jpg",
 features: ["Vacuum Steam Technology", "LED Display", "400ml Detachable Tank"] },
 { model: "9004", name: "Vacuum Garment Steamer 9004", image: "/images/products/9004/main.jpg",
 features: ["Vacuum Steam Technology", "LED Display", "400ml Detachable Tank"] },
 { model: "9005", name: "Vacuum Garment Steamer 9005", image: "/images/products/9005/main.jpg",
 features: ["Vacuum Steam Technology", "LED Display", "400ml Detachable Tank"] },
 ],
 },
];

const bottomModules = [
 { title: "Reliable Quality", desc: "Every product undergoes strict inspection before shipment." },
 { title: "OEM / ODM Support", desc: "Custom branding, packaging and specification for your market." },
 { title: "Strong Production", desc: "35,000 m\u00b2 factory with 500+ skilled workers." },
 { title: "Global Shipping", desc: "Reliable logistics to over 100 countries worldwide." },
];

export default function ProductsPage() {
 const [active, setActive] = useState(0);

 return (
 React.createElement("div", { className: "bg-[#050507] text-white min-h-screen" },
 React.createElement("section", { className: "pt-28 pb-12 text-center px-6" },
 React.createElement("h1", { className: "text-4xl md:text-5xl font-black tracking-tight" }, "Our Products"),
 React.createElement("p", { className: "mt-4 text-lg text-white/60 max-w-xl mx-auto" }, "Professional garment care solutions built for global brands.")
 ),
 React.createElement("div", { className: "flex justify-center gap-1 px-4 pb-2 overflow-x-auto" },
 categories.map(function(cat, i) {
 return React.createElement("button", {
 key: cat.name,
 onClick: function() { setActive(i); },
 className: "px-5 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap transition " + (i === active ? "bg-[#ff2f7d] text-white" : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white")
 }, cat.name);
 })
 ),
 React.createElement("section", { className: "max-w-6xl mx-auto px-6 py-12" },
 categories[active].products.length > 0 ? (
 React.createElement("div", { className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" },
 categories[active].products.map(function(p) {
 return React.createElement("div", { key: p.model, className: "bg-white/4 border border-white/8 rounded-2xl overflow-hidden hover:border-[#ff2f7d]/40 transition group" },
 React.createElement("div", { className: "aspect-square bg-[#0d0d12] flex items-center justify-center p-6" },
 React.createElement(Image, { src: p.image, alt: p.name, width: 300, height: 300, className: "object-contain w-full h-full", unoptimized: true })
 ),
 React.createElement("div", { className: "p-5" },
 React.createElement("h3", { className: "text-base font-bold" }, p.model),
 React.createElement("p", { className: "text-xs text-white/45 mt-1" }, p.name),
 React.createElement("ul", { className: "mt-3 space-y-1" },
 p.features.map(function(f) {
 return React.createElement("li", { key: f, className: "text-xs text-white/60 flex items-start gap-1.5" },
 React.createElement("span", { className: "text-[#ff2f7d] mt-0.5 shrink-0" }, "\u2022"),
 f
 );
 })
 ),
 React.createElement("div", { className: "mt-4 flex gap-3" },
 React.createElement(Link, { href: "/products/" + p.model.toLowerCase(), className: "text-xs font-semibold text-[#ff2f7d] hover:underline" }, "View Details \u2192"),
 React.createElement(Link, { href: "/contact?product=" + p.model, className: "text-xs font-semibold text-white/70 hover:text-white transition" }, "Get Quote")
 )
 )
 );
 })
 )
 ) : (
 React.createElement("div", { className: "text-center py-24" },
 React.createElement("p", { className: "text-5xl mb-4" }, "\ud83d\ude80"),
 React.createElement("h2", { className: "text-2xl font-bold text-white/70" }, "Coming Soon"),
 React.createElement("p", { className: "text-white/45 mt-2" }, "New ", categories[active].name, " products are in development.")
 )
 )
 ),
 React.createElement("section", { className: "border-t border-white/8 bg-[#0a0a0e]" },
 React.createElement("div", { className: "max-w-6xl mx-auto px-6 py-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4" },
 bottomModules.map(function(m) {
 return React.createElement("div", { key: m.title },
 React.createElement("h3", { className: "text-base font-bold" }, m.title),
 React.createElement("p", { className: "mt-2 text-sm text-white/50 leading-relaxed" }, m.desc)
 );
 })
 ),
 React.createElement("p", { className: "text-center pb-10 text-xs text-white/30" }, "Professional garment care solutions and OEM manufacturing services for global brands.")
 )
 )
 );
}
