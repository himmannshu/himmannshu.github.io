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
  title: "Himanshu's Blog",
  description: "Himanshu's Blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased` }>
        {children}
        <footer className="border-t border-gray-200 dark:border-gray-800 py-10 text-center text-sm text-gray-500 mt-10">
          <div className="max-w-6xl mx-auto flex items-center justify-center gap-6">
            <a href="https://github.com/himmannshu" target="_blank" rel="noopener noreferrer" className="hover:underline focus:outline-none focus:ring-2 focus:ring-blue-400 rounded">GitHub</a>
            <a href="https://www.linkedin.com/in/himanshu00/" target="_blank" rel="noopener noreferrer" className="hover:underline focus:outline-none focus:ring-2 focus:ring-blue-400 rounded">LinkedIn</a>
            <a href="mailto:himanshu@example.com" className="hover:underline focus:outline-none focus:ring-2 focus:ring-blue-400 rounded">Email</a>
          </div>
        </footer>
      </body>
    </html>
  );
}
