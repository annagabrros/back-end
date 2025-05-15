class Imovel {
    constructor(quartos, tipo, endereco){
    this.quartos = quartos;
    this.tipo = tipo;
    this.endereco = endereco
    }
}

let casa = new Imovel();
casa.quartos = 2;
casa.tipo = 'sobrado';
casa.endereco = 'centro';

let ap= new Imovel(2, 'Apartamento', 'Rua da depressao,bairro da solidao, num:666');

console.log(`Quartos: ${casa.quartos} \nTipo: ${casa.tipo} \nEndereço ${casa.endereco}`);
console.log(`Quartos: ${ap.quartos}\nTipo: ${ap.tipo}\nEndereço ${ap.endereco}`);