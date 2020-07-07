/**
 * Problem:
 * Given an array of integers that is already sorted in ascending order,
 * find two numbers such that they add up to a specific target number. The function twoSum should return indices of
 * the two numbers such that they add up to the target, where index1 must be less than index2.
 *
 * Assumptions:
 * - Your returned answers (both index1 and index2) are not zero-based.
 * - Each input would have exactly one solution
 * - You may not use the same element twice.
 *
 * Approach:
 * Two pointers on a sorted array
 *
 * Complexity:
 * Time: O(N) where N = numbers.length
 * Space: O(1)
 *
 * @param numbers
 * @param target
 * @return {number[]|*[]}
 */
function twoSum2(numbers, target) {
    let start = 0;
    let end = numbers.length - 1;

    while (start < end) {
        let sum = numbers[start] + numbers[end];
        if (sum === target) {
            // adding +1 since nums is not zero based
            return [start + 1, end + 1];
        } else if (sum < target) {
            start++;
        } else {
            end--;
        }
    }
    return [];
}

// Tests:

console.log(twoSum2([2, 7, 11, 15], 9));
console.log(twoSum2([1, 2, 3, 4], 4));
console.log(twoSum2([2, 7, 11, 15], 100));
console.log(twoSum2([-6, -5, -2, -1], -3));
