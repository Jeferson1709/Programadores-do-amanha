/* Atividade 1: Validação de Cadastro de Produto
Objetivo: O objetivo deste exercício é criar um script de linha de comando (CLI) para cadastrar um novo produto em um sistema de inventário. O script deve solicitar ao usuário o nome do produto, o preço, a quantidade em estoque e um código SKU. Todos os dados de entrada devem ser validados utilizando a biblioteca Zod antes de serem exibidos como um cadastro bem-sucedido.
Regras de Validação:
Nome (name):
Deve ser uma string.
Deve ter no mínimo 3 caracteres.

Preço (price):
A entrada será uma string (ex: "49.90").
Deve ser transformada em um number.
Deve ser um número positivo (maior que zero).

Estoque (stock):
A entrada será uma string (ex: "150").
Deve ser transformada em um number.
Deve ser um número inteiro e não-negativo (pode ser zero).
SKU (sku):
Deve ser uma string.
Deve seguir o formato PROD- seguido de 6 dígitos numéricos (ex: PROD-123456). Utilize uma expressão regular para essa validação.

Comportamento Esperado:
Entrada de Dados: O programa deve fazer uma pergunta para cada campo (nome, preço, estoque, sku).


Sucesso: Se todos os dados forem válidos, o programa deve exibir uma mensagem de sucesso e, em seguida, mostrar os dados do produto formatados no console. O preço deve ser exibido como um número e o estoque como um número inteiro.


Erro: Se qualquer uma das validações falhar, o programa deve exibir uma mensagem de erro clara, indicando qual campo está incorreto e o motivo do erro, de forma similar ao exemplo de cadastro de usuário. */
import { number } from 'zod';
import { z } from zod;
import readline from 'readline';
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const produto = z.object({
    name: z.
        string()
        .min(3, "O nome do produto precisar ter no mínimo 3 caracteres. "),

    price: z
        .string()
        .transform((valor) =>
            Number(valor))
        .refine((valor) => valor != isNaN(valor))
        .refine((valor) => valor > 0, "O preço  deve ser maior que zero"),
    stock: z
        .string()
        .transform((valor) =>
            Number.isInteger(valor), "O estoque deve ser "),
    sku:
        string()

});
