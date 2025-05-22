import entradaDados from 'readline-sync';

let semana = entradaDados.questionInt('Informe um dia da semana: ')
switch (semana) {
    case 1:
        console.log('Domingo');
        break;
    case 2:
        console.log('Segunda');
        break;
    case 3:
        console.log('Terça');
        break;
    case 4:
        console.log('Quarta');
        break;
    case 5 :
        console.log('Quinta');
        break;
    case 6:
        console.log('Sexta');
        break;
    case 7:
        console.log('Sabado');
        break;
    default:
        console.log('Valor invalido\nInforme o valor correto')
        break;
}