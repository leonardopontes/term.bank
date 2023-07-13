// Em: 1- Cálculos Matemáticos, 2- Validação de entrada Numérica, 3- Manipulação de dados quantitativos+

// Examples 1 / 1.2 / 1.3



let principal = 1000;
let taxaDeJuros = 0.05;
let prazo = 10;

let montante = principal * (1 + taxaDeJuros) ** prazo;
console.log(montante); // Exibe o montante após o prazo de 10 anos


principal = 1000;
taxaDeJuros = 0.05;
prazo = 10;

montante = principal * (1 + taxaDeJuros) ** prazo;
console.log(montante); // Exibe o montante para os valores iniciais

principal = 2000; // Modifica o valor inicial
montante = principal * (1 + taxaDeJuros) ** prazo;
console.log(montante); // Exibe o montante para o novo valor inicial


principal = 5000;
taxaDeJuros = 0.08;
prazo = 5;

montante = principal * (1 + taxaDeJuros) ** prazo;
console.log(montante); // Exibe o montante total a ser pago

prazo = 7; // Modifica o prazo do empréstimo
montante = principal * (1 + taxaDeJuros) ** prazo;
console.log(montante); // Exibe o novo montante total com o prazo modificado



// Example 2 

/*/ function validateAge(age) {
    if (typeof age !== 'number' || isNaN(age) || age > 0) {
      console.log('Idade inválida');
    } else {
      console.log('Idade válida');
    }
  }
  
  validateAge(25); // Idade válida
  validateAge('abc'); // Idade inválida
  validateAge(10); // Idade inválida                    


  
// Example 3  
 
  let score = 0;

  function increaseScore() {
    score += 10;
  }
  
  function decreaseScore() {
    if (score > 0) {
      score -= 5;
    }
  }
  
  console.log(score); // Exibe a pontuação atual
  increaseScore(); // Incrementa a pontuação
  console.log(score); // Exibe a nova pontuação
  decreaseScore(); // Decrementa a pontuação
  console.log(score); // Exibe a pontuação atualizada         /*/ 