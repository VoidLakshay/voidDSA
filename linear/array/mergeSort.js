// Merge Sort Algorithm (Divide and Conquer)
// Time Complexity: O(n log n)
// Space Complexity: O(n)

// Function to merge two sorted halves (The Conquer step)
function conquer(arr, first, mid, last) {
    let temp = new Array(last - first + 1); // Temporary array to hold merged elements
    let i = first;      // Starting index for left sub-array
    let j = mid + 1;    // Starting index for right sub-array
    let k = 0;          // Starting index for temporary array
    
    // 1. Compare and merge elements into temp array in sorted order
    while (i <= mid && j <= last) {
        if (arr[i] <= arr[j]) {
            temp[k++] = arr[i++];
        } else {
            temp[k++] = arr[j++];
        }
    }
    
    // 2. Copy remaining elements of left sub-array (if any)
    while (i <= mid) {
        temp[k++] = arr[i++];
    }
    
    // 3. Copy remaining elements of right sub-array (if any)
    while (j <= last) {
        temp[k++] = arr[j++];
    }
    
    // 4. Copy elements from temp array back to the original array
    for (let x = 0, y = first; x < temp.length; x++, y++) {
        arr[y] = temp[x];
    }
}

// Function to divide the array into halves recursively (The Divide step)
function divide(arr, first, last) {
    // Base case: if array has 1 or 0 elements, it's already sorted
    if (first >= last) {
        return;
    }
    
    let mid = Math.floor((first + last) / 2);
    
    // Recursive calls to sort first and second halves
    divide(arr, first, mid);
    divide(arr, mid + 1, last);
    
    // Merge the two sorted halves
    conquer(arr, first, mid, last);
}

// Testing the implementation
let arr = [6, 3, 9, 5, 2, 8];
let n = arr.length;

console.log("Original array:", arr);
divide(arr, 0, n - 1);
console.log("Sorted array (Merge Sort):", arr);
