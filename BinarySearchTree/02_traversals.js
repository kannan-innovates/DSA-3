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
     inOrder() {
          let result = [];
          function traverse(node) {
               if (!node) return;

               traverse(node.left);
               result.push(node.value);
               traverse(node.right);
          }
          traverse(this.root)
          return result;
     }
     preOrder() {
          let result = [];
          function traverse(node) {
               if (!node) return;

               result.push(node.value);
               traverse(node.left);
               traverse(node.right);
          }
          traverse(this.root);
          return result;
     }

     postOrder() {
          let result = [];
          function traverse(node) {
               if (!node) return;

               traverse(node.left);
               traverse(node.right);
               result.push(node.value);
          }
          traverse(this.root);
          return result;
     }
}

const tree = new BST();
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(12);

console.log("InOrder:", tree.inOrder());     
console.log("PreOrder:", tree.preOrder());  
console.log("PostOrder:", tree.postOrder()); 