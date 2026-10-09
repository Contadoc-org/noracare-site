import type { Metadata } from "next";
import Link from "next/link";
import { IconClock } from "@/components/icons";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacidade",
  description: `Política de privacidade do site institucional ${siteConfig.name}.`,
  alternates: { canonical: "/privacidade" },
  robots: { index: true, follow: true },
};

export default function PrivacidadePage() {
  return (
    <>
      <PageHero size="sm" eyebrow="Legal" title="Política de privacidade">
        <p className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.05] px-3 py-1.5 font-mono text-xs text-white/75">
          <IconClock className="h-3.5 w-3.5" />
          Última atualização: 31 de julho de 2026
        </p>
      </PageHero>

      <section className="bg-white py-14 sm:py-20">
        <Container size="sm">
          <div className="prose-nc break-words">
            <p>
              Esta página descreve como o site institucional{" "}
              <strong>{siteConfig.url}</strong> trata informações quando você
              navega ou entra em contato conosco.
            </p>

            <h2>1. Quem somos</h2>
            <p>
              O site é operado pela {siteConfig.name}. Para questões de
              privacidade, contate{" "}
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
            </p>

            <h2>2. Dados que podemos receber</h2>
            <ul>
              <li>
                Dados enviados voluntariamente no formulário de contato (nome,
                e-mail, organização e mensagem).
              </li>
              <li>
                Dados técnicos de navegação coletados automaticamente por
                infraestrutura e ferramentas de analytics, se habilitadas (IP,
                user-agent, páginas visitadas).
              </li>
            </ul>

            <h2>3. Finalidade</h2>
            <p>
              Usamos as informações para responder solicitações comerciais e de
              suporte, melhorar o site e cumprir obrigações legais aplicáveis.
            </p>

            <h2>4. Compartilhamento</h2>
            <p>
              Não vendemos dados pessoais. Podemos compartilhar informações com
              prestadores que operam infraestrutura (hospedagem, e-mail) sob
              contrato, ou quando exigido por lei.
            </p>

            <h2>5. Retenção</h2>
            <p>
              Mensagens de contato são retidas pelo tempo necessário para
              atendimento e registro comercial legítimo, salvo pedido de exclusão
              ou obrigação legal em contrário.
            </p>

            <h2>6. Seus direitos</h2>
            <p>
              Nos termos da LGPD, você pode solicitar acesso, correção, exclusão
              ou informações sobre o tratamento dos seus dados pelo e-mail acima.
            </p>

            <h2>7. Produto NoraCare</h2>
            <p>
              O tratamento de dados no aplicativo e na plataforma operacional
              {` `}({siteConfig.appUrl}) está descrito na{" "}
              <Link href="/privacidade-app">Política de privacidade do app</Link>
              , além dos contratos com cada cliente contratante. Para excluir
              conta e dados pessoais, veja{" "}
              <Link href="/exclusao-de-dados">Exclusão de dados</Link>.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
