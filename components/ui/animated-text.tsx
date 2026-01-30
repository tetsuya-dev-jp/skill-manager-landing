"use client";

import { useEffect, useState } from "react";

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  charDelay?: number;
}

export function AnimatedText({
  text,
  className = "",
  delay = 0,
  charDelay = 50,
}: AnimatedTextProps) {
  const [visibleChars, setVisibleChars] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      setStarted(true);
    }, delay);

    return () => clearTimeout(startTimeout);
  }, [delay]);

  useEffect(() => {
    if (!started) return;

    if (visibleChars < text.length) {
      const timeout = setTimeout(() => {
        setVisibleChars((prev) => prev + 1);
      }, charDelay);

      return () => clearTimeout(timeout);
    }
  }, [started, visibleChars, text.length, charDelay]);

  return (
    <span className={className}>
      {text.slice(0, visibleChars)}
      {visibleChars < text.length && (
        <span className="cursor-blink text-accent">▋</span>
      )}
    </span>
  );
}
