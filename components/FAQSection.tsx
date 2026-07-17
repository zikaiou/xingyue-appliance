const faqs = [
  {
    q: "Do you support private labeling?",
    a: "Yes. Logo, color, packaging and selected product details can be discussed for OEM projects.",
  },
  {
    q: "Can buyers request samples?",
    a: "Yes. Contact XING with your market, product interest and estimated quantity to discuss sampling.",
  },
  {
    q: "Can the iron be used vertically and horizontally?",
    a: "The featured model is designed for both horizontal ironing and vertical garment steaming.",
  },
  {
    q: "How can I contact XING quickly?",
    a: "Use the floating WhatsApp button or email amy@xingyue.store.",
  },
];

export default function FAQSection() {
  return (
    <section className="bg-[#f3f3f5] text-black">
      <div className="container-shell section-pad">
        <div className="max-w-3xl">
          <p className="eyebrow">FAQ</p>
          <h2 className="section-title">Answers for buyers and brand partners.</h2>
        </div>
        <div className="mt-12 grid gap-4">
          {faqs.map((item) => (
            <details key={item.q} className="group rounded-3xl bg-white p-7">
              <summary className="cursor-pointer list-none text-xl font-black">
                <span className="flex items-center justify-between gap-6">
                  {item.q}
                  <span className="text-pink-600 transition group-open:rotate-45">+</span>
                </span>
              </summary>
              <p className="mt-5 max-w-3xl leading-7 text-black/60">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
