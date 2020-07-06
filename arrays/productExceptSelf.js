/**
 * Problem: Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to
 * the product of all the elements of nums except nums[i].
 * Constraints: Division is not allowed
 * Approach: For each integer calculate the product of it's left and right neighbors
 *
 * Complexity:
 * Time Complexity: O(N) where N is integerList.length
 * Space Complexity: O(N) since we define two helper arrays
 *
 * @param integerList
 * @return {number[]}
 */
function productExceptSelf(integerList) {

    // leftProduct[i] = the product of all integers in integerList in the range [0, i)
    let leftProduct = [];
    leftProduct[0] = 1;
    for (let i = 1; i < integerList.length; i++) {
        leftProduct[i] = leftProduct[i - 1] * integerList[i - 1];
    }

    // rightProduct[i] = the product of all integers in integerList in the range (i, integerList.length - 1]
    let rightProduct = [];
    rightProduct[integerList.length - 1] = 1;
    for (let i = integerList.length - 2; i >= 0; i--) {
        rightProduct[i] = rightProduct[i + 1] * integerList[i + 1];
    }

    let output = [];
    for (let i = 0; i < integerList.length; i++) {
        output[i] = leftProduct[i] * rightProduct[i];
    }
    return output;
}

productExceptSelf([24, 12, 8, 6]);
productExceptSelf([1, 7, 2, 5, 6, 8, 9]);
