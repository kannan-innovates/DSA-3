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

     levelOrder() {
          let queue = [];
          let result = [];

          if (this.root) {
               queue.push(this.root);
          }

          while (queue.length > 0) {
               let current = queue.shift();
               result.push(current.value);

               if (current.left) {
                    queue.push(current.left);
               }
               if (current.right) {
                    queue.push(current.right);
               }
          }
          return result;
     }
}

const tree = new BST();
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(12);

console.log("Level Order",tree.levelOrder())