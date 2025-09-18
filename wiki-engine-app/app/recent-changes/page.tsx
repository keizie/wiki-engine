"use client";
import { useEffect, useState } from "react";

interface WikiPage {
  id: string;
  title: string;
  updatedAt: string;
}

export default function RecentWikiPages() {
  const [pages, setPages] = useState<WikiPage[]>([]);

  useEffect(() => {
    fetch("/api/page")
      .then((res) => res.json())
      .then((data: WikiPage[]) => {
        // 최근 수정순 정렬 (updatedAt 내림차순)
        const sorted = data.sort(
          (a, b) =>
            new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
        );
        setPages(sorted.slice(0, 10)); // 최근 10개만 표시
      });
  }, []);

  return (
    <section>
      <h2>최근 수정된 Wiki 페이지</h2>
      <ul>
        {pages.map((page) => (
          <li key={page.id}>
            <strong>{page.title}</strong> <br />
            <span>수정일: {new Date(page.updatedAt).toLocaleString()}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
