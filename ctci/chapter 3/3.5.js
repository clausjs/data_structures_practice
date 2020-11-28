/**
 * Write a program to sort a stack such that the smallest items are on the top. You can use an
 * additional temporary stack, but you may not copy the elements into any other data structure
 * (such as an array). The stack supports the following operations: push, pop, peek, and isEmpty
 * 
 * Input: stack
 * Output: sorted stack
 * Edge cases: empty stack, stacks with repeating values
 */
const Stack = require('./Stack');

function sortStack(stack) {
    const newStack = new Stack();

    while (!stack.isEmpty()) {
        const tmp = stack.pop();
        while (!newStack.isEmpty() && newStack.peek() > tmp) {
            stack.push(newStack.pop());
        }
        newStack.push(tmp);
    }

    while (!newStack.isEmpty()) {
        stack.push(newStack.pop());
    }
}

