"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { helpSections } from "@/content/help/nav";

const normalize = (text: string) =>
  text.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();

export function HelpNav() {
  const pathname = usePathname();
  const [query, setQuery] = useState("");
  const q = normalize(query.trim());

  const sections = helpSections
    .map((section) => ({
      ...section,
      pages: section.pages.filter(
        (page) =>
          !q ||
          normalize([page.title, page.summary, ...page.keywords].join(" ")).includes(q),
      ),
    }))
    .filter((section) => section.pages.length > 0);

  return (
    <nav aria-label="Central de ajuda" className="text-sm">
      <label htmlFor="help-search" className="sr-only">
        Buscar na ajuda
      </label>
      <input
        id="help-search"
        type="search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Buscar na ajuda…"
        className="w-full rounded-xl border border-border bg-white px-3 py-2.5 text-nc-navy placeholder:text-muted-soft focus:outline-none focus:ring-2 focus:ring-[var(--ring)]"
      />
      <div className="mt-6 space-y-6">
        {sections.map((section) => (
          <div key={section.title}>
            <p className="px-3 text-xs font-semibold uppercase tracking-[0.14em] text-nc-blue">
              {section.title}
            </p>
            <ul className="mt-2 space-y-0.5">
              {section.pages.map((page) => {
                const href = `/help/${page.slug}`;
                const active = pathname === href;
                return (
                  <li key={page.slug}>
                    <Link
                      href={href}
                      aria-current={active ? "page" : undefined}
                      className={`block rounded-lg px-3 py-1.5 leading-snug transition ${
                        active
                          ? "bg-nc-navy font-semibold text-white"
                          : "text-muted hover:bg-surface-muted hover:text-nc-navy"
                      }`}
                    >
                      {page.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
        {sections.length === 0 ? (
          <p className="px-3 text-muted">Nada encontrado para “{query}”.</p>
        ) : null}
      </div>
    </nav>
  );
}
