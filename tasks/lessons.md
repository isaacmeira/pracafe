# Lições — projeto PraCafé

## 2026-09-21

- **Confirmar o setor antes de pesquisar.** O nome "PraCafé" sugeria torrefadora; o site é de embalagens de ráfia. Regra: abrir a home e ler título/meta antes de disparar subagentes de pesquisa.
- **Validar downloads com `file`.** 144 "imagens" do site legado (pastas `large/` e `fotos/`) eram páginas HTML de erro com status 200. Regra: após baixar em lote, rodar `file` e descartar o que não for imagem; conferir dimensões (miniaturas de 60px não servem para galeria).
- **anime.js v4 `onScroll` só avalia em eventos de scroll.** Elementos já visíveis no carregamento não disparam `onEnter`. Regra: após inicializar, despachar `window.dispatchEvent(new Event('scroll'))` em alguns frames. Para revelar uma vez: `sync: 'play', repeat: false` (não existe `once`).
- **`splitText` com `lines` espera `document.fonts.ready`.** Animar `splitter.words` logo após criar não funciona. Regra: usar `splitter.addEffect((self) => animate(self.words, ...))`, que roda quando pronto e a cada re-divisão.
- **Node 22 via nvm em `~/.nvm/versions/node/v22.22.3/bin`.** O `node` padrão da máquina é 18 e o `create-astro` recusa. Regra: prefixar `PATH` nos comandos ou usar `cmd /c "cd pracafe-site && node node_modules/astro/astro.js dev"` no `launch.json` (o `launch.json` precisa ficar na raiz do workspace, `mais todos/.claude/`, e sem barras invertidas escapadas).
- **Vite no Windows pode observar a raiz do drive e cair com EBUSY em `C:\DumpStack.log.tmp`.** Regra: `vite.server.watch.ignored` com esses arquivos de sistema.
- **Não rodar `astro build` enquanto o dev server roda no mesmo projeto.** Ambos escrevem `.astro/`; pode derrubar o dev.
- **Visual B2B institucional ≠ SaaS.** Feedback do cliente: usar a logo real, cores da marca (verde escuro `#305038`, cereja `#b8332c`), cantos retos, cards sólidos, sem néon nem vidro. Animações são bem-vindas, mas cenas longas com scroll travado (sticky 400vh) foram rejeitadas; preferir revelações discretas e linha do tempo simples.
- **Cards precisam funcionar sem hover.** Imagem só no hover deixa o mobile sem foto. Regra: estado padrão já completo; hover apenas realça.
- **Heredoc bash com conteúdo grande de Astro/TS quebrou o parser.** Regra: para arquivos grandes usar Write/Edit; para patches pontuais usar `node -e` com replace.
