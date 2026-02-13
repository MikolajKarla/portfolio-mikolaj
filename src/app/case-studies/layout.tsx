import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://km-designs.pl"),
  title: "Case Studies | KM-Designs",
  description:
    "Historie wdrożeń: e-commerce, platformy edukacyjne i fintechy, które zwiększają konwersję i przyspieszają rozwój.",
  alternates: {
    canonical: "/case-studies",
  },
  openGraph: {
    title: "Case Studies | KM-Designs",
    description:
      "Historie wdrożeń: e-commerce, platformy edukacyjne i fintechy, które zwiększają konwersję i przyspieszają rozwój.",
    type: "website",
    url: "/case-studies",
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
    title: "Case Studies | KM-Designs",
    description:
      "Historie wdrożeń: e-commerce, platformy edukacyjne i fintechy, które zwiększają konwersję i przyspieszają rozwój.",
    images: ["/KM-logo.png"],
  },
};

export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
