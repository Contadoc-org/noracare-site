import type { Metadata } from "next";
import { CTA } from "@/components/sections/CTA";
import { featureIcons, IconCheck } from "@/components/icons";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { features, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Produto",
  description:
    "Conheça os módulos do NoraCare: escalas, check-in biométrico, trocas, acessos hierárquicos e relatórios financeiros para redes de saúde.",
  alternates: { canonical: "/produto" },
  openGraph: {
    title: `Produto | ${siteConfig.name}`,
    description:
      "Módulos completos para gestão de plantões e equipes de saúde.",
    url: `${siteConfig.url}/produto`,
  },
};

const modules = [
  {
    title: "Admin web",
    items: [
      "Gestão de redes, unidades, setores e escalas",
      "Convites multi-perfil com governança de acesso",
      "Anúncios amplificados e trocas com histórico",
      "Revisão de ponto e relatórios exportáveis",
    ],
  },
  {
    title: "App do profissional",
    items: [
      "Plantões da semana e oportunidades anunciadas",
      "Check-in / check-out com validação",
      "Trocas e preferências do profissional",
      "Acompanhamento financeiro do plantão",
    ],
  },
  {
    title: "Segurança e auditoria",
    items: [
      "Papéis e permissões por escopo organizacional",
      "Registro de ações críticas em auditoria",
      "Autenticação com Cognito",
      "Ambientes separados: dev, staging e produção",
    ],
  },
];

export default function ProdutoPage() {
  return (
    <>
      <section className="bg-hero-grid text-white">
        <Container className="section-pad !pb-16 !pt-20">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-nc-green">
            Produto
          </p>
          <h1 className="mt-4 max-w-3xl text-balance text-4xl font-bold tracking-tight sm:text-5xl">
            Uma suíte operacional para a jornada completa do plantão
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/75">
            O NoraCare conecta gestão, coordenação e profissionais em fluxos
            auditáveis — da montagem da escala ao fechamento financeiro.
          </p>
        </Container>
      </section>

      <section className="section-pad bg-mesh-light">
        <Container>
          <SectionHeading
            eyebrow="Módulos"
            title="Capacidades pensadas para a realidade hospitalar"
            description="Cada módulo resolve uma fricção real da operação de plantões, com papéis e trilhas de auditoria claros."
          />

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => {
              const Icon = featureIcons[feature.icon];
              return (
                <article
                  key={feature.id}
                  className="rounded-3xl border border-border bg-white p-6 shadow-[var(--shadow-card)]"
                >
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-nc-navy text-nc-green">
                    <Icon />
                  </div>
                  <h2 className="mt-4 text-lg font-bold text-nc-navy">
                    {feature.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {feature.description}
                  </p>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="section-pad bg-white">
        <Container>
          <SectionHeading
            eyebrow="Superfícies"
            title="Admin, app e compliance no mesmo produto"
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {modules.map((mod) => (
              <article
                key={mod.title}
                className="rounded-3xl border border-border bg-background p-7"
              >
                <h3 className="text-xl font-bold text-nc-navy">{mod.title}</h3>
                <ul className="mt-5 space-y-3">
                  {mod.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm leading-relaxed text-muted"
                    >
                      <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-nc-green/20 text-nc-navy">
                        <IconCheck className="h-3.5 w-3.5" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <CTA />
    </>
  );
}
