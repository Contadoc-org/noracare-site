import { featureIcons } from "@/components/icons";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { features } from "@/lib/site";

export function Features() {
  return (
    <section id="solucoes" className="bg-mesh-light section-pad scroll-mt-20">
      <Container>
        <SectionHeading
          eyebrow="Soluções"
          title="Tudo que a operação de plantão precisa em um só lugar"
          description="Do anúncio do plantão ao relatório financeiro, com rastreabilidade e papéis bem definidos para cada perfil da rede."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = featureIcons[feature.icon];
            return (
              <article
                key={feature.id}
                className="group rounded-3xl border border-border bg-white p-6 shadow-[var(--shadow-card)] transition hover:-translate-y-0.5 hover:border-nc-green/40 hover:shadow-[var(--shadow-soft)]"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-nc-navy text-nc-green ring-1 ring-nc-navy/10 transition group-hover:bg-nc-blue">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-bold tracking-tight text-nc-navy">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {feature.description}
                </p>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
