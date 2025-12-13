import type { Metadata } from "next";
import { Space_Grotesk, Space_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Header from "../components/ui/Header";
import { ThemeProvider } from "../contexts/ThemeContext";
import { LanguageProvider } from "../contexts/LanguageContext";
import SmoothScroll from "../contexts/SmoothScroll";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";
import Footer from "@/components/ui/Footer";


const grotesk = Space_Grotesk({ subsets: ["latin"], weight: ["400", "600", "700"], variable: "--font-grotesk" });
const mono = Space_Mono({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-mono" });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "700"], variable: "--font-poppins" });


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
        <title>KFwork - Agencja Cyfrowa</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Profesjonalna agencja cyfrowa specjalizująca się w tworzeniu stron internetowych, aplikacji webowych i automatyzacji procesów biznesowych." />
        <link rel="icon" href="/favicon.ico" />
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
