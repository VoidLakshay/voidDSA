// Q 74. Print natural number 1-n / n-1 using recursion

// Function to print from 1 to n
// Function to print from 1 to n (Classic approach without extra parameter)
function print1ToN(n) {
    // Base case
    if (n === 0) {
        return;
    }
    // Recursive call first
    print1ToN(n - 1);
    // Print happens during the unwinding of the call stack
    console.log(n);
}

// Function to print from n to 1
function printNTo1(n) {
    // Base case
    if (n === 0) {
        return;
    }
    console.log(n);
    // Recursive call
    printNTo1(n - 1);
}

console.log("Printing natural numbers 1 to 5:");
print1ToN(5);

console.log("\nPrinting natural numbers 5 to 1:");
printNTo1(5);
