function mergeSortedArrays(arr1, arr2) {
    let mergedArray = [];
    let i = 0;
    let j = 0;
    
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            mergedArray.push(arr1[i]);
            i++;
        } else {
            mergedArray.push(arr2[j]);
            j++;
        }
    }
    
    // If there are remaining elements in arr1
    while (i < arr1.length) {
        mergedArray.push(arr1[i]);
        i++;
    }
    
    // If there are remaining elements in arr2
    while (j < arr2.length) {
        mergedArray.push(arr2[j]);
        j++;
    }
    
    return mergedArray;
}

const array1 = [1, 3, 5, 7];
const array2 = [2, 4, 6, 8];
console.log("Merged sorted array:", mergeSortedArrays(array1, array2));
