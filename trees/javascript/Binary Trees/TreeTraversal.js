function printPreorderTraversal(node) {
    if (node) {
        console.log(node.getVal());
        printPreorderTraversal(node.getLeft());
        printPreorderTraversal(node.getRight());
    }
}

function printInorderTraversal(node) {
    if (node) {
        printInorderTraversal(node.getLeft());
        console.log(node.getVal());
        printInorderTraversal(node.getRight());
    }
}

function printPostorderTraversal(node) {
    if (node) {
        printPostorderTraversal(node.getLeft());
        printPostorderTraversal(node.getRight());
        console.log(node.getVal());
    }
}

module.exports = {
    printPreorderTraversal,
    printInorderTraversal,
    printPostorderTraversal
};