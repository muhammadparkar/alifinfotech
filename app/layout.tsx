import type { Metadata } from 'next';
import './globals.css';
import AlifScrollColorSystem from './components/AlifScrollColorSystem';
import AlifCursor from './components/AlifCursor';
import AlifNav from './components/AlifNav';
import AlifFooter from './components/AlifFooter';
import FloatingContact from './components/FloatingContact';

export const metadata: Metadata = {
  title: { default: 'Alif Info Tech — Innovation Experts', template: '%s | Alif Info Tech' },
  description: 'Transforming Ideas into Powerful and Scalable Digital Solutions. AI, ERP, Cloud, Web & Mobile from Doha, Qatar.',
  keywords: 'ERP, AI solutions, web development, mobile apps, cloud, Qatar, Doha, Alif Info Tech',
  openGraph: {
    title: 'Alif Info Tech — Innovation Experts',
    description: 'Transforming Ideas into Powerful and Scalable Digital Solutions.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AlifScrollColorSystem>
          <AlifCursor />
          <AlifNav />
          <FloatingContact />
          <div style={{ paddingTop: '56px' }}>
            {children}
          </div>
          <AlifFooter />
        </AlifScrollColorSystem>
      </body>
    </html>
  );
}
