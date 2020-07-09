/**
 * Problem:
 * Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
 * Return the running sum of nums.
 *
 * Approach:
 * iterate through the array and use an accumulator to create the new array
 *
 * Complexity:
 * Time Complexity: O(N) where N is nums.length
 * Space Complexity: O(N) since we define an output array
 *
 * @param nums
 * @return {number[]}
 */
function runningSum(nums) {
    let sumArray = [];
    let accumulator = 0;
    for (let i = 0; i < nums.length; i++) {
        accumulator += nums[i];
        sumArray[i] = accumulator;
    }
    return sumArray;
}

// Tests:

runningSum([1, 2, 3, 4]);
runningSum([1, 1, 1, 1, 1]);
runningSum([3, 1, 2, 10, 1]);
