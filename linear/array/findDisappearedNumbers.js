// Find All Numbers Disappeared in an Array (LeetCode #448)
// Approach: Cyclic Sort
// Time Complexity: O(n)
// Space Complexity: O(1) (excluding the returned output array)

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let i = 0;
    
    // Step 1: Cyclic Sort ki madad se saare elements ko unki sahi jagah bhejo.
    // Is array me numbers 1 se lekar n tak hain, toh number 'x' ki sahi jagah index 'x - 1' hogi.
    while (i < nums.length) {
        let correctIdx = nums[i] - 1;
        
        // Agar number apni sahi jagah par nahi baitha hai
        // Aur jis jagah use jana hai wahan pehle se same number nahi baitha (duplicates handle karne ke liye)
        if (nums[i] !== nums[correctIdx]) {
            // Unko swap kar do
            let temp = nums[i];
            nums[i] = nums[correctIdx];
            nums[correctIdx] = temp;
        } else {
            // Agar wo theek jagah par hai, aage badh jao
            i++;
        }
    }
    
    // Step 2: Missing numbers dhoondhna
    let missingNumbers = [];
    
    for (let j = 0; j < nums.length; j++) {
        // Agar index 'j' pe baitha number 'j + 1' nahi hai, 
        // toh iska matlab hai ki number 'j + 1' array se gayab (missing) hai!
        if (nums[j] !== j + 1) {
            missingNumbers.push(j + 1);
        }
    }
    
    return missingNumbers;
};

// Testing the implementation
let nums1 = [4, 3, 2, 7, 8, 2, 3, 1];
console.log(`Disappeared numbers in [4, 3, 2, 7, 8, 2, 3, 1] are:`, findDisappearedNumbers(nums1)); 
// Output: [5, 6]

let nums2 = [1, 1];
console.log(`Disappeared numbers in [1, 1] are:`, findDisappearedNumbers(nums2)); 
// Output: [2]
