'use client';
import Header from '../components/header';
import { LayoutWrapper } from '../style/layout.style';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        {/* 헤더 */}
        <Header />
        {/* 컨텐츠 */}
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
