import type { Metadata } from "next";
import { DM_Sans, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

// Space Grotesk as display font - bold, distinctive, similar feel to Cabinet Grotesk
const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "UNI-FIED | Egypt's Best Developers, World-Class Results",
  description:
    "Egypt's elite software development agency delivering international-quality software at competitive rates. From MVPs to enterprise systems. Web, Mobile, AI, and Real-time Solutions.",
  keywords: [
    "software development agency",
    "Egypt developers",
    "web development",
    "mobile app development",
    "AI integration",
    "React",
    "Next.js",
    "international quality",
    "competitive rates",
  ],
  authors: [{ name: "UNI-FIED" }],
  openGraph: {
    title: "UNI-FIED | Egypt's Best Developers, World-Class Results",
    description:
      "Egypt's elite software development agency delivering international-quality software at competitive rates.",
    url: "https://uni-fied.com",
    siteName: "UNI-FIED",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "UNI-FIED | Egypt's Best Developers, World-Class Results",
    description:
      "Egypt's elite software development agency delivering international-quality software at competitive rates.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${dmSans.variable} ${jetbrainsMono.variable} ${spaceGrotesk.variable} antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
