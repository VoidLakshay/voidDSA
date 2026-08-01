function majorityElement(nums) {
    let count = 0;
    let candidate = null;
    
    for (let i = 0; i < nums.length; i++) {
        if (count === 0) {
            candidate = nums[i];
        }
        count += (nums[i] === candidate) ? 1 : -1;
    }
    
    return candidate;
}

const elements = [2, 2, 1, 1, 1, 2, 2];
console.log("Majority element (Moore's voting algo):", majorityElement(elements));
