# Linked List

Linear data structure where nodes are linked together by a reference field.

## Key Concepts

- **Pointer:** Points to the next node
- **Head:** Starting node of the linked list (node with value and pointer)
- **Tail:** End node that has a value and pointer to `null`

## Types of Linked Lists

### 1. Singly Linked List

Each node has a value and a pointer to the next node.

### 2. Doubly Linked List

Each node has a value and **two pointers**: one to the next node and one to the previous node.  
`Node = value + 2 pointers`

## Linked List vs Array

Linked lists are good for frequent insertion and deletion operations.

| Feature                    | Linked List              | Array            |
| -------------------------- | ------------------------ | ---------------- |
| Structure                  | Linear                   | Linear           |
| Memory                     | Non-contiguous           | Contiguous       |
| Size                       | Dynamic (changes easily) | Fixed size       |
| Node/Element               | Value + pointer          | Just value       |
| Getting element            | Hard                     | Easy             |
| Insertion/Deletion         | Easy                     | Complex          |
| Memory efficiency          | Extra memory needed      | Memory efficient |
| Time complexity (fetching) | O(n)                     | O(1)             |

## Use Cases

| If you want to...                               | Use         |
| ----------------------------------------------- | ----------- |
| Access elements by index fast                   | Array       |
| Insert/Delete at head or tail frequently        | Linked List |
| Memory efficient storage for static size        | Array       |
| Avoid resizing overhead or unknown size upfront | Linked List |
| Do lots of traversal / manipulation             | Linked List |

---

## Design Linked List (Singly)

### 1. Creating a Node

```javascript
function Node(value) {
  this.value = value;
  this.next = null;
}

let newNode = new Node(5);
```

### 2. Creating a Linked List

````javascript
function MyLinkedList() {
  this.head = null;
  this.size = 0;
}

---

## Adding Nodes to a Linked List

### 1. addAtHead(5)

Example: head -> 1 -> 2 -> 3 -> 4 -> null

```javascript
function addAtHead(value) {
  let newNode = new Node(value);
  newNode.next = this.head; // 5 -> 1
  this.head = newNode; // head -> 5
  this.size++;
}
````

Resulting list: head -> 5 -> 1 -> 2 -> 3 -> 4 -> null

### 2. addToTail(5)

Example: head -> 1 -> 2 -> 3 -> 4 -> null

```javascript
function addToTail(value) {
  let newNode = new Node(5);
  if (this.head == null) {
    this.head = newNode;
  } else {
    let current = this.head;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = newNode;
  }
  this.size++;
}
```

Steps:

- Create new node
- Reach the last node
- Link last to new node
- Handle corner cases
- Increase size

### 3. addAtIndex(5)

Steps:

- Create a new node
- Move to `(index - 1)` (current)
- `newNode.next = current.next`
- `current.next = newNode`
- Handle corner cases
- Increase size

```javascript
addAtIndex = function (index, val) {
  let newNode = new Node(val);
  let current = this.head;
  if (index == 0) {
    this.addAtHead(val);
    return;
  } else if (index === this.size) {
    this.addAtTail(val);
    return;
  } else {
    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }
    newNode.next = current.next;
    current.next = newNode;
    size++;
  }
};
```

---

## Final Solution

```javascript
function Node(value) {
  this.value = value;
  this.next = null;
}

var MyLinkedList = function () {
  this.head = null;
  this.size = 0;
};

