class Node {
  constructor(value){
    this.value = value
    this.next = null
  }
}

// FIFO
class Queue {
  constructor(){
    this.first = null
    this.last = null
    this.size = 0
  }

  // Add to the end
  enqueue(value){
    const newNode = new Node(value)

    if(!this.first){
      this.first = newNode
      this.last = newNode
    } else {
      this.last.next = newNode
      this.last = newNode
    }

    return ++this.size
  }

  // Remove from the first
  dequeue(){
    const oldFirst = this.first

    if (!this.first) {
      return null
    }

    if (this.size === 1) {
      this.last = null
    }

    this.first = this.first.next
    this.size--
    return oldFirst
  }

  print(){
    let current = this.first;
    while(current){
      console.log(current.value);
      current = current.next
    }
  }
}

const queue = new Queue()
queue.enqueue(3)
queue.enqueue(2)
queue.enqueue(1)
queue.dequeue()
queue.dequeue()
queue.print()