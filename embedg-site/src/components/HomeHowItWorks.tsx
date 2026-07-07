import React from "react";

const steps = [
  {
    number: "01",
    title: "Open the Builder",
    description:
      "Navigate to the embed generator app. No account required to start — just open and build.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
    code: "open /app",
  },
  {
    number: "02",
    title: "Design Your Embed",
    description:
      "Use the visual editor to set your title, description, color, fields, and images. Preview updates in real time.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
    code: "embed.set({ title, color, fields })",
  },
  {
    number: "03",
    title: "Add Interactivity",
    description:
      "Attach buttons, select menus, and role assignments. Turn static messages into dynamic Discord experiences.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5" />
      </svg>
    ),
    code: "embed.addButton({ label, action })",
  },
  {
    number: "04",
    title: "Send via Webhook",
    description:
      "Paste your Discord webhook URL and fire. Your embed lands in the target channel instantly.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <line x1="22" y1="2" x2="11" y2="13" />
        <polygon points="22 2 15 22 11 13 2 9 22 2" />
      </svg>
    ),
    code: "embed.send(WEBHOOK_URL)",
  },
];

export default function HomeHowItWorks(): JSX.Element {
  return (
    <section
      id="how-it-works"
      style={{
        padding: "100px 24px",
        background: "#0d0d0d",
        borderTop: "1px solid #1a1a1a",
        borderBottom: "1px solid #1a1a1a",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Section header */}
        <div className="nh-reveal" style={{ textAlign: "center", marginBottom: "72px" }}>
          <div className="nh-badge" style={{ marginBottom: "16px" }}>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
            </svg>
            How it works
          </div>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              fontWeight: 800,
              color: "#e8e8e8",
              letterSpacing: "-0.03em",
              marginBottom: "16px",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            From idea to Discord in{" "}
            <span className="nh-gradient-text">four steps</span>
          </h2>
          <p
            style={{
              fontSize: "1rem",
              color: "#666",
              maxWidth: "480px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            The embed generator is designed to be fast. Most users go from zero
            to a live Discord message in under two minutes.
          </p>
        </div>

        {/* Steps */}
        <div
          className="nh-reveal"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "2px",
            background: "#1a1a1a",
            borderRadius: "16px",
            overflow: "hidden",
            border: "1px solid #1a1a1a",
          }}
        >
          {steps.map((step, i) => (
            <div
              key={step.number}
              style={{
                background: "#0d0d0d",
                padding: "36px 28px",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                position: "relative",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.background = "#111";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.background = "#0d0d0d";
              }}
            >
              {/* Step number */}
              <div
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "11px",
                  fontWeight: 700,
                  color: "#E63946",
                  letterSpacing: "0.1em",
                  opacity: 0.7,
                }}
              >
                {step.number}
              </div>

              {/* Icon */}
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: "12px",
                  background: "rgba(230,57,70,0.08)",
                  border: "1px solid rgba(230,57,70,0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#E63946",
                }}
              >
                {step.icon}
              </div>

              {/* Text */}
              <div>
                <h3
                  style={{
                    fontSize: "16px",
                    fontWeight: 600,
                    color: "#e8e8e8",
                    marginBottom: "8px",
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  {step.title}
                </h3>
                <p
                  style={{
                    fontSize: "14px",
                    color: "#666",
                    lineHeight: 1.65,
                    margin: 0,
                  }}
                >
                  {step.description}
                </p>
              </div>

              {/* Code snippet */}
              <div
                style={{
                  marginTop: "auto",
                  padding: "8px 12px",
                  background: "#0a0a0a",
                  border: "1px solid #1e1e1e",
                  borderRadius: "6px",
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "11px",
                  color: "#555",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                <span style={{ color: "#E63946" }}>$ </span>
                {step.code}
              </div>

              {/* Connector arrow (not on last) */}
              {i < steps.length - 1 && (
                <div
                  style={{
                    position: "absolute",
                    right: "-13px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    zIndex: 10,
                    width: 24,
                    height: 24,
                    background: "#1a1a1a",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#E63946",
                  }}
                  className="hidden lg:flex"
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
