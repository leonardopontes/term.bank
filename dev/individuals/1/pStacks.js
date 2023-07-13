class Stack {
    constructor() {
      this.items = [];
    }
  
    push(element) {
      this.items.push(element);
    }
  
    pop() {
      if (this.isEmpty()) {
        return "A pilha está vazia.";
      }
      return this.items.pop();
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  
    peek() {
      if (this.isEmpty()) {
        return "A pilha está vazia.";
      }
      return this.items[this.items.length - 1];
    }
  
    size() {
      return this.items.length;
    }
  
    clear() {
      this.items = [];
    }
  }
  
  // Utilizando a pilha
  const stack = new Stack();
  stack.push(10);
  stack.push(20);
  stack.push(30);
  console.log(stack.pop()); // Saída: 30
  console.log(stack.peek()); // Saída: 20
  console.log(stack.size()); // Saída: 2  