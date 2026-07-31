import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Fale com a equipe NoraCare para demonstração, comercial ou suporte institucional.",
  alternates: { canonical: "/contato" },
  openGraph: {
    title: `Contato | ${siteConfig.name}`,
    description: "Solicite uma demonstração ou fale com o time comercial.",
    url: `${siteConfig.url}/contato`,
  },
};

export default function ContatoPage() {
  return (
    <section className="bg-mesh-light section-pad">
      <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-nc-blue">
            Contato
          </p>
          <h1 className="mt-3 text-balance text-4xl font-bold tracking-tight text-nc-navy sm:text-5xl">
            Vamos conversar sobre a sua operação
          </h1>
          <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
            Conte sobre a estrutura da rede, o volume de plantões e os desafios
            de escala, ponto e financeiro. Retornamos com uma demonstração
            alinhada ao seu contexto.
          </p>

          <dl className="mt-10 space-y-5">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-nc-blue">
                Comercial
              </dt>
              <dd className="mt-1.5">
                <a
                  href={`mailto:${siteConfig.commercialEmail}`}
                  className="text-lg font-semibold text-nc-navy hover:text-nc-blue"
                >
                  {siteConfig.commercialEmail}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-nc-blue">
                Geral
              </dt>
              <dd className="mt-1.5">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-lg font-semibold text-nc-navy hover:text-nc-blue"
                >
                  {siteConfig.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-nc-blue">
                App
              </dt>
              <dd className="mt-1.5">
                <a
                  href={siteConfig.appUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-semibold text-nc-navy hover:text-nc-blue"
                >
                  {siteConfig.appUrl.replace("https://", "")}
                </a>
              </dd>
            </div>
          </dl>
        </div>

        <ContactForm />
      </Container>
    </section>
  );
}
