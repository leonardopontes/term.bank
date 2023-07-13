// Módulo MoonBank
const MoonBank = (function() {
  const Balances = [];

  function addBalance(balance) {
    Balances.push(balance);
  }

  function removeBalance(balance) {
    const index = Balances.indexOf(balance);
    if (index !== -1) {
      Balances.splice(index, 1);
    }
  }

  function getAllbalances() {
    return Balances;
  }

  // Expondo apenas as funções desejadas
  return {
    addBalance,
    removeBalance,
    getAllbalances
  };
})();

// Módulo UI
const UI = (function(MoonBank) {
  function renderbalances() {
    const balances = MoonBank.getAllbalances();
    console.log(balances);
  }

  function addBalance(newBalance) {
    MoonBank.addBalance(newBalance);
  }

  // Expondo apenas a função desejada
  return {
    addBalance,
    renderbalances
  };
})(MoonBank);

// Utilizando os módulos
UI.addBalance('Saldo 100');
UI.addBalance('Saldo 200');
UI.addBalance('Saldo 300');
UI.addBalance('Saldo 400');

// Exibindo os saldos após as adições
UI.renderbalances();