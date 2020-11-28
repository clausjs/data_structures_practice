/**
 * How would you design a stack which, in addition to push and pop, has a function min which
 * returns the minimum element? Push, pop, and min should all operate in O(1) time.
 * 
 */

class StackNode {
    constructor(val, next) {
        this.data = val || 0;
        this.next = next || null;
    }
}

class Stack {
    constructor() {
        this.head = null;
        this.min = null;
    }
    push(val) {
        const newNode = new StackNode(val);

        if (this.head === null) {
            this.head = newNode;
            this.min = this.head;
            return;
        }

        newNode.next = this.head.next;
        this.head = newNode;

        if (val < this.min.data) {
            this.min = this.head;
        }
    }
    pop() {
        if (this.head === null) {
            throw new Error("Stack is empty");
            return;
        }

        const tempNode = new StackNode(this.head.next.data, this.head.next);
        this.head = tempNode;
    }
    peek() {
        if (this.head === null) {
            throw new Error("Stack is empty");
            return;
        }

        return this.head;
    }
    min() {
        if (this.head === null) {
            throw new Error("Stack is empty");
            return;
        }
        return this.min;
    }
    isEmpty() {
        return this.head === null;
    }
}