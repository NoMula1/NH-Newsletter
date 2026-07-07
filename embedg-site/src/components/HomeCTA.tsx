import React from "react";

export default function HomeCTA(): JSX.Element {
  return (
    <section
      style={{
        padding: "100px 24px",
        background: "#0d0d0d",
        borderTop: "1px solid #1a1a1a",
      }}
    >
      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        {/* Glow orb */}
        <div
          style={{
            width: 120,
            height: 120,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(230,57,70,0.3) 0%, transparent 70%)",
            margin: "0 auto 40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: "50%",
              background: "rgba(230,57,70,0.15)",
              border: "1px solid rgba(230,57,70,0.3)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#E63946",
            }}
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M13 3L4 14h7l-1 7 9-11h-7l1-7z" />
            </svg>
          </div>
        </div>

        <div className="nh-reveal">
          <div className="nh-badge" style={{ marginBottom: "20px" }}>
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "#E63946",
                display: "inline-block",
              }}
            />
            Ready to build?
          </div>

          <h2
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 800,
              color: "#e8e8e8",
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              marginBottom: "20px",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            Start creating embeds{" "}
            <span className="nh-gradient-text">right now</span>
          </h2>

          <p
            style={{
              fontSize: "1.05rem",
              color: "#666",
              lineHeight: 1.7,
              marginBottom: "40px",
              maxWidth: "520px",
              margin: "0 auto 40px",
            }}
          >
            No account required. Open the app, build your embed, and send it to
            Discord in under two minutes. Free forever, open source.
          </p>

          {/* CTA buttons */}
          <div
            style={{
              display: "flex",
              gap: "12px",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <a
              href="/app"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "16px 36px",
                borderRadius: "8px",
                background: "#E63946",
                color: "#fff",
                fontSize: "16px",
                fontWeight: 700,
                textDecoration: "none",
                transition: "all 0.2s ease",
                fontFamily: "'Inter', sans-serif",
                letterSpacing: "-0.01em",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.background = "#c1121f";
                el.style.boxShadow = "0 0 40px rgba(230,57,70,0.5)";
                el.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.background = "#E63946";
                el.style.boxShadow = "none";
                el.style.transform = "translateY(0)";
              }}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M13 3L4 14h7l-1 7 9-11h-7l1-7z" />
              </svg>
              Open App — It's Free
            </a>

            <a
              href="/source"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "16px 28px",
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
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              View on GitHub
            </a>
          </div>

          {/* Trust indicators */}
          <div
            style={{
              marginTop: "48px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "32px",
              flexWrap: "wrap",
            }}
          >
            {[
              { icon: "🔓", text: "No account needed" },
              { icon: "⚡", text: "Instant setup" },
              { icon: "🛠️", text: "Open source" },
            ].map((item) => (
              <div
                key={item.text}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  fontSize: "13px",
                  color: "#555",
                  fontFamily: "'JetBrains Mono', monospace",
                }}
              >
                <span>{item.icon}</span>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
