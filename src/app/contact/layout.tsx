import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://km-designs.pl"),
  title: "Kontakt | KM-Designs",
  description:
    "Skontaktuj się z KM-Designs: konsultacje projektowe, wyceny stron, aplikacji i automatyzacji procesów biznesowych.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Kontakt | KM-Designs",
    description:
      "Skontaktuj się z KM-Designs: konsultacje projektowe, wyceny stron, aplikacji i automatyzacji procesów biznesowych.",
    type: "website",
    url: "/contact",
    images: [
      {
        url: "/KM-logo.png",
        width: 1200,
        height: 630,
        alt: "KM-Designs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kontakt | KM-Designs",
    description:
      "Skontaktuj się z KM-Designs: konsultacje projektowe, wyceny stron, aplikacji i automatyzacji procesów biznesowych.",
    images: ["/KM-logo.png"],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
