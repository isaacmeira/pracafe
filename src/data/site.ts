export const site = {
  nome: 'PraCafé Embalagens',
  slogan: 'Soluções em embalagens de ráfia',
  descricao:
    'Indústria de embalagens de polipropileno (ráfia) em Manhuaçu-MG: big bags, sacaria, panos de colheita, fitilhos, tecidos e acessórios para cafeicultura, agroindústria, armazéns e indústria.',
  fundacao: 2004,
  cnpj: '06.230.380/0001-37',
  razaoSocial: 'Comercial Pra Café Ltda',
  endereco: {
    rua: 'Rua Neide Celestino Maurício, 405',
    bairro: 'Bom Jardim',
    cidade: 'Manhuaçu',
    uf: 'MG',
    cep: '36906-366',
  },
  telefones: [
    { label: 'Geral', numero: '+55 (33) 3331-7009', tel: '+553333317009' },
    { label: 'Televendas', numero: '+55 (33) 3331-8896', tel: '+553333318896' },
    { label: 'Comercial', numero: '+55 (33) 3332-1874', tel: '+553333321874' },
  ],
  whatsapp: {
    numero: '+55 (33) 8432-3939',
    link: 'https://wa.me/553384323939',
    mensagem: 'Olá! Gostaria de solicitar um orçamento de embalagens PraCafé.',
  },
  redes: {
    instagram: 'https://www.instagram.com/pracafebr/',
    facebook: 'https://www.facebook.com/pracafebr/',
    linkedin: 'https://br.linkedin.com/company/pracafecomercial',
  },
  estados: ['MG', 'ES', 'BA', 'RJ'],
} as const;

export function waLink(texto?: string) {
  const msg = encodeURIComponent(texto ?? site.whatsapp.mensagem);
  return `${site.whatsapp.link}?text=${msg}`;
}

export const nav = [
  { href: '/produtos', label: 'Produtos' },
  { href: '/aplicacoes', label: 'Aplicações' },
  { href: '/empresa', label: 'Empresa' },
  { href: '/revendedores', label: 'Revendedores' },
  { href: '/contato', label: 'Contato' },
];

export type Aplicacao = {
  slug: string;
  nome: string;
  titulo: string;
  resumo: string;
  descricao: string;
  icone: string;
  capa: string;
  galeria: string[];
  produtos: string[]; // slugs de produtos
  beneficios: string[];
};

