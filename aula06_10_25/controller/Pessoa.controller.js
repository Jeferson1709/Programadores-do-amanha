export class Pessoa {
    constructor(nome, idade, altura) {
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
    }
    mostrarPessoa(){
        console.log(`${this.nome} tem ${this.idade} e ${this.altura}m de altura.`);
        
    }
}