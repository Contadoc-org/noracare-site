import type { Metadata } from "next";
import Link from "next/link";
import { IconClock } from "@/components/icons";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { ogDefaults, siteConfig } from "@/lib/site";

const title = "Exclusão de conta e dados";
const description =
  "Passo a passo para solicitar a exclusão da sua conta e dos dados pessoais no app NoraCare, pela própria tela do app ou por e-mail.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/exclusao-de-dados" },
  openGraph: {
    ...ogDefaults,
    type: "website",
    url: `${siteConfig.url}/exclusao-de-dados`,
    title: `${title} | ${siteConfig.name}`,
    description,
  },
};

const stepsInApp = [
  {
    title: "Abra o app NoraCare",
    description:
      "Acesse o aplicativo ou a plataforma em que você está logado com a conta que deseja excluir.",
  },
  {
    title: "Entre em Perfil ou Configurações",
    description:
      "No menu da conta (perfil, configurações ou “Minha conta”), procure a opção relacionada a privacidade, conta ou exclusão.",
  },
  {
    title: "Solicite a exclusão da conta",
    description:
      "Se a opção “Excluir conta” ou “Solicitar exclusão de dados” estiver disponível, siga as confirmações na tela. Pode ser pedido o e-mail da conta ou uma confirmação adicional de segurança.",
  },
  {
    title: "Aguarde a confirmação",
    description:
      "Você receberá confirmação pelo próprio app ou por e-mail. O processamento costuma ocorrer em até 15 dias úteis, salvo necessidade de validação com a instituição de saúde.",
  },
];

const stepsByEmail = [
  {
    title: "Envie um e-mail para o suporte",
    description: (
      <>
        Escreva para{" "}
        <a
          href={`mailto:${siteConfig.email}?subject=${encodeURIComponent(
            "Solicitação de exclusão de conta e dados — NoraCare",
          )}`}
        >
          {siteConfig.email}
        </a>{" "}
        com o assunto “Solicitação de exclusão de conta e dados — NoraCare”.
      </>
    ),
  },
  {
    title: "Informe os dados de identificação",
    description:
      "Inclua o nome completo, o e-mail cadastrado no app e, se possível, a instituição/rede de saúde à qual você está vinculado. Isso evita exclusão da conta errada.",
  },
  {
    title: "Confirme a identidade, se solicitado",
    description:
      "Podemos pedir uma confirmação adicional (por exemplo, responder de um e-mail já cadastrado) para proteger sua conta e a de terceiros.",
  },
  {
    title: "Receba o protocolo e o prazo",
    description:
      "Confirmaremos o recebimento e o andamento. Em regra, a exclusão ou anonimização é concluída em até 15 dias úteis após a validação do pedido, observados limites legais e contratuais.",
  },
];

