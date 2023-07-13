const readline = require('readline-sync');

let loginAttempts = 3;
let maxLoginAttempts = 1;
const isAuthenticated = false;

do {
  const username = readline.question("Digite seu nome de usuário:");
  const password = readline.question("Digite sua senha:");

  // Verifica as credenciais do usuário
  if (authenticateUser(username, password)) {
    console.log("Login bem-sucedido!");
    isAuthenticated = true;
  } else {
    console.log("Credenciais inválidas. Tente novamente.");
    loginAttempts--;
  }
} while (!isAuthenticated && loginAttempts > maxLoginAttempts);

// Função para autenticar o usuário
function authenticateUser(username, password) {
  // Lógica de autenticação
  // Retorna true se as credenciais forem válidas, caso contrário, retorna false
  return username === "admin" && password === "123456";
}

// cd Languages/JS/basicprojects/banks/dev/individuals/2  node ppDoAndWhile.js