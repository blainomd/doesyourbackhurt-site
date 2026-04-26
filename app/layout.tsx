import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";
import { siteConfig } from "@/site.config";
import { JsonLd } from "./components/JsonLd";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(`https://${siteConfig.domain}`),
  title: `${siteConfig.name} | ${siteConfig.tagline}`,
  description: siteConfig.description,
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.description,
    siteName: siteConfig.name,
    url: "/",
    type: "website",
    images: [
      {
        url: "/apple-icon.png",
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: ["/apple-icon.png"],
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

        <Script src="https://harnesshealth.ai/footer.js?v=8" data-brand="condition-site" data-theme="light" strategy="lazyOnload" />
        <Analytics /></body>
    </html>
  );
}
