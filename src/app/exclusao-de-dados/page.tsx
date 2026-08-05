import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Exclusão de dados",
  description: `Como solicitar a exclusão da conta e dos dados pessoais no aplicativo ${siteConfig.name}.`,
  alternates: { canonical: "/exclusao-de-dados" },
  robots: { index: true, follow: true },
  openGraph: {
    title: `Exclusão de dados | ${siteConfig.name}`,
    description:
      "Passo a passo para excluir conta e dados pessoais do app NoraCare.",
    url: `${siteConfig.url}/exclusao-de-dados`,
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
          className="font-semibold text-nc-blue hover:underline"
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
    <section className="section-pad bg-white">
      <Container className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-nc-blue">
          Legal · Aplicativo
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-nc-navy">
          Exclusão de conta e dados
        </h1>
        <p className="mt-4 text-sm text-muted">
          Última atualização: 5 de agosto de 2026
        </p>

        <div className="prose-nc mt-10 space-y-6 text-base leading-relaxed text-muted">
          <p>
            Esta página explica como titulares de dados podem solicitar a{" "}
            <strong className="text-nc-navy">exclusão da conta</strong> e a{" "}
            <strong className="text-nc-navy">eliminação ou anonimização</strong>{" "}
            dos dados pessoais tratados no aplicativo e na plataforma{" "}
            {siteConfig.name} (
            <a
              className="font-semibold text-nc-blue hover:underline"
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
            <Link
              href="/privacidade-app"
              className="font-semibold text-nc-blue hover:underline"
            >
              Política de privacidade do app
            </Link>
            .
          </p>

          <h2 className="text-xl font-bold text-nc-navy">
            1. Exclusão pelo aplicativo (quando disponível)
          </h2>
          <p>
            Se a sua versão do app exibir a opção de exclusão na conta, siga
            estes passos:
          </p>
          <ol className="mt-4 space-y-4">
            {stepsInApp.map((step, index) => (
              <li
                key={step.title}
                className="flex gap-4 rounded-2xl border border-border bg-background p-5"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-nc-navy text-sm font-bold text-white">
                  {index + 1}
                </span>
                <div>
                  <p className="font-semibold text-nc-navy">{step.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          <h2 className="text-xl font-bold text-nc-navy">
            2. Exclusão por e-mail (sempre disponível)
          </h2>
          <p>
            Se não encontrar a opção no app, ou preferir solicitar por escrito:
          </p>
          <ol className="mt-4 space-y-4">
            {stepsByEmail.map((step, index) => (
              <li
                key={step.title}
                className="flex gap-4 rounded-2xl border border-border bg-background p-5"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-nc-green text-sm font-bold text-nc-navy">
                  {index + 1}
                </span>
                <div>
                  <p className="font-semibold text-nc-navy">{step.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          <div className="rounded-2xl border border-nc-blue/20 bg-nc-blue/5 p-5">
            <p className="text-sm font-semibold text-nc-navy">
              Modelo de mensagem
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted">
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
              className="mt-4 inline-flex text-sm font-semibold text-nc-blue hover:underline"
            >
              Abrir e-mail pré-preenchido →
            </a>
          </div>

          <h2 className="text-xl font-bold text-nc-navy">
            3. O que é excluído
          </h2>
          <p>Após a conclusão do pedido, em regra eliminamos ou anonimizamos:</p>
          <ul className="list-disc space-y-2 pl-5">
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

          <h2 className="text-xl font-bold text-nc-navy">
            4. O que pode ser retido
          </h2>
          <p>
            Alguns dados podem ser mantidos, bloqueados ou anonimizados por
            período adicional quando necessário para:
          </p>
          <ul className="list-disc space-y-2 pl-5">
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

          <h2 className="text-xl font-bold text-nc-navy">5. Prazos</h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong className="text-nc-navy">Confirmação de recebimento:</strong>{" "}
              em geral em até 3 dias úteis
            </li>
            <li>
              <strong className="text-nc-navy">Conclusão da exclusão:</strong> em
              regra até 15 dias úteis após validação do pedido, podendo estender-se
              nos limites da LGPD quando houver complexidade ou dependência da
              instituição
            </li>
          </ul>

          <h2 className="text-xl font-bold text-nc-navy">6. Contato</h2>
          <p>
            E-mail:{" "}
            <a
              className="font-semibold text-nc-blue hover:underline"
              href={`mailto:${siteConfig.email}`}
            >
              {siteConfig.email}
            </a>
            <br />
            WhatsApp:{" "}
            <a
              className="font-semibold text-nc-blue hover:underline"
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
  );
}
