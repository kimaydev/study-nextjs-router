'use client';
import { TodoLayout } from './style/layout.style';

export default function Layout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <TodoLayout>
      {children}
      {modal}
    </TodoLayout>
  );
}
