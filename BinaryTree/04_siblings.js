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

     printSiblings(node = this.root) {
          if (!node) return;

          if (node.left && node.right) {
               console.log(`${node.left.value} <--> ${node.right.value}`);
          }

          this.printSiblings(node.left);
          this.printSiblings(node.right);
     }
}
let tree = new BT();

tree.insert("A");
tree.insert("B");
tree.insert("C");
tree.insert("D");
tree.insert("E");
tree.insert("F");

tree.printSiblings();