function convertMaxToMin(heap) {
     let n = heap.length;

     for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
          minHeapify(heap, n, i)
     }
}

function minHeapify(heap, n, i) {
     let left = 2 * i + 1;
     let right = 2 * i + 2;
     let smallest = i;

     if (left < n && heap[left] < heap[smallest]) {
          smallest = left;
     }
     if (right < n && heap[right] < heap[smallest]) {
          smallest = right;
     }
     if (smallest !== i) {
          [heap[i], heap[smallest]] = [heap[smallest], heap[i]];
          minHeapify(heap, n, smallest);
     }
}
// Example
let maxHeapArr = [60, 50, 40, 30, 20, 35, 25, 10];
console.log("Max Heap:", maxHeapArr);

convertMaxToMin(maxHeapArr);
console.log("Converted to Min Heap:", maxHeapArr);