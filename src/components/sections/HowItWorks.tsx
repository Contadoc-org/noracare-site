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

        <ol className="mt-14 grid gap-5 sm:mt-16 lg:grid-cols-3 lg:gap-6">
          {steps.map((item, index) => (
            <li key={item.step} className="card relative p-7 lg:p-8">
              {index < steps.length - 1 ? (
                <>
                  <span
                    aria-hidden
                    className="pointer-events-none absolute top-14 -right-6 hidden h-px w-6 bg-linear-to-r from-nc-teal to-nc-blue/40 lg:block"
                  />
                  <span
                    aria-hidden
                    className="pointer-events-none absolute left-[3.25rem] -bottom-5 h-5 w-px bg-border lg:hidden"
                  />
                </>
              ) : null}
              <span className="relative z-10 inline-flex size-12 items-center justify-center rounded-2xl bg-linear-to-br from-nc-navy to-nc-blue font-mono text-sm font-semibold text-nc-green shadow-[0_10px_24px_-12px_rgb(32_58_186/0.8)]">
                {item.step}
              </span>
              <h3 className="h-card mt-6">{item.title}</h3>
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-body">
                {item.description}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
