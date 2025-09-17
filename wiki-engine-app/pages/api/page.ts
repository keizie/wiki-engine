import type { NextApiRequest, NextApiResponse } from "next";
import { WikiPage } from "../../src/models/WikiPage";

// 임시 메모리 저장소
const pages: WikiPage[] = [];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    const { id } = req.query;
    if (id) {
      const page = pages.find((p) => p.id === id);
      if (page) return res.status(200).json(page);
      return res.status(404).json({ error: "Page not found" });
    }
    return res.status(200).json(pages);
  }

  if (req.method === "POST") {
    const page: WikiPage = req.body;
    pages.push(page);
    return res.status(201).json(page);
  }

  if (req.method === "PUT") {
    const page: WikiPage = req.body;
    const idx = pages.findIndex((p) => p.id === page.id);
    if (idx === -1) return res.status(404).json({ error: "Page not found" });
    pages[idx] = page;
    return res.status(200).json(page);
  }

  if (req.method === "DELETE") {
    const { id } = req.query;
    const idx = pages.findIndex((p) => p.id === id);
    if (idx === -1) return res.status(404).json({ error: "Page not found" });
    pages.splice(idx, 1);
    return res.status(204).end();
  }

  return res.status(405).json({ error: "Method not allowed" });
}
