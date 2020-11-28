/**
 * Implement a MyQueue class which implements a queue using two stacks
 */

class Node {
    constructor(val, next) {
        this.data = val || 0;
        this.next = next || null;
    }
}

class Stack {
    constructor() {
        this.head = null;
    }
    push(val) {
        let headVal = this.head;

        if (headVal === null) {
            this.head = new Node(val);
        } else {
           const newNode = new Node(val, this.head.next);
           this.head = newNode;
        }
    }
    pop() {
        if (this.head === null) {
            throw new Error("Stack is empty");
        }

        const removed = this.head;
        this.head = new Node(this.head.next.data, this.head.next.next);

        return removed;
    }
    peek() {
        if (this.head === null) {
            throw new Error("Stack is empty");
        }

        return this.head.data;
    }
    isEmpty() {
        return this.head === null;
    }
}

class MyQueueWithStacks {
    constructor() {
        this.main = null;
        this.popped = null;
    }
    push(val) {
        let headVal = this.main;

        if (headVal === null) {
            this.main = new Node(val);
        } else {
            const newNode = new Node(val, this.main.next);
            this.main = newNode;
        }
    }
    pop() {
        let headVal = this.main;

        if (headVal === null) {
            throw new Error("Stack is empty")
        } else {
            let prevNode;
            while (headVal.next !== null) {
                prevNode = headVal;
                headVal = headVal.next;
            }

            if (this.popped === null) {
                this.popped = new Node(headVal.data);
            } else {
                let poppedNode = this.popped;
                while (poppedNode.next !== null) {
                    poppedNode = poppedNode.next;
                }


                poppedNode = new Node(headVal.data);
            }

            headVal = prevNode;

            if (headVal === null) {
                const tempStack = this.popped;
                this.popped = null;
                this.main = tempStack;
            }
        }
    }
}