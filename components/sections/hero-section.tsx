"use client";

import { useEffect, useState } from "react";
import { Terminal } from "../ui/terminal";
import { AnimatedText } from "../ui/animated-text";

export function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const terminalLines = [
    "Initializing Skill Manager v1.0.0...",
    "Scanning for agent skill directories...",
    "Found 15+ compatible agents",
    "Indexing 200+ skills across all agents",
    "System ready.",
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      {/* Animated scan line */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="scan-line absolute left-0 right-0 h-px bg-accent/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
        <div className="stagger-children">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-accent/50 rounded-full text-xs text-accent mb-8">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse-subtle" />
            <span>Local • Open Source • Terminal Native</span>
          </div>

          {/* Main title */}
          <h1 className="font-display text-6xl md:text-8xl font-bold mb-6 tracking-tight">
            <AnimatedText text="SKILL MANAGER" delay={300} charDelay={80} />
          </h1>

          {/* Tagline */}
          <p className="font-body text-xl md:text-2xl text-foreground/70 mb-12 max-w-2xl">
            Local control center for AI agent skills.
            <br />
            Search, preview, and share across 15+ assistants.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-16">
            <a
              href="#installation"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-background font-display font-semibold hover:bg-accent/90 transition-colors"
            >
              <span>Get Started</span>
              <span>→</span>
            </a>
            <a
              href="https://github.com"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-border text-foreground font-display font-semibold hover:bg-card-bg-alt transition-colors"
            >
              <span>Documentation</span>
              <span>↗</span>
            </a>
          </div>

          {/* Terminal */}
          <div className="max-w-xl">
            <Terminal lines={terminalLines} delay={mounted ? 500 : 0} />
          </div>
        </div>
      </div>

      {/* Orbital elements decoration */}
      <div className="absolute top-1/4 left-10 w-20 h-20 border border-accent/20 rounded-full animate-pulse-subtle" />
      <div className="absolute bottom-1/4 right-10 w-32 h-32 border border-accent-secondary/20 rounded-full animate-pulse-subtle" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/3 right-1/4 w-16 h-16 border border-accent-highlight/20 rounded-full animate-pulse-subtle" style={{ animationDelay: "0.5s" }} />

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-foreground/50 text-xs">
        <span>Scroll to explore</span>
        <div className="w-px h-8 bg-foreground/30 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-4 bg-accent animate-bounce" />
        </div>
      </div>
    </section>
  );
}
