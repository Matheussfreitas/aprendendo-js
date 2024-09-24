interface Especificacoes {
    marca: string;
    modelo: string;
    placaDeVideo: string;
    memoria: string;
    procesador: string;
    armazenamento: string;
    [extra: string]: string | number | boolean;
};

const computador: Especificacoes = {
    marca: "Apple",
    modelo: "Mac",
    placaDeVideo: "Nvidia 4090ti",
    memoria: "64 GB",
    procesador: "Ryzen 10",
    armazenamento: "2 TB",
    entrada: "Displayport"
};