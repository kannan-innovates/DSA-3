class Node {
     constructor(value) {
          this.value = value;
          this.left = null;
          this.right = null;
     }
}
class BT {
     constructor() {
          this.root = null;
     }
     insert(value) {
          let newNode = new Node(value);

          if (!this.root) {
               this.root = newNode;
               return;
          }

          let queue = [this.root];

          while (queue.length > 0) {
               let node = queue.shift();

               if (!node.left) {
                    node.left = newNode;
                    return;
               } else {
                    queue.push(node.left);
               }

               if (!node.right) {
                    node.right = newNode;
                    return;
               } else {
                    queue.push(node.right);
               }
          }
     }
     levelOrder() {
          if (!this.root) return;
          let queue = [this.root];
          let result = [];

          while (queue.length > 0) {
               let node = queue.shift();

               result.push(node.value);

               if (node.left) {
                    queue.push(node.left);
               }

               if (node.right) {
                    queue.push(node.right);
               }
          }
          return result.join(" ");
     }
}

let tree = new BT();

tree.insert("A");
tree.insert("B");
tree.insert("C");
tree.insert("D");

console.log(tree.levelOrder())