class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    var newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
      return this;
    } 
    
    var current = this.root;

    while(true) {
      if (value === current.value) return undefined;  //duplicate case
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      }
      else if (value > current.value) {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right
      }
    }
  }

  contains(value) {
    if (this.root === null) return undefined;
    
    var current = this.root;
    var found = false;

    while(current && !found) {
      if (value < current.value) {
        current = current.left;
      }
      else if (value > current.right) {
        current = current.right;
      }
      else {
        return true;
      }
    }
    
    return false;
  }

  breadthFirstSearch() {
    var data = [];
    var queue = [];
    var node = this.root;

    queue.push(node);                         //Add the root to the queue

    while (queue.length) {                    //0 is false
      node = queue.shift();
      data.push(node);                        //Move 1st element from queue to data

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    return data;
  }

  dfsPreOrder() {
    var data = [];
    var current = this.root;

    function traverse(node) {
      data.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }

    traverse(current);
    return data;
  }

  dfsPostOrder() {
    var data = [];

    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.value);
    }
    
    traverse(this.root);

    return data;
  }

  dfsInOrder() {
    var data = [];

    function traverse(node) {
      if (node.left) traverse(node.left);
      data.push(node.value);
      if (node.right) traverse(node.right);      
    }
    
    traverse(this.root);
    return data;
  }


}

let bst = new BinarySearchTree();
bst.insert(50);
bst.insert(100);
bst.insert(25);
let result = bst.dfsInOrder();
console.log(result);
