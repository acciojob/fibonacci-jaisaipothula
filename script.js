function fibonacci(num) {
    if (num === 0) return 0; // Base case for 0
    if (num === 1) return 1; // Base case for 1

    let a = 0, b = 1; // Starting values for Fibonacci series
    for (let i = 2; i <= num; i++) {
        let temp = b; // Store the current b
        b = a + b; // Update b to the next Fibonacci number
        a = temp; // Update a to the previous b
    }
    return b; // Return the nth Fibonacci number
}

// Example usage:
console.log(fibonacci(1)); // Output: 0
console.log(fibonacci(5)); // Output: 3
