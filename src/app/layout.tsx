import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'ADMSC Client Dashboard',
    template: '%s | ADMSC Client Dashboard',
  },
  description:
    'Advanced management system client dashboard for comprehensive data analytics and user management.',
  keywords: ['dashboard', 'analytics', 'management', 'client portal', 'ADMSC'],
  authors: [{ name: 'ADMSC Team' }],
  creator: 'ADMSC',
  publisher: 'ADMSC',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://your-domain.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://your-domain.com',
    title: 'ADMSC Client Dashboard',
    description: 'Advanced management system client dashboard for comprehensive data analytics.',
    siteName: 'ADMSC Client Dashboard',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ADMSC Client Dashboard',
    description: 'Advanced management system client dashboard for comprehensive data analytics.',
    creator: '@admsc',
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
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <nav>{/* Navigation will go here */}</nav>
        </header>
        <main>{children}</main>
        <footer>
          <p>&copy; 2024 ADMSC Client Dashboard. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
