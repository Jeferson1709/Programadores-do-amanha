const array = [1, 2, 3, 4];

// 0 + 1+2 +3 +4;

const initialValue = 0;

const sumWithInitial = array.reduce(
    (accumalator, currentValue) => accumalator + currentValue,
    initialValue
);

// console.log(sumWithInitial);


const pessoas = [
    { nome: "Jeferson", idade: 20, nota: 8 },
    { nome: "Ana", idade: 23, nota: 6 },
    { nome: "Maxine", idade: 23, nota: 9 },
    { nome: "Breno", idade: 22, nota: 7 }
];


const somaDasNotas = pessoas.reduce((accumalator, pessoas)=> {
        return accumalator + pessoas.nota;//1º iteração acumulador = 0 + 8 | 2º iteração acumulador = 8+ 6;
},0);

console.log(somaDasNotas);