export default function ExclusaoDeDadosPage() {
  return (
    <>
      <PageHero
        size="sm"
        eyebrow="Legal · Aplicativo"
        title="Exclusão de conta e dados"
      >
        <p className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.05] px-3 py-1.5 font-mono text-xs text-white/75">
          <IconClock className="h-3.5 w-3.5" />
          Última atualização: 5 de agosto de 2026
        </p>
      </PageHero>

      <section className="bg-white py-14 sm:py-20">
        <Container size="sm">
          <div className="prose-nc break-words">
            <p>
              Esta página explica como titulares de dados podem solicitar a{" "}
              <strong>exclusão da conta</strong> e a{" "}
              <strong>eliminação ou anonimização</strong>{" "}
              dos dados pessoais tratados no aplicativo e na plataforma{" "}
              {siteConfig.name} (
              <a
                href={siteConfig.appUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {siteConfig.appUrl.replace("https://", "")}
              </a>
              ).
            </p>
            <p>
              Detalhes sobre o tratamento de dados estão na{" "}
              <Link href="/privacidade-app">Política de privacidade do app</Link>
              .
            </p>

            <h2>1. Exclusão pelo aplicativo (quando disponível)</h2>
            <p>
              Se a sua versão do app exibir a opção de exclusão na conta, siga
              estes passos:
            </p>
            <ol role="list" className="list-none! space-y-3! pl-0!">
              {stepsInApp.map((step, index) => (
                <li key={step.title} className="card flex gap-4 p-5 sm:p-6">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-nc-navy to-nc-blue font-mono text-sm font-semibold text-nc-green">
                    {index + 1}
                  </span>
                  <div className="min-w-0">
                    <h3 className="mt-0 font-sans text-[1rem] leading-[1.75] font-semibold tracking-normal text-heading">{step.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-body">
                      {step.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>

            <h2>2. Exclusão por e-mail (sempre disponível)</h2>
            <p>
              Se não encontrar a opção no app, ou preferir solicitar por escrito:
            </p>
            <ol role="list" className="list-none! space-y-3! pl-0!">
              {stepsByEmail.map((step, index) => (
                <li key={step.title} className="card flex gap-4 p-5 sm:p-6">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-nc-green font-mono text-sm font-semibold text-nc-navy">
                    {index + 1}
                  </span>
                  <div className="min-w-0">
                    <h3 className="mt-0 font-sans text-[1rem] leading-[1.75] font-semibold tracking-normal text-heading">{step.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-body">
                      {step.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="rounded-card border border-nc-blue/15 bg-[#f1f4fe] p-5 shadow-[inset_3px_0_0_0_var(--nc-blue)] sm:p-6">
              <h3 className="mt-0 font-sans text-sm font-semibold tracking-normal text-heading">
                Modelo de mensagem
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-body">
                “Solicito a exclusão da minha conta no NoraCare e a eliminação dos
                dados pessoais associados ao e-mail [seu e-mail], nome [seu nome],
                vinculado à instituição [se souber]. Declaro ser o titular desta
                conta.”
              </p>
              <a
                href={`mailto:${siteConfig.email}?subject=${encodeURIComponent(
                  "Solicitação de exclusão de conta e dados — NoraCare",
                )}&body=${encodeURIComponent(
                  "Solicito a exclusão da minha conta no NoraCare e a eliminação dos dados pessoais associados.\n\nNome completo:\nE-mail cadastrado no app:\nInstituição/rede (se souber):\n\nDeclaro ser o titular desta conta.",
                )}`}
                className="mt-4 inline-flex min-h-11 items-center"
              >
                Abrir e-mail pré-preenchido →
              </a>
            </div>

            <h2>3. O que é excluído</h2>
            <p>Após a conclusão do pedido, em regra eliminamos ou anonimizamos:</p>
            <ul>
              <li>Dados de cadastro e perfil da conta</li>
              <li>Preferências e configurações pessoais no app</li>
              <li>
                Dados biométricos ou templates associados ao seu check-in, quando
                armazenados sob nosso controle para a sua conta
              </li>
              <li>
                Conteúdos e registros pessoais que não precisem ser mantidos por
                obrigação legal ou legítima da instituição
              </li>
            </ul>

            <h2>4. O que pode ser retido</h2>
            <p>
              Alguns dados podem ser mantidos, bloqueados ou anonimizados por
              período adicional quando necessário para:
            </p>
            <ul>
              <li>
                Cumprir obrigação legal, regulatória ou ordem de autoridade
              </li>
              <li>
                Exercício regular de direitos em processo judicial, administrativo
                ou arbitral
              </li>
              <li>
                Manter trilhas de auditoria e registros operacionais exigidos pela
                instituição de saúde (ex.: histórico de plantões e ponto), sem uso
                para outras finalidades
              </li>
              <li>Prevenção a fraudes e segurança da plataforma</li>
            </ul>
            <p>
              Contas vinculadas a uma rede hospitalar podem exigir alinhamento com
              o administrador da instituição (controladora dos dados no ambiente
              dela). Nesses casos, informaremos se o pedido precisa ser
              complementado ou autorizado por lá.
            </p>

            <h2>5. Prazos</h2>
            <ul>
              <li>
                <strong>Confirmação de recebimento:</strong>{" "}
                em geral em até 3 dias úteis
              </li>
              <li>
                <strong>Conclusão da exclusão:</strong> em
                regra até 15 dias úteis após validação do pedido, podendo estender-se
                nos limites da LGPD quando houver complexidade ou dependência da
                instituição
              </li>
            </ul>

            <h2>6. Contato</h2>
            <p>
              E-mail:{" "}
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
              <br />
              WhatsApp:{" "}
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {siteConfig.phoneDisplay}
              </a>
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
