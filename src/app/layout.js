import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import FireFliesBackground from "@/components/FireFliesBackground";
import Sound from "@/components/Sound";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  metadataBase: new URL("https://portfolio.sanyuaung.dev"),
  title: {
    template: "%s || San Yu Aung",
    default: "San Yu Aung | Senior FullStack Software Engineer",
  },
  description:
    "Portfolio of San Yu Aung, a Senior FullStack Software Engineer building reliable, user-friendly, and business-focused web applications, internal systems, workflow automation, and cloud-based solutions.",
  keywords: [
    "San Yu Aung",
    "Senior FullStack Software Engineer",
    "Full Stack Developer",
    "Web Developer",
    "React Developer",
    "Next.js Developer",
    "Laravel Developer",
    "Portfolio",
  ],
  authors: [{ name: "San Yu Aung", url: "https://portfolio.sanyuaung.dev" }],
  creator: "San Yu Aung",
  publisher: "San Yu Aung",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "San Yu Aung | Senior FullStack Software Engineer",
    description:
      "Explore the portfolio of San Yu Aung, featuring web applications, internal systems, workflow automation, professional experience, projects, and achievements.",
    url: "https://portfolio.sanyuaung.dev",
    siteName: "San Yu Aung Portfolio",
    images: [
      {
        url: "/logo.jpg",
        width: 1200,
        height: 630,
        alt: "San Yu Aung Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "San Yu Aung | Senior FullStack Software Engineer",
    description:
      "Portfolio of San Yu Aung, showcasing full-stack development, workflow automation, projects, experience, and achievements.",
    images: ["/logo.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={clsx(
          inter.variable,
          "bg-background text-foreground font-inter",
        )}
      >
        {children}
        <FireFliesBackground />
        <Sound />
        <div id="my-modal" />
      </body>
    </html>
  );
}
