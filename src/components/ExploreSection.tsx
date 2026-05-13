import Link from "next/link";
import Reveal from "@/components/Reveal";

type ExploreLine = { label: string; href: string };

type ActiveCard = {
  title: string;
  lines: ExploreLine[];
  ctaHref: string;
};

const activeCards: ActiveCard[] = [
  {
    title: "Classes",
    ctaHref: "/classes",
    lines: [
      { label: "Corporate", href: "/services#corporate-classes" },
      { label: "Private", href: "/services#private-classes" },
    ],
  },
  {
    title: "Events",
    ctaHref: "/events",
    lines: [
      { label: "Corporate", href: "/events" },
      { label: "Personal", href: "/contact" },
    ],
  },
];

function CardOrnament() {
  return (
    <div className="explore-card-ornament" aria-hidden="true">
      <svg width="48" height="20" viewBox="0 0 48 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M2 16h28"
          stroke="var(--color-sage)"
          strokeWidth="1.15"
          strokeLinecap="round"
          opacity="0.85"
        />
        <path
          d="M30 16c2.5-7 6-11 11-13.5"
          stroke="var(--color-sage)"
          strokeWidth="1"
          strokeLinecap="round"
          opacity="0.7"
        />
        <path
          d="M34 16c4-5 8-8 14-9"
          stroke="var(--color-sage)"
          strokeWidth="0.9"
          strokeLinecap="round"
          opacity="0.55"
        />
      </svg>
    </div>
  );
}

export default function ExploreSection() {
  return (
    <section className="section-wrap pt-0">
      <Reveal>
        <p className="label">Explore</p>
        <div className="explore-grid">
          {activeCards.map((card) => (
            <article key={card.title} className="explore-card">
              <CardOrnament />
              <h2 className="explore-card-title font-display">{card.title}</h2>
              <ul className="explore-card-list">
                {card.lines.map((line) => (
                  <li key={line.label}>
                    <Link href={line.href} className="explore-card-sublink">
                      {line.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link href={card.ctaHref} className="explore-card-cta">
                Explore →
              </Link>
            </article>
          ))}

          <article className="explore-card explore-card--retreats">
            <CardOrnament />
            <h2 className="explore-card-title font-display">Retreats</h2>
            <p className="explore-card-muted">
              Day and destination resets—curated with the same care as every session.
            </p>
            <span className="coming-later-badge">Coming later</span>
          </article>
        </div>
      </Reveal>
    </section>
  );
}
