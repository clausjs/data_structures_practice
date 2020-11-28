/**
 * Implement an algorithm to delete a node in the middle (i.e. any node but the first and last node, not necessarily the exact middle)
 * of a singly linked list, given only access to that node
 * 
 * Input: Node
 * Output: Linked List
 * Edge Cases: empty list, even lists with no middle
 */
function deleteNode(node) {
    if (node.data === null || node.next === null) {
        return new Error("Cannot remove first or last node");
    }

    // If this is somewhere in the middle, simply set the next value equal to the next next value,
    // and same for next
    node.data = node.next.data;
    node.next = node.next;
    return true;
}
