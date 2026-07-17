import { siteConfig } from "@/lib/site";

export default function ContactPage() {
  return (
    <section className="bg-white text-black">
      <div className="container-shell grid gap-14 py-24 lg:grid-cols-2">
        <div>
          <p className="eyebrow">Contact</p>
          <h1 className="section-title">Start your project with XING.</h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-black/60">
            Send your product interest, target market, expected quantity and customization needs.
          </p>
          <div className="mt-10 space-y-4">
            <a className="block text-xl font-black" href={`mailto:${siteConfig.email}`}>
              {siteConfig.email}
            </a>
            <a
              className="block text-xl font-black text-pink-600"
              href={`https://wa.me/${siteConfig.whatsapp}`}
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp {siteConfig.whatsappDisplay}
            </a>
            <p className="text-black/55">{siteConfig.company}</p>
          </div>
        </div>

        <form
          action={`mailto:${siteConfig.email}`}
          method="post"
          encType="text/plain"
          className="rounded-[32px] bg-[#f3f3f5] p-8"
        >
          <div className="grid gap-5">
            {["Name", "Company", "Email", "Country", "Estimated Quantity"].map((label) => (
              <label key={label} className="grid gap-2 text-sm font-bold">
                {label}
                <input
                  name={label}
                  required={label === "Name" || label === "Email"}
                  className="rounded-2xl border border-black/10 bg-white px-4 py-4 font-normal outline-none focus:border-pink-500"
                />
              </label>
            ))}
            <label className="grid gap-2 text-sm font-bold">
              Message
              <textarea
                name="Message"
                rows={6}
                className="rounded-2xl border border-black/10 bg-white px-4 py-4 font-normal outline-none focus:border-pink-500"
              />
            </label>
            <button className="rounded-full bg-black px-7 py-4 font-black text-white" type="submit">
              Send Inquiry
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
