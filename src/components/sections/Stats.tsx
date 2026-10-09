import { Container } from "@/components/ui/Container";
import { stats } from "@/lib/site";

/** Faixa de números que sobe sobre o fim do hero (margem negativa, sem fundo próprio). */
export function Stats() {
  return (
    <section className="relative z-10 -mt-20 sm:-mt-24 lg:-mt-28">
      <Container>
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-panel border border-border bg-border shadow-lift lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-surface px-5 py-6 sm:px-8 sm:py-8">
              <span
                aria-hidden
                className="mb-4 block h-1 w-8 rounded-full bg-linear-to-r from-nc-teal to-nc-blue"
              />
              <p className="font-display text-2xl font-bold tracking-[-0.03em] text-heading sm:text-3xl lg:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1.5 text-sm leading-snug text-body">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
