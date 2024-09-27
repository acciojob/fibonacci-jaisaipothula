function fibonacci(num) {
    if (num === 0) return 0; // F(0)
    if (num === 1) return 0; // F(1)
    if (num === 2) return 1; // F(2)

    let a = 0; // F(0)
    let b = 1; // F(1)

    for (let i = 2; i < num; i++) {
        let fib = a + b; // F(n) = F(n-1) + F(n-2)
        a = b; // Move to the next Fibonacci number
        b = fib;
    }

    return b; // Return the nth Fibonacci number
}
