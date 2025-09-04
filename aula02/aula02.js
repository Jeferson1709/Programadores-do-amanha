//Aula 03-09-25
//Utilização readline
//Common js
import readline from 'readline' //importa todos os pacotes da lib (biblioteca) readline. 


//criando interface para ler e mostrar dados vindos do terminal
const rl =readline.createInterface({
    input:process.stdin ,//A entrada padrão do node (Que é o termnal) como o input da nossa interface
    output: process.stdout// A saida padrão do node (console, por exemplo o console.log) como output da nossa interface 
});//input e output precisam ter um valor.



//Parametro é uma valor que você tem que passar para usar aquela função, informações para que aquela função 

rl.question("Por favor, Digite o seu nome: ",function cumprimentarUsuarios(nome) {
    console.log(`Olá, ${nome}`);
    rl.close();
});
const nomes_produtos = [
    "Teclado Mecânico",
    "Mouse Gamer",
    "Monitor 24 polegadas",
    "Headset Gamer",
    "Webcam Full HD",
    "Cadeira Gamer",
];
const precos_produtos = [350.0, 120.0, 950.0, 250.0, 180.0, 1200.0];
const produtos_vendidos = [100, 180, 50, 160, 80, 40];
console.log(nomes_produtos.length); // calcula a quantidade de itens dentro de um array
// Calcular o valor total das vendas
let valor_total_por_produto = [];
let valor_total_geral = 0;
for (let i = 0; i < nomes_produtos.length; i++) {
    const total_produto = precos_produtos[i] * produtos_vendidos[i];
    valor_total_por_produto.push(total_produto);
    console.log(`Total por produto: ${valor_total_por_produto}`);
    valor_total_geral += total_produto;
    console.log(`Valor total geral: ${valor_total_geral}`);
}
console.log(valor_total_geral);