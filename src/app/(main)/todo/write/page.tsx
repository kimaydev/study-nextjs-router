import { redirect } from 'next/navigation';

export default function WritePage() {
  redirect('/todo');

  return null;
}
