function fibonacci(num) {
    if (num === 0) return 0;  // The first Fibonacci number (index 0)
    if (num === 1) return 0;  // The second Fibonacci number (index 1)
    if (num === 2) return 1;  // The third Fibonacci number (index 2)

    let a = 0;  // F(0)
    let b = 1;  // F(1)
    let fib = 0;

    for (let i = 2; i <= num; i++) {
        fib = a + b;  // Calculate the next Fibonacci number
        a = b;        // Move forward in the sequence
        b = fib;      // Update the last number
    }
    
    return fib;  // Return the nth Fibonacci number
}

// Example cases
console.log(fibonacci(1)); // Output: 0
console.log(fibonacci(5)); // Output: 3
console.log(fibonacci(0)); // Output: 0
console.log(fibonacci(2)); // Output: 1
console.log(fibonacci(10)); // Output: 34
