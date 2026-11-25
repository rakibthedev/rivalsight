import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

const eyeIcon = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Ccircle cx='16' cy='16' r='16' fill='%23EA580C'/%3E%3Cpath d='M5 16s4.4-7 11-7 11 7 11 7-4.4 7-11 7S5 16 5 16z' fill='none' stroke='white' stroke-width='2.2'/%3E%3Ccircle cx='16' cy='16' r='3.2' fill='white'/%3E%3C/svg%3E";

export const metadata: Metadata = {
  title: "RivalSight | AI Competitor Monitoring for Online Stores – Coming Soon",
  description:
    "RivalSight is AI competitor intelligence for online stores and retailers. Track competitor prices, promotions, stock and launches, get weekly reports and urgent alerts. Join the waitlist for a 14-day free trial.",
  keywords: [
    "competitor monitoring",
    "competitor price tracking",
    "competitive intelligence",
    "price monitoring software",
    "ecommerce competitor analysis",
    "AI competitor tracking",
    "repricing tool",
  ],
  alternates: { canonical: "https://rivalsight.io/" },
  robots: { index: true, follow: true },
  themeColor: "#141414",
  icons: { icon: eyeIcon },
  openGraph: {
    type: "website",
    siteName: "RivalSight",
    url: "https://rivalsight.io/",
    title: "RivalSight – See every move your competitors make",
    description:
      "AI competitor monitoring for online stores: prices, promotions, stock and launches, with weekly reports and urgent alerts. Launching early 2027.",
  },
  twitter: {
    card: "summary_large_image",
    title: "RivalSight – See every move your competitors make",
    description:
      "AI competitor monitoring for online stores. Join the waitlist for a 14-day free trial.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Space+Grotesk:wght@500;700&display=swap"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://rivalsight.io/#org",
                  name: "RivalSight",
                  url: "https://rivalsight.io/",
                  logo: "https://rivalsight.io/logo.png",
                  email: "support@rivalsight.io",
                  slogan: "Competitor Intelligence",
                  description: "AI competitor monitoring and intelligence for online stores and retailers.",
                  sameAs: [
                    "https://www.linkedin.com/company/rivalsight",
                    "https://www.instagram.com/rivalsight.io",
                    "https://www.facebook.com/RivalSight.io/",
                  ],
                  contactPoint: {
                    "@type": "ContactPoint",
                    email: "support@rivalsight.io",
                    contactType: "customer support",
                    availableLanguage: "English",
                  },
                },
                {
                  "@type": "WebSite",
                  "@id": "https://rivalsight.io/#site",
                  url: "https://rivalsight.io/",
                  name: "RivalSight",
                  publisher: { "@id": "https://rivalsight.io/#org" },
                },
              ],
            }),
          }}
        />
      </head>
      <body>
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-K7MPBW9V');`}
        </Script>
        {children}
      </body>
    </html>
  );
}
