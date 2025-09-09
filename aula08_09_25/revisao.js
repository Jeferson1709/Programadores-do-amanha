
/*
Entrar no terminal crtl + " 
git add .
git add <nome do arquivo> 
for - não depende de uma variável externa. contator definido.

                let carros[...] 
    carros.lenght => Sabemos o tamanho do array.
: recycle : refactor:

                let saldo = 0; 
                saldo = saldo +1;
                saldo += 1;
                saldo++;

            Começo: let contador= 0; 
            Condição:  i < carros; Até quando vai esse laço.
            Imcremento: i++; controle.
            
            for(let i = 0; i<6 i++){
                console.log(carros[i]);
                if(i==5){
                    
                }
                }
                
            1º laço console.log(carros[i]); i++ i =1;
            i < 6 == true  => continua
            2º laço console.log(carros[i]); i++ i =2;
            i < 6 == true  => continua
            nº console.log(carros[5]);
            
            i< 6 == False => break(encerrar o laço).
            
            for(let contador= 0; i < carros; i++){ 
                Instruções...                      
                
            }                                       
            
            while - quando você não sabe a quantidade de iterações.
                                                    
*/
//               0          1              2
let carros = ["Monza", "Mare Turbo", "Pegout 206"];

//Iteração  de laço for. 
for (let i = 0; i < carros.length; i++) {
    console.log(carros[i]);

}

//carros na posição[0].
console.log(carros[0]);
//            Paramêtro -Criando.
function soma(x, y) {
    let saida = x + y;
    console.log(saida);
}

function saudacao(nome, callback) {
    callback(nome); //chama a função.
}

// função do tipo flecha(Arrow Function). 
const saudacao2 = () => {
 
};

saudacao("Jeferson", function saida(nome) {
    console.log(`Olá ${nome}`);
});

//Argumento - Chamando.
soma(1, 1);//Chamando a função.

carros.forEach((valor)=>console.log(valor));
carros.forEach((valor)=>{
    console.log(valor);
});

//Objeto literal.
//Utiliza chaves, tem atributos, é composto por chave valor.
//OBJETO É COMPOSTO DE CHAVE:VALOR -> Objeto representa algo dentro do código. 
const pessoa = {
        nome:"Jeferson",
        idade: 20,
        profissao: ["Desenvolvedor FullStack"]
};//Forma Literal De Definir Objeto. 

console.log(pessoa.nome);