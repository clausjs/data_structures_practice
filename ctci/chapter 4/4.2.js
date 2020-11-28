/**
 * Given a sorted (increasing order) array with unique integer elements, write an algorithm to create a binary search tree with minimal height.
 * 
 * Input: array
 * Output: tree
 * Edge cases: uneven array
 */
class Node {
    constructor(val) {
        this.val = val || 0;
    }
}

class BinaryTreeNode extends Node {
    constructor(val, left, right) {
        super(val);
        this.left = left || null;
        this.right = right || null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }
    searchTree(node, val) {
        const newTreeNode = new BinaryTreeNode(val);

        if (val < node.val) {
            const left_child = node.left;
            if (left_child !== null) {
                this.searchTree(left_child, val);
            } else {
                node.left = newTreeNode;
                return;
            }
        } else if (val > node.val) {
            const right_child = node.right;
            if (right_child !== null) {
                this.searchTree(right_child, val);
            } else {
                node.right = newTreeNode;
            }
        } else return null;
    }
    add(val) {
        const newTreeNode = new BinaryTreeNode(val);

        if (this.head === null) {
            this.root = newTreeNode;
            return;
        }

        this.searchTree(this.root, val);
    }
}

function moveListToTree(list) {
    const middle_index = Math.floor(list.length / 2);
    const Tree = new BinaryTree();
    Tree.add(list[middle_index]);
    list.splice(middle_index, 1);

    list.map(val => {
        Tree.add(val);
    });
}