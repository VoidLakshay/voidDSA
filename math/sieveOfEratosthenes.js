// Find all prime numbers up to 'n' using Sieve of Eratosthenes algorithm
// Time Complexity: O(n * log(log(n)))

function sieveOfEratosthenes(n) {
    // Create an array of size n+1 and fill it with true
    // arr[i] == true means 'i' is a prime number. Initially, we assume all are prime.
    let arr = new Array(n + 1).fill(true);
    
    // 0 and 1 are explicitly not prime numbers
    arr[0] = false;
    arr[1] = false;
    
    // Start checking from the first prime number (2) up to sqrt(n)
    for (let i = 2; i <= Math.floor(Math.sqrt(n)); i++) {
        // If the current number is prime
        if (arr[i]) {
            // Mark all its multiples as false (not prime)
            // We start from i*i because smaller multiples (like i*2) are already marked by smaller primes (like 2)
            for (let j = i * i; j <= n; j += i) {
                arr[j] = false;
            }
        }
    }
    
    // Loop through the array and print the indices that are still true
    for (let i = 2; i < arr.length; i++) {
        if (arr[i]) {
            process.stdout.write(i + " ");
        }
    }
    console.log(); // Add a new line at the end
}

let n = 30;
console.log(`Prime numbers up to ${n} are:`);
sieveOfEratosthenes(n);
