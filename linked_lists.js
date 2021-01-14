// Linked List Data Structure

// @BigO O(n)
// @BigOmega Ω(n)

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  add(data) {
    this.head = new Node(data, this.head);
    this.length++;
  }

  addLast(data) {
    let node = new Node(data);

    if (!this.head) {
      // Place Node at index 0
      this.head = node;
    } else {
      let current = this.head; // Set head Node to current
      while (current.next) {
        // Iterate Node
        current = current.next;
      }
      // Once we reach null insert Node
      current.next = node;
    }

    this.length++;
  }

  addAt(data, index) {
    if (index > 0 && index > this.length) {
      return;
    }

    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }

    const node = new Node(data);

    let previous;

    let current = this.head;
    let c = 0;

    while (c < index) {
      previous = current; // Add Nodes before index
      current = current.next; // Add Nodes after index
      c++;
    }

    node.next = current; // Add new Node at index
    previous.next = node;

    this.length++;
  }

  getAt(index) {
    let current = this.head;
    let c = 0;

    while (current) {
      if (c === index) {
        console.log(current.data);
      }
      current = current.next;
      c++;
    }

    return null;
  }

  removeAt(index) {
    if (index > 0 && index > this.length) {
      return;
    }

    let previous;
    let current = this.head;

    let c = 0;

    if (index === 0) {
      this.head = current.next;
    } else {
      while (c < index) {
        previous = current;
        current = current.next;
        c++;
      }
      previous.next = current.next;
    }

    this.length--;
  }

  clear() {
    this.head = null;
    this.length = 0;
  }

  print() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

let l = new LinkedList();

// Add
l.add(100);
l.add(200);
l.add(300);

// Add Last
l.addLast(900);

// Add At
l.addAt(1000, 1);

// Remove At
l.removeAt(0);

// Get At
l.getAt(2);

// Print
l.print();
