"use client";

import { useState, useEffect } from "react";
import { agents, categories, type Agent } from "@/lib/data/agents";
import { AgentIcon } from "../ui/agent-icon";

export function AgentsGrid() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [hoveredAgent, setHoveredAgent] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("agents-section");
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const filteredAgents = activeCategory === "all"
    ? agents
    : agents.filter((agent) => agent.category === activeCategory);

  return (
    <section id="agents-section" className="py-32 px-6 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="max-w-6xl mx-auto relative">
        {/* Section header */}
        <div className={`mb-16 transition-opacity duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px flex-1 bg-border-light" />
            <span className="text-xs font-display text-accent uppercase tracking-widest">
              Supported Agents
            </span>
            <div className="h-px flex-1 bg-border-light" />
          </div>

          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            15+ AI Assistants
          </h2>

          <p className="font-body text-lg text-foreground/60 max-w-2xl">
            One tool to manage them all. From Claude to Cursor, Copilot to
            CodeWhisperer—all your AI coding skills in one place.
          </p>
        </div>

        {/* Category filters */}
        <div className={`flex flex-wrap gap-3 mb-12 transition-opacity duration-700 delay-100 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 font-display text-sm font-semibold border-2 transition-all ${
                activeCategory === category.id
                  ? "border-accent bg-accent text-background"
                  : "border-border text-foreground hover:border-accent/50"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Agents grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {filteredAgents.map((agent, index) => (
            <div
              key={agent.id}
              className={`group relative border-2 border-border bg-card-bg p-4 transition-all duration-300 hover:border-accent cursor-pointer ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${200 + index * 50}ms` }}
              onMouseEnter={() => setHoveredAgent(agent.id)}
              onMouseLeave={() => setHoveredAgent(null)}
            >
              {/* Agent icon */}
              <div className="flex justify-center mb-4">
                <AgentIcon name={agent.name} size="lg" />
              </div>

              {/* Agent name */}
              <h3 className="font-display text-sm font-semibold text-center mb-2">
                {agent.name}
              </h3>

              {/* Stats */}
              <div className="text-xs text-center text-foreground/50 space-y-1">
                <div>{agent.stats.skills} skills</div>
                <div>{agent.stats.size}</div>
              </div>

              {/* Hover overlay */}
              <div
                className={`absolute inset-0 bg-accent/95 flex flex-col items-center justify-center p-4 transition-opacity duration-200 ${
                  hoveredAgent === agent.id ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
              >
                <p className="font-display text-xs text-background text-center mb-2">
                  {agent.path}
                </p>
                <span className="text-xs font-mono text-background/70">
                  {agent.category}
                </span>
              </div>

              {/* Category indicator */}
              <div className="absolute top-2 right-2">
                <span
                  className={`w-2 h-2 rounded-full ${
                    agent.category === "coding"
                      ? "bg-accent"
                      : agent.category === "writing"
                      ? "bg-accent-highlight"
                      : agent.category === "analysis"
                      ? "bg-accent-secondary"
                      : "bg-accent-warm"
                  }`}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Stats summary */}
        <div
          className={`mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 transition-opacity duration-700 delay-300 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="text-center">
            <div className="font-display text-3xl font-bold text-accent">15+</div>
            <div className="text-xs text-foreground/60 uppercase tracking-wider mt-1">
              Agents
            </div>
          </div>
          <div className="text-center">
            <div className="font-display text-3xl font-bold text-accent">200+</div>
            <div className="text-xs text-foreground/60 uppercase tracking-wider mt-1">
              Skills Indexed
            </div>
          </div>
          <div className="text-center">
            <div className="font-display text-3xl font-bold text-accent">5</div>
            <div className="text-xs text-foreground/60 uppercase tracking-wider mt-1">
              Categories
            </div>
          </div>
          <div className="text-center">
            <div className="font-display text-3xl font-bold text-accent">0</div>
            <div className="text-xs text-foreground/60 uppercase tracking-wider mt-1">
              Cloud Dependencies
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
