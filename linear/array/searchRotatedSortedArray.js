// Search in Rotated Sorted Array (LeetCode #33)
// Approach: Binary Search
// Time Complexity: O(log n)
// Space Complexity: O(1)

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let first = 0;
    let last = nums.length - 1;
    
    while (first <= last) {
        let m = Math.floor((first + last) / 2);
        
        // Agar target middle mein mil gaya
        if (nums[m] === target) return m;
        
        // Check karo ki Array ka LEFT half completely sorted hai ya nahi
        if (nums[first] <= nums[m]) {
            // Agar Left half sorted hai, toh check karo kya target is range mein aata hai?
            if (target >= nums[first] && target < nums[m]) {
                last = m - 1; // Target Left half mein hi hai
            } else {
                first = m + 1; // Target Right half mein hai
            }
        } 
        // Agar Left half sorted nahi hai, toh pakka RIGHT half sorted hoga
        else {
            // Check karo kya target Right half ki range mein aata hai?
            if (target > nums[m] && target <= nums[last]) {
                first = m + 1; // Target Right half mein hi hai
            } else {
                last = m - 1; // Target Left half mein hai
            }
        }
    }
    
    // Agar number array mein hai hi nahi
    return -1;
};

// Testing the implementation
let nums = [4, 5, 6, 7, 0, 1, 2];
console.log(`Index of 0 in [${nums}] is:`, search(nums, 0)); // Output: 4

console.log(`Index of 3 in [${nums}] is:`, search(nums, 3)); // Output: -1
