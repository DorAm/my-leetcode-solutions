/**
 * Problem: Given two binary strings, return their sum (also a binary string).
 * Approach: Bit Arithmetic
 * Assumptions: The input strings are both non-empty and contains only characters 1 or 0.
 *
 * Complexity:
 * Time Complexity: O(N) Where N is max(a, b)
 * Space Complexity: O(1)
 *
 * @param a
 * @param b
 * @return {string}
 */
function addBinary(a, b) {
    let binarySum = '';
    let carry = 0;

    let lengthDifference = Math.abs(a.length - b.length);
    if (a.length > b.length) {
        b = padNumberWithZeroes(b, lengthDifference);
    } else {
        a = padNumberWithZeroes(a, lengthDifference);
    }

    let digitIndex = a.length - 1;
    while (digitIndex >= 0) {
        let digitsSum = parseInt(a[digitIndex]) + parseInt(b[digitIndex]) + carry;
        switch (digitsSum) {
            case 0: {
                binarySum = '0' + binarySum;
                carry = 0;
                break;
            }
            case 1: {
                binarySum = '1' + binarySum;
                carry = 0;
                break;
            }
            case 2: {
                binarySum = '0' + binarySum;
                carry = 1;
                break;
            }
            case 3: {
                binarySum = '1' + binarySum;
                carry = 1;
            }
        }
        digitIndex--;
    }
    if (carry === 1) {
        binarySum = '1' + binarySum;
    }
    return binarySum;
}

/**
 * Creates a new string containing the original binary string padded with leading zeros
 * @param binaryString
 * @param lengthDifference
 * @return {*}
 */
function padNumberWithZeroes(binaryString, lengthDifference) {
    for (let i = 0; i < lengthDifference; i++) {
        binaryString = '0' + binaryString;
    }
    return binaryString;
}

// Tests:

console.assert(addBinary('11', '1') === '100');
console.assert(addBinary('1010', '1011') === '10101');
console.assert(addBinary('10101', '110000') === '1000101');

