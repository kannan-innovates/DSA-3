class TrieNode {
     constructor() {
          this.children = {};
          this.endOfWord = false;
     }
}
class Trie {
     constructor() {
          this.root = new TrieNode();
     }
     insert(word) {
          let node = this.root;

          for (let char of word) {
               if (!node.children[char]) {
                    node.children[char] = new TrieNode();
               }
               node = node.children[char]
          }
          node.endOfWord = true;
     }
     prefixSearch(prefix) {
          let node = this.root;
          for (let char of prefix) {
               if (!node.children[char]) return false;
               node = node.children[char];
          }
          return true;
     }
}
let trie = new Trie();
trie.insert("cat");
trie.insert("car");


console.log(trie.prefixSearch("ca")); // true
console.log(trie.prefixSearch("dog")); // false
console.log(trie.prefixSearch("cat")); // true (even though it's a full word)