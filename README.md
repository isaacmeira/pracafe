# pracafe

Novo site institucional da PraCafé Embalagens (Manhuaçu-MG): big bags, sacaria de ráfia, panos de colheita, fitilhos, tecidos e acessórios.

Site estático em Astro 5 + Tailwind CSS v4 + anime.js v4.

## Rodar

Requer Node 22 (`.nvmrc`).

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # gera dist/
node scripts/check-links.cjs   # verifica links, imagens e textos do build
```

## Estrutura

- `src/data/produtos.ts` — 8 categorias e 25 produtos (códigos, medidas, gramaturas, capacidades, configurações C1–C6).
- `src/data/site.ts` — dados da empresa, aplicações por segmento, números, valores.
- `src/pages/` — home, empresa, produtos, aplicações, revendedores, contato, trabalhe conosco, 404.
- `src/scripts/motion.ts` — animações por atributos `data-*` (anime.js).
- `public/img/` — imagens do site legado e logos oficiais (`brand/`).
- `docs/01-pesquisa-e-benchmark.md` — pesquisa do site antigo e benchmark de concorrentes.
- `tasks/` — plano, status e lições.

## Pendências

Formulários são placeholders (sem backend). Ver `tasks/todo.md`.
