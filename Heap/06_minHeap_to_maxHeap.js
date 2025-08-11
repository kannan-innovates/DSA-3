function convertMinToMax(heap) {
     let n = heap.length;

     for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
          maxHeapify(heap, n, i)
     }
}

function maxHeapify(heap, n, i) {
     let left = (2 * i) + 1;
     let right = (2 * i) + 2;
     let largest = i;

     if (left < n && heap[left] > heap[largest]) {
          largest = left;
     }
     if (right < n && heap[right] > heap[largest]) {
          largest = right;
     }
     if (largest !== i) {
          [heap[i], heap[largest]] = [heap[largest], heap[i]]
          maxHeapify(heap, n, largest)
     }
}

let minHeapArr = [10, 20, 25, 30, 60, 35, 40, 50]
convertMinToMax(minHeapArr);
console.log("Back to Max Heap:", minHeapArr);