export interface WikiFile {
  id: string;
  filename: string;
  path: string;
  uploadedAt: Date;
  isPrivate: boolean;
  referencedBy: string[];
}
