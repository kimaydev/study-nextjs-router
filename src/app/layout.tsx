import type { Metadata } from 'next';

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
      <body>{children}</body>
    </html>
  );
}
