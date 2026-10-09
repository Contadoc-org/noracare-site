"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navLinks, siteConfig } from "@/lib/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { IconClose, IconMenu } from "@/components/icons";

function isActive(pathname: string, href: string) {
  if (href.includes("#")) return false;
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="on-dark sticky top-0 z-50 border-b border-white/[0.08] bg-nc-night/85 backdrop-blur-xl supports-[backdrop-filter]:bg-nc-night/70">
      <Container className="flex h-16 items-center justify-between gap-4 lg:h-[4.5rem]">
        <Link
          href="/"
          className="-m-2.5 flex items-center rounded-lg p-2.5"
          aria-label={`${siteConfig.name}, página inicial`}
        >
          <Image
            src="/logo-light.svg"
            alt=""
            width={195}
            height={28}
            preload
            className="h-6 w-auto sm:h-7"
          />
        </Link>

        <nav className="hidden lg:block" aria-label="Principal">
          <ul className="flex items-center gap-1 rounded-full border border-white/[0.08] bg-white/[0.03] p-1">
            {navLinks.map((link) => {
              const active = isActive(pathname, link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={`inline-flex h-9 items-center rounded-full px-4 text-sm font-medium transition ${
                      active
                        ? "bg-white/[0.1] text-white"
                        : "text-white/70 hover:bg-white/[0.06] hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Button
            href={siteConfig.appUrl}
            variant="ghost"
            size="sm"
            target="_blank"
            rel="noopener noreferrer"
          >
            Entrar
          </Button>
          <Button href="/contato" variant="primary" size="sm">
            Falar com vendas
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-full text-white ring-1 ring-white/15 transition ring-inset hover:bg-white/[0.06] lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <IconClose /> : <IconMenu />}
        </button>
      </Container>

      {open ? (
        <div
          id="mobile-nav"
          className="absolute inset-x-0 top-full max-h-[calc(100dvh-4rem)] overflow-y-auto border-b border-white/[0.08] bg-nc-night shadow-panel lg:hidden"
        >
          <Container className="py-4">
            <nav aria-label="Principal (celular)">
              <ul className="flex flex-col">
                {navLinks.map((link) => {
                  const active = isActive(pathname, link.href);
                  return (
                    <li key={link.href} className="border-b border-white/[0.06] last:border-0">
                      <Link
                        href={link.href}
                        aria-current={active ? "page" : undefined}
                        className={`flex min-h-13 items-center rounded-lg px-2 text-base font-medium ${
                          active ? "text-nc-green" : "text-white/90 hover:text-white"
                        }`}
                        onClick={() => setOpen(false)}
                      >
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
            <div className="mt-4 grid gap-2 pb-2 sm:grid-cols-2">
              <Button
                href={siteConfig.appUrl}
                variant="ghost"
                size="lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                Entrar no app
              </Button>
              <Button href="/contato" variant="primary" size="lg" onClick={() => setOpen(false)}>
                Falar com vendas
              </Button>
            </div>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
