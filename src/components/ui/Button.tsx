import Link from "next/link";
import type { ButtonHTMLAttributes, MouseEventHandler, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "outline-light";
type Size = "md" | "lg";

const variants: Record<Variant, string> = {
  primary:
    "bg-nc-green text-nc-navy hover:bg-nc-green-strong shadow-[0_10px_30px_-12px_rgba(146,224,205,0.75)]",
  secondary:
    "bg-nc-blue text-white hover:bg-nc-blue-bright shadow-[0_10px_30px_-14px_rgba(32,58,186,0.65)]",
  ghost:
    "bg-white/10 text-white ring-1 ring-white/20 hover:bg-white/15 backdrop-blur-sm",
  "outline-light":
    "bg-white text-nc-navy ring-1 ring-border hover:bg-surface-muted",
};

const sizes: Record<Size, string> = {
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-base",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-tight transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nc-green focus-visible:ring-offset-2 focus-visible:ring-offset-nc-navy disabled:opacity-60";

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

function cx(variant: Variant, size: Size, className: string) {
  return `${base} ${variants[variant]} ${sizes[size]} ${className}`.trim();
}

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
  const classes = cx(variant, size, className);

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