export const aplicacoes: Aplicacao[] = [
  {
    slug: 'cafeicultura',
    nome: 'Cafeicultura',
    titulo: 'Panos de colheita, sacaria e big bags para a safra de café',
    resumo: 'Panos de colheita, sacaria BC com faixa de medida e big bags para lavoura, secagem e exportação.',
    descricao:
      'A PraCafé fica em Manhuaçu, região produtora das Matas de Minas. Os produtos para cafeicultura são dimensionados para reduzir custo, perda e mão de obra na colheita, no terreiro e na tulha.',
    icone: 'lucide:coffee',
    capa: '/img/aplicacoes/cafeicultura/capa.jpg',
    galeria: [
      '/img/aplicacoes/cafeicultura/20120525colheita.jpg',
      '/img/aplicacoes/cafeicultura/big-bag-colheita.jpg',
      '/img/aplicacoes/cafeicultura/bag-cafe.jpg',
      '/img/aplicacoes/cafeicultura/cafe-05.jpg',
      '/img/aplicacoes/cafeicultura/02234.jpg',
      '/img/aplicacoes/cafeicultura/bag-agricultura.jpg',
    ],
    produtos: ['tradicional', 'especias', 'colheita-de-cafe', 'big-bag-pra-cafe', 'luvas-pra-cafe', 'alcas-de-peneiras'],
    beneficios: [
      'Pano nº 4 alcança duas carreiras de café com um só lance',
      'Sacaria com faixa de medida dispensa o balaio e padroniza a colheita',
      'Big bag de colheita agiliza a coleta com muck de 500 a 1.500 kg',
      'Lonas de terreiro em grandes formatos sob medida',
    ],
  },
  {
    slug: 'agricultura',
    nome: 'Agricultura e Grãos',
    titulo: 'Sacaria e big bags para grãos, sementes, rações e fertilizantes',
    resumo: 'Convencional, laminada, valvulada ou com liner. Impressão em até 6 cores para a sua marca.',
    descricao:
      'Sacaria convencional ou laminada e big bags em qualquer medida, com ou sem impressão, para milho, soja, feijão, sementes, rações e fertilizantes.',
    icone: 'lucide:wheat',
    capa: '/img/produtos/10/b_laminada.jpg',
    galeria: ['/img/aplicacoes/revenda/saco-rafia-6.jpg', '/img/aplicacoes/revenda/dsc00516.jpg', '/img/produtos/13/b_colheita.jpg'],
    produtos: ['convencionais', 'laminadas', 'impressos', 'especiais', 'padrao-multway', 'chicote-extra-virgem'],
    beneficios: ['Impressão personalizada em até 6 cores', 'Laminação para barreira contra umidade', 'Fitilhos para estaqueamento e amarração'],
  },
  {
    slug: 'armazens-e-logistica',
    nome: 'Armazéns Gerais e Logística',
    titulo: 'Big bags para movimentação e estocagem em armazéns gerais',
    resumo: 'Big bags multway, oneway, travado/cubo e porta ensacado para movimentação e estocagem.',
    descricao:
      'Contentores flexíveis substituem paletes e sacos soltos e reduzem o tempo de carga e descarga e as perdas por rompimento. O modelo cubo mantém o formato depois de cheio e ocupa até 30% menos espaço em contêiner.',
    icone: 'lucide:warehouse',
    capa: '/img/produtos/4/b_travado-cubo.jpg',
    galeria: ['/img/produtos/9/b_a5.jpg', '/img/aplicacoes/revenda/dsc00530.jpg', '/img/produtos/6/b_travado-cubo.jpg'],
    produtos: ['padrao-multway', 'padrao-oneway', 'travadocubo', 'porta-ensacado', 'acessorios-para-big-bags'],
    beneficios: ['Capacidade de até 2.000 kg', 'Reutilizável 6:1 ou descartável 5:1', 'Até 30% de economia em contêiner com o modelo cubo'],
  },
  {
    slug: 'industria-e-mineracao',
    nome: 'Indústria, Mineração e Construção',
    titulo: 'Big bags, sacaria HB e tecidos pesados para indústria e mineração',
    resumo: 'Tecidos pesados de 160 a 240 g/m², aditivo UV e liners de polietileno para produtos em pó, grão ou pasta.',
    descricao:
      'Tecido de 160 a 240 g/m², costura reforçada e alças dimensionadas para produtos abrasivos e pesados: mineração, cimento, metalurgia, química e construção civil.',
    icone: 'lucide:factory',
    capa: '/img/produtos/23/b_produtostecido4.jpg',
    galeria: ['/img/produtos/1/b_magbagtubular.jpg', '/img/produtos/12/b_sacos-2.jpg', '/img/produtos/25/b_linhas-01.jpg'],
    produtos: ['tecidos-big-bags', 'especiais', 'padrao-multway', 'fios-para-costura', 'tecidos-sacarias'],
    beneficios: ['Tecido pesado 160 a 240 g/m²', 'Aditivo UV para exposição ao tempo', 'Liners para proteção contra contaminação'],
  },
  {
    slug: 'cargas-perigosas',
    nome: 'Química e Cargas Perigosas',
    titulo: 'Big bags com certificação UN para produtos químicos e resíduos',
    resumo: 'Projetados e testados em tração de alça, queda, tombamento e endireitamento, com impressão da classe de risco.',
    descricao:
      'Para o transporte de produtos enquadrados na norma internacional UN de cargas perigosas, fabricamos contentores certificados, com liner e impressão da classificação de risco, em tamanhos e capacidades até 1.500 kg.',
    icone: 'lucide:flask-conical',
    capa: '/img/produtos/5/b_capaperigosa.jpg',
    galeria: ['/img/produtos/5/b_capaperigosa.jpg', '/img/produtos/2/b_magbagtubular.jpg', '/img/aplicacoes/revenda/big-bag-3.jpg'],
    produtos: ['cargas-perigosas', 'padrao-oneway', 'acessorios-para-big-bags'],
    beneficios: ['Certificação UN', 'Ensaios de tração, queda e tombamento', 'Impressão da classe de risco'],
  },
  {
    slug: 'revendedores',
    nome: 'Revendedores e Distribuidores',
    titulo: 'Condições de atacado para revendedores e distribuidores',
    resumo: 'Portfólio completo, marca própria e preços diretos da fábrica para agropecuárias, atacadistas e distribuidores.',
    descricao:
      'Atendemos agropecuárias, distribuidores e atacadistas em Minas Gerais, Espírito Santo, Bahia e Rio de Janeiro, com condições especiais por volume e a linha Marca Própria em embalagem de varejo.',
    icone: 'lucide:store',
    capa: '/img/aplicacoes/revenda/capa.jpg',
    galeria: [
      '/img/aplicacoes/revenda/saco-rafia-6.jpg',
      '/img/aplicacoes/revenda/fitilho-branco-leitoso-2.jpg',
      '/img/aplicacoes/revenda/luva-helanca-com-pigmento-2.jpg',
      '/img/aplicacoes/revenda/lamina-roaadeira-pracafe-2.jpg',
      '/img/aplicacoes/revenda/pano-colheita-cafe.jpg',
      '/img/aplicacoes/revenda/big-bag-3.jpg',
    ],
    produtos: ['luvas-pra-cafe', 'laminas-para-rocadeiras', 'alcas-de-peneiras', 'chicote-branco-leitoso', 'tradicional', 'colheita-de-cafe'],
    beneficios: ['Preço direto da indústria', 'Linha Marca Própria em embalagem de varejo', 'Entrega em MG, ES, BA e RJ'],
  },
];

