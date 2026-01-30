"use client";

import { useState, useEffect } from "react";

export function Installation() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById("installation-section");
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const installSteps = [
    {
      title: "Clone the repository",
      command: "git clone https://github.com/yourusername/skill-manager.git",
      description: "Get the latest version from GitHub",
    },
    {
      title: "Install dependencies",
      command: "cd skill-manager && pnpm install",
      description: "Install the required packages",
    },
    {
      title: "Link to your PATH",
      command: 'pnpm link --global',
      description: "Make the CLI available everywhere",
    },
    {
      title: "Run the indexer",
      command: "skill-manager index",
      description: "Scan and index all available skills",
    },
  ];

  return (
    <section id="installation-section" className="py-32 px-6 bg-card-bg-alt/50">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className={`mb-16 transition-opacity duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px flex-1 bg-border-light" />
            <span className="text-xs font-display text-accent uppercase tracking-widest">
              Installation
            </span>
            <div className="h-px flex-1 bg-border-light" />
          </div>

          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Up and Running in Seconds
          </h2>

          <p className="font-body text-lg text-foreground/60 max-w-2xl">
            No configuration required. Skill Manager automatically detects your
            installed AI assistants and indexes their skills.
          </p>
        </div>

        {/* System requirements */}
        <div
          className={`mb-12 p-6 border-2 border-border bg-card-bg transition-all duration-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <h3 className="font-display text-sm font-semibold mb-4 text-accent">
            // SYSTEM REQUIREMENTS
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div>
              <div className="text-foreground/50 mb-1">OS</div>
              <div>Linux, macOS, WSL</div>
            </div>
            <div>
              <div className="text-foreground/50 mb-1">Node.js</div>
              <div>v18 or higher</div>
            </div>
            <div>
              <div className="text-foreground/50 mb-1">Package Manager</div>
              <div>pnpm recommended</div>
            </div>
            <div>
              <div className="text-foreground/50 mb-1">Disk Space</div>
              <div>&lt; 50 MB</div>
            </div>
          </div>
        </div>

        {/* Installation steps */}
        <div className="space-y-6">
          {installSteps.map((step, index) => (
            <div
              key={index}
              className={`transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                {/* Step number */}
                <div className="flex-shrink-0 w-8 h-8 border-2 border-accent text-accent font-display font-bold flex items-center justify-center">
                  {index + 1}
                </div>

                {/* Step content */}
                <div className="flex-1">
                  <h4 className="font-display text-lg font-semibold mb-2">
                    {step.title}
                  </h4>
                  <p className="text-sm text-foreground/60 mb-3">{step.description}</p>

                  {/* Code block */}
                  <div className="relative group">
                    <pre className="bg-foreground text-background p-4 overflow-x-auto text-sm font-mono">
                      <code>{step.command}</code>
                    </pre>
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(step.command);
                      }}
                      className="absolute top-2 right-2 p-2 bg-background/10 hover:bg-background/20 text-background rounded opacity-0 group-hover:opacity-100 transition-opacity"
                      aria-label="Copy to clipboard"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                        <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick start command */}
        <div
          className={`mt-12 p-6 border-2 border-accent bg-accent/5 transition-all duration-500 delay-400 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="font-display text-sm font-semibold text-accent mb-2">
            // QUICK START
          </div>
          <p className="text-sm mb-4">After installation, search all skills with:</p>
          <pre className="bg-card-bg border border-border p-4 text-sm font-mono">
            <code>skill-manager search --all</code>
          </pre>
        </div>
      </div>
    </section>
  );
}
