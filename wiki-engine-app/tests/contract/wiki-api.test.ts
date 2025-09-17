import { describe, it, expect } from "@jest/globals";
import fs from "fs";
import path from "path";

describe("Wiki Engine API Contract", () => {
  it("should have valid OpenAPI schema for WikiPage", () => {
    const apiSpec = fs.readFileSync(
      path.resolve(
        __dirname,
        "../../../specs/003-plain-text-wiki/contracts/wiki-api.yaml"
      ),
      "utf-8"
    );
    expect(apiSpec).toContain("WikiPage");
    expect(apiSpec).toContain("id:");
    expect(apiSpec).toContain("title:");
    expect(apiSpec).toContain("content:");
    expect(apiSpec).toContain("isPrivate:");
  });

  it("should have valid OpenAPI schema for WikiFile", () => {
    const apiSpec = fs.readFileSync(
      path.resolve(
        __dirname,
        "../../../specs/003-plain-text-wiki/contracts/wiki-api.yaml"
      ),
      "utf-8"
    );
    expect(apiSpec).toContain("WikiFile");
    expect(apiSpec).toContain("filename:");
    expect(apiSpec).toContain("path:");
    expect(apiSpec).toContain("isPrivate:");
  });

  it("should have valid OpenAPI schema for WikiLink", () => {
    const apiSpec = fs.readFileSync(
      path.resolve(
        __dirname,
        "../../../specs/003-plain-text-wiki/contracts/wiki-api.yaml"
      ),
      "utf-8"
    );
    expect(apiSpec).toContain("WikiLink");
    expect(apiSpec).toContain("sourcePage:");
    expect(apiSpec).toContain("targetPage:");
    expect(apiSpec).toContain("type:");
  });
});
