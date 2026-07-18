import { Sparkles, Rotate3D, Plane, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Powerful Steam",
    text: "Deep steam penetration helps remove stubborn wrinkles efficiently.",
  },
  {
    icon: Rotate3D,
    title: "2-in-1 Ironing",
    text: "Use it for horizontal ironing or vertical garment steaming.",
  },
  {
    icon: Plane,
    title: "Travel Ready",
    text: "Compact construction for home, office and business travel.",
  },
  {
    icon: ShieldCheck,
    title: "Safe & Reliable",
    text: "Designed for dependable, worry-free everyday clothing care.",
  },
];

export default function FeatureGrid() {
  return (
    <section className="bg-white text-black">
      <div className="container-shell section-pad">
        <div className="mb-12 max-w-3xl">
          <p className="eyebrow">Why XING</p>
          <h2 className="section-title">Designed for modern clothing care.</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {features.map(({ icon: Icon, title, text }) => (
            <article
              key={title}
              className="rounded-3xl border border-black/10 bg-zinc-50 p-7 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <Icon className="h-8 w-8 text-pink-600" />
              <h3 className="mt-8 text-xl font-bold">{title}</h3>
              <p className="mt-3 leading-7 text-black/60">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
