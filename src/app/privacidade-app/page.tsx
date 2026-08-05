import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacidade do app",
  description: `Política de privacidade do aplicativo e da plataforma operacional ${siteConfig.name}.`,
  alternates: { canonical: "/privacidade-app" },
  robots: { index: true, follow: true },
  openGraph: {
    title: `Privacidade do app | ${siteConfig.name}`,
    description: `Como o app e a plataforma ${siteConfig.name} tratam dados pessoais de profissionais e gestores.`,
    url: `${siteConfig.url}/privacidade-app`,
  },
};

export default function PrivacidadeAppPage() {
  return (
    <section className="section-pad bg-white">
      <Container className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-nc-blue">
          Legal · Aplicativo
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-nc-navy">
          Política de privacidade do app
        </h1>
        <p className="mt-4 text-sm text-muted">
          Última atualização: 5 de agosto de 2026
        </p>

        <div className="prose-nc mt-10 space-y-6 text-base leading-relaxed text-muted">
          <p>
            Esta política descreve como a {siteConfig.name} trata dados
            pessoais no <strong className="text-nc-navy">aplicativo</strong> e
            na <strong className="text-nc-navy">plataforma operacional</strong>{" "}
            disponíveis em{" "}
            <a
              className="font-semibold text-nc-blue hover:underline"
              href={siteConfig.appUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {siteConfig.appUrl.replace("https://", "")}
            </a>
            , bem como em eventuais apps móveis publicados sob a marca
            NoraCare.
          </p>
          <p>
            Ela é distinta da{" "}
            <Link
              href="/privacidade"
              className="font-semibold text-nc-blue hover:underline"
            >
              política de privacidade do site institucional
            </Link>
            . Quando o tratamento for definido por contrato com a instituição de
            saúde (cliente contratante), prevalecem também as obrigações e
            instruções daquele contrato.
          </p>

          <h2 className="text-xl font-bold text-nc-navy">1. Quem somos</h2>
          <p>
            Controladora/operadora da plataforma: {siteConfig.legalName}. Para
            questões de privacidade, direitos do titular ou exclusão de dados,
            contate{" "}
            <a
              className="font-semibold text-nc-blue hover:underline"
              href={`mailto:${siteConfig.email}`}
            >
              {siteConfig.email}
            </a>
            .
          </p>
          <p>
            Em muitos casos a instituição de saúde que contrata o NoraCare atua
            como controladora dos dados de seus profissionais e equipes, e a
            NoraCare como operadora/processadora sob instrução do cliente. Nesses
            cenários, pedidos de titulares podem ser encaminhados também à
            instituição.
          </p>

          <h2 className="text-xl font-bold text-nc-navy">
            2. Dados que podemos tratar
          </h2>
          <p>Dependendo do perfil e do uso, podemos tratar:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong className="text-nc-navy">Cadastro e conta:</strong> nome,
              e-mail, telefone, documento (quando exigido), especialidade,
              perfil de acesso e vínculo com rede, unidade, setor e escala.
            </li>
            <li>
              <strong className="text-nc-navy">Operação de plantões:</strong>{" "}
              escalas, plantões aceitos ou anunciados, trocas, preferências,
              histórico de alocação e informações de remuneração/fechamento
              financeiro do plantão.
            </li>
            <li>
              <strong className="text-nc-navy">Ponto e presença:</strong>{" "}
              registros de check-in e check-out, status de revisão, e, quando
              habilitados pela instituição, dados de{" "}
              <strong className="text-nc-navy">geolocalização</strong> e{" "}
              <strong className="text-nc-navy">biometria facial</strong> (ou
              templates/derivados biométricos) usados para validar presença no
              local e horário.
            </li>
            <li>
              <strong className="text-nc-navy">Dispositivo e uso:</strong>{" "}
              identificadores técnicos, sistema operacional, logs de acesso,
              diagnósticos e eventos de auditoria de ações críticas.
            </li>
            <li>
              <strong className="text-nc-navy">Comunicações:</strong> mensagens
              de suporte, notificações push (se autorizadas) e registros de
              atendimento.
            </li>
          </ul>
          <p>
            Dados sensíveis (como biometria) são tratados apenas quando
            necessários à funcionalidade contratada e com base legal adequada
            (por exemplo, execução de contrato, legítimo interesse da
            instituição com salvaguardas, ou consentimento, conforme o caso e a
            configuração da conta).
          </p>

          <h2 className="text-xl font-bold text-nc-navy">3. Finalidades</h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Autenticar usuários e gerenciar permissões hierárquicas (rede →
              local → setor → escala).
            </li>
            <li>
              Operar escalas, anúncios, trocas, ponto e relatórios financeiros.
            </li>
            <li>
              Garantir segurança, prevenção a fraude e trilha de auditoria.
            </li>
            <li>
              Prestar suporte, melhorar estabilidade e desempenho do produto.
            </li>
            <li>Cumprir obrigações legais e contratuais aplicáveis.</li>
          </ul>

          <h2 className="text-xl font-bold text-nc-navy">4. Bases legais</h2>
          <p>
            Tratamos dados conforme a LGPD, notadamente para execução de
            contrato ou procedimentos preliminares, cumprimento de obrigação
            legal/regulatória, legítimo interesse (com análise de impacto quando
            cabível) e, em hipóteses específicas, consentimento do titular.
          </p>

          <h2 className="text-xl font-bold text-nc-navy">5. Compartilhamento</h2>
          <p>Não vendemos dados pessoais. Podemos compartilhar dados com:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              A instituição de saúde e usuários autorizados no escopo da
              organização (gestores, coordenadores etc.).
            </li>
            <li>
              Prestadores de infraestrutura e serviços (hospedagem, autenticação,
              e-mail, monitoramento), sob contrato e com finalidade limitada.
            </li>
            <li>Autoridades, quando houver obrigação legal ou ordem válida.</li>
          </ul>

          <h2 className="text-xl font-bold text-nc-navy">
            6. Armazenamento e transferência
          </h2>
          <p>
            Dados podem ser armazenados em provedores de nuvem no Brasil e/ou no
            exterior. Quando houver transferência internacional, adotamos
            salvaguardas adequadas previstas na legislação aplicável.
          </p>

          <h2 className="text-xl font-bold text-nc-navy">7. Retenção</h2>
          <p>
            Mantemos os dados pelo tempo necessário às finalidades operacionais,
            contratuais e legais. Registros de ponto, plantões e auditoria podem
            ser retidos por períodos mais longos quando exigidos pela instituição
            ou por lei. Após o término do vínculo ou exclusão da conta, dados
            podem ser eliminados, anonimizados ou bloqueados, ressalvadas
            hipóteses de retenção legal.
          </p>

          <h2 className="text-xl font-bold text-nc-navy">8. Segurança</h2>
          <p>
            Aplicamos medidas técnicas e organizacionais razoáveis, incluindo
            autenticação de usuários, controle de acesso por perfil, ambientes
            separados e registro de ações críticas. Nenhum sistema é
            absolutamente isento de riscos; em caso de incidente relevante,
            seguiremos os procedimentos legais de comunicação.
          </p>

          <h2 className="text-xl font-bold text-nc-navy">
            9. Seus direitos (LGPD)
          </h2>
          <p>
            Você pode solicitar confirmação de tratamento, acesso, correção,
            anonimização, portabilidade, informação sobre compartilhamentos,
            revogação de consentimento (quando a base for consentimento) e
            eliminação dos dados, nos limites da lei e dos contratos com a
            instituição.
          </p>
          <p>
            Para o passo a passo de exclusão de conta e dados, consulte a página{" "}
            <Link
              href="/exclusao-de-dados"
              className="font-semibold text-nc-blue hover:underline"
            >
              Exclusão de dados
            </Link>
            .
          </p>

          <h2 className="text-xl font-bold text-nc-navy">
            10. Crianças e adolescentes
          </h2>
          <p>
            O NoraCare é destinado a profissionais e equipes de saúde
            autorizados por instituições. Não é voltado a menores de 18 anos. Se
            identificarmos cadastro indevido, poderemos desativar a conta e
            eliminar dados conforme a lei.
          </p>

          <h2 className="text-xl font-bold text-nc-navy">11. Alterações</h2>
          <p>
            Podemos atualizar esta política para refletir mudanças no produto ou
            na legislação. A data de “última atualização” no topo indica a
            versão vigente. Em alterações relevantes, poderemos comunicar pelo
            app, e-mail ou avisos na plataforma.
          </p>

          <h2 className="text-xl font-bold text-nc-navy">12. Contato</h2>
          <p>
            Dúvidas sobre esta política:{" "}
            <a
              className="font-semibold text-nc-blue hover:underline"
              href={`mailto:${siteConfig.email}`}
            >
              {siteConfig.email}
            </a>
            . WhatsApp:{" "}
            <a
              className="font-semibold text-nc-blue hover:underline"
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {siteConfig.phoneDisplay}
            </a>
            .
          </p>
        </div>
      </Container>
    </section>
  );
}
