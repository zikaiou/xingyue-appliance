import Image from "next/image";

const items = [
  ["Rapid Heating", "Designed to reach working temperature quickly."],
  ["Steam Penetration", "Helps relax fabric fibers for faster wrinkle removal."],
  ["Smooth Soleplate", "Even heat distribution and effortless glide."],
  ["Flexible Garment Care", "Suitable for both horizontal and vertical use."],
];

export default function TechnologySection() {
  return (
    <section className="bg-black">
      <div className="container-shell section-pad">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <div className="relative min-h-[520px] overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.04]">
            <Image
              src="/images/products/steam-iron-4.png"
              alt="XING steam iron technology"
              fill
              className="object-contain p-8"
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_50%,rgba(219,59,107,.18),transparent_45%)]" />
          </div>
          <div>
            <p className="eyebrow text-pink-300">Performance</p>
            <h2 className="section-title text-white">Engineered for effortless daily care.</h2>
            <div className="mt-9 grid gap-4 sm:grid-cols-2">
              {items.map(([title, text], index) => (
                <article key={title} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
                  <span className="text-sm font-bold text-pink-300">0{index + 1}</span>
                  <h3 className="mt-6 text-xl font-bold">{title}</h3>
                  <p className="mt-3 leading-7 text-white/55">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
