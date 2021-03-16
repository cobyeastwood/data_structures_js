/* Binary Trees

  @description: A special case of a graph, which is a collection of nodes, and connections or edges between those nodes that does not contain cycles
*/

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

let a = new Node('a');
let b = new Node('b');
let c = new Node('c');
let d = new Node('d');
let e = new Node('e');
let f = new Node('f');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = f;

// In Order
// @Description: left, self, right

function inOrder(root) {
  if (!root) return;

  inOrder(root.left);
  console.log(root.data);
  inOrder(root.right);
}

// Pre Order
// @Description: self, left, right

function preOrder(root) {
  if (!root) return;

  console.log(root.data);
  preOrder(root.left);
  preOrder(root.right);
}

// Post Order
// @Description: left, right, self

function postOrder(root) {
  if (!root) return;

  postOrder(root.left);
  postOrder(root.right);
  console.log(root.data);
}

inOrder(a);
