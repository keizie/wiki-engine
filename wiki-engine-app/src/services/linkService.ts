import type { WikiLink } from "../models/WikiLink";
import type { WikiPage } from "../models/WikiPage";

export function extractWikiLinks(_page: WikiPage): WikiLink[] {
  // TODO: WikiLink, Markdown 링크, CamelCase 등 다양한 링크 추출 로직 구현
  return [];
}

export function isLinkToPrivate(targetPage: WikiPage): boolean {
  return targetPage.isPrivate;
}
