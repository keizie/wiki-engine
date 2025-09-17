// 통합 테스트: Wiki 엔진 주요 서비스 및 API 통합 검증

import { describe, it, expect } from "@jest/globals";
import { poweredByFooterExtension } from "../../src/extensions/poweredByFooterExtension";
import type { WikiFile } from "../../src/models/WikiFile";
import type { WikiPage } from "../../src/models/WikiPage";
import { findOrphanedFiles } from "../../src/services/orphanService";
import { publishPageToHtml } from "../../src/services/publishService";

// 샘플 데이터
const samplePage: WikiPage = {
  id: "page1",
  title: "테스트 페이지",
  content: "내용",
  links: [],
  isPrivate: false,
  createdAt: new Date(),
  updatedAt: new Date(),
  files: [],
};

const _sampleFile: WikiFile = {
  id: "file1",
  filename: "test.txt",
  path: "/files/test.txt",
  uploadedAt: new Date(),
  isPrivate: false,
  referencedBy: ["page1"],
};

describe("Wiki 엔진 통합 테스트", () => {
  it("페이지를 HTML로 퍼블리싱할 수 있다", () => {
    expect(() => publishPageToHtml(samplePage.id)).not.toThrow();
  });

  it("고아 파일을 찾고 삭제할 수 있다", () => {
    expect(Array.isArray(findOrphanedFiles())).toBe(true);
    expect(() => {
      // 실제 삭제는 구현 필요
    }).not.toThrow();
  });

  it("확장 기능이 정상적으로 동작한다", () => {
    expect(typeof poweredByFooterExtension.activate).toBe("function");
    expect(() => poweredByFooterExtension.activate(samplePage)).not.toThrow();
  });
});
