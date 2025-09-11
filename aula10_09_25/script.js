/* 
Modelando Dados. 

Exercício: Catálogo de Biblioteca
Vamos criar um pequeno sistema de catálogo de livros para praticar a manipulação de arrays de objetos em JavaScript. Você deve criar um arquivo .js e seguir os passos abaixo para implementar as funcionalidades.
Passos:
Crie um array vazio chamado biblioteca.
Este array irá armazenar todos os objetos que representam os livros.
Crie uma função adicionarLivro(titulo, autor, anoPublicacao).
Esta função deve receber três parâmetros: titulo (string), autor (string) e anoPublicacao (número).
Dentro da função, crie um objeto livro com as propriedades titulo, autor e ano.
Adicione (usando push) este objeto livro ao array biblioteca.
Adicione pelo menos 3 livros diferentes.
Utilize a função adicionarLivro que você criou para popular o seu catálogo com, no mínimo, três livros de sua escolha.
Crie uma função encontrarLivrosPorAutor(autorDesejado).
Esta função deve receber um parâmetro: autorDesejado (string).
A função deve buscar no array biblioteca e imprimir no console todos os livros que correspondem ao autor fornecido.
Se nenhum livro do autor for encontrado, uma mensagem apropriada deve ser exibida.
Teste sua função de busca.
Chame a função encontrarLivrosPorAutor com o nome de um autor que você adicionou para verificar se a busca funciona corretamente.
Crie uma função para deletar o livro baseado pelo nome
Liste quantos livros tem de determinado autor.


 */
// banco de dados Mocado.
let biblioteca = [];

//Objeto literal. 
const pessoa = {
    id: 2,
    nome: "Jeferson",
    idade: 20,
    profissao: ["Engenheiro de sofwares", "Dba"],
    endereco: {
        lougradoro: "Jardim da flores",
        CEP: 1002102,
        complemento: "Bloco, APTO",
    },
};

const livro_1 = {
    titulo: "O Hobbit",
    autor: "J.R.R Tolkien",
    anoLançamento: 1937
};
const livro_2 = {
    titulo: "O Hobbit",
    autor: "J.R.R Tolkien",
    anoLançamento: 1937
};

function adicionarLivro(id, titulo, autor, anoLancamento) {

    const livro = {
        id: id,
        titulo: titulo,
        autor: autor,
        anoLancamento: anoLancamento,
    };
    biblioteca.push(livro);
}

function encontrarLivro(autorDesejado) {
    const livrosEncontados = biblioteca.filter(
        (livro) => livro.autor === autorDesejado
    );

    return livrosEncontados;
    // console.log(`Encontrados esses livros do autor ${autorDesejado}: ${livrosEncontados}` );
}

const saida = encontrarLivro("Jeferson");

console.log(saida);


/*
 Crie uma função para deletar o livro baseado pelo nome
 */

function deletarPeloNome(NomeDesejado) {
    for (let index = 0; index < biblioteca.length; index++) {
        if (biblioteca[index].titulo === NomeDesejado) {
            biblioteca.splice(index,1);
            console.log(biblioteca);
            return biblioteca[index].titulo + " Deletado com sucesso !!";
        }

    }
    return "Livro não encontrado";


}

adicionarLivro(1, "Poesia", "Cael", 1233);
adicionarLivro(2, "A chave do conhecimento", "Jeferson", 1233);
adicionarLivro(3, "Adasdds", "Jeferson", 1233);
adicionarLivro(4, "Ads é Bom", "Jeferson", 1233);
adicionarLivro(5, "Programar Agora", "Arthur", 1233);
adicionarLivro(6, "Desenvolvimento Web", "André", 1233);

let saida2 = deletarPeloNome("Poesia");

console.log(saida2);
console.log(biblioteca)

//  Liste quantos livros tem de determinado autor.
function listarPeloAutor(autorDesejado) {

    let elementos= [];
    for (let index = 0; index < biblioteca.length; index++) {
        if (biblioteca[index].autor === autorDesejado) {


            elementos.push(biblioteca[index]);
        } 

            biblioteca.slice(index);
    }
    
    console.log(elementos)
}

listarPeloAutor("Jeferson");




