const Queue = require('./Queue');

const queue = new Queue(10);
console.log(queue.isEmpty()); //expect true
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
console.log(queue.isFull()); //expect false
queue.enqueue(5);
queue.enqueue(6);
queue.enqueue(7);
console.log(queue.dequeue()); //expect 1
queue.enqueue(8);
queue.enqueue(9);
queue.enqueue(10);
console.log(queue.isFull()) //expect false
queue.enqueue(11);
console.log(queue.isFull()); //expect true
console.log(queue.enqueue(12)); //expect false
console.log(queue.peek()); //expect 11