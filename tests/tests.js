const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Escolha uma opção (1, 2, 3): ', (option) => {
  if (option === '1') {
    console.log('Opção 1 selecionada');
  } else if (option === '2') {
    console.log('Opção 2 selecionada');
  } else if (option === '3') {
    console.log('Opção 3 selecionada');
  } else {
    console.log('Opção inválida');
  }

  rl.close();
});