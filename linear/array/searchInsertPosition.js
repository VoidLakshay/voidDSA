// Search Insert Position (LeetCode #35)
// Approach: Binary Search
// Time Complexity: O(log n)
// Space Complexity: O(1)

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let first = 0;
    let last = nums.length - 1;
    
    while (first <= last) {
        // Beech ka index nikalna
        let mid = Math.floor((first + last) / 2);
        
        // Agar exact wahi target mil gaya
        if (nums[mid] === target) {
            return mid;
        } 
        // Agar array ka mid chota hai, matlab target pakka right side mein bada hoga
        else if (nums[mid] < target) {
            first = mid + 1;
        } 
        // Agar array ka mid bada hai, matlab target pakka left side mein chota hoga
        else {
            last = mid - 1;
        }
    }
    
    // Asli magic yahan hai:
    // Agar element array mein NAHI mila, toh loop tab tootega jab first > last ho jayega.
    // Us moment par 'first' pointer theek uss index pe baitha hota hai 
    // jahan naya element insert hona chahiye!
    return first;
};

// Testing the implementation
let nums = [1, 3, 5, 6];

// Example 1: Target exists
console.log(`Insert position for 5 in [${nums}] is:`, searchInsert(nums, 5)); // Output: 2

// Example 2: Target does not exist, insert in middle
console.log(`Insert position for 2 in [${nums}] is:`, searchInsert(nums, 2)); // Output: 1

// Example 3: Target does not exist, insert at the end
console.log(`Insert position for 7 in [${nums}] is:`, searchInsert(nums, 7)); // Output: 4
