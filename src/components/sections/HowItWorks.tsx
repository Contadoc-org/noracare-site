import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { steps } from "@/lib/site";

export function HowItWorks() {
  return (
    <section className="section-pad bg-white">
      <Container>
        <SectionHeading
          eyebrow="Como funciona"
          title="Do cadastro da rede à operação do plantão"
          description="Uma jornada simples para colocar a operação no ar sem fricção, com governança desde o primeiro dia."
        />

        <ol className="mt-14 grid gap-6 lg:grid-cols-3">
          {steps.map((item, index) => (
            <li
              key={item.step}
              className="relative rounded-3xl border border-border bg-background p-7"
            >
              {index < steps.length - 1 ? (
                <span className="pointer-events-none absolute right-[-0.85rem] top-1/2 hidden h-px w-6 bg-gradient-to-r from-nc-green to-transparent lg:block" />
              ) : null}
              <span className="inline-flex h-10 items-center rounded-full bg-nc-navy px-3 text-sm font-bold text-nc-green">
                {item.step}
              </span>
              <h3 className="mt-5 text-xl font-bold text-nc-navy">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {item.description}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
