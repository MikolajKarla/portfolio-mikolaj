import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://km-designs.pl"),
  title: "Polityka prywatności | KM-Designs",
  description:
    "Polityka prywatności KM-Designs: zasady przetwarzania danych, informacje o cookies oraz prawach użytkowników.",
  alternates: {
    canonical: "/privacy-policy",
  },
  openGraph: {
    title: "Polityka prywatności | KM-Designs",
    description:
      "Polityka prywatności KM-Designs: zasady przetwarzania danych, informacje o cookies oraz prawach użytkowników.",
    type: "website",
    url: "/privacy-policy",
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
    title: "Polityka prywatności | KM-Designs",
    description:
      "Polityka prywatności KM-Designs: zasady przetwarzania danych, informacje o cookies oraz prawach użytkowników.",
    images: ["/KM-logo.png"],
  },
};

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
