function secondMaxElement(arr) {
    if (arr.length < 2) return undefined;
    
    let max = -Infinity;
    let secondMax = -Infinity;
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            secondMax = max;
            max = arr[i];
        } else if (arr[i] > secondMax && arr[i] < max) {
            secondMax = arr[i];
        }
    }
    
    return secondMax === -Infinity ? undefined : secondMax;
}

const arr = [10, 5, 10, 2, 9];
console.log("Second max element from array:", secondMaxElement(arr));
