import type { NextApiRequest, NextApiResponse } from "next";
import { WikiFile } from "../../src/models/WikiFile";

// 임시 메모리 저장소
const files: WikiFile[] = [];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    const { id } = req.query;
    if (id) {
      const file = files.find((f) => f.id === id);
      if (file) return res.status(200).json(file);
      return res.status(404).json({ error: "File not found" });
    }
    return res.status(200).json(files);
  }

  if (req.method === "POST") {
    const file: WikiFile = req.body;
    files.push(file);
    return res.status(201).json(file);
  }

  if (req.method === "PUT") {
    const file: WikiFile = req.body;
    const idx = files.findIndex((f) => f.id === file.id);
    if (idx === -1) return res.status(404).json({ error: "File not found" });
    files[idx] = file;
    return res.status(200).json(file);
  }

  if (req.method === "DELETE") {
    const { id } = req.query;
    const idx = files.findIndex((f) => f.id === id);
    if (idx === -1) return res.status(404).json({ error: "File not found" });
    files.splice(idx, 1);
    return res.status(204).end();
  }

  return res.status(405).json({ error: "Method not allowed" });
}
