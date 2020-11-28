/**
 * Write code to remove duplicates from an unsorted linked list
 * How would you solve this problem if a temporary buffer is not allowed?
 * 
 * Input: linked list
 * Output: linked list
 * Edge cases: null pointer, empty lists?
 */

class Node {
    constructor(val) {
        this.data = val;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }
    add(val) {
        let headVal = this.head;
        const newNode = new Node(val);

        if (this.head === null) {
            this.head = newNode;
        } else {
            while (headVal.next !== null) {
                headVal = headVal.next;
            }

            headVal.next = newNode;
        }
    }
    removeDupes() {
        const values = [];
        let headVal = this.head;
        let prevNode = null;
        
        if (headVal !== null) {

            while (headVal.next !== null) {
                prevNode = headVal;
                headVal = headVal.next;

                if (values.includes(headVal.data)) {
                    prevNode.next = headVal.next;
                } else {
                    values.push(headVal.data);
                }
            }

            if (values.includes(this.head.data)) {
                this.head = this.head.next;
            }

            if (values.includes(headVal.data)) {
                headVal = null;
            }
        }
    }
    *values(){
        
        let current = this.head;

        while (current !== null) {
            yield current.data;
            current = current.next;
        }
    }

    [Symbol.iterator]() {
        return this.values();
    }  
}

// time complexity of removeDupes: O(n)
// space complexity of removeDupes: O(n)(?)

const noDupes = new LinkedList();
for (let i = 0; i < 10; i++) {
    noDupes.add(i);
}
console.log("No dupes before removal of dupes: ", [...noDupes.values()]);
noDupes.removeDupes();

const oneDupe = new LinkedList();
oneDupe.add(1);
oneDupe.add(2);
oneDupe.add(2);
oneDupe.add(3);
oneDupe.add(4);
console.log("oneDupe before removal of dupes: ", [...oneDupe.values()]);
oneDupe.removeDupes();

const longListNoDupes = new LinkedList();
for (let i = 0; i < 100; i++) {
    longListNoDupes.add(i);
}
longListNoDupes.removeDupes();

const longListWithDupes = new LinkedList();
for (let i = 0; i < 90; i++) {
    longListWithDupes.add(i);
}
longListWithDupes.add(50);
longListWithDupes.add(0);
longListWithDupes.add(49);
longListWithDupes.removeDupes();

console.log(
    [...noDupes.values()], 
    [...oneDupe.values()], 
    [...longListNoDupes.values()], 
    [...longListWithDupes.values()]
);


