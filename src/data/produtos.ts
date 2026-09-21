export type Spec = { label: string; valor: string };
export type Variante = { nome: string; texto: string };

export type Produto = {
  slug: string;
  codigo: string;
  nome: string;
  nomeCurto: string;
  resumo: string;
  descricao: string[];
  destaques: string[];
  specs: Spec[];
  variantes?: Variante[];
  medidas?: string[];
  aplicacoes: string[];
  capa: string;
  galeria: string[];
  configurador?: boolean; // exibe modelos C1–C6, alças, bocas e fundos
};

export type Categoria = {
  slug: string;
  nome: string;
  resumo: string;
  descricao: string;
  icone: string;
  capa: string;
  produtos: Produto[];
};

const img = (dir: number, nome: string) => `/img/produtos/${dir}/${nome}`;
// O site legado só publica uma foto real por produto (b_*.jpg); as galerias 'large' eram links quebrados.
const large = (_dir: number, ..._nomes: string[]): string[] => [];
const foto = (nome: string) => `/img/aplicacoes/${nome}`;

const bigBagConfig = {
  modelos: [
    { id: 'C1', texto: 'Abertura total e base fechada', img: '/img/diagramas/padrao/produtos_big_c1.gif' },
    { id: 'C2', texto: 'Saia de enchimento superior e base fechada', img: '/img/diagramas/padrao/produtos_big_c2.gif' },
    { id: 'C3', texto: 'Abertura total e válvula inferior de descarga', img: '/img/diagramas/padrao/produtos_big_c3.gif' },
    { id: 'C4', texto: 'Saia de enchimento superior e válvula inferior de descarga', img: '/img/diagramas/padrao/produtos_big_c4.gif' },
    { id: 'C5', texto: 'Válvula superior de enchimento e base fechada', img: '/img/diagramas/padrao/produtos_big_c5.gif' },
    { id: 'C6', texto: 'Válvula superior de enchimento e válvula inferior de descarga', img: '/img/diagramas/padrao/produtos_big_c6.gif' },
  ],
  alcas: [
    { nome: 'Espalmada', img: '/img/diagramas/Alca_Espalmadas.gif' },
    { nome: 'No fechamento', img: '/img/diagramas/alca_no_fechamento.gif' },
    { nome: 'Com argolas', img: '/img/diagramas/alca_com_argolas.gif' },
    { nome: 'Estiva', img: '/img/diagramas/alca_estiva.gif' },
    { nome: 'Cintada', img: '/img/diagramas/alca_cintada.gif' },
  ],
  bocas: [
    { nome: 'Boca superior aberta', img: '/img/diagramas/bocas/boca_superior_aberta.gif' },
    { nome: 'Boca com saia', img: '/img/diagramas/bocas/boca_superior_com_saia.gif' },
    { nome: 'Boca com válvula', img: '/img/diagramas/bocas/boca_superior_com_valvula.gif' },
    { nome: 'Boca com tampa', img: '/img/diagramas/bocas/boca_superior_com_tampa.gif' },
  ],
  fundos: [
    { nome: 'Fundo fechado', img: '/img/diagramas/fechar/fundo_fechado.gif' },
    { nome: 'Fundo com válvula', img: '/img/diagramas/fechar/fundo_com_valvula.gif' },
    { nome: 'Válvula flap redondo', img: '/img/diagramas/fechar/valvula_flap_redondo.gif' },
    { nome: 'Válvula flap X', img: '/img/diagramas/fechar/fundo_com_val_flap_x.gif' },
    { nome: 'Fundo tampa + válvula', img: '/img/diagramas/fechar/fundo_tampa_valvula.gif' },
    { nome: 'Descarga total', img: '/img/diagramas/fechar/descarga_total.gif' },
    { nome: 'Corpo afunilado', img: '/img/diagramas/fechar/corpo_afunilado.gif' },
  ],
  liners: [
    { nome: 'Liner aberto', img: '/img/diagramas/forro/liner_aberto.gif' },
    { nome: 'Afunilado na base superior', img: '/img/diagramas/forro/liner_afu_na_base_sup.gif' },
    { nome: 'Afunilado na base inferior', img: '/img/diagramas/forro/liner_afu_na_base_inf.gif' },
    { nome: 'Sanfonado', img: '/img/diagramas/forro/liner_sanfonado.gif' },
  ],
};
export { bigBagConfig };

const propriedadesPP = 'Polipropileno (ráfia): baixo custo, fácil moldagem e coloração, boa estabilidade térmica, resistência ao impacto e elevada resistência química a solventes.';

