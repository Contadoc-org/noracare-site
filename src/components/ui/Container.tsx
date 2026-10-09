import type { ReactNode } from "react";

/** sm = texto longo (legal), md = padrão do site, lg = central de ajuda. */
type Size = "sm" | "md" | "lg";

const sizes: Record<Size, string> = {
  sm: "max-w-3xl",
  md: "max-w-[76rem]",
  lg: "max-w-[90rem]",
};

type ContainerProps = {
  children: ReactNode;
  className?: string;
  size?: Size;
  as?: "div" | "section" | "header" | "footer" | "main";
};

/** Largura máxima + respiro lateral (px-5 / sm:px-8). Não passe px-* em className. */
export function Container({
  children,
  className = "",
  size = "md",
  as: Tag = "div",
}: ContainerProps) {
  return (
    <Tag className={`mx-auto w-full px-5 sm:px-8 ${sizes[size]} ${className}`.trim()}>
      {children}
    </Tag>
  );
}
