import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from '@vercel/analytics/next';
import { Header } from "@/components/home/navbar";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mouad Sadik – Software Engineer",
  description: "Portfolio and projects of Mouad Sadik, fullstack developer specialized in React, Next.js, and modern web technologies.",
  keywords: ["Mouad Sadik", "Software Engineer" , "Fullstack Developer", "React", "Next.js", "Tailwind", "Portfolio"],
  authors: [{ name: "Mouad Sadik" }],
  creator: "Mouad Sadik",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Mouad Sadik – Fullstack Developer",
    description: "Explore my portfolio and fullstack projects built with React, Next.js, TailwindCSS and more.",
    url: "https://mouad-sadik-dev.vercel.app",
    siteName: "Mouad Sadik Portfolio",
    images: [
      {
        url: "https://mouad-sadik-dev.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mouad Sadik Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mouad Sadik – Fullstack Developer",
    description: "Discover projects and portfolio of Mouad Sadik, fullstack web developer.",
    images: ["https://mouad-sadik-dev.vercel.app/og-image.png"],
    creator: "@mouadsadik",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}