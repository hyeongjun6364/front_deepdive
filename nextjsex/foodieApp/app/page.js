import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 style={{ color: 'white', textAlign: 'center' }}>
        Time to get started!
      </h1>
      <p><Link href='/meals'>go to meals</Link></p>
      <p><Link href='/meals/share'>go to share</Link></p>
      <p><Link href='/community'>go to community</Link></p>
    </main>
  );
}
