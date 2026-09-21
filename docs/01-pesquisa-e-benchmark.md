# PraCafé Embalagens — Raspagem do site atual e benchmark de concorrentes

Data: 2026-09-21. Fonte: raspagem de https://www.pracafe.ind.br/ (home, empresa, 8 categorias, 25 produtos, aplicações, contato, orçamento, representante, vagas, cotações) + pesquisa web + fetch de 17 sites concorrentes/referência.

---

## 1. Quem é a PraCafé (fato importante)

**Não é torrefadora de café.** É a **PraCafé Embalagens** ("Soluções em Embalagens"), razão social **Comercial Pra Café Ltda**, CNPJ 06.230.380/0001-37, fundada em 05/05/2004, sede na Rua Neide Celestino Maurício, 405, Bom Jardim, **Manhuaçu-MG** (região das Matas de Minas).

- **O que fabrica:** embalagens de polipropileno (ráfia): big bags, sacaria, sacos impressos, panos e lonas de colheita, barbantes e fitilhos, tecidos de ráfia, fios e acessórios, e linha "Marca Própria" (luvas, alças de peneira, lâminas de roçadeira).
- **Capacidade declarada:** sacaria impressa em até 6 cores; big bag em 3 cores; medidas customizadas.
- **Mercados:** MG, ES, BA e RJ. Públicos: cafeicultores, agricultura, armazéns gerais, indústrias, usinas de açúcar, mineração, fertilizantes, química/petroquímica, construção civil, transporte, e revendedores/distribuidores/atacadistas.
- **Missão:** "Oferecer soluções inovadoras em embalagens de ráfia para os mais variados segmentos do mercado a preços justos, pautados pela qualidade e pela transparência nas relações comerciais." Valores: otimismo, flexibilidade, sustentabilidade, foco no cliente, foco no resultado.
- **Presença digital fora do site:** Instagram @pracafebr (~3,5 mil seguidores, bio "Soluções em: sacarias, big bags, pano para colheita", posts até mar/2026), Facebook, LinkedIn "Comercial PraCafé" (343 seguidores; declara 501–1000 funcionários e unidades em Manaus e Guarulhos — **não confirmado** em outras fontes), anúncios no MF Rural ("direto de fábrica").
- **Telefones:** Geral (33) 3331-7009 · Televendas (33) 3331-8896 · Comercial (33) 3332-1874. Nenhum e-mail ou WhatsApp publicado.

---

## 2. Raio-X do site atual (pracafe.ind.br)

### 2.1 Estrutura e conteúdo

| Área | Páginas | Observações |
|---|---|---|
| Home | 1 | Slider (foto de **limas/laranjas** em big bag, não café), 8 ícones de categorias, 2 cards de aplicações, banner vermelho "Ofertas direto da indústria", widget BM&F ("Carregado..." eterno), 5 cards de cotações, 3 CTAs (Representante, Trabalhe Conosco, Catálogo) |
| Empresa | Nosso Perfil, Visão/Missão/Valores, Oportunidades de Emprego | Texto curto; "foco principal na indústria têxtil" confunde o posicionamento |
| Produtos | 8 categorias, 25 produtos | Conteúdo técnico rico (ver 2.2) |
| Aplicações | 10 mercados | Página índice retorna erro PHP; só Cafeicultura e Revendedores têm conteúdo (galerias de fotos) |
| Contato | Fale Conosco, Solicite um Orçamento, Seja Representante, Trabalhe Conosco | Formulários longos; orçamento com código/quantidade/produto multi-item |
| Cotações | Café, Milho, Soja, Hortifruti, Gado | "Cotações não disponíveis no momento" + warning PHP exposto |
| Loja Virtual | link `#` | Banner: "Aguarde dentro de poucos dias nossa loja virtual" (placeholder há anos) |
| Catálogo | link | Redireciona para a home; PDF inexistente |

### 2.2 Catálogo de produtos (matéria-prima para o novo site)

**Big Bags (6):** Big Bag Pra Café (Colheita 500–1.500 kg com muck; Exportação; Armazenamento; Transportes; Special Armazéns Gerais) · Padrão Multway (reutilizável 6:1, até 2.000 kg) · Padrão Oneway (descartável 5:1, até 1.500 kg) · Travado/Cubo (economiza até 30% em contêiner, até 2.000 kg) · Cargas Perigosas (certificação UN, ensaios de tração/queda/tombamento, até 1.500 kg) · Porta Ensacado (1.000–2.000 kg, substitui palete).
Sistema de configuração comum: modelos C1–C6 (combinações de boca aberta/saia/válvula × fundo fechado/válvula/descarga total), 5 tipos de alça (espalmada, no fechamento, com argolas, estiva, cintada), corpo plano com costura ou circular sem costura, liners.

