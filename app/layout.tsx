import type { Metadata } from "next";
import { IBM_Plex_Mono, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Skill Manager - Local Control Center for AI Agent Skills",
  description: "Unified skill management for 15+ AI coding assistants. Search, preview, and share agent skills from your local terminal.",
  keywords: ["AI skills", "Claude", "agent skills", "skill management", "developer tools"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ibmPlexMono.variable} ${jetbrainsMono.variable} font-mono antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
