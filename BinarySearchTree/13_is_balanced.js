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
     getHeight(node) {
          if (!node) return -1;
          return 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));
     }
     isBalanced(node = this.root) {
          if (node === null) return true;

          const leftHeight = this.getHeight(node.left);
          const rightHeight = this.getHeight(node.right);

          const diff = Math.abs(leftHeight - rightHeight);

          if (diff > 1) return false;

          return this.isBalanced(node.left) && this.isBalanced(node.right);
     }
}

const tree = new BST();
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(2);
tree.insert(7);
tree.insert(12);

console.log(tree.isBalanced())