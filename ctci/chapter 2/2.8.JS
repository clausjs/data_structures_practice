/**
 * Given a circular linked list, implement an algorithm that returns the node at the
 * beginning of the loop.
 * DEFINITION
 * Ciricular linked list: A (corrupt) linked list in which a node's next pointer points to an earlier
 * node, so as to make a loop in the linked list
 * 
 * Input: LinkedListNode
 * Output: LinkedListNode
 * Edge cases: entire list/repeated entries?
 */

class LinkedListNode {
    constructor(val, next) {
        this.data = val || 0;
        this.next = next || null;
    } 
}

function detectLoop(n1) {
    let slow = n1;
    let fast = n1;

    /* Find the meeting point. This will be LOOP_SIZE - k steps into the linked list */
    while (fast !== null && slow !== null) {
        slow = n1.next;
        fast = n1.next.next;
        if (slow == fast) { //Collision
            break;
        }
    }

    /* Error check - no meeting point, and therefore no loop */
    if (fast === null || fast.next === null) {
        return null;
    }

    /* Move slow to Head. Keep fast at the Meeting Point. Each are k steps from the loop start
     * If they move at the same pace, they must meet at Loop Start. */
    slow = n1;
    while (slow != fast) {
        slow = slow.next;
        fast = fast.next;
    }

    /* Both now point to the start of the loop */
    return fast;
}