import { Header } from '@/components/Header';
import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  weight: ['400', '500', '600'],
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: 'Exlusive',
  description: 'Loja loja digital'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <main>
          <Header />
          <div>{children}</div>
        </main>
      </body>
    </html>
  );
}
