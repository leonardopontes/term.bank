const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function mostrarOpcoes() {
  rl.question('Bem-vindo ao MoonBank:\n1. Criar Conta\n2. Sair do Aplicativo\n', (option) => {

    if (option === '1') {
      criarContaNome();

    } else if (option === '2') {
      console.log('Você saiu do aplicativo');
      rl.close();

    } else {
      console.log('Opção inválida. Tente novamente');
      mostrarOpcoes();
    }

  });
}

mostrarOpcoes();


function criarContaNome() {
  rl.question('\nNome:\n', (nome) => {

    if (/^[A-Za-z]+$/.test(nome)) {
      console.log('Nome válido:', nome);
      criarContaIdade();

    } else {
      console.log('Nome inválido! Insira apenas letras.');
      criarContaNome();
    }

  });
}


function criarContaIdade() {
  rl.question('\nIdade:\n', (idade) => {

    const idadeInt = parseInt(idade);
      if (idadeInt >= 18) {
        console.log('Cadastro realizado com Sucesso');
        bankOptions();

      } else {
        console.log('Apenas maiores de 18 podem criar conta no MoonBank no momento.');
        rl.close();
      }

  });
}

criarContaIdade();


function bankOptions() {
  rl.question('Olá, seu saldo inicial é de R$0.00:\n1. Fazer um Depósito\n2. Depois\n3. Sair do Aplicativo\n', (bkOptions) => {

    if (bkOptions === '1') {
      valueDeposit();

    } else if (bkOptions === '2') {
      bankOptions();

    } else if (bkOptions === '3') { 
      rl.close();

    } else {
      console.log('Opção inválida. Tente novamente');
      bankOptions();
    }

  });
}


function valueDeposit() {
  rl.question('\nInsira uma Quantia:\n', (valor) => {

      const valorInt = parseInt(valor);
      if (valorInt >= 0.01) {
        console.log('Saldo adicionado com Sucesso!');
        rl.close();

      } else {
        console.log('Saldo Insuficiente');
        valueDeposit();
      }

  });
}