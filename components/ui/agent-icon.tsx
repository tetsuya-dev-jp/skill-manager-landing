interface AgentIconProps {
  name: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const agentColors: Record<string, string> = {
  claude: "#ff6b35",
  openai: "#10a37f",
  anthropic: "#d97757",
  gemini: "#4285f4",
  cursor: "#000000",
  copilot: "#2563eb",
  codeium: "#3b82f6",
  codewhisperer: "#ff9900",
  tabnine: "#f59e0b",
  continue: "#8b5cf6",
  aider: "#ef4444",
  stripe: "#635bff",
  codebrush: "#06b6d4",
  command: "#f97316",
};

export function AgentIcon({ name, size = "md", className = "" }: AgentIconProps) {
  const sizeStyles = {
    sm: "w-6 h-6 text-xs",
    md: "w-10 h-10 text-sm",
    lg: "w-16 h-16 text-lg",
  };

  const color = agentColors[name.toLowerCase()] || "#6b7280";
  const initials = name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <div
      className={`${sizeStyles[size]} flex items-center justify-center rounded-sm font-display font-bold text-white ${className}`}
      style={{ backgroundColor: color }}
    >
      {initials}
    </div>
  );
}
