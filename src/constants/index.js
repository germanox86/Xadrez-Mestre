import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  file02,
  homeSmile,
  notification2,
  notification3,
  notification4,
  plusSquare,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  sliders04,
  yourlogo,
} from "../assets";

import github from "../assets/socials/github.svg";
import linkedin from "../assets/socials/linkedin.svg";

export const navigation = [
  {
    id: "0",
    title: "Benefícios",
    url: "#how-to-use",
  },
  {
    id: "2",
    title: "Curiosidades",
    url: "#features",
  },
  {
    id: "3",
    title: "Preço",
    url: "#pricing",
  },
  {
    id: "4",
    title: "Conteúdo",
    url: "#roadmap",
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const xadrezBeneficios = [
  "Concentração e Foco",
  "Racioncínio Lógico",
  "Memória e Visualização",
];

export const xadrezBeneficiosIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Aberturas",
    text: "Domine os princípios fundamentais e as aberturas mais populares (ex: Italiana, Espanhola, Siciliana) para começar com vantagem.",
    date: "Aberturas Estratégicas",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Meio-Jogo e Estratégia",
    text: "Controle do centro, desenvolvimento de peças, estrutura de peões, planos de ataque e defesa em posições complexas.",
    date: "Estratégia",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Táticas Essenciais",
    text: "Aprenda garfos, cravadas, ataques duplos, sacrifícios e padrões que decidem partidas em poucos lances.",
    date: "Cáculos Táticos",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Finais de Partida",
    text: "Técnicas de mate com rei e dama, rei e torre, finais de peões, oposição e promoção — para converter vantagens em vitória.",
    date: "End Game",
    imageUrl: roadmap4,
  },
];


export const benefits = [
  {
    id: "0",
    title: "O que é xadrez?",
    text: "Xadrez é um jogo de estratégia para dois jogadores, disputado em um tabuleiro 8x8, onde o objetivo é dar xeque-mate ao rei adversário.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Quantas peças cada jogador tem no início?",
    text: "Cada jogador começa com 16 peças: 1 rei, 1 rainha, 2 torres, 2 bispos, 2 cavalos e 8 peões.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "O que significa 'xeque-mate'?",
    text: "Xeque-mate ocorre quando o rei está sob ataque (xeque) e não há jogada legal para escapar, encerrando a partida.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Qual peça pode pular sobre outras?",
    text: "O cavalo é a única peça que pode pular sobre peças próprias ou adversárias.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "O que é promoção de peão?",
    text: "Quando um peão chega à última fileira do tabuleiro, pode ser promovido a rainha, torre, bispo ou cavalo.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Quanto tempo dura uma partida de xadrez?",
    text: "Pode variar de minutos a horas, dependendo do controle de tempo escolhido pelos jogadores.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "Iniciante",
    price: "R$49",
    features: [
      "50 lições essenciais",
      "Exercícios diários",
      "Acesso a comunidade exclusiva",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Caminho do Grande Mestre",
    price: "R$99",
    features: [
      "Tudo do Básico + 200 lições avançadas",
      "análise de partidas ao vivo com instrutores",
      "torneios exclusivos com premiações exclusivas",
    ],
  },
  {
    id: "3",
    title: "Deluxe",
    description: "Caminho do Grande Mestre",
    price: "R$399",
    features: [
      "Tudo do Premium + Tabuleiro e Peças DGT",
    ],
  },
];

export const socials = [
  {
    id: "0",
    title: "LinkedIn",
    iconUrl: linkedin,
    url: "https://www.linkedin.com/in/germano-fonteles-948723390/",
  },
  {
    id: "1",
    title: "Github",
    iconUrl: github,
    url: "https://github.com/germanox86",
  },
];
