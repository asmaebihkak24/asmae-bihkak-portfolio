import type { Metadata } from "next";
import { Playfair_Display, Manrope, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const serifFont = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

const sansFont = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const monoFont = IBM_Plex_Mono({
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Asmae Bihkak | Data Science & AI Engineering Student",
  description: "Portfolio of Asmae Bihkak, a Data Science & Artificial Intelligence engineering student building intelligent applications across machine learning, AI and backend engineering.",
  keywords: [
    "Asmae Bihkak",
    "Data Science",
    "AI Engineering",
    "Machine Learning",
    "FastAPI",
    "Groq",
    "PostgreSQL",
    "pgvector",
    "ENSA Fès",
    "Capgemini",
    "FlyRank"
  ],
  authors: [{ name: "Asmae Bihkak" }],
  openGraph: {
    title: "Asmae Bihkak | Data Science & AI Engineering",
    description: "Building intelligent solutions with Data, Machine Learning, AI and scalable backend systems.",
    url: "https://github.com/asmaebihkak24",
    siteName: "Asmae Bihkak Portfolio",
    locale: "en_US",
    type: "website",
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
    <html lang="en" className={`${serifFont.variable} ${sansFont.variable} ${monoFont.variable} scroll-smooth`}>
      <body className="bg-[#F8F5EF] text-[#1B1B1B] antialiased min-h-screen selection:bg-[#9B86A8]/20 selection:text-[#9B86A8]">
        {children}
      </body>
    </html>
  );
}
