import { Gauge, Sparkles, Rotate3D, Plane } from "lucide-react";

const features = [
  {
    icon: Gauge,
    title: "Smart Temperature Control",
    text: "Precise heat selection designed for different fabrics.",
  },
  {
    icon: Sparkles,
    title: "Powerful Steam",
    text: "Deep steam penetration helps remove stubborn wrinkles fast.",
  },
  {
    icon: Rotate3D,
    title: "2-in-1 Ironing",
    text: "Switch between horizontal ironing and vertical steaming.",
  },
  {
    icon: Plane,
    title: "Travel Ready",
    text: "Compact construction for home, office and business travel.",
  },
];

export default function FeatureGrid() {
  return (
    <section className="bg-white text-black">
      <div className="container-shell section-pad">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-pink-600">
            Why XING
          </p>
          <h2 className="mt-3 text-4xl font-black sm:text-5xl">
            Designed for modern clothing care.
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {features.map(({ icon: Icon, title, text }) => (
            <article
              key={title}
              className="rounded-3xl border border-black/10 bg-zinc-50 p-7 transition hover:-translate-y-1 hover:shadow-xl"
            >
              <Icon className="h-8 w-8" />
              <h3 className="mt-8 text-xl font-bold">{title}</h3>
              <p className="mt-3 leading-7 text-black/60">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
