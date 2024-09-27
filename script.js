function fibonacci(num) {
    if (num === 0) return 0; // F(0)
    if (num === 1) return 0; // F(1)
    if (num === 2) return 1; // F(2)

    let a = 0; // F(0)
    let b = 1; // F(1)
    let fib;

    for (let i = 2; i < num; i++) {
        fib = a + b; // F(n) = F(n-1) + F(n-2)
        a = b; // Move to the next Fibonacci number
        b = fib;
    }

    return fib; // Return the nth Fibonacci number
}

// Example test cases
console.log(fibonacci(1)); // Output: 0
console.log(fibonacci(2)); // Output: 1
console.log(fibonacci(3)); // Output: 1
console.log(fibonacci(4)); // Output: 2
console.log(fibonacci(5)); // Output: 3
console.log(fibonacci(10)); // Output: 34
