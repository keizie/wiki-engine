import { WikiFile } from "./WikiFile";
import { WikiLink } from "./WikiLink";

export interface WikiPage {
  id: string;
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  isPrivate: boolean;
  links: WikiLink[];
  files: WikiFile[];
}
