module.exports = class Node {
    constructor(val, next) {
        this.data = val || 0;
        this.next = next || null;
    }
}