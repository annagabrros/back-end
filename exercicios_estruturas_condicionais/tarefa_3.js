import entradaDados from 'readline-sync';

let x = entradaDados.questionFloat('Informe o primeiro valor: ')
let y = entradaDados.questionFloat('Informe o segundo valor: ')
let op = entradaDados.questionFloat('Escolha a opçao: \n[1] Soma\n[2] Subtração\n[3] Multiplicação\n[4] Divisão')

switch (op){
    case 1:
        console.log(`${x} + ${y} = ${x + y}`);
        break;
    case 2:
        console.log(`${x} - ${y} = ${x - y}`);
        break;
    case 3:
        console.log(`${x} * ${y} = ${x * y}`);
            break;
        case 4:
            console.log(`${x} / ${y} = ${x / y}`);
                break;
}