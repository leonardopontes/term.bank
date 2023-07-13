function UserMoonBank(User, Balance) {
    // Propriedades privadas
    let _User = User;
    let _Balance = Balance;
  
    // Método público para obter o nome
    this.getUser = function() {
      return _User;
    };
  
    // Método público para definir o nome
    this.setUser = function(User) {
      _User = User;
    };
  
    // Método público para obter a idade
    this.getBalance = function() {
      return _Balance;
    };
  
    // Método público para definir a idade
    this.setBalance = function(Balance) {
      if (Balance >= 0) {
        _Balance = Balance;
      }
    };
  }
  
  // Criando uma instância da classe UserMoonBank
  const userMoonBank = new UserMoonBank('User1 | Saldo:', 30);
  
  // Acessando propriedades por meio dos métodos públicos
  console.log(userMoonBank.getUser()); // Saída: User1
  console.log(userMoonBank.getBalance()); // Saída: 30
  
  // Modificando propriedades por meio dos métodos públicos
  userMoonBank.setUser('User2 | Saldo');
  userMoonBank.setBalance(25);
  
  console.log(userMoonBank.getUser()); // Saída: User2
  console.log(userMoonBank.getBalance()); // Saída: 25