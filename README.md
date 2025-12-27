# Data Structures and Algorithms

## Sorting Order Definitions

### Sorted Increasing Order

`[2, 4, 8, 12]` where `a[i+1] > a[i]`

### Sorted Decreasing Order

`[12, 9, 8, 7, 5]` where `a[i+1] < a[i]`

### Sorted Non-Decreasing Order

`[1, 2, 3, 3, 3, 4, 4, 5, 8, 9]` - Can have duplicates  
Non-decreasing means duplicates are allowed in increasing order where `a[i+1] >= a[i]`

> **Note:** If you find "in-place" in a question, you shouldn't create a new array. Instead, you have to change the existing array.

---

## Problem 1: Remove Duplicates from Sorted Array

**Input:** `[0, 0, 1, 1, 1, 2, 2, 2, 2, 3, 4, 4, 4]`

### Approach: Two Pointer Technique

- **Pointer 1 (x):** Find all unique elements by traversing through the array
- **Pointer 2 (i):** Maintain where the elements are to be placed

### Solution:

```javascript
function removeDuplicates(arr) {
  let x = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[x]) {
      x = x + 1;
      arr[x] = arr[i];
    }
  }
  return x + 1; // Returns the number of unique elements
}

removeDuplicates([1, 2, 2, 3, 4, 4]);
```

---

## Problem 2: Remove Elements

### Example 1:

**Input:** `nums = [3, 2, 2, 3]`, `val = 3`  
**Output:** `2, nums = [2, 2, ...]`

### Example 2:

**Input:** `nums = [0, 1, 2, 2, 3, 0, 4, 2]`, `val = 2`  
**Output:** `5, nums = [0, 1, 3, 0, 4, ...]`

### Approach: Two Pointer Technique

### Solution:

```javascript
var removeElement = function (nums, val) {
  let x = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != val) {
      nums[x] = nums[i];
      x = x + 1;
    }
  }
  return x;
};
```

---

## Problem 3: Reverse String

### Example:

**Input:** `['I', 'n', 'd', 'u', 'm', 'a', 't', 'h', 'i']`  
**Output:** `['i', 'h', 't', 'a', 'm', 'u', 'd', 'n', 'I']`

### Formula:

Swap elements: `swap(0, n-1)`, `swap(1, n-2)`, ..., `swap(i, n-1-i)`

### Solution:

```javascript
var reverseString = function (s) {
  const lengthOfS = s.length;
  const halfOfS = Math.floor(lengthOfS / 2);
  for (let i = 0; i < halfOfS; i++) {
    const temp = s[i];
    s[i] = s[lengthOfS - 1 - i];
    s[lengthOfS - 1 - i] = temp;
  }
};
```

---

## Problem 4: Best Time to Buy and Sell Stock

**Problem:** `prices[i]` is the price of a given stock on the `i-th` day.

**Example:** `prices = [7, 1, 5, 3, 6, 4]`  
**Indices:** `[0, 1, 2, 3, 4, 5]`

### Brute Force Approach:

Try to find all possible ways to buy and sell, then check the maximum profit. However, this is inefficient with a time complexity of **O(n²)**.

### Optimal Solution:

Track the minimum price seen so far and calculate the maximum profit possible.

**Time Complexity:** O(n)

```javascript
var maxProfit = function (prices) {
  let min = prices[0];
  let max = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < min) {
      min = prices[i];
    }
    const temp = prices[i] - min;
    if (temp > max) {
      max = temp;
    }
  }
  return max;
};
```

---

## Problem 5: Merge Sorted Arrays

**Problem:** Merge two sorted arrays `nums1` and `nums2` into `nums1` in-place.

**Example:**  
**Input:** `nums1 = [1, 2, 3, 0, 0, 0]`, `m = 3`, `nums2 = [2, 5, 6]`, `n = 3`  
**Output:** `nums1 = [1, 2, 2, 3, 5, 6]`

### Brute Force Approach:

Copy the values of `nums2` to `nums1` and then sort the array.

```javascript
// nums1 = [1, 2, 3, 0, 0, 0]
// nums2 = [2, 5, 6]
// After copying: nums1 = [1, 2, 3, 2, 5, 6]
// After sorting: nums1 = [1, 2, 2, 3, 5, 6]
nums1 = nums1.sort();
```

**Time Complexity:** O((m+n) log(m+n))

### Optimized Solution (Using Extra Space):

Take a copy of `nums1` and use two pointers to compare and merge.

**Time Complexity:** O(m + n)  
**Space Complexity:** O(m) - Creating a copy of array

```javascript
var merge = function (nums1, m, nums2, n) {
  const copyNum1 = nums1.splice(0, m);
  let p1 = 0;
  let p2 = 0;
  for (let i = 0; i < m + n; i++) {
    if (p2 >= n || (p1 < m && copyNum1[p1] < nums2[p2])) {
      nums1[i] = copyNum1[p1];
      p1++;
    } else {
      nums1[i] = nums2[p2];
      p2++;
    }
  }
};
```

### Optimal Solution (In-Place):

Fill the data from backwards to front, avoiding extra space.

**Time Complexity:** O(m + n)  
**Space Complexity:** O(1)

```javascript
var merge = function (nums1, m, nums2, n) {
  let p1 = m - 1;
  let p2 = n - 1;

  for (let i = m + n - 1; i >= 0; i--) {
    if (p2 < 0) break;
    if (p1 >= 0 && nums1[p1] > nums2[p2]) {
      nums1[i] = nums1[p1];
      p1--;
    } else {
      nums1[i] = nums2[p2];
      p2--;
    }
  }
};
```
