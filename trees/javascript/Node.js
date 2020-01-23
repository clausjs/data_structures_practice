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

    insertLeft(node) {
        if (this.left) {
            node.left = this.left;
            this.left = node;
        } else {
            this.left = node;
        }
    }

    getRight() {
        return this.right;
    }

    insertRight(node) {
        if (this.right) {
            node.right = this.right;
            this.right = node;
        } else {
            this.right = node;
        }
    }
}