import React, { useEffect, useRef, useState } from "react";

const stats = [
  {
    value: 50000,
    suffix: "+",
    label: "Embeds Created",
    description: "Messages sent to Discord servers worldwide",
  },
  {
    value: 12000,
    suffix: "+",
    label: "Active Users",
    description: "Developers and server admins building with us",
  },
  {
    value: 99,
    suffix: "%",
    label: "Uptime",
    description: "Reliable infrastructure you can count on",
  },
  {
    value: 100,
    suffix: "%",
    label: "Open Source",
    description: "Free forever, community-driven development",
  },
];

function useCountUp(target: number, duration = 1800, active = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [active, target, duration]);

  return count;
}

function StatCard({
  stat,
  active,
}: {
  stat: (typeof stats)[0];
  active: boolean;
}) {
  const count = useCountUp(stat.value, 1800, active);

  const formatted =
    stat.value >= 1000
      ? (count / 1000).toFixed(count >= stat.value ? 0 : 1) + "K"
      : count.toString();

  return (
    <div
      style={{
        textAlign: "center",
        padding: "40px 24px",
        borderRight: "1px solid #1a1a1a",
        flex: 1,
        minWidth: "180px",
      }}
    >
      <div
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: "clamp(2rem, 4vw, 3rem)",
          fontWeight: 700,
          color: "#E63946",
          lineHeight: 1,
          marginBottom: "8px",
          textShadow: "0 0 20px rgba(230,57,70,0.3)",
        }}
      >
        {stat.value >= 1000 ? formatted : count}
        {stat.suffix}
      </div>
      <div
        style={{
          fontSize: "14px",
          fontWeight: 600,
          color: "#e8e8e8",
          marginBottom: "6px",
          fontFamily: "'Inter', sans-serif",
        }}
      >
        {stat.label}
      </div>
      <div
        style={{
          fontSize: "12px",
          color: "#555",
          lineHeight: 1.5,
        }}
      >
        {stat.description}
      </div>
    </div>
  );
}

export default function HomeStats(): JSX.Element {
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        padding: "80px 24px",
        background: "#0a0a0a",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Section label */}
        <div
          className="nh-reveal"
          style={{ textAlign: "center", marginBottom: "48px" }}
        >
          <div className="nh-badge" style={{ marginBottom: "16px" }}>
            <svg
              width="10"
              height="10"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
            </svg>
            By the numbers
          </div>
          <h2
            style={{
              fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
              fontWeight: 800,
              color: "#e8e8e8",
              letterSpacing: "-0.03em",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            Trusted by Discord communities
          </h2>
        </div>

        {/* Stats row */}
        <div
          className="nh-reveal"
          style={{
            display: "flex",
            flexWrap: "wrap",
            background: "#111",
            border: "1px solid #1e1e1e",
            borderRadius: "16px",
            overflow: "hidden",
          }}
        >
          {stats.map((stat) => (
            <StatCard
              key={stat.label}
              stat={stat}
              active={active}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
