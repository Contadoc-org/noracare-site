import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { IconChat, IconChevronRight } from "@/components/icons";
import { helpPages } from "@/content/help/nav";
import { getHelpPage } from "@/lib/help";
import { ogDefaults, siteConfig } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return helpPages.map((page) => ({ slug: page.slug }));
}

/** Resumo do índice em até ~155 caracteres, cortado numa cláusula completa (fora de parênteses). */
function metaDescription(summary: string) {
  if (summary.length <= 155) return summary.replace(/\.?$/, ".");
  const head = summary.slice(0, 156);
  let depth = 0;
  let end = -1;
  for (let i = 0; i < head.length; i++) {
    const c = head[i];
    if (c === "(") depth++;
    else if (c === ")") depth = Math.max(0, depth - 1);
    else if (
      depth === 0 &&
      i >= 120 &&
      ((/[,;:]/.test(c) && head[i + 1] === " ") || head.startsWith(" e ", i))
    ) {
      end = i;
    }
  }
  if (end > 0) return `${head.slice(0, end).replace(/[,;:\s]+$/, "")}.`;
  return `${head.slice(0, head.lastIndexOf(" ")).replace(/[,;:(\s]+$/, "")}…`;
}

/** Título curto (até ~60 caracteres com o sufixo) e descrição fechada para os artigos que não cabem na regra geral. */
const seoOverrides: Record<string, { title?: string; description?: string }> = {
  "app-no-celular": { title: "App no celular: instalação e permissões" },
  fechamento: { title: "Fechamento mensal: importação e pagamento" },
  "precificacao-e-regras": { title: "Precificação e regras de pagamento" },
  "configurar-escala": { title: "Configurar escala e histórico" },
  "equipe-de-gestao": { title: "Gestores, coordenadores e masters" },
  "visao-geral": {
    description:
      "Apresenta o NoraCare para quem nunca usou: painel web da gestão, app do profissional, perfis de acesso e um guia de por onde começar.",
  },
  glossario: {
    description:
      "Glossário dos termos do app e do painel NoraCare, em ordem alfabética, como plantão, escala, troca, passagem, competência e conciliação.",
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const page = getHelpPage((await params).slug);
  if (!page) return {};
  const override = seoOverrides[page.slug] ?? {};
  const title = override.title ?? page.title;
  const description = override.description ?? metaDescription(page.summary);
  return {
    title: `${title} · Ajuda`,
    description,
    alternates: { canonical: `/help/${page.slug}` },
    openGraph: {
      ...ogDefaults,
      type: "article",
      url: `${siteConfig.url}/help/${page.slug}`,
      title: `${title} | Ajuda ${siteConfig.name}`,
      description,
    },
  };
}

export default async function HelpArticlePage({ params }: Props) {
  const page = getHelpPage((await params).slug);
  if (!page) notFound();

  return (
    <div className="xl:grid xl:grid-cols-[minmax(0,1fr)_14rem] xl:gap-10">
      <article className="card min-w-0 break-words p-5 sm:p-10 lg:p-12">
        <nav
          aria-label="Você está em"
          className="flex flex-wrap items-center gap-1.5 text-xs text-muted-soft"
        >
          <Link href="/help" className="-my-3.5 py-3.5 font-semibold text-nc-blue hover:underline">
            Central de ajuda
          </Link>
          <IconChevronRight className="h-3.5 w-3.5" />
          {page.section}
        </nav>
        <h1 className="mt-4 font-display text-3xl leading-tight font-extrabold tracking-[-0.03em] text-balance text-heading sm:text-4xl lg:text-[2.75rem]">
          {page.title}
        </h1>
        <div className="help-prose mt-8" dangerouslySetInnerHTML={{ __html: page.html }} />

        <div className="mt-14 flex flex-col gap-4 rounded-card border border-nc-blue/15 bg-[#f1f4fe] p-5 sm:flex-row sm:items-center sm:p-6">
          <span className="icon-tile-soft">
            <IconChat className="h-5 w-5" />
          </span>
          <p className="text-sm leading-relaxed text-body">
            <strong className="text-heading">Ainda com dúvida?</strong> Fale com a
            coordenação ou a gestão da sua instituição, ou com a gente pela página de{" "}
            <Link
              href="/contato"
              className="font-semibold text-nc-blue underline decoration-nc-blue/30 underline-offset-2 hover:decoration-nc-blue"
            >
              contato
            </Link>
            .
          </p>
        </div>

        <div className="mt-10 grid gap-3 border-t border-border pt-8 sm:grid-cols-2">
          {page.prev ? (
            <Link
              href={`/help/${page.prev.slug}`}
              className="card card-hover group flex min-h-20 flex-col justify-center p-4 sm:p-5"
            >
              <span className="block font-mono text-xs text-muted-soft">← Anterior</span>
              <span className="mt-1 font-semibold text-heading">{page.prev.title}</span>
            </Link>
          ) : (
            <span />
          )}
          {page.next ? (
            <Link
              href={`/help/${page.next.slug}`}
              className="card card-hover group flex min-h-20 flex-col justify-center p-4 sm:p-5 sm:text-right"
            >
              <span className="block font-mono text-xs text-muted-soft">Próximo →</span>
              <span className="mt-1 font-semibold text-heading">{page.next.title}</span>
            </Link>
          ) : null}
        </div>
      </article>

      {page.toc.length > 1 ? (
        <aside className="hidden xl:block">
          <div className="sticky top-24">
            <p className="font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-muted-soft">
              Nesta página
            </p>
            <ul className="mt-4 space-y-0.5 border-l border-border">
              {page.toc.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="-ml-px block border-l-2 border-transparent py-1.5 pl-4 text-sm leading-snug text-body transition hover:border-nc-blue hover:text-heading"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      ) : null}
    </div>
  );
}
