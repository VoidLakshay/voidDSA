// Q 76. Fibonacci series using recursion (Optimized Tail Recursion)

// Function to print remaining n terms of Fibonacci series
function fiboNTerms(n, first, second) {
    // Base case: if no terms left to print, return
    if (n === 0) return;
    
    // Calculate the next term
    let third = first + second;
    process.stdout.write(third + " ");
    
    // Recursive call with updated states and n-1
    fiboNTerms(n - 1, second, third);
}

let n = 10; // Total number of terms to print
console.log(`Fibonacci series up to ${n} terms:`);

if (n >= 1) process.stdout.write(0 + " ");
if (n >= 2) process.stdout.write(1 + " ");

// Recursively print the remaining (n-2) terms
if (n > 2) {
    fiboNTerms(n - 2, 0, 1);
}
console.log(); // Just to print a new line at the end
