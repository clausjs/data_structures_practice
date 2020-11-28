/**
 * An animal shelter, which holds only dogs and cats, operates on a strictly "first in, first out"
 * basis. People must adopt either the "oldest" (based on arrival time) of all animals at the shelter,
 * or they can select whether they would prefer a dog or a cat (and will recieve the oldest animal of that type).
 * They cannot select which specific animal they would like. Create the data structures to maintain the system and
 * implement operations such as enqueue, dequeueAny, dequeueDog, and dequeueCat. You may use the built in LinkedList data structure.
 * 
 * Input: animal type (optional)
 * Output: dog/cat
 */

class LinkedListNode {
    constructor(val, next) {
        this.data = val || 0;
        this.next = next || null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }
    indexIsPositiveInteger(index) {
        return index >= 0;
    }
    get(index) {
        if (!this.indexIsPositiveInteger(index)) {
            throw new Error("Index must be a positive integer");
        }

        let headVal = this.head;
        let count = 0;

        while (headVal.next !== null && count < index) {
            headVal = headVal.next;
            count++;
        }

        return headVal === null ? undefined : headVal.data;
    }
    add(val) {
        const newNode = new LinkedListNode(val);
        if (this.head === null) {
            this.head = newNode;
            return;
        }
        let headVal = this.head;

        while (headVal.next !== null) {
            headVal = headVal.next;
        }

        headVal.next = newNode;
        this.length++;
    }
    remove(index) {
        if (!this.indexIsPositiveInteger) {
            throw new Error("Index must be a positive integer");
        }

        if (this.head === null) {
            throw new Error("List is empty");
        }

        let tempData;

        if (index === 0) {
            tempData = this.head;
            if (this.head.next !== null) {
                this.head = this.head.next;
            } else {
                this.head = null;
            }
            this.length--;
            return tempData;
        } else {
            let count = 1;
            let headVal = this.head;

            while (headVal.next !== null && count !== index) {
                headVal = headVal.next;
                count++;
            }

            if (headVal !== null) {
                if (headVal.next !== null && headVal.next.next !== null) {
                    tempData = headVal.next.data;
                    headVal = headVal.next.next;
                    this.length--;
                    return tempData;
                }
            }

            throw new Error("Index is out of bounds");
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

class Animal {
    constructor(type, name, info) {
        this.type = type;
        this.name = name;
        this.info = info;
    }
    isDog() {
        return this.type === "dog";
    }
    isCat() {
        return this.type === "cat";
    }
}

class AnimalShelter {
    constructor() {
        this.cats = new LinkedList();
        this.dogs = new LinkedList();
        this.animals = new LinkedList();
    }
    addAnimal(animal) {
        this.animals.add(animal);

        if (animal.isDog()) {
            this.dogs.add(animal);
        } else if (animal.isCat()) {
            this.cats.add(animal);
        }
    }
    dequeueAny() {
        const animal = this.animals.remove(this.animals.length - 1);

        let iterator = 0;
        if (animal.isDog()) {
            let dog = this.dogs.get(iterator);
            while (dog !== undefined && dog.name !== animal.name) {
                iterator++;
                dog = this.dogs.get(iterator);
            }
            if (dog === undefined) throw new Error("Dog not found in dogs list");
            else this.dogs.remove(iterator-1);
        } else if (animal.isCat()) {
            let cat = this.cats.get(iterator);
            while (cat !== undefined && cat.name !== animal.name) {
                iterator++;
                cat = this.cats.get(iterator-1);
            }
            if (cat === undefined) throw new Error("Cat not found in cats list");
            else this.cats.remove(iterator-1);
        }
    }
    dequeueDog() {
        const dog = this.dogs.remove(this.dogs.length - 1);

        let iterator = 0;
        let animal = this.animals.get(iterator);
        while (animal !== undefined && animal.name !== dog.name) {
            iterator++;
            animal = this.animals.get(iterator);
        }
        if (animal === undefined) throw new Error("Dog not found in animal list");
        else this.animals.remove(iterator-1);
    }
    dequeueCat() {
        const cat = this.cats.remove(this.cats.length - 1);

        let iterator = 0;
        let animal = this.animals.get(iterator);
        while (animal !== undefined && animal.name !== cat.name) {
            iterator++;
            animal = this.animals.get(iterator);
        }
        if (animal === undefined) throw new Error("Cat not found in animal list");
        else this.animals.remove(iterator-1);
    }
}