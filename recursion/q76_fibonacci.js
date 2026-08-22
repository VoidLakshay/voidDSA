// Q 76. Fibonacci series using recursion

// Function to find the nth Fibonacci number
function fibonacci(n) {
    // Base cases: 0th Fibonacci is 0, 1st Fibonacci is 1
    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }
    
    // Recursive call: sum of previous two Fibonacci numbers
    return fibonacci(n - 1) + fibonacci(n - 2);
}

const n = 6;
console.log(`The ${n}th Fibonacci number is:`, fibonacci(n));

// To print the series up to n
console.log(`Fibonacci series up to ${n} terms:`);
for (let i = 0; i <= n; i++) {
    process.stdout.write(fibonacci(i) + " ");
}
console.log();
