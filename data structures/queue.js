class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor(value) {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val) {                     //add to tail
    var newNode = new Node(val);

    if (!this.first) {               //if queue is empty
      this.first = newNode;
      this.last = newNode;
    }
    else {
      this.last.next = newNode;
      this.last = newNode;
    }

    return ++this.size;
  }

  dequeue() {                        //remove from head
    if (!this.first) return null;

    var temp = this.first;

    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }

}

let q = new Queue();
q.enqueue("Apple");
q.enqueue("Banana");
q.enqueue("Cherry");
console.log(q);