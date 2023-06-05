class Node {
  constructor(value){
    this.value = value
    this.next = null
  }
}

class Stack {
  constructor(){
    this.first = null
    this.last = null
    this.size = 0
  }

  pop(){
    if (!this.first) {
      return null
    }
    const removedNode = this.first

    if (this.size === 1) {
      this.last = null
    }

    this.first = this.first.next
    this.size--

    return removedNode.value
  }

  push(value){
    const newNode = new Node(value)

    if (!this.first) {
      this.first = newNode
      this.last = newNode
      return this.size
    }

    const oldfirst = this.first
    this.first = newNode
    this.first.next = oldfirst

    return ++this.size
  }

  print(){
    let current = this.first;

    while(current){
      console.log(current.value);
      current = current.next
    }
  }
}


const stack = new Stack();
stack.push(1)
stack.push(3)
stack.push(5)
stack.push(6)
stack.pop()
stack.print()