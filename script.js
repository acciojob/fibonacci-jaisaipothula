function fibonacci(num) {
    if (num === 0) return 0; // The 0th Fibonacci number is 0
    if (num === 1) return 1; // The 1st Fibonacci number is 1

    let a = 0; // F(0)
    let b = 1; // F(1)
    let fib = 0; // Variable to hold the nth Fibonacci number

    for (let i = 2; i <= num; i++) {
        fib = a + b; // Calculate the next Fibonacci number
        a = b;       // Update a to the previous Fibonacci number
        b = fib;     // Update b to the current Fibonacci number
    }

    return fib; // Return the nth Fibonacci number
}

// Example usage:
console.log(fibonacci(1));  // Output: 0
console.log(fibonacci(5));  // Output: 3
console.log(fibonacci(10)); // Output: 34
console.log(fibonacci(50)); // Output: 12586269025