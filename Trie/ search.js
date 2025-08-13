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
               node = node.children[char];
          }
          node.endOfWord = true;
     }
     search(word) {
          let node = this.root;

          for (let char of word) {
               if (!node.children[char]) return false;
               node = node.children[char];
          }
          return node.endOfWord === true;
     }
}

let trie = new Trie();
trie.insert("cat");

console.log(trie.search("cat")); // true
console.log(trie.search("ca"));  // false
console.log(trie.search("dog"));  // false