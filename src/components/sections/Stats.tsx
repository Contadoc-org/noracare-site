import { Container } from "@/components/ui/Container";
import { stats } from "@/lib/site";

export function Stats() {
  return (
    <section className="border-y border-border bg-white">
      <Container className="grid grid-cols-2 gap-6 py-12 lg:grid-cols-4 lg:gap-8">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center lg:text-left">
            <p className="text-2xl font-bold tracking-tight text-nc-blue sm:text-3xl">
              {stat.value}
            </p>
            <p className="mt-1 text-sm text-muted">{stat.label}</p>
          </div>
        ))}
      </Container>
    </section>
  );
}
