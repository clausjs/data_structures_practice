function reverseList(node) {
    const newList;
    while (node !== null) {
        if (newList === null) {
            newList = new LinkedListNode(node.data);
        } else {
            const temp = newList;
            newList = new LinkedListNode(node.data, temp);
        }
        node = node.next;
    }
    return newList;
}