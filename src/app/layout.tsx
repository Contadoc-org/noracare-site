import type { Metadata, Viewport } from "next";
import { Geist_Mono, Plus_Jakarta_Sans } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { appStores, homeDescription, homeTitle, siteConfig } from "@/lib/site";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: homeTitle,
    template: `%s | ${siteConfig.name}`,
  },
  description: homeDescription,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  keywords: [
    "NoraCare",
    "gestão de plantões",
    "escalas médicas",
    "escalas hospitalares",
    "check-in biométrico",
    "gestão de equipes de saúde",
    "software para hospitais",
    "relatórios financeiros hospitalares",
    "trocas de plantão",
  ],
  // Canonical e openGraph são por página (a home está em page.tsx): aqui vazariam para o 404.
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  appleWebApp: {
    title: siteConfig.name,
  },
  formatDetection: {
    telephone: false,
  },
  other: {
    "apple-itunes-app": `app-id=${appStores.appStoreId}`,
  },
  category: "healthcare",
};

export const viewport: Viewport = {
  themeColor: "#0A153A",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const orgId = `${siteConfig.url}/#organization`;
  const sameAs = Object.values(siteConfig.social).filter(Boolean);
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": orgId,
        name: siteConfig.name,
        url: siteConfig.url,
        description: siteConfig.description,
        email: siteConfig.email,
        telephone: siteConfig.phoneE164,
        // PNG quadrado (512 px); só perfis oficiais, sem o WhatsApp (contato, não identidade).
        logo: `${siteConfig.url}/icon.png`,
        ...(sameAs.length ? { sameAs } : {}),
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.name,
        description: homeDescription,
        inLanguage: "pt-BR",
        publisher: { "@id": orgId },
      },
      {
        "@type": "SoftwareApplication",
        name: siteConfig.name,
        description: homeDescription,
        url: siteConfig.appUrl,
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web, Android, iOS",
        installUrl: [appStores.appStoreUrl, appStores.playStoreUrl],
        sameAs: [appStores.appStoreUrl, appStores.playStoreUrl],
        publisher: { "@id": orgId },
      },
    ],
  };

  return (
    <html
      lang="pt-BR"
      className={`${plusJakarta.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">
        <a
          href="#conteudo"
          className="fixed top-3 left-3 z-[60] -translate-y-24 rounded-full bg-nc-green px-5 py-3 font-semibold text-nc-navy shadow-lift focus:translate-y-0"
        >
          Pular para o conteúdo
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main id="conteudo" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
