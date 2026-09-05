// Binary Search Algorithm (Iterative)
// Time Complexity: O(log n)
// Note: Binary Search only works on sorted arrays.

function binarySearch(arr, first, last, target) {
    // Jab tak search space valid hai
    while (first <= last) {
        // Middle element ka index nikalo
        let mid = Math.floor((first + last) / 2);
        
        // Agar target mil gaya
        if (arr[mid] === target) {
            return mid;
        } 
        // Agar mid wala element target se bada hai, toh target left side hoga
        else if (arr[mid] > target) {
            last = mid - 1;
        } 
        // Agar mid wala element target se chota hai, toh target right side hoga
        else {
            first = mid + 1;
        }
    }
    
    // Agar element poore array mein nahi mila
    return -1;
}

let arr = [2, 5, 8, 9, 12, 18, 20, 25, 67, 101, 125];
let target = 100;
let index = binarySearch(arr, 0, arr.length - 1, target);

if (index === -1) {
    console.log("Not found");
} else {
    console.log("Target found at index: " + index);
}

// Checking for an element that exists
target = 18;
index = binarySearch(arr, 0, arr.length - 1, target);
if (index === -1) {
    console.log("Not found");
} else {
    console.log("Target found at index: " + index);
}
