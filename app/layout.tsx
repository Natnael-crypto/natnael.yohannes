import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Natnael Yohannes Gesiab | Cybersecurity Specialist & Software Developer",
  description:
    "Cybersecurity professional specializing in penetration testing, web security, and DevSecOps. Expert in ethical hacking, vulnerability assessment, and secure software development.",
  keywords:
    "cybersecurity, penetration testing, ethical hacking, web security, DevSecOps, vulnerability assessment, software developer",
  authors: [{ name: "Natnael Yohannes Gesiab" }],
  creator: "Natnael Yohannes Gesiab",
  openGraph: {
    title: "Natnael Yohannes Gesiab | Cybersecurity Specialist",
    description:
      "Cybersecurity professional specializing in penetration testing and secure software development",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <div className="relative min-h-screen">
          {/* Enhanced cybersecurity grid overlay */}
          <div className="fixed inset-0 pointer-events-none z-0">
            <div className="absolute inset-0 cyber-grid opacity-80"></div>
            <div className="absolute inset-0 cyber-grid-animated opacity-40"></div>
          </div>

          {/* Matrix rain effect */}
          <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent animate-matrix-rain opacity-30"></div>
            <div
              className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-accent/20 to-transparent animate-matrix-rain opacity-20"
              style={{ animationDelay: "2s" }}
            ></div>
            <div
              className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-primary/15 to-transparent animate-matrix-rain opacity-25"
              style={{ animationDelay: "4s" }}
            ></div>
            <div
              className="absolute top-0 left-1/8 w-px h-full bg-gradient-to-b from-transparent via-accent/15 to-transparent animate-matrix-rain opacity-20"
              style={{ animationDelay: "6s" }}
            ></div>
            <div
              className="absolute top-0 right-1/8 w-px h-full bg-gradient-to-b from-transparent via-primary/18 to-transparent animate-matrix-rain opacity-25"
              style={{ animationDelay: "1s" }}
            ></div>
          </div>

          {/* Enhanced data streams */}
          <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent animate-data-stream opacity-20"></div>
            <div
              className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/25 to-transparent animate-data-stream opacity-15"
              style={{ animationDelay: "3s" }}
            ></div>
            <div
              className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent animate-data-stream opacity-12"
              style={{ animationDelay: "5s" }}
            ></div>
            <div
              className="absolute top-1/8 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/18 to-transparent animate-data-stream opacity-10"
              style={{ animationDelay: "7s" }}
            ></div>
          </div>

          {/* Additional cybersecurity grid sections */}
          <div className="fixed inset-0 pointer-events-none z-0">
            <div className="absolute top-0 left-0 w-1/3 h-full cyber-grid-dense opacity-20"></div>
            <div className="absolute top-0 right-0 w-1/3 h-full cyber-grid-dense opacity-15"></div>
            <div className="absolute bottom-0 left-1/3 w-1/3 h-1/2 cyber-grid-dense opacity-25"></div>
          </div>

          <div className="relative z-10">{children}</div>
        </div>
      </body>
    </html>
  );
}
