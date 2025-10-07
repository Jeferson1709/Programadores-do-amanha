// class Pessoa {
//     constructor(nome, idade, altura) {
//         this.nome = nome;
//         this.idade = idade;
//         this.altura = altura;
//     }
//     mostrarPessoa() {
//         console.log(
//             `${this.nome} tem ${this.idade} anos de idade, e ${this.altura}m de altura`
//         );
//     }
// }
// const Pessoa1 = new Pessoa("Daniel", 27, 1.83);
// const Pessoa2 = new Pessoa("");
// // Herança
// class Funcionario extends Pessoa {
//     constructor(nome, idade, altura, profissao, salario) {
//         super(nome, idade, altura);
//         this.profissao = profissao;
//         this.salario = salario;
//     }
//     // Polimorfismo
//     mostrarPessoa() {
//         console.log(
//             `${this.nome} tem ${this.idade} anos de idade, e ${this.altura}m de altura, é ${this.profissao} e ganha ${this.salario}`
//         );
//     }
// }
// const Funcionario1 = new Funcionario("Daniel", 27, 1.7, "dev", 12312);
// Funcionario1.mostrarPessoa();
// Encapsulamento é privar alguns dados e deixar outros públicos (Getters e Setters) 

import { array } from "zod";

// </Mão na massa!>

// Em grupo
// 15 minutos

// Criem uma classe de personagem, de uma série, um filme, um anime ou algum video que
// vocês já assistiram, instancie a classe criando um objeto para cada um dos personagens,
// passando os dados por argumentos.

class Anime {
    constructor(nome, lancamento, temporadas, genero, avaliacao) {
        this.nome = nome;
        this.lancamento = lancamento;
        this.temporadas = temporadas;
        this.genero = genero;
        this.avaliacao = avaliacao;
    }
}

class OnePicce extends Anime {
    constructor(nome, lancamento, temporadas, genero, avaliacao,personagens,episodio) {
        super(nome, lancamento ,temporadas, genero , avaliacao);
        this.episodio = episodio;
        this.personagens =  [...personagens];
    }

    lancarEpisodio(){
        this.episodio++;
    }
}

const anime1 = new OnePicce("One Picce" , 1999 , 7 , "Acão" , 10, ["Zoro", "Luffy", "Sanji" , "Nani" , "Chopper", "Frankin"], 1147);
anime1.lancarEpisodio();
console.log(anime1);
