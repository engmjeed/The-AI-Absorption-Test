import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'AbsorbScore — Will AI absorb your product?',
  description: 'Get your AI absorption risk score, survival design, and a blunt Build / Pivot / Kill verdict.',
  openGraph: {
    title: 'AbsorbScore',
    description: 'Will AI absorb your product?',
    type: 'website'
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
