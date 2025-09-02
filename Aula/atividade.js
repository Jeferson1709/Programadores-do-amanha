let listaDeCompras = ['Maçã', 'Pão', 'Leite'];

// 1. Seu primeiro desafio é adicionar 'Ovos' no FINAL da lista.
//    Resultado esperado: ['Maçã', 'Pão', 'Leite', 'Ovos']

console.log("Exercício 1:");
listaDeCompras.push("Ovos");
console.log(listaDeCompras);
console.log("\n\n=========================================");

// 2. Agora, adicione 'Manteiga' no INÍCIO da lista.
//    Resultado esperado: ['Manteiga', 'Maçã', 'Pão', 'Leite', 'Ovos']

console.log("Exercício 2:");
listaDeCompras.unshift("Manteiga");
console.log(listaDeCompras);
console.log("\n\n=========================================");



// 3. Você percebeu que não precisa mais de 'Leite'. Remova-o da lista.
//    Use o splice!
//    Resultado esperado: ['Manteiga', 'Maçã', 'Pão','Ovos']

console.log("Exercício 3:");
listaDeCompras.splice(3, 1);
console.log(listaDeCompras);
console.log("\n\n=========================================");



// 4. O pão já foi comprado! Remova o ÚLTIMO item da lista, mas guarde-o em uma variável chamada 'itemComprado'.
//    Resultado esperado: listaDeCompras -> ['Manteiga', 'Maçã', 'Pão'], itemComprado -> 'Ovos'

let itemComprado = listaDeCompras[3];

console.log("Exercício 4:");
listaDeCompras.pop();
console.log("\n\nItem Comprado: " + itemComprado);

console.log(listaDeCompras);
console.log("\n\n=========================================");



// 5. O primeiro item da lista é o próximo a ser pego. Remova-o e guarde-o na variável 'proximoItem'.
//    Resultado esperado: listaDeCompras ->
//['Maçã', 'Pão'], proximoItem -> "manteiga"

console.log("Exercício 5.:");
let proximoItem = listaDeCompras[0];
listaDeCompras.shift();
console.log("\n\nPróximo Item: " + proximoItem);
console.log(listaDeCompras);
console.log("\n\n==========================================");

