import { HelpNav } from "@/components/help/HelpNav";
import { IconBook, IconChevronDown } from "@/components/icons";
import { Container } from "@/components/ui/Container";

export default function HelpLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="surface-light">
      <Container
        size="lg"
        className="py-8 sm:py-10 lg:grid lg:grid-cols-[17rem_minmax(0,1fr)] lg:gap-12 lg:py-14"
      >
        {/* Sem overflow-hidden: cortaria o contorno de foco do resumo. */}
        <details className="group card mb-6 lg:hidden">
          <summary className="flex min-h-13 cursor-pointer list-none items-center justify-between gap-3 px-5 py-3 font-semibold text-heading [&::-webkit-details-marker]:hidden">
            <span className="inline-flex items-center gap-2.5">
              <IconBook className="h-5 w-5 text-nc-blue" />
              Todos os artigos
            </span>
            <IconChevronDown className="h-5 w-5 text-muted-soft transition-transform group-open:rotate-180" />
          </summary>
          <div className="border-t border-border p-4">
            <HelpNav searchId="help-search-mobile" />
          </div>
        </details>
        <aside className="hidden lg:block">
          <div className="sticky top-24 max-h-[calc(100dvh-7rem)] overflow-y-auto pr-2 pb-6 [scrollbar-width:thin]">
            <HelpNav />
          </div>
        </aside>
        <div className="min-w-0">{children}</div>
      </Container>
    </div>
  );
}
