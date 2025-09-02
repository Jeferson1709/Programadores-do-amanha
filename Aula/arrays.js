// let serve para um escopo fechado hoisting(insamento). 
// var nome = "Carlos";
// let nome = "Jeferson";


// chamando a função. 

// console.log(nome);

//Definindo um Array let churrasco = [0,1,2];
let churrasco = ["carvão", "Churrasqueira",
    "Chorume Captalista",
    "Pão de Alho",
    "Espetinho de Queijo",
    "Picanha",
];//Lista inincial do grupo  do churrasco.

/* 
console.log("========= LISTA DE CHURRASCO =============");
console.log(churrasco);
console.log("==========================================");

console.log("========== ADICIONANDO SAL GROSSO===========");
//Adicionando um elemento no final do array e retornando um novo tamanho. 
churrasco.push("Sal Grosso");
console.log("============================================");

churrasco.pop();//Remove o último elemento do array. 
console.log(churrasco);

console.log("========== ADICIONANDO CHÉ VERDE ===========");
churrasco.unshift("Chá Verde"); // Adicionou chá verde no início do array. 
console.log(churrasco);
console.log("============================================");


console.log("========== REMOVENDO O CHÁ VERDE ===========");
churrasco.shift("Chá Verde"); // Removeu o primeiro elemento do array.  
console.log(churrasco);
console.log("============================================");

 */

// console.log("ANTES");
// console.log(churrasco);
// console.log("DEPOIS");
// //Posição.//Quantidade de elementos.
// churrasco.splice(0,0,"Jeferson");
// console.log(churrasco);



console.log("==========ADICIONANDO SAL GROSSO COM SPLICE===========");
churrasco.splice(4, 0, "Sal Grosso");
console.log(churrasco);

console.log("======================================================");





//Métodos bitinj

//Push(); Adiciona elementos no final de um array e retorna o novo tamanho do array.

//Pop(); Remove o último elemento e retorna ele.

//Unshift(); Adiciona um elemento no início do array.

//Shift(); Remove o primeiro elemento do array.

//Splice(); Remove um elemento de acordo com posição (Posição, quantidade deleteda, adicionar item... ); Count = 0 não remove o elemento.