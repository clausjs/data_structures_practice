const MinHeap = require('./MinHeap');
const MaxHeap = require('./MaxHeap');

const minHeap = new MinHeap();
minHeap.insert(10);
minHeap.insert(20);
minHeap.insert(4);
console.log(minHeap.getMin()) //expect 4
minHeap.insert(100);
minHeap.insert(45);
console.log(minHeap.getMin()) //expect 4
minHeap.insert(1);
console.log(minHeap.getMin()) //expect 1
console.log(minHeap.remove()) //expect 1
console.log(minHeap.remove()) //expect 4
console.log(minHeap.remove()) //expect 10

console.log("-------------------------------------");

const maxHeap = new MaxHeap();
maxHeap.insert(1);
maxHeap.insert(10);
maxHeap.insert(20);
maxHeap.insert(100);
console.log(maxHeap.remove()) //expect 100
maxHeap.insert(45);
console.log(maxHeap.getMax()) //expect 45
maxHeap.insert(100);
console.log(maxHeap.getMax()) //expect 100
console.log(maxHeap.remove()) // expect 100
maxHeap.insert(55);
console.log(maxHeap.remove()) //expect 55