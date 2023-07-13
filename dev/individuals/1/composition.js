// Inspirado em suposição de banco fictício Moonbank
// Objeto "moveMoney"
const moveMoney = {
    moveDepositing() {
      console.log("Dinheiro depositado com sucesso");
    },
    moveWithdraw() {
      console.log("Dinheiro retirado com sucesso");
    }
  };
  
  // Objeto "Account"
  const account = {
    transfer() {
      console.log("Transferindo...");
    },
    processPay() {
      console.log("Procesando...");
    }
  };
  
  // Objeto "bank" que combina as funcionalidades dos objetos "moveMoney" e "account"
  const bank = {
    ...moveMoney,
    ...account,
    infoaccount: "Conta: Corrente |",
    infotransfer: "Transferência: PIX"
  };
  
  // Utilizando o objeto "bank"
  bank.transfer(); // Saída: Transferindo...
  bank.processPay(); // Saída: Processando...
  bank.moveDepositing(); // Saída: Dinheiro depositado com sucesso
  bank.moveWithdraw(); // Saída: Dinheiro retirado com sucesso
  console.log(bank.infoaccount, bank.infotransfer); // Saída: Conta: Corrente | Transferência: PIX  