"use client";

import { useMemo, useState } from "react";

type EventType = "workshop" | "retreat" | "corporate" | "community";

type EventItem = {
  name: string;
  date: string;
  location: string;
  description: string;
  type: EventType;
  link: string;
};

const labels: Record<EventType | "all", string> = {
  all: "All",
  workshop: "Workshop",
  retreat: "Retreat",
  corporate: "Corporate",
  community: "Community",
};

export default function EventsFilter({ events }: { events: EventItem[] }) {
  const [selected, setSelected] = useState<EventType | "all">("all");

  const filtered = useMemo(
    () => (selected === "all" ? events : events.filter((event) => event.type === selected)),
    [events, selected],
  );

  return (
    <section className="space-y-8">
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter events">
        {(Object.keys(labels) as (EventType | "all")[]).map((type) => (
          <button
            key={type}
            type="button"
            role="tab"
            aria-selected={selected === type}
            onClick={() => setSelected(type)}
            className={`rounded-full border px-4 py-2 text-xs tracking-[0.16em] uppercase transition ${
              selected === type
                ? "border-[var(--color-accent)] bg-[var(--color-accent)] text-[var(--color-ink-soft)]"
                : "border-[var(--color-line)] bg-[var(--color-surface)] text-[var(--color-ink)] hover:border-[var(--color-sage)]"
            }`}
          >
            {labels[type]}
          </button>
        ))}
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {filtered.map((event) => (
          <article key={event.name} className="rounded-3xl border border-[var(--color-line)] bg-[var(--color-surface)] p-7">
            <p className="text-xs uppercase tracking-[0.16em] text-[var(--color-sage)]">{labels[event.type]}</p>
            <h3 className="mt-3 font-display text-3xl text-[var(--color-ink)]">{event.name}</h3>
            <p className="mt-3 text-sm text-[var(--color-ink-muted)]">
              {event.date} · {event.location}
            </p>
            <p className="mt-4 text-[var(--color-ink-muted)]">{event.description}</p>
            <a href={event.link} className="link-button mt-6 inline-flex" target="_blank" rel="noreferrer">
              Register
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
