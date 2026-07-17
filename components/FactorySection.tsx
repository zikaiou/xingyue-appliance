import Link from "next/link";
import { Boxes, BadgeCheck, FlaskConical, PackageCheck } from "lucide-react";

const capabilities = [
  [Boxes, "Assembly", "Structured production workflows for consistent output."],
  [FlaskConical, "Testing", "Functional, heat and steam inspection checkpoints."],
  [BadgeCheck, "Quality Control", "Process control from incoming parts to final inspection."],
  [PackageCheck, "Packaging", "Retail, private-label and export packaging support."],
];

export default function FactorySection() {
  return (
    <section className="bg-white text-black">
      <div className="container-shell section-pad">
        <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="eyebrow">Manufacturing</p>
            <h2 className="section-title">A dependable partner for global brands.</h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-black/60">
              XING supports product development, private labeling, quality inspection
              and export-ready delivery for distributors, retailers and e-commerce brands.
            </p>
            <Link href="/factory" className="button-dark mt-8">
              Explore our capability
            </Link>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {capabilities.map(([Icon, title, text]) => {
              const IconComponent = Icon as typeof Boxes;
              return (
                <article key={title as string} className="rounded-3xl border border-black/10 p-7">
                  <IconComponent className="h-8 w-8 text-pink-600" />
                  <h3 className="mt-8 text-xl font-black">{title as string}</h3>
                  <p className="mt-3 leading-7 text-black/60">{text as string}</p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
