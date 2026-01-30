"use client";

import { useEffect, useState } from "react";
import { TechCard } from "../ui/tech-card";

export function FeaturesBento() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("features-section");
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      title: "Unified Index",
      description: "Single command indexes all skills from 15+ AI assistants. No more searching through scattered directories.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path d="M4 6h16M4 12h16M4 18h16" />
          <path d="M9 6v12M15 6v12" />
        </svg>
      ),
      size: "large",
      variant: "accent" as const,
    },
    {
      title: "Instant Search",
      description: "Fuzzy search across all skills. Find by name, category, or content description.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <circle cx="11" cy="11" r="8" />
          <path d="M21 21l-4.35-4.35" />
        </svg>
      ),
      size: "small",
      variant: "default" as const,
    },
    {
      title: "Skill Preview",
      description: "Read skill descriptions and code snippets before installing. Know exactly what you're getting.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
      size: "small",
      variant: "default" as const,
    },
    {
      title: "Cross-Agent Sharing",
      description: "Share skills between assistants with one command. A skill written for Claude works in Cursor, Copilot, and more.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
      size: "large",
      variant: "secondary" as const,
    },
    {
      title: "Export & Backup",
      description: "Export your entire skill collection as a portable archive. Never lose your custom skills.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
        </svg>
      ),
      size: "small",
      variant: "default" as const,
    },
    {
      title: "Category Management",
      description: "Organize skills by category: coding, writing, analysis, automation. Filter and browse efficiently.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
        </svg>
      ),
      size: "small",
      variant: "default" as const,
    },
  ];

  return (
    <section id="features-section" className="py-32 px-6 bg-card-bg-alt/50">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className={`mb-16 transition-opacity duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px flex-1 bg-border-light" />
            <span className="text-xs font-display text-accent uppercase tracking-widest">
              Features
            </span>
            <div className="h-px flex-1 bg-border-light" />
          </div>

          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Everything You Need
          </h2>

          <p className="font-body text-lg text-foreground/60 max-w-2xl">
            A complete toolkit for managing AI agent skills locally. No cloud
            dependencies, no API calls, no tracking.
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[200px]">
          {features.map((feature, index) => {
            const spanClass = feature.size === "large" ? "md:col-span-2 md:row-span-2" : "";
            const delay = index * 100;

            return (
              <div
                key={feature.title}
                className={`transition-all duration-500 ${spanClass} ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${delay}ms` }}
              >
                <TechCard
                  title={feature.title}
                  description={feature.description}
                  icon={feature.icon}
                  variant={feature.variant}
                  className="h-full"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
