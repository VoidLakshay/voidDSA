// Find all factors of a number 'n' in sorted order
// Time Complexity: O(sqrt(n))

function printFactors(n) {
    // 1st Loop: Print factors from 1 to sqrt(n)
    for (let i = 1; i <= Math.floor(Math.sqrt(n)); i++) {
        if (n % i === 0) {
            process.stdout.write(i + " ");
        }
    }
    
    // 2nd Loop: Print factors from sqrt(n) down to 1
    for (let i = Math.floor(Math.sqrt(n)); i >= 1; i--) {
        if (n % i === 0) {
            // Avoid printing the square root twice if n is a perfect square (like 36 -> 6x6)
            if (n / i !== i) {
                process.stdout.write(n / i + " ");
            }
        }
    }
    console.log(); // Just to add a new line at the end
}

let n = 36;
console.log(`Factors of ${n} are:`);
printFactors(n);
