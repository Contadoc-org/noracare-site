import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { IconArrowRight } from "@/components/icons";
import { siteConfig } from "@/lib/site";

export function CTA() {
  return (
    <section className="section-pad bg-white">
      <Container>
        <div className="surface-dark relative overflow-hidden rounded-panel px-6 py-14 text-center shadow-panel sm:px-12 sm:py-20">
          <div aria-hidden className="grid-lines" />
          <div
            aria-hidden
            className="pointer-events-none absolute -top-24 left-0 h-64 w-full max-w-[24rem] rounded-full bg-nc-green/20 blur-[100px]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-24 right-0 h-64 w-full max-w-[24rem] rounded-full bg-nc-blue/50 blur-[100px]"
          />

          <div className="relative mx-auto max-w-2xl">
            <p className="eyebrow">Próximo passo</p>
            <h2 className="h-section mt-5">
              Leve a operação de plantões da sua rede para o próximo nível
            </h2>
            <p className="text-lead mt-5">
              Conte-nos sobre a estrutura da sua rede hospitalar. Nossa equipe
              prepara uma demonstração sob medida.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Button
                href="/contato"
                variant="primary"
                size="lg"
                className="w-full sm:w-auto"
              >
                Solicitar demonstração
                <IconArrowRight />
              </Button>
              <Button
                href={siteConfig.appUrl}
                variant="ghost"
                size="lg"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
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
