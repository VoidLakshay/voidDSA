// Quick Sort Algorithm (Divide and Conquer)
// Time Complexity: O(n log n) [Average Case], O(n^2) [Worst Case]
// Space Complexity: O(log n) [Auxiliary Stack Space]

// Function to swap two elements in the array
function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

// Function to partition the array and place the pivot at its correct sorted position
function findPivotIdx(arr, first, last) {
    // Hum pehle element ko Pivot maan rahe hain
    let pivot = arr[first];
    
    let i = first + 1; // Left se search karega (pivot se bado ke liye)
    let j = last;      // Right se search karega (pivot se choton ke liye)
    
    while (i <= j) {
        // Left pointer aage badhao jab tak chote elements mil rahe hain
        while (i <= last && arr[i] <= pivot) {
            i++;
        }
        // Right pointer piche laao jab tak bade elements mil rahe hain
        while (j >= first && arr[j] > pivot) {
            j--;
        }
        
        // Agar i aur j cross nahi hue hain, unko swap kar do
        if (i < j) {
            swap(arr, i, j);
        }
    }
    
    // Aakhiri mein Pivot ko uski sahi jagah (j index) par swap kar do
    swap(arr, j, first);
    
    // Pivot ki sahi jagah return karo taaki array wahin se toot sake
    return j;
}

// Main Quick Sort function
function quickSort(arr, first, last) {
    // Base case: agar array me 1 ya 0 element hai, toh ruk jao
    if (first >= last) {
        return;
    }
    
    // Pivot ko uski sahi jagah par daalo aur wo index nikal lo
    let pIdx = findPivotIdx(arr, first, last);
    
    // Pivot ke left hisse ko sort karo
    quickSort(arr, first, pIdx - 1);
    
    // Pivot ke right hisse ko sort karo
    quickSort(arr, pIdx + 1, last);
}

// Testing the implementation
let arr = [19, 3, 17, 24, 1, 87, 22];
console.log("Original array:", arr);
quickSort(arr, 0, arr.length - 1);
console.log("Sorted array (Quick Sort):", arr);
