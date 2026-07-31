import type { Metadata } from "next";
import { CTA } from "@/components/sections/CTA";
import { Container } from "@/components/ui/Container";
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
  },
  {
    title: "Desenhado para o cuidado",
    description:
      "Fluxos pensados com gestores, coordenadores e profissionais — não genéricos de RH.",
  },
  {
    title: "Governança por escopo",
    description:
      "Acesso hierárquico por rede, unidade, setor e escala, com papéis claros e auditáveis.",
  },
];

export default function SobrePage() {
  return (
    <>
      <section className="bg-hero-grid text-white">
        <Container className="section-pad !pb-16 !pt-20">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-nc-green">
            Sobre a NoraCare
          </p>
          <h1 className="mt-4 max-w-3xl text-balance text-4xl font-bold tracking-tight sm:text-5xl">
            Tecnologia para quem organiza o cuidado 24 horas por dia
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/75">
            Nascemos para resolver a complexidade real de escalas hospitalares:
            múltiplos perfis, unidades, regras de ponto e pressão por
            cobertura — sem planilhas soltas nem apps desconectados.
          </p>
        </Container>
      </section>

      <section className="section-pad bg-white">
        <Container className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-nc-navy">
              Nossa missão
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
              Dar às redes de saúde uma operação de plantões transparente,
              auditável e humana — onde gestores enxergam a rede, coordenadores
              resolvem o dia a dia e profissionais têm clareza sobre plantões,
              ponto e remuneração.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
              O produto combina admin web e app mobile, com segurança,
              permissões hierárquicas e relatórios que fecham o ciclo entre
              operação e financeiro.
            </p>
          </div>

          <div className="rounded-3xl border border-border bg-background p-7 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-nc-blue">
              Em números de produto
            </p>
            <ul className="mt-5 space-y-4 text-sm text-muted">
              <li className="flex justify-between gap-4 border-b border-border pb-3">
                <span>Perfis suportados</span>
                <strong className="text-nc-navy">
                  Master, gestor, coordenador, profissional, visualizador
                </strong>
              </li>
              <li className="flex justify-between gap-4 border-b border-border pb-3">
                <span>Estrutura org.</span>
                <strong className="text-nc-navy">Rede → Local → Setor → Escala</strong>
              </li>
              <li className="flex justify-between gap-4 border-b border-border pb-3">
                <span>Canais</span>
                <strong className="text-nc-navy">Web admin + app</strong>
              </li>
              <li className="flex justify-between gap-4">
                <span>Foco</span>
                <strong className="text-nc-navy">Brasil · saúde · plantões</strong>
              </li>
            </ul>
          </div>
        </Container>
      </section>

      <section className="section-pad bg-mesh-light">
        <Container>
          <h2 className="text-center text-3xl font-bold tracking-tight text-nc-navy">
            O que nos guia
          </h2>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {values.map((value) => (
              <article
                key={value.title}
                className="rounded-3xl border border-border bg-white p-7 shadow-[var(--shadow-card)]"
              >
                <div className="h-1.5 w-10 rounded-full bg-nc-green" />
                <h3 className="mt-5 text-xl font-bold text-nc-navy">
                  {value.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {value.description}
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
