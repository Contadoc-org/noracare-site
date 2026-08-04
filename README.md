# NoraCare — Site institucional

Site institucional moderno da **NoraCare**, construído com **Next.js (App Router)** para SEO, performance e deploy simples.

**URL de produção:** [https://site.noracare.com.br](https://site.noracare.com.br)

## Stack

- Next.js 16 (App Router) + React 19
- TypeScript
- Tailwind CSS v4
- Metadata API (`title`, Open Graph, Twitter, JSON-LD)
- `sitemap.xml` e `robots.txt` gerados automaticamente

## Páginas

| Rota | Conteúdo |
|------|----------|
| `/` | Landing (hero, soluções, como funciona, personas, CTA) |
| `/produto` | Módulos e superfícies do produto |
| `/sobre` | Missão e posicionamento |
| `/contato` | Formulário comercial + e-mails |
| `/privacidade` | Política de privacidade (LGPD) |

## Desenvolvimento

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Configuração de marca / conteúdo

Edite `src/lib/site.ts`:

- nome, tagline, descrição SEO
- URL canônica (`https://site.noracare.com.br`)
- URL do app (`appUrl`)
- e-mail de contato (`contato@contadoc.com.br`)
- redes sociais (quando existirem)

Assets em `public/`:

- `logo-light.svg` / `logo-dark.svg` / `logo-mark.svg`
- `favicon.png` / `icon.png`
- OG image gerada em runtime via `src/app/opengraph-image.tsx`

## SEO checklist

- [x] `metadataBase` e titles por página
- [x] Open Graph + Twitter cards
- [x] JSON-LD `Organization`
- [x] `sitemap.ts` → `/sitemap.xml`
- [x] `robots.ts` → `/robots.txt`
- [x] `lang="pt-BR"` e canonicals
- [ ] Enviar sitemap no Google Search Console após o DNS
- [x] E-mail de contato (`contato@contadoc.com.br`)
- [x] URL do app (`https://app.noracare.com.br`)

## Deploy sugerido

### Opção A — Vercel / Node (recomendado para OG dinâmico)

1. Conecte este repositório
2. Build: `npm run build` · Start: `npm start`
3. Domínio custom: `site.noracare.com.br`
4. DNS: CNAME (ou A/AAAA conforme o provedor) apontando para a hospedagem

### Opção B — S3 + CloudFront (alinhado à infra NoraCare)

Para export estático, ajuste `next.config.ts`:

```ts
const nextConfig = {
  output: "export",
  images: { unoptimized: true },
};
```

> Com `output: "export"`, rotas de imagem OG em runtime (`opengraph-image.tsx`) precisam virar asset estático. Nesse caso, exporte um PNG 1200×630 para `public/og.png` e referencie-o no `metadata`.

### DNS (Hostinger / Route53)

Exemplo:

```
site.noracare.com.br  CNAME  <host-do-deploy>
```

Certificado TLS: use o do provedor ou ACM (`*.noracare.com.br` se já existir).

## Formulário de contato

O formulário de contato usa apenas **mailto** para `contato@contadoc.com.br` (sem backend).

## Scripts

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Dev server |
| `npm run build` | Build de produção |
| `npm start` | Serve o build |
| `npm run lint` | ESLint |
