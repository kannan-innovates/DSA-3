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

     isValidateBST(node = this.root, min = -Infinity, max = Infinity) {

          if (node === null) return true;

          if (node.value <= min || node.value >= max) return false;

          return this.isValidateBST(node.left, min, node.value) &&
               this.isValidateBST(node.right, node.value, max);
     }
}

const tree = new BST();
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(12);
tree.insert(20);

console.log(tree.isValidateBST()); //  true


tree.root.right.left = new Node(8); // Invalid: 8 is not > 10
console.log(tree.isValidateBST()); // ❌ false