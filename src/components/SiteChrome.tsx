"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { navLinks, site } from "@/data/site";

function SocialIcon({ label }: { label: string }) {
  return (
    <span aria-hidden="true" className="social-icon-mark">
      {label}
    </span>
  );
}

export default function SiteChrome({ children }: { children: React.ReactNode }) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawerOpen]);

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>

      <div className="info-bar">
        <p>{site.address}</p>
        <a href={`tel:${site.phone.replace(/[^\d]/g, "")}`}>{site.phone}</a>
      </div>

      <header className="main-header">
        <button
          type="button"
          className="menu-button"
          aria-label="Open navigation menu"
          aria-expanded={drawerOpen}
          onClick={() => setDrawerOpen(true)}
        >
          <span />
          <span />
          <span />
        </button>

        <Link href="/" className="brand-mark">
          Beyond Balance
        </Link>

        <a className="book-link" href={site.bookingUrl} target="_blank" rel="noreferrer">
          Book with Me
        </a>
      </header>

      <aside className={`nav-drawer ${drawerOpen ? "open" : ""}`} aria-hidden={!drawerOpen}>
        <div className="drawer-inner">
          <button
            type="button"
            className="close-button"
            aria-label="Close navigation menu"
            onClick={() => setDrawerOpen(false)}
          >
            Close
          </button>

          <nav aria-label="Primary navigation" className="drawer-nav">
            {navLinks.map((link) => (
              <Link
                href={link.href}
                key={link.href}
                className="drawer-link"
                onClick={() => setDrawerOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <a className="cta-button" href={site.mindbodyUrl} target="_blank" rel="noreferrer">
            Open Mindbody
          </a>
        </div>
      </aside>

      {drawerOpen ? (
        <button
          type="button"
          className="drawer-overlay"
          aria-label="Close navigation overlay"
          onClick={() => setDrawerOpen(false)}
        />
      ) : null}

      <main id="main-content" className="page-shell">
        {children}
      </main>

      <footer className="site-footer">
        <div className="site-footer-columns">
          <div className="site-footer-contact-col">
            <p>{site.address}</p>
            <p>
              <a href={`tel:${site.phone.replace(/[^\d]/g, "")}`}>{site.phone}</a>
            </p>
            <p>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </p>
            <div className="social-row" aria-label="Social media links">
              <a href={site.social.instagram} aria-label="Instagram" target="_blank" rel="noreferrer">
                <SocialIcon label="IG" />
              </a>
              <a href={site.social.facebook} aria-label="Facebook" target="_blank" rel="noreferrer">
                <SocialIcon label="FB" />
              </a>
              <a href={site.social.linkedin} aria-label="LinkedIn" target="_blank" rel="noreferrer">
                <SocialIcon label="IN" />
              </a>
            </div>
          </div>

          <div className="site-footer-brand-col">
            <h2 className="font-display text-3xl">Beyond Balance</h2>
            <p className="site-footer-tagline">
              Personalized yoga for high-performing people who want to feel grounded,
              present, and deeply well.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
