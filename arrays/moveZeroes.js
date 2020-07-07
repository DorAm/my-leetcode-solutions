/**
 * Problem:
 * Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.
 *
 * Assumptions:
 * - You must do this in-place without making a copy of the array.
 * - Minimize the total number of operations.
 *
 * Approach: numsIterator for iterating the array and zeroIterator for iterating on the non-zero elements.
 *
 * Complexity:
 * Time: O(N) where N = nums.length;
 * Space: O(1)
 *
 * @param nums
 * @return {*}
 */
function moveZeroes(nums) {
    let numsIterator = 0;
    let zeroIterator = 0;
    while (zeroIterator < nums.length) {
        if (nums[zeroIterator] !== 0) {
            nums[numsIterator] = nums[zeroIterator];
            numsIterator++;
        }
        zeroIterator++;
    }
    while (numsIterator < nums.length) {
        nums[numsIterator] = 0;
        numsIterator++;
    }
    return nums;
}

// Tests:

console.log(moveZeroes([0, 1, 0, 3, 12]));
console.log(moveZeroes([5, 0, 6, 0, 0, 2]));
console.log(moveZeroes([0, 0, 0, 0, 2]));
console.log(moveZeroes([1, 0, 0, 0, 2]));

/**
 * As a first step, try coming up with a solution that makes use of additional space
 * @param nums
 * @return {[]}
 */
function moveZeroesAdditionalSpace(nums) {
    let shiftedArray = [];
    let zeroCounter = 0;
    for (let num of nums) {
        if (num === 0) {
            zeroCounter++;
        } else {
            shiftedArray.push(num);
        }
    }
    for (let i = 0; i < zeroCounter; i++) {
        shiftedArray.push(0);
    }
    return shiftedArray;
}

// Tests:

console.log(moveZeroesAdditionalSpace([0, 1, 0, 3, 12]));
console.log(moveZeroesAdditionalSpace([5, 0, 6, 0, 0, 2]));
console.log(moveZeroesAdditionalSpace([0, 0, 0, 0, 2]));
console.log(moveZeroesAdditionalSpace([1, 0, 0, 0, 2]));
