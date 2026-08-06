# Time Complexity (In Simple Terms)

Bhai, Time Complexity ka seedha sa matlab ye nahi hai ki code kitne seconds mein run ho raha hai (kyunki seconds toh tumhare laptop ki RAM aur processor pe depend karte hain).
Time complexity ka matlab hai ki **jaise-jaise input size (n) badhega, tumhare code mein loop kitni baar chalega ya basic operations kitni baar honge**.

Let's understand this with simple code examples!

### 1. O(1) - Constant Time
Agar array mein 1 element ho ya 1 million elements, ye code hamesha 1 hi step lega. It doesn't care about input size.

```javascript
function getFirstElement(arr) {
    // Array kitna bhi bada ho, humein sirf index 0 uthana hai
    return arr[0]; 
}
// Time Complexity: O(1)
```

### 2. O(n) - Linear Time
Agar array mein `n` elements hain, toh loop `n` times chalega. Agar input double hoga, toh time bhi double lagega.

```javascript
function printAllElements(arr) {
    // Ye loop arr ki length ke barabar chalega
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
// Time Complexity: O(n)
```

### 3. O(n^2) - Quadratic Time (Usually bad for large inputs)
Jab ek loop ke andar dusra loop hota hai, toh total operations `n * n` ho jaate hain. Yahan TLE aane ke chances sabse zyada hote hain agar `n` bada ho.

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

### TLE aur Large Input ka chakkar kya hai?
Agar leetcode pe question mein constraint diya hai `1 <= n <= 10^5`, aur tumne uper wala `O(n^2)` solution likh diya, toh tumhare loops `10^10` (10 billion) baar chalenge. 
Normally, ek standard server 1 second mein lagbhag `10^8` operations kar pata hai. Toh tumhara code 100 seconds lega, aur online judge bolega **TLE (Time Limit Exceeded)**.
Isliye bade inputs ko handle karne ke liye humein code ko `O(n)` ya `O(n log n)` jaise better time complexity mein likhna padta hai!
