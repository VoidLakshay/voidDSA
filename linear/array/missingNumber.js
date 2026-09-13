// Missing Number (LeetCode #268)
// Approach: Cyclic Sort
// Time Complexity: O(n)
// Space Complexity: O(1)

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let i = 0;
    
    // Step 1: Array ko Cyclic Sort ki madad se sort karna
    while (i < nums.length) {
        // Is question mein numbers 0 se N tak hain. 
        // Toh number 'x' ki sahi jagah (correct index) uski apni value 'x' hi hogi.
        let correctIdx = nums[i];
        
        // Agar number array ke size ke andar hai (nums.length se chota) 
        // aur wo apni sahi jagah pe nahi baitha hai, toh usko swap karo
        if (nums[i] < nums.length && nums[i] !== nums[correctIdx]) {
            let temp = nums[i];
            nums[i] = nums[correctIdx];
            nums[correctIdx] = temp;
        } else {
            // Agar pehle se sahi jagah pe hai (ya N ke barabar hai), toh aage badho
            i++;
        }
    }

    // Step 2: Array me ghus ke Missing Number dhoondhna
    // Sort hone ke baad, har index pe same number hona chahiye (index 0 pe 0, 1 pe 1...)
    for (let j = 0; j < nums.length; j++) {
        if (j !== nums[j]) {
            // Jo pehla index match nahi karega, wahi hamara missing number hai!
            return j; 
        }
    }
    
    // Agar 0 se leke nums.length-1 tak saare numbers theek hain, 
    // toh iska matlab sabse aakhiri number (yani N) hi missing hai.
    return nums.length;
};

// Testing the implementation
let nums1 = [3, 0, 1];
console.log(`Missing number in [${nums1}] is:`, missingNumber(nums1)); // Output: 2

let nums2 = [9, 6, 4, 2, 3, 5, 7, 0, 1];
console.log(`Missing number in [${nums2}] is:`, missingNumber(nums2)); // Output: 8
