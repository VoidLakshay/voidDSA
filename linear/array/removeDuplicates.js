function removeDuplicates(arr) {
    if (arr.length === 0) return 0;
    
    let i = 0;
    for (let j = 1; j < arr.length; j++) {
        if (arr[j] !== arr[i]) {
            i++;
            arr[i] = arr[j];
        }
    }
    // Return the new length. The array up to that length contains the unique elements
    return i + 1;
}

let sortedArr = [1, 1, 2, 2, 2, 3, 4, 4, 5];
let newLength = removeDuplicates(sortedArr);
console.log("Array after removing duplicates:", sortedArr.slice(0, newLength));
console.log("New length:", newLength);
