/**
 * Write a method to replace all spaces in a string with '%20'. You may assume that the string
 * has a sufficient space at the end to hold the additional characters, and that you are given
 * the 'true' length of the string
 * 
 * Inputs: string, number
 * Ouputs: string
 * Constraints: optimize
 * Edge Cases: 
 * 
 */

function URLify(word, length = word.length) {
    let output = "";
    // first pass: count number of actual characters, 
    // this will help determine the true number of spaces
    let chars = 0;
    word.split('').map(char => {
        if (char !== " ") {
            chars++;
        }
    });
    let spaces = length - chars;

    // second pass: if a space is found, and there are spaces left, replace with '%20'
    // otherwise return the original letter. If we're out of available spaces to replace
    // replace with the empty string
    for (let i = 0; i < word.length; i++) {
        const c = word[i];
        if (c === ' ' && spaces > 0) {
            output += "%20";
            spaces--;
        } else if (c !== ' ') {
            output += c;
        }
    }

    // If length is still not reached, and there are remaining spaces
    while (spaces > 0) {
        output += "%20";
        spaces--;
    }

    return output;
}

console.log(
    URLify("Mr John Smith  ", 13) === "Mr%20John%20Smith",
    URLify("Mr John Smith ", 14) === "Mr%20John%20Smith%20",
    URLify("   hi", 7) === "%20%20%20hi%20%20",
    URLify("    hi ", 3) === "%20hi",
    URLify('', 0) === '',
    URLify('', 2) === "%20%20",
    URLify("hel lo", 5) === "hello"
);

