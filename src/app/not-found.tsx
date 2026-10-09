import type { Metadata } from "next";
import { IconArrowRight } from "@/components/icons";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Página não encontrada",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <PageHero
      eyebrow="Erro 404"
      title="Página não encontrada"
      description="O endereço pode ter mudado ou não existe mais. Volte para o início ou procure na central de ajuda."
    >
      <div className="flex flex-col gap-3 sm:flex-row">
        <Button href="/" size="lg">
          Ir para o início
          <IconArrowRight />
        </Button>
        <Button href="/help" variant="ghost" size="lg">
          Central de ajuda
        </Button>
      </div>
    </PageHero>
  );
}
