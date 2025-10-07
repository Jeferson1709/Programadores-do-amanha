import { Pessoa } from "./ala06_10_25/model/Pessoa.model.js";

const obj_pessoa = {
    nome: "Daniel",
    mostrar: function (valor) {
        console.log(valor);
    },
};

//Objeto por retorno de função (Função Fábricas).
// function Pessoa(nome, mostrar) {
//     return {
//         nome,
//         mostrar,
//     };
// }

// class Pessoa {
//     constructor(nome, idade, altura) {
//         this.nome = nome;
//         this.idade = idade;
//         this.altura = altura;
//     }
//     mostrarPessoa(){
//         console.log(`${this.nome} tem ${this.idade} e ${this.altura}m de altura.`);
        
//     }
// }

const Pessoa1 = new Pessoa("Jeferson", 21, 1.80);

const Pessoa2 = new Pessoa("Halyna", 19, 1.77);

console.log(Pessoa1, Pessoa2);
//Encapsulamento é privar alguns dados e deixar outros públicos (Getters , Setters)
class ContaBancaria {

    constructor(titular, numeroCC, saldoIncial = 0) {
        this.titular = titular;
        this.saldo = saldoIncial;
    }

    depositar(valor) {

    }

    sacar(valor) {

    }

    exibirExtrato() {

    }
}
//Herança 
class ContaPoupanca extends ContaBancaria{
constructor(titular, numeroCC , saldoIncial =0, taxaRendimento = 0.05){
    //Chama o construtor da classe Pai.
    super(titular, numeroCC, saldoIncial);
    this.taxaRendimento = taxaRendimento;
}
    aplicarRendimento(){
        const rendimento = this.saldo + this.taxaRendimento;
        this.depositar(rendimento);
    }
}

class Funcionario extends Pessoa {
    constructor(nome, idade,altura , profissao , salario){
        super(nome, idade, altura);
        this.profissao = profissao;
        this.salario = salario;
    }
    mostrarPessoa(){
         console.log(`${this.nome} tem ${this.idade} e ${this.altura}m de altura, é ${this.profissao} e ganha ${this.salario}`);
        
    }
}

const funcionario = new Funcionario("Jeferson" , 21 ,  1.80 , "programador", 12000.0) ;
funcionario.mostrarPessoa();
// const conta1 = new ContaBancaria("Jeferson", 82332, 100);