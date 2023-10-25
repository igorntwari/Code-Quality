let isPrime = (number) => {
    // i must always be less than the number to avoid the number to divide it's self which would be true
    for (let i = 2; i < number; i++) { 
        // when number is divisible by i, it's not a prime number so return false
        if(number % i === 0) return false;
    }
    // otherwise it's a prime number so return true (it also must be greater than 1, reason for the n > 1 instead of true)
    return number > 1;
    }
console.log(isPrime(1));  // returns false
console.log(isPrime(2));  // returns true
console.log(isPrime(9));  // returns false
console.log(isPrime(11)); // returns true