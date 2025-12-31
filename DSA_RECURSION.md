# DSA - Recursion

Function that calls itself to solve smaller version of the same problem.

## 2 Parts of Recursion

1. **Base case** - Stop condition (when to stop calling itself)
2. **Recursive case** - Part where function calls itself

## Real Life Examples

1. **Queue of people:** If the person at the start wants to know how many people are there in the queue. Each person asks the next person how many people are after them till the end of the queue. The last person says "I have 0 people after me." Then the previous person tells "1 person after me," and so on. The end is the base case where the recursion stops.

2. **Comment Threads:** Reddit has nested replies, which is a form of recursion.

3. **Organisational Hierarchies:** Determining how many people are in the hierarchy.

---

## Example: Infinite Recursion (Avoid This)

```javascript
function fun(num) {
  console.log(num);
  num = num - 1;
  fun(num);
}

fun(5);
// Output: 5 4 3 2 1 0 -1 ... infinite loop (Stack Overflow)
```

**To avoid infinite loop, add a base condition:**

```javascript
if (num === 0) return; // Base case
```

---

## Print n to 1 using Recursion

```javascript
function print(n) {
  if (n < 1) return;
  console.log(n);
  print(n - 1);
}

print(5);
// Output: 5 4 3 2 1
```

---

## Print 1 to n using Recursion

```javascript
function print(n) {
  if (n < 1) return;
  print(n - 1);
  console.log(n);
}

print(5);
// Output: 1 2 3 4 5
```

---

## Common Mistakes

1. **Missing base case** - Stack overflow
2. **Not simplifying the input** - Never reaches base case
3. **Too deep recursion** - Large inputs cause performance issues
4. **Not considering time complexity** - O(n) or worse

---

## When to Use Recursion

1. Problem can be broken into sub-problems
2. Trees and Graphs
3. Backtracking, Divide and Conquer

---

## Sum of First n Numbers

```javascript
function sumFirstN(n) {
  if (n < 1) return 0;
  return n + sumFirstN(n - 1);
}

console.log(sumFirstN(5)); // Output: 15
```

---

## Sum of All Elements in an Array

```javascript
const arr = [1, 2, 3, 4, 5];

function sumArray(n) {
  if (n === 0) return arr[n];
  return arr[n] + sumArray(n - 1);
}

console.log(sumArray(arr.length - 1)); // Output: 15
```

---

## Sum of All Odd Numbers in an Array

```javascript
const arr = [1, 2, 3, 4, 5];

function sumOdd(n) {
  const isOdd = arr[n] % 2 !== 0;
  if (n === 0) {
    return isOdd ? arr[n] : 0;
  }
  return (isOdd ? arr[n] : 0) + sumOdd(n - 1);
}

console.log(sumOdd(arr.length - 1)); // Output: 9
```

---

## Factorial Using Recursion

```javascript
function factorial(n) {
  if (n === 1) return 1;
  return n * factorial(n - 1);
}

console.log(factorial(5)); // Output: 120
```

---

## Power of Two (Recursive Check)

An integer `n` is a power of two if there exists an integer `x` such that `n === 2^x`.

Rules:

1. Repeatedly dividing by 2 should end at 1 if it is a power of two.
2. Any odd number (other than 1) cannot be a power of two.
3. If division by 2 ever drops below 1, it's not a power of two.

```javascript
var isPowerOfTwo = function (n) {
  if (n === 1) return true;
  if (n < 1 || n % 2 !== 0) return false;
  return isPowerOfTwo(n / 2);
};

console.log(isPowerOfTwo(1)); // true (2^0)
console.log(isPowerOfTwo(16)); // true (2^4)
console.log(isPowerOfTwo(6)); // false
```

---

## Fibonacci Series

**Series:** `[0, 1, 1, 2, 3, 5, 8, 13, 21, ...]`

**Formula:** $f(n) = f(n-1) + f(n-2)$

### Recursive Approach

```javascript
var fib = function (n) {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
};

console.log(fib(5)); // Output: 5
```

The recursion works backward until it hits the base case, then returns and performs addition.

**Time Complexity:** O(2^n) - Exponential (inefficient)  
**Space Complexity:** O(n) - Call stack depth

#### Example Breakdown:

```
fib(5) = fib(4) + fib(3)
fib(4) = fib(3) + fib(2)
fib(3) = fib(2) + fib(1)
fib(2) = fib(1) + fib(0) = 1
fib(1) = 1
fib(0) = 0
```

> **Note:** This can be optimized using Dynamic Programming to reduce time complexity to O(n).

### Real-World Example: Rabbit Problem

**Problem:** 2 rabbits multiply by 2 every month. How many rabbits will there be after n months?

This follows the Fibonacci sequence where each pair produces a new pair, and the population grows exponentially following the Fibonacci pattern.
