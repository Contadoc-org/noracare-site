import type { Metadata } from "next";
import { CTA } from "@/components/sections/CTA";
import {
  featureIcons,
  IconChart,
  IconCheck,
  IconDevice,
  IconShield,
} from "@/components/icons";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { features, ogDefaults, siteConfig } from "@/lib/site";

const title = "Produto: escalas, check-in, trocas e relatórios";
const description =
  "Conheça os módulos do NoraCare: escalas, check-in biométrico, trocas, acessos hierárquicos e relatórios financeiros para redes de saúde.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/produto" },
  openGraph: {
    ...ogDefaults,
    type: "website",
    url: `${siteConfig.url}/produto`,
    title: `${title} | ${siteConfig.name}`,
    description,
  },
};

const modules = [
  {
    title: "Admin web",
    icon: IconChart,
    items: [
      "Gestão de redes, unidades, setores e escalas",
      "Convites multi-perfil com governança de acesso",
      "Anúncios amplificados e trocas com histórico",
      "Revisão de ponto e relatórios exportáveis",
    ],
  },
  {
    title: "App do profissional",
    icon: IconDevice,
    featured: true,
    items: [
      "Plantões da semana e oportunidades anunciadas",
      "Check-in / check-out com validação",
      "Trocas e preferências do profissional",
      "Acompanhamento financeiro do plantão",
    ],
  },
  {
    title: "Segurança e auditoria",
    icon: IconShield,
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
      <PageHero
        eyebrow="Produto"
        title="Uma suíte operacional para a jornada completa do plantão"
        description="O NoraCare conecta gestão, coordenação e profissionais em fluxos auditáveis — da montagem da escala ao fechamento financeiro."
      />

      <section className="surface-light section-pad">
        <Container>
          <SectionHeading
            eyebrow="Módulos"
            title="Capacidades pensadas para a realidade hospitalar"
            description="Cada módulo resolve uma fricção real da operação de plantões, com papéis e trilhas de auditoria claros."
          />

          <div className="mt-14 grid gap-4 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
            {features.map((feature, i) => {
              const Icon = featureIcons[feature.icon];
              return (
                <article
                  key={feature.id}
                  className="card card-hover group flex flex-col p-6 sm:p-7"
                >
                  <div className="flex items-start justify-between">
                    <span className="icon-tile">
                      <Icon className="h-6 w-6" />
                    </span>
                    <span
                      aria-hidden
                      className="font-mono text-xs text-muted-soft"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="h-card mt-6">{feature.title}</h3>
                  <p className="mt-2 text-[0.9375rem] leading-relaxed text-body">
                    {feature.description}
                  </p>
                  <div aria-hidden className="mt-auto pt-6">
                    <div className="h-px w-full bg-linear-to-r from-nc-teal/40 via-nc-blue/20 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-100" />
                  </div>
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
          <div className="mt-14 grid gap-5 sm:mt-16 lg:grid-cols-3 lg:items-stretch">
            {modules.map((mod) => {
              const Icon = mod.icon;
              const surface = mod.featured
                ? "surface-dark relative flex flex-col overflow-hidden rounded-card border border-white/10 p-7 shadow-panel sm:p-8 lg:-my-4 lg:py-12"
                : "card-muted flex flex-col p-7 sm:p-8";
              const bullet = mod.featured
                ? "bg-nc-green/15 text-nc-green"
                : "bg-[#e1f6f0] text-nc-teal";
              return (
                <article key={mod.title} className={surface}>
                  <span className="icon-tile-soft">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="h-card mt-6">{mod.title}</h3>
                  <ul className="mt-6 space-y-3.5">
                    {mod.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-[0.9375rem] leading-relaxed text-body"
                      >
                        <span
                          aria-hidden
                          className={`mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full ${bullet}`}
                        >
                          <IconCheck className="h-3.5 w-3.5" />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      <CTA />
    </>
  );
}
