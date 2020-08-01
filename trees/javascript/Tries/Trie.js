const TrieNode = require('./TrieNode');

module.exports = class Trie {
    constructor() {
        this.root = new TrieNode('');
    }
    add(word) {
        if (!this.root) {
            return null;
        }

        this._addNode(this.root, word);
    }
    _addNode(node, word) {
        if (!node || !word) {
            return;
        }

        node.prefixes++;
        const letter = word.charAt(0);
        let child = node.children[letter];

        if (!child) {
            child = new TrieNode(letter);
            node.children[letter] = child;
        }

        const remainder = word.substring(1);
        if (!remainder) {
            child.isWord = true;
        }
        this._addNode(child, remainder);
    }
    remove(word) {
        if (!this.root) {
            return null;
        }

        if (this.contains(word)) {
            this._removeNode(this.root, word);
        }
    }
    _removeNode(node, word) {
        if (!node || !word) {
            return;
        }

        node.prefixes--;
        const letter = word.charAt(0);
        const child = node.children[letter];

        if (child) {
            const remainder = word.substring(1);
            if (remainder) {
                if (child.prefixes === 1) {
                    delete node.children[letter];
                } else {
                    this._removeNode(child, remainder);
                }
            } else {
                if (child.prefixes === 0) {
                    delete node.children[letter];
                } else {
                    child.isWord = false;
                }
            }
        }
    }
    contains(word) {
        if (!this.root) { 
            return false;
        }

        return this._contains(this.root, word);
    }
    _contains(node, word) {
        if (!node || !word) {
            return false;
        }

        const letter = word.charAt(0);
        const child = node.children[letter];

        if (child) {
            const remainder = word.substring(1);
            if (!remainder && child.isWord) {
                return true;
            } else {
                return this._contains(child, remainder);
            }
        } else return false;
    }
    countWords() {
        if (!this.root) {
            return console.error("No root found");
        }

        const queue = [this.root];
        let counter = 0;
        while (queue.length) {
            const node = queue.shift();
            if (node.isWord) {
                counter++;
            }
            for (var child in node.children) {
                if (node.children.hasOwnProperty(child)) {
                    queue.push(node.children[child]);
                }
            }
        }

        return counter;
    }
    getWords() {
        const words = [];
        let word = '';
        this._getWords(this.root, words, words, word);
        return words;
    }
    _getWords(node, words, word) {
        for (var child in node.children) {
            if (node.children.hasOwnProperty(child)) {
                word += child;
                if (node.children[child].isWord) {
                    words.push(word);
                }
                this._getWords(node.children[child], words, word);
                word = word.substring(0, word.length - 1);
            }
        }
    }
    print() {
        if (!this.root) {
            return console.error("No root found");
        }

        const newLine = new TrieNode('\n');
        const queue = [this.root, newLine];
        let string = "";
        while (queue.length) {
            const node = queue.shift();
            string += node.data.toString() + (node.data !== '\n' ? ' ' : '');
            if (node === newLine && queue.length) {
                queue.push(newLine);
            }

            for (var child in node.children) {
                if (node.children.hasOwnProperty(child)) {
                    queue.push(node.children[child]);
                }
            }
        }
        console.log(string.trim());
    }
    printByLevel() {
        if (!this.root) {
            return console.error("No root found");
        }

        const newline = new TrieNode('\n');
        const queue = [this.root, newline];
        let string = "";
        while (queue.length) {
            const node = queue.shift();
            string += node.data.toString() + (node.data !== '\n' ? ' ' : '');
            if (node === newline && queue.length) {
                queue.push(newline);
            }
            for (var child in node.children) {
                if (node.children.hasOwnProperty(child)) {
                    queue.push(node.children[child]);
                }
            }
        }

        console.log(string.trim());
    }
}