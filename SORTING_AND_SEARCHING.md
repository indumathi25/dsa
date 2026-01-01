# Searching and Sorting

## Linear Search

Linear search checks each element in the array sequentially until the target is found or the end is reached.

**Example:**  
`arr = [1, 5, 7, 0, 4, 2]`, `target = 4`

**Time Complexity:** O(n)  
**Space Complexity:** O(1)

```javascript
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

console.log(linearSearch([1, 5, 7, 0, 4, 2], 4)); // Output: 4
```

---

## Binary Search

Binary search is an efficient algorithm that works **only on sorted arrays**. It repeatedly divides the search space in half.

**Example:**  
`arr = [-1, 0, 3, 5, 9, 10]`, `target = 9`

### Algorithm Steps:

1. Find the middle element: `middle = Math.floor((leftIndex + rightIndex) / 2)`
2. If `arr[middle] === target`, return the index
3. If `target < arr[middle]`, search the left half: `rightIndex = middle - 1`
4. If `target > arr[middle]`, search the right half: `leftIndex = middle + 1`
5. If `rightIndex < leftIndex`, the element is not in the array, return `-1`

**Time Complexity:** O(log n)  
**Space Complexity:** O(1)

### Solution:

```javascript
var binarySearch = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (right >= left) {
    let middle = Math.floor((right + left) / 2);

    if (target === nums[middle]) {
      return middle;
    } else if (target < nums[middle]) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }

  return -1;
};

console.log(binarySearch([-1, 0, 3, 5, 9, 10], 9)); // Output: 4
console.log(binarySearch([-1, 0, 3, 5, 9, 10], 2)); // Output: -1
```

### Visual Example:

```
Array: [-1, 0, 3, 5, 9, 10]  target = 9
Index:   0  1  2  3  4   5

Step 1: left = 0, right = 5, middle = 2
        arr[2] = 3, 3 < 9, search right half

Step 2: left = 3, right = 5, middle = 4
        arr[4] = 9, found! return 4
```

---

## Bubble Sort

Bubble sort repeatedly swaps adjacent elements if they are in the wrong order. After each outer iteration, the largest remaining element “bubbles” to the end.

- 1st pass checks up to `n-1`
- 2nd pass checks up to `n-2`
- 3rd pass checks up to `n-3`

### Basic Implementation

```javascript
let arr = [5, 4, 9, 1, 0];

function bubbleSort(arr) {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

console.log(bubbleSort(arr)); // Output: [0, 1, 4, 5, 9]
```

**Time Complexity:** O(n^2) (comparisons and swaps)  
**Space Complexity:** O(1)  
**Note:** Even if the array is already sorted, this version still makes all comparisons.

### Optimized Implementation (Early Exit)

If no swaps occur during an inner pass, the array is already sorted, so we can stop early.

```javascript
let arr2 = [5, 4, 9, 1, 0];

function bubbleSortOptimized(arr) {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let isSwapped = false;
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        isSwapped = true;
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
    if (!isSwapped) break; // Early exit if no swaps
  }
  return arr;
}

console.log(bubbleSortOptimized(arr2)); // Output: [0, 1, 4, 5, 9]
```

**Time Complexity:** Worst/average O(n^2); Best case O(n) when already sorted (early exit)  
**Space Complexity:** O(1)
