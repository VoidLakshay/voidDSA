// Cyclic Sort Algorithm
// Time Complexity: O(n)
// Space Complexity: O(1)
// Note: This sorting algorithm is extremely fast but ONLY works when 
// the array contains a continuous sequence of numbers from 1 to N.

function cyclicSort(arr) {
    let i = 0;
    
    // Loop through the entire array
    while (i < arr.length) {
        // Calculate the correct index where the current number should actually be.
        // Since numbers are from 1 to N, number '5' should be at index '4'.
        let correctIdx = arr[i] - 1;
        
        // Agar current number apni sahi jagah (correct index) pe NAHI hai
        if (arr[i] !== arr[correctIdx]) {
            // Toh usko uski sahi jagah wale number se swap kar do
            let temp = arr[i];
            arr[i] = arr[correctIdx];
            arr[correctIdx] = temp;
        } 
        // Agar wo pehle se hi apni sahi jagah pe baitha hai
        else {
            // Toh aage badh jao
            i++;
        }
    }
}

// Testing the implementation
let arr = [7, 5, 8, 2, 1, 4, 3, 6];
console.log("Original array:", arr);
cyclicSort(arr);
console.log("Sorted array (Cyclic Sort):", arr);
