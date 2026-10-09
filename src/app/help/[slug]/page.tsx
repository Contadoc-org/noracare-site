import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { helpPages } from "@/content/help/nav";
import { getHelpPage } from "@/lib/help";
import { siteConfig } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return helpPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const page = getHelpPage((await params).slug);
  if (!page) return {};
  return {
    title: `${page.title} · Ajuda`,
    description: page.summary || undefined,
    alternates: { canonical: `/help/${page.slug}` },
    openGraph: {
      title: `${page.title} | Ajuda ${siteConfig.name}`,
      description: page.summary || undefined,
      url: `${siteConfig.url}/help/${page.slug}`,
    },
  };
}

export default async function HelpArticlePage({ params }: Props) {
  const page = getHelpPage((await params).slug);
  if (!page) notFound();

  return (
    <div className="xl:grid xl:grid-cols-[1fr_13rem] xl:gap-10">
      <article className="min-w-0 rounded-3xl border border-border bg-white p-6 shadow-[var(--shadow-card)] sm:p-10">
        <nav aria-label="Você está em" className="text-xs text-muted">
          <Link href="/help" className="font-semibold text-nc-blue hover:underline">
            Central de ajuda
          </Link>
          <span className="mx-2">›</span>
          {page.section}
        </nav>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-balance text-nc-navy sm:text-4xl">
          {page.title}
        </h1>
        <div className="help-prose mt-6" dangerouslySetInnerHTML={{ __html: page.html }} />

        <div className="mt-12 rounded-2xl bg-surface-muted/60 p-5 text-sm text-muted">
          <strong className="text-nc-navy">Ainda com dúvida?</strong> Fale com a
          coordenação ou a gestão da sua instituição, ou com a gente pela página de{" "}
          <Link href="/contato" className="font-semibold text-nc-blue hover:underline">
            contato
          </Link>
          .
        </div>

        <div className="mt-8 grid gap-3 border-t border-border pt-6 sm:grid-cols-2">
          {page.prev ? (
            <Link href={`/help/${page.prev.slug}`} className="rounded-xl p-3 hover:bg-surface-muted/60">
              <span className="block text-xs text-muted">← Anterior</span>
              <span className="font-semibold text-nc-navy">{page.prev.title}</span>
            </Link>
          ) : (
            <span />
          )}
          {page.next ? (
            <Link href={`/help/${page.next.slug}`} className="rounded-xl p-3 text-right hover:bg-surface-muted/60">
              <span className="block text-xs text-muted">Próximo →</span>
              <span className="font-semibold text-nc-navy">{page.next.title}</span>
            </Link>
          ) : null}
        </div>
      </article>

      {page.toc.length > 1 ? (
        <aside className="hidden xl:block">
          <div className="sticky top-24 text-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-nc-blue">
              Nesta página
            </p>
            <ul className="mt-3 space-y-2 border-l border-border">
              {page.toc.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`} className="-ml-px block border-l border-transparent pl-3 text-muted hover:border-nc-blue hover:text-nc-navy">
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
