export type Cars = {
    id: number;
    modelo: string;
    descricao: string,
    ano: string;
    valor: string;
    codigo: string;
    vendaLocacao: 'Venda' | 'Locação'; 
    img: string;
    destaque:'sim' | 'nao'; 
  }
