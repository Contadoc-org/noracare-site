import { HelpNav } from "@/components/help/HelpNav";
import { Container } from "@/components/ui/Container";

export default function HelpLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-mesh-light">
      <Container className="max-w-7xl! px-5 py-10 sm:px-8 lg:grid lg:grid-cols-[16rem_1fr] lg:gap-10 lg:px-10 lg:py-14">
        <details className="mb-8 rounded-2xl border border-border bg-white p-4 lg:hidden">
          <summary className="cursor-pointer font-semibold text-nc-navy">
            Todos os artigos
          </summary>
          <div className="mt-4">
            <HelpNav />
          </div>
        </details>
        <aside className="hidden lg:block">
          <div className="sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto pb-6 pr-2">
            <HelpNav />
          </div>
        </aside>
        <div className="min-w-0">{children}</div>
      </Container>
    </div>
  );
}
