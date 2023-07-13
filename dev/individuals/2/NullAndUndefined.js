// Null and Undefined

/*/ const user = {
    name: 'John Doe',
    address: null, // Endereço de entrega não fornecido
    // ...
  };
  
  function processCheckout(user) {
    if (user.address === null) {
      console.log('Por favor, forneça um endereço de entrega.');
      return;
    }
    // Processar o checkout com o endereço fornecido
  }
  
  processCheckout(user); /*/
  

const task = {
    title: 'Fazer relatório mensal',
    dueDate: undefined, // Data de conclusão não definida
    // ...
  };
  
  function displayTaskDetails(task) {
    console.log(`Tarefa: ${task.title}`);
    if (task.dueDate === undefined) {
      console.log('Data de conclusão não definida.');
    } else {
      console.log(`Data de conclusão: ${task.dueDate}`);
    }
  }
  
  displayTaskDetails(task);