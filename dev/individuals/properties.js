class MoonBank {
    constructor(nome, saldo) {
      this.nome = nome;
      this.saldo = saldo;
    }
  }
  
  const user1 = new MoonBank("user1 possui", 100);
  const user2 = new MoonBank("user2 possui", 250);
  
  console.log(user1.nome, user1.saldo); // Saída: 
  console.log(user2.nome, user2.saldo); // Saída:   