"use client";

import { useEffect, useState } from "react";

export function ProblemSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById("problem-section");
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const problems = [
    {
      number: "01",
      title: "Skills Fragmented Everywhere",
      description: "Each AI assistant stores skills in different locations. Finding the right skill means checking multiple directories.",
      icon: "📂",
    },
    {
      number: "02",
      title: "No Unified Search",
      description: "Can't search across all agents. Need to know exactly which assistant has the skill you're looking for.",
      icon: "🔍",
    },
    {
      number: "03",
      title: "Manual Link Management",
      description: "Creating symbolic links between agents is error-prone and breaks when paths change.",
      icon: "🔗",
    },
  ];

  return (
    <section id="problem-section" className="py-32 px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className={`transition-opacity duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px flex-1 bg-border-light" />
            <span className="text-xs font-display text-accent uppercase tracking-widest">
              The Problem
            </span>
            <div className="h-px flex-1 bg-border-light" />
          </div>

          <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">
            Fragments Everywhere
          </h2>

          <p className="font-body text-lg text-foreground/60 max-w-2xl mb-16">
            Modern developers use multiple AI coding assistants. But each one
            manages skills independently, creating a fragmented experience.
          </p>
        </div>

        {/* Problems grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div
              key={problem.number}
              className={`border-2 border-border p-8 relative transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Number badge */}
              <div className="absolute -top-3 -left-3 w-10 h-10 bg-accent text-background font-display font-bold flex items-center justify-center text-sm">
                {problem.number}
              </div>

              {/* Icon */}
              <div className="text-4xl mb-6">{problem.icon}</div>

              {/* Title */}
              <h3 className="font-display text-xl font-semibold mb-4">
                {problem.title}
              </h3>

              {/* Description */}
              <p className="font-body text-sm text-foreground/70 leading-relaxed">
                {problem.description}
              </p>

              {/* Technical diagram lines */}
              <div className="absolute bottom-4 right-4 w-16 h-16 opacity-10">
                <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1">
                  <rect x="8" y="8" width="48" height="48" />
                  <path d="M8 8L56 56" />
                  <path d="M56 8L8 56" />
                  <circle cx="32" cy="32" r="12" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Statement */}
        <div
          className={`mt-16 p-8 border-2 border-accent/30 bg-accent/5 transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <p className="font-display text-lg text-center">
            <span className="text-accent">//</span> There must be a better way to
            manage AI skills locally.
          </p>
        </div>
      </div>
    </section>
  );
}
