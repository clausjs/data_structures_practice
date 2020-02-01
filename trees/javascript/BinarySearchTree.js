const Node = require('./BTreeNode.js');

module.exports = class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    /**
     * 
     * @param {*} node 
     * @param {*} val
     * @private 
     */
    searchTree(node, val) {
        if (val < node.getVal()) {
            const left_child = node.getLeftChild();
            if (left_child !== null) {
                return this.searchTree(left_child, val);
            } else {
                node.setLeftChild(new Node(val));
                return;
            }
        } else if (val > node.getVal()) {
            const right_child = node.getRightChild();
            if (right_child !== null) {
                return this.searchTree(right_child, val);
            } else {
                node.setRightChild(new Node(val));
                return;
            }
        } else {
            return null;
        }
    }
    add(val) {
        let node = this.root;

        if (node !== null) {
            this.searchTree(node, val);
        } else {
            this.root = new Node(val);
        }
    }
    findMin() {
        let currentNode = this.root;

        while (currentNode !== null) {
            currentNode = currentNode.getLeftChild();
        }

        return currentNode;
    }
    findMax() {
        let currentNode = this.root;

        while (currentNode !== null) {
            currentNode = currentNode.getRightChild();
        }

        return currentNode;
    }
    find(val) {
        let currentNode = this.root;

        while (currentNode.getVal() !== val) {
            if (!currentNode) {
                return null;
            }
            
            if (val < currentNode.getVal()) {
                currentNode = currentNode.getLeftChild();
            } else if (val > currentNode.getVal()) {
                currentNode = currentNode.getRightChild();
            }
        }

        return currentNode;
    }
    isPresent(val) {
        if (this.find(val)) {
            return true;
        } else {
            return false;
        }
    }
    /**
     * @private
     */
    removeNode(node, val) {
        if (node === null) {
            return null;
        } else {
            if (val === node.getVal()) {
                if (node.hasNoChildred()) {
                    return null;
                } else if (node.hasOneChild()) {
                    return node.getLeftChild() || node.getRightChild();
                } else if (node.hasBothChildren()) {
                    let tempNode = node.getRightChild();
                    while (tempNode.getLeftChild() !== null) {
                        tempNode = tempNode.getLeftChild();
                    }

                    node.val = tempNode.getVal();
                    node.setRightChild(this.removeNode(node.getRightChild(), tempNode.getVal()));
                    return node;
                }
            } else if (val < node.getVal()) {
                node.setLeftChild(this.removeNode(node.getLeftChild(), val));
                return node;
            } else {
                node.setRightChild(this.removeNode(node.getRightChild(), val));
                return node;
            }
        }
    }
    remove(val) {
        this.root = removeNode(this.root, val);
    }
}