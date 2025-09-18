import { test, expect } from "@playwright/test";

test.describe("최근 Wiki 페이지 목록", () => {
  test.beforeEach(async ({ request }) => {
    await request.post("http://localhost:3000/api/page", {
      data: {
        id: "test1",
        title: "테스트 페이지",
        updatedAt: new Date().toISOString(),
        content: "내용",
        links: [],
        isPrivate: false,
        createdAt: new Date().toISOString(),
        files: [],
      },
    });
  });

  test("홈에서 최근 페이지 목록이 정상적으로 표시된다", async ({ page }) => {
    await page.goto("http://localhost:3000/recent-changes");
    await expect(page.locator("h2")).toHaveText("최근 수정된 Wiki 페이지");
    const items = page.locator("ul > li");
    await expect(items).toHaveCount(1);
    await expect(items.nth(0).locator("strong")).toHaveText("테스트 페이지");
    await expect(items.nth(0).locator("span")).toContainText("수정일:");
  });
});
