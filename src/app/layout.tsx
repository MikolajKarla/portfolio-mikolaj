import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Space_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Header from "../components/ui/Header";
import { ThemeProvider } from "../contexts/ThemeContext";
import { LanguageProvider } from "../contexts/LanguageContext";
import SmoothScroll from "../contexts/SmoothScroll";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";
import Footer from "@/components/ui/Footer";
import Script from "next/script";


const grotesk = Space_Grotesk({ subsets: ["latin"], weight: ["400", "600", "700"], variable: "--font-grotesk" });
const mono = Space_Mono({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-mono" });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "700"], variable: "--font-poppins" });


export const metadata: Metadata = {
  metadataBase: new URL("https://km-designs.pl"),
  title: {
    default: "KM-Designs - Agencja Cyfrowa",
    template: "%s | KM-Designs",
  },
  description:
    "Profesjonalna agencja cyfrowa specjalizująca się w tworzeniu stron internetowych, aplikacji webowych i automatyzacji procesów biznesowych.",
  applicationName: "KM-Designs",
  keywords: [
    "strony internetowe",
    "sklepy internetowe",
    "next.js",
    "projektowanie stron",
    "agencja cyfrowa",
    "seo",
  ],
  authors: [{ name: "KM-Designs", url: "https://km-designs.pl" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://km-designs.pl",
    title: "KM-Designs - Agencja Cyfrowa",
    description:
      "Profesjonalna agencja cyfrowa specjalizująca się w tworzeniu stron internetowych, aplikacji webowych i automatyzacji procesów biznesowych.",
    siteName: "KM-Designs",
    images: [
      {
        url: "/KM-logo.png",
        width: 1200,
        height: 630,
        alt: "KM-Designs logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KM-Designs - Agencja Cyfrowa",
    description:
      "Profesjonalna agencja cyfrowa specjalizująca się w tworzeniu stron internetowych, aplikacji webowych i automatyzacji procesów biznesowych.",
    images: ["/KM-logo.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/KM-logo.png",
  },
  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          id="ld-json-website"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebSite",
                  "url": "https://km-designs.pl",
                  "name": "KM-Designs",
                  "description":
                    "Profesjonalna agencja cyfrowa specjalizująca się w tworzeniu stron internetowych, aplikacji webowych i automatyzacji procesów biznesowych.",
                },
                {
                  "@type": "Organization",
                  "url": "https://km-designs.pl",
                  "name": "KM-Designs",
                  "logo": "https://km-designs.pl/KM-logo.png",
                  "contactPoint": [
                    {
                      "@type": "ContactPoint",
                      "telephone": "+48 731 866 536",
                      "contactType": "sales",
                      "email": "contact@km-designs.pl",
                      "areaServed": "PL",
                      "availableLanguage": ["pl", "en"],
                    },
                  ],
                },
              ],
            }),
          }}
        />
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-P6GEPTJJPD" />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-P6GEPTJJPD');
          `}
        </Script>
      </head>
      <body className={`${grotesk.variable} ${mono.variable} ${poppins.variable} antialiased`}>
        <LanguageProvider>
          <ThemeProvider>
            <SmoothScroll />

            <header className="fixed left-1/2 top-2 min-w-full -translate-x-1/2 z-50 flex justify-center px-2 sm:px-4 xs:px-0">
              <Header />
            </header>

            <main className="mx-auto w-full ">
              {children}
              <div className="fixed bottom-6 right-6 z-50">
                <LanguageSwitcher />
              </div>
            </main>
            <footer className="bg-[var(--color-secondary)] text-white ">
              <Footer />
            </footer>
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
