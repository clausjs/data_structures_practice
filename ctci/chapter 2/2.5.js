/**
 * You have two numbers represented by a linked list, where each node contains a single
 * digit. The digits are stored in _reverse_ order, such that the 1's digit is at the head of the list
 * Write a function that adds these two numbers and returns the sum as a linked list
 * 
 * Input: 2 linked lists
 * Output: 1 linked list
 * Edge cases: empty lists?
 * 
 * Had to get help on this one
 */

class Node {
    constructor(val) {
        this.data = val;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }
    add(val) {
        let headVal = this.head;
        const newNode = new Node(val);

        if (headVal === null) {
            this.head = newNode;
        } else {
            while (headVal.next !== null) {
                headVal = headVal.next;
            }

            headVal.next = newNode;
        }
    }
    *values(){
        
        let current = this.head;

        while (current !== null) {
            yield current.data;
            current = current.next;
        }
    }

    [Symbol.iterator]() {
        return this.values();
    }  
}

function getListsSum(node1, node2, carry = 0) {
    if (node1 === null && node2 === null && carry === 0) {
        return null;
    }

    const result = new Node();
    let value = carry;

    if (node1) {
        value += node1.data;
    }

    if (node2) {
        value += node2.data;
    }

    result.data = value % 10;

    if (node1 !== null || node2 !== null) {
        const more = getListsSum(node1 === null ? null : node1.next,
                                 node2 === null ? null : node2.next,
                                 value > 10 ? 1 : 0);

        result.next = more;
    }

    return result;
}

const list1 = new LinkedList();
list1.add(7);
list1.add(1);
list1.add(6);

const list2 = new LinkedList();
list2.add(5);
list2.add(9);
list2.add(2);

console.log(
    getListsSum(list1.head, list2.head)
);