// console.log("Objeto Original:", jogo);
// // const titulo = jogo.titulo;
// // const desenvolvedora = jogo.desenvolvedora;
// const { titulo, desenvolvedora } = jogo;
// // const [a, b, c] = array;
// // console.log(a);
// const { anoLancamento: ano } = jogo; // Reatribuição do nome da chave do objeto
// // console.log(titulo, desenvolvedora, ano);
// // ...
// const novoObjeto = { ...jogo, edicaoEspecial: true };
// // console.log(novoObjeto, jogo);
// const plataformasAtualizadas = [...jogo.plataformas, "PC"];
// // console.log(plataformasAtualizadas);
// let array = [];
// function adicionarElementos(array, ...elementos) {
//     return [...array, ...elementos]; // Retornando um array novo
// }
// const arrayAtualizado = adicionarElementos(array, 1, 2, 3, "olá", "");
// function modificarArrayOriginal(array, ...elementos) {
//     array.push(...elementos);
//     return array;
// }
// // console.log(array);
// console.log(arrayAtualizado);
// modificarArrayOriginal(array, 2, 5, 8, 9, 9);



const catalogoLocadora = [
    { titulo: 'The Last of Us', desenvolvedora: 'Naughty Dog', anoLancamento: 2013, preco: 30 },
    { titulo: 'God of War', desenvolvedora: 'Santa Monica Studio', anoLancamento: 2018, preco: 35 },
    { titulo: 'Cyberpunk 2077', desenvolvedora: 'CD Projekt Red', anoLancamento: 2020, preco: 40 }
];


// Tarefas:
// Listagem de Jogos: Crie uma função chamada listarJogos(catalogo) que percorra o array. Dentro do loop, use a desestruturação (destructuring) para extrair as propriedades titulo e desenvolvedora de cada objeto de jogo. A função deve imprimir no console os detalhes no seguinte formato para cada jogo:


function listarJogos() {

    catalogoLocadora.map(element => {
        const {titulo , desenvolvedora } = element;
        console.log({ titulo, desenvolvedora});
    });

}

listarJogos();
