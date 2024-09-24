interface Produto { id: number; nome: string; descricao: string; preco: number; imagem: string; };

const produto1: Produto = {
    id: 1,
    nome: "Smartphone",
    descricao: "Top de linha",
    preco: 4500,
    imagem: "URL"
};

// torna todas as propriedades do produto opcionais
const produto2: Partial<Produto> = {};