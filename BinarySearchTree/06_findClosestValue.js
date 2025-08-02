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
     findClosestValue(target) {
          let current = this.root;
          let closest = Infinity;

          while (current) {
               if (Math.abs(target - current.value) < Math.abs(target - closest)) {
                    closest = current.value;
               }
               if (target < current.value) {
                    current = current.left;
               } else if (target > current.value) {
                    current = current.right;
               } else {
                    break
               }
          }
          return closest;
     }
}
const tree = new BST();
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(2);
tree.insert(7);
tree.insert(22);

console.log(tree.findClosestValue(12));  // Output: 10
console.log(tree.findClosestValue(6));   // Output: 5
console.log(tree.findClosestValue(23));  // Output: 22