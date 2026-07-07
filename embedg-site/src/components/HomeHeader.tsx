import React, { useState, useEffect } from "react";

export default function HomeHeader(): JSX.Element {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Features", href: "#features" },
    { label: "How it works", href: "#how-it-works" },
    { label: "Docs", href: "/docs" },
    { label: "GitHub", href: "/source" },
  ];

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: "12px 24px",
        display: "flex",
        justifyContent: "center",
        pointerEvents: "none",
      }}
    >
      <nav
        style={{
          pointerEvents: "all",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          maxWidth: "900px",
          padding: "10px 20px",
          borderRadius: "999px",
          background: scrolled
            ? "rgba(10,10,10,0.92)"
            : "rgba(10,10,10,0.75)",
          backdropFilter: "blur(16px)",
          border: "1px solid #2a2a2a",
          boxShadow: scrolled
            ? "0 4px 32px rgba(0,0,0,0.5)"
            : "0 2px 16px rgba(0,0,0,0.3)",
          transition: "all 0.3s ease",
        }}
      >
        {/* Logo */}
        <a
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            textDecoration: "none",
          }}
        >
          <img
            src="/img/logo.svg"
            alt="NH-Newsletter"
            style={{ width: 28, height: 28, borderRadius: "50%" }}
          />
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontWeight: 600,
              fontSize: "14px",
              color: "#e8e8e8",
              letterSpacing: "-0.02em",
            }}
          >
            NH<span style={{ color: "#E63946" }}>-Newsletter</span>
          </span>
        </a>

        {/* Desktop nav links */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "4px",
          }}
          className="hidden sm:flex"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                padding: "6px 14px",
                borderRadius: "999px",
                fontSize: "13px",
                color: "#888",
                textDecoration: "none",
                transition: "color 0.2s, background 0.2s",
                fontWeight: 500,
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLAnchorElement).style.color = "#e8e8e8";
                (e.target as HTMLAnchorElement).style.background =
                  "rgba(255,255,255,0.06)";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLAnchorElement).style.color = "#888";
                (e.target as HTMLAnchorElement).style.background = "transparent";
              }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA button */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <a
            href="/app"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              padding: "8px 18px",
              borderRadius: "999px",
              background: "#E63946",
              color: "#fff",
              fontSize: "13px",
              fontWeight: 600,
              textDecoration: "none",
              transition: "background 0.2s, box-shadow 0.2s",
              boxShadow: "0 0 0 0 rgba(230,57,70,0)",
              fontFamily: "'Inter', sans-serif",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = "#c1121f";
              el.style.boxShadow = "0 0 20px rgba(230,57,70,0.4)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = "#E63946";
              el.style.boxShadow = "0 0 0 0 rgba(230,57,70,0)";
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M13 3L4 14h7l-1 7 9-11h-7l1-7z" />
            </svg>
            Open App
          </a>

          {/* Mobile hamburger */}
          <button
            className="sm:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "4px",
              color: "#888",
            }}
            aria-label="Toggle menu"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {menuOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div
          style={{
            position: "absolute",
            top: "calc(100% - 8px)",
            left: "24px",
            right: "24px",
            background: "rgba(17,17,17,0.98)",
            border: "1px solid #2a2a2a",
            borderRadius: "16px",
            padding: "12px",
            backdropFilter: "blur(16px)",
            pointerEvents: "all",
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: "block",
                padding: "10px 16px",
                borderRadius: "8px",
                fontSize: "14px",
                color: "#888",
                textDecoration: "none",
                transition: "color 0.2s, background 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLAnchorElement).style.color = "#e8e8e8";
                (e.target as HTMLAnchorElement).style.background =
                  "rgba(255,255,255,0.06)";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLAnchorElement).style.color = "#888";
                (e.target as HTMLAnchorElement).style.background = "transparent";
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
