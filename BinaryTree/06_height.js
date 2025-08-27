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
     findHeight(node = this.root) {
          if (!node) return -1;

          let leftHeight = this.findHeight(node.left);
          let rightHeight = this.findHeight(node.right);

          return Math.max(leftHeight, rightHeight) + 1
     }
     isBalanced(node = this.root) {
          if (!node) return true;  // empty tree is balanced

          let leftHeight = this.findHeight(node.left);
          let rightHeight = this.findHeight(node.right);

          let diff = Math.abs(leftHeight - rightHeight);

          if (diff > 1) return false;

          // check recursively for left and right subtrees
          return this.isBalanced(node.left) && this.isBalanced(node.right);
     }
}

let tree = new BT();

tree.insert("A");
tree.insert("B");
tree.insert("C");
tree.insert("D");

console.log(tree.findHeight())


console.log(tree.isBalanced());