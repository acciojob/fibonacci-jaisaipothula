function fibonacci(num) {
    // Handle the base cases
    if (num === 0) return 0; // 0th Fibonacci number
    if (num === 1) return 1; // 1st Fibonacci number
    
    let a = 0; // F(0)
    let b = 1; // F(1)
    let c;

    for (let i = 2; i <= num; i++) {
        c = a + b; // Calculate the next Fibonacci number
        a = b; // Move forward in the sequence
        b = c;
    }

    return b; // Return the nth Fibonacci number
}

// Examples
console.log(fibonacci(1)); // Output: 0
console.log(fibonacci(5)); // Output: 3
console.log(fibonacci(10)); // Output: 34

    for (let i = 2; i <= num; i++) {
        c = a + b;
        a = b;
        b = c;
    }
    
    return b;
}

// Example usage:
console.log(fibonacci(5)); // Output: 5

