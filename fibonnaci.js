const fibonacci = number => (number < 2 ? number : fibonacci(number - 1) + fibonacci(number - 2));
 console.log(fibonacci(10))