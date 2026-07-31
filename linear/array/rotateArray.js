function reverse(arr, start, end) {
    while (start < end) {
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
}

function rotateRight(arr, k) {
    const n = arr.length;
    if (n === 0) return arr;
    k = k % n;
    reverse(arr, 0, n - 1);
    reverse(arr, 0, k - 1);
    reverse(arr, k, n - 1);
    return arr;
}

function rotateLeft(arr, k) {
    const n = arr.length;
    if (n === 0) return arr;
    k = k % n;
    reverse(arr, 0, k - 1);
    reverse(arr, k, n - 1);
    reverse(arr, 0, n - 1);
    return arr;
}

let arr1 = [1, 2, 3, 4, 5];
console.log("Original array for right rotation:", [...arr1]);
console.log("Right rotation by 2:", rotateRight(arr1, 2));

let arr2 = [1, 2, 3, 4, 5];
console.log("Original array for left rotation:", [...arr2]);
console.log("Left rotation by 2:", rotateLeft(arr2, 2));
