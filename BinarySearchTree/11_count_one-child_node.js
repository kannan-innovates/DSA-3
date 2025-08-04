class Node {
     constructor(value) {
          this.value = value;
          this.left = null;
          this.right = null;
     }
}
class BST {
     constructor() {
          this.root = null;
     }
     insert(value) {
          let newNode = new Node(value);

          if (!this.root) {
               this.root = newNode;
               return;
          }

          let current = this.root;

          while (true) {
               if (value === current.value) return;

               if (value <= current.value) {
                    if (current.left === null) {
                         current.left = newNode;
                         return;
                    }
                    current = current.left;
               } else {
                    if (current.right === null) {
                         current.right = newNode;
                         return;
                    }
                    current = current.right;
               }
          }
     }
     countOneChildNodes(node = this.root) {

          if (!node) return 0;

          let count = 0;

          if ((node.left && !node.right) || (!node.left && node.right)) {
               count = 1;
          }
          return count +
               this.countOneChildNodes(node.left) +
               this.countOneChildNodes(node.right);
     }
}
const tree = new BST();
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(2);
tree.insert(7);
tree.insert(12);

console.log("Nodes with exactly one child:", tree.countOneChildNodes());