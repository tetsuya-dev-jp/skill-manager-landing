# Skill Manager

**Local control center for AI agent skills.** Search, preview, and share across 15+ AI assistants — all from your terminal.

## Features

- **Unified Index** — Single command indexes all skills from 15+ AI assistants
- **Instant Search** — Fuzzy search across all skills by name, category, or content
- **Skill Preview** — Read descriptions and code snippets before installing
- **Cross-Agent Sharing** — Share skills between Claude, Cursor, Copilot, and more
- **Export & Backup** — Portable archive export for your entire skill collection
- **Zero Cloud** — No API calls, no tracking, works completely offline

## Supported Agents

Claude | Cursor | GitHub Copilot | Codeium | CodeWhisperer | Tabnine | Continue | Aider | OpenAI | Gemini | And more...

## Installation

```bash
# Clone the repository
git clone https://github.com/tetsuya-dev-jp/skill-manager-landing.git

# Install dependencies
pnpm install

# Run development server
pnpm dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the landing page.

## Project Structure

```
├── app/
│   ├── globals.css      # Global styles with Tailwind
│   ├── layout.tsx       # Root layout with fonts
│   └── page.tsx         # Main landing page
├── components/
│   └── sections/        # Page sections (Hero, Features, etc.)
└── lib/
    └── utils.ts         # Utility functions
```

## Tech Stack

- **Next.js 15** — React framework
- **TypeScript** — Type safety
- **Tailwind CSS** — Styling
- **IBM Plex Mono & JetBrains Mono** — Fonts

## License

MIT

---

Made with Next.js and Tailwind CSS
