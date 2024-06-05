import { Cars } from '@/data/Cars';

export const cars: Cars[] = [
  {
    id: 1,
    modelo: 'Modelo Fiat Argo Drive',
    descricao: 'FIAT - na cor branca. É um hatchback que combina design arrojado, tecnologia avançada, desempenho eficiente e segurança.',
    ano: '2024',
    valor: 'R$ 90.000,00',
    codigo: 'XYZ123',
    vendaLocacao: 'Venda',
    img: '/images/fiat.png',
    destaque:'sim'
  },
  {
    id: 2,
    modelo: 'Modelo Corolla Cross',
    descricao: 'Toyota - cor azul. É um SUV compacto que traz a confiabilidade e a qualidade, para um formato mais robusto e versátil.',
    ano: '2022',
    valor: 'R$ 180.000,00',
    codigo: 'ABC456',
    vendaLocacao: 'Locação',
    img: '/images/toyota.png',
    destaque:'nao'
  },
  {
    id: 3,
    modelo: 'Modelo Corsa',
    descricao: 'Chevrolet - cor branca. É um carro compacto que oferece uma excelente combinação de design elegante, eficiência de combustível, conforto, e segurança.',
    ano: '2011',
    valor: 'R$ 40.000,00',
    codigo: 'LMN789',
    vendaLocacao: 'Venda',
    img: '/images/corsa.png',
    destaque:'sim'
  },
  {
    id: 4,
    modelo: 'Modelo Corolla Cross XRE',
    descricao: 'Toyota - cor branco polar. É uma das versões mais sofisticadas e bem equipadas, trazendo uma série de recursos avançados e desempenho eficiente.',
    ano: '2022',
    valor: 'R$ 178.000,00',
    codigo: 'LMN789',
    vendaLocacao: 'Venda',
    img: '/images/toyota2.png',
    destaque: 'nao'
  }
];
