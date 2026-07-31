/** Site-wide constants for NoraCare institutional website */

export const siteConfig = {
  name: "NoraCare",
  legalName: "NoraCare",
  tagline: "Gestão inteligente de plantões e equipes de saúde",
  description:
    "Plataforma completa para hospitais e redes de saúde organizarem escalas, plantões, check-in biométrico, trocas e relatórios financeiros — com segurança e rastreabilidade.",
  url: "https://institucional.noracare.com.br",
  appUrl: "https://app.noracare.com.br",
  locale: "pt_BR",
  email: "contato@noracare.com.br",
  commercialEmail: "comercial@noracare.com.br",
  social: {
    // Preencha quando houver perfis oficiais
    linkedin: "",
    instagram: "",
  },
} as const;

export const navLinks = [
  { href: "/#solucoes", label: "Soluções" },
  { href: "/produto", label: "Produto" },
  { href: "/sobre", label: "Sobre" },
  { href: "/contato", label: "Contato" },
] as const;

export const features = [
  {
    id: "escalas",
    title: "Escalas e plantões",
    description:
      "Monte e publique escalas mensais e semanais com precificação, recorrência e anúncios amplificados para toda a rede.",
    icon: "calendar",
  },
  {
    id: "checkin",
    title: "Check-in e check-out",
    description:
      "Validação por geolocalização e biometria facial. Registro confiável de ponto com revisão e auditoria.",
    icon: "shield",
  },
  {
    id: "trocas",
    title: "Trocas e anúncios",
    description:
      "Profissionais anunciam plantões e negociam trocas com fluxo de aprovação e histórico completo.",
    icon: "swap",
  },
  {
    id: "acessos",
    title: "Acessos hierárquicos",
    description:
      "Rede → local → setor → escala. Controle fino de permissões para master, gestor, coordenador e visualizador.",
    icon: "hierarchy",
  },
  {
    id: "relatorios",
    title: "Relatórios e financeiro",
    description:
      "Consolidado por médico, escala e unidade. Exportação em Excel e filtros organizacionais compartilhados.",
    icon: "chart",
  },
  {
    id: "multiperfil",
    title: "Multi-perfil e convites",
    description:
      "Médicos, enfermeiros, fisioterapeutas, gestores e coordenadores no mesmo ecossistema, com convites seguros.",
    icon: "users",
  },
] as const;

export const personas = [
  {
    title: "Gestores e masters",
    description:
      "Visão da rede inteira, governança de acessos, indicadores e compliance operacional.",
  },
  {
    title: "Coordenadores",
    description:
      "Operação diária das escalas, anúncios, trocas e revisão de ponto no escopo autorizado.",
  },
  {
    title: "Profissionais de saúde",
    description:
      "Plantões, check-in, oportunidades anunciadas, financeiro e preferências em um app moderno.",
  },
] as const;

export const steps = [
  {
    step: "01",
    title: "Estruture a organização",
    description:
      "Cadastre redes, unidades, setores e escalas. Defina permissões hierárquicas por perfil.",
  },
  {
    step: "02",
    title: "Monte a escala",
    description:
      "Crie plantões com horários, taxas e regras. Publique anúncios e gerencie fixos e extras.",
  },
  {
    step: "03",
    title: "Opere com confiança",
    description:
      "Check-in validado, trocas auditáveis, revisão de ponto e relatórios financeiros em tempo real.",
  },
] as const;

export const stats = [
  { value: "100%", label: "Rastreabilidade de plantões" },
  { value: "4 níveis", label: "de acesso organizacional" },
  { value: "Web + mobile", label: "para gestores e plantonistas" },
  { value: "Auditoria", label: "em ações críticas" },
] as const;
