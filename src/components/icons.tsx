type IconProps = {
  className?: string;
};

export function IconCalendar({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M8 3v3M16 3v3M4.5 9h15M6 5.5h12A1.5 1.5 0 0 1 19.5 7v12A1.5 1.5 0 0 1 18 20.5H6A1.5 1.5 0 0 1 4.5 19V7A1.5 1.5 0 0 1 6 5.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M8.5 13h2M13.5 13h2M8.5 16.5h2M13.5 16.5h2"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function IconShield({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 3.5 19 6.2v5.3c0 4.3-2.8 7.3-7 8.8-4.2-1.5-7-4.5-7-8.8V6.2L12 3.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="m9.2 12.2 1.9 1.9 3.9-4.1"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconSwap({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M7 8h11l-2.5-2.5M17 16H6l2.5 2.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconHierarchy({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="9" y="3.5" width="6" height="4.5" rx="1.2" stroke="currentColor" strokeWidth="1.6" />
      <rect x="3.5" y="16" width="6" height="4.5" rx="1.2" stroke="currentColor" strokeWidth="1.6" />
      <rect x="14.5" y="16" width="6" height="4.5" rx="1.2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 8v3.5m0 0H6.5V16m5.5-4.5H17.5V16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function IconChart({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M4.5 19.5h15M7 16.5V10M12 16.5V7M17 16.5v-4.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function IconUsers({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="9" cy="9" r="3" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M3.8 18.5c.7-2.5 2.7-3.8 5.2-3.8s4.5 1.3 5.2 3.8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <circle cx="16.5" cy="9.2" r="2.3" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M15.2 14.7c1.7.2 3.2 1.1 3.9 2.9"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function IconMenu({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function IconClose({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="m7 7 10 10M17 7 7 17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function IconArrowRight({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconCheck({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="m5.5 12.5 4.2 4.2 8.8-9.4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* Traço 1.6–1.8, viewBox 24, aria-hidden: puramente decorativos. */
function Stroke({ className, children }: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      {children}
    </svg>
  );
}

export function IconChevronDown({ className = "h-5 w-5" }: IconProps) {
  return <Stroke className={className}><path d="m6 9 6 6 6-6" /></Stroke>;
}

export function IconChevronRight({ className = "h-5 w-5" }: IconProps) {
  return <Stroke className={className}><path d="m9 6 6 6-6 6" /></Stroke>;
}

export function IconSearch({ className = "h-5 w-5" }: IconProps) {
  return <Stroke className={className}><circle cx="11" cy="11" r="6.5" /><path d="m16 16 4 4" /></Stroke>;
}

export function IconMail({ className = "h-5 w-5" }: IconProps) {
  return <Stroke className={className}><rect x="3.5" y="5.5" width="17" height="13" rx="2" /><path d="m4 7 8 6 8-6" /></Stroke>;
}

export function IconChat({ className = "h-5 w-5" }: IconProps) {
  return <Stroke className={className}><path d="M20 11.5a8 8 0 0 1-11.6 7.1L4 20l1.4-4.2A8 8 0 1 1 20 11.5Z" /></Stroke>;
}

export function IconDevice({ className = "h-5 w-5" }: IconProps) {
  return <Stroke className={className}><rect x="6.5" y="3" width="11" height="18" rx="2.5" /><path d="M10.5 18h3" /></Stroke>;
}

export function IconMonitor({ className = "h-5 w-5" }: IconProps) {
  return <Stroke className={className}><rect x="3" y="4" width="18" height="12" rx="2" /><path d="M9 20h6M12 16v4" /></Stroke>;
}

export function IconExternal({ className = "h-4 w-4" }: IconProps) {
  return <Stroke className={className}><path d="M14 4h6v6M20 4l-9 9M18 14v4.5A1.5 1.5 0 0 1 16.5 20h-11A1.5 1.5 0 0 1 4 18.5v-11A1.5 1.5 0 0 1 5.5 6H10" /></Stroke>;
}

export function IconClock({ className = "h-5 w-5" }: IconProps) {
  return <Stroke className={className}><circle cx="12" cy="12" r="8.5" /><path d="M12 7.5V12l3 2" /></Stroke>;
}

export function IconBook({ className = "h-5 w-5" }: IconProps) {
  return <Stroke className={className}><path d="M5 5.5A2.5 2.5 0 0 1 7.5 3H19v15H7.5A2.5 2.5 0 0 0 5 20.5v-15Z" /><path d="M5 20.5A2.5 2.5 0 0 1 7.5 18H19v3H7.5" /></Stroke>;
}

/* Logos das lojas: simplificados, preenchidos, sem imagem externa (bloco "Baixe o app"). */
export function IconApple({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" />
    </svg>
  );
}

export function IconGooglePlay({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden>
      <path fill="#00d7fe" d="M3.5 2.5v19L13 12z" />
      <path fill="#00f076" d="M3.5 2.5 13 12l2.6-2.85z" />
      <path fill="#ff3a44" d="M3.5 21.5 13 12l2.6 2.85z" />
      <path fill="#ffbc00" d="M15.6 9.15 20.8 12l-5.2 2.85L13 12z" />
    </svg>
  );
}

export const featureIcons = {
  calendar: IconCalendar,
  shield: IconShield,
  swap: IconSwap,
  hierarchy: IconHierarchy,
  chart: IconChart,
  users: IconUsers,
} as const;
