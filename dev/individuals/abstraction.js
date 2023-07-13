// Classe base 'serviceMoonBank'
class ServiceMoonBank {
    constructor(borrow, numCashBorrow) {
      this.borrow = borrow;
      this.numCashBorrow = numCashBorrow;
    }
  
    stepBorrow() {
      if (this.numCashBorrow > 0) {
        this.numCashBorrow--;
        console.log(`Dinheiro ${this.borrow} emprestado com sucesso.`);
      } else {
        console.log(`Não há dinheiro para empréstimo disponíveis no momento ${this.borrow}.`);
      }
    }
  
    devolution() {
      this.numCashBorrow++;
      console.log(`Dinheiro ${this.borrow} devolvido ao MoonBank.`);
    }
  }
  
  // Classe derivada 'card' que herda de 'serviceMoonBank'
  class Card extends ServiceMoonBank {
    constructor(borrow, numCashBorrow, loanUser) {
      super(borrow, numCashBorrow);
      this.numCashBorrow = numCashBorrow;
      this.loanUser = loanUser;
    }
  
    details() {
      console.log(`Card: ${this.borrow} | numCashBorrow: ${this.numCashBorrow} | loanUser: ${this.loanUser}`);
    }
  }
  
  // Criando uma instância da classe 'card'
  const myCard1 = new Card('black', 5, "Leonardo");
  const myCard2 = new Card('do cartão black', 5, "Leonardo");
  
  // Utilizando métodos da classe base e derivada
  myCard1.details();
  myCard2.stepBorrow();
  myCard2.devolution();  