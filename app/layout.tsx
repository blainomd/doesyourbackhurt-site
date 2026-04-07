import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Does Your Back Hurt? | $10/month yoga. No gym. No contract.",
  description:
    "80% of adults say yes. Most pay $150/month for a gym they don't use. We charge $10. Neighbor's backyard yoga, physician-monitored progress, and Medicare ACCESS MSK coverage if eligible.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
        <Script src="https://solvinghealth.com/chat-widget.js" data-channel="doesyourbackhurt" data-color="#0D7377" strategy="lazyOnload" />
        <Script src="https://solvinghealth.com/voice-embed.js" data-site="doesyourbackhurt" strategy="lazyOnload" />
      </body>
    </html>
  );
}
