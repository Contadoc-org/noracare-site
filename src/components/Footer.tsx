import Image from "next/image";
import Link from "next/link";
import { legalLinks, navLinks, siteConfig } from "@/lib/site";
import { Container } from "@/components/ui/Container";

const linkClass =
  "inline-flex min-h-11 items-center rounded text-sm text-white/70 transition hover:text-white sm:min-h-0 sm:py-1";
const headingClass =
  "font-mono text-[0.6875rem] font-medium tracking-[0.16em] text-nc-green uppercase";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="surface-dark relative overflow-hidden">
      <div aria-hidden className="hairline absolute inset-x-0 top-0" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-[12%] -bottom-40 h-72 rounded-full bg-nc-blue/25 blur-[120px]"
      />

      <Container className="relative pt-16 pb-10 sm:pt-20">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 sm:gap-10 lg:grid-cols-[1.5fr_1fr_1fr_1.3fr] lg:gap-12">
          <div className="col-span-2 sm:col-span-3 lg:col-span-1">
            <Image
              src="/logo-light.svg"
              alt={siteConfig.name}
              width={210}
              height={30}
              className="h-8 w-auto"
            />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/70">
              {siteConfig.tagline}. Plataforma feita para redes hospitalares e
              equipes de saúde que precisam de operação previsível e auditável.
            </p>
          </div>

          <div>
            <p className={headingClass}>Navegação</p>
            <ul className="mt-3 sm:mt-4 sm:space-y-1.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={linkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className={headingClass}>Legal</p>
            <ul className="mt-3 sm:mt-4 sm:space-y-1.5">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={linkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Celular: Contato (e-mail longo) ocupa a linha toda, abaixo de Navegação | Legal. */}
          <div className="col-span-2 sm:col-span-1">
            <p className={headingClass}>Contato</p>
            <ul className="mt-3 sm:mt-4 sm:space-y-1.5">
              <li>
                <a
                  href={siteConfig.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  WhatsApp {siteConfig.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.email}`} className={`${linkClass} break-all`}>
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.appUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  Acessar o app
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-white/[0.08] pt-6 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.legalName}. Todos os direitos reservados.
          </p>
          <p className="font-mono tracking-wide">{siteConfig.host}</p>
        </div>
      </Container>
    </footer>
  );
}
