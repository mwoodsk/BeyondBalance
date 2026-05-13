import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Services",
  description: "Private yoga, corporate classes, retreats, and workshops by Beyond Balance.",
};

const services = [
  {
    title: "Private Classes",
    forWho: "Professionals seeking tailored guidance",
    description:
      "1-on-1 sessions tailored for stress management, mobility, and long-term strength at home, studio, or virtual.",
    cta: "Book Private Session",
  },
  {
    title: "Corporate Classes",
    forWho: "Teams and leadership groups",
    description:
      "On-site or virtual programming designed to reduce stress, improve focus, and support healthy workplace culture.",
    cta: "Schedule Corporate Class",
  },
  {
    title: "Retreats",
    forWho: "People craving deeper reset",
    description:
      "Curated day or destination retreats blending movement, reflection, and restorative wellness rituals.",
    cta: "Explore Retreat Options",
  },
  {
    title: "Events / Workshops",
    forWho: "Communities and organizations",
    description:
      "Seasonal workshops and collaborative events for mindful leadership, posture care, and nervous-system resilience.",
    cta: "Plan an Event",
  },
];

export default function ServicesPage() {
  return (
    <div className="section-wrap">
      <Reveal>
        <p className="label">Services</p>
        <h1 className="mt-3 font-display text-5xl">Wellness offerings for real-world pace.</h1>
      </Reveal>

      <Reveal className="mt-10 grid gap-5 md:grid-cols-2">
        {services.map((item) => (
          <article
            key={item.title}
            id={
              item.title === "Private Classes"
                ? "private-classes"
                : item.title === "Corporate Classes"
                  ? "corporate-classes"
                  : undefined
            }
            className="scroll-mt-32 rounded-[2rem] border border-[var(--color-line)] bg-[var(--color-surface)] p-8"
          >
            <h2 className="font-display text-4xl">{item.title}</h2>
            <p className="mt-2 text-sm uppercase tracking-[0.13em] text-[var(--color-sage)]">{item.forWho}</p>
            <p className="mt-5 text-[var(--color-ink-muted)]">{item.description}</p>
            <a className="link-button mt-7" href={site.bookingUrl} target="_blank" rel="noreferrer">
              {item.cta}
            </a>
          </article>
        ))}
      </Reveal>
    </div>
  );
}
