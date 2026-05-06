import type { Metadata } from "next";
import EventsFilter from "@/components/EventsFilter";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Events",
  description: "Browse upcoming workshops, retreats, corporate sessions, and community events.",
};

const upcomingEvents = [
  {
    name: "Morning Mobility for Executives",
    date: "May 12, 2026",
    location: "Chicago Loop Office",
    description: "A concise workshop for desk-bound teams to improve posture and energy.",
    type: "corporate" as const,
    link: "https://calendly.com/example/mobility-workshop",
  },
  {
    name: "Lakefront Restorative Evening",
    date: "May 24, 2026",
    location: "North Avenue Beach",
    description: "Sunset restorative practice and guided breathwork for nervous-system reset.",
    type: "community" as const,
    link: "https://calendly.com/example/lakefront-evening",
  },
  {
    name: "Embodied Leadership Workshop",
    date: "June 3, 2026",
    location: "Fulton Market Studio",
    description: "Movement, mindfulness, and communication practices for modern leaders.",
    type: "workshop" as const,
    link: "https://calendly.com/example/embodied-leadership",
  },
  {
    name: "Hill Country Reset Retreat",
    date: "July 18-20, 2026",
    location: "Austin, Texas",
    description: "Weekend retreat with yoga, seasonal meals, and reflective coaching circles.",
    type: "retreat" as const,
    link: "https://calendly.com/example/hill-country-retreat",
  },
];

export default function EventsPage() {
  return (
    <div className="section-wrap">
      <Reveal>
        <p className="label">Upcoming events</p>
        <h1 className="mt-3 font-display text-5xl">Gather, reset, and reconnect.</h1>
      </Reveal>

      <div className="mt-10">
        <EventsFilter events={upcomingEvents} />
      </div>
    </div>
  );
}
