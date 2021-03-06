const StackNode = require('./Node');

module.exports = class Stack {
    constructor() {
        this.head = null;
    }
    emptyStackErr() {
        throw new Error("Stack is empty");
    }
    pop() {
        if (this.head === null) {
            return this.emptyStackErr();
        }

        const tempNode = this.head;
        this.head = new StackNode(this.head.next.data, this.head.next.next);
        return this.head;
    }
    push(val) {
        if (this.head === null) {
            this.head = new StackNode(val);
            return;
        }

        const tempNode = new StackNode(val, this.head);
        this.head = tempNode;
    }
    peek() {
        if (this.head === null) {
            return this.emptyStackErr();
        }

        return this.head.data;
    }
    isEmpty() {
        return this.head === null;
    }
}