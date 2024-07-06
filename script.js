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


