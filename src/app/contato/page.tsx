import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import {
  IconArrowRight,
  IconChat,
  IconExternal,
  IconMail,
  IconMonitor,
} from "@/components/icons";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Fale com a equipe NoraCare para demonstração, comercial ou suporte.",
  alternates: { canonical: "/contato" },
  openGraph: {
    title: `Contato | ${siteConfig.name}`,
    description: "Solicite uma demonstração ou fale com o time NoraCare.",
    url: `${siteConfig.url}/contato`,
  },
};

const rowClass =
  "group relative flex items-center gap-4 rounded-xl p-4 transition hover:bg-surface-muted/50";
const termClass =
  "font-mono text-[11px] uppercase tracking-[0.14em] text-muted-soft";
const linkClass =
  "text-[0.9375rem] font-semibold text-heading break-words transition group-hover:text-nc-blue after:absolute after:inset-0 after:content-['']";
const trailClass =
  "hidden h-4 w-4 shrink-0 text-muted-soft transition sm:block group-hover:translate-x-0.5 group-hover:text-nc-blue";

export default function ContatoPage() {
  return (
    <>
      <PageHero
        eyebrow="Contato"
        title="Vamos conversar sobre a sua operação"
        description="Conte sobre a estrutura da rede, o volume de plantões e os desafios de escala, ponto e financeiro. Retornamos com uma demonstração alinhada ao seu contexto."
        overlap
      />

      <section className="surface-light pb-20 sm:pb-28">
        <Container className="relative -mt-20 grid items-start gap-6 sm:-mt-28 lg:-mt-32 lg:grid-cols-[1.2fr_0.8fr] lg:gap-8">
          <ContactForm />

          <div className="card min-w-0 p-2 sm:p-3 lg:sticky lg:top-28">
            <ul className="divide-y divide-border">
              <li className={rowClass}>
                <span className="icon-tile-soft">
                  <IconChat className="h-5 w-5" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className={termClass}>WhatsApp</p>
                  <p className="mt-1">
                    <a
                      href={siteConfig.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={linkClass}
                    >
                      {siteConfig.phoneDisplay}
                    </a>
                  </p>
                </div>
                <IconExternal className={trailClass} />
              </li>

              <li className={rowClass}>
                <span className="icon-tile-soft">
                  <IconMail className="h-5 w-5" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className={termClass}>E-mail</p>
                  <p className="mt-1">
                    <a href={`mailto:${siteConfig.email}`} className={linkClass}>
                      {siteConfig.email}
                    </a>
                  </p>
                </div>
                <IconArrowRight className={trailClass} />
              </li>

              <li className={rowClass}>
                <span className="icon-tile-soft">
                  <IconMonitor className="h-5 w-5" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className={termClass}>Painel web</p>
                  <p className="mt-1">
                    <a
                      href={siteConfig.appUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={linkClass}
                    >
                      {siteConfig.appUrl.replace("https://", "")}
                    </a>
                  </p>
                </div>
                <IconExternal className={trailClass} />
              </li>
            </ul>
          </div>
        </Container>
      </section>
    </>
  );
}
