"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Pause, Play, Volume2, VolumeX } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const products = [
  ["ST-812", "Handheld Garment Steamer", "/images/v7/st-812.png"],
  ["ST-680", "Steam Iron", "/images/products/steam-iron-2.png"],
  ["ST-630", "Steam Iron", "/images/products/steam-iron-3.png"],
  ["ST-560", "Steam Iron", "/images/products/steam-iron-4.png"],
  ["ST-588", "Steam Iron", "/images/products/steam-iron-5.png"],
  ["ST-510", "Vertical Steam Iron", "/images/products/steam-iron-2.png"],
  ["ST-420", "Travel Iron", "/images/products/steam-iron-3.png"],
  ["ST-200", "Dry Iron", "/images/products/steam-iron-4.png"],
  ["ST-160", "Dry Iron", "/images/products/steam-iron-5.png"],
  ["ST-120", "Dry Iron", "/images/products/steam-iron-2.png"],
  ["ST-100", "Dry Iron", "/images/products/steam-iron-3.png"],
  ["ST-90", "Dry Iron", "/images/products/steam-iron-4.png"],
] as const;

function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) node.classList.add("is-visible");
    }, { threshold: 0.15 });
    io.observe(node);
    return () => io.disconnect();
  }, []);
  return <div ref={ref} className={`reveal ${className}`}>{children}</div>;
}

export default function V7Home() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(true);
  const [muted, setMuted] = useState(true);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) { video.play(); setPlaying(true); }
    else { video.pause(); setPlaying(false); }
  };

  return (
    <div className="v7-page xing-v71">
      <section id="hero" className="locked-hero" aria-label="XING hero — locked design">
        <Image src="/images/v7/hero-locked.png" alt="Powerful Steam. Effortless Style." fill priority sizes="100vw" className="locked-hero-image" />
      </section>

      <section id="brand-film" className="brand-film-section">
        <video ref={videoRef} className="brand-film-video" autoPlay muted={muted} loop playsInline preload="metadata" poster="/images/v7/hero-locked.png">
          <source src="/videos/brand-film.mp4" type="video/mp4" />
        </video>
        <div className="brand-film-shade" />
        <Reveal className="brand-film-copy">
          <span className="eyebrow">02 · BRAND FILM</span>
          <h2>Designed for<br />Modern Clothing Care.</h2>
          <p>A cinematic expression of intelligent garment care.</p>
        </Reveal>
        <div className="video-controls">
          <button onClick={togglePlay} aria-label={playing ? "Pause video" : "Play video"}>{playing ? <Pause size={18}/> : <Play size={18}/>}</button>
          <button onClick={() => setMuted(!muted)} aria-label={muted ? "Unmute video" : "Mute video"}>{muted ? <VolumeX size={18}/> : <Volume2 size={18}/>}</button>
        </div>
      </section>

      <section id="featured" className="featured-section section-shell">
        <Reveal className="featured-copy">
          <span className="eyebrow">FEATURED PRODUCT</span>
          <h2>ST-812</h2>
          <h3>Handheld Garment Steamer</h3>
          <p>Powerful steam. Intelligent care.<br/>Designed for every fabric.</p>
          <Link href="/products/st-812" className="pink-button">Learn More <ArrowRight size={17}/></Link>
        </Reveal>
        <Reveal className="featured-product-wrap">
          <div className="product-glow" />
          <Image src="/images/v7/st-812.png" alt="ST-812 handheld garment steamer" width={620} height={620} className="featured-product-image" />
        </Reveal>
        <Reveal className="feature-list">
          {[
            ["Rapid Heat-Up", "Ready in 15 seconds"],
            ["Strong Penetrating Steam", "Removes wrinkles easily"],
            ["Smart Fabric Modes", "Care for every fabric"],
            ["Lightweight & Portable", "Easy to hold, easy to use"],
            ["Dry & Wet Ironing", "Horizontal & Vertical"],
          ].map(([title, text], index) => <div className="feature-row" key={title}><span>{String(index+1).padStart(2,"0")}</span><div><strong>{title}</strong><small>{text}</small></div></div>)}
        </Reveal>
      </section>

      <section id="products" className="products-section section-shell">
        <Reveal className="products-heading">
          <div><span className="eyebrow">OUR PRODUCTS</span><h2>Explore Our Steam Iron Collection</h2></div>
          <Link href="/products">View All Products <ArrowRight size={16}/></Link>
        </Reveal>
        <div className="product-grid">
          {products.map(([name, type, image], index) => (
            <Reveal key={`${name}-${index}`} className="product-card">
              <Link href={`/products/${name.toLowerCase()}`} aria-label={`View ${name}`}>
                <div className="product-image-box"><Image src={image} alt={name} fill sizes="(max-width:768px) 50vw, 25vw" /></div>
                <div className="product-card-body"><h3>{name}</h3><p>{type}</p><span>View Product <ArrowRight size={14}/></span></div>
              </Link>
            </Reveal>
          ))}
        </div>
        <p className="placeholder-note">Product names, specifications and detail-page links can be replaced when the final catalogue is supplied.</p>
      </section>

      <section id="factory" className="factory-locked" aria-label="Factory section — locked design">
        <Image src="/images/v7/factory-locked.png" alt="Advanced Production For Superior Quality" fill sizes="100vw" className="factory-locked-image" />
      </section>

      <section className="service-strip section-shell">
        {["Factory Direct", "OEM/ODM Service", "Quality Assurance", "Global Support"].map((item, i) => <Reveal className="service-item" key={item}><span>0{i+1}</span><h3>{item}</h3><p>Professional support with consistent quality and responsive service.</p></Reveal>)}
      </section>
    </div>
  );
}
