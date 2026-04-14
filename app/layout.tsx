import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";
import { siteConfig } from "@/site.config";
import { JsonLd } from "./components/JsonLd";
import "./globals.css";

export const metadata: Metadata = {
  title: `${siteConfig.name} | ${siteConfig.tagline}`,
  description: siteConfig.description,
  openGraph: {
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.description,
    siteName: siteConfig.name,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link rel="manifest" href="/manifest.json" />
        <JsonLd
          conditionName="Back Pain"
          conditionDescription="Free AI-powered back pain assessment. Understand herniated discs, sciatica, spinal stenosis, and when to see a spine specialist."
          icd10Codes={['M54.5', 'M51.16', 'M47.816']}
          specialistType="Spine Specialist"
          domain="doesyourbackhurt.com"
        />
      </head>
      <body className="bg-white text-gray-900 antialiased">
        {children}

        <Script src="https://harnesshealth.ai/footer.js" data-brand="condition-site" data-theme="light" strategy="lazyOnload" />
        <Analytics /></body>
    </html>
  );
}
