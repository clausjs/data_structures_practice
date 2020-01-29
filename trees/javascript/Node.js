module.exports = class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }

    getVal() {
        return this.val;
    }

    getLeft() {
        return this.left;
    }

    getRight() {
        return this.right;
    }
}