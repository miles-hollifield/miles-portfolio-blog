import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Miles' Portfolio",
  description: "Developer | Writer | Creator",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-white shadow sticky top-0 z-50">
          <nav className="mx-auto max-w-4xl px-4 py-3 flex justify-between items-center">
            <Link href="/" className="text-xl font-bold text-gray-900">
              Miles
            </Link>
            <div className="space-x-6 text-gray-700 font-medium">
              <Link href="/about" className="hover:text-blue-600">About</Link>
              <Link href="/blog" className="hover:text-blue-600">Blog</Link>
              <Link href="/projects" className="hover:text-blue-600">Projects</Link>
            </div>
          </nav>
        </header>

        <main className="mx-auto max-w-3xl px-4 py-8">{children}</main>

        <footer className="text-center text-sm text-gray-500 py-6">
          © {new Date().getFullYear()} Miles. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
