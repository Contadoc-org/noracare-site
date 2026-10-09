import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  as?: "h1" | "h2";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  as: Title = "h2",
  className = "",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "mx-auto text-center items-center" : "items-start text-left";

  return (
    <div
      className={`flex max-w-3xl flex-col ${alignClass} ${className}`.trim()}
    >
      {eyebrow ? <p className="eyebrow mb-5">{eyebrow}</p> : null}
      <Title className={Title === "h1" ? "h-display" : "h-section"}>{title}</Title>
      {description ? (
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-body sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
