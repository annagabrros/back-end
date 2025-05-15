import entradaDados from 'readline-sync';

let apartamento = {
    quartos: 2,
    tipo: 'Apartamento',
    endereco: 'Avenida Principal, 456 - Centro',
    andar: 7
}

console.log(`Apartamento com ${apartamento.quartos} quartos,localizado no ${apartamento.endereco}`);