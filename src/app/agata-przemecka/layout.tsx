import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://km-designs.pl"),
  title: "Agata Przemecka",
  description:
    "Projekt strony Agata Przemecka by KM-Designs: branding, sklep online i moduły edukacyjne przygotowane pod rozwój marki.",
  alternates: {
    canonical: "/agata-przemecka",
  },
  openGraph: {
    title: "Agata Przemecka | KM-Designs",
    description:
      "Projekt strony Agata Przemecka by KM-Designs: branding, sklep online i moduły edukacyjne przygotowane pod rozwój marki.",
    type: "website",
    url: "/agata-przemecka",
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
    title: "Agata Przemecka | KM-Designs",
    description:
      "Projekt strony Agata Przemecka by KM-Designs: branding, sklep online i moduły edukacyjne przygotowane pod rozwój marki.",
    images: ["/KM-logo.png"],
  },
};

export default function AgataPrzemeckaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
