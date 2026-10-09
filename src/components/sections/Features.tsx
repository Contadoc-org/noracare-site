import { Fragment } from "react";
import { IconCheck, IconChevronRight, IconSwap, IconUsers, featureIcons } from "@/components/icons";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { features } from "@/lib/site";

type FeatureId = (typeof features)[number]["id"];

/* Posição no grid de 6 colunas (lg). Em sm, escalas e acessos ocupam a linha toda. */
const colSpan: Record<FeatureId, string> = {
  escalas: "sm:col-span-2 lg:col-span-4",
  checkin: "lg:col-span-2",
  trocas: "lg:col-span-2",
  acessos: "sm:col-span-2 lg:col-span-4",
  relatorios: "lg:col-span-3",
  multiperfil: "lg:col-span-3",
};

/* Tons fixos da grade decorativa 7 x 3 (sem dado real). */
const week = [
  "bg-nc-blue/70",
  "bg-surface-muted",
  "bg-nc-blue/15",
  "bg-nc-blue/70",
  "bg-[#cdeee5]",
  "bg-surface-muted",
  "bg-nc-blue/15",
  "bg-nc-teal/70",
  "bg-nc-blue/70",
  "bg-surface-muted",
  "bg-nc-blue/15",
  "bg-nc-teal/70",
  "bg-[#cdeee5]",
  "bg-surface-muted",
  "bg-nc-blue/15",
  "bg-surface-muted",
  "bg-nc-blue/70",
  "bg-[#cdeee5]",
  "bg-nc-blue/15",
  "bg-nc-teal/70",
  "bg-nc-blue/70",
];

const levels = [
  { dot: "bg-nc-navy", bar: "w-12" },
  { dot: "bg-nc-blue", bar: "w-10" },
  { dot: "bg-nc-blue-bright", bar: "w-8" },
  { dot: "bg-nc-teal", bar: "w-6" },
];

const bars = [40, 55, 48, 70, 62, 80, 74, 90, 84, 100];

const avatars = [
  "from-nc-navy to-nc-blue",
  "from-nc-teal to-nc-green",
  "from-nc-blue to-nc-malibu",
  "from-[#7c8bd8] to-nc-blue-bright",
  "from-nc-green to-nc-malibu",
];

/* Mini-visuais decorativos: aria-hidden e sem texto. */
function Visual({ id }: { id: FeatureId }) {
  return (
    <div aria-hidden className="mt-auto pt-7">
      {id === "checkin" && (
        <div className="flex items-center gap-4">
          <div className="relative size-20 shrink-0">
            <span className="absolute inset-0 rounded-full border border-nc-teal/25" />
            <span className="absolute inset-3 rounded-full border border-nc-teal/25" />
            <span className="absolute inset-6 rounded-full border border-nc-teal/25" />
            <span className="absolute top-1/2 left-1/2 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-nc-teal shadow-[0_0_0_6px_rgb(14_124_107/0.15)]" />
          </div>
          <div className="min-w-0 flex-1 space-y-2">
            <div className="h-2 w-3/4 rounded-full bg-nc-teal/25" />
            <div className="h-2 w-1/2 rounded-full bg-nc-blue/15" />
          </div>
          <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-full bg-[#e1f6f0] text-nc-teal">
            <IconCheck className="h-4 w-4" />
          </span>
        </div>
      )}

      {id === "escalas" && (
        <div className="grid grid-cols-7 gap-1.5">
          {week.map((tone, i) => (
            <div key={i} className={`h-6 rounded-md sm:h-7 ${tone}`} />
          ))}
        </div>
      )}

      {id === "trocas" && (
        <div className="flex items-center gap-3">
          <div className="flex h-10 flex-1 items-center rounded-xl border border-border bg-surface-muted">
            <div className="m-3 h-2 w-2/3 rounded-full bg-nc-blue/25" />
          </div>
          <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-full bg-nc-blue text-white">
            <IconSwap className="h-4 w-4" />
          </span>
          <div className="flex h-10 flex-1 items-center rounded-xl border border-border bg-surface-muted">
            <div className="m-3 h-2 w-2/3 rounded-full bg-nc-blue/25" />
          </div>
        </div>
      )}

      {id === "acessos" && (
        <div className="flex items-center gap-1.5 sm:gap-2">
          {levels.map((level, i) => (
            <Fragment key={level.dot}>
              {i > 0 && <IconChevronRight className="h-4 w-4 shrink-0 text-muted-soft" />}
              <div className="inline-flex h-9 min-w-0 items-center gap-2 rounded-lg border border-border bg-white px-2.5 shadow-xs sm:px-3">
                <span className={`size-2 shrink-0 rounded-full ${level.dot}`} />
                <span className={`h-1.5 rounded-full bg-nc-blue/20 ${level.bar}`} />
              </div>
            </Fragment>
          ))}
        </div>
      )}

      {id === "relatorios" && (
        <div className="flex h-20 items-end gap-1.5">
          {bars.map((height, i) => (
            <div
              key={height}
              className={`flex-1 rounded-t-md bg-linear-to-t ${
                i === bars.length - 1 ? "from-nc-teal to-nc-green" : "from-nc-blue/70 to-nc-malibu/60"
              }`}
              style={{ height: `${height}%` }}
            />
          ))}
        </div>
      )}

      {id === "multiperfil" && (
        <div className="flex -space-x-2.5">
          {avatars.map((gradient) => (
            <span
              key={gradient}
              className={`size-10 rounded-full bg-linear-to-br ring-2 ring-white ${gradient}`}
            />
          ))}
          <span className="flex size-10 items-center justify-center rounded-full bg-surface-muted ring-2 ring-white">
            <IconUsers className="h-4 w-4 text-nc-blue" />
          </span>
        </div>
      )}
    </div>
  );
}

export function Features() {
  return (
    <section id="solucoes" className="surface-light section-pad">
      <Container>
        <SectionHeading
          eyebrow="Soluções"
          title="Tudo que a operação de plantão precisa em um só lugar"
          description="Do anúncio do plantão ao relatório financeiro, com rastreabilidade e papéis bem definidos para cada perfil da rede."
        />

        <div className="mt-14 grid gap-4 sm:mt-16 sm:grid-cols-2 lg:grid-cols-6 lg:gap-5">
          {features.map((feature) => {
            const Icon = featureIcons[feature.icon];
            return (
              <article
                key={feature.id}
                className={`card card-hover group flex min-w-0 flex-col overflow-hidden p-6 sm:p-7 ${colSpan[feature.id]}`}
              >
                <span className="icon-tile transition-transform duration-300 group-hover:scale-105">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="h-card mt-5">{feature.title}</h3>
                <p className="mt-2 max-w-md text-[0.9375rem] leading-relaxed text-body">
                  {feature.description}
                </p>
                <Visual id={feature.id} />
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
