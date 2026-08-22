// Q 73. Print hello n times using recursion
function printHello(n) {
    // Base case
    if (n === 0) {
        return;
    }
    
    console.log("hello");
    
    // Recursive call
    printHello(n - 1);
}

// Example usage
console.log("Printing hello 5 times:");
printHello(5);
