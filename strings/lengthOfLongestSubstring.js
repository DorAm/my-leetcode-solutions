/**
 * Problem: Given a string, find the length of the longest substring without repeating characters.
 * Approach: Sliding Window
 * @param string
 * @returns {number}
 */

function lengthOfLongestSubstring(string) {
    const letterSet = new Set();
    let windowStart = 0;
    let windowEnd = 0;
    let maxSubstringLength = 0;
    while (windowStart < string.length && windowEnd < string.length) {
        if (!letterSet.has(string[windowEnd])) {
            letterSet.add(string[windowEnd]);
            windowEnd++;
            maxSubstringLength = Math.max(maxSubstringLength, windowEnd - windowStart);
        } else {
            letterSet.delete(string[windowStart]);
            windowStart++;
        }
    }
    return maxSubstringLength;
}

// Tests

console.assert(lengthOfLongestSubstring('bbbbbb') === 1);
console.assert(lengthOfLongestSubstring('abcabcbb') === 3);
console.assert(lengthOfLongestSubstring('thisishowwedo') === 5);
console.assert(lengthOfLongestSubstring('pwwkew') === 3);
