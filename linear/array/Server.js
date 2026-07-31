let arr = [5, 10, 15, 20];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
console.log("Sum of array elements:", sum);

//2nd max
let max = arr[0];
let secondMax = arr[0];
for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        secondMax = max;
        max = arr[i];
    } else if (arr[i] > secondMax) {
        secondMax = arr[i];
    }
}
console.log("Second maximum element:", secondMax);

//reverse array
let reversedArr = [];
for (let i = arr.length - 1; i >= 0; i--) {
    reversedArr.push(arr[i]);
}
console.log("Reversed array:", reversedArr);
//reverse array using built-in method
let reversedArrBuiltIn = arr.slice().reverse();
console.log("Reversed array using built-in method:", reversedArrBuiltIn);   
//reverse the array without using extra space
for (let i = 0; i < arr.length / 2; i++) {
    let temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
}
console.log("Reversed array without using extra space:", arr);
//reverse the array with using extra space
let reversedArrWithSpace = [];
for (let i = arr.length - 1; i >= 0; i--) {
    reversedArrWithSpace.push(arr[i]);
}
console.log("Reversed array with using extra space:", reversedArrWithSpace);
//Right rotation of array by k elements with time complexity O(n) 
let arr = [1, 2, 3, 4, 5];
let temp = new Array(arr.length);
let k = Number(prompt("Enter the number of rotations: "));
k = k % arr.length; // Handle cases where k is greater than array length
for (let i = 0; i < arr.length; i++) {
    temp[(i + k) % arr.length] = arr[i];
}
console.log("Array after right rotation by", k, "elements:", temp);
//Left rotation of array by k elements with time complexity O(n) and space complexity O(n)
let arr = [1, 2, 3, 4, 5];
let temp = new Array(arr.length);
let k = Number(prompt("Enter the number of rotations: "));
k = k % arr.length; 
for (let i = 0; i < arr.length; i++) {
    temp[i] = arr[(i + k) % arr.length];
}   
console.log("Array after left rotation by", k, "elements:", temp);
//Left rotation of array by k elements with time complexity O(n) and space complexity O(1)
let arr = [1, 2, 3, 4, 5];
let k = Number(prompt("Enter the number of rotations: "));
k = k % arr.length; // Handle cases where k is greater than array length
// Reverse the entire array
for (let i = 0; i < arr.length / 2; i++) {
    let temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
}
// Reverse the first k elements
for (let i = 0; i < k / 2; i++) {
    let temp = arr[i];
    arr[i] = arr[k - 1 - i];
    arr[k - 1 - i] = temp;
}
// Reverse the remaining elements
for (let i = k; i < (arr.length + k) / 2; i++) {
    let temp = arr[i];
    arr[i] = arr[arr.length - 1 - (i - k)];
    arr[arr.length - 1 - (i - k)] = temp;
}
console.log("Array after left rotation by", k, "elements:", arr);
//time and space complexity
let arr = [1, 2, 3, 4, 5];
let k = Number(prompt("Enter the number of rotations: "));
k = k % arr.length; // Handle cases where k is greater than array length
reverse(arr, 0, arr.length - 1);
reverse(arr, 0, k - 1);
reverse(arr, k, arr.length - 1);
console.log("Array after left rotation by", k, "elements:", arr);

function reverse(arr, i, j) {
    while (i < j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i++;
        j--;
    }
}
//Merg e two sorted arrays with time complexity O(n) and space complexity O(n)
let arr1 = [1, 3, 5, 7];
let arr2 = [2, 4, 6, 8];
let mergedArr = [];
let i = 0, j = 0;
while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
        mergedArr.push(arr1[i]);
        i++;
    } else {
        mergedArr.push(arr2[j]);
        j++;
    }
}
while (i < arr1.length) {
    mergedArr.push(arr1[i]);
    i++;
}
while (j < arr2.length) {
    mergedArr.push(arr2[j]);
    j++;
}
console.log("Merged array:", mergedArr);

//best time to buy and sell stock with time complexity O(n) and space complexity O(1)
let prices = [7, 1, 5, 3, 6, 4];
let minPrice = prices[0];
let maxProfit = 0;
for (let i = 1; i < prices.length; i++) {
    if (prices[i] < minPrice) {
        minPrice = prices[i];
    } else if (prices[i] - minPrice > maxProfit) {
        maxProfit = prices[i] - minPrice;
    }
}
console.log("Maximum profit:", maxProfit);
//sort colors with time complexity O(n) and space complexity O(1)
let colors = [2, 0, 2, 1, 1, 0];
let low = 0, mid = 0, high = colors.length - 1;
while (mid <= high) {
    if (colors[mid] === 0) {
        [colors[low], colors[mid]] = [colors[mid], colors[low]];
        low++;
        mid++;
    } else if (colors[mid] === 1) {
        mid++;
    } else {
        [colors[mid], colors[high]] = [colors[high], colors[mid]];
        high--;
    }
}
console.log("Array after sorting colors:", colors);
//kadane's algorithm with time complexity O(n) and space complexity O(1)
let arr = [-2,1,-3,4,-1,2,1,-5,4];
let maxSoFar = arr[0];
let maxEndingHere = arr[0];
for (let i = 1; i < arr.length; i++) {
    maxEndingHere = Math.max(arr[i], maxEndingHere + arr[i]);
    maxSoFar = Math.max(maxSoFar, maxEndingHere);
}
console.log("Maximum sum of contiguous subarray:", maxSoFar);
//moore's voting algorithm with time complexity O(n) and space complexity O(1)
let arr = [2, 2, 1, 1, 1, 2, 2];
let count = 0;
let candidate = null;
for (let i = 0; i < arr.length; i++) {
    if (count === 0) {
        candidate = arr[i];
        count = 1;
    } else if (arr[i] === candidate) {
        count++;
    } else {
        count--;
    }
}
console.log("Majority element:", candidate);
//traping rain water with time complexity O(n) and space complexity O(1)
let height = [0,1,0,2,1,0,1,3,2,1,2,1];
let leftMax = 0;
let rightMax = 0;
let left = 0;
let right = height.length - 1;
let water = 0;
while (left < right) {
    if (height[left] < height[right]) {
        if (height[left] >= leftMax) {
            leftMax = height[left];
        } else {
            water += leftMax - height[left];
        }
        left++;
    }
    else {
        if (height[right] >= rightMax) {
            rightMax = height[right];
        } else {
            water += rightMax - height[right];
        }
        right--;
    }
}
console.log("Total trapped rain water:", water);
