/**
 * Problem: Given a roman numeral, convert it to an integer. Input is guaranteed to be within the range from 1 to 3999.
 * Approach: Create a map of the roman symbols and use it to calculate the integer's value
 *
 * Complexity:
 * Time Complexity: O(N) where N is the length of the input
 * Space Complexity: O(1) a constant number of key-value pairs are used
 *
 * @param string
 * @returns {number}
 */

const ROMAN_SYMBOL_MAP = Object.freeze({
    'I': { value: 1, prevSymbol: null },
    'V': { value: 5, prevSymbol: 'I' },
    'X': { value: 10, prevSymbol: 'I' },
    'L': { value: 50, prevSymbol: 'X' },
    'C': { value: 100, prevSymbol: 'X' },
    'D': { value: 500, prevSymbol: 'C' },
    'M': { value: 1000, prevSymbol: 'C' },
});

function romanToInt(string) {
    let integerValue = 0;
    let previousCharacter = '';
    for (let character of string) {
        if (previousCharacter === ROMAN_SYMBOL_MAP[character].prevSymbol) {
            // If we reached here, it means that in the previous iteration, we unnecessarily added the value of
            // the previous character. Therefore we subtract it twice (the second is because a leading smaller symbol)
            integerValue += ROMAN_SYMBOL_MAP[character].value - ROMAN_SYMBOL_MAP[previousCharacter].value * 2
        } else {
            integerValue += ROMAN_SYMBOL_MAP[character].value;
        }
        previousCharacter = character;
    }
    return integerValue;
}

// Tests:

console.assert(romanToInt('III') === 3);
console.assert(romanToInt('CXVII') === 117);
console.assert(romanToInt('DXCI') === 591);
console.assert(romanToInt('CMXCIV') === 994);
