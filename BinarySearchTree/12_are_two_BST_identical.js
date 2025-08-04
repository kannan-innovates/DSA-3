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

               if (value <= current.value) {
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
}

function areIdenticalTrees(node1, node2) {
     if (!node1 && !node2) return true;

     if (!node1 || !node2) return false;

     if (node1.value !== node2.value) return false;

     return areIdenticalTrees(node1.left, node2.left) &&
          areIdenticalTrees(node1.right, node2.right);
}

const tree1 = new BST();
tree1.insert(10);
tree1.insert(5);
tree1.insert(15);

const tree2 = new BST();
tree2.insert(10);
tree2.insert(5);
tree2.insert(15);

console.log("Are trees identical?", areIdenticalTrees(tree1.root, tree2.root)); // ✅ true

tree2.root.right.value = 20;

console.log("Are trees identical after modification?", areIdenticalTrees(tree1.root, tree2.root)); // ❌ false