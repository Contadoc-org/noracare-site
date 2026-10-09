import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";

type PageHeroProps = {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  /** Botões, data de atualização etc., abaixo da descrição. */
  children?: ReactNode;
  /** md = páginas de produto/sobre/contato; sm = páginas legais (mais compacto). */
  size?: "sm" | "md";
  /** Espaço extra no rodapé do hero para um cartão "subir" sobre ele (ex.: -mt-16 no conteúdo seguinte). */
  overlap?: boolean;
};

/** Faixa escura de abertura das páginas internas (h1 da página). */
export function PageHero({
  eyebrow,
  title,
  description,
  children,
  size = "md",
  overlap = false,
}: PageHeroProps) {
  const pad =
    size === "sm"
      ? "pt-14 pb-12 sm:pt-20 sm:pb-16"
      : "pt-16 pb-16 sm:pt-24 sm:pb-20 lg:pt-28 lg:pb-24";
  const titleClass =
    size === "sm"
      ? "font-display text-[2.25rem] leading-[1.08] font-extrabold tracking-[-0.035em] text-balance text-heading sm:text-5xl"
      : "h-display";

  return (
    <section className="surface-dark relative overflow-hidden">
      <div aria-hidden className="grid-lines" />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 right-0 h-[26rem] w-full max-w-[26rem] rounded-full bg-nc-blue/35 blur-[110px]"
      />
      <Container className={`relative ${pad} ${overlap ? "pb-28! sm:pb-36! lg:pb-40!" : ""}`}>
        <p className="eyebrow animate-in">{eyebrow}</p>
        <h1 className={`mt-5 max-w-4xl animate-in ${titleClass}`} style={{ animationDelay: "60ms" }}>
          {title}
        </h1>
        {description ? (
          <p className="text-lead mt-6 max-w-2xl animate-in" style={{ animationDelay: "120ms" }}>
            {description}
          </p>
        ) : null}
        {children ? (
          <div className="mt-8 animate-in" style={{ animationDelay: "180ms" }}>
            {children}
          </div>
        ) : null}
      </Container>
      <div aria-hidden className="hairline absolute inset-x-0 bottom-0" />
    </section>
  );
}
