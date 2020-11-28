/**
 * Given two strings, write a method to decide if one is a permutation of the other.
 * 
 * Input: string
 * Output: boolean
 * Constraints: optimize
 * Edge Cases: empty string for 1 or 2, diff lengths
 * 
 * time complexity:
 * space complexity:
 */
function isPermutation(w1, w2) {
    // if strings are different lengths,
    // they are definitely not permutations
    if (w1.length !== w2.length) return false;

    // first pass: get character counts
    const hash = {};
    for (let i = 0; i < w1.length; i++) {
        const c = w1[i];
        if (hash[c]) {
            hash[c]++;
        } else {
            hash[c] = 1;
        }
    }

    // second pass: iterate through the second string and subtract from hash
    // if any character counts become negative, this is not a permutation
    for (let i = 0; i < w2.length; i++) {
        const c = w2[i];
        if (hash[c] && hash[c] > 0) {
            hash[c]--;
        } else {
            return false;
        }
    }

    return true;
}

console.log(
    isPermutation('', '') === true,
    isPermutation('so', 'os') === true,
    isPermutation('sos', 'os') === false,
    isPermutation('abc', 'abz') === false,
    isPermutation('restful', 'fluster') === true,
    isPermutation('baab', 'bbba') === false
);