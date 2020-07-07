/**
 * Problem:
 * Given a string, find the length of the longest substring T that contains at most k distinct characters.
 *
 * Approach:
 * Sliding Window + Map
 *
 * Complexity:
 * Time: O(Nk)
 * Space: O(N) where N = s.length
 *
 * @param s
 * @param k
 * @return {number}
 */
function lengthOfLongestSubstringKDistinct(s, k) {
    if (k === 0 || s.length === 0) {
        return 0;
    }
    let left = 0;
    let right = 0;
    let charMap = {};
    let distinctCharactersInCharMap = 0;
    let longestSubstring = 1;
    while (right < s.length) {
        let leftCharacter = s[left];
        let rightCharacter = s[right];

        // adding the right char to the char map
        if (charMap.hasOwnProperty(rightCharacter)) {
            charMap[rightCharacter]++;
        } else {
            charMap[rightCharacter] = 1;
            distinctCharactersInCharMap++;
        }
        right++;

        // checking if limit exceeded
        if (distinctCharactersInCharMap > k) {
            if (charMap[leftCharacter] === 1) {
                delete charMap[leftCharacter];
                distinctCharactersInCharMap--;
            } else {
                charMap[leftCharacter]--;
            }
            left++;
        }
        longestSubstring = Math.max(longestSubstring, right - left);
    }
    return longestSubstring;
}

console.assert(lengthOfLongestSubstringKDistinct('abbabaca', 2) === 6);
console.assert(lengthOfLongestSubstringKDistinct('eceba', 2) === 3);
console.assert(lengthOfLongestSubstringKDistinct('aa', 1) === 2);
