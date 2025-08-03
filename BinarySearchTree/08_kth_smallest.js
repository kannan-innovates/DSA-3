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

               if (value < current.value) {
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

     kthSmallest(k) {
          let count = 0;
          let result = null;

          function inOrder(node) {
               if (!node || result !== null) return;

               inOrder(node.left);
               count++;

               if (count === k) {
                    result = node.value;
                    return;
               }
               inOrder(node.right);
          }
          inOrder(this.root);
          return result;
     }
}

const tree = new BST();
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(2);
tree.insert(7);
tree.insert(12);
tree.insert(20);

console.log("2nd Smallest:", tree.kthSmallest(2)); 