const Trie = require('./Trie');

var trie = new Trie();
trie.add('one');
trie.add('two');
trie.add('fifth');
trie.add('fifty');
trie.print(); // => | o t f | n w i | e o f | t | h y
trie.printByLevel(); // => o t f \n n w i \n e o f \n t \n h y
console.log('words are: one, two, fifth, fifty:', trie.getWords()); // => [ 'one', 'two', 'fifth', 'fifty' ]
console.log('trie count words is 4:', trie.countWords()); // => 4
console.log('trie contains one is true:', trie.contains('one')); // => true
console.log('trie contains on is false:', trie.contains('on')); // => false
trie.remove('one');
console.log('trie contains one is false:', trie.contains('one')); // => false
console.log('trie count words is 3:', trie.countWords()); // => 3
console.log('words are two, fifth, fifty:', trie.getWords()); // => [ 'two', 'fifth', 'fifty' ]