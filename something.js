const greet = (name) => {
    // Log a greeting message
    console.log(`Hello, ${name}!`);
  };
  greet('John'); // Output: Hello, John!
  
  const multiply = (a, b) => a * b;
  console.log(multiply(5, 7)); // Output: 35
  
  const numbers = [1, 2, 3, 4, 5];
  const squaredNumbers = numbers.map((num) => num * num);
  console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]
  
  // Implicit return in arrow functions
  const multiply2 = (a, b) => a * b;
  console.log(multiply2(5, 7)); // Output: 35
  