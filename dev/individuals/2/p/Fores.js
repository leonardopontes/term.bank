// 1- For, 2- for in, 3- for of, 4- forEach é um método específico de Arrays

/*/ const cart = ["Product 1", "Product 2", "Product 3", "Product 4"];

for (let x = 0; x < cart.length; x++) {
  console.log(`${cart[x]}`);
  } /*/


  const user = {
    name: "John",
    age: 30,
    email: "john@example.com"
  };
  
  for (let key in user) {
    console.log(`${user[key]}`);
  }


/*/  const numbers = [1, 2, 3, 4, 5];

  for (let number of numbers) {
      console.log(number);
    }  /*/ 


// node Fores.js  