export const categorias: Categoria[] = [
  {
    slug: 'big-bags',
    nome: 'Big Bags',
    resumo: 'Contentores flexíveis de 500 a 2.000 kg, em seis configurações e cinco tipos de alça.',
    descricao:
      'Big bags (contentores flexíveis) para colheita, armazenagem, transporte rodoviário, marítimo e exportação. Fabricamos nas versões reutilizável 6:1 e descartável 5:1, em tecido plano ou circular, com liner, válvulas e impressão sob medida.',
    icone: 'lucide:package',
    capa: img(9, 'b_a5.jpg'),
    produtos: [
      {
        slug: 'big-bag-pra-cafe',
        codigo: '10009',
        nome: 'Big Bag Pra Café',
        nomeCurto: 'Pra Café',
        resumo: 'A linha desenvolvida para a cafeicultura: colheita com muck, armazenamento, transporte e exportação.',
        descricao: [
          'Cinco versões pensadas para cada etapa da safra de café, da lavoura ao porto. Feitos com matéria-prima de primeira qualidade, reduzem tempo de carga e descarga, mão de obra e perdas por rompimento de embalagens.',
        ],
        destaques: ['Colheita com muck de 500 a 1.500 kg', 'Versão premium para armazéns gerais', 'Transporte rodoviário e marítimo'],
        specs: [
          { label: 'Capacidade', valor: '500 a 1.500 kg' },
          { label: 'Corpo', valor: 'Tecido plano com costura ou circular sem costura' },
          { label: 'Configurações', valor: 'Modelos C1 a C6' },
          { label: 'Alças', valor: 'Espalmada, no fechamento, argolas, estiva ou cintada' },
        ],
        variantes: [
          { nome: 'Colheita', texto: 'Reduz custos e agiliza a coleta do café na lavoura com auxílio de um muck (500 a 1.500 kg).' },
          { nome: 'Exportação', texto: 'Contentor flexível de até 1.500 kg. Segurança e redução dos custos de embarque e desembarque.' },
          { nome: 'Armazenamento', texto: 'Até 1.500 kg com flexibilidade de movimentação e armazenamento dos mais diversos produtos.' },
          { nome: 'Transportes', texto: 'Menos tempo de carga e descarga, menos mão de obra e redução substancial de perdas.' },
          { nome: 'Special Armazéns Gerais', texto: 'Big bag premium de até 1.500 kg para transporte rodoviário, marítimo e armazenamento em geral.' },
        ],
        aplicacoes: ['Cafeicultura', 'Armazéns gerais', 'Exportação'],
        capa: img(9, 'b_a5.jpg'),
        galeria: [img(9, 'b_a5.jpg'), foto('cafeicultura/big-bag-colheita.jpg'), foto('cafeicultura/bag-cafe.jpg'), foto('revenda/big-bag-3.jpg')],
        configurador: true,
      },
      {
        slug: 'padrao-multway',
        codigo: '89001',
        nome: 'Big Bag Padrão Multway',
        nomeCurto: 'Multway 6:1',
        resumo: 'O modelo mais utilizado do mercado. Reutilizável 6:1, quatro alças, até 2.000 kg.',
        descricao: [
          'O contentor flexível padrão de quatro alças é ideal para acondicionamento, armazenagem e transporte. Modelo reutilizável 6:1, desenvolvido para suportar vários enchimentos e esvaziamentos, limitado à legislação das autoridades competentes. Uma vez danificado, não pode ser reutilizado nem reparado.',
          'Tamanho e capacidade de carga são adequados à necessidade de cada cliente.',
        ],
        destaques: ['Fator de segurança 6:1', 'Até 2.000 kg', 'Múltiplos ciclos de uso'],
        specs: [
          { label: 'Capacidade', valor: 'Até 2.000 kg' },
          { label: 'Fator de segurança', valor: '6:1 (reutilizável)' },
          { label: 'Alças', valor: '4 alças, 5 modelos' },
          { label: 'Configurações', valor: 'Modelos C1 a C6' },
        ],
        aplicacoes: ['Grãos', 'Fertilizantes', 'Mineração', 'Indústria'],
        capa: img(2, 'b_magbagtubular.jpg'),
        galeria: large(2, 'magbagtubular01.jpg', 'magbagtubular05.jpg', 'bacg-c3.jpg', 'c4.jpg', 'c5.jpg'),
        configurador: true,
      },
      {
        slug: 'padrao-oneway',
        codigo: '12345',
        nome: 'Big Bag Padrão Oneway',
        nomeCurto: 'Oneway 5:1',
        resumo: 'Descartável 5:1, dimensionado para uma única viagem com um enchimento e um esvaziamento.',
        descricao: [
          'Modelo descartável 5:1 dimensionado para uma única viagem. Não pode ser reparado. Pode ser modificado conforme a necessidade de cada cliente, variando tamanho e capacidade até 1.500 kg.',
        ],
        destaques: ['Fator de segurança 5:1', 'Até 1.500 kg', 'Custo otimizado para viagem única'],
        specs: [
          { label: 'Capacidade', valor: 'Até 1.500 kg' },
          { label: 'Fator de segurança', valor: '5:1 (descartável)' },
          { label: 'Alças', valor: '4 alças, 5 modelos' },
          { label: 'Configurações', valor: 'Modelos C1 a C6' },
        ],
        aplicacoes: ['Exportação', 'Químicos', 'Grãos'],
        capa: img(1, 'b_magbagtubular.jpg'),
        galeria: large(1, 'magbagtubular01.jpg', 'magbagtubular05.jpg', 'bacg-c3.jpg', 'c4.jpg', 'c5.jpg'),
        configurador: true,
      },
      {
        slug: 'travado-cubo',
        codigo: '00003',
        nome: 'Big Bag Cubo / Travado',
        nomeCurto: 'Cubo / Travado',
        resumo: 'Travas internas mantêm o formato quadrado depois de cheio. Até 30% menos custo em contêiner.',
        descricao: [
          'Construído com travas de tecido costuradas internamente, mantém a forma quadrada ou retangular depois de cheio. As travas possuem furos que distribuem o produto por todo o interior do contentor.',
          'Ocupa menos espaço que os modelos arredondados, o que pode gerar redução de até 30% no custo de transporte e armazenagem, principalmente em contêiner. Disponível nas versões descartável 5:1 e reutilizável 6:1, em tecido plano laminado ou não.',
        ],
        destaques: ['Até 30% de economia em contêiner', 'Até 2.000 kg', 'Versões 5:1 e 6:1'],
        specs: [
          { label: 'Capacidade', valor: 'Até 2.000 kg' },
          { label: 'Fator de segurança', valor: '5:1 ou 6:1' },
          { label: 'Corpo', valor: 'Tecido plano, laminado ou não, com travas internas' },
          { label: 'Configurações', valor: 'Modelos C1 a C6' },
        ],
        aplicacoes: ['Exportação em contêiner', 'Armazéns', 'Indústria'],
        capa: img(4, 'b_travado-cubo.jpg'),
        galeria: [img(4, 'b_travado-cubo.jpg'), foto('revenda/dsc00530.jpg')],
        configurador: true,
      },
      {
        slug: 'cargas-perigosas',
        codigo: '004',
        nome: 'Big Bag Cargas Perigosas',
        nomeCurto: 'Cargas Perigosas UN',
        resumo: 'Certificação UN para produtos químicos e resíduos. Testado em tração, queda, tombamento e endireitamento.',
        descricao: [
          'Adequado ao transporte de produtos enquadrados na norma internacional UN de cargas perigosas. Projetado e construído para resistir aos exigentes testes de tração de alça, queda, tombamento e endireitamento.',
          'Além da construção especial, recebe impressão diferenciada com a classificação de risco do produto transportado. Tamanho e capacidade sob medida, até 1.500 kg, com opções de alça, válvulas e liner de polietileno.',
        ],
        destaques: ['Certificação UN', 'Impressão da classe de risco', 'Liner de polietileno'],
        specs: [
          { label: 'Capacidade', valor: 'Até 1.500 kg' },
          { label: 'Certificação', valor: 'UN (cargas perigosas)' },
          { label: 'Ensaios', valor: 'Tração de alça, queda, tombamento, endireitamento' },
          { label: 'Aplicação', valor: 'Produtos químicos, resíduos contaminados' },
        ],
        aplicacoes: ['Química', 'Petroquímica', 'Resíduos'],
        capa: img(5, 'b_capaperigosa.jpg'),
        galeria: large(5, 'c2.jpg', 'c3.jpg', 'c4.jpg', 'c5.jpg', 'magbagtubular05.jpg'),
        configurador: true,
      },
      {
        slug: 'porta-ensacado',
        codigo: '0004',
        nome: 'Big Bag Porta Ensacado',
        nomeCurto: 'Porta Ensacado',
        resumo: 'Acondiciona produtos já ensacados, substituindo paletes e reduzindo o custo logístico.',
        descricao: [
          'Utilizado para acondicionar, armazenar e transportar produtos ensacados como açúcar, farinha de trigo, grãos, químicos e petroquímicos.',
          'Substitui sacos paletizados e estretchados, reduzindo custo logístico e permitindo estocagem ágil no armazém, carregamento em caminhões e transporte até o consumidor final. Capacidade de 1.000 a 2.000 kg na versão reutilizável 6:1.',
        ],
        destaques: ['Substitui o palete', '1.000 a 2.000 kg', 'Reutilizável 6:1'],
        specs: [
          { label: 'Capacidade', valor: '1.000 a 2.000 kg' },
          { label: 'Fator de segurança', valor: '6:1' },
          { label: 'Conteúdo', valor: 'Sacos de açúcar, farinha, grãos, químicos' },
        ],
        aplicacoes: ['Usinas de açúcar', 'Moinhos', 'Armazéns'],
        capa: img(6, 'b_travado-cubo.jpg'),
        galeria: large(6, 'porta-ensacado2.jpg', 'porta-ensacado3.jpg', 'cuboc1.jpg'),
        configurador: true,
      },
    ],
  },
  {
    slug: 'sacarias',
    nome: 'Sacarias',
    resumo: 'Sacos de ráfia convencionais, laminados, boca costurada, com faixa de medida, valvulados e com liner.',
    descricao:
      'Sacaria de polipropileno em qualquer medida, com ou sem laminação e impressão. Do saco de colheita reforçado ao saco com liner para alimentos, cada linha é dimensionada para o produto e o manuseio do cliente.',
    icone: 'lucide:shopping-bag',
    capa: img(13, 'b_colheita.jpg'),
    produtos: [
      {
        slug: 'colheita-de-cafe',
        codigo: '15',
        nome: 'Sacaria Ráfia BC Colheita',
        nomeCurto: 'BC Colheita',
        resumo: 'Boca costurada reforçada, com ou sem faixa de medida. Dispensa o balaio e padroniza a colheita.',
        descricao: [
          'Sacaria com reforço na boca e excelente aceitação no manuseio de carga e descarga, reutilizável várias vezes. Muito utilizada na colheita de diversas culturas, com o melhor custo-benefício do mercado.',
        ],
        destaques: ['Faixa de medida dispensa o balaio', 'Versão HB dura até duas colheitas', 'Qualquer medida sob encomenda'],
        specs: [
          { label: 'Material', valor: 'Polipropileno (ráfia)' },
          { label: 'Boca', valor: 'Costurada com reforço na bainha' },
          { label: 'Medidas usuais', valor: '60x90 · 60x100 · 70x100 · 70x110 · 80x100 · 80x110' },
        ],
        variantes: [
          { nome: 'Boca costurada (BC)', texto: 'Reforço na boca para reutilização. Tamanhos: 60x90BC, 60x100BC, 70x100BC, 70x1,10BC, 80x100BC, 80x1,10BC.' },
          { nome: 'BC com faixa de medida', texto: 'A faixa de indicação de medida elimina custos e padroniza a colheita, evitando desperdício. Tamanhos: 60x90 a 80x1,10 C/FX.' },
          { nome: 'HB Colheita', texto: 'Sacaria especial de alta resistência que pode durar até duas colheitas. Tamanhos: 75x1,10, 70x1,10, 70x100, 60x100.' },
        ],
        medidas: ['60x90', '60x100', '70x100', '70x110', '80x100', '80x110'],
        aplicacoes: ['Cafeicultura', 'Colheita de diversas culturas'],
        capa: img(13, 'b_colheita.jpg'),
        galeria: [img(13, 'b_colheita.jpg'), foto('revenda/saco-rafia-6.jpg'), foto('revenda/dsc00516.jpg'), foto('cafeicultura/02234.jpg')],
      },
      {
        slug: 'convencionais',
        codigo: '0010',
        nome: 'Sacaria Ráfia Convencional',
        nomeCurto: 'Convencional',
        resumo: 'O saco de ráfia clássico para fertilizantes, rações, sementes, cereais, sal e construção civil.',
        descricao: [
          propriedadesPP,
          'Empregada para acondicionar fertilizantes, produtos frigoríficos, rações, farináceos, sementes, cereais, conexões em PVC, sal, peças metalúrgicas, entulhos, construção civil e açúcar. Produzida com e sem impressão personalizada.',
        ],
        destaques: ['Com ou sem impressão', 'Qualquer medida', 'Melhor custo por unidade'],
        specs: [
          { label: 'Material', valor: 'Polipropileno (ráfia) não laminado' },
          { label: 'Impressão', valor: 'Opcional, até 6 cores' },
        ],
        aplicacoes: ['Fertilizantes', 'Rações', 'Sementes', 'Construção civil'],
        capa: img(10, 'b_laminada.jpg'),
        galeria: large(10, 'sacoconvencional.jpg', 'pp-woven-bag-pp-bag-pp-transparent-bag-pp-leno-mesh-bag.jpg'),
      },
      {
        slug: 'laminadas',
        codigo: '0013',
        nome: 'Sacaria Ráfia Laminada',
        nomeCurto: 'Laminada',
        resumo: 'Ráfia laminada com PE: alta resistência, baixo peso e barreira contra umidade e pó.',
        descricao: [
          'O polipropileno laminado possui alta resistência com baixo peso, além das propriedades do PP: baixo custo, fácil moldagem e coloração, estabilidade térmica, resistência ao impacto e química.',
          'Ideal para fertilizantes, frigoríficos, rações, farináceos, sementes, cereais, sal, açúcar e produtos que exigem proteção contra umidade. Com e sem impressão personalizada.',
        ],
        destaques: ['Barreira contra umidade', 'Alta resistência, baixo peso', 'Impressão de alta definição'],
        specs: [
          { label: 'Material', valor: 'Polipropileno laminado com PE' },
          { label: 'Impressão', valor: 'Opcional, até 6 cores' },
        ],
        aplicacoes: ['Açúcar', 'Farináceos', 'Sal', 'Fertilizantes'],
        capa: img(11, 'b_laminada.jpg'),
        galeria: large(11, 'sacoconvencional.jpg', 'pp-woven-bag-pp-bag-pp-transparent-bag-pp-leno-mesh-bag.jpg'),
      },
      {
        slug: 'especiais',
        codigo: '14',
        nome: 'Sacaria Ráfia Modelos Especiais',
        nomeCurto: 'Especiais',
        resumo: 'HB especial, valvulado, sanfonado e com liner de polietileno virgem para alimentos.',
        descricao: [
          'Linha para necessidades específicas de resistência, envase automático ou proteção contra contaminação. Em ráfia convencional ou laminada.',
        ],
        destaques: ['HB para cargas pesadas', 'Valvulado para envase', 'Liner para alimentos'],
        specs: [
          { label: 'Linha valvulada', valor: 'Altura 12 a 18 cm · Base 18 a 36 cm' },
          { label: 'Linha sanfonada', valor: 'Sanfonamento lateral 5 a 10 cm' },
          { label: 'Liner', valor: 'Polietileno virgem: costurado, colado ou embutido' },
        ],
        variantes: [
          { nome: 'Saco HB Especial', texto: 'Alta resistência para reaproveitar a embalagem várias vezes. Parafusos, pregos, grampos, carvão, indústria e colheita.' },
          { nome: 'Linha valvulada', texto: 'Ráfia convencional ou laminada. Altura 12 a 18 cm, base 18 a 36 cm.' },
          { nome: 'Linha sanfonada', texto: 'Sanfonamento lateral de 5 a 10 cm para melhor empilhamento.' },
          { nome: 'Saco com liner', texto: 'Saco plástico interno de polietileno virgem, boca costurada, colado ou embutido. Açúcar, cevada, sementes e alimentos.' },
        ],
        aplicacoes: ['Alimentos', 'Indústria', 'Carvão', 'Envase automático'],
        capa: img(12, 'b_sacos-2.jpg'),
        galeria: large(12, 'especialhb.jpg', 'dsc00528.jpg', 'p1010742.jpg', 'p1010744.jpg'),
      },
    ],
  },
  {
    slug: 'sacos-impressos',
    nome: 'Sacos Impressos',
    resumo: 'Impressão em até 6 cores. Tamanhos, artes e cores personalizados para a marca do cliente.',
    descricao:
      'Sua marca na embalagem. Imprimimos em até seis cores sobre ráfia convencional ou laminada, em qualquer construção: boca costurada, valvulado, sanfonado, com liner ou HB especial.',
    icone: 'lucide:printer-check',
    capa: foto('revenda/saco-rafia-6.jpg'),
    produtos: [
      {
        slug: 'impressos',
        codigo: '17',
        nome: 'Sacaria Ráfia Impressa',
        nomeCurto: 'Impressa',
        resumo: 'Até 6 cores em qualquer linha de sacaria, com arte e medidas sob demanda.',
        descricao: [
          'Tamanhos, impressões e cores personalizados conforme a necessidade de cada cliente. Disponível sobre ráfia convencional (baixo custo) ou laminada (alta resistência com baixo peso).',
        ],
        destaques: ['Até 6 cores', 'Arte personalizada', 'Todas as construções de saco'],
        specs: [
          { label: 'Cores', valor: 'Até 6' },
          { label: 'Base', valor: 'Ráfia convencional ou laminada' },
          { label: 'Construções', valor: 'BC, valvulado, sanfonado, liner, HB' },
        ],
        variantes: [
          { nome: 'Convencional impresso', texto: 'Polipropileno não laminado, custo otimizado.' },
          { nome: 'Laminado impresso', texto: 'PP laminado com PE, alta definição de impressão e barreira.' },
          { nome: 'Valvulado / sanfonado', texto: 'Altura 12 a 18 cm, base 18 a 36 cm, sanfona 5 a 10 cm.' },
          { nome: 'Com liner', texto: 'Liner de polietileno virgem costurado, colado ou embutido.' },
        ],
        aplicacoes: ['Marca própria', 'Rações', 'Sementes', 'Fertilizantes', 'Alimentos'],
        capa: foto('revenda/saco-rafia-6.jpg'),
        galeria: [foto('revenda/saco-rafia-6.jpg'), foto('revenda/dsc00516.jpg'), img(13, 'b_colheita.jpg')],
      },
    ],
  },
  {
    slug: 'panos-e-lonas',
    nome: 'Panos e Lonas',
    resumo: 'Panos de colheita de 2 a 30 m, derriçador nº 4 e lonas de terreiro em grandes formatos.',
    descricao:
      'O pano de café PraCafé é feito em polipropileno de 65 a 115 g/m², com alta tenacidade, ventilação e reciclabilidade. Do pano tradicional branco ao derriçador especial preto e às lonas de terreiro de 30x40 m.',
    icone: 'lucide:layers',
    capa: img(15, 'b_pano-cafe.jpg'),
    produtos: [
      {
        slug: 'pano-tradicional',
        codigo: '059',
        nome: 'Pano Café Tradicional',
        nomeCurto: 'Pano Tradicional',
        resumo: 'Pano branco de polipropileno, 65 a 115 g/m², de 2 a 30 metros. Cafeicultura, urucum, pimenta.',
        descricao: [
          propriedadesPP,
          'Principal utilização na colheita de café, urucum, pimenta e outras culturas. Alta tenacidade (resistência por alongamento), ventilação para produtos que precisam respirar e reciclabilidade.',
        ],
        destaques: ['Baixo custo por colheita', 'Alta tenacidade', 'Qualquer tamanho sob encomenda'],
        specs: [
          { label: 'Cor', valor: 'Branco tradicional' },
          { label: 'Gramatura', valor: '65 a 115 g/m²' },
          { label: 'Larguras', valor: '2,50 m · 2,70 m · 2,93 m' },
          { label: 'Embalagem', valor: 'Pacote com 10 peças · Embarque 50 peças' },
        ],
        medidas: ['2 m', '3 m', '3,5 m', '4 m', '5 m', '6 m', '8 m', '10 m', '12 m', '15 m', '20 m', '30 m', 'ZM nº 6', '4x2,93 m', '6x2,93 m'],
        aplicacoes: ['Cafeicultura', 'Urucum', 'Pimenta'],
        capa: img(15, 'b_pano-cafe.jpg'),
        galeria: [img(15, 'b_pano-cafe.jpg'), foto('revenda/pano-colheita-cafe.jpg'), foto('cafeicultura/20120525colheita.jpg')],
      },
      {
        slug: 'panos-especiais',
        codigo: '060',
        nome: 'Panos e Lonas Especiais',
        nomeCurto: 'Especiais e Lonas',
        resumo: 'Derriçador nº 4 que alcança duas carreiras, cores preto, cinza e amarelo, lonas de terreiro sob medida.',
        descricao: [
          'Linha pano colheita derriçador em tecido convencional branco 65 g/m² ou especial preto 102 g/m². Os panos especiais nº 4 alcançam os pés de café de duas carreiras com um só pano, com alto rendimento na colheita.',
          'Linha lonas para terreiro: qualquer largura x comprimento, principalmente grandes formatos (50x3 m, 20x50 m, 30x40 m). Terreiro de café, forro para tulhas e forro para caminhão.',
        ],
        destaques: ['Nº 4 cobre duas carreiras', 'Preto 102 g/m² para derriça', 'Lonas de até 30x40 m'],
        specs: [
          { label: 'Cores', valor: 'Branco, preto, cinza, amarelo' },
          { label: 'Gramatura', valor: '65 a 115 g/m²' },
          { label: 'Larguras', valor: '2,50 · 2,70 · 2,93 · 3,80 m' },
          { label: 'Embalagem', valor: 'Pacotes com 2 ou 10 peças · Embarque 50 peças' },
        ],
        medidas: ['8 m nº 4', '10 m nº 4', '12 m nº 4', '15 m nº 4', '20 m nº 4', 'Lonas sob medida'],
        aplicacoes: ['Derriça de café', 'Terreiro', 'Forro de tulha e caminhão'],
        capa: img(16, 'b_pano-2.jpg'),
        galeria: [img(16, 'b_pano-2.jpg'), foto('cafeicultura/20120525colheita.jpg'), foto('cafeicultura/cafe-05.jpg')],
      },
    ],
  },
  {
    slug: 'barbantes-e-fitilhos',
    nome: 'Barbantes e Fitilhos',
    resumo: 'Chicotes para costura de sacaria e amarração na estaca, fitilhos em rolo de 10 kg.',
    descricao:
      'Barbantes, fitilhos e fitas com os melhores padrões de resistência, qualidade e rendimento. Para costura de sacaria, estaqueamento de tomate e pimentão e amarração em geral.',
    icone: 'lucide:spool',
    capa: img(7, 'b_dsc00550.jpg'),
    produtos: [
      {
        slug: 'chicote-branco-leitoso',
        codigo: '000056',
        nome: 'Fitilho Chicote Branco Leitoso',
        nomeCurto: 'Chicote Branco Leitoso',
        resumo: 'Chicotes de 2,20 m, 1,10 m e 55 cm com aproximadamente 110 fios cada.',
        descricao: [
          'Costura de sacaria (chicote 02/10 de 1,10 m), amarração de tomate e pimentão na estaca (chicote de 55 cm) e amarração de hortaliças.',
        ],
        destaques: ['Aprox. 110 fios por chicote', 'Pacotes de 5 e 10 kg', 'Três comprimentos'],
        specs: [
          { label: '2,20 m', valor: '333 g · 15 bastões (5 kg) · 30 bastões (10 kg)' },
          { label: '1,10 m', valor: '166 g · 30 bastões (5 kg) · 60 bastões (10 kg)' },
          { label: '55 cm', valor: '83 g · 60 bastões (5 kg) · 120 bastões (10 kg)' },
        ],
        aplicacoes: ['Costura de sacaria', 'Estaqueamento', 'Hortaliças'],
        capa: img(7, 'b_dsc00550.jpg'),
        galeria: [img(7, 'b_dsc00550.jpg'), foto('revenda/fitilho-branco-leitoso-2.jpg')],
      },
      {
        slug: 'chicote-extra-virgem',
        codigo: '090',
        nome: 'Fitilho Chicote Extra Virgem',
        nomeCurto: 'Chicote Extra Virgem',
        resumo: 'Matéria-prima virgem, 140 a 150 fios por chicote, para costura e amarração exigentes.',
        descricao: [
          'Chicotes de 2,20 m e 1,10 m em polipropileno extra virgem, com peso médio de 333 g e 140 a 150 fios por chicote. Costura de sacaria, amarração de tomate e pimentão na estaca e amarração em geral.',
        ],
        destaques: ['Matéria-prima virgem', '140 a 150 fios', 'Pacotes de 5 e 10 kg'],
        specs: [
          { label: 'Comprimentos', valor: '2,20 m e 1,10 m' },
          { label: 'Peso médio', valor: '333 g por chicote' },
          { label: 'Embalagem', valor: '5 kg (15 a 30 bastões) · 10 kg (30 a 60 bastões)' },
        ],
        aplicacoes: ['Costura de sacaria', 'Estaqueamento', 'Amarração'],
        capa: img(17, 'b_fitilhochicote.jpg'),
        galeria: large(17, 'fitilhochicote2.jpg', 'fitilho-cristal-2.jpg', 'fitilho-cristal-3.jpg'),
      },
      {
        slug: 'fitilho-em-rolos',
        codigo: '1007',
        nome: 'Fitilhos em Rolo',
        nomeCurto: 'Fitilho em Rolo',
        resumo: 'Fitilho de PP e PE reprocessados em fardos de 10 kg para amarração geral.',
        descricao: [
          'Produzido a partir de aparas industriais de polipropileno (ráfia) e polietileno (plástico), o fitilho em rolo é a solução econômica para amarração e fechamento de embalagens em geral.',
        ],
        destaques: ['Fardos de 10 kg', 'Material reciclado', 'Alto rendimento'],
        specs: [
          { label: 'Material', valor: 'PP e PE reprocessados' },
          { label: 'Embalagem', valor: 'Fardo de 10 kg' },
        ],
        aplicacoes: ['Amarração geral', 'Fechamento de embalagens'],
        capa: img(8, 'b_fitilho-amarra.jpg'),
        galeria: [img(8, 'b_fitilho-amarra.jpg')],
      },
    ],
  },
  {
    slug: 'marca-propria',
    nome: 'Marca Própria',
    resumo: 'Luvas, alças de peneira e lâminas de roçadeira com a marca Pra Café, prontas para a gôndola.',
    descricao:
      'Acessórios do dia a dia da lavoura com a qualidade e a marca PraCafé, em embalagens de varejo para agropecuárias e distribuidores.',
    icone: 'lucide:badge-check',
    capa: img(20, 'b_luvas-1.jpg'),
    produtos: [
      {
        slug: 'luvas-pra-cafe',
        codigo: '102',
        nome: 'Luvas Pra Café',
        nomeCurto: 'Luvas',
        resumo: 'Luvas tricotadas de poliamida e poliéster, com e sem pigmento, para colheita e indústria.',
        descricao: [
          'Excelente tato, permitem o manuseio de peças pequenas com óleos ou graxas, livres de pelos, com excelente resistência mecânica e sem transpiração das mãos.',
        ],
        destaques: ['Com ou sem pigmento', 'Pacote com 12 pares', 'Fardo com 300 pares'],
        specs: [
          { label: 'Material', valor: 'Poliamida e/ou poliéster tricotados' },
          { label: 'Modelos', valor: 'Luva pesada com pigmento · sem pigmento' },
          { label: 'Embalagem', valor: '12 pares por pacote · 300 pares por fardo' },
        ],
        aplicacoes: ['Colheita', 'Automotiva', 'Metalmecânica'],
        capa: img(20, 'b_luvas-1.jpg'),
        galeria: [img(20, 'b_luvas-1.jpg'), foto('revenda/luva-helanca-com-pigmento-2.jpg')],
      },
      {
        slug: 'alcas-de-peneiras',
        codigo: '33',
        nome: 'Alças de Peneira Pra Café',
        nomeCurto: 'Alças de Peneira',
        resumo: 'Alças de alta resistência para peneiras de colheita tradicional, mesmo expostas ao tempo.',
        descricao: ['Alças de alta resistência, ainda que expostas a intempéries climáticas. Agricultura, construção civil e mineração.'],
        destaques: ['Alta resistência', 'Pacote com 10 unidades', 'Fardo com 100 unidades'],
        specs: [{ label: 'Embalagem', valor: '10 unidades por pacote · 100 por fardo' }],
        aplicacoes: ['Cafeicultura', 'Construção civil', 'Mineração'],
        capa: img(21, 'b_alaa-peneira.jpg'),
        galeria: [img(21, 'b_alaa-peneira.jpg')],
      },
      {
        slug: 'laminas-para-rocadeiras',
        codigo: '73',
        nome: 'Lâminas para Roçadeira Pra Café',
        nomeCurto: 'Lâminas de Roçadeira',
        resumo: 'Aço cromo-vanádio, 350 mm, 1,75 mm de espessura, furos de 1" e 20 mm.',
        descricao: ['Lâminas fabricadas em aço cromo-vanádio para durabilidade e segurança. Agricultura, pecuária, jardinagem e manutenção de rodovias.'],
        destaques: ['Aço cromo-vanádio', '350 mm de diâmetro', 'Pacote com 12 · Caixa com 50'],
        specs: [
          { label: 'Diâmetro', valor: '350 mm' },
          { label: 'Espessura', valor: '1,75 mm' },
          { label: 'Peso', valor: '345 g' },
          { label: 'Furos', valor: '1 polegada e 20 mm' },
        ],
        aplicacoes: ['Agricultura', 'Pecuária', 'Jardinagem', 'Rodovias'],
        capa: img(19, 'b_lamina.jpg'),
        galeria: [img(19, 'b_lamina.jpg'), foto('revenda/lamina-roaadeira-pracafe-2.jpg')],
      },
    ],
  },
  {
    slug: 'tecidos-de-rafia',
    nome: 'Tecidos de Ráfia',
    resumo: 'Tecido plano e tubular de 60 a 240 g/m², com aditivo UV, para confecção de big bags e sacaria.',
    descricao:
      'Fornecemos o tecido de polipropileno para quem confecciona: pesado para big bags, tubular para sacaria e especiais para aplicações técnicas, laminado ou não.',
    icone: 'lucide:layers-3',
    capa: img(23, 'b_produtostecido4.jpg'),
    produtos: [
      {
        slug: 'tecidos-big-bags',
        codigo: '107',
        nome: 'Tecido Ráfia Big Bag',
        nomeCurto: 'Tecido Big Bag',
        resumo: 'Tecido pesado de 160 a 240 g/m² e leve de 67 a 95 g/m², com UV, para contentores de até 2 toneladas.',
        descricao: [
          'Tecido de polipropileno para contentores flexíveis que armazenam produtos sólidos, em pó, granulados, líquidos ou pastosos. Atende químicos, petroquímicos, fertilizantes, minérios, açúcar e alimentos.',
          'Alta resistência à tração e aditivo UV, suportando cargas máximas de até duas toneladas.',
        ],
        destaques: ['160 a 240 g/m²', 'Aditivo UV', 'Até 2 toneladas'],
        specs: [
          { label: 'Gramatura pesada', valor: '160 a 240 g/m²' },
          { label: 'Gramatura leve', valor: '67 a 95 g/m²' },
          { label: 'Cores', valor: 'Branco e carijó marrom' },
          { label: 'Tipos', valor: 'Convencional e plano, oneway e multway' },
        ],
        aplicacoes: ['Confecção de big bags', 'Fertilizantes', 'Minério', 'Açúcar'],
        capa: img(23, 'b_produtostecido4.jpg'),
        galeria: [img(23, 'b_produtostecido4.jpg')],
      },
      {
        slug: 'tecidos-sacarias',
        codigo: '108',
        nome: 'Tecido Ráfia Sacarias',
        nomeCurto: 'Tecido Sacaria',
        resumo: 'Tecido tubular de 45 a 80 cm e 60 a 115 g/m², laminado ou não, em teares circulares.',
        descricao: [
          'Tecido tubular de polipropileno produzido em teares circulares para confecção de sacaria, laminado ou não conforme especificação do cliente. Fertilizantes, açúcar, sal, sementes, farinha, rações, resinas e frigoríficos.',
        ],
        destaques: ['Tubular 45 a 80 cm', '60 a 115 g/m²', 'Laminado opcional'],
        specs: [
          { label: 'Largura', valor: '45 a 80 cm' },
          { label: 'Gramatura', valor: '60 a 115 g/m²' },
          { label: 'Construção', valor: 'Tubular em tear circular' },
        ],
        aplicacoes: ['Confecção de sacaria', 'Fertilizantes', 'Rações'],
        capa: img(24, 'b_big-bag.jpg'),
        galeria: [img(24, 'b_big-bag.jpg')],
      },
      {
        slug: 'tecidos-especiais',
        codigo: '105',
        nome: 'Tecidos Ráfia Especiais',
        nomeCurto: 'Tecidos Especiais',
        resumo: 'Tecidos técnicos de ráfia para lonas, forros, geotêxteis e aplicações sob especificação.',
        descricao: [
          'Tecidos de polipropileno desenvolvidos sob especificação: gramatura, largura, cor, laminação e aditivo UV definidos pelo uso final. Lonas de terreiro, forros de tulha, coberturas e aplicações industriais.',
        ],
        destaques: ['Sob especificação', 'Larguras até 3,80 m', 'UV e laminação opcionais'],
        specs: [
          { label: 'Larguras', valor: 'Até 3,80 m' },
          { label: 'Gramatura', valor: '65 a 240 g/m²' },
        ],
        aplicacoes: ['Lonas', 'Forros', 'Indústria'],
        capa: img(22, 'b_especialhb.jpg'),
        galeria: [img(22, 'b_especialhb.jpg')],
      },
    ],
  },
  {
    slug: 'fios-e-acessorios',
    nome: 'Fios e Acessórios',
    resumo: 'Fios multifilamento de 1260 e 3600 denier, alças, cadarços e porta-etiquetas para big bags.',
    descricao:
      'Tudo o que a confecção precisa além do tecido: fios de costura com UV para sacaria e big bag, alças de 500 a 2.000 kg, cadarços para válvulas e porta-etiquetas.',
    icone: 'lucide:scissors',
    capa: img(25, 'b_linhas-01.jpg'),
    produtos: [
      {
        slug: 'fios-para-costura',
        codigo: '071',
        nome: 'Fios e Linhas de Costura',
        nomeCurto: 'Fios de Costura',
        resumo: 'Multifilamento 1260 denier para sacaria e 3600 denier para big bag, 2 ou 3 cabos, com UV.',
        descricao: [
          'Fios multifilamento para sacaria, cordoaria e tecelagem. 1260 denier ideal para costura de sacaria; 3600 denier para confecção de big bags. Opções de 2 e 3 cabos com torção reforçada para costuras e fixação de alças.',
          'Disponíveis lisos ou texturizados, com aditivo UV opcional para maior durabilidade do produto final.',
        ],
        destaques: ['1260 e 3600 denier', '2 ou 3 cabos', 'Aditivo UV opcional'],
        specs: [
          { label: '1260 denier', valor: 'Costura de sacaria' },
          { label: '3600 denier', valor: 'Confecção de big bags' },
          { label: 'Acabamento', valor: 'Liso ou texturizado, com ou sem UV' },
        ],
        aplicacoes: ['Confecção de sacaria', 'Confecção de big bags', 'Cordoaria'],
        capa: img(25, 'b_linhas-01.jpg'),
        galeria: large(25, 'linhas-01.jpg', 'linhas-02.jpg', 'linha-03.jpg'),
      },
      {
        slug: 'acessorios-para-big-bags',
        codigo: '039',
        nome: 'Alças, Cadarços e Porta-Etiquetas',
        nomeCurto: 'Acessórios Big Bag',
        resumo: 'Alças de PP com UV para 500 a 2.000 kg, cadarços de 14, 20 e 30 mm e porta-etiqueta em PEBD virgem.',
        descricao: [
          'Acessórios de polipropileno com aditivo UV para confecção de big bags. Alças dimensionadas para operações portuárias e de carga de 500 a 2.000 kg, cadarços de 14, 20 e 30 mm para fechamento de válvulas e porta-etiqueta em saco de PEBD virgem 25x35x0,20.',
        ],
        destaques: ['Alças de 500 a 2.000 kg', 'Cadarços 14, 20 e 30 mm', 'Porta-etiqueta PEBD'],
        specs: [
          { label: 'Alças', valor: '500 a 2.000 kg, com UV' },
          { label: 'Cadarços', valor: '14 · 20 · 30 mm' },
          { label: 'Porta-etiqueta', valor: 'PEBD virgem 25x35x0,20' },
        ],
        aplicacoes: ['Confecção de big bags', 'Portos', 'Carga'],
        capa: img(26, 'b_alcas.jpg'),
        galeria: large(26, 'figa.jpg', 'portaetqieuta.jpg'),
      },
    ],
  },
];

export const todosProdutos = categorias.flatMap((c) => c.produtos.map((p) => ({ ...p, categoria: c })));

export function getProduto(slug: string) {
  return todosProdutos.find((p) => p.slug === slug);
}

export function getCategoria(slug: string) {
  return categorias.find((c) => c.slug === slug);
}

// Aliases para slugs antigos usados em aplicacoes.ts
const aliases: Record<string, string> = {
  tradicional: 'pano-tradicional',
  especias: 'panos-especiais',
  travadocubo: 'travado-cubo',
};
export function resolveProduto(slug: string) {
  return getProduto(aliases[slug] ?? slug);
}
