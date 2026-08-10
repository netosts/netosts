import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Silvio dos Santos Neto | Full Stack Software Engineer",
  description:
    "Full Stack Software Engineer com mais de 2 anos de experiência em APIs, JavaScript, TypeScript, Python, PHP e Linux.",
  authors: [{ name: "Silvio dos Santos Neto" }],
  creator: "Silvio dos Santos Neto",
  keywords: [
    "Full Stack Software Engineer",
    "APIs",
    "JavaScript",
    "TypeScript",
    "Python",
    "FastAPI",
    "PHP",
    "Laravel",
    "Vue.js",
    "Nuxt.js",
    "PostgreSQL",
    "Docker",
    "Linux",
  ],
};

export const viewport: Viewport = {
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`bg-background ${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
