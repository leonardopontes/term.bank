// Definindo a classe base 'MoonBank'
class MoonBank {
    constructor(card, model) {
      this.card = card;
      this.model = model;
    }
  
    credit() {
      console.log(`O MoonBank possui cartão de crédito nas cores ${this.card} ${this.model}`);
    }
  
    debit() {
      console.log(`O MoonBank possui cartão de débito nas cores ${this.card} ${this.model}`);
    }
  }
  
  // Definindo uma classe derivada 'Card' que herda de 'MoonBank'
  class Card extends MoonBank {
    constructor(card, model, numPoints) {
      super(card, model);
      this.numPoints = numPoints;
    }
  
    consultPoints() {
      console.log(`Consultando as ${this.numPoints} Points do MoonBank Cards ${this.card} ${this.model}.`);
    }
  }
  
  // Criando uma instância da classe 'Bank'
  const myCard = new Card('Black and White', 'Model X', 1000);
  
  // Chamando métodos da classe base e derivada
  myCard.credit();
  myCard.debit();
  myCard.consultPoints();  