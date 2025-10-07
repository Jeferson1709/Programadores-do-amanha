//Operador rest, para espalhar N livro
function livros(usuario, ...livros) {
    for (let i = 0; i < livros.length; i++) {
        console.log(`${usuario} - ${livros[i]}`);

    }
}

livros("Daniel", "Código Limpo", "DDD", "Clean Arch");

// Spread => Espalhamento. 
let numeros = [1, 2, 3, 4, 5];

let maior = Math.max(...numeros);

console.log(maior);

const pessoa = {
    nome: "Ana",
    idade: 21
}

const pessoa2 = { ...pessoa };

const a = [1, 2];
const b = [3, 4];

const c = [...a, ...b];
console.log(c);

const numero2 = [10, 20, 30, 40, 50];
//Sabendo a quantidade de elementos do array numero2
const [primeiro, segundo, terceiro, quarto, quinto] = numero2;

console.log(terceiro, quarto);
//Não Sabemos a quantidade de elementos do array numero2
const [n1, n2, ...resto] = numero2;

console.log(resto);




// Desestruturar um objeto. 

const { nome, idade } = pessoa;

console.log(nome, idade);


//Função Geradora -> Retorna um Objeto. 

function salvarUsuario(nome, idade, profissao) {
    const obj = { nome, idade, profissao };

    // const { nome: id } = obj;
    return { nome, idade, profissao };
}

const pessoa3 = salvarUsuario("Jeferson", 21, "Estudante");

console.log(pessoa3);
