"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { IconSearch } from "@/components/icons";
import { helpSections } from "@/content/help/nav";

const normalize = (text: string) =>
  text.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();

/** A navegação é renderizada duas vezes (celular e desktop): cada campo precisa de id próprio. */
export function HelpNav({ searchId = "help-search" }: { searchId?: string }) {
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
      <label htmlFor={searchId} className="sr-only">
        Buscar na ajuda
      </label>
      <div className="relative">
        <IconSearch className="pointer-events-none absolute top-1/2 left-3.5 h-[1.125rem] w-[1.125rem] -translate-y-1/2 text-muted-soft" />
        <input
          id={searchId}
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Buscar na ajuda…"
          className="input pl-10"
        />
      </div>
      <div className="mt-7 space-y-7">
        {sections.map((section) => (
          <div key={section.title}>
            <p className="px-3 font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-muted-soft">
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
                      className={`relative flex min-h-11 items-center rounded-lg px-3 py-2 leading-snug transition lg:min-h-0 lg:py-1.5 ${
                        active
                          ? "bg-nc-blue/[0.07] font-semibold text-heading before:absolute before:top-2 before:bottom-2 before:left-0 before:w-0.5 before:rounded-full before:bg-nc-blue before:content-['']"
                          : "text-body hover:bg-surface-muted/80 hover:text-heading"
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
          <p className="px-3 text-body">Nada encontrado para “{query}”.</p>
        ) : null}
      </div>
    </nav>
  );
}
