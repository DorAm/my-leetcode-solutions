/**
 * Problem: Given an array of strings, group anagrams together.
 * Approach: All strings that are anagrams of each other will produce the same letter count. Generate a letter count
 * for each string and use it to group the strings that are anagrams of one another.
 *
 * Complexity: O(N * M)
 * N = stringArray.length
 * M = the maximum length of a string in stringArray
 *
 * @param stringArray
 * @returns {[][]}
 */
function groupAnagrams(stringArray) {
    const anagramsMap = {};
    for (let string of stringArray) {
        const letterCount = createLetterCountFromString(string);
        if (anagramsMap.hasOwnProperty(letterCount)) {
            anagramsMap[letterCount].push(string);
        } else {
            anagramsMap[letterCount] = [string];
        }
    }
    let anagramGroups = [];
    for (let key in anagramsMap) {
        anagramGroups.push(anagramsMap[key]);
    }
    return anagramGroups;
}

/**
 * Creates an array representing the letter count in the given string
 * @param string
 * @returns {number[]}
 * @example 'abbccccz' will return [1, 2, 4, 0, 0, ... , 1]
 */
function createLetterCountFromString(string) {
    const LETTERS_IN_THE_ALPHABET = 26;
    let letterMap = new Array(LETTERS_IN_THE_ALPHABET);
    for (let i = 0; i < LETTERS_IN_THE_ALPHABET; i++) {
        letterMap[i] = 0;
    }
    for (let letter of string) {
        letterMap[letter.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }
    return letterMap;
}

// Tests
console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));
