import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

export const metadata: Metadata = {
  title: 'Handcrafted Haven - Artisan Marketplace',
  description: 'Discover unique handcrafted items from talented artisans and crafters. A virtual marketplace connecting creators with customers who appreciate handmade products.',
  keywords: 'handcrafted, artisan, marketplace, handmade, crafts, unique items, sellers, reviews, ratings',
  authors: [{ name: 'Kendy Chae' }],
  creator: 'Kendy Chae',
  publisher: 'Handcrafted Haven',
  viewport: 'width=device-width, initial-scale=1',
  openGraph: {
    title: 'Handcrafted Haven - Artisan Marketplace',
    description: 'Discover unique handcrafted items from talented artisans and crafters.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Handcrafted Haven',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Handcrafted Haven - Artisan Marketplace',
    description: 'Discover unique handcrafted items from talented artisans and crafters.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}