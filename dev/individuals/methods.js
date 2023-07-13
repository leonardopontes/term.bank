class transaction {
    constructor() {
      this.speed = 0;
    }
  
    acelerar(quantidade) {
      this.speed += quantidade;
    }
  }
  
  const myTransaction = new transaction();
  myTransaction.acelerar(50);
  console.log(myTransaction.speed); // Saída: 50  







  
/*/ A classe "transaction" representa uma transação e a propriedade "speed" representa a velocidade dessa transação. O método "acelerar" é usado 
para aumentar a velocidade da transação em uma determinada quantidade.

Nesse caso, a palavra "quantidade" refere-se ao valor que é passado como argumento para o método "acelerar". Essa quantidade representa o valor 
pelo qual a velocidade da transação será incrementada. Você tem controle sobre esse valor e pode escolher qualquer número para acelerar a tran
sação.

Por exemplo, se você chamar o método "acelerar(50)", estará aumentando a velocidade da transação em 50 unidades. Se a velocidade inicial da tran
sação for 0, após a chamada do método, a velocidade será igual a 50.

Em resumo, "quantidade" é o valor que você escolhe para incrementar a velocidade, enquanto "velocidade" é a propriedade que armazena o valor re
sultante após a aceleração /*/  