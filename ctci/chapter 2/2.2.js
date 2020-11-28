/**
 * Implement and algorithm to find the kth to last element of a singly linked list
 * 
 * Input: list
 * Output: any
 * Edge cases: empty list?
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

        if (this.head === null) {
            this.head = newNode;
        } else {
            while (headVal.next !== null) {
                headVal = headVal.next;
            }

            headVal.next = newNode;
        }
    }
    getListSize() {
        let size = 0;
        let headVal = this.head;

        while (headVal !== null) {
            size++;
            headVal = headVal.next;
        }

        return size;
    }
    getKthToLastElement(k) {
        const size = this.getListSize();
        const desiredIndex = size - k;
        let index = 0;
        let headVal = this.head;

        if (desiredIndex < 0) {
            throw new Error("Index out of bounds");
        }

        while (headVal.next !== null) {
            index++;
            if (index === desiredIndex) {
                return headVal;
            }
            headVal = headVal.next;
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
 
const longListNoDupes = new LinkedList();
for (let i = 0; i < 100; i++) {
    longListNoDupes.add(i);
}

console.log(longListNoDupes.getKthToLastElement(99));
console.log(longListNoDupes.getKthToLastElement(4));