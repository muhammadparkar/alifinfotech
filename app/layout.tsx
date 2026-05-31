import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Alif Info Tech — Innovation Experts',
  description:
    'Brand. Product. Engineering. Alif Info Tech delivers digital transformation for founders who refuse to settle.',
  keywords: 'web engineering, mobile apps, brand identity, product design, design systems, Alif Info Tech',
  openGraph: {
    title: 'Alif Info Tech — Innovation Experts',
    description: 'Brand. Product. Engineering. For founders who refuse to settle.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
