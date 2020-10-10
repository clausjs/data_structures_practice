/**
 * Given two (singly) linked lists, determine if the two lists intersect. Return the intersecting node.
 * Note that the intersection is defined on a reference, not value. That is, if the kth node of the first
 * linked list is the exact same node (by reference) as the jth node of the second linked list,
 * then they are intersecting
 * 
 * Input: Lists
 * Output: boolean
 * Edge cases: Matching values, but not references?
 */

class LinkedListNode {
    constructor(val) {
        this.val = val || 0;
        this.next = null;
    }
}

function isIntersection(n1, n2) {
    let n1Ref = n1, n2Ref = n2;

    while (n1Ref !== null) {
        if (n2 == n1Ref) {
            return true;
        }

        n1Ref = n1Ref.next;
    }

    while (n2Ref !== null) {
        if (n1 == n2Ref) {
            return true;
        }

        n2Ref = n2Ref.next;
    }

    return false;
}

// Time complexity: 
// Space complexity:

const list1 = new LinkedListNode(1);
list1.next = new LinkedListNode(2);
list1.next.next = new LinkedListNode(3);
const secondNodeRef = list1.next;

const list2 = new LinkedListNode(10);
list2.next = new LinkedListNode(9);
list2.next.next = new LinkedListNode(8);
list2.next.next.next = new LinkedListNode(7);

console.log(
    isIntersection(list1, secondNodeRef) === true,
    isIntersection(list1, list2) === false
);