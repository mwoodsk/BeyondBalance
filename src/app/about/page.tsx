import Image from "next/image";
import type { Metadata } from "next";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About",
  description: "Meet Aspen Rose and the philosophy behind Beyond Balance.",
};

const credentials = [
  "200 H Registered Yoga Teacher",
  "NASM Certified Personal Trainer",
  "BS in Chemistry",
  "10+ years of personal practice",
  "5+ years of teaching",
];

const adores = [
  "Iced tea and porch rocking chairs",
  "Sunsets on the lake",
  "Journaling before busy weeks",
  "Wild daisies and the smell of cut hay",
  "Hosting themed wellness dinners",
  "Quiet jazz on rainy mornings",
];

export default function AboutPage() {
  return (
    <div className="about-page section-wrap">
      <Reveal>
        <h1 className="about-heading font-display">Hello, I&apos;m Aspen Rose</h1>
        <div className="about-intro-grid">
          <div className="about-bio-image-wrap">
            <Image
              src="/images/aspenheadshot1.jpg"
              alt="Aspen Rose, founder of Beyond Balance"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="about-bio-card">
            <p>
              I started Beyond Balance because I believe that people need space to think clearly,
              make good decisions, and build relationships.
            </p>
            <p>
              Throughout school, my professional (and personal) wins and losses, I found that
              within myself on the mat and with others through community.
            </p>
            <p>
              My aim is to create the time in a busy world for others to do the same. Join me for a
              cup of coffee or tea to talk about what we could build together.
            </p>
          </div>
        </div>
      </Reveal>

      <Reveal>
        <div className="about-values-grid">
          <div className="about-card about-card--statement">
            <p className="label">Mission</p>
            <p className="about-statement-body">
              To create a space where high-capacity people can slow down, so they can think more
              clearly and show up fully for work and the relationships that matter most.
            </p>
          </div>

          <div className="about-card about-card--statement">
            <p className="label">Vision</p>
            <p className="about-statement-body">
              A place where people move beyond just balancing relationships and find true resonance
              so that critical thinking, difficult discussions, and ethical decisions create more
              impact.
            </p>
          </div>

          <div className="about-card about-card--credentials">
            <p className="label">Certifications &amp; Credentials</p>
            <ul className="about-credentials-list">
              {credentials.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="about-card about-card--adores about-values-full">
            <p className="label">Things I adore</p>
            <ul className="about-adores-list">
              {adores.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
