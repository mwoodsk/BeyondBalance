import Image from "next/image";
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
    id: "private-classes",
  },
  {
    title: "Corporate Classes",
    forWho: "Teams and leadership groups",
    description:
      "On-site or virtual programming designed to reduce stress, improve focus, and support healthy workplace culture.",
    cta: "Schedule Corporate Class",
    id: "corporate-classes",
  },
  {
    title: "Events / Workshops",
    forWho: "Communities and organizations",
    description:
      "Seasonal workshops and collaborative events for mindful leadership, posture care, and nervous-system resilience.",
    cta: "Plan an Event",
    id: undefined,
  },
  {
    title: "Retreats",
    forWho: "People craving deeper reset",
    description:
      "Curated day or destination retreats blending movement, reflection, and restorative wellness rituals.",
    comingSoon: true,
    id: undefined,
  },
];

export default function ServicesPage() {
  return (
    <div className="section-wrap services-page">
      <Reveal>
        <p className="label">Offerings</p>
        <h1 className="mt-3 font-display text-5xl">Wellness offerings for real-world pace.</h1>
      </Reveal>

      <Reveal className="services-split">
        <div className="services-image-col">
          <Image
            src="/images/Sunset.jpeg"
            alt="Calm mountain landscape"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 40vw"
            priority
          />
        </div>

        <div className="services-cards-col">
          {services.map((item) => (
            <article
              key={item.title}
              id={item.id}
              className={`services-card${item.id ? " scroll-mt-32" : ""}`}
            >
              <div className="services-card-body">
                <h2 className="services-card-title font-display">{item.title}</h2>
                <p className="services-card-subtitle">{item.forWho}</p>
                <p className="services-card-desc">{item.description}</p>
              </div>
              {"comingSoon" in item && item.comingSoon ? (
                <span className="coming-later-badge services-card-cta">Coming later</span>
              ) : (
                <a
                  className="link-button services-card-cta"
                  href={site.bookingUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  {item.cta}
                </a>
              )}
            </article>
          ))}
        </div>
      </Reveal>
    </div>
  );
}
