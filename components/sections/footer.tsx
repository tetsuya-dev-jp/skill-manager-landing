export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 border-t-2 border-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="font-display text-xl font-bold mb-4">SKILL MANAGER</h3>
            <p className="font-body text-sm text-foreground/60 max-w-md">
              Local control center for AI agent skills. Open source, privacy-first,
              terminal-native.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display text-sm font-semibold mb-4">Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="link-underline text-foreground/70 hover:text-foreground">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="link-underline text-foreground/70 hover:text-foreground">
                  GitHub Repository
                </a>
              </li>
              <li>
                <a href="#" className="link-underline text-foreground/70 hover:text-foreground">
                  Issue Tracker
                </a>
              </li>
              <li>
                <a href="#" className="link-underline text-foreground/70 hover:text-foreground">
                  Changelog
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-display text-sm font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="link-underline text-foreground/70 hover:text-foreground">
                  License (MIT)
                </a>
              </li>
              <li>
                <a href="#" className="link-underline text-foreground/70 hover:text-foreground">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="link-underline text-foreground/70 hover:text-foreground">
                  Terms of Use
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border-light flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Version */}
          <div className="flex items-center gap-4 text-xs text-foreground/50">
            <span>Version 1.0.0</span>
            <span>•</span>
            <span>Build {currentYear}.01.30</span>
          </div>

          {/* Copyright */}
          <div className="text-xs text-foreground/50">
            © {currentYear} Skill Manager. Open source under MIT License.
          </div>

          {/* Status indicator */}
          <div className="flex items-center gap-2 text-xs">
            <span className="w-2 h-2 rounded-full bg-status-success" />
            <span className="text-foreground/50">Systems Operational</span>
          </div>
        </div>

        {/* Decorative terminal line */}
        <div className="mt-8 pt-4 border-t border-border-light/50">
          <code className="text-xs text-foreground/30">
            $ skill-manager --status | all_systems_nominal
          </code>
        </div>
      </div>
    </footer>
  );
}
