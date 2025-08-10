class MinHeap {
     constructor() {
          this.heap = [];
     }
     insert(value) {
          this.heap.push(value);
          this.heapifyUp();
     }
     heapifyUp() {
          let index = this.heap.length - 1;

          while (index > 0) {
               let parentIndex = Math.floor((index - 1) / 2);

               if (this.heap[index] < this.heap[parentIndex]) {

                    [this.heap[index], this.heap[parentIndex]] =
                         [this.heap[parentIndex], this.heap[index]];

                    index = parentIndex;

               } else {
                    break;
               }
          }
     }

     delete() {

          if (this.heap.length === 0) return null;
          if (this.heap.length === 1) return this.heap.pop();

          let min = this.heap[0];

          this.heap[0] = this.heap.pop();
          this.heapifyDown();

          return min;
     }
     heapifyDown() {
          let index = 0;
          let length = this.heap.length;
          let smallest = index;

          while (true) {

               let left = (2 * index) + 1;
               let right = (2 * index) + 2;

               if (left < length && this.heap[left] < this.heap[smallest]) {
                    smallest = left;
               }

               if (right < length && this.heap[right] < this.heap[smallest]) {
                    smallest = right;
               }

               if (smallest !== index) {

                    [this.heap[index], this.heap[smallest]] =
                         [this.heap[smallest], this.heap[index]];

                    index = smallest;

               } else {
                    break;
               }
          }

     }
}
const minHeap = new MinHeap();
minHeap.insert(10);
minHeap.insert(20);
minHeap.insert(5);
minHeap.insert(30);

console.log("Before Deletion:",minHeap.heap);
console.log("Deleted:",minHeap.delete());
console.log("After Deletion:",minHeap.heap);