**Sacarias (4):** Colheita de Café (BC boca costurada; com faixa de medida que dispensa o balaio; HB especial dura 2 colheitas; medidas 60x90 a 80x110) · Convencional · Laminada (PP+PE) · Especiais (valvulada, sanfonada, com liner).
**Sacos Impressos (1):** até 6 cores, 7 construções.
**Panos e Lonas (2):** Tradicional (branco, 65–115 g/m², larguras 2,50/2,70/2,93 m, 2 a 30 m) · Especiais (branco, preto, cinza, amarelo; até 3,80 m; derriçador, terreiro, forro de tulha/caminhão).
**Barbantes e Fitilhos (3):** Chicote Branco Leitoso · Chicote Extra Virgem (fardos 5/10 kg) · Fitilho em Rolos (10 kg).
**Marca Própria (3):** Luvas Pra Café (12 pares/pacote) · Alças de Peneira (10/pacote) · Lâminas de Roçadeira (aço cromo-vanádio 350 mm).
**Tecidos de Ráfia (3):** Big Bags (160–240 g/m² pesado, 67–95 leve, UV) · Sacarias (tubular 45–80 cm, 60–115 g/m²) · Especiais.
**Fios e Acessórios (2):** Fios 1260/3600 denier com aditivo UV · Alças, cadarços 14/20/30 mm e porta-etiqueta.

### 2.3 Problemas técnicos e de UX

