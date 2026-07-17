const points = [
  ["OEM / ODM", "Flexible customization"],
  ["Global Supply", "Export-oriented service"],
  ["Quality Control", "Multi-stage inspection"],
  ["Fast Response", "Direct WhatsApp contact"],
];

export default function TrustBar() {
  return (
    <section className="border-y border-white/10 bg-zinc-950">
      <div className="container-shell grid divide-y divide-white/10 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
        {points.map(([title, text]) => (
          <div key={title} className="px-6 py-8">
            <p className="font-black">{title}</p>
            <p className="mt-2 text-sm text-white/45">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
