import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Beyond Balance for private, corporate, and event yoga inquiries.",
};

export default function ContactPage() {
  return (
    <div className="section-wrap">
      <Reveal>
        <p className="label">Contact</p>
        <h1 className="mt-3 font-display text-5xl">Let&apos;s create your ideal practice.</h1>
      </Reveal>

      <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_1fr]">
        <Reveal className="rounded-[2rem] border border-[var(--color-line)] bg-[var(--color-surface)] p-8">
          <form className="space-y-4" aria-label="Contact form">
            <label className="block">
              <span className="mb-2 block text-sm">Name</span>
              <input
                type="text"
                name="name"
                required
                className="w-full rounded-xl border border-[var(--color-line)] bg-transparent px-4 py-3"
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-sm">Email</span>
              <input
                type="email"
                name="email"
                required
                className="w-full rounded-xl border border-[var(--color-line)] bg-transparent px-4 py-3"
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-sm">Interest</span>
              <select name="interest" className="w-full rounded-xl border border-[var(--color-line)] bg-transparent px-4 py-3">
                <option>Private Sessions</option>
                <option>Corporate Classes</option>
                <option>Retreats</option>
                <option>Events / Workshops</option>
              </select>
            </label>

            <label className="block">
              <span className="mb-2 block text-sm">Message</span>
              <textarea
                name="message"
                rows={5}
                required
                className="w-full rounded-xl border border-[var(--color-line)] bg-transparent px-4 py-3"
              />
            </label>

            <button type="submit" className="cta-button">
              Send Message
            </button>
          </form>
        </Reveal>

        <Reveal className="space-y-5">
          <div className="rounded-[2rem] border border-[var(--color-line)] bg-[var(--color-surface)] p-8">
            <h2 className="font-display text-3xl">Contact Details</h2>
            <p className="mt-4 text-[var(--color-ink-muted)]">{site.address}</p>
            <p className="mt-2 text-[var(--color-ink-muted)]">{site.phone}</p>
            <p className="mt-2 text-[var(--color-ink-muted)]">{site.email}</p>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-[var(--color-line)]">
            <iframe
              title="Beyond Balance location map"
              src="https://www.google.com/maps?q=1212+W+Evergreen+Ave+Chicago+IL&output=embed"
              width="100%"
              height="320"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>
      </div>
    </div>
  );
}
