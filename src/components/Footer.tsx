import Image from "next/image";
import Link from "next/link";
import { navLinks, siteConfig } from "@/lib/site";
import { Container } from "@/components/ui/Container";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-nc-navy text-white">
      <Container className="section-pad !py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Image
              src="/logo-light.svg"
              alt={siteConfig.name}
              width={160}
              height={30}
              className="h-8 w-auto"
            />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70">
              {siteConfig.tagline}. Plataforma feita para redes hospitalares e
              equipes de saúde que precisam de operação previsível e auditável.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-nc-green">
              Navegação
            </p>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/75 transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/privacidade"
                  className="text-sm text-white/75 transition hover:text-white"
                >
                  Privacidade
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-nc-green">
              Contato
            </p>
            <ul className="mt-4 space-y-2.5 text-sm text-white/75">
              <li>
                <a
                  href={`mailto:${siteConfig.commercialEmail}`}
                  className="hover:text-white"
                >
                  {siteConfig.commercialEmail}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-white"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.appUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  Acessar o app
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.legalName}. Todos os direitos reservados.
          </p>
          <p>institucional.noracare.com.br</p>
        </div>
      </Container>
    </footer>
  );
}
