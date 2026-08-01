function sortColors(nums) {
    let low = 0;
    let mid = 0;
    let high = nums.length - 1;
    
    while (mid <= high) {
        if (nums[mid] === 0) {
            // Swap nums[low] and nums[mid]
            let temp = nums[low];
            nums[low] = nums[mid];
            nums[mid] = temp;
            low++;
            mid++;
        } else if (nums[mid] === 1) {
            mid++;
        } else {
            // Swap nums[mid] and nums[high]
            let temp = nums[mid];
            nums[mid] = nums[high];
            nums[high] = temp;
            high--;
        }
    }
    return nums;
}

const colors = [2, 0, 2, 1, 1, 0];
console.log("Sorted colors:", sortColors(colors));
