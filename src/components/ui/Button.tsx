import Link from "next/link";
import type { ButtonHTMLAttributes, MouseEventHandler, ReactNode } from "react";

/**
 * primary       verde da marca (CTA principal, funciona no claro e no escuro)
 * secondary     azul sólido (CTA em fundo claro)
 * ghost         translúcido para fundo escuro
 * outline-light branco com borda para fundo claro
 */
type Variant = "primary" | "secondary" | "ghost" | "outline-light";
/** sm só no cabeçalho desktop (40px); md/lg têm ≥44px de alvo de toque. */
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  primary:
    "bg-nc-green text-nc-navy shadow-[0_8px_24px_-10px_rgb(146_224_205/0.75),inset_0_1px_0_0_rgb(255_255_255/0.45)] hover:bg-[#a8e9d9] hover:shadow-glow",
  secondary:
    "bg-nc-blue text-white shadow-[0_8px_24px_-12px_rgb(32_58_186/0.7),inset_0_1px_0_0_rgb(255_255_255/0.15)] hover:bg-nc-blue-bright",
  ghost:
    "bg-white/[0.06] text-white ring-1 ring-white/15 ring-inset backdrop-blur-sm hover:bg-white/[0.12] hover:ring-white/25",
  "outline-light":
    "bg-white text-nc-navy ring-1 ring-border-strong ring-inset shadow-xs hover:bg-surface-muted hover:ring-nc-blue/30",
};

const sizes: Record<Size, string> = {
  sm: "h-10 px-4 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-[0.9375rem]",
};

const base =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-semibold tracking-[-0.01em] transition duration-200 active:translate-y-px disabled:pointer-events-none disabled:opacity-60 [&_svg]:shrink-0 [&_svg]:transition-transform hover:[&_svg]:translate-x-0.5";

type ButtonProps = {
  children: ReactNode;
  className?: string;
  variant?: Variant;
  size?: Size;
  href?: string;
  target?: string;
  rel?: string;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
};

export function Button({
  children,
  className = "",
  variant = "primary",
  size = "md",
  href,
  target,
  rel,
  type = "button",
  disabled,
  onClick,
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`.trim();

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        target={target}
        rel={rel}
        onClick={onClick as MouseEventHandler<HTMLAnchorElement> | undefined}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled}
      onClick={onClick as MouseEventHandler<HTMLButtonElement> | undefined}
    >
      {children}
    </button>
  );
}
