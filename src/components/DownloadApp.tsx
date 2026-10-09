import { IconApple, IconGooglePlay } from "@/components/icons";
import { Button } from "@/components/ui/Button";
import { appStores } from "@/lib/site";

/** Bloco "Baixe o app" com os links das lojas (produção). Usar em superfícies escuras. */
export function DownloadApp({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <p className="font-mono text-[0.6875rem] font-medium tracking-[0.16em] text-nc-green uppercase">
        Baixe o app
      </p>
      <p className="mt-2 max-w-md text-sm leading-relaxed text-body">
        Acesso híbrido: a gestão usa o navegador e também pode usar o app. Os
        profissionais usam só o app, no Android ou no iOS.
      </p>
      <div className="mt-4 flex flex-wrap gap-3">
        <Button
          href={appStores.appStoreUrl}
          variant="ghost"
          size="md"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Baixar na App Store (abre em nova aba)"
          className="w-full sm:w-auto"
        >
          <IconApple />
          Baixar na App Store
        </Button>
        <Button
          href={appStores.playStoreUrl}
          variant="ghost"
          size="md"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Disponível no Google Play (abre em nova aba)"
          className="w-full sm:w-auto"
        >
          <IconGooglePlay />
          Disponível no Google Play
        </Button>
      </div>
    </div>
  );
}
