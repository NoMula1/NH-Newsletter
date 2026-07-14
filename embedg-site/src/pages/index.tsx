import React, { useEffect } from "react";
import Layout from "@theme/Layout";
import HomeHeader from "../components/HomeHeader";
import HomeHero from "../components/HomeHero";
import HomeFeatures from "../components/HomeFeatures";
import HomeHowItWorks from "../components/HomeHowItWorks";
import HomeStats from "../components/HomeStats";
import HomeCTA from "../components/HomeCTA";
import HomeFooter from "../components/HomeFooter";

import "../css/tailwind.css";

export default function Home(): JSX.Element {
  // Scroll-reveal observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(".nh-reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <Layout
      title="NH-Newsletter | Discord Embed Generator"
      description="Create rich, branded Discord embeds with ease. The developer-focused embed builder for NightHawk Network."
      noFooter
    >
      <div
        className="nh-grain"
        style={{
          background: "#0a0a0a",
          minHeight: "100dvh",
          fontFamily: "'Inter', system-ui, sans-serif",
          color: "#e8e8e8",
        }}
      >
        <HomeHeader />
        <HomeHero />
        <HomeFeatures />
        <HomeHowItWorks />
        <HomeStats />
        <HomeCTA />
        <HomeFooter />
      </div>
    </Layout>
  );
}
