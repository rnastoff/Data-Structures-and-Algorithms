class Node {
  constructor(value) {
    this.val = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(value) {
    var newNode = new Node(value);
    
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    }
    else {
      var temp = this.first;
      this.first = newNode;
      newNode.next = temp;
    }
    return ++this.size;
  }

  pop() {
    if (!this.first) return null;

    var temp = this.first;
    console.log(temp);
    if (this.first === this.last) {          //case when only 1 item 
      this.last = null;
    }
    this.first = this.first.next;

    this.size--;
    return temp.val;
  }

}


let stack = new Stack();
stack.push("Apple");
stack.push("Banana");
stack.push("Cherry");
console.log(stack);
