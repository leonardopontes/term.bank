const balancesMoonBank = [
    { amount: '0.01', isAllowed: true },
    { amount: '0.02', isAllowed: true },
    { amount: '0.03', isAllowed: true },
    { amount: '0.04', isAllowed: true },
    { amount: '0.00', isAllowed: false },
    { amount: '0.05', isAllowed: true },
  ];
  
  for (let i = 0; i < balancesMoonBank.length; i++) {
    const cash = balancesMoonBank[i];
  
    // Verifica se a quantia é suficiente
    if (cash.isAllowed) {
      console.log(`${cash.amount} é uma quantia suficiente.`);
      continue; // Pula para a próxima iteração
    }
  
    // Verifica se a quantia é acima de 0.00
    if (cash.amount.length > 0.00) {
      console.log(`${cash.amount} não é uma quantia suficiente.`);
      break; // Encerra o loop
    }
  }

// Se 'algo' não se encaixar e estiver sendo exibido em 1º, só ele será executado.
// Create Algorithm: Um Algoritmo com opções baseado em X condição, que se algum não estiver certo, só ele executará

// Menu - Invest Options: Savings / CDBs | Insira uma quantia: Se a quantia for menor que 0.01