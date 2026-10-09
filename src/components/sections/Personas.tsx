import { IconCalendar, IconChart, IconDevice } from "@/components/icons";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { personas } from "@/lib/site";

/* Ícone por posição: gestores, coordenadores, profissionais. */
const personaIcons = [IconChart, IconCalendar, IconDevice];

export function Personas() {
  return (
    <section className="surface-dark section-pad relative overflow-hidden">
      <div aria-hidden className="grid-lines" />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-0 h-80 w-full max-w-[30rem] rounded-full bg-nc-blue/30 blur-[120px]"
      />
      <Container className="relative">
        <SectionHeading
          eyebrow="Para cada perfil"
          title="Uma plataforma, múltiplas jornadas"
          description="Gestores enxergam a rede. Coordenadores operam o dia a dia. Profissionais cuidam dos plantões com autonomia."
        />

        <div className="mt-14 grid gap-5 sm:mt-16 lg:grid-cols-3">
          {personas.map((persona, index) => {
            const Icon = personaIcons[index];
            return (
              <article
                key={persona.title}
                className="card-dark card-hover relative overflow-hidden p-7 sm:p-8"
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-x-6 top-0 h-px bg-linear-to-r from-transparent via-nc-green/60 to-transparent"
                />
                <span className="icon-tile-soft">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="h-card mt-6">{persona.title}</h3>
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-body">
                  {persona.description}
                </p>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
