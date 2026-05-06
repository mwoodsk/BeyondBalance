import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import ParallaxHeroImage from "@/components/ParallaxHeroImage";
import Reveal from "@/components/Reveal";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Beyond Balance brings grounded yoga experiences for busy professionals and corporate teams.",
};

const quickLinks = [
  { label: "Classes", href: "/classes" },
  { label: "Private Sessions", href: "/services" },
  { label: "Corporate", href: "/services" },
  { label: "Retreats", href: "/services" },
  { label: "Events", href: "/events" },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <ParallaxHeroImage
          src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=1700&q=80"
          alt="Sunlit yoga practice with nature in background"
        />
        <div className="hero-content">
          <p className="label text-[var(--color-ink-soft)]">Corporate wellness and private yoga</p>
          <h1 className="mt-3 max-w-3xl font-display text-5xl leading-[1.05] sm:text-6xl">
            Find steadiness in the middle of ambitious lives.
          </h1>
          <p className="mt-5 max-w-xl text-base text-[var(--color-ink-soft)]/90 sm:text-lg">
            Beyond Balance helps professionals and teams reset, recover, and return to work with
            calm focus through thoughtfully guided yoga experiences.
          </p>
          <a className="cta-button mt-8" href={site.bookingUrl} target="_blank" rel="noreferrer">
            Book with Me
          </a>
        </div>
      </section>

      <section className="section-wrap">
        <Reveal>
          <p className="label">Our philosophy</p>
          <p className="mt-4 max-w-3xl font-display text-4xl leading-tight text-[var(--color-ink)]">
            Wellness should feel deeply personal, quietly luxurious, and fully livable in real
            life.
          </p>
          <p className="mt-4 max-w-2xl text-[var(--color-ink-muted)]">
            Sessions are designed to honor your pace while building the strength, breath, and
            spaciousness that sustain both career and home life. The approach is warm, practical,
            and rooted in modern mindfulness.
          </p>
        </Reveal>
      </section>

      <section className="section-wrap pt-0">
        <Reveal className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {quickLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="rounded-3xl border border-[var(--color-line)] bg-[var(--color-surface)] p-6 transition hover:-translate-y-1"
            >
              <p className="label">Explore</p>
              <h2 className="mt-3 font-display text-3xl">{item.label}</h2>
            </Link>
          ))}
        </Reveal>
      </section>

      <section className="section-wrap pt-0">
        <Reveal className="grid gap-8 rounded-[2rem] border border-[var(--color-line)] bg-[var(--color-surface)] p-8 md:grid-cols-[1.2fr_1fr] md:p-10">
          <div>
            <p className="label">Featured words</p>
            <blockquote className="mt-4 max-w-xl font-display text-4xl leading-tight">
              “I booked Beyond Balance for our leadership team, and the shift in energy was
              immediate — grounded, clear, and connected.”
            </blockquote>
            <p className="mt-4 text-sm uppercase tracking-[0.14em] text-[var(--color-ink-muted)]">
              Jordan A. · People Operations Director
            </p>
          </div>
          <div className="relative min-h-72 overflow-hidden rounded-3xl">
            <Image
              src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80"
              alt="Calm studio corner with yoga mats"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          </div>
        </Reveal>
      </section>
    </>
  );
}
