import { ReactNode } from "react";

interface TechCardProps {
  title: string;
  description: string;
  icon?: ReactNode;
  className?: string;
  children?: ReactNode;
  variant?: "default" | "accent" | "secondary" | "highlight";
}

export function TechCard({
  title,
  description,
  icon,
  className = "",
  children,
  variant = "default",
}: TechCardProps) {
  const variantStyles = {
    default: "border-border bg-card-bg",
    accent: "border-accent bg-card-bg",
    secondary: "border-accent-secondary bg-card-bg",
    highlight: "border-accent-highlight bg-card-bg",
  };

  return (
    <div
      className={`card-hover border-2 ${variantStyles[variant]} p-6 ${className}`}
    >
      {icon && <div className="mb-4 text-accent">{icon}</div>}
      <h3 className="font-display text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm text-foreground/70 mb-4">{description}</p>
      {children}
    </div>
  );
}
