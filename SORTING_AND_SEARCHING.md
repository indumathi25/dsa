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

---

## Selection Sort

Selection sort divides the array into a sorted and unsorted region. It repeatedly finds the minimum element from the unsorted region and moves it to the end of the sorted region.

### Algorithm:

1. Start with the first position
2. Find the minimum element in the remaining unsorted portion
3. Swap it with the current position
4. Move to the next position and repeat

```javascript
let arr = [5, 4, 9, 1, 0];

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (min !== i) {
      const temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }
  return arr;
}

console.log(selectionSort(arr)); // Output: [0, 1, 4, 5, 9]
```

**Time Complexity:** O(n^2) - Always makes n(n-1)/2 comparisons  
**Space Complexity:** O(1)

---

## Insertion Sort

Insertion sort builds a sorted portion by placing each new element into its correct position relative to the already sorted elements.

### Walkthrough

- Start with the second element as the current item to insert
- Compare the current element with items to its left and shift larger elements to the right
- Insert the current element into the first position that is smaller (or at the start)

Example trace with swaps:

```
Start: [7, 4, 3, 5, 1, 2]
Take 7 (current), compare against [4, 3, 5, 1, 2]
Take 4, compare 7 with 4 → swap → [4, 7, 3, 5, 1, 2]
Take 3, compare with 7 → swap, compare with 4 → swap → [3, 4, 7, 5, 1, 2]
Take 5, compare with 7 → swap → [3, 4, 5, 7, 1, 2]
Take 1, compare backwards and insert
```

```javascript
let arr = [5, 4, 9, 1, 0];

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let prev = i - 1;

    while (prev >= 0 && arr[prev] > current) {
      arr[prev + 1] = arr[prev];
      prev--;
    }

    arr[prev + 1] = current;
  }
  return arr;
}

console.log(insertionSort(arr));
```

**Time Complexity:** O(n^2) - quadratic comparisons/shifts in the average and worst case  
**Space Complexity:** O(1) - in-place

---

## Merge Sort (Divide & Conquer Algorithm)

Merge sort is a recursive algorithm that divides the array into smaller subarrays, sorts them, and then merges them back together in sorted order.

### How It Works

**Divide Phase:** Split the array recursively until each subarray has one element

**Conquer Phase:** Merge subarrays back together in sorted fashion

### Visual Example

```
Array: [8, 4, 5, 6, 9, 1, 3, 6]

Divide Phase:
         [8, 4, 5, 6]    [9, 1, 3, 6]
       [8, 4]   [5, 6]   [9, 1]  [3, 6]
    [8]  [4]  [5] [6]  [9] [1]  [3] [6]

Conquer Phase (merge in sorted fashion):
  [8]  [4]  [5] [6]  [9] [1]  [3] [6]
 [4, 8]     [5, 6]    [1, 9]    [3, 6]
   [4, 5, 6, 8]         [1, 3, 6, 9]
     [1, 3, 4, 5, 6, 6, 8, 9]
```

### Example: Merge Two Sorted Arrays

```javascript
let left = [1, 3, 5, 7];
let right = [2, 4, 6, 8];

function merge(left, right) {
  let result = [];
  let i = 0,
    j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i++]);
    } else {
      result.push(right[j++]);
    }
  }

  return [...result, ...left.slice(i), ...right.slice(j)];
}

console.log(merge(left, right)); // Output: [1, 2, 3, 4, 5, 6, 7, 8]
```

### Implementation: Merge Sort

```javascript
var sortArray = function (nums) {
  if (nums.length <= 1) return nums;

  const middle = Math.floor(nums.length / 2);
  const left = sortArray(nums.slice(0, middle));
  const right = sortArray(nums.slice(middle));

  return merge(left, right);
};
```

**Time Complexity:** O(n log n) - Efficient and good for large datasets  
**Space Complexity:** O(n) - Requires additional space for merging
