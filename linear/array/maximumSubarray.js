function maxSubArray(nums) {
    let currentSum = 0;
    let maxSum = -Infinity;
    
    for (let i = 0; i < nums.length; i++) {
        currentSum += nums[i];
        
        if (currentSum > maxSum) {
            maxSum = currentSum;
        }
        
        if (currentSum < 0) {
            currentSum = 0;
        }
    }
    
    return maxSum;
}

const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log("Maximum subarray sum (Kadane's algorithm):", maxSubArray(nums));
