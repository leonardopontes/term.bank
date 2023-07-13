// 1- Var, 2- Let, 3- Const

function example() {
    var name = "John"; // Escopo da função
  
    if (true) {
      var age = 30; // Escopo global (não é limitado ao bloco if)
      console.log(name); // "John"
    }
  
    console.log(age); // 30
  }
  
  example();

  
function example() {
    let name = "John"; // Escopo da função
  
    if (true) {
      let age = 30; // Escopo de bloco
      console.log(name); // "John"
    }
  
    console.log(age); // ReferenceError: age is not defined
  }
  
  example();
  

function example() {
    const name = "John"; // Escopo da função
  
    if (true) {
      const age = 30; // Escopo de bloco
      console.log(name); // "John"
    }
  
    console.log(age); // ReferenceError: age is not defined
  }
  
  example();
  