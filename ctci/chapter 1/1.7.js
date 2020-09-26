/**
 * Given an image represented by an NxN matrix, where each pixel in the image
 * is 4 bytes, write a method to rotate the image by 90 degrees. Can you do this in place?
 * 
 * Input: array of arrays
 * Output: array of arrays
 * Edge cases: empty pixels?, arrays of differing lengths?
 * 
 * Input -> Expected output
 * [[1, 2, 3], -> 7 4 1
 * [4, 5, 6], -> 8 5 2
 * [7, 8, 9]] -> 9 6 3
 */
function rotateMatrix(matrix) {
    const rotation = [];
    for (let i = 0; i < matrix.length; i++) {
        const row = matrix[i];
        for (let j = 0; j < row.length; j++) {
            const colValue = row[j];
            const colIndex = row.length - i - 1;
            const rowIndex = row.length - j - 1;
            if (!rotation[rowIndex]) rotation[rowIndex] = [];
            rotation[rowIndex][colIndex] = colValue;
        }
    }

    return rotation;
}

//rotation = [], i = 0, row = ["a", "a", "a", "a"]
// j = 0, colValue = "a", colIndex = 3, rowIndex = 3
//rotation[3] = []
//rotation = ['', '', '', []]
//rotation[3][3] = "a"
//rotation = ['', '', '', ['', '', '', "a"]]


console.log(
    // rotateMatrix([["a", "a", "a", "a"],
    // ["b", "b", "b", "b"],
    // ["c", "c", "c", "c"],
    // ["d", "d", "d", "d"]]),
    // "\n",
    rotateMatrix([[1, 2, 3], 
                  [4, 5, 6], 
                  [7, 8, 9]])
);