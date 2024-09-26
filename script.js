function fibonacci(num) {
    // Handle base cases
    if (num === 0) return 0;
    if (num === 1) return 1;
    let a = 0, b = 1;
    for (let i = 2; i <= num; i++) {
        let temp = a + b; 
        a = b;        
        b = temp;      
    }

    return a;
}

console.log(fibonacci(1));  
console.log(fibonacci(5));  
    
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
console.log(fibonacci(5)); // Output: 5

