import { readFileSync } from "node:fs";
import path from "node:path";
import { helpPages } from "@/content/help/nav";

const CONTENT_DIR = path.join(process.cwd(), "src/content/help");

export function getHelpPage(slug: string) {
  const index = helpPages.findIndex((page) => page.slug === slug);
  if (index < 0) return null;
  const html = readFileSync(path.join(CONTENT_DIR, `${slug}.html`), "utf8")
    // Tabelas largas rolam dentro do próprio quadro, sem empurrar a página no celular.
    .replace(/<table>/g, '<div class="table-wrap"><table>')
    .replace(/<\/table>/g, "</table></div>");
  // Sumário lateral: os <h2 id="..."> do próprio fragmento.
  const toc = [...html.matchAll(/<h2 id="([^"]+)"[^>]*>([\s\S]*?)<\/h2>/g)].map((m) => ({
    id: m[1],
    title: m[2].replace(/<[^>]+>/g, "").trim(),
  }));
  return {
    ...helpPages[index],
    html,
    toc,
    prev: helpPages[index - 1] ?? null,
    next: helpPages[index + 1] ?? null,
  };
}
