const QueueNode = require('./Node');

module.exports = class Queue {
    constructor() {
        this.head = null;
    }
    add(val) {
        let headVal = this.head;
        const newNode = new QueueNode(val);

        if (headVal === null) {
            this.head = newNode;
        }

        while (headVal.next !== null) {
            headVal = headVal.next;
        }

        headVal.next = newNode;
    }
    remove() {
        if (this.head === null) {
            throw new Error("Queue is empty");
            return;
        }

        if (this.head.next) {
            this.head = this.head.next;
        }
    }
    peek() {
        return this.head;
    }
    isEmpty() {
        return this.head === null;
    }
}