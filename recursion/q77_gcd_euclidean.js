// Q 77. Find GCD (Greatest Common Divisor) using Euclidean Algorithm

// 1. Iterative Approach (Using Modulo)
// Isme hum while loop use karte hain jab tak b zero na ho jaye.
// Time Complexity: O(log(min(a, b)))
function gcdIterative(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

let a = 48, b = 18;
while (a != b) {
    if (a > b) {
        a = a - b;
    } else {
        b = b - a;
    }
}
console.log(a);


// 2. Recursive Approach (Using Subtraction - Basic Euclidean)
// Isme bade number me se chota number minus karte hain.
// Time Complexity: O(max(a, b)) -> Worst case me bahut slow (e.g., gcd(100000, 1))
function gcdRecursiveSub(a, b) {
    // Base cases
    if (a === 0) return b;
    if (b === 0) return a;
    if (a === b) return a;

    // Recursive calls
    if (a > b) {
        return gcdRecursiveSub(a - b, b);
    } else {
        return gcdRecursiveSub(a, b - a);
    }
}

// 3. Optimized Recursive Approach (Using Modulo)
// Ye sabse best tarika hai. Modulo use karne se steps drastically kam ho jate hain.
// Time Complexity: O(log(min(a, b))) jo ki effectively bounded hai O(log(max(a,b))) ke andar.
function gcdRecursiveOptimized(a, b) {
    // Base case
    if (b === 0) {
        return a;
    }
    // Recursive case: Euclidean Modulo Logic
    return gcdRecursiveOptimized(b, a % b);
}

const num1 = 48;
const num2 = 18;

console.log(`GCD of ${num1} and ${num2} using Iterative:`, gcdIterative(num1, num2));
console.log(`GCD of ${num1} and ${num2} using Recursive (Subtraction):`, gcdRecursiveSub(num1, num2));
console.log(`GCD of ${num1} and ${num2} using Optimized Recursive O(log(max(a,b))):`, gcdRecursiveOptimized(num1, num2));
