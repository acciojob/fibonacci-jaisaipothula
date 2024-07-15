function fibonacci(num) {
    if (num === 0) return 0;
    if (num === 1) return 1;
    
    let a = 0;
    let b = 1;
    let c;
    
    for (let i = 2; i <= num; i++) {
        c = a + b;
        a = b;
        b = c;
    }
    
    return b;
}

// Example usage:
console.log(fibonacci(0)); // Output: 0
console.log(fibonacci(1)); // Output: 1
console.log(fibonacci(2)); // Output: 1
console.log(fibonacci(5)); // Output: 5
console.log(fibonacci(10)); // Output: 55

