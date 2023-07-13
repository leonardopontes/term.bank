class Bank {
    exibirSaldo() {
      console.log("MoonBank emitindo saldos.");
    }
  }
  
  class User1 extends Bank {
    exibirSaldo() {
      console.log("User1 tem R$50.");
    }
  }
  
  class User2 extends Bank {
    exibirSaldo() {
      console.log("User2 tem R$100.");
    }
  }
  
  const user1 = new User1();
  const user2 = new User2();
  
  user1.exibirSaldo();
  user2.exibirSaldo(); 