function fibonacci(num) {
    if (num === 0) return 0;  // Base case: Fibonacci(0) is 0
    if (num === 1) return 1;  // Base case: Fibonacci(1) is 1
    
    let prevPrev = 0; // Fibonacci(0)
    let prev = 1;     // Fibonacci(1)
    let current = 0;  // To store the current Fibonacci number
    
    // Calculate Fibonacci numbers from 2 to num
    for (let i = 2; i <= num; i++) {
        current = prev + prevPrev;
        prevPrev = prev;
        prev = current;
    }
    
    return current;
}

// Example usage:
console.log(fibonacci(0));  // Output: 0
console.log(fibonacci(1));  // Output: 1
console.log(fibonacci(2));  // Output: 1
console.log(fibonacci(3));  // Output: 2
console.log(fibonacci(4));  // Output: 3
console.log(fibonacci(5));  // Output: 5
console.log(fibonacci(6));  // Output: 8
console.log(fibonacci(7));  // Output: 13



