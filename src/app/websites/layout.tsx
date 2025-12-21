import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://km-designs.pl'),
  title: 'Strony Internetowe | KFreelance',
  description: 'Nowoczesne strony internetowe, sklepy i aplikacje webowe — proces, realizacje i efekty.',
  alternates: {
    canonical: '/websites',
  },
  openGraph: {
    title: 'Strony Internetowe | KFreelance',
    description: 'Nowoczesne strony internetowe, sklepy i aplikacje webowe — proces, realizacje i efekty.',
    type: 'website',
    url: '/websites',
    images: [
      {
        url: '/KM-logo.png',
        width: 1200,
        height: 630,
        alt: 'KFreelance',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Strony Internetowe | KFreelance',
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
