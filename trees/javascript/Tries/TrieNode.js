module.exports = class Trie {
    constructor(data) {
        this.data = data;
        this.isWord = false;
        this.prefixes = 0;
        this.children = {};
    }
}