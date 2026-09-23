import type { Metadata } from "next";
import { Poppins, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://danindra.dev'),
  title: "Danindra Irvanto | Fullstack Developer & Broadcast Talent",
  description: "Portfolio of Danindra Irvanto - Fullstack Web Developer, Broadcast Media, and Creative Promotional Video Talent.",
  keywords: ["Danindra Irvanto", "Portfolio", "Fullstack Developer", "Next.js", "React", "Broadcast Intern", "Video Talent", "Creative Developer", "DumbWays"],
  authors: [{ name: "Danindra Irvanto" }],
  openGraph: {
    title: "Danindra Irvanto | Fullstack Developer & Broadcast Talent",
    description: "Bridging modern software engineering with broadcast media and dynamic video storytelling.",
    url: "https://danindra.dev",
    siteName: "Danindra Irvanto Portfolio",
    images: [
      {
        url: "/images/avatar.jpg",
        width: 1200,
        height: 630,
        alt: "Danindra Irvanto Portfolio",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Danindra Irvanto | Fullstack Developer & Broadcast Talent",
    description: "Fullstack Web Developer & Creative Broadcast Talent",
    images: ["/images/avatar.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${poppins.variable} ${plusJakarta.variable}`}>
      <body className="min-h-screen bg-[var(--background)] text-[var(--foreground)] antialiased selection:bg-zinc-800/15 selection:text-zinc-900 dark:selection:bg-zinc-200/20 dark:selection:text-zinc-100">
        {children}
      </body>
    </html>
  );
}
