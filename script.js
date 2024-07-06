function fibonacci(num) {
    // Base cases for the first two Fibonacci numbers
    if (num === 1) return 0;
    if (num === 2) return 1;

    let prevPrev = 0; // Fibonacci(1)
    let prev = 1;     // Fibonacci(2)
    let current = 0;  // To store the current Fibonacci number

    // Calculate Fibonacci numbers from 3 to num
    for (let i = 3; i <= num; i++) {
        current = prev + prevPrev;
        prevPrev = prev;
        prev = current;
    }

    return current;
}