/**
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
  if (index < 0 || index >= this.size) return -1;
  let current = this.head;
  for (let i = 0; i < index; i++) {
    current = current.next;
  }
  return current.value;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  let newNode = new Node(val);
  newNode.next = this.head;
  this.head = newNode;
  this.size++;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  let newNode = new Node(val);
  if (this.head == null) {
    this.head = newNode;
  } else {
    let current = this.head;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = newNode;
  }
  this.size++;
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  if (index < 0 || index > this.size) return;
  let newNode = new Node(val);
  let current = this.head;
  if (index == 0) {
    this.addAtHead(val);
    return;
  } else if (index === this.size) {
    this.addAtTail(val);
    return;
  } else {
    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }
    newNode.next = current.next;
    current.next = newNode;
    this.size++;
  }
};

/**
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index < 0 || index >= this.size) return;
  if (index == 0) this.head = this.head.next;
  else {
    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }
    current.next = current.next.next;
  }
  this.size--;
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
```

---

## Middle of the Linked List

Slow and fast pointer approach: the slow pointer moves 1 step while the fast pointer moves 2. When the fast pointer reaches `null`, the slow pointer points to the middle node.

- fast = 2x
- slow = x

**Time Complexity:** O(n)  
**Space Complexity:** O(1)

```javascript
var middleNode = function (head) {
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow?.next;
    fast = fast?.next?.next;
  }
  return slow;
};
```

---

## Reverse the Linked List

We can change the pointer to point in a different order by making `current.next = prev`. We need to maintain the previous element as we traverse until current reaches `null`.

**Original:**  
`Head -> 1 -> 2 -> 3 -> 4 -> 5 -> null`

**Reversed:**  
`null <- 1 <- 2 <- 3 <- 4 <- 5 <- Head`

```javascript
var reverseList = function (head) {
  let prev = null;
  let current = head;

  while (current) {
    let temp = current.next;
    current.next = prev;
    prev = current;
    current = temp;
  }
  head = prev;
  return head;
};
```

---

## Linked List Cycle

### Approach 1: Using HashTable (Set)

Use a Set for fast retrieval. If we see the same node again, there's a cycle.

- `set.has(a)` - check if node exists
- `set.add(a)` - add node to set

Finding an element in a Set has O(1) average time complexity (vs O(n) for arrays).

```javascript
var hasCycle = function (head) {
  let current = head;
  let setNode = new Set();
  while (current) {
    if (setNode.has(current)) {
      return true;
    }
    setNode.add(current);
    current = current.next;
  }
  return false;
};
```

**Time Complexity:** O(n)  
**Space Complexity:** O(n)

### Approach 2: Floyd's Algorithm (Slow and Fast Pointers)

If a fast runner and a slow runner are both in circular motion with different speeds, they will eventually meet at the same point.

- **Slow:** moves 1 step
- **Fast:** moves 2 steps

If there is a cycle, the slow pointer will eventually equal the fast pointer.

```javascript
var hasCycle = function (head) {
  let slow = head;
  let fast = head?.next;
  while (fast) {
    slow = slow?.next;
    fast = fast?.next?.next;
    if (slow == fast) return true;
  }
  return false;
};
```

---

## Palindrome Linked List

Check if a linked list is a palindrome by comparing values from start and end.

### Approach 1: Convert to Array

Convert the linked list to an array and check if it reads the same forward and backward.

**Time Complexity:** O(n)  
**Space Complexity:** O(n)

```javascript
var isPalindrome = function (head) {
  if (!head || !head.next) return true;

  let arrayVal = [];
  let current = head;
  while (current) {
    arrayVal.push(current.val);
    current = current.next;
  }

  let start = 0;
  let end = arrayVal.length - 1;
  while (start < end) {
    if (arrayVal[start] !== arrayVal[end]) {
      return false;
    }
    start++;
    end--;
  }
  return true;
};
```

### Approach 2: Find Middle, Reverse, and Compare

1. Find the middle element using slow and fast pointers
2. Reverse the second half
3. Compare nodes from start and end

**Time Complexity:** O(n)  
**Space Complexity:** O(1)

```javascript
var isPalindrome = function (head) {
  if (!head || !head.next) return true;

  // Find the middle element
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // Reverse the second half
  let prev = null;
  let current = slow;
  while (current) {
    let temp = current.next;
    current.next = prev;
    prev = current;
    current = temp;
  }

  // Check for palindrome
  let firstNode = head;
  let secondNode = prev;
  while (secondNode) {
    if (firstNode.val != secondNode.val) {
      return false;
    }
    firstNode = firstNode.next;
    secondNode = secondNode.next;
  }

  return true;
};
```

---

## Intersection of Two Linked Lists

Find the node at which two singly linked lists intersect. If they don't intersect, return `null`.

Reference: [LeetCode Problem](https://leetcode.com/problems/intersection-of-two-linked-lists/description/)

### Brute Force Approach

Take one element from `headA` and check if it exists in `headB`. Continue until a match is found.

- `headA` size: M
- `headB` size: N

**Time Complexity:** O(M × N)  
**Space Complexity:** O(1)

### Best Approach: Using HashMap/Set

1. Put all nodes from `headB` into a Set
2. Loop through each node in `headA` and check if it exists in the Set
3. Searching in a Set is O(1) vs O(n) for linked list traversal

**Time Complexity:** O(M + N)  
**Space Complexity:** O(N)

```javascript
var getIntersectionNode = function (headA, headB) {
  let setVal = new Set();

  // Put all nodes of headB into Set
  let current = headB;
  while (headB) {
    setVal.add(headB);
    headB = headB.next;
  }

  // Check each node of headA with Set
  while (headA) {
    if (setVal.has(headA)) {
      return headA;
    }
    headA = headA.next;
  }

  return null;
};
```

---

## Remove Linked List Elements

Given the head of a linked list and an integer `val`, remove all nodes where `Node.val == val` and return the new head.

### Challenge

Removing elements is straightforward in the middle using `prev.next = prev.next.next`, but this approach fails when the head node itself needs to be removed.

### Solution: Sentinel Node

A **sentinel node** (guard node) is placed at the front of the list to act as a watch point. This allows us to handle head removal uniformly with other nodes.

```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  // Create a sentinel node pointing to the head
  let sentinelNode = new ListNode();
  sentinelNode.next = head;

  let prev = sentinelNode;
  while (prev) {
    if (prev?.next?.val == val) {
      // Skip the node with matching value
      prev.next = prev.next.next;
    } else {
      // Move to the next node
      prev = prev.next;
    }
  }

  // Return the actual head (skipping the sentinel)
  return sentinelNode.next;
};
```

**How it works:**

1. Create a sentinel node and point it to the original head
2. Use `prev` starting from the sentinel node
3. When a node to remove is found, skip it with `prev.next = prev.next.next`
4. Return `sentinelNode.next` as the new head
