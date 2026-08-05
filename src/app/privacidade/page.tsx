import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacidade",
  description: `Política de privacidade do site institucional ${siteConfig.name}.`,
  alternates: { canonical: "/privacidade" },
  robots: { index: true, follow: true },
};

export default function PrivacidadePage() {
  return (
    <section className="section-pad bg-white">
      <Container className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-nc-blue">
          Legal
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-nc-navy">
          Política de privacidade
        </h1>
        <p className="mt-4 text-sm text-muted">
          Última atualização: 31 de julho de 2026
        </p>

        <div className="prose-nc mt-10 space-y-6 text-base leading-relaxed text-muted">
          <p>
            Esta página descreve como o site institucional{" "}
            <strong className="text-nc-navy">{siteConfig.url}</strong> trata
            informações quando você navega ou entra em contato conosco.
          </p>

          <h2 className="text-xl font-bold text-nc-navy">1. Quem somos</h2>
          <p>
            O site é operado pela {siteConfig.name}. Para questões de
            privacidade, contate{" "}
            <a
              className="font-semibold text-nc-blue hover:underline"
              href={`mailto:${siteConfig.email}`}
            >
              {siteConfig.email}
            </a>
            .
          </p>

          <h2 className="text-xl font-bold text-nc-navy">
            2. Dados que podemos receber
          </h2>
          <ul className="list-disc space-y-2 pl-5">
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

          <h2 className="text-xl font-bold text-nc-navy">3. Finalidade</h2>
          <p>
            Usamos as informações para responder solicitações comerciais e de
            suporte, melhorar o site e cumprir obrigações legais aplicáveis.
          </p>

          <h2 className="text-xl font-bold text-nc-navy">4. Compartilhamento</h2>
          <p>
            Não vendemos dados pessoais. Podemos compartilhar informações com
            prestadores que operam infraestrutura (hospedagem, e-mail) sob
            contrato, ou quando exigido por lei.
          </p>

          <h2 className="text-xl font-bold text-nc-navy">5. Retenção</h2>
          <p>
            Mensagens de contato são retidas pelo tempo necessário para
            atendimento e registro comercial legítimo, salvo pedido de exclusão
            ou obrigação legal em contrário.
          </p>

          <h2 className="text-xl font-bold text-nc-navy">6. Seus direitos</h2>
          <p>
            Nos termos da LGPD, você pode solicitar acesso, correção, exclusão
            ou informações sobre o tratamento dos seus dados pelo e-mail acima.
          </p>

          <h2 className="text-xl font-bold text-nc-navy">7. Produto NoraCare</h2>
          <p>
            O tratamento de dados no aplicativo e na plataforma operacional
            {` `}({siteConfig.appUrl}) está descrito na{" "}
            <Link
              className="font-semibold text-nc-blue hover:underline"
              href="/privacidade-app"
            >
              Política de privacidade do app
            </Link>
            , além dos contratos com cada cliente contratante. Para excluir
            conta e dados pessoais, veja{" "}
            <Link
              className="font-semibold text-nc-blue hover:underline"
              href="/exclusao-de-dados"
            >
              Exclusão de dados
            </Link>
            .
          </p>
        </div>
      </Container>
    </section>
  );
}
