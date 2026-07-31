import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { personas } from "@/lib/site";

export function Personas() {
  return (
    <section className="section-pad bg-nc-navy text-white">
      <Container>
        <SectionHeading
          light
          eyebrow="Para cada perfil"
          title="Uma plataforma, múltiplas jornadas"
          description="Gestores enxergam a rede. Coordenadores operam o dia a dia. Profissionais cuidam dos plantões com autonomia."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {personas.map((persona) => (
            <article
              key={persona.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm"
            >
              <div className="h-1.5 w-12 rounded-full bg-nc-green" />
              <h3 className="mt-5 text-xl font-bold">{persona.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/70">
                {persona.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
