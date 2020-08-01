const Node = require('./LinkedListNode');

module.exports = class LinkedList {
    constructor() {
        this.head = null
    }
    indexIsPositiveInteger(index) {
        return index >= 0;
    }
    get(index) {
        if (!this.indexIsPositiveInteger(index)) {
            return undefined;
        }

        let iterator = 0;
        let current = this.head;
        while (current !== null && iterator < index) {
            current = current.next;
            iterator++;
        }

        return current === null ? undefined : current.data;
    }
    add(value) {
        let headVal = this.head;
        const newNode = new Node(value);

        if (this.head === null) {
            this.head = newNode;
        } else {
            while (headVal.next !== null) {
                headVal = headVal.next;
            }
    
            headVal.next = newNode;
        }
    }
    remove(index) {
        if (!this.indexIsPositiveInteger(index)) {
            throw new RangeError("Index must be a positive number");
        }

        let tempData = undefined;

        if (index === 0) {
            if (this.head.next !== null) {
                tempData = this.head.data;
                this.head = this.head.next;
                return tempData;
            }
        }

        let iterator = 0;
        let current = this.head;
        while (current !== null && iterator < index - 1) {
            current = this.head.next;
            iterator++;
        }

        if (current !== null) {
            if (current.next !== null && current.next.next !== null) {
                tempData = current.next.data;
                current.next = current.next.next;
                return tempData;
            }
        }

        throw new Error("The index is outside the bounds of the list")
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