/**
 * Binary Search Tree
 * @description is a sorted binary tree data structure that is sorted based on a node's key with values lower than (left) greater than (right), and no duplicates
 */

class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  add(data) {
    const node = this.root;

    if (!node) {
      this.root = new Node(data);
      return;
    } else {
      const searchTree = node => {
        if (data < node.data) {
          if (!node.left) {
            this.root.left = new Node(data);
            return;
          } else {
            return searchTree(node.left);
          }
        } else if (data > node.data) {
          if (!node.right) {
            node.right = new Node(data);
            return;
          } else {
            return searchTree(node.right);
          }
        } else {
          return null;
        }
      };
      return searchTree(node);
    }
  }
}

const b = new BST();

b.add(1);
b.add(100);
b.add(2);
b.add(200);

console.log(b);
