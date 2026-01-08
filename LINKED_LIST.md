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

```

```
