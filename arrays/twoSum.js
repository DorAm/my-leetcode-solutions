/**
 * Problem: Given an array of integers, return indices of the two numbers such that they add up to a specific target.
 * Assumptions: Each input would have exactly one solution, and you may not use the same element twice.
 * Approach: Creating a HashMap to store the items of nums, and checking if target - nums[i] exists
 *
 * Complexity:
 * Time Complexity: O(N) where N = nums.length
 * Space Complexity: O(N) where N = nums.length
 *
 * @param nums
 * @param target
 * @return {(number|*)[]|*[]}
 */
function twoSum(nums, target) {
    const numsMap = {};
    // numsMap: num -> index of num in nums
    for (let i = 0; i < nums.length; i++) {
        numsMap[nums[i]] = i;
    }
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (numsMap.hasOwnProperty(complement) && numsMap[complement] !== i) {
            return [i, numsMap[complement]];
        }
    }
    return [];
}

// Tests:

console.log(twoSum([2, 7, 11, 15], 9));
