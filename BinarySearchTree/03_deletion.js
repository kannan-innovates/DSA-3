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

     delete(value) {
          this.root = deleteNode(this.root, value);

          function deleteNode(node, value) {
               if (!node) return null;

               if (value < node.value) {
                    node.left = deleteNode(node.left, value);

               } else if (value > node.value) {
                    node.right = deleteNode(node.right, value);
               } else {

                    if (!node.left && !node.right) return null;

                    if (!node.left) return node.right;

                    if (!node.right) return node.left;


                    let minRight = findMin(node.right);
                    node.value = minRight.value;

                    node.right = deleteNode(node.right, minRight.value)

               }
               return node;
          }
          function findMin(node) {
               while (node.left) {
                    node = node.left;
               }
               return node;
          }
     }
     inOrder(){
          const result = [];

          function traverse(node){
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
tree.insert(12);

tree.delete(15);

console.log(tree.inOrder())