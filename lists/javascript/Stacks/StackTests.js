const Stack = require('./Stack');

const stack = new Stack(10);
console.log(stack.isEmpty()); // expect true
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.isEmpty()) //expect false
stack.push(4);
stack.push(5);
stack.push(6);
stack.push(7);
console.log(stack.pop()); //expect 7
stack.push(8);
console.log(stack.top()) //expect 8
stack.push(9);
stack.push(10);
stack.push(11);
console.log(stack.isFull()); //expect true
console.log(stack.push(12)); //expect false
