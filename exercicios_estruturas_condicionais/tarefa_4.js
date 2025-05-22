import entradaDados from 'readline-sync';

let salario = entradaDados.questionFloat('Digite o seu salario: ')
let cat = entradaDados.question('Selecione uma categoria\n[A] 5%\n[B] 10%\n[C] 15%\n[D]20% ').toUpperCase();
let bonus = 0

switch(cat){
    case 'A':
        bonus = salario * 0.05;
        console.log(`${(salario+bonus).toLocaleString('pt-BR',{style:'currency',currency: 'BRL'})}`)
        break;
    case 'B':
        bonus = salario * 0.10;
        console.log(`${(salario+bonus).toLocaleString('pt-BR',{style:'currency',currency: 'BRL'})}`)
        break;
    case 'C':
        bonus = salario * 0.15;
        console.log(`${(salario+bonus).toLocaleString('pt-BR',{style:'currency',currency: 'BRL'})}`)
        break;
    case 'D':
        bonus = salario * 0.20;
        console.log(`${(salario+bonus).toLocaleString('pt-BR',{style:'currency',currency: 'BRL'})}`)
        break;
    default:
        console.log('Valor invalido\nInforme o valor correto')
        break;
}