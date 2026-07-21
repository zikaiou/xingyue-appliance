"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Pause, Play, Volume2, VolumeX, Waves, Thermometer, ShieldCheck } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const products = [
  ["ST-718", "Travel Iron", "/images/products/ST-718.jpg"],
  ["ST-717", "Travel Iron", "/images/products/ST-717.jpg"],
  ["ST-588", "Travel Iron", "/images/products/ST-588.png"],
  ["ST-812", "Travel Iron", "/images/products/ST-812.png"],
  ["ST-815", "Garment Steamer", "/images/products/ST-815.png"],
  ["6617", "Garment Steamer", "/images/products/6617.jpg"],
  ["900A", "Garment Steamer", "/images/products/900A.png"],
  ["6618", "Garment Steamer", "/images/products/6618.jpg"],
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
    <div className="v7-page v72-page">
      <section id="hero" className="v72-hero" aria-label="Professional Garment. Steamer Manufacturer.">
        <div className="v72-hero-grid" aria-hidden="true" />
        <div className="v72-hero-orbit" aria-hidden="true" />
        <div className="v72-hero-glow" aria-hidden="true" />
        <div className="v72-hero-inner">
          <div className="v72-hero-copy" data-crisp-text>
            <span className="hero-kicker">CLOTHING CARE</span>
            <h1><span className="hero-line">Professional Garment</span><em>Steamer Manufacturer</em></h1>
            <p>OEM &amp; ODM Solutions<br className="desktop-only" /> for Global Brands</p>
            <div className="hero-actions">
              <Link href="/contact" className="hero-cta hero-cta-primary">Request Quote <ArrowRight size={17} /></Link>
              <Link href="/products" className="hero-cta hero-cta-secondary">Explore Products <ArrowRight size={17} /></Link>
            </div>
            <div className="hero-features">
              <div><span className="hero-feature-icon"><Waves /></span><strong>Powerful Steam</strong><small>Deep penetration<br/>removes wrinkles<br/>in seconds.</small></div>
              <div><span className="hero-feature-icon"><Thermometer /></span><strong>120&#176;C</strong><small>High-temperature<br/>steam for superior<br/>results.</small></div>
              <div><span className="hero-feature-icon"><ShieldCheck /></span><strong>Safe &amp; Reliable</strong><small>Overheat protection<br/>for worry-free<br/>everyday use.</small></div>
            </div>
          </div>
          <div className="v72-hero-product" aria-hidden="true">
            <Image src="/images/v72/hero-product.png" alt="" width={1100} height={1100} priority unoptimized />
          </div>
        </div>
      </section>

      <section id="brand-film" className="brand-film-section">
        <video ref={videoRef} className="brand-film-video" autoPlay muted={muted} loop playsInline preload="metadata">
          <source src="/videos/brand-film.mp4" type="video/mp4" />
        </video>
        <div className="brand-film-shade" />
        <Reveal className="brand-film-copy"><h2>Designed for<br />Modern Clothing Care.</h2><p>A cinematic expression of professional garment care.</p></Reveal>
        <div className="video-controls"><button onClick={togglePlay} aria-label={playing ? "Pause video" : "Play video"}>{playing ? <Pause size={18}/> : <Play size={18}/>}</button><button onClick={() => setMuted(!muted)} aria-label={muted ? "Unmute video" : "Mute video"}>{muted ? <VolumeX size={18}/> : <Volume2 size={18}/>}</button></div>
      </section>

      <section id="featured" className="featured-section section-shell">
        <Reveal className="featured-copy">
          <h2 className="featured-title">Handheld</h2>
          <h2 className="featured-title-second">Garment Steamer</h2>
          <h3 className="featured-subtitle">OEM &amp; ODM Manufacturing</h3>
          <p>Powerful steam. Intelligent care.<br/>Designed for every fabric.</p>
          <Link href="/products/st-812" className="pink-button">Learn More <ArrowRight size={17}/></Link>
        </Reveal>
        <Reveal className="featured-product-wrap"><div className="product-glow" /><img src="/images/v7/st-812.png" alt="Professional Garment Steamer" className="featured-product-image" /></Reveal>
        <Reveal className="feature-list">{[["Rapid Heat-Up","Ready in 15 seconds"],["Strong Penetrating Steam","Removes wrinkles easily"],["Fabric Modes","Care for every fabric"],["Lightweight & Portable","Easy to hold, easy to use"],["Dry & Wet Ironing","Horizontal & Vertical"]].map(([title,text],index)=><div className="feature-row" key={title}><span>{String(index+1).padStart(2,"0")}</span><div><strong>{title}</strong><small>{text}</small></div></div>)}</Reveal>
      </section>

      <section id="products" className="products-section section-shell">
        <Reveal className="products-heading"><div><h2>Explore Our Steam Iron Collection</h2></div><Link href="/products">View All Products <ArrowRight size={16}/></Link></Reveal>
        <div className="product-grid">{products.map(([name,type,image],index)=><Reveal key={`${name}-${index}`} className="product-card"><Link href={`/products/${name.toLowerCase()}`} aria-label={`View ${name}`}><div className="product-image-box"><Image src={image} alt={name} fill sizes="(max-width:768px) 50vw, 25vw" /></div><div className="product-card-body"><h3>{name}</h3><p>{type}</p><span>View Product <ArrowRight size={14}/></span></div></Link></Reveal>)}</div>
      </section>

      <section id="factory" className="v72-factory" aria-label="Advanced Production For Superior Quality">
        <div className="v72-factory-photo" aria-hidden="true"><Image src="/images/v7/factory-locked.png" alt="" fill sizes="100vw" unoptimized /></div>
        <div className="v72-factory-overlay" aria-hidden="true" />
        <div className="v72-factory-content" data-crisp-text>
          <h2>Advanced Production<br/>For Superior Quality</h2>
          <p>Strict quality control at every step<br/>to ensure reliable and consistent<br/>product performance.</p>
          <div className="factory-stats">
            <div><strong>35,000 m²</strong><small>Manufacturing Base</small></div><div><strong>16+</strong><small>Years Experience</small></div><div><strong>500+</strong><small>Skilled Workers</small></div><div><strong>100+</strong><small>Exporting Countries</small></div>
          </div>
          <Link href="/factory" className="factory-button">Explore Our Factory <ArrowRight size={15}/></Link>
        </div>
      </section>

      <section className="service-strip section-shell">{["Factory Direct","OEM/ODM Service","Quality Assurance","Global Support"].map((item,i)=><Reveal className="service-item" key={item}><span>0{i+1}</span><h3>{item}</h3><p>Professional support with consistent quality and responsive service.</p></Reveal>)}</section>
    </div>
  );
}
