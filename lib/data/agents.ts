export interface Agent {
  id: string;
  name: string;
  path: string;
  category: "coding" | "writing" | "analysis" | "automation" | "utilities";
  stats: {
    skills: number;
    size: string;
  };
}

export const agents: Agent[] = [
  {
    id: "claude",
    name: "Claude",
    path: "~/.claude/skills",
    category: "coding",
    stats: { skills: 50, size: "2.4 MB" },
  },
  {
    id: "cursor",
    name: "Cursor",
    path: "~/.cursor/skills",
    category: "coding",
    stats: { skills: 35, size: "1.8 MB" },
  },
  {
    id: "copilot",
    name: "GitHub Copilot",
    path: "~/.github/copilot/skills",
    category: "coding",
    stats: { skills: 28, size: "1.2 MB" },
  },
  {
    id: "codeium",
    name: "Codeium",
    path: "~/.codeium/skills",
    category: "coding",
    stats: { skills: 22, size: "960 KB" },
  },
  {
    id: "codewhisperer",
    name: "CodeWhisperer",
    path: "~/.codewhisperer/skills",
    category: "coding",
    stats: { skills: 18, size: "840 KB" },
  },
  {
    id: "tabnine",
    name: "Tabnine",
    path: "~/.tabnine/skills",
    category: "coding",
    stats: { skills: 15, size: "720 KB" },
  },
  {
    id: "continue",
    name: "Continue",
    path: "~/.continue/skills",
    category: "coding",
    stats: { skills: 20, size: "900 KB" },
  },
  {
    id: "aider",
    name: "Aider",
    path: "~/.aider/skills",
    category: "coding",
    stats: { skills: 25, size: "1.1 MB" },
  },
  {
    id: "openai",
    name: "OpenAI",
    path: "~/.openai/skills",
    category: "analysis",
    stats: { skills: 40, size: "2.0 MB" },
  },
  {
    id: "gemini",
    name: "Gemini",
    path: "~/.gemini/skills",
    category: "analysis",
    stats: { skills: 32, size: "1.5 MB" },
  },
  {
    id: "stripe",
    name: "Stripe",
    path: "~/.stripe/skills",
    category: "automation",
    stats: { skills: 12, size: "540 KB" },
  },
  {
    id: "command",
    name: "Command R",
    path: "~/.command/skills",
    category: "coding",
    stats: { skills: 18, size: "800 KB" },
  },
  {
    id: "codebrush",
    name: "CodeBrush",
    path: "~/.codebrush/skills",
    category: "coding",
    stats: { skills: 14, size: "620 KB" },
  },
  {
    id: "anthropic",
    name: "Anthropic",
    path: "~/.anthropic/skills",
    category: "writing",
    stats: { skills: 30, size: "1.3 MB" },
  },
  {
    id: " Windsurf",
    name: "Windsurf",
    path: "~/.windsurf/skills",
    category: "coding",
    stats: { skills: 24, size: "1.0 MB" },
  },
];

export const categories = [
  { id: "all", label: "All Agents" },
  { id: "coding", label: "Coding" },
  { id: "writing", label: "Writing" },
  { id: "analysis", label: "Analysis" },
  { id: "automation", label: "Automation" },
  { id: "utilities", label: "Utilities" },
];
