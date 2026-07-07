import React, { useEffect, useState } from "react";

const terminalLines = [
  { prefix: "$ ", text: "embed-gen init --template discord-announcement", color: "#e8e8e8" },
  { prefix: "✓ ", text: "Template loaded: discord-announcement", color: "#4ade80" },
  { prefix: "$ ", text: "embed-gen set --title 'Server Update v2.4'", color: "#e8e8e8" },
  { prefix: "✓ ", text: "Title set successfully", color: "#4ade80" },
  { prefix: "$ ", text: "embed-gen set --color '#E63946' --thumbnail logo.png", color: "#e8e8e8" },
  { prefix: "✓ ", text: "Color and thumbnail applied", color: "#4ade80" },
  { prefix: "$ ", text: "embed-gen add-field --name 'Release Date' --value 'Today'", color: "#e8e8e8" },
  { prefix: "$ ", text: "embed-gen send --webhook $DISCORD_WEBHOOK_URL", color: "#e8e8e8" },
  { prefix: "✓ ", text: "Embed delivered to #announcements", color: "#4ade80" },
];

export default function HomeHero(): JSX.Element {
  const [visibleLines, setVisibleLines] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [currentLineIdx, setCurrentLineIdx] = useState(0);
  const [phase, setPhase] = useState<"typing" | "done">("typing");

  useEffect(() => {
    if (phase !== "typing") return;
    const line = terminalLines[currentLineIdx];
    if (!line) {
      setPhase("done");
      return;
    }
    const fullText = line.prefix + line.text;
    if (typedText.length < fullText.length) {
      const delay = line.prefix === "✓ " ? 12 : 28;
      const t = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1));
      }, delay);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => {
        setVisibleLines((v) => v + 1);
        setCurrentLineIdx((i) => i + 1);
        setTypedText("");
      }, 180);
      return () => clearTimeout(t);
    }
  }, [typedText, currentLineIdx, phase]);

  return (
    <section
      className="nh-scanlines"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "120px 24px 80px",
        background:
          "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(230,57,70,0.07) 0%, transparent 70%), #0a0a0a",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          width: "100%",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "64px",
          alignItems: "center",
          position: "relative",
          zIndex: 2,
        }}
        className="hero-grid"
      >
        {/* Left: copy */}
        <div>
          {/* Badge */}
          <div className="nh-badge" style={{ marginBottom: "24px" }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#E63946", display: "inline-block" }} />
            NH-Newsletter · Embed Generator
          </div>

          <h1
            style={{
              fontSize: "clamp(2.4rem, 5vw, 4rem)",
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              color: "#e8e8e8",
              marginBottom: "20px",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            Create rich{" "}
            <span className="nh-gradient-text">Discord embeds</span>
            <br />
            without the hassle
          </h1>

          <p
            style={{
              fontSize: "1.1rem",
              color: "#888",
              lineHeight: 1.7,
              marginBottom: "36px",
              maxWidth: "480px",
              fontWeight: 400,
            }}
          >
            The developer-focused embed builder for NightHawk Network. Craft
            branded messages, add interactive components, and deploy to any
            Discord channel in seconds.
          </p>

          {/* CTA buttons */}
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <a
              href="/app"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "14px 28px",
                borderRadius: "8px",
                background: "#E63946",
                color: "#fff",
                fontSize: "15px",
                fontWeight: 600,
                textDecoration: "none",
                transition: "all 0.2s ease",
                fontFamily: "'Inter', sans-serif",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.background = "#c1121f";
                el.style.boxShadow = "0 0 32px rgba(230,57,70,0.4)";
                el.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.background = "#E63946";
                el.style.boxShadow = "none";
                el.style.transform = "translateY(0)";
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M13 3L4 14h7l-1 7 9-11h-7l1-7z" />
              </svg>
              Start Building
            </a>
            <a
              href="/docs"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "14px 28px",
                borderRadius: "8px",
                background: "transparent",
                color: "#888",
                fontSize: "15px",
                fontWeight: 500,
                textDecoration: "none",
                border: "1px solid #2a2a2a",
                transition: "all 0.2s ease",
                fontFamily: "'Inter', sans-serif",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.color = "#e8e8e8";
                el.style.borderColor = "#3a3a3a";
                el.style.background = "rgba(255,255,255,0.04)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.color = "#888";
                el.style.borderColor = "#2a2a2a";
                el.style.background = "transparent";
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
              </svg>
              Read Docs
            </a>
          </div>

          {/* Social proof */}
          <div
            style={{
              marginTop: "40px",
              display: "flex",
              alignItems: "center",
              gap: "20px",
              flexWrap: "wrap",
            }}
          >
            {[
              { value: "50K+", label: "Embeds created" },
              { value: "Free", label: "Open source" },
              { value: "v2.4", label: "Latest release" },
            ].map((stat) => (
              <div key={stat.label} style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                <span
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "18px",
                    fontWeight: 700,
                    color: "#E63946",
                  }}
                >
                  {stat.value}
                </span>
                <span style={{ fontSize: "12px", color: "#555", fontWeight: 500 }}>
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: terminal window */}
        <div
          className="nh-terminal animate-float"
          style={{
            boxShadow:
              "0 0 0 1px rgba(230,57,70,0.15), 0 32px 64px rgba(0,0,0,0.6), 0 0 80px rgba(230,57,70,0.05)",
          }}
        >
          {/* Terminal bar */}
          <div className="nh-terminal-bar">
            <div className="nh-terminal-dot" style={{ background: "#ff5f57" }} />
            <div className="nh-terminal-dot" style={{ background: "#febc2e" }} />
            <div className="nh-terminal-dot" style={{ background: "#28c840" }} />
            <span
              style={{
                marginLeft: "auto",
                fontSize: "11px",
                color: "#555",
                fontFamily: "'JetBrains Mono', monospace",
              }}
            >
              embed-gen · bash
            </span>
          </div>

          {/* Terminal body */}
          <div className="nh-terminal-body" style={{ minHeight: "280px" }}>
            {/* Completed lines */}
            {terminalLines.slice(0, visibleLines).map((line, i) => (
              <div key={i} style={{ marginBottom: "2px" }}>
                <span
                  style={{
                    color: line.prefix === "✓ " ? "#4ade80" : "#E63946",
                    fontWeight: 600,
                  }}
                >
                  {line.prefix}
                </span>
                <span style={{ color: line.color }}>{line.text}</span>
              </div>
            ))}

            {/* Currently typing line */}
            {phase === "typing" && currentLineIdx < terminalLines.length && (
              <div>
                <span
                  style={{
                    color:
                      terminalLines[currentLineIdx]?.prefix === "✓ "
                        ? "#4ade80"
                        : "#E63946",
                    fontWeight: 600,
                  }}
                >
                  {typedText.slice(
                    0,
                    terminalLines[currentLineIdx]?.prefix.length
                  )}
                </span>
                <span style={{ color: "#c8c8c8" }}>
                  {typedText.slice(
                    terminalLines[currentLineIdx]?.prefix.length
                  )}
                </span>
                <span
                  style={{
                    display: "inline-block",
                    width: "8px",
                    height: "14px",
                    background: "#E63946",
                    marginLeft: "1px",
                    verticalAlign: "middle",
                    animation: "blinkCursor 1s step-end infinite",
                  }}
                />
              </div>
            )}

            {/* Done state — show prompt */}
            {phase === "done" && (
              <div style={{ marginTop: "4px" }}>
                <span style={{ color: "#E63946", fontWeight: 600 }}>$ </span>
                <span
                  style={{
                    display: "inline-block",
                    width: "8px",
                    height: "14px",
                    background: "#E63946",
                    marginLeft: "1px",
                    verticalAlign: "middle",
                    animation: "blinkCursor 1s step-end infinite",
                  }}
                />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
}
