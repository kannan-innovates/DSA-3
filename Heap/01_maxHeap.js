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
}

let maxHeap = new MaxHeap();
maxHeap.insert(50);
maxHeap.insert(30);
maxHeap.insert(40);
maxHeap.insert(10);
maxHeap.insert(20);
maxHeap.insert(35);
maxHeap.insert(25);
maxHeap.insert(60);

console.log(maxHeap.heap); 