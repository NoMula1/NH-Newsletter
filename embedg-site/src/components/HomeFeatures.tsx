import React, { useRef } from "react";

const features = [
  {
    name: "Visual Embed Builder",
    description:
      "Drag-and-drop editor with live preview. Build rich embeds with titles, descriptions, fields, images, and footers — no JSON required.",
    href: "/docs",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
    tag: "Core",
  },
  {
    name: "Save & Share Messages",
    description:
      "Store your embeds in the cloud and access them from any device. Share templates with your team or the community.",
    href: "/docs/features/save-messages",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
        <polyline points="17 21 17 13 7 13 7 21" />
        <polyline points="7 3 7 8 15 8" />
      </svg>
    ),
    tag: "Core",
  },
  {
    name: "Custom Branding",
    description:
      "Override the webhook username and avatar to match your server's brand. Make every message feel native to your community.",
    href: "/docs/features/custom-branding",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14" />
      </svg>
    ),
    tag: "Core",
  },
  {
    name: "Interactive Components",
    description:
      "Add buttons and select menus to your messages. Assign roles, trigger responses, and build interactive Discord experiences.",
    href: "/docs/features/interactive-components",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 3H8M12 3v4" />
        <circle cx="8" cy="14" r="1.5" fill="currentColor" />
        <path d="M12 14h4M12 17h4" />
      </svg>
    ),
    tag: "Core",
  },
  {
    name: "White Label Bot",
    description:
      "Integrate your own Discord bot to fully brand button responses and select menu interactions under your own identity.",
    href: "/docs/features/white-label",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    tag: "Premium",
  },
  {
    name: "AI Assistant",
    description:
      "Let AI draft your embed content. Describe what you need and get a polished message ready to send in seconds.",
    href: "/docs/features/ai-assistant",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
    tag: "Premium",
  },
];

function FeatureCard({ feature }: { feature: typeof features[0] }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const rotateX = ((y - cy) / cy) * -6;
    const rotateY = ((x - cx) / cx) * 6;
    card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = "perspective(800px) rotateX(0deg) rotateY(0deg) translateY(0)";
  };

  const isPremium = feature.tag === "Premium";

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        background: "#111",
        border: `1px solid ${isPremium ? "rgba(230,57,70,0.25)" : "#1e1e1e"}`,
        borderRadius: "12px",
        padding: "28px",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        transition: "transform 0.15s ease, box-shadow 0.2s ease, border-color 0.2s ease",
        cursor: "default",
        willChange: "transform",
        position: "relative",
        overflow: "hidden",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.borderColor = isPremium ? "rgba(230,57,70,0.5)" : "#2a2a2a";
        el.style.boxShadow = isPremium
          ? "0 8px 40px rgba(230,57,70,0.12)"
          : "0 8px 40px rgba(0,0,0,0.4)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.borderColor = isPremium ? "rgba(230,57,70,0.25)" : "#1e1e1e";
        el.style.boxShadow = "none";
      }}
    >
      {/* Subtle top gradient for premium */}
      {isPremium && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "1px",
            background: "linear-gradient(90deg, transparent, rgba(230,57,70,0.6), transparent)",
          }}
        />
      )}

      {/* Icon + tag row */}
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
        <div
          style={{
            width: 44,
            height: 44,
            borderRadius: "10px",
            background: isPremium ? "rgba(230,57,70,0.1)" : "rgba(255,255,255,0.04)",
            border: `1px solid ${isPremium ? "rgba(230,57,70,0.2)" : "#2a2a2a"}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: isPremium ? "#E63946" : "#888",
          }}
        >
          {feature.icon}
        </div>
        <span
          style={{
            fontSize: "10px",
            fontFamily: "'JetBrains Mono', monospace",
            fontWeight: 600,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: isPremium ? "#E63946" : "#555",
            padding: "3px 8px",
            borderRadius: "4px",
            background: isPremium ? "rgba(230,57,70,0.08)" : "rgba(255,255,255,0.04)",
            border: `1px solid ${isPremium ? "rgba(230,57,70,0.2)" : "#2a2a2a"}`,
          }}
        >
          {feature.tag}
        </span>
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
          {feature.name}
        </h3>
        <p
          style={{
            fontSize: "14px",
            color: "#666",
            lineHeight: 1.65,
            margin: 0,
          }}
        >
          {feature.description}
        </p>
      </div>

      {/* Learn more */}
      <a
        href={feature.href}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "4px",
          fontSize: "13px",
          color: isPremium ? "#E63946" : "#555",
          textDecoration: "none",
          fontWeight: 500,
          marginTop: "auto",
          transition: "color 0.2s, gap 0.2s",
        }}
        onMouseEnter={(e) => {
          const el = e.currentTarget as HTMLAnchorElement;
          el.style.color = "#E63946";
          el.style.gap = "8px";
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget as HTMLAnchorElement;
          el.style.color = isPremium ? "#E63946" : "#555";
          el.style.gap = "4px";
        }}
      >
        Learn more
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </a>
    </div>
  );
}

export default function HomeFeatures(): JSX.Element {
  return (
    <section
      id="features"
      style={{
        padding: "100px 24px",
        background: "#0a0a0a",
        borderTop: "1px solid #1a1a1a",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Section header */}
        <div className="nh-reveal" style={{ textAlign: "center", marginBottom: "64px" }}>
          <div className="nh-badge" style={{ marginBottom: "16px" }}>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            Features
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
            Everything you need to build{" "}
            <span className="nh-gradient-text">great embeds</span>
          </h2>
          <p
            style={{
              fontSize: "1rem",
              color: "#666",
              maxWidth: "520px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            From simple announcements to complex interactive messages — the
            embed generator has you covered.
          </p>
        </div>

        {/* Feature grid */}
        <div
          className="nh-reveal"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: "16px",
          }}
        >
          {features.map((feature) => (
            <FeatureCard key={feature.name} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
