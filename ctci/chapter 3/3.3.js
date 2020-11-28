/**
 * Imagine a (literal) stack of plates. If the stack gets too high, it might topple.
 * Therefore, in real life, we would likely start a new stack when the previous stack
 * exceeds some threshold. Implement a data structure 'SetOfStacks' that mimics this.
 * SetOfStacks should be composed of several stacks and should create a new stack once 
 * the previous stack exceeds capacity. SetOfStacks.push() and SetOfStacks.pop() should
 * behave identically to a single stack (that is pop() should return the same values as
 * it would if there were just a single stack)
 * 
 * Output: Class
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
        this.size = 0;
    }
    push(val) {
        if (this.head === null) {
            this.head = new StackNode(val);
        } else {
            this.head = new StackNode(val, this.head);
        }
        this.size++;
    }
    pop() {
        if (this.head === null) {
            throw new Error("Stack is empty");
        }

        this.head = new StackNode(this.head.next.data, this.head.next);
        this.size--;
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
    isFull() {
        return this.size === 10;
    }
}

class StackOfStacks {
    constructor() {
        this.stacks = [];
        this.currentStack = null;
    }
    push(val) {
        const headVal = this.currentStack.head;

        if (this.currentStack === null) {
            this.currentStack = new Stack()
            this.currentStack.push(val);
        } else {
            while (headVal.next !== null) {
                headVal = headVal.next;
            }

            if (!this.currentStack.isFull()) {
                headVal.next = new StackNode(val);
            } else {
                this.stacks.push(this.currentStack);
                this.currentStack = new Stack();
                this.currentStack.push(val);
            }
        }
    }
    pop() {
        this.currentStack.pop();

        if (this.currentStack.size === 0) {
            this.stacks.splice(this.stacks.length - 1, 1);
        }
    }
}