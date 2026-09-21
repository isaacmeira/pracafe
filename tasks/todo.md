# PraCafé — novo site institucional (B2B)

## Decisões do cliente (2026-09-21)
- Formulários: apenas placeholder (sem backend).
- Loja virtual: não existe. Sem e-commerce.
- WhatsApp placeholder: +55 33 8432-3939.
- Assets: baixados do site atual (118 fotos de produto/aplicação + 40 diagramas) e logos reais do Instagram (`public/img/brand/`).
- Visual: B2B institucional (não SaaS): logo real, verde `#305038` + cereja `#b8332c`, cantos retos, cards sólidos, tipografia Archivo/Inter/JetBrains Mono.
- Animações com anime.js, discretas: revelação por scroll, contadores, parallax leve, linha de progresso, hero com big bag. A cena longa de scroll travado foi removida a pedido.
- Responsivo para qualquer dispositivo; cards com imagem sempre visível.

## Stack
- Astro 5 (estático) + Tailwind v4 + anime.js v4 + astro-icon (Lucide/Tabler) + sharp.
- Node 22 via nvm (`~/.nvm/versions/node/v22.22.3/bin`). `.nvmrc` = 22.
- Dev: `.claude/launch.json` na raiz do workspace (`pracafe-dev`). Build: `npm run build`. Verificação: `node scripts/check-links.cjs`.

## Plano
- [x] Pesquisa e benchmark (`docs/01-pesquisa-e-benchmark.md`)
- [x] Scaffold do projeto e dependências
- [x] Download e curadoria de assets (descartadas 149 "imagens" que eram HTML de erro)
- [x] Dados: `src/data/produtos.ts` (8 categorias, 25 produtos), `src/data/site.ts` (empresa, aplicações, números, valores)
- [x] Design system institucional (`src/styles/global.css`)
- [x] Layout base: Header (logo real, troca ao rolar, menu mobile), Footer, botão WhatsApp, SEO + JSON-LD
- [x] Motor de animação `src/scripts/motion.ts` (data-reveal, data-split, data-count, data-parallax, data-draw, data-progress-scale, hero)
- [x] Home: hero, faixa de mercados, números, 8 categorias, processo em 5 etapas, aplicações, configurador C1–C6, pilares, galeria, CTA
- [x] Páginas: /empresa, /produtos, /produtos/[categoria], /produtos/[categoria]/[produto] (25), /aplicacoes, /aplicacoes/[mercado] (6), /revendedores, /contato, /trabalhe-conosco, 404
- [x] Responsividade conferida em 375, ~1180 e 1440
- [x] Verificação: build de 46 páginas sem erro; checker: 0 links/imagens quebrados, 0 problemas de texto, 1 `<h1>` por página, todas as imagens válidas
- [x] Ajustes do cliente: logo real, visual institucional, seção de processo simplificada, selo redondo no hero, remoção da linha do hero, espaçamento dos selos, imagens nos cards no mobile, alças de içamento

## Pendências / próximos passos
- [ ] Backend dos formulários (API Gateway + Lambda + SES) quando o cliente definir
- [ ] Fotos novas da fábrica e produtos (as atuais são as do site antigo, resolução limitada)
- [ ] Confirmar datas da linha do tempo em /empresa (marcadas como ilustrativas)
- [ ] Confirmar horário de atendimento e e-mail oficial em /contato
- [ ] Redirects 301 das URLs legadas (`nome,10,10,36,1,produtos.html`) ao publicar
- [ ] Deploy S3 + CloudFront

## Revisão
Site estático completo com 46 páginas, conteúdo técnico integral do site antigo (códigos, medidas, gramaturas, capacidades, modelos C1–C6, alças, bocas, fundos, liners), identidade visual alinhada à logo oficial e animações discretas. Lições registradas em `tasks/lessons.md`.
