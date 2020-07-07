/**
 * Problem:
 * Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.
 *
 * Approach:
 * Two pointers iterating to the middle, while skipping non alphanumeric characters
 *
 * Complexity:
 * Time: O(N) where N = s.length;
 * Space: O(N) creating a new lowercase string (This algorithm could be improved to use O(1) space)
 *
 * @param s
 * @return {boolean}
 */

function isPalindrome(s) {
    s = s.toLowerCase();
    let start = 0;
    let end = s.length - 1;
    while (start <= end) {
        if (!isLowerAlphaNumeric(s[start])) {
            start++;
        } else if (!isLowerAlphaNumeric(s[end])) {
            end--;
        } else if (s[start] !== s[end]) {
            return false;
        } else {
            start++;
            end--;
        }
    }
    return true;
}

function isLowerAlphaNumeric(character) {
    let charCode = character.charCodeAt(0);
    return ('a'.charCodeAt(0) <= charCode && charCode <= 'z'.charCodeAt(0)) ||
        ('0'.charCodeAt(0) <= charCode && charCode <= '9'.charCodeAt(0));
}

isPalindrome('race;ca r');
isPalindrome('race a car');
isPalindrome('A man, a plan, a canal: Panama');
