function maxElement(arr) {
    if (arr.length === 0) return undefined;
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

const arr = [1, 5, 3, 9, 2];
console.log("Max element from array:", maxElement(arr));
