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
}
const minHeap = new MinHeap();
minHeap.insert(10);
minHeap.insert(20);
minHeap.insert(5);
minHeap.insert(30);

console.log(minHeap.heap);