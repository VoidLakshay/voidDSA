# My DSA Notes: Time Complexity

Time Complexity ka simple matlab mere liye ye nahi hai ki mera code literally kitne seconds le raha hai, kyunki seconds toh hardware pe depend karte hain.
Asli funda ye hai ki **agar mera input size (n) badhega, toh mere code mein loop kitni baar chalega ya operations kis rate se badhenge.**

Jab bhi main naya code likhunga, main in basic examples ko apne dhyan mein rakhunga:

### 1. O(1) - Constant Time
Mera code input size se bilkul farq nahi padta. Sirf ek step mein kaam khatam.

```javascript
function getFirstElement(arr) {
    // Array chahe 1 lakh ka ho, mujhe bas 0th index uthana hai
    return arr[0]; 
}
// Time Complexity: O(1)
```

### 2. O(n) - Linear Time
Jitna input, utni baar loop chalega. Agar `n` elements hain, toh loop `n` baar hi operations karega.

```javascript
function printAllElements(arr) {
    // Main pura array ek-ek karke traverse kar raha hu
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
// Time Complexity: O(n)
```

### 3. O(n^2) - Quadratic Time (Is se hamesha bachna hai!)
Jab main loop ke andar ek aur loop lagaunga, toh calculations seedha `n * n` ho jayengi. Agar input thoda bhi bada hai, toh yahi code fasa deta hai.

```javascript
function printAllPairs(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            console.log(arr[i], arr[j]);
        }
    }
}
// Time Complexity: O(n^2)
```

### Mujhe TLE kyu aata hai? (LeetCode Rule)
Agar question mein constraint `1 <= n <= 10^5` diya hai aur maine galti se `O(n^2)` solution likh diya, toh mere loops `10^10` (10 billion) baar chalenge!
Mujhe hamesha dhyan rakhna hai ki ek standard online judge 1 second mein lagbhag `10^8` operations hi run karta hai. 
Toh mera code 100 seconds lega aur mujhe turant **TLE (Time Limit Exceeded)** thama diya jayega.

Rule of thumb: Bade constraints (`10^5` ya usse bade) dekhte hi mujhe samajh jana hai ki solution `O(n)` ya `O(n log n)` mein hi nikalna hai.
