import type { Metadata } from "next";
import Link from "next/link";
import { IconArrowRight } from "@/components/icons";
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
      <div className="surface-dark relative overflow-hidden rounded-panel px-6 py-10 shadow-panel sm:px-10 sm:py-12">
        <div aria-hidden className="grid-lines" />
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 right-0 h-64 w-full max-w-[22rem] rounded-full bg-nc-blue/40 blur-[100px]"
        />
        <div className="relative">
          <p className="eyebrow">Central de ajuda</p>
          <h1 className="mt-5 font-display text-4xl font-extrabold tracking-[-0.035em] text-balance text-heading sm:text-5xl">
            Como podemos ajudar?
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-body sm:text-lg">
            Guias passo a passo para usar o {siteConfig.name}: do primeiro acesso ao
            fechamento do mês. Escolha um tema abaixo ou use a busca.
          </p>
        </div>
      </div>

      <div className="mt-12 space-y-14">
        {helpSections.map((section) => (
          <section key={section.title}>
            <h2 className="font-display text-xl font-bold tracking-[-0.02em] text-heading sm:text-2xl">
              {section.title}
            </h2>
            <ul className="mt-5 grid gap-4 sm:grid-cols-2">
              {section.pages.map((page) => (
                <li key={page.slug}>
                  <Link
                    href={`/help/${page.slug}`}
                    className="card card-hover group flex h-full flex-col p-5 sm:p-6"
                  >
                    <span className="flex items-start justify-between gap-3">
                      <span className="font-semibold text-heading">{page.title}</span>
                      <IconArrowRight className="mt-1 h-4 w-4 shrink-0 text-muted-soft transition group-hover:translate-x-0.5 group-hover:text-nc-blue" />
                    </span>
                    {page.summary ? (
                      <span className="mt-2 line-clamp-3 text-sm leading-relaxed text-body">
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
