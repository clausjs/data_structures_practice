/**
 * Given a string, write a function to check if it is a permutation of a palindrome.
 * A palindrome is a word or phrase that is the same forwards as it is backwards. A permutation
 * is a rearrangement of letters. The palindrome does not need to be limited to just dictionary words.
 * 
 * Inputs: strings
 * Output: boolean
 * Edge Cases: empty strings
 */
function buildCharacterCounts(word) {
    const hash = {};
    let expectsOddCharacter = false;
    if (word.length % 2 > 0) {
        expectsOddCharacter = true;
    }

    for (let i = 0; i < word.length; i++) {
        const c = word[i].toLowerCase();
        if (c === " ") continue;
        if (hash[c]) {
            hash[c]++;
        } else {
            hash[c] = 1;
        }
    }

    return hash;
}

function isValidPalindrome(hash) {
    let isValid = false;
    let totalLetterCount = 0;
    let totalOddNumbers = 0;
    Object.keys(hash).map(letter => {
        totalLetterCount += hash[letter];
        if (hash[letter] % 2 !== 0) totalOddNumbers++;
    });

    isValid = totalLetterCount % 2 !== 0 ? totalOddNumbers === 1 : totalOddNumbers === 0;

    return isValid;
}

function isPermutationOfPalindrome(word) {
    const hash = buildCharacterCounts(word);
    return isValidPalindrome(hash)
}

console.log(
    isPermutationOfPalindrome("Tact Coa") === true,
    isPermutationOfPalindrome("stuff") === false,
    isPermutationOfPalindrome("nono") === true,
    isPermutationOfPalindrome("killswitch") === false,
    isPermutationOfPalindrome("care rac") === true
);