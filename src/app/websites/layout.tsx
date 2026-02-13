import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://km-designs.pl'),
  title: 'Strony Internetowe | KM-Designs',
  description: 'Nowoczesne strony internetowe, sklepy i aplikacje webowe — proces, realizacje i efekty.',
  alternates: {
    canonical: '/websites',
  },
  openGraph: {
    title: 'Strony Internetowe | KM-Designs',
    description: 'Nowoczesne strony internetowe, sklepy i aplikacje webowe — proces, realizacje i efekty.',
    type: 'website',
    url: '/websites',
    images: [
      {
        url: '/KM-logo.png',
        width: 600,
        height: 600,
        alt: 'KM-Designs',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Strony Internetowe | KM-Designs',
    description: 'Nowoczesne strony internetowe, sklepy i aplikacje webowe — proces, realizacje i efekty.',
    images: ['/KM-logo.png'],
  },
}

export default function WebsitesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
