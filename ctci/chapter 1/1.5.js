/**
 * There are 3 types of edits that can be performed on strings: insert a character, remove a character,
 * or replace a character. Given two strings, write a function to check if they are one edit (or zero edits) away.
 * 
 * Inputs: string
 * Output: boolean
 * Edge Cases: empty strings
 */
function getLetterCounts(w) {
    const hash = {};
    for (let i = 0; i < w.length; i++) {
        const c = w[i];
        if (hash[c]) {
            hash[c]++;
        } else {
            hash[c] = 1;
        }
    }

    return hash;
}

function getHashDifferences(hash1, hash2) {
    const diffHash = {};
    for (let i = 0; i < Object.keys(hash1).length; i++) {
        const letter = Object.keys(hash1)[i];
        if (hash2[letter] && hash1[letter] !== hash2[letter]) {
            diffHash[letter] = Math.abs(hash1[letter] - hash2[letter]);
        } else if (!hash2[letter]) {
            diffHash[letter] = hash1[letter];
        }
    }

    for (let i = 0; i < Object.keys(hash2).length; i++) {
        const letter = Object.keys(hash2)[i];
        if (!hash1[letter]) {
            diffHash[letter] = hash2[letter];
        }
    }

    return diffHash;
}

function isOneEditAway(w1, w2) {
    const hash1 = getLetterCounts(w1);
    const hash2 = getLetterCounts(w2);

    const diffHash = getHashDifferences(hash1, hash2);
    console.log("diffHash", diffHash)

    let isOneEditAway = true;
    if (Object.keys(diffHash).length > 2) {
        isOneEditAway = false;
    } else if (Object.keys(diffHash).length === 2) {
        isOneEditAway = (Object.values(diffHash)[0] === 1 && Object.values(diffHash)[1] === 1);
    }

    for (let i = 0; i < Object.values(diffHash).length; i++) {
        const count = Object.values(diffHash)[i];

        if (count > 1) {
            isOneEditAway = false;
            break;
        }
    }

    return isOneEditAway;
}

console.log(
    isOneEditAway("pale", "ple") === true,
    isOneEditAway("pales", "pale") === true,
    isOneEditAway("pale", "bale") === true,
    isOneEditAway("pale", "bake") === false
);