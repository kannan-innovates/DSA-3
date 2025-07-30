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
          const newNode = new Node(value);

          if (this.root === null) {
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

     contains(value) {
          let current = this.root;
          while (current !== null) {
               if (value === current.value) return true;

               if (value < current.value) {
                    current = current.left;
               } else {
                    current = current.right;
               }
          }
          return false;
     }

     inOrder() {
          const result = [];

          function traverse(node) {
               if (!node) return;

               traverse(node.left);
               result.push(node.value);
               traverse(node.right);
          }
          traverse(this.root);
          return result;
     }
}

const tree = new BST();
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(3);
tree.insert(7);
// tree.insert(12);
tree.insert(18);

console.log(tree.contains(7));
console.log(tree.contains(12));


console.log(tree.inOrder());