import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Yoga Classes",
  description: "Explore yoga styles, beginner guidance, pricing, and booking options.",
};

const yogaTypes = [
  {
    title: "Vinyasa Flow",
    description: "Breath-led movement that builds warmth, clarity, and steady strength.",
  },
  {
    title: "Restorative",
    description: "A slower practice with props and long holds to unwind stress and improve sleep.",
  },
  {
    title: "Power + Mobility",
    description: "Athletic sequencing to support posture, endurance, and resilience for desk-heavy work.",
  },
  {
    title: "Meditation + Breath",
    description: "Practical nervous-system tools to sharpen focus and settle anxious momentum.",
  },
];

const packages = [
  { name: "Single Class", price: "$28", detail: "Drop-in studio or virtual" },
  { name: "5-Class Pack", price: "$130", detail: "Valid for 8 weeks" },
  { name: "10-Class Pack", price: "$240", detail: "Best for consistency" },
  { name: "Monthly Unlimited", price: "$220", detail: "Includes one private check-in" },
];

export default function ClassesPage() {
  return (
    <div className="section-wrap space-y-16">
      <Reveal>
        <p className="label">Yoga classes</p>
        <h1 className="mt-3 font-display text-5xl">Practice that meets you where you are.</h1>
        <div className="mt-6 flex flex-wrap gap-2 text-xs uppercase tracking-[0.14em] text-[var(--color-ink-muted)]">
          <a href="#yoga-types" className="rounded-full border border-[var(--color-line)] px-4 py-2">Yoga Types</a>
          <a href="#getting-started" className="rounded-full border border-[var(--color-line)] px-4 py-2">How to Get Started</a>
          <a href="#pricing" className="rounded-full border border-[var(--color-line)] px-4 py-2">Prices / Packages</a>
          <a href="#book" className="rounded-full border border-[var(--color-line)] px-4 py-2">Book with Me</a>
        </div>
      </Reveal>

      <Reveal id="yoga-types" className="grid gap-4 md:grid-cols-2">
        {yogaTypes.map((item) => (
          <article key={item.title} className="rounded-3xl border border-[var(--color-line)] bg-[var(--color-surface)] p-7">
            <h2 className="font-display text-3xl">{item.title}</h2>
            <p className="mt-3 text-[var(--color-ink-muted)]">{item.description}</p>
          </article>
        ))}
      </Reveal>

      <Reveal id="getting-started" className="rounded-[2rem] border border-[var(--color-line)] bg-[var(--color-surface)] p-8">
        <h2 className="font-display text-4xl">How to Get Started</h2>
        <ol className="mt-5 space-y-3 text-[var(--color-ink-muted)]">
          <li>1. Book a short intake call to share goals, injuries, and schedule needs.</li>
          <li>2. Start with a grounding class and receive modifications that match your level.</li>
          <li>3. Build a weekly rhythm that supports your work and recovery cycles.</li>
        </ol>
      </Reveal>

      <Reveal id="pricing" className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {packages.map((pkg) => (
          <article key={pkg.name} className="rounded-3xl border border-[var(--color-line)] bg-[var(--color-surface)] p-7">
            <h3 className="font-display text-3xl">{pkg.name}</h3>
            <p className="mt-4 font-display text-4xl text-[var(--color-accent)]">{pkg.price}</p>
            <p className="mt-2 text-sm text-[var(--color-ink-muted)]">{pkg.detail}</p>
          </article>
        ))}
      </Reveal>

      <Reveal id="book" className="rounded-[2rem] border border-[var(--color-line)] p-8 text-center">
        <h2 className="font-display text-4xl">Book with Me</h2>
        <p className="mt-4 text-[var(--color-ink-muted)]">
          Reserve through Calendly or explore class availability on Mindbody.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <a className="cta-button" href={site.bookingUrl} target="_blank" rel="noreferrer">Calendly</a>
          <a className="link-button" href={site.mindbodyUrl} target="_blank" rel="noreferrer">Mindbody</a>
        </div>
      </Reveal>
    </div>
  );
}
