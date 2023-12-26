import type { Metadata } from 'next';
import './globals.css';
import StyledComponentsRegistry from '../../lib/registry';

export const metadata: Metadata = {
  title: 'Next.js App Router 연습',
  description: 'Next.js App Router 연습',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
