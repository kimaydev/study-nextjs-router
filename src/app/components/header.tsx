'use client';
import Link from 'next/link';
import { HeaderLayout } from '../style/components/header.style';

export default function Header() {
  return (
    <HeaderLayout>
      <h1>
        <Link href="/">LOGO</Link>
      </h1>
      <nav>
        <ul>
          <li>
            <Link href="/todo">Todo</Link>
          </li>
          <li>
            <Link href="/">Product</Link>
          </li>
          <li>
            <Link href="/">Qna</Link>
          </li>
        </ul>
      </nav>
    </HeaderLayout>
  );
}
