import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { IconArrowRight } from "@/components/icons";
import { siteConfig } from "@/lib/site";

export function CTA() {
  return (
    <section className="section-pad bg-mesh-light">
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] bg-hero-grid px-6 py-12 text-white sm:px-10 sm:py-14 lg:px-14">
          <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-nc-green/20 blur-3xl" />
          <div className="absolute -bottom-20 left-10 h-56 w-56 rounded-full bg-nc-malibu/20 blur-3xl" />

          <div className="relative max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-nc-green">
              Próximo passo
            </p>
            <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              Leve a operação de plantões da sua rede para o próximo nível
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/75 sm:text-lg">
              Conte-nos sobre a estrutura da sua rede hospitalar. Nossa equipe
              prepara uma demonstração sob medida.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/contato" variant="primary" size="lg">
                Solicitar demonstração
                <IconArrowRight />
              </Button>
              <Button
                href={siteConfig.appUrl}
                variant="ghost"
                size="lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                Já sou cliente
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
