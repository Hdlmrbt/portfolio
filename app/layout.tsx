import type { Metadata, Viewport } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets:  ['latin'],
  variable: '--font-inter',
  display:  'swap',
  weight:   ['300', '400', '500', '600', '700', '800'],
});

const playfair = Playfair_Display({
  subsets:  ['latin'],
  variable: '--font-playfair',
  display:  'swap',
  weight:   ['400', '500', '600', '700'],
  style:    ['normal', 'italic'],
});

export const metadata: Metadata = {
  title:       'Houda Lamrabet — Data & AI Engineer',
  description: 'Portfolio of Houda Lamrabet, Data & AI Engineering student at EMSI Rabat. Specializing in machine learning, computer vision, and full-stack development.',
  keywords:    ['Data Engineer', 'AI', 'Machine Learning', 'Computer Vision', 'EMSI', 'Rabat', 'Morocco', 'Portfolio'],
  authors:     [{ name: 'Houda Lamrabet' }],
  creator:     'Houda Lamrabet',
  openGraph: {
    type:        'website',
    locale:      'en_US',
    title:       'Houda Lamrabet — Data & AI Engineer',
    description: 'Building intelligent systems at the intersection of machine learning and full-stack development.',
    siteName:    'Houda Lamrabet Portfolio',
  },
  twitter: {
    card:        'summary_large_image',
    title:       'Houda Lamrabet — Data & AI Engineer',
    description: 'Building intelligent systems at the intersection of machine learning and full-stack development.',
  },
  robots: {
    index:  true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor:    '#FDF8F5',
  width:         'device-width',
  initialScale:  1,
  maximumScale:  5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🌸</text></svg>" />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
