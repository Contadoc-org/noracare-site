import { DownloadApp } from "@/components/DownloadApp";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { IconArrowRight, IconCheck } from "@/components/icons";
import { siteConfig } from "@/lib/site";

const highlights = [
  "Escalas mensais e semanais",
  "Check-in com biometria e geo",
  "Relatórios financeiros auditáveis",
];

const schedule = [
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
] as const;

/** Barra lateral e selo de cada tipo de plantão. */
const tones = {
  green: { bar: "bg-nc-green", chip: "chip-green" },
  blue: { bar: "bg-nc-malibu", chip: "chip-blue" },
  amber: { bar: "bg-amber-300", chip: "chip-amber" },
} as const;

const kpis = [
  { label: "Cobertura", value: "98%" },
  { label: "Pontualidade", value: "96%" },
  { label: "Trocas", value: "12" },
] as const;

export function Hero() {
  return (
    <section className="surface-dark relative overflow-hidden">
      <div aria-hidden className="grid-lines" />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-0 h-[30rem] w-full max-w-[34rem] rounded-full bg-nc-blue/40 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-0 top-1/3 h-72 w-full max-w-[22rem] rounded-full bg-nc-green/10 blur-[110px]"
      />

      {/* pb grande de propósito: a faixa Stats sobe sobre o hero. */}
      <Container className="relative grid items-center gap-14 pt-16 pb-28 sm:pt-24 sm:pb-36 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:pt-28 lg:pb-44">
        <div>
          <p className="eyebrow animate-in">Plataforma para saúde</p>

          <h1
            className="h-display mt-6 max-w-2xl animate-in"
            style={{ animationDelay: "60ms" }}
          >
            Gestão de plantões com clareza, controle e{" "}
            <span className="text-gradient">confiança</span>
          </h1>

          <p
            className="text-lead mt-6 max-w-xl animate-in"
            style={{ animationDelay: "120ms" }}
          >
            {siteConfig.description}
          </p>

          <div
            className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center animate-in"
            style={{ animationDelay: "180ms" }}
          >
            <Button
              href="/contato"
              variant="primary"
              size="lg"
              className="w-full sm:w-auto"
            >
              Agendar demonstração
              <IconArrowRight />
            </Button>
            <Button
              href="/produto"
              variant="ghost"
              size="lg"
              className="w-full sm:w-auto"
            >
              Conhecer o produto
            </Button>
          </div>

          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
            {highlights.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 text-sm text-white/75"
              >
                <span
                  aria-hidden
                  className="inline-flex size-5 items-center justify-center rounded-full bg-nc-green/15 text-nc-green"
                >
                  <IconCheck className="h-3 w-3" />
                </span>
                {item}
              </li>
            ))}
          </ul>

          <DownloadApp className="mt-10" />
        </div>

        <div
          className="relative animate-in"
          style={{ animationDelay: "220ms" }}
        >
          <div
            aria-hidden
            className="absolute -inset-4 rounded-[2.25rem] bg-linear-to-br from-nc-green/20 via-nc-blue/10 to-nc-malibu/20 blur-2xl"
          />
          <div className="relative overflow-hidden rounded-panel border border-white/12 bg-nc-dark/60 shadow-panel backdrop-blur-xl">
            <div
              aria-hidden
              className="flex items-center gap-1.5 border-b border-white/[0.08] px-5 py-3"
            >
              <span className="size-2.5 rounded-full bg-white/15" />
              <span className="size-2.5 rounded-full bg-white/15" />
              <span className="size-2.5 rounded-full bg-white/15" />
            </div>

            <div className="p-5 sm:p-6">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-nc-green">
                    Painel operacional
                  </p>
                  <p className="mt-1 text-lg font-semibold text-white">
                    Escala da semana
                  </p>
                </div>
                <span className="chip chip-green">
                  <span aria-hidden className="relative flex size-1.5">
                    <span className="absolute inline-flex size-full rounded-full bg-nc-green opacity-75 motion-safe:animate-ping" />
                    <span className="relative inline-flex size-1.5 rounded-full bg-nc-green" />
                  </span>
                  Ao vivo
                </span>
              </div>

              <div className="mt-5 space-y-2.5">
                {schedule.map((item) => (
                  <div
                    key={item.title}
                    className="flex items-stretch gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.03] p-4 transition hover:bg-white/[0.06]"
                  >
                    <span
                      aria-hidden
                      className={`w-1 shrink-0 rounded-full ${tones[item.tone].bar}`}
                    />
                    {/* Celular: selo abaixo do título (o .chip não quebra linha). */}
                    <div className="flex min-w-0 flex-1 flex-col items-start gap-2 sm:flex-row sm:justify-between sm:gap-3">
                      <div className="min-w-0">
                        <p className="text-[0.9375rem] font-semibold text-white">
                          {item.title}
                        </p>
                        <p className="mt-1 font-mono text-xs text-white/60">
                          {item.meta}
                        </p>
                      </div>
                      <span className={`chip ${tones[item.tone].chip}`}>
                        {item.badge}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-5 grid grid-cols-3 gap-2 sm:gap-3">
                {kpis.map((kpi) => (
                  <div
                    key={kpi.label}
                    className="rounded-xl border border-white/[0.08] bg-white/[0.03] px-2 py-3 sm:px-3"
                  >
                    <p className="font-mono text-lg font-semibold text-nc-green sm:text-xl">
                      {kpi.value}
                    </p>
                    <p className="mt-0.5 text-[11px] text-white/60">
                      {kpi.label}
                    </p>
                    {kpi.value.endsWith("%") ? (
                      <div
                        aria-hidden
                        className="mt-2 h-1 overflow-hidden rounded-full bg-white/10"
                      >
                        <div
                          className="h-full rounded-full bg-linear-to-r from-nc-green to-nc-malibu"
                          style={{ width: kpi.value }}
                        />
                      </div>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
