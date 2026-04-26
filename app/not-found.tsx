import Link from "next/link";
import { siteConfig } from "@/site.config";

export default function NotFound() {
  return (
    <main
      role="main"
      className="min-h-screen flex items-center justify-center px-6"
      style={{ backgroundColor: siteConfig.accentColor }}
    >
      <div className="max-w-xl text-center">
        <p
          className="text-sm font-bold uppercase tracking-widest mb-4"
          style={{ color: siteConfig.primaryColor }}
        >
          404 — Page not found
        </p>
        <h1 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
          This page is out of alignment.
        </h1>
        <p className="text-gray-300 text-lg mb-10 max-w-md mx-auto leading-relaxed">
          The page you were looking for doesn&apos;t exist on {siteConfig.domain}. Let&apos;s get you back to where you can find answers.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-lg font-bold text-white transition-all hover:scale-105 shadow-lg focus:outline-none focus-visible:ring-4 focus-visible:ring-white/40"
          style={{ backgroundColor: siteConfig.primaryColor }}
        >
          Back to {siteConfig.name}
          <svg
            className="w-5 h-5 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </main>
  );
}
