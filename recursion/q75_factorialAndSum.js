// Q 75. Factorial / Sum using recursion

// Function to calculate the factorial of a number 'n'
function factorial(n) {
    // Base case: factorial of 0 or 1 is 1
    if (n === 0 || n === 1) {
        return 1;
    }
    // Recursive call
    return n * factorial(n - 1);
}

// Function to calculate the sum of first 'n' natural numbers
function sumOfNaturalNumbers(n) {
    // Base case: sum up to 0 is 0
    if (n === 0) {
        return 0;
    }
    // Recursive call
    return n + sumOfNaturalNumbers(n - 1);
}

const num = 5;
console.log(`Factorial of ${num}:`, factorial(num));
console.log(`Sum of first ${num} natural numbers:`, sumOfNaturalNumbers(num));
