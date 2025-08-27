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
                    queue.push(node.left)
               }

               if (!node.right) {
                    node.right = newNode;
                    return;
               } else {
                    queue.push(node.right);
               }
          }
     }

     findDepth(node = this.root, value, depth = 0) {

          if (!node) return -1;

          if (node.value === value) {
               return depth;
          }
          let left = this.findDepth(node.left, value, depth + 1);
          if (left !== -1) return left;

          return this.findDepth(node.right, value, depth + 1)
     }

}
let tree = new BT();
tree.insert("A");
tree.insert("B");
tree.insert("C");
tree.insert("D");

console.log(tree.findDepth(tree.root, "A")); // 0
console.log(tree.findDepth(tree.root, "B")); // 1
console.log(tree.findDepth(tree.root, "C")); // 1
console.log(tree.findDepth(tree.root, "D")); // 2
console.log(tree.findDepth(tree.root, "X")); // -1 (not in tree)