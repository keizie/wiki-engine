// 샘플 유닛 테스트: WikiPage 엔티티
import { describe, it, expect } from "@jest/globals";

import type { WikiPage } from "../../src/models/WikiPage";

describe("WikiPage 엔티티", () => {
  it("기본 속성 생성", () => {
    const page: WikiPage = {
      id: "p1",
      title: "테스트",
      content: "내용",
      links: [],
      isPrivate: false,
      createdAt: new Date(),
      updatedAt: new Date(),
      files: [],
    };
    expect(page.title).toBe("테스트");
    expect(page.isPrivate).toBe(false);
  });
});
