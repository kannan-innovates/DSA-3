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

    longestCommonPrefix() {
        let prefix = "";
        let node = this.root;

        while (Object.keys(node.children).length === 1 && !node.endOfWord) {
            let char = Object.keys(node.children)[0]; // the only child
            prefix += char;
            node = node.children[char];
        }
        return prefix;
    }
}

// Example
let trie = new Trie();
let words = ["flower", "flow", "flight"];

for (let word of words) {
    trie.insert(word);
}

console.log(trie.longestCommonPrefix()); // "fl"