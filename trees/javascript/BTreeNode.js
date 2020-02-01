module.exports = class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
    getVal() {
        return this.val;
    }
    getLeftChild() {
        return this.left;
    }
    getRightChild() {
        return this.right;
    }
    setLeftChild(node) {
        this.left = node;
    }
    setRightChild(node) {
        this.right = node;
    }
    isLeafNode() {
        return this.right === null && this.left === null;
    }
    hasOneChild() {
        return (this.left !== null && this.right === null) || (this.right !== null && this.left === null);
    }
    hasOnlyLeftChild() {
        return this.left !== null && this.right === null;
    }
    hasOnlyRightChild() {
        return this.right !== null && this.left === null;
    }
    hasBothChildren() {
        return (this.left !== null && this.right !== null);
    }
}