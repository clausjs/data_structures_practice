/**
 * Implement an algorithm to determine if a string has all unique characters. 
 * What if you cannot use additional data structures?
 * 
 * Input: string
 * Output: boolean
 * Constraints: No additional data structures, optimize
 * Edge Cases: Empty string, wrong input type (JS)
 * 
 * time complexity: linear O(n)
 * space complexity: linear O(n)
 */

function isUnique(string) {
    //if type is not string, return
    if (typeof string !== "string") return false;

    const hash = {};

    for (let i = 0; i < string.length; i++) {
        let c = string[i];
        if (hash[c]) {
            return false;
        } else {
            hash[c] = true;
        }
    }

    return true;
}

console.log(
    isUnique('s') === true,
    isUnique('') === true,
    isUnique('ss') === false,
    isUnique('stories') === false,
    isUnique('rainbow') === true,
    isUnique('Aa') === true,
    isUnique('moon') === false
);