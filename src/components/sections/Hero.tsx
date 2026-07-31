import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { IconArrowRight, IconCheck } from "@/components/icons";
import { siteConfig } from "@/lib/site";

const highlights = [
  "Escalas mensais e semanais",
  "Check-in com biometria e geo",
  "Relatórios financeiros auditáveis",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-hero-grid text-white">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse at center, black 20%, transparent 75%)",
        }}
      />

      <Container className="relative grid items-center gap-12 py-20 sm:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:py-28">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-white/8 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-nc-green ring-1 ring-white/12">
            Plataforma para saúde
          </div>

          <h1 className="mt-6 max-w-xl text-balance text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.35rem]">
            Operação de plantões com clareza, controle e{" "}
            <span className="bg-gradient-to-r from-nc-green to-nc-malibu bg-clip-text text-transparent">
              confiança
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
            {siteConfig.description}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href="/contato" variant="primary" size="lg">
              Agendar demonstração
              <IconArrowRight />
            </Button>
            <Button href="/produto" variant="ghost" size="lg">
              Conhecer o produto
            </Button>
          </div>

          <ul className="mt-10 grid gap-3 sm:grid-cols-1">
            {highlights.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2.5 text-sm text-white/80"
              >
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-nc-green/15 text-nc-green">
                  <IconCheck className="h-3.5 w-3.5" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-nc-green/20 via-transparent to-nc-malibu/20 blur-2xl" />
          <div className="relative overflow-hidden rounded-[1.75rem] border border-white/12 bg-white/6 p-5 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.55)] backdrop-blur-md sm:p-6">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.16em] text-nc-green">
                  Painel operacional
                </p>
                <p className="mt-1 text-lg font-semibold">Escala da semana</p>
              </div>
              <span className="rounded-full bg-nc-green/15 px-3 py-1 text-xs font-semibold text-nc-green">
                Ao vivo
              </span>
            </div>

            <div className="space-y-3">
              {[
                {
                  title: "UTI 1 · Plantão noturno",
                  meta: "19:00 – 07:00 · Confirmado",
                  badge: "Check-in OK",
                  tone: "green",
                },
                {
                  title: "Pronto Socorro · Diurno",
                  meta: "07:00 – 19:00 · Anunciado",
                  badge: "3 interessados",
                  tone: "blue",
                },
                {
                  title: "Centro Cirúrgico · Extra",
                  meta: "Troca pendente de aprovação",
                  badge: "Revisão",
                  tone: "amber",
                },
              ].map((card) => (
                <div
                  key={card.title}
                  className="rounded-2xl border border-white/10 bg-nc-navy/55 p-4"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="font-semibold text-white">{card.title}</p>
                      <p className="mt-1 text-sm text-white/60">{card.meta}</p>
                    </div>
                    <span
                      className={
                        card.tone === "green"
                          ? "rounded-full bg-nc-green/15 px-2.5 py-1 text-[11px] font-semibold text-nc-green"
                          : card.tone === "blue"
                            ? "rounded-full bg-nc-malibu/15 px-2.5 py-1 text-[11px] font-semibold text-nc-malibu"
                            : "rounded-full bg-amber-400/15 px-2.5 py-1 text-[11px] font-semibold text-amber-200"
                      }
                    >
                      {card.badge}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5 grid grid-cols-3 gap-3">
              {[
                { label: "Cobertura", value: "98%" },
                { label: "Pontualidade", value: "96%" },
                { label: "Trocas", value: "12" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl bg-white/6 px-3 py-3 text-center ring-1 ring-white/8"
                >
                  <p className="text-lg font-bold text-nc-green">{stat.value}</p>
                  <p className="mt-0.5 text-[11px] text-white/55">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
