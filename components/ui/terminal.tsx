"use client";

import { useEffect, useState } from "react";

interface TerminalProps {
  lines: string[];
  className?: string;
  delay?: number;
}

export function Terminal({ lines, className = "", delay = 100 }: TerminalProps) {
  const [visibleLines, setVisibleLines] = useState<number[]>([]);
  const [currentLine, setCurrentLine] = useState(0);

  useEffect(() => {
    if (currentLine < lines.length) {
      const timeout = setTimeout(() => {
        setVisibleLines((prev) => [...prev, currentLine]);
        setCurrentLine((prev) => prev + 1);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [currentLine, lines.length, delay]);

  return (
    <div className={`scanlines ${className}`}>
      <div className="border-2 border-border bg-card-bg p-4 font-mono text-sm">
        {/* Terminal header */}
        <div className="flex items-center gap-2 border-b border-border-light pb-3 mb-4">
          <div className="flex gap-1.5">
            <div className="h-3 w-3 rounded-full bg-status-error" />
            <div className="h-3 w-3 rounded-full bg-status-warning" />
            <div className="h-3 w-3 rounded-full bg-status-success" />
          </div>
          <div className="flex-1 text-center text-xs text-foreground/50">
            skill-manager — terminal
          </div>
        </div>

        {/* Terminal content */}
        <div className="space-y-1">
          {lines.map((line, index) => (
            <div
              key={index}
              className={`flex transition-opacity duration-200 ${
                visibleLines.includes(index) ? "opacity-100" : "opacity-0"
              }`}
            >
              <span className="text-accent mr-2">$</span>
              <span className="text-foreground/80">{line}</span>
              {index === currentLine - 1 && (
                <span className="ml-1 cursor-blink text-accent">▋</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
