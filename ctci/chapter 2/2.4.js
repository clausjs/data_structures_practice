/**
 * Write code to partition a linked list around a value x, such that all nodes less than x come before
 * all nodes greater than or equal to x. If x is contained within the list, the values of x only need to
 * be after the elements less than x. The partition element x can appear anywhere in the "right partition", it
 * does not need to appear between the left and right partitions.
 * 
 * EXAMPLE:
 * Input: 3 -> 5 -> 8 -> 5 -> 10 -> 2 -> 1 [partition = 5]
 * Output: 3 -> 1-> 2 -> 10 -> 5 -> 5-> 8
 * 
 * Input: Singly linked list, integer partition value
 * Output: Singly linked list
 * Edge cases: List is all partition values, empty list
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
    insertAtBeginning(val) {
        const newNode = new Node(val);
        if (this.head === null) {
            this.head = newNode;
        } else {
            newNode.next = this.head.next;
            this.head = newNode;
        }
    }
    insertAtEnd(val) {
        this.add(val);
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

function partitionList(node, partitionValue, newList) {
    if (!newList) {
        newList = new LinkedList();    
    }

    let head = node;

    if (newList.head !== null && head.data < partitionValue) {
        newList.insertAtBeginning(head.data, head.next ? head.next.data : head.data);
    } else {
        newList.insertAtEnd(head.data);
    }

    if (head.next !== null) {
        return partitionList(head.next, partitionValue, newList);
    }

    return newList;
}

const exampleList = new LinkedList();
exampleList.add(3);
exampleList.add(5);
exampleList.add(8);
exampleList.add(5);
exampleList.add(10);
exampleList.add(2);
exampleList.add(1);

const partitionedExample = partitionList(exampleList.head, 5);

console.log(
    [...exampleList.values()],
    [...partitionedExample.values()]
);