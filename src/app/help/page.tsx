import type { Metadata } from "next";
import Link from "next/link";
import { helpSections } from "@/content/help/nav";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Central de ajuda",
  description: `Guia de uso do ${siteConfig.name} para profissionais de saúde e equipes de gestão: acesso, plantões, check-in, trocas, escalas, financeiro e relatórios.`,
  alternates: { canonical: "/help" },
  openGraph: {
    title: `Central de ajuda | ${siteConfig.name}`,
    description: `Tudo o que você precisa para usar o ${siteConfig.name} no dia a dia.`,
    url: `${siteConfig.url}/help`,
  },
};

export default function HelpHomePage() {
  return (
    <>
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-nc-blue">
        Central de ajuda
      </p>
      <h1 className="mt-3 text-4xl font-bold tracking-tight text-balance text-nc-navy">
        Como podemos ajudar?
      </h1>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
        Guias passo a passo para usar o {siteConfig.name}: do primeiro acesso ao
        fechamento do mês. Escolha um tema abaixo ou use a busca.
      </p>

      <div className="mt-10 space-y-12">
        {helpSections.map((section) => (
          <section key={section.title}>
            <h2 className="text-xl font-bold text-nc-navy">{section.title}</h2>
            <ul className="mt-4 grid gap-4 sm:grid-cols-2">
              {section.pages.map((page) => (
                <li key={page.slug}>
                  <Link
                    href={`/help/${page.slug}`}
                    className="block h-full rounded-2xl border border-border bg-white p-5 shadow-[var(--shadow-card)] transition hover:-translate-y-0.5 hover:border-nc-blue"
                  >
                    <span className="font-semibold text-nc-navy">{page.title}</span>
                    {page.summary ? (
                      <span className="mt-1.5 line-clamp-3 text-sm leading-relaxed text-muted">
                        {page.summary}
                      </span>
                    ) : null}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </>
  );
}
