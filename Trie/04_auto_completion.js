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

    // Helper to collect words from a node
    collectWords(node, prefix, words) {
        if (node.endOfWord) {
            words.push(prefix);
        }
        for (let char in node.children) {
            this.collectWords(node.children[char], prefix + char, words);
        }
    }

    // Autocomplete function
    autocomplete(prefix) {
        let node = this.root;
        
        // Step 1: Navigate to the end of the prefix
        for (let char of prefix) {
            if (!node.children[char]) {
                return []; // No suggestions
            }
            node = node.children[char];
        }
        
        // Step 2: Collect all possible words from here
        let suggestions = [];
        this.collectWords(node, prefix, suggestions);
        return suggestions;
    }
}

let trie = new Trie();
trie.insert("cat");
trie.insert("car");
trie.insert("cart");
trie.insert("dog");
trie.insert("dove");

console.log(trie.autocomplete("ca")); // ["cat", "car", "cart"]
console.log(trie.autocomplete("do")); // ["dog", "dove"]
console.log(trie.autocomplete("z"));  // []