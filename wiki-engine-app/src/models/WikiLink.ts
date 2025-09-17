export type WikiLinkType =
  | "DoubleBracket"
  | "SingleBracket"
  | "CamelCase"
  | "Markdown";

export interface WikiLink {
  id: string;
  sourcePage: string;
  targetPage: string;
  type: WikiLinkType;
}
