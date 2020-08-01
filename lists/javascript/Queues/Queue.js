module.exports = class Queue {
    constructor(size) {
        this.queue = [];
        this.maxLength = size;
    }
    enqueue(value) {
        if (this.queue.length + 1 <= this.maxLength) {
            this.queue.splice(0, 0, value);
            return true;
        }

        return false;
    }
    dequeue() {
        return this.queue.pop();
    }
    peek() {
        return this.queue[0];
    }
    isEmpty() {
        return this.queue.length === 0;
    }
    isFull() {
        return this.queue.length === this.maxLength;
    }
    getSize() {
        return this.queue.length;
    }
}