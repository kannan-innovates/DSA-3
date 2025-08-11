function heapSort(arr) {
     let n = arr.length;

     for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
          maxHeapify(arr, n, i)
     }
     for (let end = n - 1; end >= 0; end--) {
          [arr[0], arr[end]] = [arr[end], arr[0]];
          maxHeapify(arr, end, 0);
     }
}

function maxHeapify(arr, n, i) {
    let largest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;

    if (left < n && arr[left] > arr[largest]) {
        largest = left;
    }

    if (right < n && arr[right] > arr[largest]) {
        largest = right;
    }

    if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]];
        maxHeapify(arr, n, largest);
    }
}

// Example
let nums = [50, 30, 40, 10, 20, 35, 25, 60];
console.log("Before Heap Sort:", nums);
heapSort(nums);
console.log("After Heap Sort:", nums);