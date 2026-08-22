// Q 74. Print natural number 1-n / n-1 using recursion

// Function to print from 1 to n
function print1ToN(n, current = 1) {
    // Base case
    if (current > n) {
        return;
    }
    console.log(current);
    // Recursive call
    print1ToN(n, current + 1);
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
