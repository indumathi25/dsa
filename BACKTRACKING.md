# Backtracking

Backtracking uses **DFS (Depth First Search)**. We can also use Branch and Bounds algorithm to solve this.

Backtracking is based on recursion. It’s a recursive algorithmic technique for solving problems incrementally by trying partial solutions and then abandoning them (backtracking) if they fail to satisfy constraints.

Exploring all the possibilities but being smart by abandoning wrong paths early.

> Example: Like trying all the paths in a maze and going back if you hit a wall.

## When to use Backtracking?

- You want to explore all combinations / permutations / subsets
- When there is a clear way to validate a partial solution
- Number of combinations is too large to brute force, so you abandon the invalid ones early

Try a choice → works? → continue → if not, backtrack

---

## Example: Combination Sum

Given numbers `[2, 3, 5, 10, 12]`, sum = 15

**Answers:** `[2, 3, 10]`, `[5, 10]`, `[3, 12]`

**Solution Steps:**

- Label the numbers as x₀, x₁, x₂, x₃, x₄
- Find all possible combinations
- Think carefully about the choices
- Develop the state space tree (recursion tree, or path inside recursion) to find the solution
- Initialize Sum = 0
- Now, we have to make a decision: whether we want to include 2 or not

---

## Use Cases

- Subset
- Combinations
- Permutations
- N-Queens
- A lot of choices and decisions, and pruning early using bounding functions

---

## Subsets

Given an integer array `nums` of unique elements, return all possible subsets (the power set). The solution set must not contain duplicate subsets. Return the solution in any order.

> [1,2] [2,1] — here [2,1] is duplicate

If we try to fill the array in incremental way, we can avoid the duplicates.

**Note:**

- `console.log(path);` logs object references, not snapshots
- Correct way to log during backtracking: `console.log("path-after-push", [...path]);`

```javascript
var subsets = function (nums) {
  let result = [];
  function backtrack(path, start) {
    console.log('start->', start, 'path->', [...path]);
    result.push([...path]);
    console.log('result', [...result]);
    for (let i = start; i < nums.length; i++) {
      console.log('i=', i, 'path=', [...path]);
      path.push(nums[i]);
      console.log('path-after-push', [...path]);
      backtrack(path, i + 1);
      path.pop();
      console.log('path-after-pop', [...path]);
    }
  }
  backtrack([], 0);
  return result;
};

console.log('subsets', subsets([1, 2, 3]));
```

---

## Combinations

Given two integers `n` and `k`, return all possible combinations of `k` numbers chosen from the range `[1, n]`.

Input: n = 4, k = 2  
Output: [[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]

```javascript
var combine = function (n, k) {
  let result = [];
  const backtrack = (start, path) => {
    if (path.length == k) {
      result.push([...path]);
      return;
    }
    for (let i = start; i < n; i++) {
      path.push(i + 1);
      backtrack(i + 1, path);
      path.pop();
    }
  };
  backtrack(0, []);
  return result;
};
```

---

## Generating Permutations with Nearby Characters on Keyboard

```javascript
function generatePermutations(word, keyboard) {
  const result = [];
  function backtrack(index, path) {
    // Base case: full word built
    if (index === word.length) {
      result.push(path.join(''));
      return;
    }
    const char = word[index];
    const neighbors = keyboard[char] || [char];
    for (let nextChar of neighbors) {
      path.push(nextChar);
      backtrack(index + 1, path);
      path.pop(); // backtrack
    }
  }
  backtrack(0, []);
  return result;
}
```