- **Não responsivo:** layout fixo 990 px, sem `meta viewport`; no celular a página renderiza em mosaico repetido.
- **CMS legado PHP** (vortexacm) com jQuery 1.x, Nivo Slider, carouFredSel; URLs `nome,10,10,36,1,produtos.html`; erros PHP vazando para o HTML.
- **SEO fraco:** zero `<h1>`, meta description e keywords = "PraCafé Embalagens", `lang` vazio, canonical em http, sem Open Graph útil, sem sitemap visível.
- **Funcionalidades mortas:** Loja Virtual, Catálogo, Cotações, página Aplicações.
- **Sem confiança:** nenhuma certificação, cliente, depoimento, foto real da fábrica, WhatsApp, e-mail, redes sociais ou mapa.
- **Erros de texto:** "vositante", "prodtos", "Armagens", "desenvovidos", "Solicitar um Cotação", "reduçãoo".
- **Visual:** verde escuro (#437C07 / #064300) + vermelho de promoção, textura cinza, foto stock de homem de terno, fonte Economica. Estética de 2012.

### 2.4 O que vale preservar

Conteúdo técnico dos produtos (C1–C6, alças, gramaturas, medidas), a taxonomia de 8 categorias, os 10 mercados de aplicação, o fluxo "Seja Representante" (rede de vendas), o conceito de cotações agrícolas (tráfego recorrente) e a identidade verde + nome ligado ao café.

---

## 3. Benchmark de concorrentes

### 3.1 Tabela comparativa

| Empresa (UF) | Foco | Loja online | Catálogo PDF | Orçamento | WhatsApp | Certificações | Blog | Aplicações | Redes | Idiomas | Prova social |
|---|---|---|---|---|---|---|---|---|---|---|---|
| **PraCafé (MG)** | Big bag + sacaria + panos café | placeholder | quebrado | Sim (multi-item) | Não | Nenhuma | Não | 10 (2 c/ conteúdo) | Nenhuma no site | PT | Não |
| Dom Bag (SP) | Sacaria + big bag | Não | Não | Modal → WhatsApp | Sim | Nenhuma | Vazio | 8 setores c/ foto | FB IG LI YT | PT | FAQ |
| Agilbag (SP) | Big bags certificados | Não | Não | Sim | Flutuante | ISO 9001/14001, INMETRO, Marinha | 21+ posts | Sim | IG FB LI | PT | Não |
| EmbTec (RS) | Big bag cargas perigosas | Não | Não | Sim | Sim | ANTT, NORMAM-321, NBR 16029, INMETRO | Sim | Parcial | — | PT/ES/EN | FAQ, Ouvidoria |
| Brasbag (MG) | Big bags | Não | Não | E-mail | Não | Ensaios IPT | Não | Sim | YT | PT | Não |
| Sacaria Igaratinga (MG) | Sacaria | Não | Não | Sim | Sim | Nenhuma | Não | Não | IG FB | PT | Não |
| Mix Plast (MG) | Big bag + sacaria | WhatsApp "Compre Já" | Não | Não | Sim | Nenhuma | Não | 4 usos | quebradas | PT | Não |
| Castanhal (PA/SP) | Sacaria de juta (café) | "Onde comprar" | Digitais | Portal do cliente | Não | Sustentabilidade, rastreabilidade | Sim | 9 verticais | YT FB IG LI | PT | Não |
| Rafitec (SC) | Agro/telas/embalagens | Não | Não | Não | Sim | Nenhuma | Sim + ESG | Por cultura | LI IG FB YT | PT | Não |
| Sulbag (RS) | Big bags | Não | Sim + guia técnico | Sim | Sim | Nenhuma | Não | Por produto | FB IG | PT | Não |
| Rafisa (SC) | Sacaria | Não | Não | Sim | Sim | Genérica | Não | Não | FB IG | PT | 5 depoimentos |
| Greif (intl.) | Embalagens industriais | Catálogo | — | Sim | — | Metas 2030 | Sim | 13 mercados | Sim | 11+ | Sim |
| LC Packaging (intl.) | FIBC | Webshops | Downloads | Sim | — | Relatório anual | Sim | 15 × 8 | Sim | 11 | Métricas |

Outros vistos rapidamente: Sacarias Brasil Líder (SP, 42 anos, encoding quebrado), Sack (SC), Aratu Big Bag (BA), Sacaria Isac (SP, desde 1971). Falharam: Tecnobag, Conitex Sonoco, Berry Global. Fibrasa descartada (não faz mais big bag).

### 3.2 Fichas resumidas

- **Dom Bag** (dombag.com.br) — "direto da fábrica"; home com 8 setores ilustrados, 6 vantagens, FAQ técnico; orçamento vira WhatsApp. Fraco: sem selos, blog vazio.
- **Agilbag** (agilbag.com.br) — selos ISO/INMETRO/Marinha no topo, blog de dimensionamento. Fraco: mega-menu com 120+ páginas repetidas (keyword stuffing).
- **EmbTec** (embtec.com.br) — página dedicada de certificações, trilíngue, ouvidoria e código de ética. Fraco: cards sem specs.
- **Brasbag** (brasbag.com.br, Araguari-MG) — "O big bag na sua medida", 7 modelos nomeados. Fraco: só e-mail, sem redes.
- **Sacaria Igaratinga** (MG) — 3 benefícios no topo, WhatsApp. Fraco: conteúdo raso, sem provas.
- **Mix Plast** (Lagoa da Prata-MG) — processo de compra em 4 passos visual, CTA mobile. Fraco: ícones sociais quebrados.
- **Castanhal** (castanhal.com.br) — líder em sacaria de juta para café; sustentabilidade como narrativa, catálogos digitais, portal do cliente. Fraco: sem WhatsApp, só PT.
- **Rafitec** (rafitec.com.br) — navegação dupla produto × cultura, ESG e eventos. Fraco: sem catálogo nem formulário.
- **Sulbag** (sulbag.com.br) — único com catálogo PDF + "Guia técnico: tudo sobre big bags".
- **Greif / LC Packaging** — hero com vídeo e 2 CTAs, bloco de números, dupla entrada indústria × produto, downloads centralizados, portal B2B, sustentabilidade em primeiro nível.

### 3.3 Padrões do setor no Brasil

1. **WhatsApp é o funil** em 10 de 13 sites. Formulário é secundário.
2. **Ninguém tem e-commerce real** de ráfia. "Loja" significa orçamento.
3. **Segmentação por aplicação com foto** é o padrão dos sites bons.
4. **Certificações só onde há regulação** (cargas perigosas). O resto diz "qualidade" sem prova.
5. **Conteúdo técnico é raro** (Sulbag, Agilbag, Dom Bag) e gera SEO de cauda longa.
6. **Prova social quase inexistente** no segmento.
7. **Só português**, exceto EmbTec.
8. **Design datado e abandono são comuns**: um site moderno e mantido já coloca a PraCafé no topo.
9. Mensagens dominantes: "desde 19xx" e "direto da fábrica".
10. **Ninguém fala com o cafeicultor.** Essa é a lacuna da PraCafé.

---

## 4. Recomendações de estrutura para o novo site

1. **Hero** com foto/vídeo de lavoura + fábrica e headline de nicho, ex.: "Embalagens de ráfia feitas em Manhuaçu para a colheita, o armazém e a indústria". Dois CTAs: *Pedir orçamento no WhatsApp* e *Baixar catálogo*.
2. **Navegação dupla Produtos × Aplicações.** Manter 8 categorias; consolidar aplicações em 6 cards: Cafeicultura, Grãos e Agro, Armazéns Gerais e Logística, Indústria e Mineração, Cargas Perigosas, Revendedores e Distribuidores.
3. **Página de produto como ficha técnica:** galeria, tabela de medidas/gramatura/capacidade, fator de segurança, UV, opções de impressão, seletor visual C1–C6 e de alças, variantes, PDF, relacionados, botão *Cotar este item* que pré-preenche o pedido.
4. **Orçamento estruturado (mini-configurador):** produto → medida/capacidade → quantidade → impressão → cidade/UF → gera mensagem de WhatsApp ou e-mail para televendas. Nenhum concorrente tem.
5. **Bloco de confiança:** anos de mercado, estados atendidos, capacidade produtiva, laudos/ensaios (IPT, UN se houver), logos de clientes e cooperativas, 3–5 depoimentos reais. Sem contadores fake.
6. **Área B2B "Revendedores e Representantes":** condições de atacado, regiões, cadastro de revenda, Seja Representante, futuro portal de pedidos recorrentes.
7. **Cotações agrícolas funcionando** (café, milho, soja, boi) via API pública confiável, com calendário de safra e CTA "prepare sua colheita".
8. **Guia técnico / blog "Colheita e Armazenagem":** gramatura de pano, BC vs. HB, oneway vs. multway, UV, rendimento por hectare.
9. **Sustentabilidade e origem** em primeiro nível: reciclagem do PP, logística reversa, emprego em Manhuaçu.
10. **Fundamentos:** responsivo mobile-first, WhatsApp fixo, telefones, mapa, redes reais, LGPD, URLs limpas com redirect 301 das URLs legadas, sitemap, OG tags, performance (Lighthouse 90+).

Extras: "Kit do cafeicultor" juntando Marca Própria (luvas, alças, lâminas) + pano + sacaria; página "Onde estamos / Representantes" com mapa por estado; corrigir todos os erros de texto.

---

## 5. Sitemap proposto

```
/                      Home
/empresa               História, missão, fábrica, equipe, sustentabilidade
/produtos              Grid das 8 categorias
/produtos/[categoria]  Lista de produtos
/produtos/[categoria]/[produto]  Ficha técnica + cotar
/aplicacoes            6 mercados
/aplicacoes/[mercado]  Produtos indicados + casos
/revendedores          B2B, condições, cadastro, representante
/orcamento             Configurador de cotação
/cotacoes              Commodities (widget também na home)
/guia                  Blog / guia técnico
/catalogo              Download PDF + fichas
/contato               Formulário, WhatsApp, mapa, telefones
/trabalhe-conosco      Vagas e currículo
```

## 6. Decisões pendentes antes de implementar

- Loja virtual de verdade (checkout) ou apenas orçamento via WhatsApp? Recomendação: orçamento primeiro, loja em fase 2.
- Número de WhatsApp comercial e e-mail oficial.
- Assets: logo vetorial, fotos reais da fábrica/produtos, catálogo PDF, laudos/certificações existentes.
- Confirmar dados do LinkedIn (funcionários, unidades Manaus/Guarulhos).
- Stack e hospedagem (sugestão: Next.js ou Astro estático em S3 + CloudFront, formulários via API Gateway + Lambda + SES, alinhado ao padrão do CLAUDE.md).

## 7. Fontes

PraCafé: https://www.pracafe.ind.br/ (todas as páginas listadas), https://www.instagram.com/pracafebr/, https://br.linkedin.com/company/pracafecomercial, https://www.econodata.com.br/consulta-empresa/06230380000137-comercial-pra-cafe-ltda, https://www.mfrural.com.br/detalhe/176765/big-bag-pra-cafe-direto-de-fabrica
Concorrentes: https://dombag.com.br/ · https://www.agilbag.com.br/ · https://www.embtec.com.br/ · https://www.brasbag.com.br/ · https://sacariaigaratinga.com.br/ · https://mixplastmt.com.br/ · https://www.castanhal.com.br/ · https://rafitec.com.br/ · https://www.sulbag.com.br/ · https://www.sacariasbrasillider.com.br/ · https://rafisa.com.br/ · https://sackbigbag.com.br/ · https://aratubigbag.com.br/ · https://www.sacariaisac.com.br/
Internacionais: https://www.greif.com/ · https://www.lcpackaging.com/
