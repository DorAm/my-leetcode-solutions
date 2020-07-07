/**
 * Problem:
 * Given an integer array, you need to find one continuous subarray that if you only sort this subarray in
 * ascending order, then the whole array will be sorted in ascending order, too.
 *
 * Approach:
 * Sort nums and compare items from left and right to find the subarray that has to change
 *
 * Complexity:
 * Time: O(N log N) where N = nums.length
 * Space: O(N) the sorted nums array
 *
 * @param nums
 * @return {number}
 */
function findUnsortedSubarray(nums) {
    let sortedNums = nums.concat().sort((a, b) => a - b);
    let windowStart = 0;
    while (sortedNums[windowStart] === nums[windowStart] && windowStart < nums.length - 1) {
        windowStart++;
    }
    if (windowStart === nums.length - 1) {
        return 0;
    }
    let windowEnd = nums.length - 1;
    while (sortedNums[windowEnd] === nums[windowEnd] && windowEnd > 0) {
        windowEnd--;
    }
    return windowEnd - windowStart + 1;
}

// Tests:

findUnsortedSubarray([1, 2, 3, 4]);
findUnsortedSubarray([2, 6, 4, 8, 10, 9, 15]);
