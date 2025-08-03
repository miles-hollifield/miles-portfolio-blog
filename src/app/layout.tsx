import type { Metadata } from "next";
import "./globals.css";
import "../styles/theme.css";
import { Inter } from "next/font/google";
import Link from "next/link";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Miles Hollifield",
  description: "Developer | Writer | Creator",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Enhanced Header */}
        <header className="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-gray-100">
          <nav className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              {/* Logo */}
              <Link href="/" className="flex items-center space-x-2 group">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Image 
                    src="/MileScript_logo.svg" 
                    alt="MileScript Logo" 
                    width={20} 
                    height={20} 
                    className="brightness-0 invert" 
                  />
                </div>
                <span className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">MileScript</span>
              </Link>

              {/* Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                <NavLink href="/about">About</NavLink>
                <NavLink href="/projects">Projects</NavLink>
                <NavLink href="/blog">Blog</NavLink>
                <a
                  href="mailto:mileshollifieldgfp@gmail.com"
                  className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Contact
                </a>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <button className="p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </nav>
        </header>

        {/* Main Content */}
        <main className="min-h-screen">
          {children}
        </main>

        {/* Enhanced Footer */}
        <footer className="bg-gray-900 text-white">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Brand */}
              <div className="col-span-1 md:col-span-2">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                    <Image 
                      src="/MileScript_logo.svg" 
                      alt="MileScript Logo" 
                      width={20} 
                      height={20} 
                      className="brightness-0 invert" 
                    />
                  </div>
                  <span className="text-xl font-bold">MileScript</span>
                </div>
                <p className="text-gray-400 mb-4 max-w-md">
                  {`Software engineer, writer, and lifelong learner passionate about building thoughtful software and exploring the intersection of technology and culture.`}
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
                  <li><FooterLink href="/about">About</FooterLink></li>
                  <li><FooterLink href="/blog">Blog</FooterLink></li>
                  <li><FooterLink href="/projects">Projects</FooterLink></li>
                  {/* <li><FooterLink href="mailto:mileshollifieldgfp@gmail.com">Contact</FooterLink></li> */}
                </ul>
              </div>

              {/* Recent Posts */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Recent Posts</h3>
                <ul className="space-y-2">
                  <li><FooterLink href="/blog/building-kakitori">Building Kakitori</FooterLink></li>
                  <li><FooterLink href="/blog/japanese-learning-journey">Japanese Learning Journey</FooterLink></li>
                  <li><FooterLink href="/blog/lessons-from-siemens-internship">Lessons from Siemens</FooterLink></li>
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

// Navigation Link Component
function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 relative group"
    >
      {children}
      <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
    </Link>
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