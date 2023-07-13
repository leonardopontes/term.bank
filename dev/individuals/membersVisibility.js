class ContaBancaria {
    #saldo = 1000; // propriedade privada
    
    sacar(valor) {
      if (valor <= this.#saldo) {
        this.#saldo -= valor;
        console.log("Saque realizado com sucesso!");
      } else {
        console.log("Saldo insuficiente!");
      }
    }
  }
  
  const minhaConta = new ContaBancaria();
  minhaConta.sacar(500); // Saque realizado com sucesso!
  minhaConta.sacar(200); // Saldo insuficiente!  