export const mercados = [
  'Cafeicultura',
  'Agricultura',
  'Armazéns Gerais',
  'Usinas de Açúcar',
  'Mineração',
  'Fertilizantes',
  'Química e Petroquímica',
  'Construção Civil',
  'Armazenamento e Transporte',
  'Revendedores e Distribuidores',
  'Indústrias',
];

export const numeros = [
  { valor: 20, sufixo: '+', label: 'anos de indústria', detalhe: 'Desde 2004 em Manhuaçu-MG' },
  { valor: 2000, sufixo: ' kg', label: 'capacidade por big bag', detalhe: 'Modelos reutilizáveis 6:1' },
  { valor: 6, sufixo: '', label: 'cores de impressão', detalhe: 'Sacaria personalizada' },
  { valor: 25, sufixo: '+', label: 'linhas de produto', detalhe: '8 famílias de embalagens' },
  { valor: 4, sufixo: '', label: 'estados atendidos', detalhe: 'MG · ES · BA · RJ' },
];

export const valores = [
  { titulo: 'Otimismo', texto: 'Confiança em superar desafios ao lado do cliente.', icone: 'lucide:sun' },
  { titulo: 'Flexibilidade', texto: 'Medidas, cores e capacidades sob demanda.', icone: 'lucide:ruler' },
  { titulo: 'Sustentabilidade', texto: 'Uso responsável dos recursos e ráfia reciclável.', icone: 'lucide:recycle' },
  { titulo: 'Foco no cliente', texto: 'É o cliente que sustenta o negócio.', icone: 'lucide:handshake' },
  { titulo: 'Foco no resultado', texto: 'Processos orientados à geração de valor.', icone: 'lucide:target' },
];
