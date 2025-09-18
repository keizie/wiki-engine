import Link from "next/link";

export default function Page() {
  return (
    <main>
      <h1>Wiki Engine Home</h1>
      <nav>
        <Link href="/recent-changes">최근 변경 페이지로 이동</Link>
      </nav>
    </main>
  );
}
