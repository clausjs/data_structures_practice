/**
 * Implement a method to perform basic string compression using the counts of repeated characters. For example,
 * the string aabcccccaaa would become a2b1c5a3. If the "compressed" string would not become shorter then the original
 * then return the original. You can assume the string has only uppercase and lowercase letters (a-z)
 * 
 * Input: string
 * Output: string
 * Edge cases: empty strings, strings who's compressed version are longer then the original
 */
function compressString(word) {
    let newWord = "";

    let currentLetter = "";
    let currentLetterCount = 1;
    for (let i = 0; i < word.length; i++) {
        if (currentLetter === word[i]) {
            currentLetterCount++;
        } else {
            if (currentLetter !== "") newWord += `${currentLetter}${currentLetterCount}`;
            currentLetter = word[i];
            currentLetterCount = 1;
        }
    }
    // This took me longer then it should have to figure out
    newWord += `${currentLetter}${currentLetterCount}`;

    if (newWord.length > word.length) return word;
    else return newWord;
}

console.log(
    compressString("aabcccccaaa") === "a2b1c5a3",
    compressString("abcde") === "abcde",
    compressString("aabbccc") === "a2b2c3"
)