export interface GitCommit {
  id: string;
  timestamp: Date;
  author: string;
  message: string;
  changedPages: string[];
  changedFiles: string[];
}
