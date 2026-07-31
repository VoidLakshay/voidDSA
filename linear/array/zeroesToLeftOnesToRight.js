function zeroesToLeftOnesToRight(arr) {
    let left = 0;
    let right = arr.length - 1;
    
    while (left < right) {
        while (arr[left] === 0 && left < right) {
            left++;
        }
        while (arr[right] === 1 && left < right) {
            right--;
        }
        if (left < right) {
            arr[left] = 0;
            arr[right] = 1;
            left++;
            right--;
        }
    }
    return arr;
}

const arr = [1, 0, 1, 0, 0, 1, 1, 0];
console.log("Zeroes to left, ones to right:", zeroesToLeftOnesToRight(arr));
