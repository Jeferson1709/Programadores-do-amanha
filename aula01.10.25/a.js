// Importa a biblioteca Zod para validação de schemas
import { z } from "zod";
// Importa o módulo readline para interação com terminal
import * as readline from "readline";

// Define o schema de validação para dados do usuário
const userSchema = z.object({
  // Campo name: string com mínimo de 2 caracteres
  name: z.string().min(2, "Nome deve ter no mínimo 2 caracteres"),
  // Campo email: string que deve ser um email válido
  email: z.string().email("Formato de e-mail inválido"),
  // Campo age: transforma string em número e valida
  age: z
    .string() // Recebe como string do input
    .transform((val) => parseInt(val, 10)) // Converte para número inteiro base 10
    .pipe(
      // Aplica validações adicionais após transformação
      z
        .number() // Confirma que é um número
        .int() // Deve ser um inteiro
        .positive("Idade deve ser um número positivo") // Deve ser positivo
        .max(120, "Idade deve ser menor que 120") // Máximo 120
    ),
  // Campo username: string com regras específicas
  username: z
    .string() // Deve ser string
    .min(3, "Nome de usuário deve ter no mínimo 3 caracteres") // Mínimo 3 chars
    .max(20, "Nome de usuário deve ter no máximo 20 caracteres") // Máximo 20 chars
    .regex(
      // Validação por regex
      /^[a-zA-Z0-9_]+$/, // Apenas letras, números e underscore
      "Nome de usuário deve conter apenas letras, números e underscore"
    ),
});

// Cria uma interface readline para entrada e saída no terminal
const rl = readline.createInterface({
  input: process.stdin, // Define entrada padrão (teclado)
  output: process.stdout, // Define saída padrão (terminal)
});

// Função utilitária que converte readline.question em Promise
function askQuestion(question) {
  return new Promise((resolve) => {
    // Retorna uma Promise
    rl.question(question, (answer) => {
      // Faz a pergunta ao usuário
      resolve(answer); // Resolve a Promise com a resposta
    });
  });
}

// Função principal assíncrona para coleta de dados
async function collectUserData() {
  // Exibe cabeçalho do sistema
  console.log("\n=== Sistema de Cadastro de Usuário ===\n");

  try {
    // Bloco try para capturar erros
    // Coleta nome completo do usuário
    const name = await askQuestion("Digite seu nome completo: ");
    // Coleta email do usuário
    const email = await askQuestion("Digite seu e-mail: ");
    // Coleta idade do usuário
    const age = await askQuestion("Digite sua idade: ");
    // Coleta username do usuário
    const username = await askQuestion("Digite seu nome de usuário: ");

    // Valida todos os dados coletados usando o schema definido
    const userData = userSchema.parse({
      name, // Passa o nome coletado
      email, // Passa o email coletado
      age, // Passa a idade coletada (será transformada)
      username, // Passa o username coletado
    });

    // Exibe mensagem de sucesso na validação
    console.log("\n✓ Dados validados com sucesso!");
    // Cabeçalho da seção de dados
    console.log("\nDados do usuário:");
    // Linha separadora visual
    console.log("─────────────────────────────");
    // Exibe nome validado
    console.log(`Nome: ${userData.name}`);
    // Exibe email validado
    console.log(`E-mail: ${userData.email}`);
    // Exibe idade validada (agora como número)
    console.log(`Idade: ${userData.age}`);
    // Exibe username validado
    console.log(`Username: ${userData.username}`);
    // Linha separadora final
    console.log("─────────────────────────────\n");
  } catch (error) {
    // Captura erros durante execução
    if (error instanceof z.ZodError) {
      // Verifica se é erro de validação Zod
      // Cabeçalho de erro de validação
      console.log("\n✗ Erro de validação!\n");
      // Itera sobre todos os erros encontrados
      error.issues.forEach((err) => {
        // Exibe caminho do campo e mensagem de erro
        console.log(`  - ${err.path.join(".")}: ${err.message}`);
      });
      // Linha em branco para formatação
      console.log("");
    } else {
      // Para outros tipos de erro
      // Exibe erro inesperado
      console.error("Erro inesperado:", error);
    }
  } finally {
    // Bloco executado sempre, independente de sucesso/erro
    // Fecha a interface readline para liberar recursos
    rl.close();
  }
}

// Chama a função principal para iniciar o programa
collectUserData();
