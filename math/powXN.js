// Calculate x raised to the power n (x^n)
// Time Complexity: O(log n) -> Binary Exponentiation

var myPow = function(x, n) {
    if (n === 0) return 1.0;
    
    // Helper function ko call kiya
    let ans = temp(x, n);
    
    // Agar power negative hai (jaise 2^-3), toh result 1 / ans hoga
    return (n < 0) ? 1 / ans : ans;
};

var temp = function(x, n) {
    // Base case
    if (n === 0) return 1;
    
    // Power ko aadha kar diya (e.g., x^10 ko nikalne ke liye x^5 nikal lo pehle)
    // parseInt use kiya taki decimal hate (e.g., 5/2 = 2.5 ban jayega 2)
    let ans = temp(x, parseInt(n / 2));
    
    // Agar power even hai (e.g., 10)
    if (n % 2 === 0) {
        return ans * ans;
    }
    // Agar power odd hai (e.g., 5)
    return ans * ans * x;
};

// Examples
let x = 2.0;
let n = 10;
console.log(`${x} raised to power ${n} is:`, myPow(x, n));

n = -3;
console.log(`${x} raised to power ${n} is:`, myPow(x, n));
