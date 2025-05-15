let produtoEmbalado = {
    nome : 'Laptop HP',
    categoria: 'Eletronicos',
    peso:1.5,
    preco: 3500
}

console.log(`O produto ${produtoEmbalado.nome}, pesando ${produtoEmbalado.peso} kg,esta a venda por ${produtoEmbalado.preco.toLocaleString('pt-BR',{style:'currency',currency: 'BRL'})}`);