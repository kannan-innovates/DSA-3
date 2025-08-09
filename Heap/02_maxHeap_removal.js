class MaxHeap {
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

               if (this.heap[index] > this.heap[parentIndex]) {

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

          const max = this.heap[0];
          this.heap[0] = this.heap.pop();
          this.heapifyDown();

          return max;
     }

     heapifyDown() {
          let index = 0;
          const length = this.heap.length;

          while (true) {

               let left = (2 * index) + 1;
               let right = (2 * index) + 2;

               let largest = index;

               if (left < length && this.heap[left] > this.heap[largest]) {
                    largest = left;
               }

               if (right < length && this.heap[right] > this.heap[largest]) {
                    largest = right;
               }

               if (largest !== index) {
                    [this.heap[index], this.heap[largest]] =

                         [this.heap[largest], this.heap[index]];

                    index = largest;
               } else {
                    break;
               }
          }
     }

}
let maxHeap = new MaxHeap();
[50, 30, 40, 10, 20, 35, 25, 60].forEach(num => maxHeap.insert(num));

console.log("Before remove:", maxHeap.heap);
console.log("Removed:", maxHeap.delete());
console.log("After remove:", maxHeap.heap);