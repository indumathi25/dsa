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

```javascript
function MyLinkedList() {
  this.head = null;
  this.size = 0;
}
```
