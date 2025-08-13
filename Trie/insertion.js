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
     printAllWords(node = this.root, word = "") {
          if (node.endOfWord) {
               console.log(word);
          }

          for (let char in node.children) {
               this.printAllWords(node.children[char], word + char)
          }
     }
}

let trie = new Trie();
trie.insert("cat");
trie.insert("car");
trie.insert("dog");
trie.insert("door");

console.log("Words in trie:")
trie.printAllWords();