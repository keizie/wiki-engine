// 샘플 성능 테스트: 대용량 WikiFile 처리
import { describe, it, expect } from "@jest/globals";

import type { WikiFile } from "../../src/models/WikiFile";

describe("WikiFile 성능", () => {
  it("1000개 파일 처리 시간 측정", () => {
    const files: WikiFile[] = Array.from({ length: 1000 }, (_, i) => ({
      id: `f${i}`,
      filename: `file${i}.txt`,
      path: `/files/file${i}.txt`,
      uploadedAt: new Date(),
      isPrivate: false,
      referencedBy: [],
    }));
    const start = Date.now();
    const count = files.filter((f) => !f.isPrivate).length;
    const elapsed = Date.now() - start;
    expect(count).toBe(1000);
    expect(elapsed).toBeLessThan(100);
  });
});
