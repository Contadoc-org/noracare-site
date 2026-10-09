import type { Metadata } from "next";
import { CTA } from "@/components/sections/CTA";
import { IconHierarchy, IconShield, IconUsers } from "@/components/icons";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "Conheça a NoraCare: plataforma de gestão de plantões e equipes de saúde para redes hospitalares brasileiras.",
  alternates: { canonical: "/sobre" },
  openGraph: {
    title: `Sobre | ${siteConfig.name}`,
    description: siteConfig.description,
    url: `${siteConfig.url}/sobre`,
  },
};

const values = [
  {
    title: "Operação confiável",
    description:
      "Cada plantão, troca e ponto deixa trilha. Menos improviso, mais previsibilidade para a rede.",
    Icon: IconShield,
  },
  {
    title: "Desenhado para o cuidado",
    description:
      "Fluxos pensados com gestores, coordenadores e profissionais — não genéricos de RH.",
    Icon: IconUsers,
  },
  {
    title: "Governança por escopo",
    description:
      "Acesso hierárquico por rede, unidade, setor e escala, com papéis claros e auditáveis.",
    Icon: IconHierarchy,
  },
];

const specRow =
  "flex flex-col gap-1 py-4 first:pt-0 last:pb-0 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6";

export default function SobrePage() {
  return (
    <>
      <PageHero
        eyebrow="Sobre a NoraCare"
        title="Tecnologia para quem organiza o cuidado 24 horas por dia"
        description="Nascemos para resolver a complexidade real de escalas hospitalares: múltiplos perfis, unidades, regras de ponto e pressão por cobertura — sem planilhas soltas nem apps desconectados."
      />

      <section className="section-pad bg-white">
        <Container className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start lg:gap-16">
          <div>
            <h2 className="h-section">Nossa missão</h2>
            <div
              aria-hidden
              className="mt-6 h-1 w-14 rounded-full bg-linear-to-r from-nc-teal to-nc-blue"
            />
            <p className="mt-6 text-lg leading-relaxed text-body">
              Dar às redes de saúde uma operação de plantões transparente,
              auditável e humana — onde gestores enxergam a rede, coordenadores
              resolvem o dia a dia e profissionais têm clareza sobre plantões,
              ponto e remuneração.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-body">
              O produto combina admin web e app mobile, com segurança,
              permissões hierárquicas e relatórios que fecham o ciclo entre
              operação e financeiro.
            </p>
          </div>

          <div className="card p-7 sm:p-8 lg:sticky lg:top-28">
            <p className="eyebrow">Em números de produto</p>
            <ul className="mt-6 divide-y divide-border">
              <li className={specRow}>
                <span className="text-sm text-muted-soft">Perfis suportados</span>
                <strong className="font-semibold text-heading sm:text-right">
                  Master, gestor, coordenador, profissional, visualizador
                </strong>
              </li>
              <li className={specRow}>
                <span className="text-sm text-muted-soft">Estrutura org.</span>
                <strong className="font-semibold text-heading sm:text-right">
                  Rede → Local → Setor → Escala
                </strong>
              </li>
              <li className={specRow}>
                <span className="text-sm text-muted-soft">Canais</span>
                <strong className="font-semibold text-heading sm:text-right">
                  Web admin + app
                </strong>
              </li>
              <li className={specRow}>
                <span className="text-sm text-muted-soft">Foco</span>
                <strong className="font-semibold text-heading sm:text-right">
                  Brasil · saúde · plantões
                </strong>
              </li>
            </ul>
          </div>
        </Container>
      </section>

      <section className="surface-light section-pad">
        <Container>
          <SectionHeading title="O que nos guia" />
          <div className="mt-14 grid gap-5 sm:mt-16 lg:grid-cols-3">
            {values.map(({ title, description, Icon }) => (
              <article key={title} className="card card-hover p-7 sm:p-8">
                <span className="icon-tile">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="h-card mt-6">{title}</h3>
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-body">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <CTA />
    </>
  );
}
