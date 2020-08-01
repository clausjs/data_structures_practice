module.exports = class Stack {
    constructor(size) {
        this.stack = [];
        this.maxLength = size;
    }
    push(value) {
        if (this.stack.length + 1 <= this.maxLength) {
            this.stack.push(value);
            return true;
        }

        return false;
    }
    pop() {
        return this.stack.pop();
    }
    top() {
        return this.stack.slice(this.stack.length - 1)[0];
    }
    isEmpty() {
        return this.stack.length === 0;
    }
    isFull() {
        return this.stack.length === this.maxLength;
    }
    getSize() {
        return this.stack.length;
    }
}