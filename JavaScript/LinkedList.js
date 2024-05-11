class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  delete(data) {
    if (!this.head) {
      console.log("List is empty");
      return;
    }
    if (this.head.data === data) {
      this.head = this.head.next;
      return;
    }
    let current = this.head;
    let prev = null;
    while (current && current.data !== data) {
      prev = current;
      current = current.next;
    }
    if (!current) {
      console.log("Element not found");
      return;
    }
    prev.next = current.next;
  }

  search(data) {
    let current = this.head;
    while (current) {
      if (current.data === data) {
        console.log("Element found");
        return true;
      }
      current = current.next;
    }
    console.log("Element not found");
    return false;
  }

  display() {
    let current = this.head;
    while (current) {
      process.stdout.write(current.data + " -> ");
      current = current.next;
    }
    console.log("null");
  }
}

// Example usage:
const ll = new LinkedList();
ll.insert(1);
ll.insert(2);
ll.insert(3);
ll.insert(4);
ll.display();  // Output: 1 -> 2 -> 3 -> 4 -> null
ll.delete(3);
ll.display();  // Output: 1 -> 2 -> 4 -> null
ll.search(2);  // Output: Element found
ll.search(5);  // Output: Element not found
