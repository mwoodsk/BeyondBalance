import Image from "next/image";
import type { Metadata } from "next";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About",
  description: "Meet the founder of Beyond Balance and the philosophy behind each session.",
};

const adores = [
  "Porch tea after sunset",
  "Journaling before busy Mondays",
  "Wild rosemary and citrus scents",
  "Long walks by Lake Michigan",
  "Hosting intimate wellness dinners",
  "Quiet jazz on rainy mornings",
];

export default function AboutPage() {
  return (
    <div className="section-wrap">
      <Reveal>
        <p className="label">About me</p>
        <h1 className="mt-3 max-w-3xl font-display text-5xl leading-tight">Hi, I&apos;m Eliza.</h1>
        <p className="mt-5 max-w-3xl text-lg text-[var(--color-ink-muted)]">
          I started Beyond Balance because I wanted yoga to feel less performative and more
          nourishing. If we were meeting for coffee, I&apos;d tell you I care most about helping
          people feel at home in their body again, especially when life is moving fast.
        </p>
      </Reveal>

      <Reveal className="mt-10 grid gap-8 md:grid-cols-[1fr_1.1fr]">
        <div className="relative min-h-96 overflow-hidden rounded-[2rem] border border-[var(--color-line)]">
          <Image
            src="https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?auto=format&fit=crop&w=1000&q=80"
            alt="Professional yoga instructor portrait"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 40vw"
          />
        </div>
        <div className="rounded-[2rem] border border-[var(--color-line)] bg-[var(--color-surface)] p-8">
          <h2 className="font-display text-4xl">Mission</h2>
          <p className="mt-4 text-[var(--color-ink-muted)]">
            My mission is to create spaces where high-capacity people can release pressure,
            reconnect to breath, and leave with tools they can carry into meetings, family life,
            and everyday stress.
          </p>
          <h3 className="mt-7 font-display text-2xl">Certifications & Credentials</h3>
          <ul className="mt-4 space-y-2 text-sm uppercase tracking-[0.12em] text-[var(--color-ink-muted)]">
            <li>500-Hour Registered Yoga Teacher (RYT-500)</li>
            <li>Trauma-Informed Yoga Certification</li>
            <li>Corporate Mindfulness Facilitator</li>
            <li>Prenatal and Restorative Yoga Training</li>
          </ul>
        </div>
      </Reveal>

      <Reveal className="mt-10 rounded-[2rem] border border-[var(--color-line)] bg-[var(--color-surface)] p-8 md:p-10">
        <p className="label">Things I adore</p>
        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {adores.map((item) => (
            <p key={item} className="rounded-2xl border border-[var(--color-line)] px-4 py-3 text-sm">
              {item}
            </p>
          ))}
        </div>
      </Reveal>
    </div>
  );
}
