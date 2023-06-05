class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(){
    this.head = null
    this.tail = null
    this.length = 0
  }

  push(value){
    const newNode = new Node(value)

    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail.next = newNode
      newNode.prev = this.tail
      this.tail = newNode
    }


    this.length++
    return this
  }

  pop(){
    const removeNode = this.tail
    if (!this.head) {
      return undefined
    }

    if (this.length === 1) {
      this.head = null
      this.tail = null
    }

    if (this.length > 1) {
      this.tail = this.tail.prev
      this.tail.next = null
    }

    this.length--
    return removeNode
  }

  shift(){
    if (!this.head) {
      return undefined
    }
    const removedNode = this.head

    if (this.length === 1) {
      this.head = null
      this.tail = null
    }

    if (this.length > 1) {
      this.head = this.head.next
      this.head.prev = null
      removedNode.next = null
    }

    this.length--
    return removedNode
  }

  unshift(value){
    const newNode = new Node(value)

    if (!this.head) {
      this.head = newNode
      this.tail = newNode
      return this
    }

    const oldHead = this.head
    this.head = newNode
    this.head.next = oldHead
    this.head.prev = null
    this.length++

    return this
  }

  get(idx){
    const mean = Math.round(this.length / 2)
    let count = 0
    let current = this.head
    
    if (idx < 0 || idx >= this.length) {
      return null
    }

    if (idx > mean){
      current = this.tail
      count = this.length - 1
      while (count !== idx) {
        current = current.prev
        count--
      }
    } else{
      while(count !== idx){
        current = current.next
        count++
      }
    }

    return current
  }

  set(idx, value){
    const foundNode = this.get(idx)
    foundNode.value = value

    return foundNode
  }

  insert(idx, value){
    if (idx > this.length) {
      return undefined
    }
    
    if (idx === 0) {
      return !!this.unshift(value)
    }
    
    if (idx === this.length) {
      return !!this.push(value)
    } 

    const insertedNode = new Node(value)
    const preNode = this.get(idx - 1)
    const nextNode = preNode.next
    
    preNode.next = insertedNode
    insertedNode.prev = preNode
    insertedNode.next = nextNode
    
    return this
  }

  remove(idx){
    if (idx > this.length) {
      return undefined
    }
    
    if (idx === 0) {
      return !!this.shift()
    }
    
    if (idx === this.length - 1) {
      return !!this.pop()
    } 

    const removedNode = this.get(idx)
    const preNode = removedNode.prev
    const nextNode = removedNode.next
    
    removedNode.next = null
    removedNode.prev = null
    preNode.next = nextNode
    nextNode.prev = preNode
  
    return removedNode
  }

  print(){
    let current = this.head;

    while(current){
      console.log(current.value);
      current = current.next
    }
  }
}

const list = new DoublyLinkedList()
list.push(12)
list.push(10)
list.push(3)
list.push(1)
list.push(1)
// list.pop()
// list.shift()
// list.unshift(2)
list.get(4)
list.set(4, 100000)
list.insert(3, "yolo")
list.remove(0)
list.print()
