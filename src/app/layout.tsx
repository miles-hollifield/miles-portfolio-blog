import type { Metadata } from "next";
import "./globals.css";
import "../styles/theme.css";
import { Inter } from "next/font/google";
import Link from "next/link";
import { Navigation } from "./components/Navigation";
import { Analytics } from "@vercel/analytics/next"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Miles Hollifield",
  description: "Developer | Writer | Creator",
  icons: {
    icon: [
      { url: "/brand-m.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", rel: "shortcut icon" },
    ],
    apple: "/brand-m.svg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Enhanced Header */}
        <Navigation />

        {/* Main Content */}
        <main className="min-h-screen">
          {children}
          <Analytics />
        </main>

        {/* Enhanced Footer */}
        <footer className="bg-gray-900 text-white border-t border-gray-800">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Brand */}
              <div className="col-span-1 md:col-span-2">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">M</span>
                  </div>
                  <span className="text-xl font-bold">MileScript</span>
                </div>
                <p className="text-gray-400 mb-4 max-w-md">
                  {`Software Engineer/AI Engineer building intelligent applications that bridge cutting-edge technology with practical solutions. Passionate about creating AI-powered tools and occasionally writing about tech, life, and development.`}
                </p>
                <div className="flex space-x-4">
                  <SocialLink href="https://github.com/miles-hollifield" icon="github" />
                  <SocialLink href="https://linkedin.com/in/mileshollifield" icon="linkedin" />
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li><FooterLink href="/">Home</FooterLink></li>
                  <li><FooterLink href="/about">About</FooterLink></li>
                  <li><FooterLink href="/projects">Projects</FooterLink></li>
                  <li><FooterLink href="/blog">Blog</FooterLink></li>
                  <li><FooterLink href="/contact">Contact</FooterLink></li>
                </ul>
              </div>

              {/* Recent Posts */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Recent Posts</h3>
                <ul className="space-y-2">
                  <li><FooterLink href="/blog/the-future-of-entertainment-is-interactive">The Future of Entertainment</FooterLink></li>
                  <li><FooterLink href="/blog/building-kakitori">Building Kakitori</FooterLink></li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>© {new Date().getFullYear()} Miles. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

// Footer Link Component
function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="text-gray-400 hover:text-white transition-colors duration-300"
    >
      {children}
    </Link>
  );
}

// Social Media Link Component
function SocialLink({ href, icon }: { href: string; icon: string }) {
  const getIcon = () => {
    switch (icon) {
      case 'github':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        );
      case 'linkedin':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-400 hover:text-white transition-colors duration-300 p-2 rounded-full hover:bg-gray-800"
    >
      {getIcon()}
    </a>
  );
}