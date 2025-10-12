import type { Metadata } from "next";
import { Manrope, Merriweather } from "next/font/google";
import "./globals.css";
import Header from "../components/ui/Header";
import { ThemeProvider } from "../contexts/ThemeContext";
import { LanguageProvider } from "../contexts/LanguageContext";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "KFreelance - Agencja Cyfrowa",
  description: "Profesjonalna agencja cyfrowa specjalizująca się w tworzeniu stron internetowych, aplikacji webowych i automatyzacji procesów biznesowych.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>KFreelance - Agencja Cyfrowa</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${manrope.variable} ${merriweather.variable} antialiased`}>
        <LanguageProvider>
          <ThemeProvider>
            <header className="fixed left-1/2 top-2 min-w-full -translate-x-1/2 z-50 flex justify-center px-2 sm:px-4 xs:px-0">
              <Header />
            </header>
            <main className="pt-16 mx-auto w-full">
              {children}
            </main>
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
