# Time Complexity

Time Complexity ka matlab ye nahi hai ki code exactly kitne seconds le raha hai (kyunki wo hardware par depend karta hai).
Iska seedha matlab hai ki **jaise-jaise input size (n) badhega, loop kitni baar chalega ya operations kis rate se badhenge.**

### 1. O(1) - Constant Time
Input size kitna bhi bada ho, hamesha constant steps lagenge.

```javascript
function getFirstElement(arr) {
    return arr[0]; 
}
// O(1)
```

### 2. O(n) - Linear Time
Jitna bada input, utni baar loop chalega. (Input double -> Time double).

```javascript
function printAllElements(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
// O(n)
```

### 3. O(n^2) - Quadratic Time 
Nested loops. Operations seedha `n * n` ho jate hain. Bade inputs pe code fass jata hai.

```javascript
function printAllPairs(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            console.log(arr[i], arr[j]);
        }
    }
}
// O(n^2)
```

### TLE (Time Limit Exceeded)
Agar question mein constraint `1 <= n <= 10^5` hai aur solution `O(n^2)` hai, toh operations `10^10` (10 billion) ban jayenge.
Ek standard online judge 1 second mein sirf `10^8` operations execute kar pata hai. Is case mein time zyada lagega aur TLE aayega.
Aise constraints (`10^5`) wale questions ke liye solution hamesha `O(n)` ya `O(n log n)` mein sochna padta hai.
