// Merge Sort Algorithm
// Time Complexity: O(n log n)

// ==========================================
// METHOD 1: Index-Based Approach (In-Place Modifications)
// Space Complexity: O(n)
// Ye wo tareeqa hai jo humne pehle likha tha aur C++/Java mein zyada chalta hai.
// ==========================================

function conquerMethod1(arr, first, mid, last) {
    let temp = new Array(last - first + 1);
    let i = first, j = mid + 1, k = 0;
    
    while (i <= mid && j <= last) {
        if (arr[i] <= arr[j]) temp[k++] = arr[i++];
        else temp[k++] = arr[j++];
    }
    while (i <= mid) temp[k++] = arr[i++];
    while (j <= last) temp[k++] = arr[j++];
    
    for (let x = 0, y = first; x < temp.length; x++, y++) {
        arr[y] = temp[x];
    }
}

function divideMethod1(arr, first, last) {
    if (first >= last) return;
    let mid = Math.floor((first + last) / 2);
    divideMethod1(arr, first, mid);
    divideMethod1(arr, mid + 1, last);
    conquerMethod1(arr, first, mid, last);
}

// ==========================================
// METHOD 2: Slice-Based Approach (Returning New Arrays)
// Space Complexity: O(n log n) due to multiple slice arrays
// Ye tareeqa specifically JavaScript me bahut famous aur clean hai.
// ==========================================

function mergeSortMethod2(arr) {
    // Base case: 1 ya 0 element
    if (arr.length <= 1) return arr;

    // Array ko 2 hisso mein todna (using slice)
    let mid = Math.floor(arr.length / 2);
    let left = mergeSortMethod2(arr.slice(0, mid));
    let right = mergeSortMethod2(arr.slice(mid));

    // Dono hisso ko merge karke return karna
    return mergeMethod2(left, right);
}

function mergeMethod2(left, right) {
    let sortedArr = [];
    
    // Dono arrays ko compare karke sortedArr mein dalna
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            sortedArr.push(left.shift()); // shift() first element nikalta hai
        } else {
            sortedArr.push(right.shift());
        }
    }
    
    // Bacha hua data jod do
    return [...sortedArr, ...left, ...right];
}

// ==========================================
// TESTING BOTH METHODS
// ==========================================

let arr1 = [6, 3, 9, 5, 2, 8];
console.log("Original array 1:", arr1);
divideMethod1(arr1, 0, arr1.length - 1);
console.log("Sorted array (Method 1):", arr1);

let arr2 = [8, 2, 1, 9, 5, 12, 4, 20];
console.log("\nOriginal array 2:", arr2);
let sortedArr2 = mergeSortMethod2(arr2);
console.log("Sorted array (Method 2):", sortedArr2);
