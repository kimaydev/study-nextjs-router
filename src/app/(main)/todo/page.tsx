import Link from 'next/link';

export default function Todo() {
  return (
    <ul>
      <li>
        <Link href="/todo/write">투두 모달 나와라</Link>
      </li>
    </ul>
  );
}
